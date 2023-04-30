import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCategories() {
            const response = await axios.get('http://localhost:5000/api/category/all-categories')
            .then(data => setCategories(data.data));
        }
        getCategories()
    }, [categories])

  return (
    <div className='category-list'>
       <div className="container">
       <ul>
            {
                categories && categories.map((item,index) => {
                    return(
                            <li key={item,index}>
                                <Link to={`/categories/${item._id}`}>
                                    <img src={item.photo} alt="" />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                    )
                })
            }
        </ul>
       </div>
    </div>
  )
}
export default CategoryList