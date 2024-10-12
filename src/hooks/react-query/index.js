import { useQuery } from "@tanstack/react-query";

// Get item with dependencies

export const useQueryWithDependencies = (
  key,
  action,
  dependencies,
  apiParams
) => {
  console.log(key)
  return useQuery({
    queryKey: [key, dependencies],
    queryFn: () => {
      return action(apiParams);
    },
  });
};

// Get item with out dependencies like normal query

export const useQueryWithoutDependencies = (key, action) => {
  return useQuery({
    queryKey: [key],
    queryFn: action,
  });
};
