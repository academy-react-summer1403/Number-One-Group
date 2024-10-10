import { useQuery } from "@tanstack/react-query"
import { GetAllTeachers } from "../../core/services/api/get-data"

export const useGetTeachersQuery = () => {
    return useQuery({
        queryKey: ['GET_TEACHERS'],
        queryFn: GetAllTeachers
    })
}

