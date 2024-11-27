import axios from "axios";

const GetShopsList = async (params) => {
  // console.log(params);
  try {
    const url = new URL("https://6653aa591c6af63f46754aa6.mockapi.io/users");
    url.searchParams.append("page", params.PageNumber ? params.PageNumber : 1);
    url.searchParams.append(
      "limit",
      params.RowsOfPage ? params.RowsOfPage : 12
    );
    url.searchParams.append("name", params.Query ? params.Query : "");
    url.searchParams.append("sortby", params ? params.SortingCol : null);
    url.searchParams.append(
      "categoryId",
      params.Category ? params.Category : ""
    );

    const response = await axios.get(url);
    // console.log( response.data)
    return response.data;
  } catch (error) {
    return [];
  }
};

export default GetShopsList;
