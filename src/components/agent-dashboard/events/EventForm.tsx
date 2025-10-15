import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { EventFormSchema } from "@/schemas/events/eventFormSchema";
import { useNavigate } from "react-router";

export default function EventForm() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof EventFormSchema>>({
    resolver: zodResolver(EventFormSchema),
    defaultValues: {
      eventName: "",
      promoterEmail: "",
    },
  });

  function onSubmit(values: z.infer<typeof EventFormSchema>) {
    console.log(values);

    navigate(`events/${values.eventName}`);
  }

  return (
    <section className="">
      <div className="w-full">
        <h1 className="text-center text-[20px] font-semibold py-7">
          Create New Event
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="eventName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#212B36] text-base font-normal">
                    Event Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 bg-[#F9FAFB] rounded-[8px] border border-[#DFE3E8]"
                      placeholder="Enter event name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="promoterEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#212B36] text-base font-normal">
                    Promoter Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 bg-[#F9FAFB] rounded-[8px] border border-[#DFE3E8]"
                      placeholder="example@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="bg-primary01/90 text-white w-full mt-5 h-12 rounded-[8px] hover:bg-primary01/80 hover:opacity-90 cursor-pointer"
              type="submit"
            >
              Create
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
