type TodoTitleType = string;
type TodoContentType = string;

export type TodoItemType = {
  title: TodoTitleType;
  content: TodoContentType;
};

export type InputTodoType = {
  setTodo: (todoItem: TodoItemType) => void;
};
