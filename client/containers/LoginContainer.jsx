import React from 'react'
import { SignIn } from '../componentImports'
const LoginContainer = (func) => {
  return (
    <div className="bg-gray-50">
      <SignIn 
        setIsAuth={func.setIsAuth}
      />
    </div>
  )
}

export default LoginContainer