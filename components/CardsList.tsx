import { PreviewCard } from "./PreviewCard";
import { RacePreviewType } from "@/store/data";

type Props = {
  params: {
    races: RacePreviewType[];
  };
};

const CardsList = ({ params: { races } }: Props) => {
  return (
    <div className="grid grid-cols-5 gap-1">
      {races.map((race: RacePreviewType) => (
        <PreviewCard key={race.id} race={race} />
      ))}
    </div>
  );
};

export { CardsList };
