import { FC, useRef, useState } from "react";
import { InputTodoType } from "../types/todoType";

const InputTodo: FC<InputTodoType> = ({ setTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const contentInputRef = useRef<HTMLInputElement>(null);

  const submitItem = () => {
    setTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="flex-container mt-14">
      <input
        type="text"
        className="input"
        placeholder="할 일을 입력해주세요."
        maxLength={10}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="input"
        ref={contentInputRef}
        placeholder="내용을 입력해주세요."
        maxLength={20}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="button" className="btn" onClick={submitItem}>
        추가
      </button>
    </div>
  );
};

export default InputTodo;
