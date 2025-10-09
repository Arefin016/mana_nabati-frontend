import loginImg from "../../../assets/images/login-in/login-img.mp4";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import lineImg from "../../../assets/images/line.png";
import { FcGoogle } from "react-icons/fc";
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
import { GeneralSignUpSchema } from "@/schemas/auth/AuthSchema";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof GeneralSignUpSchema>>({
    resolver: zodResolver(GeneralSignUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof GeneralSignUpSchema>) {
    console.log(values);
    navigate("/auth/verify");
  }

  return (
    <section className="h-screen overflow-hidden">
      <div className="flex h-full">
        {/* Left Side */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[560px] mx-auto">
            <h1 className="text-[#212B36] text-[32px] font-bold">
              Create Your Account
            </h1>
            <p className="text-[#637381] text-base mt-2">
              Create your account and centralize every booking detail.
            </p>
            {/* This is login form */}
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5 mt-10"
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#212B36] text-base font-normal">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-12 bg-[#F9FAFB] rounded-[8px] border border-[#DFE3E8]"
                            placeholder="Enter full name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#212B36] text-base font-normal">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="At least 8 characters"
                              className="h-12 bg-[#F9FAFB] rounded-[8px] border border-[#DFE3E8] pr-12"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                              {showPassword ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Link to={"/forgot-password"}>
                    <p className="flex justify-end text-[#3F97FF] text-base underline cursor-pointer">
                      Forgot Password?
                    </p>
                  </Link>
                  <Button
                    className="bg-[#3F97FF] text-white w-full mt-5 h-12 rounded-[8px] hover:bg-[#3F97FF] hover:opacity-90 cursor-pointer"
                    type="submit"
                  >
                    Sign up
                  </Button>
                  {/* Border section */}
                  <div className="flex justify-center items-center gap-4">
                    <img src={lineImg} alt="line-img" />
                    <p className="text-[#294957] text-base">Or</p>
                    <img src={lineImg} alt="line-img" />
                  </div>
                  {/* Google Sign In */}
                  <div className="flex items-center gap-4 justify-center bg-[#F4F6F8] py-3 rounded-[8px] cursor-pointer">
                    <FcGoogle size={28} />
                    <p className="text-[#313957] text-lg font-semibold cursor-pointer">
                      Sign in with Google
                    </p>
                  </div>
                  {/* Sign Up Section */}
                  <p className="text-[#294957] text-lg">
                    Already have an account?{" "}
                    <Link
                      to={"/auth/sign-in"}
                      className="text-[#3F97FF] text-lg"
                    >
                      Log in
                    </Link>
                  </p>
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

export default SignUp;
