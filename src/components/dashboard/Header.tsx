import { NotificationSvg, SearchSvg } from "@/icons";
import avater from "../../assets/images/avater.png";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Link, useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const header = useAppSelector((state) => state.header);

  return (
    <header className="py-8 ">
      <div className="flex justify-between items-center">
        {/* This is the first div */}
        <div>
          <p className="text-[#454F5B] text-[32px] font-bold">{header.title}</p>
          <p>{header.desc}</p>
        </div>
        {/* This is the second div */}
        <div className="flex items-center justify-between gap-6">
          {header.isAddBtn && (
            <Link
              to={{
                pathname: location.pathname,
                search: "?modal=eventModal",
              }}
            >
              <Button
                variant={"ghost"}
                className="text-primary01 cursor-pointer"
              >
                <Plus />
                Create New Form
              </Button>
            </Link>
          )}
          <SearchSvg />
          <NotificationSvg />
          <img
            className="w-[52px] h-[52px] object-cover"
            src={avater}
            alt="avater"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
