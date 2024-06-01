// Import React and necessary hooks
import type { TodoItem } from "@/types/todoItemType";
import React, { useState } from "react";

// Assuming TodoItem is imported from another file where it's defined
// Adjust the import path according to your project structure

// Define the props interface including the optional 'edit' property
interface TodoFormProps {
  edit?: boolean; // Optional 'edit' property
  id: number;
  defaultValues?: Partial<TodoItem>;
  onValid: (data: TodoItem) => Promise<void>;
}

// TodoForm component
const TodoForm: React.FC<TodoFormProps> = ({
  edit,
  id,
  defaultValues,
  onValid,
}) => {
  // State for form fields, initialized with default values if available
  const [title, setTitle] = useState(defaultValues?.title || "");
  const [description, setDescription] = useState(
    defaultValues?.description || "",
  );

  // Form submission handler
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Assuming defaultValues contains all necessary properties or you have defaults to use
    const data: TodoItem = {
      id,
      title,
      description,
      completed: defaultValues?.completed ?? false, // Provide a default value if not present
      createdAt: defaultValues?.createdAt ?? new Date(), // Use current date/time as default
      updatedAt: defaultValues?.updatedAt ?? new Date(), // Use current date/time as default
      username: defaultValues?.username ?? "unknown", // Provide a default username
    };

    // Call the onValid callback with the constructed data
    await onValid(data);

    // Optionally reset form or perform other actions as needed
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">{edit ? "Update Todo" : "Create Todo"}</button>
    </form>
  );
};

export default TodoForm;
