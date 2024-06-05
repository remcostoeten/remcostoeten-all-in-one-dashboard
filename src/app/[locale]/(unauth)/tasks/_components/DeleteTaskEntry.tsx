"use client";

import React from 'react';
import { db } from "@/libs/DB";
import { taskSchema } from "@/models/Schema";

const DeleteTaskEntry = ({ taskId }) => {
  const handleDelete = async () => {
    try {
      await db.delete().from(taskSchema).where({ id: taskId }).execute();
      alert('Task deleted successfully');
      window.location.reload(); // Reload the page to reflect changes
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Failed to delete task.');
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
    >
      Delete
    </button>
  );
};

export default DeleteTaskEntry;