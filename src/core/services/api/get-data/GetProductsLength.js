import axios from "axios";

const GetProductsLength = async () => {
  try {
    const response = await axios.get(
      "https://673cfd8a4db5a341d833a52f.mockapi.io/Products"
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    return 0;
  }
};

export default GetProductsLength;
