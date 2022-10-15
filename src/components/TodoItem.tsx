import { FC } from "react";
import { TodoItemType } from "../types/todoType";

const TodoItem: FC<TodoItemType> = ({ title, content }) => {
  return (
    <div className="flex-container w-full mt-2">
      <div className="todo-item">{title}</div>
      <div className="todo-item text-gray-500">{content}</div>
    </div>
  );
};

export default TodoItem;
