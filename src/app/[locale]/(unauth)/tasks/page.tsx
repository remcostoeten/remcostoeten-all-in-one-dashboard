import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

import { AddTaskForm } from "./_components/AddTaskForm";
import { TaskList } from "./_components/TaskList";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "Task",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const Task = () => {
  const t = useTranslations("Guestbook");

  return (
    <>
      <AddTaskForm />

      <Suspense fallback={<p>{t("loading_guestbook")}</p>}>
        <TaskList/>
     </Suspense>
    </>
  );
};

export default Task;
