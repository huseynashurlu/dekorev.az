import { Link, useParams } from 'react-router-dom';
import '../assets/css/shop.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Alert from '../components/Alert';


const CategoryPage = () => {
    const { id } = useParams();
    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [option, setOption] = useState();

    useEffect(() => {
        async function getProductsByCategory() {
          const response = await axios.get(`http://localhost:5000/api/product/all-products`)
          .then(data => {
            setCategory(data.data)
            setIsLoading(false);
          })
          .catch(err => console.log(err))
        }
        getProductsByCategory();
      }, []);


      let filteredProducts = category && category.filter(item => item.categoryID === id);

      if(filteredProducts.length === 0) {
        return <Alert text='Bu kateqoriyaya uyğun məhsul yoxdur'/>
      }


      const OptionHandler = (e) => {
        switch (e.target.value) {
          case "1":
            setCategory([...filteredProducts].sort((a, b) => a.name.localeCompare(b.name)));
            break;
          case "2":
            setCategory([...filteredProducts].sort((a, b) => b.name.localeCompare(a.name)));
            break;
          case "3":
            setCategory([...filteredProducts].sort((a, b) => a.price - b.price));
            break;
          case "4":
            setCategory([...filteredProducts].sort((a, b) => b.price - a.price));
            break;
          default:
            setCategory(filteredProducts);
            break;
        }
      };

      

  return (
    <div id="Shop-wide">
        <div className="container">
            <div className="sw-top">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-6">
                        <h1>Qapı <span>({filteredProducts.length} məhsul)</span></h1>
                    </div>
                    <div className="col-lg-6 col-6 d-flex align-items-center justify-content-end">
                        <select onChange={OptionHandler}>
                            <option value="0">Sırala</option>
                            <option value="1">A-Z</option>
                            <option value="2">Z-A</option>
                            <option value="3">Ucuzdan bahaya</option>
                            <option value="4">Bahadan ucuza</option>
                        </select>
                        <button  className="btn_filter"><i className="fa-solid fa-filter"></i> Filtrlə</button>
                    </div>
                </div>
            </div>
            <div className="sw-filter">
                <div className="left">
                    <p>Alt Kateqoriyalar</p>
                    <div className="filter-box">
                        <form action="">
                            <div className="search-input d-flex justify-content-between align-items-center">
                                <input type="search" placeholder="Axtar..." />
                                <i className="fas fa-search"></i>
                            </div>
                            <ul>
                                <li><a href="">Kompüter avadanlıqları, Aksesuarlar </a></li>
                                <li><a href="">Foto, videokamera, Aksesuarlar </a></li>
                                <li><a href="">Telefonlar, Aksesuarlar </a></li>
                                <li><a href="">Televizorlar, Audio, Video </a></li>
                                <li><a href="">Elektron növbə sistemlər </a></li>
                                <li><a href="">Ağıllı ev </a></li>
                                <li><a href="">Təhlükəsizlik və müdafiə </a></li>
                                <li><a href="">Oyun üçün hər şey </a></li>
                                <li><a href="">Kompüter avadanlıqları, Aksesuarlar </a></li>
                                <li><a href="">Foto, videokamera, Aksesuarlar </a></li>
                                <li><a href="">Telefonlar, Aksesuarlar </a></li>
                                <li><a href="">Televizorlar, Audio, Video </a></li>
                                <li><a href="">Elektron növbə sistemlər </a></li>
                                <li><a href="">Ağıllı ev </a></li>
                                <li><a href="">Təhlükəsizlik və müdafiə </a></li>
                                <li><a href="">Oyun üçün hər şey </a></li>
                            </ul>

                        <div className="price-filter">
                            <p>Qiymət (AZN)</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <input id="numb" type="number" value="0" />
                                <span>-</span>
                                <input id="numb" type="number" value="999" />
                            </div>
                            <div className="range-slider mt-3">
                                <span className="rangeValues"></span>
                                <input id="range" value="1" min="1" max="9999" step="100" type="range"/>
                                <input id="range" value="9999" min="1000" max="9999" step="100" type="range"/>
                              </div>
                        </div>

                        <div className="color-filter">
                            <p>Rəng</p>
                            <div className="color-list">
                                <label htmlFor="black"><input type="checkbox" name="" id="black"/> Qara</label>
                            <label htmlFor="red"><input type="checkbox" name="" id="red" /> Qırmızı</label>
                            <label htmlFor="green"><input type="checkbox" name="" id="green" /> Yaşıl</label>
                            <label htmlFor="grey"><input type="checkbox" name="" id="grey" /> Boz</label>
                            <label htmlFor="blue"><input type="checkbox" name="" id="blue" /> Göy</label>
                            <label htmlFor="beique"><input type="checkbox" name="" id="beique" />Bej</label>
                            <label htmlFor="brown"><input type="checkbox" name="" id="brown" />Qəhvəyi</label>
                            <label htmlFor="purple"><input type="checkbox" name="" id="purple" />Bənövşəyi</label>
                            </div>
                        </div>

                        <div className="material-filter">
                            <p>Material</p>
                            <select>
                                <option value="">Dəmir</option>
                                <option value="">Kətan</option>
                                <option value="">Parça</option>
                                <option value="">Taxta</option>
                                <option value="">Alminimum</option>
                            </select>
                        </div>

                        </form>
                    </div>
                </div>
                <div className="right">
                    <div className="vip-boxes">
                        <div className="row g-3">
                          {
                            isLoading ? (
                                <Loader />
                            ) : (
                                <>
                                    {filteredProducts.length === 0 ? (
                                        <Alert/>
                                    ) :  filteredProducts.map(item => {
                                        return(
                                            
                                                <div key={item._id} className="col-lg-3 col-6">
                                                    <Link to={`/details/${item._id}`}>
                                                        <div className="vip-box">
                                                            <div className="box-top">
                                                                <span>VIP</span>
                                                                <img src={item.photo} alt=""/>
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
                                    }) }
                                </>
                            )
                          }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default CategoryPage