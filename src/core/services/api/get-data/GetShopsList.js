import axios from "axios";

const GetShopsList = async (params) => {
  try {
    const url = new URL("https://6653aa591c6af63f46754aa6.mockapi.io/users");
    url.searchParams.append("Page", params.PageNumber ? params.PageNumber : 1);

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return [];
  }
};

export default GetShopsList;
