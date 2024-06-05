export type EditableTaskEntryProps = {
  id: number;
  title: string;
  description: string | null;
  body: string;
  completed: boolean | number;
  createdAt: string | null;
  updatedAt: string | null;
  username: string;
};

export type TaskFormProps = {
  id: number;
  defaultValues: TaskFormValues;
  onValid: (data: TaskFormValues) => Promise<void>;
  onCompletedChange: (value: boolean) => void;
  edit?: boolean; // Add the edit prop here
};

export type TaskFormValues = {
  title: string;
  body: string;
  completed: boolean;
  description: string;
};
