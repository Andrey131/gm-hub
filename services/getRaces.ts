import { RaceType } from "@/store/data";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getAllRaces = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });

  const { data: races } = await supabase.rpc("get_ancestries_preview");
  return races;
};

export const getRace = async (id: string) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });
  const newid = decodeURI(id);
  const { data: race } = await supabase.rpc("get_ancestry_full_data", {
    ancestry_name: newid,
  });
  console.log(race);
  return race;
};
