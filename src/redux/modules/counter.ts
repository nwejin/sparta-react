// 타입스크립트 타입 지정

interface CounterAction {
  type: typeof PLUS_ONE | typeof MINUS_ONE | typeof PLUS_N | typeof MINUS_N;
  payload?: number; // PLUS_N 액션의 경우 숫자 값을 추가로 받을 수 있도록 합니다.
}

interface CounterState {
  number: number;
}

const PLUS_ONE = 'PLUS_ONE';
export const MINUS_ONE = 'MINUS_ONE';
const PLUS_N = 'PLUS_N';
const MINUS_N = 'MINUS_N';

// action creator : action value를 return하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const plusN = (payload: number) => {
  return {
    type: PLUS_N,
    payload: payload,
  };
};

export const minusN = (payload: number) => {
  return {
    type: MINUS_N,
    payload: payload,
  };
};

// 리듀서: 'state'에 변화를 일으키는 함수
// state를 action의 type에 따라 변경하는 함수
// 초기 상태값(state)
const initialState: CounterState = {
  number: 0,
};

// input: state, action
// action 객체라는 것은 action type을 payload만큼 처리하는 것이다

const counter = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    case PLUS_N:
      return {
        number: state.number + (action.payload || 0),
      };
    case MINUS_N:
      return {
        number: state.number - (action.payload || 0),
      };
    default:
      return state;
  }
};

export default counter;
