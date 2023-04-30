import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StoreList = () => {
  const [stores, setStores] = useState([]);

  console.log(stores[0]);

  useEffect(() => {
    try {
        const response = axios.get('http://localhost:5000/api/store/all-stores')
        .then(data => setStores(data.data))
        
    } catch (error) {
        console.log(error);
    }
  }, [])
  


  const DeleteHandler = (id) => {
    try {
        const response = axios.delete(`http://localhost:5000/api/store/${id}`)
        setStores(stores.filter((store) => store._id !== id))
        toast.error('Store deleted!', {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Photo</th>
          <th>Category</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {
            stores && stores.map((store,index) => {
              return(
                <tr>
                  <td>{index + 1}</td>
                  <td>{store.name}</td>
                  <td style={{width: "15%"}}>
                    <img src={store.photo} alt="store-profile" />
                  </td>
                  <td>{store.category}</td>
                  <td>{store.phone}</td>
                  <td>
                      <button className="btn btn-sm btn-primary">View</button>
                      <button className="btn btn-sm btn-warning mx-2">Edit</button>
                      <button onClick={() => DeleteHandler(store._id)} className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              )
            })
          }
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
      </tbody>
    </table>
  )
}
export default StoreList;