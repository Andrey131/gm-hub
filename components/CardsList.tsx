import { PreviewCard } from "./PreviewCard";
import { RaceType } from "@/store/data";

type Props = {
  params: {
    races: RaceType[];
  };
};

const CardsList = ({ params: { races } }: Props) => {
  return (
    <div className="grid grid-cols-5 gap-1">
      {races.map((race: RaceType) => (
        <PreviewCard key={race.id} race={race} />
      ))}
    </div>
  );
};

export { CardsList };
