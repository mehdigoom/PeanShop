import axios from "axios";

export const productService = {
  getProduct,
  filterProducts,
};

async function getProduct() {
  const url = "http://localhost:5000/products";
  const response = await axios.get(url)
  return response
}

async function filterProducts(query) {
  const url = `http://localhost:5000/products/category=${query}`;
  const response = await axios.get(url)
  return response
}
