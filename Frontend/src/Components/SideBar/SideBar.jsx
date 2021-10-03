import React from 'react'
import SideBarLink from "./SideBarLink";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
// import TwitterIcon from "@mui/icons-material/Twitter";

//style sidebar menu items with material UI icons and styled components
const SIDEBAR = styled.div`
position: absolute;
padding-left: 40px;
  .sidebar-container {
    width: 250px;
    min-width: 250px;
    padding: 20px 20px;
    margin: 20px auto 0 auto;
  }

  #tweet-btn {
    width: 100%;
    height: 50px;
    background-color: hsl(203, 89%, 64%);
    border-radius: 20px;
    color: white;
    font-weight: 700;
    text-transform: inherit;
  }
`;
export default function SideBar(){
  return (
    <SIDEBAR>
      <div className="sidebar-container">
        <SideBarLink text="Home" Icon={HomeIcon} />
        <SideBarLink text="Explore" Icon={SearchIcon} />
        <SideBarLink text="Notifications" Icon={NotificationsNoneIcon} />
        <SideBarLink text="Messages" Icon={MailOutlineIcon} />
        <SideBarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
        <SideBarLink text="Lists" Icon={ListAltIcon} />
        <SideBarLink text="Profile" Icon={PermIdentityIcon} />
        <SideBarLink text="More" Icon={MoreHorizIcon} />
        <Button id="tweet-btn">Tweet</Button>
      </div>
    </SIDEBAR>
  );
}