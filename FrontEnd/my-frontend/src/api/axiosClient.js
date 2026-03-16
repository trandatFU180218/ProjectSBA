import axios from "axios";

const API = "http://localhost:8080/backend";

export const getBooks = () => axios.get(`${API}/books`);

export const borrowBook = (userId, bookId) =>
  axios.post(`${API}/borrow?userId=${userId}&bookId=${bookId}`);

export const getMyBooks = (userId) =>
  axios.get(`${API}/my-books?userId=${userId}`);

export const returnBook = (borrowDetailId) =>
  axios.post(`${API}/return?borrowDetailId=${borrowDetailId}`);

export const getMyFines = (userId) =>
  axios.get(`${API}/fines/user/${userId}`);
