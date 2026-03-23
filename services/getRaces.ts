import { RaceType } from "@/store/data";
import {
  collection,
  getDocs,
  CollectionReference,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getAllRaces = async () => {
  /*const collectionRef = collection(
    db,
    "races"
  ) as CollectionReference<RaceType>;

  const racesCollectionSnapshot = await getDocs(collectionRef);

  const racesList = racesCollectionSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  const fraces: RaceType[] = racesList;

  let json = JSON.stringify(fraces[2].content);
  console.log(json);*/

  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });

  const { data: races } = await supabase.rpc("get_races_preview");
  return races;
};

export const getRace = async (id: string) => {
  /*const collectionRef = query(
    collection(db, "races"),
    where("name", "==", id)
  ) as CollectionReference<RaceType>;
  const currentRaceCollectionSnapshot = await getDocs(collectionRef);

  const currentRace = currentRaceCollectionSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));*/

  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });
  const newid = decodeURI(id);
  const { data: race } = await supabase.rpc("get_race", { getname: newid });

  return race[0];
};
