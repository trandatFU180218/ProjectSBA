import axios from "axios";

const API = "http://localhost:8080/backend";

export const getBooks = () => axios.get(`${API}/books/booklist`);

export const borrowBook = (userId, bookId) =>
  axios.post(`${API}/borrow?userId=${userId}&bookId=${bookId}`);

export const getMyBooks = (userId) =>
  axios.get(`${API}/borrow/my-books/${userId}`);

export const returnBook = (borrowDetailId) =>
  axios.post(`${API}/borrow/return/${borrowDetailId}`);

export const viewBook = (bookId) => 
  axios.get(`${API}/books/view/${bookId}`)

export const getMyFine = (userId) => 
  axios.get(`${API}/fine/user/${userId}`)

export const getBorrowNotReturn = ()=>{
  return axios.get(`${API}/borrow/borrow-not-return`)
}

export const getAllFine = ()=>
  axios.get(`${API}/fine/all-fines`)

export const paid = (id)=>
  axios.put(`${API}/fine/pay/${id}`)