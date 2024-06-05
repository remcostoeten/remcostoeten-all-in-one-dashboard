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
  edit?: boolean;
  id?: number;
  onValid: (data: any) => Promise<void>;
  defaultValues?: {
    title?: string;
    description?: string;
    body?: string;
    username?: string;
  };
};

export type TaskFormValues = {
  title: string;
  body: string;
  completed: boolean;
  description: string;
};
