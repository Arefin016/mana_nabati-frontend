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

const EventFormSchema = z.object({
  eventName: z.string().min(1, "Event name is required"),
  promoterEmail: z.string().email("Invalid email address"),
});

export default function EventForm() {
  const form = useForm<z.infer<typeof EventFormSchema>>({
    resolver: zodResolver(EventFormSchema),
    defaultValues: {
      eventName: "",
      promoterEmail: "",
    },
  });

  function onSubmit(values: z.infer<typeof EventFormSchema>) {
    console.log(values);
  }

  return (
    <section className="h-screen overflow-hidden">
      <div className="flex h-full">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[560px] mx-auto">
            <h1 className="text-[#212B36] text-[32px] font-bold">
              Create New Event 👋
            </h1>
            <p className="text-[#637381] text-base mt-2">
              Fill out the details to create a new event.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mt-10"
              >
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
                  className="bg-[#3F97FF] text-white w-full mt-5 h-12 rounded-[8px] hover:bg-[#3F97FF] hover:opacity-90 cursor-pointer"
                  type="submit"
                >
                  Create
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="flex-1 p-8 rounded-3xl">
          {/* Placeholder for right side content, can be replaced with video or image */}
          <div className="w-full h-full bg-gray-200 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
}
