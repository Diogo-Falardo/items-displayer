import { items } from "../data/fakedata.ts"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card.tsx";

type search = {
  search?: string;
  price?: string;
  category?: string;
}

export const Displayer = ({ search }: { search?: search }) => {
  let data = items
  if (search) {
    console.log(search)
    if (!search.search && !search.price && !search.category) {
      return (
        <div className="grid grid-cols-4 gap-4">
          {data.map((item) => <Card className="w-xs" key={item.id} >
            <CardHeader>
              <CardTitle>
                <h1>{item.name}</h1>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <h2>{item.category}</h2>
              <h2>{item.price}</h2>
            </CardContent>
          </Card>
          )}
        </div>
      )
    } else {

      data = items.filter((item) => {

        const matchesSearch = !search.search || item.name.toLowerCase().includes(search.search.toLowerCase())

        const matchesPrice = !search.price || item.price === Number(search.price)

        const matchesCategory = !search.category || item.category === search.category

        return matchesSearch && matchesPrice && matchesCategory
      })

    }

  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item) => <Card className="w-xs" key={item.id} >
        <CardHeader>
          <CardTitle>
            <h1>{item.name}</h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <h2>{item.category}</h2>
          <h2>{item.price}</h2>
        </CardContent>
      </Card>
      )}
    </div>
  )
}

