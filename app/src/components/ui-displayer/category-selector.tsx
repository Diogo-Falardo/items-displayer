import { Checkbox } from "../ui/checkbox"
import { ScrollArea } from "../ui/scroll-area"

type CategorySelectorProps = {
  categorys: Set<string> | null
  selected: Set<string> | null
  onChange: (next: Set<string>) => void
}


export const CategorySelector = ({ categorys, selected, onChange }: CategorySelectorProps) => {

  if (categorys === null) {
    return (<div>No categorys to be displayed</div>)
  }

  const handleToogle = (c: string) => {
    const next = new Set(selected ?? [])

    if (next.has(c)) {
      next.delete(c)
    }
    else {
      next.add(c)
    }

    onChange(next)
  }

  return (
    <div className="flex w-full">
      <ScrollArea className="h-24 w-full">
        <div className="flex w-full h-full flex-col gap-2 items-end">
          {Array.from(categorys).map(c => <div className="flex w-full justify-end " key={c}>
            <div className="flex gap-1 items-center w-20">
              < Checkbox
                checked={selected?.has(c) ?? false}
                onCheckedChange={() => handleToogle(c)}
              />
              <span>{c}</span>
            </div>
          </div>)}
        </div>
      </ScrollArea >
    </div >
  )
}

