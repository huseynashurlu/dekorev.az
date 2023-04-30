import { Link } from 'react-router-dom';
import './Product.css'

const ProductCard = ({products}) => {
    console.log(products);
    return (
    <div className="col-lg-3 col-6">
                    <Link to={`/details/${products._id}`}>
                        <div id={products.id} className="vip-box">
                                <div className="box-top">
                                    {products.isVIP ? <span>VIP</span> : null}
                                    <img src={products.photo} alt="" />
                                </div>
                                <div className="box-bottom">
                                    <span>{products.category}</span>
                                    <h6>{products.name}</h6>
                                    <div className="bb-price-cart d-flex justify-content-between align-items-center">
                                        <span className="price">{products.price} <span className="manat">₼</span></span>
                                    </div>
                                </div>
                            </div>
                    </Link>
                            
    </div>
  )
}
export default ProductCard