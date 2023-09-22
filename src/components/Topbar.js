import React from "react";
import "./topbar.css";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        {/* <img src="/assets/Facebook-logo.jpg" alt="" className="logoImg"/> */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">Facebook</div>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="topbarLink">Homepage</span>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <span className="topbarLink">Timeline</span>
          </Link>
        </>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">7</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">12</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsNoneIcon />
            <span className="topbarIconBadge">9</span>
          </div>
        </div>
        <img src="/assets/person/ritik.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
