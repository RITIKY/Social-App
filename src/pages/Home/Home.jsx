import Topbar from "../../components/Topbar";
import Sidebar from "../../components/SideBar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}
