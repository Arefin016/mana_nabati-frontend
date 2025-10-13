import { StatisticsBarChartsSvg, StatisticsSignSvg } from "@/icons";

interface UpcomingEventsProps {
  title: string;
  value: number;
  percent: number;
  icon: React.ReactNode;
  barChartIcon?: React.ReactNode;
  color?: string; // e.g. "#F2F8FF"
  percentColor?: string; // e.g. "#0CAF60"
  bgPercentColor?: string; // e.g. "#E6FDF2"
  subtitle?: string; // e.g. "last month"
}

const UpcomingEventsCard = ({
  title,
  value,
  percent,
  icon,
  barChartIcon,
  color = "#F2F8FF",
  percentColor = "#0CAF60",
  bgPercentColor = "#E6FDF2",
  subtitle = "last month",
}: UpcomingEventsProps) => {
  return (
    <section className="bg-[#FFF] rounded-[12px] py-4 px-6 w-[380px]">
      <div className="gap-2 items-center">
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-center">
            <span
              className="w-[50px] h-[50px] flex items-center justify-center rounded-[25px]"
              style={{ backgroundColor: color }}
            >
              {icon}
            </span>
            <p className="text-[#637381] text-base">{title}</p>
          </div>
        </div>
        {/* This is the right section */}
        <div className="flex justify-between">
          <div className="mt-2 justify-between flex flex-col">
            <h1 className="text-[#212B36] text-[32px] font-bold">{value}</h1>
            <div className="flex gap-1 items-center">
              <div
                className="w-[47px] h-5 flex items-center justify-center rounded-[4px]"
                style={{ backgroundColor: bgPercentColor }}
              >
                <StatisticsSignSvg />
                <p
                  className="text-[12px] font-normal"
                  style={{ color: percentColor }}
                >
                  {percent}%
                </p>
              </div>
              <p className="text-[#919EAB] text-xs">{subtitle}</p>
            </div>
          </div>
          {barChartIcon ? barChartIcon : <StatisticsBarChartsSvg />}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsCard;
