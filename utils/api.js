import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URI;
const api = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const response = error.response;
//     console.log("response : ", response);

//     if (response.status === 401 && (response.data.message === "Invalid or expired token" || response.status === 401 && response.data.message === "Unauthorized request - No token provided")) {

//       if (typeof window !== "undefined") {
//         localStorage.removeItem("auth_token");
//         localStorage.removeItem("auth_user");
//         window.location.href = "/login";
//       }
//     }

//     return Promise.reject(error);
//   }
// );

api.interceptors.response.use(
  (response) => {
    // Skip response parsing for blob/binary data (PDF, images, etc.)
    if (response.data instanceof Blob) {
      return response;
    }

    if (
      response.data &&
      response.data.success === false &&
      response.data.message === "jwt expired"
    ) {
      handleLogout();
    }
    return response;
  },
  (error) => {
    if (error?.response?.data?.message === "jwt expired") {
      handleLogout();
    }
    return Promise.reject(error);
  },
);

export default api;