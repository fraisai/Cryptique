import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RegisterImage from '../assets/images/cryptique_signup_container_img-min.png';
import { InputCheckbox } from '../componentImports';

const SignupContainer = () => {
  const [registerFormData, setRegisterFormData] = useState({
    username: '',
    email: '',
    password: '',
    remember: false,
    submitted: false
  });

  const validatePass = (val) => { // min 6 letter password, with at least a symbol, upper and lower case letters and a number
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(val)) console.log('Enter valid password');
  }
  
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    if (name === 'password') validatePass(value);
    setRegisterFormData((prevState) => ({...prevState, [name]: value }));
  }

  const handleSubmit = (e) => { // make post request to /api/auth/register
    e.preventDefault();
    const { name, value } = e.target
    setRegisterFormData({... registerFormData, [name]: value, submitted: true });
    // axios.post('/api/auth/register')
    // console.log("registerFormData", registerFormData)
  }

  const labelClassName = `space-y-6`;
  const inputClassName = `border border-gray-300 text-sm rounded-lg mt-1`;
  const inputFlexDiv = `flex flex-col`;
  return (
    <div className="flex items-center justify-center border border-red-600 rounded-lg shadow shrink xl:flex-col lg:xxl:flex-row " style={{ height: 620, width: 'auto',  }}>
      <div className='border border-blue-600 rounded-lg shrink' style={{ height: 620, width: 388 }}>
        <img className="rounded-lg shrink" src={RegisterImage} style={{ height: 620, width: 388 }}></img>
      </div>

      <div className='m-1 bg-white border border-red-600 rounded-lg padding-64 text-stone-800 shrink' style={{ height: 620, width: 656, padding: '64px'}}>
        <strong><h2 className="register-h2 shrink" style={{ fontSize: '1.875rem', lineHeight: 2.25 }} >Create a Cryptique Account</h2></strong>
        
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col w-full space-y-6' style={{ fontSize: '.875rem' }}>
            
            {/* START un */}
            <div className={`${inputFlexDiv}`}>
              <label 
                className={`${labelClassName}`}
                htmlFor="username"
              >
                Enter username
              </label>

              <input 
                className={inputClassName}
                name="username"
                onChange={handleChange}
                required
                type="text" 
                value={registerFormData.username}
              />
            </div>
            {/* END un */}
            
            
            {/* START EMAIL */}
            <div className={`${inputFlexDiv}`}>
              <label
                className={`${labelClassName}`}
                htmlFor="email"
              >
                Your email
              </label>

              <input 
                className={inputClassName}
                name="email" 
                onChange={handleChange}
                placeholder="name@company.com" 
                required
                type="email" 
                value={registerFormData.email} 
              />
              {/* END EMAIL */}
            </div>


            {/* START PW */}
            <div className={`${inputFlexDiv}`}>
              <label 
                className={`${labelClassName}`}
                htmlFor="pw"
              >Enter password</label>

              <input 
                className={inputClassName}
                name="password"
                onChange={handleChange}
                placeholder="••••••••" 
                required
                type="text" 
                value={registerFormData.password}
              />
            </div>
            {/* END PW */}

            {/* START checked */}
            <div>
              <InputCheckbox
                checkedVal={registerFormData.remember}
                formData={{...registerFormData}}
                handleCheckChange={setRegisterFormData}
              />
              {/* <input name="remember" type="checkbox" checked={registerFormData.remember} className='rounded-sm' onChange={(e) => setRegisterFormData({...registerFormData, remember: e.target.checked})}/> */}
              <label htmlFor="remember"> I accept the <Link to="/">Terms and Condition</Link></label>
            </div>
            {/* END checked */}
          </div>
          <button type="submit" className='p-6 bg-grey-900' disabled={registerFormData.submitted}>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default SignupContainer


