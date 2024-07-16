import Home from 'pages/Home';
import TestPage from 'pages/TestPage';
import WorksPage from 'pages/Works';
import WorkPage from 'pages/Work';
import JsonPage from 'pages/JsonApiPage';
import ReduxToolKitTest from 'pages/ReduxToolkitTest';
import AxiosPage from 'pages/AxiosTest';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/works/:id" element={<WorkPage />} />
        <Route path="/JSON" element={<JsonPage />} />
        <Route path="/toolkit" element={<ReduxToolKitTest />} />
        <Route path="/axiostest" element={<AxiosPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
