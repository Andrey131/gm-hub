import { getAllRaces, getRace } from "@/services/getRaces";
import { create } from "zustand";
import { RaceType } from "./data";

type UseRaces = {
  races: RaceType[];
  loading: boolean;
  getAllRaces: () => Promise<void>;
  //getRace: (name: string) => Promise<void>;
};

export const useRaces = create<UseRaces>((set) => ({
  races: [],
  loading: false,
  getAllRaces: async () => {
    set({ loading: true });
    const races = await getAllRaces();
    set({ races, loading: false });
  },
  /* getRace: async (name) => {
    set({ loading: true });
    const races = await getRace(name);
    set({ races, loading: false });
  },*/
}));
