import React from 'react'
import { useForm } from 'react-hook-form';
import './style/home.css';
import { Link } from 'react-router-dom';
function Register() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
 // your form submit function which will invoke after successful validation
// you can watch individual input by pass the name of the input


  return (
    <div className='huan-ngu'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <h2 className='text'>Register</h2>
        <div className='input-name'>
          <input
            defaultValue='test'
            {...register('example')}
            placeholder='Username'
          />
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div className='input-name'>
          <input
            {...register('exampleRequired', { required: true })}
            placeholder='Password'
            type="password"
          />
        </div>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && (
          <span className='text'>This field is required</span>
        )}
        <Link to = "/Login">
        <input type='submit' />
        </Link>
        <div className='display'>
        </div>
        
      </form>
    </div>
  );
}


export default Register
