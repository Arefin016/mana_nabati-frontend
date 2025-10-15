import { NotificationSvg, SearchSvg } from "@/icons";
import avater from "../../assets/images/avater.png";
import { useAppSelector } from "@/redux/hooks";

const Header = () => {
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
