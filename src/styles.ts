import styled from 'styled-components';

interface Props {
  back: string;
}

const testBox = styled.div<Props>`
  display: flex;
  border: 1px solid ${(props) => props.back};
  background-color: ${(props) => props.back};
  color: white;
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
  width: 10rem;
  margin-top: 1rem;
  align-items: center;
  box-sizing: border-box;
  .userInfo {
    display: flex;
    flex-direction: column;
    width: 8rem;
    p {
      padding: 0;
      margin: 0;
    }
  }
  button {
    color: white;
    background: none;
    border: none;
    width: 2rem;
  }
`;

const mainBox = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`;

const inputBox = styled.div`
  margin-top: 1rem;
  width: 20rem;
  input {
    width: 15rem;
    margin-left: 1rem;
  }
`;

const btn = styled.div`
  margin-top: 1rem;
  width: 10rem;
  padding: 0.2rem 0.5rem;
  box-sizing: border-box;
`;

export const style = {
  testBox,
  mainBox,
  inputBox,
  btn,
};
