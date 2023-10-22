import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productList' element={<ProductList />} />
        </Routes>
    </>
  );
}

export default App;
