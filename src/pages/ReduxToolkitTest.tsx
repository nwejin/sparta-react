import { useState } from 'react';
import { useDispatch, useSelector } from '../redux/hooks';
import {
  addNumber,
  minusNumber,
  __addNumber,
  __minusNumber,
} from '../redux/modules/counter';
import { RootState } from '../redux/config/configStore';

const ReduxToolKitTest = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state: any) => state.counter.number);

  const [number, serNumber] = useState(0);

  const onClickAddNumber = () => {
    dispatch(__addNumber({ type: 'ADD_NUMBER_WAIT', payload: number }));
  };

  const onClickMinusNumber = () => {
    dispatch(__minusNumber({ type: 'ADD_NUMBER_WAIT', payload: number }));
  };

  return (
    <div>
      <h1>Redux Toolkit Test</h1>
      <p>{counter}</p>

      <input
        type="number"
        name=""
        id=""
        onChange={(e) => {
          serNumber(Number(e.target.value));
        }}
      />
      <button onClick={onClickAddNumber}>더하기</button>
      <button onClick={onClickMinusNumber}>빼기</button>
    </div>
  );
};

export default ReduxToolKitTest;
