import { FC, useState } from "react";
import { TodoItemType } from "../../types/todoType";
import TodoItem from "../../components/TodoItem";
import InputTodo from "../../components/InputTodo";

const TODO: FC = () => {
  //TODO pages 경로에서 로직 분리
  const [list, setList] = useState<TodoItemType[]>([]);

  const setTodo = (todoItem: TodoItemType) => {
    setList([...list, todoItem]);
  };

  const deleteTodo = (index: number) => {
    const _list = [...list];
    _list.splice(index, 1);
    setList(_list);
  };

  return (
    <div className="layout-container">
      <div className="todo-list">
        {list.map((item, index) => {
          return (
            <TodoItem
              key={index}
              title={item.title}
              content={item.content}
              onDelete={() => deleteTodo(index)}
            />
          );
        })}
      </div>
      <div>
        <InputTodo setTodo={setTodo} />
      </div>
    </div>
  );
};

export default TODO;
