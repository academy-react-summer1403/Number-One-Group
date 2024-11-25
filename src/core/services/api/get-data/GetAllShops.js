import axios from "axios";

const GetAllShops = async () => {
  try {
    const response = await axios.get(
      "https://6653aa591c6af63f46754aa6.mockapi.io/users"
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export default GetAllShops;
