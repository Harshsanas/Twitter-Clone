import React from 'react'
import styled from "styled-components"

const WIDGET = styled.div`
width: 100%;
input{
    margin-left: 20px;
    width: 300px;
    background-color:#EFF3F4;
    border: none;
    border-radius:20px;
    height: 40px;
    font-size:16px;
    padding-left: 25px;
}

`;

export default function Widget() {
    return (
      <div>
        <WIDGET>
          <input type="text" placeholder="Search Twitter" />
          <div>
          </div>
        </WIDGET>
      </div>
    );
}
