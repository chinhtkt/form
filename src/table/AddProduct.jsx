import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';
const AddProduct = ({handleProduct}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    handleProduct(data);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='container-1'>
    {/* register your input into the hook by invoking the "register" function */}
    <input {...register("title")} />
    </div>
    <div className='container-1'>
    {/* include validation with required or other standard HTML validation rules */}
    <input {...register("price", { required: true })} />
    </div>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <div className='container-1'>
      <input type="submit" />
      </div>

    </form>
  );
  };


export default AddProduct;


// import React, { useState } from 'react';

// const AddProduct = ({handleProduct}) => {
//     const initialFormState = { id: null, title: '', price: '' }
//     const [product, setProduct] = useState(initialFormState)
  
//     const handleInputChange = (event) => {
//       const { name, value } = event.target;
//       setProduct({ ...product, [name]: value })
//     }
    
  
//     return (
//       <form
//         onSubmit={(event) => {
//           event.preventDefault()
//           if (!product.title || !product.price) return
  
//           handleProduct(product);
//           setProduct(initialFormState);
//         }}
//       >
//         <label>Product Name</label>
//         <input
//           type="text"
//           name="title"
//           value={product.title}
//           onChange={handleInputChange}
//         />
//         <label>Product Price</label>
//         <input
//           type="text"
//           name="price"
//           value={product.price}
//           onChange={handleInputChange}
//         />
//         <button>Add new user</button>
//       </form>
//     )
//   };


// export default AddProduct;
