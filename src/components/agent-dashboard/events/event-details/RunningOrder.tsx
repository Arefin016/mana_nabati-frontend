import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RunningOrderSchema } from "@/schemas/events/eventBookingSchemas";
import { FormInput } from "@/components/FormInput";

export default function RunningOrder() {
  const form = useForm<z.infer<typeof RunningOrderSchema>>({
    resolver: zodResolver(RunningOrderSchema),
    defaultValues: {
      mainStage: [
        {
          checked: false,
          date: "25 July",
          from: "22:00",
          to: "22:00",
          artist: "Lumi",
        },
        {
          checked: false,
          date: "25 July",
          from: "22:00",
          to: "22:00",
          artist: "Manti",
        },
        {
          checked: true,
          date: "25 July",
          from: "22:00",
          to: "22:00",
          artist: "DJ Nova",
        },
      ],
      secondaryStage: [
        {
          checked: false,
          date: "25 July",
          from: "22:00",
          to: "22:00",
          artist: "Lumi",
        },
        {
          checked: false,
          date: "25 July",
          from: "22:00",
          to: "22:00",
          artist: "Manti",
        },
        {
          checked: false,
          date: "25 July",
          from: "22:00",
          to: "22:00",
          artist: "Manti",
        },
      ],
    },
  });

  function onSubmit(values: z.infer<typeof RunningOrderSchema>) {
    console.log(values);
  }

  return (
    <section className="max-w-7xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          {/* -------- Main Stage -------- */}
          <div>
            <h2 className="text-[20px] font-semibold mb-4 border-b border-b-gray-100">
              Main Stage
            </h2>
            <div className="flex flex-col gap-4">
              {form.watch("mainStage").map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                  {/* Checkbox */}
                  <div className="mt-4">
                    <FormField
                      control={form.control}
                      name={`mainStage.${index}.checked`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Date */}
                  <FormInput
                    control={form.control}
                    name={`mainStage.${index}.date`}
                    label="Date"
                  />

                  {/* From */}
                  <FormInput
                    control={form.control}
                    name={`mainStage.${index}.from`}
                    label="From"
                  />

                  {/* To */}
                  <FormInput
                    control={form.control}
                    name={`mainStage.${index}.to`}
                    label="To"
                  />

                  {/* Artist */}
                  <FormInput
                    control={form.control}
                    name={`mainStage.${index}.artist`}
                    label="Artist Name"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* -------- Secondary Stage -------- */}
          <div>
            <h2 className="text-[20px] font-semibold mb-4 border-b border-b-gray-100">
              Secondary Stage
            </h2>
            <div className="flex flex-col gap-4">
              {form.watch("secondaryStage").map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                  {/* Checkbox */}
                  <div className="mt-4">
                    <FormField
                      control={form.control}
                      name={`secondaryStage.${index}.checked`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Date */}
                  <FormInput
                    control={form.control}
                    name={`secondaryStage.${index}.date`}
                    label="Date"
                  />

                  {/* From */}
                  <FormInput
                    control={form.control}
                    name={`secondaryStage.${index}.from`}
                    label="From"
                  />

                  {/* To */}
                  <FormInput
                    control={form.control}
                    name={`secondaryStage.${index}.to`}
                    label="To"
                  />

                  {/* Artist */}
                  <FormInput
                    control={form.control}
                    name={`secondaryStage.${index}.artist`}
                    label="Artist Name"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Confirm Button */}
          <div className="flex justify-end pt-6">
            <Button
              type="submit"
              className="bg-gray-200 text-gray-500 rounded-[8px] h-11 w-[160px]"
            >
              Confirm Booking
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
