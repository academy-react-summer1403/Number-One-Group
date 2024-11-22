import axios from "axios";

const GetAllChat = async () => {
  try {
    const request = await axios.get(
      `https://6653aa591c6af63f46754aa6.mockapi.io/supoort`
    );

    return request.data;
  } catch (error) {
    return [];
  }
};
export default GetAllChat;
