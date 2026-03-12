import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminHome from "../pages/AdminHome";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Admin" element={<AdminHome/>}/>
      </Routes>
    </BrowserRouter>
  );
}