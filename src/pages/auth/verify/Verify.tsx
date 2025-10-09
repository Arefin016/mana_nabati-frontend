import { BackSvg } from "@/icons";
import { Link, useNavigate } from "react-router"; // Fixed import from react-router to react-router-dom
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyOtpSchema } from "@/schemas/auth/AuthSchema";
import { useRef } from "react";
import { toast } from "sonner";

// Define the form type to match the schema
type VerifyOtpForm = {
  code: string;
};

const Verify = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<VerifyOtpForm>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: { code: "" },
  });

  const code = watch("code");

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleSlotChange = (index: number, val: string) => {
    const digit = val.replace(/\D/g, "").slice(0, 1);
    const arr = code.padEnd(6, " ").split("").slice(0, 6);
    arr[index] = digit || " ";
    const newCode = arr.join("").replace(/ /g, "");
    setValue("code", newCode);
    if (digit && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]!.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !(e.currentTarget as HTMLInputElement).value) {
      if (inputRefs.current[index - 1]) inputRefs.current[index - 1]!.focus();
    }
  };

  // When user clicks Verify
  const onSubmit = (data: VerifyOtpForm) => {
    if (data.code && data.code.length === 6) {
      navigate("/auth/success");
    } else {
      toast.error("Invalid OTP. Try again!");
    }
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
          Please check your email!
        </p>
        <p className="mt-4 text-[#637381] text-base">
          We've emailed a 6-digit confirmation code to acb@domain, please enter
          the code in below box to verify your email.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          {/* Added form element */}
          <div className="flex flex-col justify-center items-center w-full">
            {/* Hidden real field bound to react-hook-form */}
            <input type="hidden" {...register("code")} />
            <div className="flex gap-4 justify-center mt-6">
              {Array.from({ length: 6 }).map((_, idx) => {
                const char = code[idx] ?? "";
                return (
                  <input
                    key={idx}
                    ref={(el) => {
                      inputRefs.current[idx] = el;
                    }}
                    value={char}
                    onChange={(e) => handleSlotChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    maxLength={1}
                    inputMode="numeric"
                    className="w-[56px] h-[56px] border rounded-[8px] text-2xl text-center"
                    aria-label={`OTP digit ${idx + 1}`}
                  />
                );
              })}
            </div>

            {errors.code && (
              <p className="text-red-600 text-sm mt-3">{errors.code.message}</p>
            )}

            <button
              type="submit"
              className="bg-[#3F97FFFA] mt-8 w-full text-base font-semibold text-white py-3 rounded-[16px] hover:bg-[#3F97FF] hover:opacity-90 cursor-pointer"
              disabled={isSubmitting}
            >
              Verify
            </button>
          </div>
        </form>

        <h1 className="mt-6 text-[#637381] text-sm font-normal">
          Don't have a code?{" "}
          <button className="text-[#212B36] font-semibold cursor-pointer">
            {" "}
            {/* Changed span to button */}
            Resend code
          </button>{" "}
        </h1>
      </div>
    </section>
  );
};

export default Verify;
