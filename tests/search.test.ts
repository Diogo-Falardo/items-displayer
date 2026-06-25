type item = {
  id: number;
  name: string;
  price: number;
  category: string;
}
let items: Array<item> = []

function addItem(item: item) {
  items.push(item)
  console.log(`items array updated`, items)
}

type search = {
  search?: string;
  price?: number;
  category?: string;
}
function searchInArray(search: search): string | item | Array<item> {
  if (!search.search && !search.price && !search.category) {
    console.log("invalid search")
    return "invalid search"
  }

  console.log('searching for', search)

  const result = items.filter((item) => {

    const matchesSearch = !search.search || item.name.toLowerCase().includes(search.search.toLowerCase())

    const matchesPrice = !search.price || item.price === search.price

    const matchesCategory = !search.category || item.category === search.category

    return matchesSearch && matchesPrice && matchesCategory
  })

  console.log(result)
  return result
}

addItem({ id: 1, name: "product_1", price: 1, category: "tech" })
addItem({ id: 2, name: "product_2", price: 5, category: "food" })
addItem({ id: 3, name: "product_3", price: 2, category: "tech" })

searchInArray({ search: "product", price: 1 })
