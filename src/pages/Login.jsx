import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './style/home.css';

function Login() {

const [username, setUsername] = useState('')
const [password, setPassword] = useState ('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert(`Welcome ${username}`)
  };
 // your form submit function which will invoke after successful validation
// you can watch individual input by pass the name of the input
  let header =''
  if (username, password) {
    header = <div>Hello: {username} & Password: {password}</div>;
  } else {
    header = '';
  }

  return (
    <div className='huan-ngu'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <h2 className='text'>Login</h2>
        <div className='input-name'>
          <input
            defaultValue='test'
            {...register('example')}
            placeholder='Username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div className='input-name'>
          <input
            {...register('exampleRequired', { required: true })}
            placeholder='Password'
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && (
          <span className='text'>This field is required</span>
        )}
        <input type='submit' />
        <div className='display'>
        
        <div className='text'>{header}</div>
        </div>
        
      </form>
    </div>
  );
}

export default Login;
