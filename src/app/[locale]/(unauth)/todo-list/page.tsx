import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { TodoList } from "./_components/TodoList";
import { AddTodoForm } from "./_components/AddTodoForm";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "Todo",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const Todo = () => {
  return (
    <>
      <AddTodoForm />

      <Suspense fallback="Loading...">
        <TodoList />
      </Suspense>
    </>
  );
};

export default Todo;
