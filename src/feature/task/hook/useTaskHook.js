import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addTask, fetchTasks } from "../api/task-api"
import { QUERY_CONFIG, QUERY_KEYS } from "../constants/queryKeys"

export const useAddTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addTask,

    onSuccess: () => {
      
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.TASKS,
      })
    },
  })
}

export const useTasks = () => {
  return useQuery({
    queryKey: QUERY_KEYS.TASKS,
    queryFn: fetchTasks,

    refetchInterval: QUERY_CONFIG.STALE_TIME.SHORT, 
    staleTime: QUERY_CONFIG.STALE_TIME.MEDIUM,   
  });
};

