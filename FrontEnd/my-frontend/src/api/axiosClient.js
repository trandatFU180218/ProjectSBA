
const API = "http://localhost:8080/backend";


const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json"
  };
};

// ==== API ===

// BOOK
export const getBooks = async () => {
  const response = await fetch(`${API}/books/booklist`, {
    method: "GET",
    headers: getAuthHeader(),
  });

  if (!response.ok) {
    throw new Error("Lỗi tải danh sách sách");
  }
  return response.json();
};

export const viewBook = async (bookId) => {
  const response = await fetch(`${API}/books/view/${bookId}`, {
    method: "GET",
    headers: getAuthHeader(),
  });

  if (!response.ok) {
    throw new Error("Lỗi xem chi tiết sách");
  }
  return response.json();
};

// BORROW
export const borrowBook = async (bookId) => {
  const response = await fetch(`${API}/borrow?bookId=${bookId}`, {
    method: "POST",
    headers: getAuthHeader(),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.message || "Lỗi mượn sách");
  }

  return response.text(); 
};

export const getMyBooks = async () => {
  const response = await fetch(`${API}/my-books`, {
    method: "GET",
    headers: getAuthHeader(),
  });

  if (!response.ok) {
    throw new Error("Lỗi tải sách của tôi");
  }
  return response.json();
};

export const returnBook = async (borrowDetailId) => {
  const response = await fetch(`${API}/admin/return/${borrowDetailId}`, {
    method: "POST",
    headers: getAuthHeader(),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.message || "Lỗi trả sách");
  }
  return response.text();
};

export const getBorrowNotReturn = async () => {
  const response = await fetch(`${API}/admin/borrow-not-return`, {
    method: "GET",
    headers: getAuthHeader(),
  });

  if (!response.ok) {
    throw new Error("Lỗi tải danh sách mượn chưa trả");
  }
  return response.json();
};

// FINE
export const getMyFine = async () => {
  const response = await fetch(`${API}/fine/my-fine`, {
    method: "GET",
    headers: getAuthHeader(),
  });

  if (!response.ok) {
    throw new Error("Lỗi tải tiền phạt của tôi");
  }
  return response.json();
};

export const getAllFine = async () => {
  const response = await fetch(`${API}/fine/all-fines`, {
    method: "GET",
    headers: getAuthHeader(),
  });

  if (!response.ok) {
    throw new Error("Lỗi tải tất cả tiền phạt");
  }
  return response.json();
};

export const paid = async (id) => {
  const response = await fetch(`${API}/fine/pay/${id}`, {
    method: "PUT",
    headers: getAuthHeader(),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.message || "Lỗi thanh toán phạt");
  }
  return response.text();
};