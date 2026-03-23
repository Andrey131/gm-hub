import { Metadata } from "next";
import { CardsList } from "@/components/CardsList";
import { RaceType, RacePreviewType } from "@/store/data";
import { getAllRaces } from "@/services/getRaces";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Races",
};

export default async function Race() {
  const races: RacePreviewType[] = await getAllRaces();

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-xl font-bold">Races</h1>
      <CardsList params={{ races }} />
    </div>
  );
}
