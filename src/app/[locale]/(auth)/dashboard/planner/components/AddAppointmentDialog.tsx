'use client'

import React, { useState, useTransition } from 'react'
import { format } from 'date-fns'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger
} from '@/components/ui/dialog'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CalendarIcon } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { toast } from 'sonner'
import { Input, Calendar, TimePicker, Button } from '@/components/ui'
import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@/components/ui/popover'
import { createAppointmentSchema } from '@/core/models'
import { cn } from '@/core/utils/utils'
import { useData } from '@/core/contexts/CalendarDataContext'
import type { Appointment as AppointmentType } from '@/core/models'
import { ShortcutKey } from '@/components/shared/navigation/Search'

const CustomInput = (props: any) => {
    return (
        <div className='relative'>
            <Input
                className='border-none w-full bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder={props.placeholder}
                style={{ paddingRight: '2rem' }}
                {...props}
            />
            <div className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-opacity-60'>
                <ShortcutKey>/</ShortcutKey>
            </div>
        </div>
    )
}

const AddAppointmentDialog: React.FC = () => {
    const { addAppointment, resources } = useData()
    const [isOpened, setIsOpened] = useState(false)
    const [isPending, startAddAppointmentTransition] = useTransition()

    const form = useForm<AppointmentType>({
        resolver: zodResolver(createAppointmentSchema),
        defaultValues: {
            title: '',
            start: new Date(),
            end: new Date(new Date().getTime() + 60 * 60 * 1000),
            details: {
                service: 'Music'
            }
        }
    })

    function onSubmit(values: z.infer<typeof createAppointmentSchema>) {
        const id = crypto.randomUUID()
        const newAppointment: AppointmentType = {
            details: {
                service: 'Music'
            },
            order: 0,
            id: id,
            title: values.title,
            start: values.start,
            end: values.end,
            resourceId: 'your_resource_id_here' // Replace "your_resource_id_here" with the actual resourceId
        }

        startAddAppointmentTransition(() => {
            toast.promise(
                () =>
                    new Promise((resolve) => {
                        resolve(addAppointment(newAppointment))
                    }),
                {
                    loading: 'Adding appointment',
                    success: 'Appointment added',
                    error: 'Failed to add appointment'
                }
            )
            form.reset()
        })
        setTimeout(() => {
            setIsOpened(false)
        }, 1000)
    }

    return (
        <Dialog open={isOpened} onOpenChange={setIsOpened}>
            <DialogTrigger asChild>
                <Button variant='outline'>Add Appointment</Button>
            </DialogTrigger>
            <DialogContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-8'
                    >
                        <FormField
                            control={form.control}
                            name='title'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <CustomInput
                                            placeholder='Appointment title'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='start'
                            render={({ field }) => (
                                <FormItem className='flex flex-col'>
                                    <FormLabel className='text-left'>
                                        Start
                                    </FormLabel>
                                    <Popover>
                                        <FormControl>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant='outline'
                                                    className={cn(
                                                        'w-[280px] justify-start text-left font-normal',
                                                        !field.value &&
                                                            'text-muted-foreground'
                                                    )}
                                                >
                                                    <CalendarIcon className='mr-2 h-4 w-4' />
                                                    {field.value ? (
                                                        format(
                                                            field.value,
                                                            'PPP HH:mm:ss'
                                                        )
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                </Button>
                                            </PopoverTrigger>
                                        </FormControl>
                                        <FormMessage />
                                        <PopoverContent className='w-auto p-0'>
                                            <Calendar
                                                mode='single'
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                            <div className='border-t border-border p-3'>
                                                <TimePicker
                                                    setDate={field.onChange}
                                                    date={field.value}
                                                />
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='end'
                            render={({ field }) => (
                                <FormItem className='flex flex-col'>
                                    <FormLabel className='text-left'>
                                        End
                                    </FormLabel>
                                    <Popover>
                                        <FormControl>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant='outline'
                                                    className={cn(
                                                        'w-[280px] justify-start text-left font-normal',
                                                        !field.value &&
                                                            'text-muted-foreground'
                                                    )}
                                                >
                                                    <CalendarIcon className='mr-2 h-4 w-4' />
                                                    {field.value ? (
                                                        format(
                                                            field.value,
                                                            'PPP HH:mm:ss'
                                                        )
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                </Button>
                                            </PopoverTrigger>
                                        </FormControl>
                                        <PopoverContent className='w-auto p-0'>
                                            <Calendar
                                                mode='single'
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                            <div className='border-t border-border p-3'>
                                                <TimePicker
                                                    setDate={field.onChange}
                                                    date={field.value}
                                                />
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='details.service'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Details</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger>
                                                <SelectValue>
                                                    {field.value
                                                        ? resources.find(
                                                              (resource) =>
                                                                  resource.id ===
                                                                  field.value
                                                          )?.name
                                                        : 'Select a resource'}
                                                </SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {resources.map((resource) => (
                                                    <SelectItem
                                                        key={resource.id}
                                                        value={resource.id}
                                                    >
                                                        {resource.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type='submit'>Save changes</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default AddAppointmentDialog
