import Home from 'pages/Home';
import TestPage from 'pages/TestPage';
import WorksPage from 'pages/Works';
import WorkPage from 'pages/Work';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/works/:id" element={<WorkPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
