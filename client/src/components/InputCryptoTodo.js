import React, { useState } from 'react'
import { Button } from '@mantine/core';
import Listodos from './Listodos';
import axios from 'axios';


const InputCryptoTodo = () => {
  const [nameValue, setName] = useState('');
  // set the name 
  function handleChange(event) {
    setName(event.target.value);
    // console.log("event.target.value", event.target.value)
  }

  // POST REQ
  const handleClick = async (event) => {
    console.log("click handled, event", event)
    event.preventDefault(); // prevents page from being refreshed

    const newObj = {
      name: nameValue
    }

    await axios.post('v1/api/cryptodo/post', newObj)
      .then((data) => {
        console.log('twitter post', data)
      })
      .catch(error => console.log(`Error in InputCryptoTodo.js POST request: ${error}`))

    window.location = '/cryptotodo';
  }

  return (
    <>
      <div style={{margin: '0 auto', width: '75%'}}>
        <input 
          onChange={handleChange} 
          // onChange={event => {setName(event.target.value)}} 
          style={{width: '75%',  height: '10%'}} 
          type='text' 
          placeholder='Enter the name or symbol of the cryptocurrency you would like to see Tweets of'
        />

        <Button             
          onClick={handleClick}
          variant="gradient" 
          gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
        >
          Add Crypto
        </Button>

        <Listodos/>
      </div>
    </>
  )
}

export default InputCryptoTodo