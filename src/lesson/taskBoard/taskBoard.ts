import type { Priority, Status, FilterStatus, Task, TaskStats } from "./types.ts";

const statusFilter = document.getElementById("status-filter") as HTMLSelectElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;
const messageArea = document.getElementById("message-area") as HTMLParagraphElement;
const statsArea = document.getElementById("stats-area") as HTMLDivElement;
const taskForm = document.getElementById("task-form") as HTMLFormElement;
const taskTitleInput = document.getElementById("task-title") as HTMLInputElement;
const taskPrioritySelect = document.getElementById("task-priority") as HTMLSelectElement;

const PRIORITY_LABELS: Record<Priority, string> = {
  low: "低",
  medium: "中",
  high: "高",
};

const STATUS_LABELS: Record<Status, string> = {
  todo: "未着手",
  in_progress: "進行中",
  done: "完了",
};

let tasks: Task[] = [];

/**
 * APIからタスク一覧を取得し、変数 `tasks` に格納する。
 */
const loadTasks = (): Promise<void> =>
  fetch("/api/tasks")
    .then((res) => res.json() as Promise<Task[]>)
    .then((data) => {
      tasks = data;
    });

/**
 * 指定したステータスでタスクを絞り込む。
 * `"all"` を指定した場合は全タスクをそのまま返す。
 * @param status - 絞り込むステータス、または `"all"`
 * @returns 条件に一致する {@link Task} の配列
 */
const filterTasks = (status: FilterStatus): Task[] =>
  status === "all" ? tasks : tasks.filter((t) => t.status === status);

/**
 * タスク配列からステータスごとの件数を集計する。
 * @param tasks - 集計対象の {@link Task} 配列
 * @returns ステータスをキーに件数を値とした {@link TaskStats}
 */
const calcStats = (tasks: Task[]): TaskStats =>
  tasks.reduce<TaskStats>(
    (acc, task) => {
      acc[task.status] += 1;
      return acc;
    },
    { todo: 0, in_progress: 0, done: 0 },
  );

/**
 * タスク一覧をリスト要素として DOM に描画する。
 * 既存のリスト内容はすべて置き換えられる。
 * @param tasks - 描画する {@link Task} 配列
 */
const renderTasks = (tasks: Task[]): void => {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    const title = document.createElement("span");
    const status = document.createElement("span");
    title.textContent = `[${PRIORITY_LABELS[task.priority]}] ${task.title}`;
    status.textContent = STATUS_LABELS[task.status];
    li.append(title, status);
    taskList.appendChild(li);
  });
};

/**
 * ステータス別件数をサマリーテキストとして DOM に表示する。
 * @param stats - 表示する {@link TaskStats}
 */
const renderStats = (stats: TaskStats): void => {
  statsArea.textContent = `${STATUS_LABELS.todo}: ${stats.todo} / ${STATUS_LABELS.in_progress}: ${stats.in_progress} / ${STATUS_LABELS.done}: ${stats.done}`;
};

const renderBoard = (): void => {
  renderTasks(filterTasks(statusFilter.value as FilterStatus));
  renderStats(calcStats(tasks));
};

const showErrorMessage = (message: string): void => {
  messageArea.textContent = `エラー: ${message}`;
};

statusFilter.addEventListener("change", () => {
  renderBoard();
});

taskForm.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault();

  const title = taskTitleInput.value.trim();
  const priority = taskPrioritySelect.value as Priority;

  if (!title) {
    showErrorMessage("タイトルを入力してください");
    return;
  }
  
let response: Response;

try {
  response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, priority }),
  });
} catch {
  showErrorMessage("ネットワークエラーが発生しました");
  return;
}

if (!response.ok) {
  const errorBody = (await response.json().catch(() => null)) as
    | { message?: string }
    | null;

  showErrorMessage(errorBody?.message ?? "タスクの追加に失敗しました");
  return;
}

const newTask = (await response.json()) as Task;
tasks = [...tasks, newTask];

taskTitleInput.value = "";
taskPrioritySelect.value = "low";
messageArea.textContent = "";

renderBoard();
});

loadTasks()
  .then(() => {
    renderBoard();
  })
  .catch(() => {
    showErrorMessage("タスクの取得に失敗しました");
  });