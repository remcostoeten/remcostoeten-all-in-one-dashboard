import React, { useEffect, useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { endOfDay, endOfWeek, startOfWeek } from "date-fns";
import AddAppointmentDialog from "./AddAppointmentDialog";
import { DateRangePicker } from "@/components/ui";
import { useData } from "@/core/contexts/CalendarDataContext";
import { useCalendar } from "@/core/contexts/PlannerContext";
import { cn } from "@/core/utils/cn";

interface CalendarToolbarProps extends React.HTMLAttributes<HTMLDivElement> { }

const CalendarToolbar: React.FC<CalendarToolbarProps> = ({
    className,
    ...props
}) => {
    const { setDateRange } = useCalendar();
    const { addResource, addAppointment } = useData();

    const [range, setRange] = useState<DateRange>({
        from: startOfWeek(new Date(), {
            locale: { options: { weekStartsOn: 1 } },
        }),
        to: endOfWeek(new Date()),
    });
    const handleDateRangeUpdate = (range: DateRange) => {
        const from = range.from;
        const to = range.to ?? endOfDay(range.from as Date);
        setDateRange({
            from: from,
            to: to
        });
    };
    useEffect(() => {
        setDateRange(range);
    }, [range]);

    return (
        <div
            className={cn("flex items-center justify-end space-x-2", className)}
            {...props}
        >
            <AddAppointmentDialog />
            <DateRangePicker
                onUpdate={(value) => handleDateRangeUpdate(value.range)}
                initialDateFrom={range.from}
                initialDateTo={range.to}
                align="start"
                showCompare={false}
            />
        </div>
    );
};

export default React.memo(CalendarToolbar);