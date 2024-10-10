import { useQuery } from "@tanstack/react-query";
import { GetLandingReports } from "../../core/services/api/get-data";

const useGetReportsQuery = () => {
  return useQuery({
    queryKey: ["GET_REPORTS"],
    queryFn: GetLandingReports,
  });
};

export default useGetReportsQuery;
