import { FC, useState } from "react";
import { TodoItemType } from "../../types/todoType";
import Layout from "../../components/layout/Layout";
import TodoItem from "../../components/TodoItem";
import InputTodo from "../../components/InputTodo";

const TODO: FC = () => {
  //TODO pages 경로에서 로직 분리
  const [list, setList] = useState<TodoItemType[]>([]);

  const setTodo = (todoItem: TodoItemType) => {
    setList([...list, todoItem]);
  };

  return (
    <Layout>
      <div className="todo-list">
        {list.map((item, index) => {
          return (
            <TodoItem key={index} title={item.title} content={item.content} />
          );
        })}
      </div>
      <div>
        <InputTodo setTodo={setTodo} />
      </div>
    </Layout>
  );
};

export default TODO;
