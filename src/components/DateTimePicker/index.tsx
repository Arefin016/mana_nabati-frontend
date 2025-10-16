import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { format } from "date-fns";

interface DateTimePickerProps {
  onDateTimeChange?: (dateTime: Date | undefined) => void;
  initialDateTime?: Date;
  trigger?: React.ReactNode;
}

export default function DateTimePicker({
  onDateTimeChange,
  initialDateTime,
  trigger,
}: DateTimePickerProps) {
  const [date, setDate] = useState<Date | undefined>(
    initialDateTime || new Date()
  );
  const [time, setTime] = useState<string>("");
  const [open, setOpen] = useState(false);

  // Set initial time if provided or a default
  useEffect(() => {
    if (initialDateTime) {
      const hours = initialDateTime.getHours().toString().padStart(2, "0");
      const minutes = initialDateTime.getMinutes().toString().padStart(2, "0");
      const seconds = initialDateTime.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    } else {
      // Set a default time if no initialDateTime is provided
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    }
  }, [initialDateTime]);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const handleContinue = () => {
    if (date && time) {
      const combinedDateTime = new Date(date);

      const [hours, minutes, seconds] = time.split(":").map(Number);

      combinedDateTime.setHours(hours);
      combinedDateTime.setMinutes(minutes);
      combinedDateTime.setSeconds(seconds);
      combinedDateTime.setMilliseconds(0);

      if (onDateTimeChange) {
        onDateTimeChange(combinedDateTime);
      }
      console.log("Combined Date and Time:", combinedDateTime);
    } else {
      if (onDateTimeChange) {
        onDateTimeChange(undefined);
      }
      console.warn("Date or time not fully selected.");
    }
    setOpen(false);
  };

  // Format the selected date and time for display
  const formatDateTime = () => {
    if (date && time) {
      const combinedDateTime = new Date(date);
      const [hours, minutes, seconds] = time.split(":").map(Number);
      combinedDateTime.setHours(hours);
      combinedDateTime.setMinutes(minutes);
      combinedDateTime.setSeconds(seconds);
      return format(combinedDateTime, "d MMM, HH:mm"); // e.g., "16 Oct, 10:43"
    }
    return "Date and time";
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <Button
            variant={"outline"}
            className="focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 w-full justify-between"
            onClick={() => {
              console.log("Add customer");
            }}
          >
            {formatDateTime()}
            <CalendarIcon />
          </Button>
        )}
      </PopoverTrigger>

      <PopoverContent className="w-auto">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="bg-transparent p-0 [--cell-size:--spacing(10.5)]"
        />

        <div className="border-border border-t py-2">
          <Label htmlFor="selected_time" className="sr-only">
            Time
          </Label>
          <Input
            id="selected_time"
            type="time"
            step="1"
            value={time}
            onChange={handleTimeChange}
            className="border border-border"
          />
        </div>

        <Button
          disabled={!date || !time}
          className="w-full bg-primary01 hover:bg-primary01/90 cursor-pointer"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </PopoverContent>
    </Popover>
  );
}
