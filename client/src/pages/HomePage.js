import '../assets/css/index.css';
import list from '../api/products.json';
import { useEffect, useState } from 'react';
import ProductCard from '../components/Product/ProductCard';




const HomePage = (props) => {
  const product = props.products
  return (
    <div>
        <section id="Banner">
          <div className="container">
          <div className="row">
                <div className="col-lg-3 col-6 d-phone-none">
                    <div className="sl-box">
                        <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/Home4_section4-3.jpg" alt="Banner image for dekorev.az" />
                    </div>
                    <div className="sl-box">
                        <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/Home4_section4-2.jpg" alt="Banner image for dekorev.az" />
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="slide-box">
                        <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/background_c1.jpg" alt="Banner image for dekorev.az" />
                    </div>
                </div>
            </div>
          </div>
        </section>
        <section className='mt-5' id="VIP">
        <div className="container">
            <div className="mb-4 vip-top d-flex justify-content-between align-items-center">
                <h3>VIP Elanlar</h3>
                <a href="">Hamısını göstər</a>
            </div>
            <div className="vip-boxes">
                <div className="row g-4">
                  {
                    product && product.map(item => {
                      return(
                        <ProductCard key={item._id} products = {item}/>
                      )
                    })
                  }
                </div>
            </div>
        </div>
    </section>
    <section className='mt-5' id="VIP">
        <div className="container">
            <div className="mb-4 vip-top d-flex justify-content-between align-items-center">
                <h3>Ən çox baxılanlar</h3>
                <a href="">Hamısını göstər</a>
            </div>
            <div className="vip-boxes">
                <div className="row g-4">
                      {
                        product && product.filter(item => item.viewCount > 20).map(item => {
                          return(
                            <ProductCard key={item._id} products = {item}/>
                          )
                        })
                      }                    
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
export default HomePage