import axios from "axios";

const GetShopDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://6653aa591c6af63f46754aa6.mockapi.io/users/${id}`
    );
    return response.data;
  } catch (error) {
    return false;
  }
};

export default GetShopDetails;
