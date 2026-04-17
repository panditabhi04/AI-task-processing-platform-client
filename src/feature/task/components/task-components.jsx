import React from 'react'
import AddTaskButton from './add-task-button'
import AddTaskModal from './add-task-modal'
import TaskTable from "../../task/components/table-task"
import { useTasks } from '../hook/useTaskHook';


function TaskComponents({ open, setOpen, onAddTask, isPending }) {
    const { data, isLoading, isError } = useTasks();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading tasks</p>;
  return (
    <div>
      <AddTaskButton setOpen={setOpen} />
      <AddTaskModal
        open={open}
        setOpen={setOpen}
        onSubmit={onAddTask}
        isPending={isPending}
      />
      <TaskTable/>
    </div>
  )
}

export default TaskComponents