import Link from "next/link";
import { RaceType } from "@/store/data";

type Props = {
  race: RaceType;
};

const PreviewCard = ({ race }: Props) => {
  return (
    <Link
      href={`/race/${race.name}`}
      className="flex flex-row bg-footerDeco hover:bg-smallTitle rounded-md h-20 p-1 m-1 text-gray-700"
    >
      <div className="flex flex-col justify-between">
        <span className="font-bold">{race.name}</span>
        <span>{race.source}</span>
      </div>
    </Link>
  );
};

export { PreviewCard };
