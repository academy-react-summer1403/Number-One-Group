import { toast } from "react-toastify";
import http from "../../interceptor";

const StudentUserPayList = async (id) => {
  console.log(id);
  try {
    const response = await http.get(
      `/CoursePayment/StudentUserPayList?CourseId=${id}`
    );
    return response[0];
  } catch {
    return []
  }
};

export default StudentUserPayList;
