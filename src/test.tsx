import { useState } from 'react';

interface props {
  name: string;
}

const Test = (props: props) => {
  const [fruit, setFruit] = useState('');

  return (
    <div>
      <p> {props.name}</p>
      <span>과일</span>
      <input
        type="text"
        name=""
        id=""
        value={fruit}
        onChange={(e) => {
          setFruit(e.target.value);
        }}
      />
      <span>{fruit}</span>
    </div>
  );
};

export default Test;
