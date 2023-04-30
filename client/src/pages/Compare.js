import { useEffect, useState } from "react"
import Alert from "../components/Alert";
import { RiDeleteBinFill } from 'react-icons/ri'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Compare = () => {
    const [items, setItems] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('compared-products') === null) {
            localStorage.setItem('compared-products', JSON.stringify([]))
        }

        let products = JSON.parse(localStorage.getItem('compared-products'));
        products && setItems(products)

      }, [])


    const DeleteHandler = (id) => {
        let products = JSON.parse(localStorage.getItem('compared-products'))
        let filteredProducts = products.filter(item => item.Id !== id);
        localStorage.setItem('compared-products',JSON.stringify(filteredProducts));
        setItems(filteredProducts);
        toast.error('Məhsul silindi', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        navigate('/compare');
    }
    
  return (
    <section id="Compare">
        <div className="container">
            {
                items?.length > 0 ? <>
                    <div className="top mt-3 mb-4">
                <h2>Məhsul müqayisəsi</h2>
                <h6>Müqayisə etmək üçün <span>{items?.length}</span> məhsul var</h6>
            </div>
            <div className="compare-box">
                <div className="table-responsive">
                    <table className="table text-center table-compare">
                        <thead>
                            <tr>
                                <th>Şəkli</th>
                                <th>Adı</th>
                                <th>Qiymət</th>
                                <th>Kateqoriya</th>
                                <th>Təsviri</th>
                                <th>Şəhər</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items && items.map(item => {
                                    return(
                                        <tr>
                                            <td>
                                                <img src={item.Image} alt="compared-product" />
                                            </td>
                                            <td>{item.Name}</td>
                                            <td>{item.Price} AZN</td>
                                            <td>{item.Category}</td>
                                            <td>{item.Feature.length > 50 ? item.Feature.slice(0,80) + "..." : item.Feature}</td>
                                            <td>{item.City}</td>
                                            <td>
                                                <button onClick={() => DeleteHandler(item.Id)} className="btn btn-danger">
                                                    <RiDeleteBinFill />
                                                </button>
                                            </td>
                                        </tr>
                                        
                                    )
                                })
                            }
                        </tbody>
                    </table>
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
                </>
            : 
            <Alert text='Müqayisə etmək üçün məhsul yoxdur'/>
            }
        </div>
    </section>
  )
}
export default Compare