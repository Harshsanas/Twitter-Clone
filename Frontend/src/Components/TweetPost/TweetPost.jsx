import React,{useState} from 'react'
import styled from "styled-components"
import axios from 'axios';
import TweetPostItem from './TweetPostItem';

const TWEETPOST = styled.div`
  border: 1px solid #eff3f4;

  hr {
    border: 1px solid #eff3f4;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0px 10px 20px;
  }

  textarea {
    width: 99%;
    border: none;
    height: 80px;
    padding: 20px 0px 0px 20px;
  }

  #tweet-btn {
    width: 20%;
    height: 50px;
    background-color: hsl(203, 89%, 64%);
    border-radius: 20px;
    border: none;
    float: right;
    cursor: pointer;
    color: white;
    font-weight: 700;
    text-transform: inherit;
  }

`; 

const TWEETPOSTITEM = styled.div`
  .items-container {
    margin-top: 50px;
    width: 100%;
  }
`;
export default function TweetPost() {

  const [tweet,setTweet]=useState({})

   const handleChange = (e) => {
     const { name, value } = e.target;
     let payload = {
       ...tweet,
       [name]: value,
     };
     setTweet(payload);
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     // console.log(form)

     axios
       .post("http://localhost:3033/form", tweet)
       .then((res) => {
         // console.log(form)
         console.log(res);
       })
       .catch((err) => console.log(err));
   };


    return (
      <div>
        <TWEETPOST>
          <p>Home</p>
          <hr />

          <div>
            <form onSubmit={handleSubmit}>
              <textarea
                type="text"
                name="name"
                id="tweetname"
                placeholder="Write Post Here"
                onChange={handleChange}
              />
              <button id="tweet-btn">ADD TWEET</button>
            </form>
          </div>
        </TWEETPOST>

        <TWEETPOSTITEM>
          <div className="items-container">
            <TweetPostItem />
          </div>
        </TWEETPOSTITEM>
      </div>
    );
}
