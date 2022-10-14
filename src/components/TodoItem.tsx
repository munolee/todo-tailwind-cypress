import { FC } from "react";
import { TodoItemType } from "../types/todoType";

const TodoItem: FC<TodoItemType> = ({ title, content }) => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default TodoItem;
