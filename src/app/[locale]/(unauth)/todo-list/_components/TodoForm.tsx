import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { z } from "zod";

const TodoValidation = z.object({
  title: z.string(),
});

const EditTodoValidation = TodoValidation.extend({
  id: z.number(),
});

type ITodoFormProps =
  | {
      edit: true;
      id: number;
      defaultValues: z.infer<typeof EditTodoValidation>;
      onValid: SubmitHandler<z.infer<typeof EditTodoValidation>>;
    }
  | {
      edit?: false;
      defaultValues?: z.infer<typeof TodoValidation>;
      onValid: SubmitHandler<z.infer<typeof TodoValidation>>;
    };

type FormValues =
  | z.infer<typeof TodoValidation>
  | z.infer<typeof EditTodoValidation>;

const TodoForm = (props: ITodoFormProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(props.edit ? EditTodoValidation : TodoValidation),
    defaultValues: props.defaultValues,
  });

  const router = useRouter();
  const t = useTranslations("TodoForm");

  const handleCreate = handleSubmit(async (data) => {
    if (props.edit) {
      await props.onValid(data as z.infer<typeof EditTodoValidation>);
    } else {
      await props.onValid(data as z.infer<typeof TodoValidation>);
    }

    reset();
    router.refresh();
  });

  return (
    <form onSubmit={handleCreate}>
      <div>
        <label className="text-sm font-bold text-gray-700" htmlFor="title">
          {t("title")}
          <input
            {...register("title", { required: true })}
            id="title"
            type="text"
            className="form-input mt-1 block w-full"
            placeholder={t("titlePlaceholder")}
          />
          {errors.title && <p>{t("titleError")}</p>}
        </label>
      </div>
      <button type="submit" className="mt-4 btn btn-primary">
        {props.edit ? t("update") : t("create")}
      </button>
    </form>
  );
};

export default TodoForm;
