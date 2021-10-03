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
    width: 80%;
    font-size: 18px;
    border: none;
    height: 70px;
    padding: 20px;
  }

  textarea:focus,
  input:focus {
    outline: 0;
  }

  *:focus {
    outline: 0;
  }

  #tweet-btn {
    width: 15%;
    height: 40px;
    background-color: hsl(203, 89%, 64%);
    border-radius: 20px;
    border: none;
    float: right;
    cursor: pointer;
    color: white;
    font-weight: 700;
    text-transform: inherit;
    margin-top: 10px;
  }

  .App__counter {
    color: #696969;
    font-size: 14px;
    margin-left: 85%;
    margin-bottom: 5px;
  }
`; 

const TWEETPOSTITEM = styled.div`
  .items-container {
    margin-top: 50px ;
    width: 100%;
  }
`;
export default function TweetPost() {

  const [tweet,setTweet]=useState({})
  const maxCount = 140;
  const [count, setCount] = useState(0);


   const handleChange = (e) => {
     const { name, value } = e.target;
     let payload = {
       ...tweet,
       [name]: value,
     };
     setTweet(payload);

     
    setCount(e.target.value.length);
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
                placeholder="Write Post Here...?"
                onChange={handleChange}
                maxLength="140"
              />

              <div className="App__counter">{`${count} / ${maxCount}`}</div>
              <button id="tweet-btn">TWEET</button>
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
