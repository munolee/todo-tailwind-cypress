type TodoTitleType = string;
type TodoContentType = string;
type TodoStatusType = "progress" | "complete";

export type TodoItemType = {
  title: TodoTitleType;
  content: TodoContentType;
  status: TodoStatusType;
};

export type TodoItemHandlerType = {
  onDelete: () => void;
  onComplete: () => void;
};

export type InputTodoType = {
  setTodo: (todoItem: TodoItemType) => void;
};
