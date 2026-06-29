import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Displayer } from './displayer'
import { Input } from './components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover'
import { Button } from './components/ui/button'
import { ListSortDescendingIcon, Search } from 'lucide-react'
import { useProducts } from '../data/product.data.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode >
)

type Search = {
  search: string,
  price: string,
  category: string,
}

function SearchBox({ search, setSearch }: { search: Search, setSearch: React.Dispatch<React.SetStateAction<Search>> }) {

  const priceRange = useProducts((state) => state.range)

  const handleSearchChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSearch((prev) => ({ ...prev, [name]: value }))
  }

  if (search) {
    console.log(search)
  }
  if (priceRange) {
    console.log(priceRange)
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
          <Input name='price' placeholder='price' type="number" value={search.price ?? ""} onChange={handleSearchChanges} />
          <p>Category search</p>
          <Input name='category' placeholder='category' type='text' value={search.category ?? ""} onChange={handleSearchChanges} />
        </PopoverContent>
      </Popover>
    </div>

  )

}
function App() {
  const [search, setSearch] = useState({ search: "", price: "", category: "" })



  return (
    <div className='min-h-screen flex flex-col gap-4 items-center justify-center'>
      <SearchBox search={search} setSearch={setSearch} />
      <Displayer search={search} />
    </div>)
}
