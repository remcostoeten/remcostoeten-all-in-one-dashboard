import { db } from '@/core/libs/DB'
import { logger } from '@/core/libs/Logger'
import { guestbookSchema } from '@/core/models/Schema'

import { EditableGuestbookEntry } from '../../EditableGuestbookEntry'
import { DeleteGuestbookEntry } from './DeleteGuestbookEntry'

const GuestbookList = async () => {
    const guestbook = await db.select().from(guestbookSchema).all()

    logger.info('Get all guestbook entries')

    return (
        <div className='mt-5' data-testid='guestbook-list'>
            {guestbook.map((elt) => (
                <div key={elt.id} className='mb-1 flex items-center gap-x-1'>
                    <DeleteGuestbookEntry id={elt.id} />

                    <EditableGuestbookEntry
                        id={elt.id}
                        username={elt.username}
                        body={elt.body}
                    />
                </div>
            ))}
        </div>
    )
}

export { GuestbookList }
