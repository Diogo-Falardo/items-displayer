import { items } from "../app/data/fakedata.ts"

type item = {
  id: number;
  name: string;
  price: number;
  category: string;
}

// let items: Array<item> =

function addItem(item: item) {
  items.push(item)
  console.log(`items array updated`, items)
}

function getPriceRange(items: Array<item>): { range_1: number, range_2: number } {
  if (items.length === 0) return { range_1: 0, range_2: 0 }
  return items.reduce((acc, item) => ({
    range_1: Math.min(acc.range_1, item.price),
    range_2: Math.max(acc.range_2, item.price),
  }), { range_1: Infinity, range_2: -Infinity }
  )
}

function getCategorys(items: Array<item>): Set<string> {
  return new Set(items.map((item) => item.category))
}


type search = {
  search?: string;
  price?: [number, number];
  categorys?: Set<string>
}
function searchInArray(search: search): string | item | Array<item> {
  if (!search.search && !search.price && !search.categorys) {
    console.log("invalid search")
    return "invalid search"
  }

  console.log('searching for', search)
  const result = items.filter((item) => {

    const matchesSearch = !search.search || item.name.toLowerCase().includes(search.search.toLowerCase())

    const matchesPrice = !search.price || (item.price >= search.price[0] && item.price <= search.price[1])

    const matchesCategory = !search.categorys || search.categorys.has(item.category)

    return matchesSearch && matchesPrice && matchesCategory
  })

  console.log(result)
  return result
}


console.log(getPriceRange(items))
console.log(getCategorys(items))

// addItem({ id: 1, name: "product_1", price: 1, category: "tech" })
// addItem({ id: 2, name: "product_2", price: 5, category: "food" })
// addItem({ id: 3, name: "product_3", price: 2, category: "tech" })
//
searchInArray({ categorys: new Set(["tech", "sports"]) })
