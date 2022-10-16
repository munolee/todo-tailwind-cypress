import React, { FC } from "react";
import { TodoItemType } from "../types/todoType";
import { DeleteIcon } from "./icons";

const TodoItem: FC<TodoItemType & { onDelete: () => void }> = ({
  title,
  content,
  onDelete,
}) => {
  return (
    <div className="flex-container w-full mt-2">
      <div className="todo-item">
        <div className="text-gray-900">{title}</div>
        <div className="text-gray-500">{content}</div>
        <div className="cursor-pointer" onClick={() => onDelete()}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
