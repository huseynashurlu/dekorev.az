import { useState } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [store,setStore] = useState(false);
    const [product,setProduct] = useState(false);

    const StoreVisibleHandler = () => {
        setStore(!store)
    }

    const ProductVisibleHandler = () => {
        setProduct(!product)
    }

  return (
    <div className="sidebar">
        <div className="store-li">
            <span onClick={StoreVisibleHandler}>Mağazalar</span>
            <div style={store ? {display: "flex"} : {display: "none"}} className="dp-content">
                <Link to='/admin/stores'>Mağazalar</Link>
                <Link to='/admin/add-store'>Mağaza əlavə et</Link>
            </div>
        </div>
        <div className="store-li">
            <span onClick={ProductVisibleHandler}>Məhsullar</span>
            <div style={product ? {display: "flex"} : {display: "none"}} className="dp-content">
                <a href="">Məhsullar</a>
                <Link to='/admin/add-store'>Məhsul əlavə et</Link>
            </div>
        </div>
    </div>
  )
}
export default Sidebar