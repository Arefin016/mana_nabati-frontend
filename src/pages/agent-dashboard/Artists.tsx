import ArtistsCard from "@/components/agent-dashboard/artists/ArtistsCard";
import { artistsData } from "@/data";

const Artists = () => {
  return (
    <section>
      <div className="grid grid-cols-3 gap-6">
        {artistsData.map((artist, i) => (
          <ArtistsCard key={i} {...artist} />
        ))}
      </div>
    </section>
  );
};

export default Artists;
