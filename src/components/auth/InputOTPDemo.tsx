'use client'

import { useState } from 'react'
import { savePincode } from '../../core/@server/actions/createPincode'
import { verifyPincode } from '../../core/@server/actions/verifyPincode'

export function PincodeForm() {
    const [message, setMessage] = useState('')

    return (
        <div>
            <form action={savePincode}>
                <input
                    type='text'
                    name='pincode'
                    maxLength={6}
                    pattern='\d{6}'
                    required
                />
                <button type='submit'>Set Pincode</button>
            </form>

            <form
                action={async (formData) => {
                    const result = await verifyPincode(formData)
                    setMessage(
                        result.success ? 'Access granted' : result.message
                    )
                }}
            >
                <input
                    type='text'
                    name='pincode'
                    maxLength={6}
                    pattern='\d{46}'
                    required
                />
                <button type='submit'>Verify Pincode</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    )
}
// import {
//     InputOTP,
//     InputOTPGroup,
//     InputOTPSeparator,
//     InputOTPSlot,
// } from "@/components/ui/input-otp"

// export function InputOTPDemo() {
//     return (
//         <InputOTP maxLength={6}>
//             <InputOTPGroup>
//                 <InputOTPSlot index={0} />
//                 <InputOTPSlot index={1} />
//                 <InputOTPSlot index={2} />
//             </InputOTPGroup>
//             <InputOTPSeparator />
//             <InputOTPGroup>
//                 <InputOTPSlot index={3} />
//                 <InputOTPSlot index={4} />
//                 <InputOTPSlot index={5} />
//             </InputOTPGroup>
//         </InputOTP>
//     )
// }
