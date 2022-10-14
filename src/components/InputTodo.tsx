import { FC, useState } from "react";
import { InputTodoType } from "../types/todoType";

const InputTodo: FC<InputTodoType> = ({ setTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitItem = () => {
    setTodo({ title, content });
  };

  return (
    <div>
      <input onChange={(e) => setTitle(e.target.value)} />
      <input onChange={(e) => setContent(e.target.value)} />
      <button onClick={submitItem}>저장</button>
    </div>
  );
};

export default InputTodo;
