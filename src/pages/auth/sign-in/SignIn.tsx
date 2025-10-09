import loginImg from "../../../assets/images/login-in/login-img.mp4";
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
import { LoginSchema } from "@/schemas/auth/LoginSchema";

const SignIn = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values);
  }

  return (
    <section className="h-screen overflow-hidden font-publicSans">
      <div className="flex h-full">
        {/* Left Side */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[560px] mx-auto">
            <h1 className="text-[#212B36] text-[32px] font-bold">
              Welcome Back 👋
            </h1>
            <p className="text-[#637381] text-base mt-2">
              Access your dashboard to keep your upcoming bookings <br /> and
              tours on track.
            </p>
            {/* This is login form */}
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 mt-10"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#212B36] text-base font-normal">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-12 bg-[#F9FAFB] rounded-[8px] border border-[#DFE3E8]"
                            placeholder="Example@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-8 rounded-3xl">
          <video
            className="w-full h-full rounded-3xl object-cover"
            src={loginImg}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
