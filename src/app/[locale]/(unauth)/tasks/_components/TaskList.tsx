import { db } from "@/libs/DB";
import { taskSchema } from "@/models/Schema";

import { DeleteTaskEntry } from "./DeleteTaskEntry";

const TaskList = async () => {
  const task = await db.select().from(taskSchema).all();

  return (
    <div className="mt-5" data-testid="task-list">
      {task.map((elt) => (
        <div key={elt.id} className="mb-1 flex items-center gap-x-1">
          <DeleteTaskEntry id={elt.id} />
          <p>dwdw</p>
        </div>
      ))}
    </div>
  );
};

export { TaskList };
