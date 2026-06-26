export type item = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export const items: Array<item> = [
  { id: 1, name: "Wireless Mouse", price: 19.99, category: "tech" },
  { id: 2, name: "Mechanical Keyboard", price: 89.99, category: "tech" },
  { id: 3, name: "USB‑C Cable", price: 9.99, category: "tech" },
  { id: 4, name: "Bluetooth Speaker", price: 49.99, category: "tech" },

  { id: 5, name: "Running Shoes", price: 59.99, category: "sports" },
  { id: 6, name: "Football", price: 24.99, category: "sports" },
  { id: 7, name: "Gym Gloves", price: 14.99, category: "sports" },
  { id: 8, name: "Yoga Mat", price: 29.99, category: "sports" },

  { id: 9, name: "T‑Shirt", price: 12.99, category: "clothing" },
  { id: 10, name: "Jeans", price: 39.99, category: "clothing" },
  { id: 11, name: "Hoodie", price: 49.99, category: "clothing" },
  { id: 12, name: "Sneakers", price: 69.99, category: "clothing" },

  { id: 13, name: "Coffee Mug", price: 7.99, category: "home" },
  { id: 14, name: "LED Lamp", price: 22.99, category: "home" },
  { id: 15, name: "Wall Clock", price: 17.99, category: "home" },
  { id: 16, name: "Candle Set", price: 14.99, category: "home" },

  { id: 17, name: "Notebook", price: 3.99, category: "office" },
  { id: 18, name: "Pen Pack", price: 2.49, category: "office" },
  { id: 19, name: "Desk Organizer", price: 12.49, category: "office" },
  { id: 20, name: "Monitor Stand", price: 34.99, category: "office" }
];

