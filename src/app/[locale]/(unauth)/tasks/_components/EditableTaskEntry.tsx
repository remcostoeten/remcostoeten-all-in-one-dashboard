"use client";

import { useState } from "react";
import { TaskForm } from "./TaskForm";

type EditableTaskEntryProps = {
  id: number;
  title: string;
  description: string | null;
  body: string;
  completed: boolean | number;
  createdAt: string | null;
  updatedAt: string | null;
  username: string;
};

type TaskFormValues = {
  title: string;
  body: string;
  completed: boolean;
  description: string;
};


export default function EditableTaskEntry(props: EditableTaskEntryProps) {
const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((value) => !value);
  };

  const defaultValues: TaskFormValues = {
    title: props.title,
    body: props.body,
    completed: Boolean(props.completed),
    description: props.description ?? "",
  };

  return (
    <div className="flex items-center gap-x-2">
      <button
        type="button"
        aria-label="edit"
        onClick={() => {
          handleEdit();
        }}
      >
        <svg
          className="size-6 stroke-current"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M4 20h4L18.5 9.5a1.5 1.5 0 0 0-4-4L4 16v4M13.5 6.5l4 4" />
        </svg>
      </button>

      <div className="ml-1 grow">
        {isEditing ? (
          <TaskForm
            edit
            id={props.id}
            defaultValues={defaultValues}
            onValid={async (data) => {
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
          />
        ) : (
          <div>
            <h3 className="text-lg font-bold">{props.title}</h3>
            <p className="text-gray-600">{props.description}</p>
            <p className="text-gray-800">{props.body}</p>
            <p className="text-sm text-gray-500">
              Created by: {props.username}
            </p>
            <p className="text-sm text-gray-500">
              {props.completed ? "Completed" : "Not Completed"}
            </p>
            <p className="text-sm text-gray-500">
              Created At:{" "}
              {props.createdAt
                ? new Date(props.createdAt).toLocaleString()
                : "N/A"}
            </p>
            <p className="text-sm text-gray-500">
              Updated At:{" "}
              {props.updatedAt
                ? new Date(props.updatedAt).toLocaleString()
                : "N/A"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
