import { useQuery } from "@tanstack/react-query";
import { GetAllCourseByPagination, GetTechnologies } from "../../core/services/api/get-data";

export const useGetTechnologiesQuery = () => {
  return useQuery({
    queryKey: ["GET_TECHNOLOGIES"],
    queryFn: GetTechnologies,
  });
};

export const useGetCoursesListQuery = (dependencies, apiParams) => {
  return useQuery({
    queryKey: ["GET_COURSES", dependencies],
    queryFn: () => {
      return GetAllCourseByPagination(apiParams);
    },
  });
};
