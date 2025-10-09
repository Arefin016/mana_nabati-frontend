import { Link } from "react-router";
import successfulImg from ".././../../assets/logo/successful-logo.png";

const PasswordUpdate = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <img src={successfulImg} alt="Success" className="mb-4" />
      <p className="text-[#313957] text-[32px] font-semibold">
        Password Updated
      </p>
      <Link to={"/auth/sign-in"}>
        <button className="text-[#FFF] text-base bg-[#3F97FF] py-3 px-[77px] rounded-[8px] mt-10 cursor-pointer hover:bg-[#3F97FFFA] hover:opacity-90">
          Login now
        </button>
      </Link>
    </section>
  );
};

export default PasswordUpdate;
