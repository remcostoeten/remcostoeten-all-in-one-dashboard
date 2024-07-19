import { useState } from 'react'
import { savePincode } from '../../core/@server/actions/createPincode'
import { verifyPincode } from '../../core/@server/actions/verifyPincode'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    Button,
    DialogTitle,
    DialogDescription,
    Label
} from '../ui'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp'

export default function CreatePincode() {
    const [message, setMessage] = useState('')
    const [isPincodeSet, setIsPincodeSet] = useState(false)

    const handleSetPincode = async (formData: FormData) => {
        const result = await savePincode(formData)
        setMessage(result.success ? 'Pincode set successfully' : result.message)
        if (result.success) {
            setIsPincodeSet(true)
        }
    }

    const handleVerifyPincode = async (formData: FormData) => {
        const result = await verifyPincode(formData)
        setMessage(result.success ? 'Access granted' : result.message)
    }

    return (
        <Dialog>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Welcome to Acme SaaS</DialogTitle>
                    <DialogDescription>
                        Let's get started by setting up your 6-character
                        pincode.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <Label htmlFor='pincode'>
                        Enter your 6-character pincode
                    </Label>
                    <InputOTP
                        maxLength={6}
                        name='pincode'
                        render={({ slots }) => (
                            <InputOTPGroup>
                                {slots.map((slot, index) => (
                                    <InputOTPSlot key={index} {...slot} />
                                ))}
                            </InputOTPGroup>
                        )}
                    />
                    <Button type='submit'>Set Pincode</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
