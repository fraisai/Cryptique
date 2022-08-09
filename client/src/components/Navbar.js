import React from 'react'
import {Link} from 'react-router-dom';
import { Tabs } from '@mantine/core';

const Navbar = () => {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'pink',}}>
      <div>
      <Link to="/">
      <Tabs.Tab label="Home" color="pink" style={{backgroundColor: 'pink', fontSize: '20px', justifyItems: 'stretch'}}></Tabs.Tab>
      </Link>
      </div>

      <div>
      <Link to="/trending" >
        <Tabs.Tab label="Trending" color="pink" style={{backgroundColor: 'pink', fontSize: '20px', justifyItems: 'stretch'}}></Tabs.Tab>
      </Link>
      </div>

      <Link to="/cryptotodo" >
        <Tabs.Tab label="CryptoTodo" color="pink" style={{backgroundColor: 'pink', fontSize: '20px', justifyItems: 'stretch'}}></Tabs.Tab>
      </Link>
    </div>

</>
      // <Tabs grow position="right" theme="dark" variant="pills" color="pink">
      //   <Link to="/">
      //       <Tabs.Tab label="Home" color="pink" style={{backgroundColor: 'pink', fontSize: '20px', justifyItems: 'stretch'}}></Tabs.Tab>
      //   </Link>

      //   <Link to="/trending" >
      //     <Tabs.Tab label="Trending" color="pink" style={{backgroundColor: 'pink', fontSize: '20px', justifyItems: 'stretch'}}></Tabs.Tab>
      //   </Link>
        
      //   <Link to="/cryptotodo" >
      //     <Tabs.Tab label="CryptoTodo" color="pink" style={{backgroundColor: 'pink', fontSize: '20px', justifyItems: 'stretch'}}></Tabs.Tab>
      //   </Link>
      // </Tabs>
  )
}

export default Navbar