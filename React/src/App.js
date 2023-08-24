import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    
    </Routes>
    </div>
  );
}

export default App;
