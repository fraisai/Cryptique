import React, { useState } from 'react'
// import RegisterImage from "../assets/images/cryptique_signup_container_img-min.png";
const RegisterImage = require('../../client/assets/images/cryptique_signup_container_img-min.png')

const SignupContainer = () => {
  const [registerFormData, setRegisterFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleAccept = () => {
    console.log('handleAccept clicked.')
  }

  const handleLogin = () => {
    console.log('handleLogin clicked.')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex items-center justify-center border border-red-600 shadow w-[300px] h-[300px] block" style={{paddingTop: '20%', height: '620 px', width: '102 px', maxHeight: '620 px !important'}}>
      <h1 className='pt-20 border border-red-600 text-stone-800 text-8xl max-w-[220px]' style={{ width: '102 px'}}>HELLO</h1>

      <div className='border border-red-600'>hello</div>
          
    </div>
      
   
  )
}

export default SignupContainer


