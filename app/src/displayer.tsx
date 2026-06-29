import { useEffect } from "react";
import { items } from "../data/fakedata.ts"
import { useProducts } from "../data/product.data.ts"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card.tsx";

type search = {
  search?: string;
  price?: [number, number] | null;
  category?: string;
}

export const Displayer = ({ search }: { search?: search }) => {
  let data = items;

  useEffect(() => {
    if (data.length === 0) {
      useProducts.getState().updateMany({
        range: { range_1: 0, range_2: 0 },
        categorys: new Set()
      })
    }

    const range = data.reduce((acc, item) => ({
      range_1: Math.min(acc.range_1, item.price),
      range_2: Math.max(acc.range_2, item.price)
    }), { range_1: Infinity, range_2: -Infinity })


    const categorys = new Set(data.map((item) => item.category))

    useProducts.getState().updateMany({
      range: { range_1: range.range_1, range_2: range.range_2 }
      ,
      categorys: categorys
    })
  }, [data])



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

        const matchesPrice = !search.price || (item.price >= Number(search.price[0]) && item.price <= Number(search.price[1]))

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

