import http from "../../interceptor";

const GetListNewsCategory = async () => {
  const response = await http.get("/News/GetListNewsCategory");

  let char = new RegExp("[\u0600-\u06FF]");
  const getCategoryFa = response
    .filter((e) => char.test(e.categoryName))
    .slice(0, 10);

  return getCategoryFa;
};

export default GetListNewsCategory;
