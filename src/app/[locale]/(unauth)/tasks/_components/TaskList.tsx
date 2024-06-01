import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { taskSchema } from '@/models/Schema';

import { DeleteTaskEntry } from './DeleteTaskEntry';
import { EditableTaskEntry } from './EditableTaskEntry';

const TaskList = async () => {
  const task = await db.select().from(taskSchema).all();

  logger.info('Get all task entries');

  return (
    <div className="mt-5" data-testid="task-list">
      {task.map((elt) => (
        <div key={elt.id} className="mb-1 flex items-center gap-x-1">
          <DeleteTaskEntry id={elt.id} />

          <EditableTaskEntry
            id={elt.id}
            username={elt.username}
            body={elt.body}
          />
        </div>
      ))}
    </div>
  );
};

export { TaskList };
