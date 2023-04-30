import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { addItem } from '../store/cartSlice';
import '../assets/css/product.css';
import { FiShoppingCart } from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MdFormatListNumbered } from 'react-icons/md'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import { BsTelephoneForward } from 'react-icons/bs'
import { RiStore3Line } from 'react-icons/ri'

const Details = () => {
    const [product, setProduct] = useState();
    const [categoryName, setCategoryName] = useState();
    const [storeName, setStoreName] = useState();
    const [storePhone, setStorePhone] = useState();
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const getProductById = async () => {
          const response = await axios.get(`http://localhost:5000/api/product/${id}`);
          console.log(response);
          setProduct(response.data.getProduct);
          setCategoryName(response.data.categoryName);
          setStoreName(response.data.storeName);
          setStorePhone(response.data.storePhone);

          const updatedProduct = { ...response.data.getProduct };
          updatedProduct.viewCount += 1;
          await axios.put(`http://localhost:5000/api/product/${id}`, updatedProduct);
        }
        
        getProductById();   
      }, [id]);


      const CompareHandler = () => {
        let basket = JSON.parse(localStorage.getItem('compared-products'))
        let id = product._id;
        let src = product.photo;
        let category = categoryName;
        let name = product.name;
        let city = product.city;
        let price = product.price;
        let features = product.features;

        basket.push({
            Id: id,
            Image: src,
            Name: name,
            Price: price,
            Category: category,
            Feature: features,
            City: city
        })

        localStorage.setItem('compared-products',JSON.stringify(basket))
      }


     
      const handleAddToCart = () => {
        dispatch(addItem({ ...product,count: 1 }));
        toast.success('Məhsul səbətə əlavə olundu', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      };
      

return (

      <>
        {
            product ? <section id="Product-details">
            <div className="container">
                <div className="pr-box">
                    <div className="row">
                        <div className="col-lg-3">
                        <div className="pr-img">
                                <img id="prod_img" src={product.photo} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pr-details">
                                <span className="pr-cat">{categoryName}</span>
                                <h4 id="prod_name" className="pr-name">{product.name}</h4>
                                <hr />
                                <p className="shipping">Çatdırılma: <span>{product.isShipping ? 'Bəli' : 'Xeyr'}</span></p>
                                <p className="new-old">Yeni: <span>{product.isNew ? 'Bəli' : 'Xeyr'}</span></p>
                                <p className="city">Şəhər: <span>{product.city}</span></p>
    
                                <form action="">
                                    <button type="submit" style={{backgroundColor: "#04913a"}}>
                                        <img src="" alt="" />
                                        İrəli çək
                                    </button>
                                    <button type="submit" style={{backgroundColor: "#eeb90d"}}>
                                        <img src="" alt="" />
                                        VIP et
                                    </button>
                                    <button type="submit" style={{backgroundColor: "#ee5833"}}>
                                        <img src="" alt="" />
                                        Premium et
                                    </button>
                                </form>
                                <div className="compare-btn mt-4">
                                    <button onClick={CompareHandler}>Digər məhsullar ilə müqayisə et</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="cust-details">
                            <div className="price-sec">
                                    <span className="pr-price"><span id="prod_price">{product.price}</span> <span>₼</span></span>
                                </div>
                                <ul>
                                    <li>
                                        <MdFormatListNumbered />
                                        <span>Elanın nömrəsi: <span id="prod_id">{product.indexCode}</span></span>
                                    </li>
                                    <li>
                                        <AiOutlineCalendar />
                                        <span>Yüklənmə tarixi: <span>{new Date(product.createDate).toLocaleDateString('az-AZ', { day: 'numeric', month: 'numeric', year: 'numeric' }).split('.').reverse().join('-')}</span></span>
                                    </li>
                                    <li>
                                        <BsEye />
                                        <span>Baxış sayı: <span>{product.viewCount}</span></span>
                                    </li>
                                    <li>
                                        <BsTelephoneForward />
                                        <span>Əlaqə: <a href={`tel:${storePhone}`} style={{color: "#333e48","fontWeight": "bold"}}>{storePhone}</a></span>
                                    </li>
                                    <li>
                                        <RiStore3Line />
                                        <span>Mağaza: <a href="store-details.html" style={{"color": "#333e48","fontWeight": "bold"}}>{storeName}</a></span>
                                    </li>
                                </ul>
                                <div className="shop-cart-btn">
                                    <button onClick={handleAddToCart}><FiShoppingCart /> Səbətə at</button>
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
                            </div>
                        </div>
                        <div className="tab-details">
                        <p>{product.features}</p>
                    </div>
                    </div>
                </div>
            </div>
        </section> : 'is Loading...'
        }
      </>
  )
}
export default Details