"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const RowSchema = z.object({
  checked: z.boolean().optional(),
  date: z.string(),
  from: z.string(),
  to: z.string(),
  artist: z.string(),
});

const RunningOrderSchema = z.object({
  mainStage: z.array(RowSchema),
  secondaryStage: z.array(RowSchema),
});

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
    <section className="">
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
                  <div className=" mt-4">
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
                  <FormField
                    control={form.control}
                    name={`mainStage.${index}.date`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-xs text-gray-500">
                          Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-10 bg-[#F9FAFB] border border-[#DFE3E8] rounded-[8px] text-sm"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* From */}
                  <FormField
                    control={form.control}
                    name={`mainStage.${index}.from`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-xs text-gray-500">
                          From
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-10 bg-[#F9FAFB] border border-[#DFE3E8] rounded-[8px] text-sm"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* To */}
                  <FormField
                    control={form.control}
                    name={`mainStage.${index}.to`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-xs text-gray-500">
                          To
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-10 bg-[#F9FAFB] border border-[#DFE3E8] rounded-[8px] text-sm"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* Artist */}
                  <FormField
                    control={form.control}
                    name={`mainStage.${index}.artist`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-xs text-gray-500">
                          Artist Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-10 bg-[#F9FAFB] border border-[#DFE3E8] rounded-[8px] text-sm"
                          />
                        </FormControl>
                      </FormItem>
                    )}
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

                  <FormField
                    control={form.control}
                    name={`secondaryStage.${index}.date`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-xs text-gray-500">
                          Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-10 bg-[#F9FAFB] border border-[#DFE3E8] rounded-[8px] text-sm"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`secondaryStage.${index}.from`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-xs text-gray-500">
                          From
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-10 bg-[#F9FAFB] border border-[#DFE3E8] rounded-[8px] text-sm"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`secondaryStage.${index}.to`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-xs text-gray-500">
                          To
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-10 bg-[#F9FAFB] border border-[#DFE3E8] rounded-[8px] text-sm"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`secondaryStage.${index}.artist`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-xs text-gray-500">
                          Artist Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-10 bg-[#F9FAFB] border border-[#DFE3E8] rounded-[8px] text-sm"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Confirm Button */}
          <div className="flex justify-end pt-6">
            <Button
              type="submit"
              disabled
              className="bg-gray-200 text-gray-500 rounded-[8px] h-11 w-[160px] cursor-not-allowed"
            >
              Confirm Booking
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
