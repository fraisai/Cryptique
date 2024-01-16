import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const InvestList = () => {
  const [list, setList] = useState([]);
  const [tweet, setTweet] = useState([]);

  const getList = async () => {
    await axios
      .get('/v1/api/cryptodo/get')
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
          console.log("Error in GET request in Listodos.js", error.message);
      })
  }
    
  useEffect(() => {
    getList();
  }, []) // ensures you make just 1 request by including []
  
  console.log("list from Listodos.js", list);
  
  const deleteTodo = async (id) => {
    try {await axios
      // .delete(`/cryptotodo/${id}`)
      .delete(`/v1/api/cryptodo/${id}`)
      .then(res => console.log('Delete in Listodos.js'))
      .catch(error => console.log('Delete error in Listodos.js', error.message));
      window.location = '/cryptotodo';
    } catch(err) {
      console.log('Error in Listodos.js')
    }
  }

  const handleTweetSearch = async (ele) => {
    console.log("tweetSearch", ele);
    const newObj = {
      id: ele
    }
    await axios
      .post(`/twitter/${ele}`, newObj)
      .then(res => setTweet(res.data))
      .catch((error) => {
          console.log("Error in handleTweetSearch GET request in Listodos.js", error.message);
      })
  }

  console.log("tweet", tweet)

  return (
    <div>
      <table style={{margin: '0 auto'}}>
        <thead>
          <tr>
              <th>Term to Search</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
          </thead>
          <tbody>
            {list.map(el => {
              return(
                <tr>
                  <td><button variant="white" color="pink">{el.name}</button></td>
                  <th><button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Edit</button></th>
                  <th>
                    <button 
                      onClick={() => deleteTodo(el.trending_id)}
                      variant="gradient" gradient={{ from: 'orange', to: 'red' }}
                    >
                      Delete
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleTweetSearch(el.name)}
                      variant="gradient" 
                      gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                    >
                      Submit to Search Tweets
                    </button>
                  </th>
                </tr>
              )
            })}
          </tbody>
      </table>
      
      
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Screenname</th>
            <th>Tweet</th>
            <th># of Followers</th>
            <th># of Retweets</th>
          </tr>
        </thead>

        <tbody style={{outline: '1px solid black', padding: '16px'}}>
          {tweet.map(el => {
            {/* <img src={`${el.Media[0].media_url}`}/> */}
            return (
              <tr style={{outline: '1px solid black', padding: '6px'}}>
                <td>{el.user.screen_name}</td>
                <td>{el.full_text}</td>
                <td>{el.user.followers_count}</td>
                <td>{el.retweet_count}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default InvestList