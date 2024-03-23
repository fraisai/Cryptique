import React, { useEffect } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import { SignIn } from '../componentImports'
const LoginContainer = ({locationSearch}) => {
  console.log("loginContainer location: ", location.search);
  return (
    <div className="bg-gray-50">
      <SignIn locationSearch={locationSearch}/>
    </div>
  )
}

export default LoginContainer