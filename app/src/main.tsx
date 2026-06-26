import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Displayer } from './displayer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode >
)


type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void
}
function SearchBox({ value, onChange }: SearchBoxProps) {
  return (<input placeholder='search' className='border p-2' value={value} onChange={(e) => onChange(e.target.value)} />)
}

function App() {

  const [search, setSearch] = useState("")

  return (
    <div className='min-h-screen flex flex-col gap-4 items-center justify-center bg-neutral-400'>
      <SearchBox value={search} onChange={setSearch} />
      <Displayer search={search.trim() === "" ? undefined : { search }} />
    </div>)
}
