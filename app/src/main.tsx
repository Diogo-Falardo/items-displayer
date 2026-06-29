import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Displayer } from './displayer'
import { Input } from './components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover'
import { Button } from './components/ui/button'
import { ListSortDescendingIcon, Search } from 'lucide-react'
import { useProducts } from '../data/product.data.ts'
import { PriceSlider } from './components/ui-displayer/price-slider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode >
)

type Search = {
  search: string,
  price: [number, number] | null,
  category: string,
}

function SearchBox({ search, setSearch }: { search: Search, setSearch: React.Dispatch<React.SetStateAction<Search>> }) {

  const priceRange = useProducts((state) => state.range)
  const categorys = useProducts((state) => state.categorys)

  const handleSearchChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSearch((prev) => ({ ...prev, [name]: value }))
  }

  if (search) {
    console.log(search)
  }
  if (priceRange && categorys) {
    console.log(priceRange, categorys)
  }
  return (
    <div className='flex gap-2 items-center'>
      <Input name="search" placeholder='search' type='text' value={search.search ?? ""} onChange={handleSearchChanges} />
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"secondary"}><ListSortDescendingIcon /></Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Price search</p>
          <PriceSlider min={priceRange.range_1} max={priceRange.range_2}

            value={search.price ?? [priceRange.range_1, priceRange.range_2]}
            onChange={(v) => setSearch(prev => ({ ...prev, price: v }))}
          />

          <p>Category search</p>
          <Input name='category' placeholder='category' type='text' value={search.category ?? ""} onChange={handleSearchChanges} />
        </PopoverContent>
      </Popover>
    </div>

  )

}
function App() {
  const [search, setSearch] = useState<Search>({ search: "", price: null, category: "" })



  return (
    <div className='min-h-screen flex flex-col gap-4 items-center justify-center'>
      <SearchBox search={search} setSearch={setSearch} />
      <Displayer search={search} />
    </div>)
}
