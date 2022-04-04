import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Order from './components/Order/Order';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Body/>}></Route>
        <Route path='/home' element={<Body/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
