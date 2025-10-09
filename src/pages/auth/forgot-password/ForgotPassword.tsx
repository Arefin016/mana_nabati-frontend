import { BackSvg } from "@/icons";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type z from "zod";
import { forgotPasswordSchema } from "@/schemas/auth/AuthSchema";
import { Button } from "@/components/ui/button";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    console.log(values);
    navigate("/auth/update-password");
  }

  return (
    <section className="max-w-[468px] mx-auto my-20 flex flex-col justify-center mt-[250px]">
      <Link to={"/auth/sign-up"}>
        <div className="flex justify-start items-center gap-2 cursor-pointer">
          <BackSvg />
          <h1 className="text-[#212B36] text-sm font-bold">Back</h1>
        </div>
      </Link>
      <div className="text-center mt-6">
        <p className="text-[#212B36] text-[32px] font-semibold">
          Forgot your password?
        </p>
        <p className="mt-4 text-[#637381] text-base">
          Please enter the email address associated with your account, and we'll
          email you a link to reset your password.
        </p>

        <Form {...form}>
          <form className="mt-6" onSubmit={form.handleSubmit(onSubmit)}>
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
            <Button
              className="bg-[#3F97FF] font-semibold text-white w-full mt-5 h-12 rounded-[8px] hover:bg-[#3F97FF] hover:opacity-90 cursor-pointer"
              type="submit"
            >
              Reset password
            </Button>
          </form>
        </Form>
        <Link to={"/auth/sign-in"}>
          <h1 className="mt-4 text-[#637381] text-sm font-normal">Back</h1>
        </Link>
      </div>
    </section>
  );
};

export default ForgotPassword;
