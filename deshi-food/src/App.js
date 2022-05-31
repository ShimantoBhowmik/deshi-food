import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/home/homepage';
import Nav from './routes/Navigation/nav';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;