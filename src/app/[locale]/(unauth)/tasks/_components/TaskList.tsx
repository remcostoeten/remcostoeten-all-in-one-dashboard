import { db } from "@/libs/DB";
import { logger } from "@/libs/Logger";
import { guestbookSchema, taskSchema } from "@/models/Schema";

import EditableTaskEntry from "./EditableTaskEntry";

const TaskList = async () => {
  const tasks = await db.select().from(taskSchema).all();

  logger.info("Get all guestbook entries");

  return (
    <div className="mt-5" data-testid="guestbook-list">
      {tasks.map((elt) => (
        <div key={elt.id} className="mb-1 flex items-center gap-x-1">
          {/* <DeleteTaskEntry id={elt.id} /> */}

          <EditableTaskEntry
            id={elt.id}
            title={elt.title}
            body={elt.body}
            completed={Boolean(elt.completed)}
            description={elt.description ?? ""} createdAt={null} updatedAt={null} username={""}/>
        </div>
      ))}
    </div>
  );
};

export { TaskList };
