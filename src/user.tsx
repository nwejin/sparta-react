import { style } from './styles';

interface UserProps {
  user: {
    id: number;
    age: number;
    name: string;
  };
  remove: (id: number) => void;
}

const User = ({ user, remove }: UserProps) => {
  const { id, age, name } = user;

  return (
    <style.testBox back="#333">
      <div className="userInfo">
        <p>{age}</p>
        <p>{name}</p>
      </div>
      <button
        onClick={() => {
          remove(id);
        }}
      >
        x
      </button>
    </style.testBox>
  );
};

export default User;
