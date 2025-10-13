import { AddressSvg, ArtistSignSvg, MobileSvg } from "@/icons";

interface ArtistProps {
  image: string;
  role: string;
  name: string;
  events: number;
  phone: string;
  address: string;
}

const ArtistsCard = ({
  image,
  role,
  name,
  events,
  phone,
  address,
}: ArtistProps) => {
  return (
    <section className="w-[513px] bg-[#FFF] rounded-[12px] p-3">
      <div className="flex gap-6">
        <img
          className="w-[184px] h-[182px] object-cover"
          src={image}
          alt={name}
        />

        <div className="w-full">
          <div className="flex justify-between">
            <span className="w-[71px] h-[26px] flex items-center justify-center rounded-[25px] bg-[#F2F8FF]">
              <p className="text-[#3F97FF] text-xs">{role}</p>
            </span>
            <ArtistSignSvg />
          </div>

          <p className="text-[#212B36] text-[32px] font-bold">{name}</p>

          <div className="mt-[18px]">
            <p className="text-[#3F97FF]">{events} Upcoming events</p>

            <span className="flex gap-2 items-center mt-1">
              <MobileSvg />
              <p className="text-[#637381]">{phone}</p>
            </span>

            <span className="flex gap-2 items-center">
              <AddressSvg />
              <p className="text-[#637381] mt-1">{address}</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsCard;
