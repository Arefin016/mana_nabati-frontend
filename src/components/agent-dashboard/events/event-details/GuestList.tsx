import {
  useForm,
  useFieldArray,
  type UseFieldArrayReturn,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { FormInput } from "@/components/FormInput";
import { GuestListSchema } from "@/schemas/events/eventBookingSchemas";

type GuestListType = z.infer<typeof GuestListSchema>;

export default function GuestList() {
  const form = useForm<GuestListType>({
    resolver: zodResolver(GuestListSchema),
    defaultValues: {
      allocation: { aaa: "2", vip: "2", ga: "2" },
      aaaGuests: [
        {
          name: "Celina Aoun",
          phoneNumber: "+971553594146",
          role: "Tour Manager",
        },
        {
          name: "Celina Aoun",
          phoneNumber: "+971553594146",
          role: "Tour Manager",
        },
      ],
      vipGuests: [
        {
          name: "Celina Aoun",
          phoneNumber: "+971553594146",
          role: "Tour Manager",
        },
        {
          name: "Celina Aoun",
          phoneNumber: "+971553594146",
          role: "Tour Manager",
        },
      ],
      gaGuests: [
        {
          name: "Celina Aoun",
          phoneNumber: "+971553594146",
          role: "Tour Manager",
        },
        {
          name: "Celina Aoun",
          phoneNumber: "+971553594146",
          role: "Tour Manager",
        },
      ],
    },
  });

  const aaaArray = useFieldArray<GuestListType, "aaaGuests", "id">({
    control: form.control,
    name: "aaaGuests",
  });

  const vipArray = useFieldArray<GuestListType, "vipGuests", "id">({
    control: form.control,
    name: "vipGuests",
  });

  const gaArray = useFieldArray<GuestListType, "gaGuests", "id">({
    control: form.control,
    name: "gaGuests",
  });

  function onSubmit(values: GuestListType) {
    console.log(values);
  }

  const renderGuestSection = (
    title: string,
    fieldArray: UseFieldArrayReturn<
      GuestListType,
      "aaaGuests" | "vipGuests" | "gaGuests",
      "id"
    >,
    prefix: "aaaGuests" | "vipGuests" | "gaGuests"
  ) => (
    <div className="">
      <h2 className="text-[20px] font-semibold mb-4 border-b border-border">
        {title}
      </h2>
      <div className="space-y-4">
        {fieldArray.fields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              control={form.control}
              name={`${prefix}.${index}.name`}
              label="Name"
            />
            <FormInput
              control={form.control}
              name={`${prefix}.${index}.phoneNumber`}
              label="Phone Number"
            />
            <FormInput
              control={form.control}
              name={`${prefix}.${index}.role`}
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
              fieldArray.append({ name: "", phoneNumber: "", role: "" })
            }
          >
            <Plus className="w-4 h-4 mr-1" /> Add Member
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          {/* Guest List Header */}
          <div>
            <h1 className="text-[20px] font-semibold mb-2 border-b border-border">
              Guest List
            </h1>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-4 items-center py-4">
              <p className="font-medium text-gray-700 col-span-2 md:col-span-1">
                Total Allocation:
              </p>
              <FormInput
                control={form.control}
                name="allocation.aaa"
                label="AAA"
              />
              <FormInput
                control={form.control}
                name="allocation.vip"
                label="VIP"
              />
              <FormInput
                control={form.control}
                name="allocation.ga"
                label="GA"
              />
            </div>
          </div>

          {/* AAA Guest List */}
          {renderGuestSection("AAA Guest List", aaaArray, "aaaGuests")}
          {/* VIP Guest List */}
          {renderGuestSection("VIP Guest List", vipArray, "vipGuests")}
          {/* GA Guest List */}
          {renderGuestSection("GA Guest List", gaArray, "gaGuests")}

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-8">
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
