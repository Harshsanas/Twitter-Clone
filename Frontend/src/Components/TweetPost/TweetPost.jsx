import React from 'react'
import styled from "styled-components"

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
`; 
export default function TweetPost() {
    return (
        <div>
            <TWEETPOST>
            <p>Home</p>
            <hr />

            <div>
            
            
            </div>

            </TWEETPOST>
        </div>
    )
}
