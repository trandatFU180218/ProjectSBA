import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminHome from "../pages/AdminHome";
import AdminBook from "../pages/AdminBook";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";
import AdminUser from "../pages/AdminUser";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";
import BookList from "../pages/BookList";
import MyBooks from "../pages/MyBook";
import Fines from "../pages/MyFine";
import BookDetail from "../pages/BookDetail";
import BorrowManager from "../pages/BorrowManager";
import FineManager from "../pages/FineManager";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Admin" element={<AdminHome/>}/>
        <Route path="/AdminBook" element={<AdminBook/>}/>
        <Route path="/AddBook" element={<AddBook/>}/>
        <Route path="/EditBook/:id" element={<EditBook/>}/>
        <Route path="/AdminUser" element={<AdminUser/>}/>
        <Route path="/AddUser" element={<AddUser/>}/>
        <Route path="/EditUser/:id" element={<EditUser/>}/>
        <Route path="/books" element={<BookList/>}/>

        <Route path="/my-books" element={<MyBooks/>}/>

        <Route path="/fines/:id" element={<Fines/>}/>
        <Route path="/bookDetail/:id" element={<BookDetail/>}/>
        <Route path="/borrow-manager" element={<BorrowManager/>}/>
        <Route path="/fine-manager" element={<FineManager/>}/>
      </Routes>
    </BrowserRouter>
  );
}