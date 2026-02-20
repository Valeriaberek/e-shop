import Counter from './Counter';
import Products from './Products';
import Form from './Form';
import Home from './Home';
import Signup from './Signup';
import Login from './Login'; 
import Product from './Product';
import Todo from './Todo';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/form">Form</Link> |{" "}
        <Link to="/signup">Signup</Link> |{" "}
        <Link to="/login">Login</Link>
        <Link to="/todo">Todo</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />  
        <Route path="/form" element={<Form />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
