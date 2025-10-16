import { useForm, Controller } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormInput } from "@/components/FormInput";
import DateTimePicker from "@/components/DateTimePicker";

export default function HotelDinner() {
  const form = useForm({
    defaultValues: {
      hotelBuyout: false,
      dinnerBuyout: false,
      hotel: {
        name: "Marriott Downtown",
        website: "marriottdowntown.com",
        reservationName: "Celina Aoun",
        roomType: "Deluxe King Room",
        checkIn: "25 July, 15:00",
        checkOut: "28 July, 11:00",
        breakfast: true,
        address: "Gate Village 06, DIFC, Dubai, UAE",
      },
      dinner: {
        restaurant: "Zuma Dubai",
        dateTime: "28 July, 11:00",
        address: "Gate Village 06, DIFC, Dubai, UAE",
      },
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(values: any) {
    console.log(values);
  }

  const hotelBuyout = form.watch("hotelBuyout");
  const dinnerBuyout = form.watch("dinnerBuyout");

  return (
    <section className="max-w-7xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          {/* HOTEL SECTION */}
          <div>
            <h2 className="text-[20px] font-semibold mb-4 border-b border-border">
              Hotel
            </h2>
            {/* Buyout toggle */}
            <div className="flex items-center gap-6 mb-6">
              <p className="font-medium text-gray-700 w-24">Buyout:</p>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <Controller
                    name="hotelBuyout"
                    control={form.control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value === true}
                        onCheckedChange={() => field.onChange(true)}
                      />
                    )}
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <Controller
                    name="hotelBuyout"
                    control={form.control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value === false}
                        onCheckedChange={() => field.onChange(false)}
                      />
                    )}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            {/* Show details if Buyout = No */}
            {!hotelBuyout && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormInput
                      control={form.control}
                      name="hotel.name"
                      label="Hotel Name"
                    />
                    <FormInput
                      control={form.control}
                      name="hotel.website"
                      label="Website Link"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormInput
                      control={form.control}
                      name="hotel.reservationName"
                      label="Reservation Name"
                    />
                    <FormInput
                      control={form.control}
                      name="hotel.roomType"
                      label="Room Type"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {/* CheckIn */}
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Check In</p>
                      <DateTimePicker
                        onDateTimeChange={(date) => console.log(date)}
                      />
                    </div>

                    {/* Checkout */}
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Check Out</p>
                      <DateTimePicker
                        onDateTimeChange={(date) => console.log(date)}
                      />
                    </div>

                    {/* Breakfast Checkbox */}
                    <div className="flex flex-col gap-2 ml-4">
                      <p className="text-sm text-gray-500">Breakfast:</p>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2">
                          <Controller
                            name="hotel.breakfast"
                            control={form.control}
                            render={({ field }) => (
                              <Checkbox
                                checked={field.value === true}
                                onCheckedChange={() => field.onChange(true)}
                              />
                            )}
                          />
                          <span>Yes</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <Controller
                            name="hotel.breakfast"
                            control={form.control}
                            render={({ field }) => (
                              <Checkbox
                                checked={field.value === false}
                                onCheckedChange={() => field.onChange(false)}
                              />
                            )}
                          />
                          <span>No</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <FormInput
                    control={form.control}
                    name="hotel.address"
                    label="Address"
                  />
                </div>

                {/* Map placeholder */}
                <div className="rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src="https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=13&size=600x400&key=YOUR_API_KEY"
                    alt="Map"
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {/* DINNER SECTION */}
          <div>
            <h2 className="text-[20px] font-semibold mb-4 border-b border-border">
              Dinner
            </h2>
            {/* Buyout toggle */}
            <div className="flex items-center gap-6 mb-6">
              <p className="font-medium text-gray-700 w-24">Buyout:</p>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <Controller
                    name="dinnerBuyout"
                    control={form.control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value === true}
                        onCheckedChange={() => field.onChange(true)}
                      />
                    )}
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <Controller
                    name="dinnerBuyout"
                    control={form.control}
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value === false}
                        onCheckedChange={() => field.onChange(false)}
                      />
                    )}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            {/* Show details if Buyout = No */}
            {!dinnerBuyout && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormInput
                      control={form.control}
                      name="dinner.restaurant"
                      label="Restaurant Name"
                    />
                    <FormInput
                      control={form.control}
                      name="dinner.dateTime"
                      label="Date & Time"
                    />
                  </div>
                  <FormInput
                    control={form.control}
                    name="dinner.address"
                    label="Address"
                  />
                </div>

                {/* Map placeholder */}
                <div className="rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src="https://maps.googleapis.com/maps/api/staticmap?center=Dubai&zoom=13&size=600x400&key=YOUR_API_KEY"
                    alt="Map"
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end pt-8">
            <Button
              type="submit"
              className="bg-primary01/80 hover:bg-primary01/70 text-white rounded-[8px] h-11 px-6 cursor-pointer"
            >
              Mark as Complete
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
