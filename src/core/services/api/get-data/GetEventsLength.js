import axios from "axios";

const GetEventsLength = async () => {
  try {
    const response = await axios.get(
      "https://67278458270bd0b97552ba83.mockapi.io/Events"
    );
    return response.data?.length;
  } catch (error) {
    return [];
  }
};

export default GetEventsLength;
