import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Pages
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

        {/* PUBLIC */}
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* USER */}
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <BookList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookDetail/:id"
          element={
            <ProtectedRoute>
              <BookDetail />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-books"
          element={
            <ProtectedRoute>
              <MyBooks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fines"
          element={
            <ProtectedRoute>
              <Fines />
            </ProtectedRoute>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin/home"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/book"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminBook />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/AddBook"
          element={
            <ProtectedRoute role="ADMIN">
              <AddBook />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/EditBook/:id"
          element={
            <ProtectedRoute role="ADMIN">
              <EditBook />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/user"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminUser />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/AddUser"
          element={
            <ProtectedRoute role="ADMIN">
              <AddUser />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/EditUser/:id"
          element={
            <ProtectedRoute role="ADMIN">
              <EditUser />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/borrow-manager"
          element={
            <ProtectedRoute role="ADMIN">
              <BorrowManager />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/fine-manager"
          element={
            <ProtectedRoute role="ADMIN">
              <FineManager />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}