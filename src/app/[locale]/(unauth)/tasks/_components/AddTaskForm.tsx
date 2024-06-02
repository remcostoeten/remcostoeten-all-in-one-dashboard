"use client";

import TaskForm from "./TaskForm";

const AddTaskForm = () => (
  <TaskForm
    onValid={async (data: any) => {
      await fetch(`/api/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }}
  />
);

export { AddTaskForm };
