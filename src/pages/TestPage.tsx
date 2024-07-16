import React, { useState } from 'react';

import User from '../user';
import { style } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
// import { MINUS_ONE } from '../redux/modules/counter';
// import { RootState } from '../redux/config/configStore';
// import { plusOne, plusN, minusN } from '../redux/modules/counter';

const TestPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      age: 30,
      name: '송중기',
    },
    {
      id: 2,
      age: 24,
      name: '송강',
    },
    {
      id: 3,
      age: 21,
      name: '김유정',
    },
    {
      id: 4,
      age: 29,
      name: '구교환',
    },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const clickBtnHandler = () => {
    console.log(name, age);

    // 새 데이터 생성
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };

    setUsers([...users, newUser]);
  };

  const clickRemove = (id: number) => {
    const newUser = users.filter((user) => user.id !== id);
    setUsers(newUser);
  };

  const dispatch = useDispatch();
  // const counter = useSelector((state: RootState) => state.counter);

  const [number, setNumber] = useState(1);

  return (
    <style.mainBox>
      <style.inputBox>
        <label htmlFor="">이름</label>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </style.inputBox>
      <style.inputBox>
        <label htmlFor="">나이</label>
        <input
          type="text"
          name=""
          id=""
          value={age}
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
        />
      </style.inputBox>
      <style.btn onClick={clickBtnHandler}>add</style.btn>
      <div>
        {users.map((value) => {
          return <User user={value} key={value.id} remove={clickRemove} />;
        })}
      </div>
      {/* 
      <div>{counter.number}</div>
      <input
        type="number"
        name=""
        id=""
        value={number}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(plusN(number));
        }}
      >
        +N
      </button>
      <button
        onClick={() => {
          dispatch(minusN(number));
        }}
      >
        -N
      </button>
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: MINUS_ONE,
          });
        }}
      >
        -
      </button> */}
    </style.mainBox>
  );
};

export default TestPage;
