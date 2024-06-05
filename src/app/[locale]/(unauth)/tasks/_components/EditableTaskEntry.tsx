"use client";

import { useState } from "react";
import TaskForm  from "./TaskForm";

type EditableTaskEntryProps = {
  id: number;
  title: string;
  description: string | null;
  body: string;
  completed: boolean | number;
  createdAt: string | null;
  updatedAt: string | null;
};

type TaskFormValues = {
  title: string;
  body: string;
  completed: boolean;
  description: string;
};

export default function EditableTaskEntry(props: EditableTaskEntryProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(Boolean(props.completed));

  const handleEdit = () => {
    setIsEditing((value) => !value);
  };

  const handleCompletedChange = (value: boolean) => {
    setCompleted(value);
  };

  const defaultValues: TaskFormValues = {
    title: props.title,
    body: props.body,
    completed: completed,
    description: props.description ?? "",
  };

  return (
    <div className="flex items-center gap-x-2 bg-white shadow rounded p-4 mb-2">
      <button
        type="button"
        aria-label="edit"
        onClick={handleEdit}
        className="bg-blue-500 text-white rounded p-2"
      >
        {/* SVG icon */}
      </button>
      <div className="ml-1 grow">
        {isEditing ? (
          <TaskForm
            edit
            id={props.id}
            defaultValues={defaultValues}
            onValid={async (data: TaskFormValues) => {
              await fetch(`/api/tasks`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id: props.id,
                  ...data,
                }),
              });
              setIsEditing(false);
            }}
            onCompletedChange={handleCompletedChange}
          />
        ) : (
          <div className="flex flex-col gap-y-2">
            <h3 className="text-lg font-bold">{props.title}</h3>
            <p className="text-gray-600">{props.description}</p>
            <p className="text-gray-500">{props.body}</p>
            <p className="text-gray-400">
              Created at: {props.createdAt}
            </p>
            <p className="text-gray-400">
              Updated at: {props.updatedAt}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}