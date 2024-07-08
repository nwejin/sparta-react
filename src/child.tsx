interface props {
  age: number;
  name: string;
  children: string;
}

const Child = (props: props) => {
  const { age, name, children } = props;

  return (
    <div>
      <p>{age}</p>
      <p>{name}</p>
      <p>{children}</p>
    </div>
  );
};

export default Child;
