"use client"

import React, { useState } from "react"
import TaskComponents from "../components/task-components"
import { useAddTask } from "../hook/useTaskHook"


function TaskContainer() {
  const [open, setOpen] = useState(false)

  const { mutate, isPending, isError, error } = useAddTask()

  const handleAddTask = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        console.log("Task Added:", res)

        setOpen(false)
      },
      onError: (err) => {
        console.error(" Error:", err)
      },
    })
  }

  return (
    <div>
      <TaskComponents
        open={open}
        setOpen={setOpen}
        onAddTask={handleAddTask}
        isPending={isPending}
      />

      {/* Optional UI feedback */}
      {isPending && <p>Adding task...</p>}
      {isError && <p className="text-red-500">{error.message}</p>}
    </div>
  )
}

export default TaskContainer