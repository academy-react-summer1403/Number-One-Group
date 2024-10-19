import http from "../../interceptor";

const GetBlogWithId = async (id) => {
    return await http.get(`/News/${id}`);
};

export default GetBlogWithId;
