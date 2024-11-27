import axios from "axios";

const GetAllProducts = async (params) => {
  console.log(params.Category)
  console.log(params.Shop)
  try {
    const url = new URL("https://673cfd8a4db5a341d833a52f.mockapi.io/Products");
    url.searchParams.append("title", params.Query ? params.Query : "");
    url.searchParams.append("page", params.PageNumber ? params.PageNumber : 1);
    url.searchParams.append(
      "limit",
      params.RowsOfPage ? params.RowsOfPage : 12
    );
    url.searchParams.append("sortby", params ? params.SortingCol : null);
    url.searchParams.append(
      "categoryId",
      params.Category ? params.Category : ""
    );
    url.searchParams.append("shopId", params.Shop ? params.Shop : "");
    
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return [];
  }
};

export default GetAllProducts;
