import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components"

const TWEETITEM = styled.div`
  p {
    border: 1px solid #eff3f4;
    padding: 20px;
    color: red;
  }
`;
export default function TweetPostItem() {
    const [tweetItem, setTweetItem] = useState({});

    useEffect(() => {
      axios
        .get("http://localhost:3033/form")
        .then((res) => {
          setTweetItem(res.data.forms);
          // console.log(res.data.forms)
        })
        .catch((err) => console.log(err));
    });
  return (
      <>
      <TWEETITEM>
    <div className="tweetItem-container">
      {tweetItem.length > 0 &&
        tweetItem?.map((item) => {
          return (
            <div key={item._id}>
              <p>{item.name}</p>
            </div>
          );
        })}
    </div>
    </TWEETITEM>
    </>
  );
}
