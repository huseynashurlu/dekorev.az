import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import './assets/css/media.css';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Stores from './pages/Stores';
import AdminLayout from './pages/Dashboard/AdminLayout';
import AddStore from './pages/Dashboard/Store/AddStore';
import StoreList from './pages/Dashboard/Store/StoreList';
import Details from './pages/Details';
import { useEffect, useState } from 'react';
import StoreDetails from './pages/StoreDetails';
import CategoryPage from './pages/CategoryPage';
import Compare from './pages/Compare';
import CartPage from './pages/CartPage';




if(localStorage.getItem('cart') === null) {
  localStorage.setItem('cart', JSON.stringify([]))
}

 

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
        const response = await axios.get('http://localhost:5000/api/product/all-products')
        setProducts(response.data)
    }
    getProducts()
}, [products])

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout><HomePage products={products} /></Layout>} />
      <Route path="/details/:id"  element={<Layout><Details products={products} /></Layout>} />
      <Route path='/admin' element={<AdminLayout />} />
      <Route path='/admin/add-store' element={<AdminLayout><AddStore /></AdminLayout>} />
      <Route path='/admin/stores' element={<AdminLayout><StoreList /></AdminLayout>} />
      <Route path='/about' element={<Layout><About /></Layout>} />
      <Route path='/contact' element={<Layout><Contact /></Layout>} />
      <Route path='/compare' element={<Layout><Compare /></Layout>} />
      <Route path='/basket' element={<Layout><CartPage /></Layout>} />
      <Route path='/stores' element={<Layout><Stores /></Layout>} />
      <Route path='/categories/:id' element={<Layout><CategoryPage /></Layout>} />
      <Route path='/stores/:id' element={<Layout><StoreDetails /></Layout>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
