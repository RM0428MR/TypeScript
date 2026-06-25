type Priority = "low" | "medium" | "high";
type Status = "todo" | "in_progress" | "done";

type User = {
  id: number;
  name: string;
  email?: string;
};

type Task = {
  readonly id: number;
  title: string;
  priority: Priority;
  status: Status;
  assignee?: User;
};

type TaskStats = Record<Status, number>;

const statusFilter = document.getElementById("status-filter") as HTMLSelectElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;
const statsArea = document.getElementById("stats-area") as HTMLDivElement;

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
const filterTasks = (status: Status | "all"): Task[] =>
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
  statsArea.textContent = `未着手: ${stats.todo} / 進行中: ${stats.in_progress} / 完了: ${stats.done}`;
};

statusFilter.addEventListener("change", (event: Event) => {
  const { value } = event.target as HTMLSelectElement;
  renderTasks(filterTasks(value as Status | "all"));
});

loadTasks().then(() => {
  renderTasks(filterTasks("all"));
  renderStats(calcStats(tasks));
});
