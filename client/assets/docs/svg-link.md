https://www.svgrepo.com/vectors/social-media/monocolor/

Settings Levels
        <a href="#" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
          </svg>
        </a>





<div align='center' classname="border-black" style={{ maxWidth: '900 px'}}>
{/* <!-- Card --> */}
{/* <div classname="pl-8" style={{ height: '600px', width: '700 px'}} > */}
  {/* <div classname="pl-8 bg-white " style={{ maxWidth: '400 px'}}> */}
    <img classname="" src={RegisterImage} alt="signup image" style={{ height: '600px', width: '300 px'}}/>
  {/* </div> */}

  <div align="left" classname="flex justify-center w-full h-full px-4 overflow-y-auto" style={{ height: '600px', maxWidth: '300 px'}}>
    <h2 classname="">
      Create a Cryptique Account
    </h2>

    {/* INPUT FORM START */}
    <form classname="space-y-6 max-w:lg" onSubmit={handleSubmit}>
      {/* ENTER USERNAME */}
      <div>

      </div>

      {/* ENTER EMAIL */}
      <div className='w-full'>
        <label htmlfor="email" classname="">
          Your email
        </label>
        
        <input 
          type="email" 
          placeholder="name@company.com" 
          required="" 
          classname="" 
        />
      </div>

      {/* ENTER PW */}
      <div>
        <label htmlfor="password" classname="">
          Your password
        </label>

        <input
          type="password" 
          placeholder="••••••••" 
          required="" 
          classname="" 
        />
      </div>

      {/* CONFIRM PW */}
      <div>
        <label htmlfor="confirm-password" classname="">
          Confirm password
        </label>

        <input 
          type="password" 
          name="confirm-password" 
          placeholder="••••••••" 
          required="" 
          classname="" 
        />
      </div>

      <div classname="">
        <div classname="">
          <input id="remember" checked={false} name="remember" type="checkbox" classname="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required="" />
        </div>

        <div classname="">
          <label htmlfor="remember" classname="">
            I accept the 
            <button onClick={handleAccept} classname="">
               Terms and Conditions
            </button>
          </label>
        </div>
      </div>

      <button type="submit" classname="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300">
        Create account
      </button>
      
      <div classname="">
          Already have an account? <button onClick={handleLogin} classname="">Login here</button>
      </div>
    </form>
  </div>
{/* </div> */}
</div>



https://reactnative.dev/docs/layout-props?language=javascript: onPress={() => setSquares([...squares, <Square />])}
