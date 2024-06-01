"use client";

import { TodoForm } from "./TodoForm";

const AddTodoForm = () => (
  <TodoForm
    onValid={async (data) => {
      await fetch(`/api/todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }}
  />
);

export { AddTodoForm };
