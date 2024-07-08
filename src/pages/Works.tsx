import { Link } from 'react-router-dom';
import { data } from '../shared/data';

const Work = () => {
  return (
    <div>
      <p>WORKS</p>
      {data.map((data: any) => (
        <Link to={`/works/${data.id}`}>
          <div key={data.id}>{data.todo}</div>
        </Link>
      ))}
    </div>
  );
};

export default Work;
