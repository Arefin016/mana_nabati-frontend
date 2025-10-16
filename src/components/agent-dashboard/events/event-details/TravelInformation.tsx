import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TravelInfoSchema } from "@/schemas/events/eventBookingSchemas";
import { FormInput } from "@/components/FormInput";

export default function TravelInformation() {
  const form = useForm<z.infer<typeof TravelInfoSchema>>({
    resolver: zodResolver(TravelInfoSchema),
    defaultValues: {
      travelIn: {
        from: "London [LHR]",
        to: "Los Angeles [LAX]",
        dateTime: "14:20 - 25 Jul",
        flight: "Flight BA269",
      },
      travelOut: {
        from: "London [LHR]",
        to: "Los Angeles [LAX]",
        dateTime: "14:20 - 25 Jul",
        flight: "Flight BA269",
      },
      travelingParty: [
        {
          name: "Celina Aoun",
          phoneNumber: "+971553594146",
          role: "Tour Manager",
        },
        {
          name: "Alex Smith",
          phoneNumber: "+971500000000",
          role: "Assistant",
        },
      ],
      artistContact: {
        name: "DJ Nova",
        phoneNumber: "+971553594146",
        email: "djnova@gmail.com",
      },
    },
  });

  // ✅ useFieldArray hook for dynamic member management
  const { fields, append } = useFieldArray({
    control: form.control,
    name: "travelingParty",
  });

  function onSubmit(values: z.infer<typeof TravelInfoSchema>) {
    console.log(values);
  }

  return (
    <section className="max-w-7xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Travel In */}
            <div>
              <h2 className="text-[20px] font-semibold mb-4">Travel In</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    control={form.control}
                    name="travelIn.from"
                    label="From"
                  />
                  <FormInput
                    control={form.control}
                    name="travelIn.to"
                    label="To"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    control={form.control}
                    name="travelIn.dateTime"
                    label="Date and Time"
                  />
                  <FormInput
                    control={form.control}
                    name="travelIn.flight"
                    label="Flight"
                  />
                </div>
              </div>
            </div>

            {/* Travel Out */}
            <div>
              <h2 className="text-[20px] font-semibold mb-4">Travel Out</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    control={form.control}
                    name="travelOut.from"
                    label="From"
                  />
                  <FormInput
                    control={form.control}
                    name="travelOut.to"
                    label="To"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    control={form.control}
                    name="travelOut.dateTime"
                    label="Date and Time"
                  />
                  <FormInput
                    control={form.control}
                    name="travelOut.flight"
                    label="Flight"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Traveling Party */}
          <div>
            <h2 className="text-[20px] font-semibold mb-4">Traveling Party</h2>
            <div className="space-y-4">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <FormInput
                    control={form.control}
                    name={`travelingParty.${index}.name`}
                    label="Name"
                  />
                  <FormInput
                    control={form.control}
                    name={`travelingParty.${index}.phoneNumber`}
                    label="Phone Number"
                  />
                  <FormInput
                    control={form.control}
                    name={`travelingParty.${index}.role`}
                    label="Role"
                  />
                </div>
              ))}
              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="ghost"
                  className="text-primary01 cursor-pointer"
                  onClick={() =>
                    append({ name: "", phoneNumber: "", role: "" })
                  }
                >
                  <Plus className="w-4 h-4 mr-1" /> Add Member
                </Button>
              </div>
            </div>
          </div>

          {/* Artist Contact */}
          <div>
            <h2 className="text-[20px] font-semibold mb-4">Artist Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormInput
                control={form.control}
                name="artistContact.name"
                label="Artist Name"
              />
              <FormInput
                control={form.control}
                name="artistContact.phoneNumber"
                label="Phone Number"
              />
              <FormInput
                control={form.control}
                name="artistContact.email"
                label="Email (optional)"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <Button
              type="submit"
              variant="default"
              className="bg-primary01/80 hover:bg-primary01/70 text-white rounded-[8px] h-11 px-6"
            >
              Save
            </Button>
            <Button
              type="button"
              className="bg-[#DFE3E8] text-[#919EAB] rounded-[8px] h-11 px-6"
            >
              Confirm Booking
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
