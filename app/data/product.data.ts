import { create } from "zustand"


const useProducts = create((set) => ({
  range: { range_1: number, range_2: number }
}))
