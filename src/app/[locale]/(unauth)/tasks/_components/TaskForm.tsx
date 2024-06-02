import { TaskValidation } from "@/validations/TaskValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type TaskFormValues = {
  title: string;
  description: string;
  completed: boolean;
};

type TaskFormProps = {
  edit?: boolean;
  id?: number;
  defaultValues?: TaskFormValues;
  onValid: (data: TaskFormValues) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({
  edit,
  id,
  defaultValues,
  onValid,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(TaskValidation),
    defaultValues: edit ? defaultValues : undefined,
  });
  const router = useRouter();

  const handleCreate = handleSubmit(async (data) => {
    await onValid(data);

    reset();
    router.refresh();
  });

  return (
    <form onSubmit={handleCreate}>
      <div>
        <label
          className="text-sm font-bold text-gray-700"
          htmlFor={`title${edit ? `-${id}` : ""}`}
        >
          Title
          <input
            id={`title${edit ? `-${id}` : ""}`}
            className="mt-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring focus:ring-blue-300/50"
            {...register("title")}
          />
        </label>
        {errors.title?.message && (
          <div className="my-2 text-xs italic text-red-500">
            {errors.title?.message}
          </div>
        )}
      </div>

      <div className="mt-3">
        <label
          className="text-sm font-bold text-gray-700"
          htmlFor={`description${edit ? `-${id}` : ""}`}
        >
          Description
          <input
            id={`description${edit ? `-${id}` : ""}`}
            className="mt-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring focus:ring-blue-300/50"
            {...register("description")}
          />
        </label>
        {errors.description?.message && (
          <div className="my-2 text-xs italic text-red-500">
            {errors.description?.message}
          </div>
        )}
      </div>

      <div className="mt-3">
        <label
          className="text-sm font-bold text-gray-700"
          htmlFor={`completed${edit ? `-${id}` : ""}`}
        >
          Completed
          <input
            id={`completed${edit ? `-${id}` : ""}`}
            type="checkbox"
            className="mt-2"
            {...register("completed")}
          />
        </label>
        {errors.completed?.message && (
          <div className="my-2 text-xs italic text-red-500">
            {errors.completed?.message}
          </div>
        )}
      </div>

      <div className="mt-5">
        <button
          className="rounded bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300/50"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export { TaskForm };
