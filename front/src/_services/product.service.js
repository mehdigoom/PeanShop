import axios from "axios";

export const productService = {
  getProduct,
};

async function getProduct() {
  const url = "http://localhost:5000/products";
  const response = await axios.get(url)
  return response
}
