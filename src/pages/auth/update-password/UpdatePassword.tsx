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
import type z from "zod";
import { updatePasswordSchema } from "@/schemas/auth/AuthSchema";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Lock } from "lucide-react";

const UpdatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof updatePasswordSchema>>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof updatePasswordSchema>) => {
    console.log(values);
    navigate("/auth/password-update");
  };

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
          Enter your new password.
        </p>
        <p className="mt-3 text-[#637381] text-base">
          Secure Your Account with a New Password.
        </p>

        <Form {...form}>
          <form
            className="mt-6 space-y-6 text-left"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Enter Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#212B36] text-base font-normal">
                    Enter password
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center justify-between bg-[#F9FAFB] border border-[#DFE3E8] rounded-[8px] px-3 h-12">
                      <Lock className="text-gray-400 size-5" />
                      <input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        className="flex-1 bg-transparent outline-none text-gray-700 text-base px-3"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-[#3F97FF] text-sm font-medium"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm mt-1" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#212B36] text-base font-normal">
                    Confirm password
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center justify-between bg-[#F9FAFB] border border-[#DFE3E8] rounded-[8px] px-3 h-12">
                      <Lock className="text-gray-400 size-5" />
                      <input
                        {...field}
                        type={showConfirmPassword ? "text" : "password"}
                        className="flex-1 bg-transparent outline-none text-gray-700 text-base px-3"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="text-[#3F97FF] text-sm font-medium"
                      >
                        {showConfirmPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm mt-1" />
                </FormItem>
              )}
            />
            <Button
              className="bg-[#3F97FF] font-semibold text-white w-full h-12 rounded-[8px] hover:bg-[#3F97FF] hover:opacity-90 cursor-pointer"
              type="submit"
            >
              Update password
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

export default UpdatePassword;
