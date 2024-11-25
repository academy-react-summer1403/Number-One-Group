import axios from "axios";

const GetEventDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://67278458270bd0b97552ba83.mockapi.io/Events/${id}`
    );
    return response.data;
  } catch (error) {
    return false;
  }
};

export default GetEventDetails;
