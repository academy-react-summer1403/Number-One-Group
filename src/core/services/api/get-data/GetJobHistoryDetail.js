import http from "../../interceptor";

const GetJobHistoryDetail = async (id) => {
  try {
    const response = await http.get(
      `/SharePanel/GetJobHistory?HistoryId=${id}`
    );
    return response.singleJob;
  } catch (error) {
    return;
  }
};

export default GetJobHistoryDetail;
