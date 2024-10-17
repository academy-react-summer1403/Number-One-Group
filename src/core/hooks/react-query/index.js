import { useMutation, useQuery } from "@tanstack/react-query";

// Get item with dependencies

export const useQueryWithDependencies = (
  key,
  action,
  dependencies,
  apiParams
) => {
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

// Sending data along with refetching items when successful
export const useMutationWithRefetch = (key, action,refetch) => {
  return useMutation({
    mutationKey: [key],
    mutationFn: (id) => {
      return action(id);
    },
    onSuccess: () => {
      refetch();
    },
  });
};

// Sending data items when normal
export const useMutationWithoutRefetch = (key, action) => {
  return useMutation({
    mutationKey: [key],
    mutationFn: (id) => {
      return action(id);
    },
  });
};
