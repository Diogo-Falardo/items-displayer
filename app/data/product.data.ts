import { create } from "zustand"

type Range = {
  range_1: number,
  range_2: number
}

type ProductStore = {
  range: Range,
  setRange: (r: Range) => void
}

export const useProducts = create<ProductStore>((set) => ({
  range: { range_1: 0, range_2: 0 },
  setRange: (r) => set({ range: r })
}))
