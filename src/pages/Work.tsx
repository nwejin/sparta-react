import { useParams } from 'react-router-dom';
import { data } from '../shared/data';

const Work = () => {
  const params = useParams();
  console.log(params);

  const foundData = data.find((item: any) => {
    return item.id == params.id;
  });

  console.log(foundData);

  if (!foundData) {
    return <p>데이터를 찾을 수 없습니다.</p>;
  }

  return (
    <div>
      <h1>Detail</h1>
      <p>{foundData.id}</p>
      <p>{foundData.todo}</p>
    </div>
  );
};

export default Work;
