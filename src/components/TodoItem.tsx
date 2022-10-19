import { FC } from "react";
import { TodoItemHandlerType, TodoItemType } from "../types/todoType";
import { DeleteIcon } from "./icons";

const TodoItem: FC<TodoItemType & TodoItemHandlerType> = ({
  title,
  content,
  status = "progress",
  onDelete,
  onComplete,
}) => {
  return (
    <div className="flex-container w-full mt-2">
      <div className={"todo-item " + status} onClick={() => onComplete()}>
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
