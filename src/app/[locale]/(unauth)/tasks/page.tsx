import { getTranslations } from "next-intl/server";
import { AddTaskForm } from "./_components/AddTaskForm";
import TaskList from "./_components/TaskList";

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
  return (
    <>
      <AddTaskForm />
      {/* <Suspense fallback={<p>Loading...</p>}> */}
        <TaskList />
      {/* </Suspense> */}
    </>
  );
};

export default Task;
