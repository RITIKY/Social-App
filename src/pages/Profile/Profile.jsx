import "./profile.css";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/SideBar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/P4.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/ritik.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Ritik Yadav</h4>
                <span className="profileInfoDesc">Hello my Facebook friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
