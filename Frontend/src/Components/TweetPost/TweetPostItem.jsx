import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import { Icon } from '@iconify/react';

const TWEETITEM = styled.div`
  p {
    border: 1px solid #eff3f4;
    padding: 20px;
    font-size: 16px;
  }

  .icons-style {
    margin-left: 100px;
    cursor: pointer;
  }

  .icons-style:hover {
    color: hsl(203, 89%, 64%);
  }

  span{margin-left:5px;}
`;
export default function TweetPostItem() {
    const [tweetItem, setTweetItem] = useState({});

    const[count1,setCount1]=useState(0)
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

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

              <p>
                <Icon
                  icon="bi:chat"
                  className="icons-style"
                  onClick={() => setCount1(count1 + 1)}
                />
                <span>{count1}</span>
                <Icon
                  icon="mdi:repeat-variant"
                  className="icons-style"
                  onClick={() => setCount2(count2 + 1)}
                />
                <span>{count2}</span>
                <Icon
                  icon="icon-park-outline:like"
                  className="icons-style"
                  onClick={() => setCount3(count3 + 1)}
                />
                <span>{count3}</span>
                <Icon
                  icon="feather:share"
                  className="icons-style"
                  onClick={() => setCount4(count4 + 1)}
                />
                <span>{count4}</span>
              </p>
            </div>
          );
        })}
    </div>
    </TWEETITEM>
    </>
  );
}
