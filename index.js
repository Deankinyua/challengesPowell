let numbers = [-1, 2, 4, 6, 7, 3, -1, 2];

const withoutDuplicates = numbers.filter(
  (num, index, numbers) => numbers.indexOf(num) === index
);

// console.log(withoutDuplicates);
let items = [
  {
    name: "Avocado",
    price: 100,
  },
  {
    name: "Mango",
    price: 30,
  },
  {
    name: "Orange",
    price: 40,
  },
  {
    name: "Watermelon",
    price: 50,
  },
];

const total_price = items.reduce((total, item) => {
  return total + item.price;
}, 0);

console.log(total_price);
