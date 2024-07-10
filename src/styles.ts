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

const PaginationContainer = styled.div`
  /* background-color: red; */
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: center;
  .pagination {
    width: 90%;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      display: flex;
      align-items: center;
    }
    span {
      /* font-weight: 700; */
      font-size: 0.8rem;
    }
  }
  .pagination__link {
    display: flex;
    align-items: center;
    /* padding: 0rem 0.5rem; */
    background: none;
    border: none;
    height: auto;
    border-radius: 0.5rem;
  }
  .pagination__link__active {
    background-color: white;
    font-weight: 900;
    color: blue;
  }
`;

export const style = {
  testBox,
  mainBox,
  inputBox,
  btn,
  PaginationContainer,
};
