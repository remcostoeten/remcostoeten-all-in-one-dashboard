'use client';

import { TaskForm } from './TaskForm';

const AddTaskForm = () => (
  <TaskForm
    onValid={async (data) => {
      await fetch(`/api/task`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    }}
  />
);

export { AddTaskForm };
