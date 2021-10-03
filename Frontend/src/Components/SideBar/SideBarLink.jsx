import React from 'react'
import styled from "styled-components"

const SIDEBARLINK = styled.div`
  .link {
    display: flex;
    cursor: pointer;
    /* border: 1px solid black; */
    border-radius: 30px;
  }
  .link:hover {
    background-color: #e8f5fe;
    color: #50b7f5;
    transition: color 100ms ease-out;
  }
  .link > p {
    font-weight: 700;
    font-size: 20px;
    padding-top:20px;
    margin-right: 20px;
  }

  .link > .MuiSvgIcon-root {
    padding: 20px;
  }
`;
export default function SideBarLink({ text, Icon }) {
  return (
    <SIDEBARLINK>
      <div className="link">
        <Icon />
        <p>{text}</p>
      </div>
    </SIDEBARLINK>
  );
}
