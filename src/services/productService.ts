import axios from "axios";

const API_URL = "http://localhost:5000/products";

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}`);
  console.log(response.data);
  return response.data;
};
