import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element ={<Home />}/>
          <Route path="/profile" element = {<Profile />}/>
          <Route path="/login" element = {<Login />}/>
          <Route path="/register" element = {<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
