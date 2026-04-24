import { Metadata } from "next";
import { RaceType } from "@/store/data";
import ClientRacePage from "@/components/ClientRacePage";
import { getRace } from "@/services/getRaces";

export const metadata: Metadata = {
  title: "Races",
};

type Props = {
  params: {
    id: string;
  };
};

export default async function RaceItem({ params: { id } }: Props) {
  const currentRace: RaceType = await getRace(id);
  return <ClientRacePage race={currentRace} />;
}
