'use client'
import { useEffect, useState } from 'react';
import { db } from "@/libs/DB";
import { logger } from "@/libs/Logger";
import { guestbookSchema } from "@/models/Schema";
import { DeleteGuestbookEntry } from '@/components/DeleteGuestbookEntry';
import { EditableGuestbookEntry } from '@/components/EditableGuestbookEntry';

export default function TaskList() {
  const [guestbook, setGuestbook] = useState([]);

  useEffect(() => {
    const fetchGuestbook = async () => {
      const entries = await db.select().from(guestbookSchema).all();
      setGuestbook(entries);
      logger.info("Get all guestbook entries");
    };

    fetchGuestbook();
  }, []);

  return (
    <div className="mt-5" data-testid="guestbook-list">
      {guestbook.map((elt) => (
        <div key={elt.id} className="mb-1 flex items-center gap-x-1">
          <DeleteGuestbookEntry id={elt.id} />
          <EditableGuestbookEntry
            id={elt.id}
            username={elt.username}
            body={elt.body}
          />
        </div>
      ))}
    </div>
  );
}