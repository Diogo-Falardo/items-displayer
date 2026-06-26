import { items } from "../data/fakedata.ts"

type search = {
  search?: string;
  price?: number;
  category?: string;
}

export const Displayer = ({ search }: { search?: search }) => {
  let data = items
  console.log(search)
  if (search) {

    if (!search.search && !search.price && !search.category) {
      throw new Error("invalid search")
    } else {

      console.log('searching for', search)
      data = items.filter((item) => {

        const matchesSearch = !search.search || item.name.toLowerCase().includes(search.search.toLowerCase())

        const matchesPrice = !search.price || item.price === search.price

        const matchesCategory = !search.category || item.category === search.category

        return matchesSearch && matchesPrice && matchesCategory
      })

    }

  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item) => <div key={item.id} className="p-2 border ">
        <h1>{item.name}</h1>
        <h2>{item.category}</h2>
        <h2>{item.price}</h2>
      </div>
      )}
    </div>
  )
}

