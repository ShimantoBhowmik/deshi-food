import {Routes, Route, Outlet} from 'react-router-dom';

import HomePage from "./routes/home/homepage";

const Nav = () =>{
  return(
    <div>
    <div>
      <h1>Nav Bar</h1>
    </div>
    <Outlet/>
    </div>
  )
}

const Shop = () =>{
  return <p>Shop Shop Shop</p>
}
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav/>}>
        <Route index element={<HomePage/>} />
        <Route path='shop' element={<Shop/>} />
      </Route>
  </Routes>
  );
};

export default App;