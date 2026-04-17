import { Button } from '@/components/ui/button'
import React from 'react'

function AddTaskButton({ setOpen }) {
    return (
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Tasks</h2>

            <Button onClick={() => setOpen(true)}>
                + Add Task
            </Button>
        </div>
    )
}

export default AddTaskButton