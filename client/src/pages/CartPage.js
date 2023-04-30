import '../assets/css/cart.css';
import { HiOutlineRefresh } from 'react-icons/hi'
import { BsArrowLeft } from 'react-icons/bs'
import { BsFillTrashFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';
import Alert from '../components/Alert';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartPage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem('cart'));
    setProducts(basket);
  }, [])

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
    toast.error('Məhsul səbətdən silindi', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setProducts(products.filter((item) => item._id !== id));
    navigate('/basket');
  };


  const plusHandler = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let existProd = cart.find(x => x._id === item.item._id);

    if(existProd === undefined) {
      cart.push(existProd)
    }
    else{
      existProd.count += 1
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    setProducts(cart)
    navigate('/basket');
  }


  const minusHandler = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let existProd = cart.find(x => x._id === item.item._id);

    if(existProd === undefined) {
      cart.push(existProd)
    }
    else{
      existProd.count > 1 ? existProd.count -= 1 : existProd.count = 1
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    setProducts(cart)
    navigate('/basket');
  }

  return (
    <>
     
      {
        products.length === 0 ? <Alert text='Səbətdə məhsul yoxdur'/> : 
        <section id="Cart" style={{"display": "block"}}>
        <div className="container">
            <div className="row mt-5 align-items-baseline justify-content-between">
                <div className="card-box col-lg-9">

                    <div className="cart-top">
                        <h1 className="cart-head">Səbət</h1>
                        <div className="d-flex justify-content-between">
                            {/* <h6 className="text-body">Səbətdə
                                <span id="Total_Counts" className="text-count"> {products.length}</span> məhsul var</h6> */}
                           
                        </div>
                    </div>
                    <div className="cart-main">
                            <div style={{"overflowX": 'auto'}} className="cart-header-left">
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Məhsulun kodu</th>
                                            <th>Şəkli</th>
                                            <th>Məhsulun adı</th>
                                            <th>Qiyməti</th>
                                            <th>Ədəd</th>
                                            <th>Ümumi məbləğ</th>
                                            <th>Sil</th>
                                        </tr>
                                    </thead>
                                    <tbody>
           {
            products && products.map(item => {
              return(
                  <tr key={item._id}>
                    <td>
                        {item.indexCode}
                    </td>
                    <td>
                        <img src={item.photo} alt="" />
                    </td>
                    <td>
                      <Link style={{"color": "#333"}} to={`/details/${item._id}`}>
                      {item.name}
                      </Link>
                    </td>
                    <td>{item.price} ₼</td>
                    <td>
                      <div className="item-count-box">
                        <span onClick={() => minusHandler({item})} className='minus'>-</span>
                        <span>{item.count}</span>
                        <span onClick={() => plusHandler({item})} className='plus'>+</span>
                      </div>
                    </td>
                    <td>{(item.count) * (item.price)} ₼</td>
                    <td>
                        <button onClick={() => handleRemoveFromCart(item._id)} className="btn btn-sm btn-danger"><BsFillTrashFill /></button>
                    </td>
                </tr>
              )
            })
           }
        </tbody>
                                </table>
                            </div>
                        <div id="Cart_Main" className="pro-boxs"></div>
                        <div className="cart-footer d-flex justify-content-between align-items-center">
                            <div className="cart-footer-left">
                                <button onClick={() => navigate('/')}><BsArrowLeft /> Davam et</button>
                            </div>
                            <div className="cart-footer-right">
                                <button id="UpdateCart"><HiOutlineRefresh /> Yenilə</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="Product_Sub" className="products-subtotal col-lg-3">
                    <div className="subtotal-table">
                        <div className="subtotal">
                            <h6>Ümumi məbləğ</h6>
                            <h1 id="TotalPriceSub" className="totalPrice">{products.reduce((x,y) => x + (y.price * y.count),0)} ₼</h1>
                        </div>
                        <div className="total">
                            <h6>Məhsul sayı</h6>
                            <h1 id="Total_Count" className="totalPrice">{products.length}</h1>
                        </div>
                    </div>
                    <a href="#">Alış verişə davam et
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </a>
                </div>
            </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </section> 
      }
    </>
  )
}
export default CartPage