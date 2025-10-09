import { BackSvg } from "@/icons";
import { Link } from "react-router";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const Verify = () => {
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

        <div className="flex flex-col justify-center items-center w-full">
          <InputOTP maxLength={6}>
            <InputOTPGroup className="flex gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className="
            w-[56px] h-[56px] mt-6 border border-[#D4D7E3] rounded-[8px]
          text-2xl"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
          <button className="bg-[#3F97FFFA] mt-8 w-full text-base font-semibold text-white py-3 rounded-[16px] hover:bg-[#3F97FF] hover:opacity-90 cursor-pointer">
            Verify
          </button>
        </div>

        <h1 className="mt-6 text-[#637381] text-sm font-normal">
          Don't have a code?{" "}
          <span className="text-[#212B36] font-semibold"> Resend code</span>{" "}
        </h1>
      </div>
    </section>
  );
};

export default Verify;
