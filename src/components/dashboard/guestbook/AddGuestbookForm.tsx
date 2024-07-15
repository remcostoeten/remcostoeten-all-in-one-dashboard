'use client'

import { GuestbookForm } from './GuestbookForm'

const AddGuestbookForm: React.FC = () => (
    <GuestbookForm
        props={{
            onValid: async (data) => {
                const res = await fetch(`/api/guestbook`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })

                if (!res.ok) {
                    throw new Error('Failed to add guestbook entry')
                }
            }
        }}
    />
)

export { AddGuestbookForm }
