import { useData } from "@/core/contexts/CalendarDataContext";
import { endOfDay, endOfWeek, startOfWeek } from "date-fns";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import AddAppointmentDialog from "./AddAppointmentDialog";
import { DateRangePicker } from "@/components/ui";
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

    // Update the date range in the context when `range` changes
    useEffect(() => {
        setDateRange(range);
    }, [range]);

    // Handle date range update from the DateRangePicker
    const handleDateRangeUpdate = (range: DateRange) => {
        const from = range.from;
        const to = range.to ?? endOfDay(range.from as Date);
        setRange({ from, to });
    };

    return (
        <div className={cn("flex items-center justify-end space-x-2", className)} {...props}>
            {/* Component to add new appointments */}
            <AddAppointmentDialog />

            {/* Date range picker component */}
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
