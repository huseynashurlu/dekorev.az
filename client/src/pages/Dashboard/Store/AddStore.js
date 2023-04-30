import * as React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddStore = () => {
  const [image, setImage] = useState();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    photo: '',
    category: '',
    description: '',
    phone: '',
    address: '',
    workHours: '',
  };


  

 
  const onSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('password', values.password);
      formData.append('photo', image);
      formData.append('category', values.category);
      formData.append('description', values.description);
      formData.append('phone', values.phone);
      formData.append('address', values.address);
      formData.append('workHours', values.workHours);
      const response = await axios.post('http://localhost:5000/api/store/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success('Store created', {
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
      toast.error('An error occurred while creating the store', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };


  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
    };
    reader.readAsDataURL(file);
    setImage(file.name);
  };

  
 

  return (
    <>
       <h3>Create Store</h3>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <div className="col-lg-6 mx-auto col-10">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" className='form-control mb-3' />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="email">Email</label>
          <Field type="email" name="email" className='form-control mb-3' />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field type="password" name="password" className='form-control mb-3' />
          <ErrorMessage name="password" component="div" />

          <label htmlFor="photo">Photo</label>
          <Field type="file" onChange={handlePhotoChange} name="photo" className='form-control mb-3' />
          <ErrorMessage name="photo" component="div" />

          <label htmlFor="category">Category</label>
          <Field type="text" name="category" className='form-control mb-3' />
          <ErrorMessage name="category" component="div" />

          <label htmlFor="description">Təsviri</label>
          <Field type="text" name="description" className='form-control mb-3' />
          <ErrorMessage name="description" component="div" />

          <label htmlFor="phone">Phone</label>
          <Field type="text" name="phone" className='form-control mb-3' />
          <ErrorMessage name="phone" component="div" />

          <label htmlFor="address">Address</label>
          <Field type="text" name="address" className='form-control mb-3' />
          <ErrorMessage name="address" component="div" />

          <label htmlFor="workHours">Work Hours</label>
          <Field type="text" name="workHours" className='form-control mb-3' />
          <ErrorMessage name="workHours" component="div" />

          <button className='btn btn-success w-100' type="submit">Create</button>
          </div>
        </Form>
      </Formik>
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
    </>
  )
}
export default AddStore