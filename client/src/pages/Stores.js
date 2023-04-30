import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../assets/css/store.css';
import Loader from '../components/Loader';

const Stores = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/store/all-stores", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json())
        .then(data => setStores(data))
        .catch(error => console.error(error));
      }, []);


  return (
   <div className="container">
     <div className="store-page">
        <h3>Bütün mağazalar</h3>
        {
            stores ? <div className="row g-4">
            {
                stores.map(store => {
                    return(
                        <div key={store._id} className="col-lg-6 col-6 col-sm-6 col-md-6">
                            <Link to={`/stores/${store._id}`}>
                                <div className="store">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="store-logo">
                                                <img src={store.photo} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                        <div className="store-sm-details">
                                                <h4 className="store-name">{store.name}</h4>
                                                <p>{store.description}</p>
                                                <a className="d-block store-phone" href={`tel:${store.phone}`}>
                                                    <i className="fa-solid fa-phone"></i>
                                                    <span>{store.phone}</span>
                                                </a>
                                                <span className="store-count-prod">{store.products.length} məhsul</span>  
                                        </div>                          
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }) 
            }
        </div> : <Loader />
        }
    </div>
   </div>
  )
}
export default Stores