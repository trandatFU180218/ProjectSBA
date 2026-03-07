import axiosClient from "../api/axiosClient";

export const getBook = ()=>{
    return axiosClient.get("/books");
}