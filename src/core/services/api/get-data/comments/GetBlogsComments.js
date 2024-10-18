import http from "../../../interceptor";

const GetBlogsComments = async (id) => {
  return await http.get(`/News/GetNewsComments?NewsId=${id}`,
  );
};

export default GetBlogsComments;
