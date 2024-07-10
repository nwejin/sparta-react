import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { style } from '../styles';

interface JsonData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const JsonApiPage = () => {
  const [data, setData] = useState<JsonData[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setData([...json]);
        return console.log(json);
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 5;

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = data.slice(
    indexOfFirstPost,
    indexOfFirstPost + postsPerPage
  );

  return (
    <div>
      <h1>JSON TEST</h1>
      {currentPosts.map((item) => {
        return (
          <div
            style={{ border: '1px solid black', margin: '0.5rem' }}
            key={item.id}
          >
            <ul>
              <li>{item.id}</li>
              <li>{item.title}</li>
              <li>{item.body}</li>
            </ul>
          </div>
        );
      })}
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
        }}
      >
        <style.PaginationContainer>
          <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            pageCount={Math.ceil(data.length / postsPerPage)}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            pageLinkClassName={'pagination__link'}
            activeLinkClassName={'pagination__link__active'}
          />
        </style.PaginationContainer>
      </div>
    </div>
  );
};

export default JsonApiPage;
