import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/page-not-found" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to={'/page-not-found'} />} />
    </Routes>
  );
}

export default App;
