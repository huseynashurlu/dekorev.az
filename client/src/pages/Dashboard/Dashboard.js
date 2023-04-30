import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Dashboard = () => {
    const initialValues = {
      name: '',
      photo: '',
      category: '',
      description: '',
      phone: '',
      address: '',
      workHours: '',
    };
  
    const onSubmit = async (values) => {
      try {
        const response = await axios.post('http://localhost:5000/api/store/create', values);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
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

          <label htmlFor="photo">Photo</label>
          <Field type="text" name="photo" className='form-control mb-3' />
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

    </>
  )
}
export default Dashboard