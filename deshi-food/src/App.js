import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/home/homepage';
import Nav from './routes/Navigation/nav';
import SignIn from './routes/sign-in/sign-in';
import Shop from './routes/shop/shop';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index={true} element={<HomePage />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  );
};

export default App;