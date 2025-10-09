import {
  ActiveAgencySvg,
  ActiveArtistSvg,
  ActivePromoterSvg,
  InactiveAgencySvg,
  InactiveArtistSvg,
  InactivePromoterSvg,
} from "@/icons";
import logo from "../../../assets/logo/final-logo.png";
import logoText from "../../../assets/logo/inimal.png";
import { useState } from "react";
import { toast } from "sonner";

const UserRole = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");

  const roles = [
    {
      name: "Artist",
      activeIcon: <ActiveArtistSvg />,
      inactiveIcon: <InactiveArtistSvg />,
    },
    {
      name: "Agency",
      activeIcon: <ActiveAgencySvg />,
      inactiveIcon: <InactiveAgencySvg />,
    },
    {
      name: "Promoter",
      activeIcon: <ActivePromoterSvg />,
      inactiveIcon: <InactivePromoterSvg />,
    },
  ];

  // handle Continue button click
  const handleContinue = () => {
    if (selectedRole) {
      localStorage.setItem("userRole", selectedRole);
      console.log("Saved role:", selectedRole);
    } else {
      toast.error("Please select a role before continuing.");
    }
  };

  return (
    <section>
      {/* This is the logo section */}
      <div className="py-6 px-[28px] flex flex-row items-center gap-3">
        <img className="w-[55px] h-[55px] object-cover" src={logo} alt="Logo" />
        <img
          className="w-[96px] h-[25px] object-cover"
          src={logoText}
          alt="Logo Text"
        />
      </div>
      {/* This is the role section */}
      <div className="flex flex-col justify-center items-center mt-[100px]">
        <h1 className="text-[#212B36] text-[32px] font-bold">
          What Is Your Role?
        </h1>
        <p className="text-[#637381] text-base font-semibold">
          Choose the option that best describes you so we can tailor your
          experience.
        </p>
        {/* div for role options */}
        <div className="flex flex-row gap-8 mt-[55px]">
          {roles.map((role) => {
            const isActive = selectedRole === role.name;
            return (
              <div
                key={role.name}
                onClick={() => setSelectedRole(role.name)}
                className={`cursor-pointer py-2 px-4 rounded-2xl w-[315px] h-[238px] border flex justify-center items-center flex-col transition-all duration-200 ${
                  isActive ? "border-[#3F97FF] " : "border-[#F4F6F8]"
                }`}
              >
                {isActive ? role.activeIcon : role.inactiveIcon}
                <p
                  className={`mt-8 text-2xl ${
                    isActive ? "text-[#454F5B] font-semibold" : "text-[#C4CDD5]"
                  }`}
                >
                  {role.name}
                </p>
              </div>
            );
          })}
        </div>
        {/* Continue with the next steps */}
        <button
          onClick={handleContinue}
          className="mt-[124px] bg-[#3F97FF] text-white py-3 px-[174px] rounded-[8px] hover:bg-[#3F97FF] hover:opacity-90 cursor-pointer font-bold"
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default UserRole;
