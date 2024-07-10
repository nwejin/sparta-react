import { Link, useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <p>HOME</p>
      <button
        onClick={() => {
          navigate('/test');
        }}
      >
        TEST
      </button>
      <button
        onClick={() => {
          navigate('/works');
        }}
      >
        WORK
      </button>
      <button
        onClick={() => {
          navigate('/JSON');
        }}
      >
        JSON
      </button>

      <Link to={'/test'}>test 이동</Link>
    </div>
  );
};

export default Home;
