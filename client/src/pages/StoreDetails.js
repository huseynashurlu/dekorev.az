import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Visibility from '../assets/images/visibility.png';
import { GoLocation } from 'react-icons/go';
import { BsTelephoneForward } from 'react-icons/bs'
import { BsClock } from 'react-icons/bs'
import Loader from "../components/Loader";
import Alert from "../components/Alert";


const StoreDetails = () => {
    const { id } = useParams();
    const [store, setStore] = useState();


    useEffect(() => {
        async function getStoreById() {
          const response = await axios.get(`http://localhost:5000/api/store/${id}`);
          setStore(response.data.getStore);

          const updatedStore = { ...response.data.getStore };
          console.log(updatedStore);
          updatedStore.viewCount += 1;
          console.log(updatedStore.viewCount);
          await axios.put(`http://localhost:5000/api/store/${id}`, updatedStore);
        }
        
        getStoreById();
      }, [id]);
  return (
    <>
        {
            store ? <section id="Store-details">
            <div className="container">
                <div className="sd-info d-flex justify-content-between align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="sd-left">
                            <img src={store.photo} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="sd-right">
                            <h2>{store.name}</h2>
                            <p>{store.description}</p>
                            <span className="mt-3 store-looking">
                                <img src={Visibility} alt="" />
                                {store.viewCount}
                            </span>
                            <div className="store-icons">
                                <GoLocation />
                                <span>{store.address}</span>
                            </div>
                            <div className="store-icons">
                                <BsTelephoneForward />
                                <a href={`tel: ${store.phone}`}>{store.phone}</a>
                            </div>
                            <div className="store-icons">
                                <BsClock />
                                <span>{store.workHours}</span>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="store-products">
                   <h3 className="mb-3">MAĞAZANIN MƏHSULLARI</h3>
                   <div className="row g-4">
                    {
                        store.products.length > 0 ? store.products.map(item => {
                            return(
                                
                                <div key={item._id} className="col-lg-3 col-6">
                                    <Link to={`/details/${item._id}`}>
                                        <div className="vip-box">
                                            <div className="box-top">
                                                <span>VIP</span>
                                                <img src={item.photo} alt="" />
                                            </div>
                                            <div className="box-bottom">
                                                <span>Mebel</span>
                                                <h6>{item.name}</h6>
                                                <div className="bb-price-cart d-flex justify-content-between align-items-center">
                                                    <span className="price">{item.price} <span className="manat">₼</span></span>
                                                    <button className="add-basket-btn">
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                        <span>Səbətə at</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }) : <Alert text='Bu mağazanın məhsulu yoxdur...'/>
                    }
                    
                   </div>
               </div>
            </div>
        </section> : <Loader />
        }
    </>
  )
}
export default StoreDetails