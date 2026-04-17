"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AddTaskModal({ open, setOpen, onSubmit, isPending }) {
  const operations = ["uppercase", "lowercase", "reverse", "wordcount"]

  // ✅ separate state
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value) {
      alert("Please select operation")
      return
    }

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    onSubmit(data)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md rounded-2xl">

        {/* Header */}
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Add Task
          </DialogTitle>
          <DialogDescription>
            Create a new AI task. Fill details and save.
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="space-y-2">
            <Label>Title</Label>
            <Input
              name="title"
              placeholder="Enter task title"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Input
              name="inputText"
              placeholder="Enter description"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label>Operation</Label>

            {/* ✅ hidden input for form */}
            <input type="hidden" name="operation" value={value} />

            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full justify-start h-10"
                >
                  {value || "Select operation"}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search operation..." />
                  <CommandList>
                    {operations.map((op) => (
                      <CommandItem
                        key={op}
                        onSelect={() => {
                          setValue(op)
                          setPopoverOpen(false)
                        }}
                      >
                        {op}
                      </CommandItem>
                    ))}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Footer */}
          <DialogFooter className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : "Save Task"}
            </Button>
          </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
  )
}