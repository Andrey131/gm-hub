import { Metadata } from "next";
import { CardsList } from "@/components/CardsList";
import { RaceType } from "@/store/data";
import { races } from "@/store/data";
import { TextBlock } from "@/components/TextBlock";
import { RaceContentType } from "@/store/data";

export const metadata: Metadata = {
  title: "Races",
};

type Props = {
  params: {
    id: string;
  };
};

/*export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: id,
  };
}*/

export default async function RaceItem({ params: { id } }: Props) {
  return (
    <div>
      <h1 className="text-2xl border-b-4 border-titleLine font-bold text-title">
        Race <b>{id}</b>
      </h1>
      {races.map((race: RaceType) =>
        race.name === id ? (
          race.content.map((block: RaceContentType, index) => (
            <TextBlock
              key={index}
              blockType={block.blockType}
              title={block.title}
              body={block.body}
            />
          ))
        ) : (
          <></>
        )
      )}
    </div>
  );
}
