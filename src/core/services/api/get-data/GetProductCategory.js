import axios from "axios";

const GetProductCategory = async (id) => {
  try {
    const response = await axios.get(
      `https://67448500b4e2e04abea28bf5.mockapi.io/Product-Category/${id}`
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    return "";
  }
};

export default GetProductCategory
