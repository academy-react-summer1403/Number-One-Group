import http from "../../../interceptor";

const GetReplayBlogComment = async (paramsId) => {
  try {
    const result = await http.get(`/News/GetRepliesComments?Id=${paramsId}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default GetReplayBlogComment;
