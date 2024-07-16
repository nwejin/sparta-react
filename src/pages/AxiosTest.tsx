// import axios from 'axios';
import api from '../axios/api';
import { useEffect, useState } from 'react';

interface TodoProps {
  id: number;
  title: string;
}

const AxiosTest = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [inputValue, setInputValue] = useState({
    title: '',
  });

  const [targetId, setTargetId] = useState('');
  const [contents, setContents] = useState('');

  const fetchTodos = async () => {
    // 구조분해
    const { data } = await api.get('/todos');
    // console.log(data);
    setTodos(data);
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(inputValue);

    const newTodo = {
      id: todos.length > 0 ? Number(todos[todos.length - 1].id) + 1 : 1,
      title: inputValue.title,
    };

    await api.post('/todos', newTodo);

    setTodos([...todos, newTodo]);
    setInputValue({ title: '' });
  };

  const onDeleteHandler = async (id: number) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const onUpdateHandler = async () => {
    await api.patch(`/todos/${targetId}`, {
      title: contents,
    });
    setTodos(
      todos.map((item) => {
        if (Number(item.id) === Number(targetId)) {
          return { ...item, title: contents };
        } else {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    fetchTodos();
    console.log(todos);
  }, []);

  return (
    <div>
      <h1>AXIOS TEST</h1>
      {/*  수정 */}
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="id"
          value={targetId}
          onChange={(e) => setTargetId(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="title"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <button onClick={onUpdateHandler}>edit</button>
      </div>
      <br />
      {/* input 영역 */}
      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name=""
            id=""
            value={inputValue.title}
            onChange={(e) => {
              setInputValue({
                title: e.target.value,
              });
            }}
          />
          <button>추가</button>
        </form>
      </div>
      <br />
      {/* 데이터 영역 */}
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.id} : {todo.title}
              &nbsp;
              <button
                onClick={() => {
                  onDeleteHandler(todo.id);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AxiosTest;
