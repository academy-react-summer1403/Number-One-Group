import axios from "axios";

const GetShopsLength = async () => {
  try {
    const response = await axios.get(
      "https://6653aa591c6af63f46754aa6.mockapi.io/users"
    );
    return response.data.length;
  } catch (error) {
    return 0;
  }
};

export default GetShopsLength;
