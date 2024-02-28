import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterImage from '../assets/images/cryptique_signup_container_img-min.png'
// import RegisterImage from "../assets/images/cryptique_signup_container_img-min.png";
// const RegisterImage = require('../../client/assets/images/cryptique_signup_container_img-min.png')

const SignupContainer = () => {
  const [registerFormData, setRegisterFormData] = useState({
    username: '',
    email: '',
    password: '',
    checked: false
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    console.log('handleAccept clicked.', e.target.name, e.target.value, [name]);

    // setRegisterFormData({... registerFormData, [name]: value });
  }

  const handleSubmit = (e) => { // make post request to /api/auth/register
    console.log("registerFormData", registerFormData)

    e.preventDefault();
    const { name, value } = e.target
    setRegisterFormData({... registerFormData, [name]: value });

    
    console.log("registerFormData", registerFormData)

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
        
        <form className="" onSubmit={handleSubmit}>
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
                type="text" 
                className={inputClassName}
              />
            </div>
            {/* END un */}
            
            
            {/* START EMAIL */}
            <div className={`${inputFlexDiv}`}>
              <label htmlFor="email">
                Your email
              </label>

              <input 
                name="email" 
                onChange={handleChange}
                placeholder="name@company.com" 
                required=""
                type="email" 
                value={registerFormData.email} 
                className={inputClassName}
              />
              {/* END EMAIL */}
            </div>


            {/* START PW */}
            <div className={`${inputFlexDiv}`}>
              <label 
                name="pw"
                htmlFor="pw"
                required=""
              >Enter password</label>

              <input 
                type="text" 
                placeholder="••••••••" 
                className={inputClassName}
              />
            </div>
            {/* END PW */}

            {/* START checked */}
            <div>
              <input type="checkbox" checked={registerFormData.checked} className='rounded-sm'/>
              <label htmlFor="remember">I accept the <Link to="/">Terms and Condition</Link></label>
            </div>
            {/* END checked */}
          </div>
          <button type="submit" className='p-6 bg-grey-900'>Create Account</button>
        </form>
        

      </div>
    </div>
          
      
   
  )
}

export default SignupContainer


