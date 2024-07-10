import { Metadata } from "next";
import { CardsList } from "@/components/CardsList";
import { RaceType } from "@/store/data";
import { races } from "@/store/data";

export const metadata: Metadata = {
  title: "Races",
};

export default async function Race() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-xl font-bold">Races</h1>
      <CardsList params={{ races }} />
    </div>
  );
}
