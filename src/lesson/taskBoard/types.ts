export type Priority = "low" | "medium" | "high";
export type Status = "todo" | "in_progress" | "done";
export type FilterStatus = Status | "all";

export type User = {
  id: number;
  name: string;
  email?: string;
};

export type Task = {
  readonly id: number;
  title: string;
  priority: Priority;
  status: Status;
  assignee?: User;
};

export type TaskStats = Record<Status, number>;
