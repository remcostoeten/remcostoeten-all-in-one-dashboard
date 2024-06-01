import { todoSchema } from "@/core/db-models";
import { db } from "@/libs/DB";
import { logger } from "@/libs/Logger";

const TodoList = async () => {
  const guestbook = await db.select().from(todoSchema).all();

  logger.info("Get all todo entries");

  return (
    <div className="mt-5" data-testid="guestbook-list">
      {guestbook.map((elt) => (
        <div key={elt.id} className="mb-1 flex items-center gap-x-1">
          {/* <DeleteGuestbookEntry id={elt.id} /> */}
          {/* <EditableGuestbookEntry */}
          {/* id={elt.id} */}
          {/* username={elt.username} */}
          {/* body={elt.body} */}
          {/* /> */}
          //{" "}
        </div>
      ))}
    </div>
  );
};

export { TodoList };
