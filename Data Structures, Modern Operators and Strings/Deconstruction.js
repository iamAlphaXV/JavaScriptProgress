"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Sangre Grande",
  mainIndex: 2,
  starterIndex: 2,
});
// //Destructuring and array
// const arr = [5, 7, 9];
// console.log(arr);
// //
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);
// //
// const [x, y, z] = arr;

// console.log(x, y, z);

// //
// const [first, second] = restaurant.categories;
// console.log(first, second);
// // To skip vallues in an array you create a hole in the declaration so 1,'hole',2
// let [main, , secondary] = restaurant.starterMenu;
// console.log(main, secondary);
// // switch variable places
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// // is the same as the follwing

// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// // console.log(restaurant.order(1, 2));

// // Recieve 2 return values form a function
// const [appitizer, mainCourse] = restaurant.order(0, 1);

// console.log(appitizer, mainCourse);

// // nested destructuring
// // working with nested arrays
// // destructuring inside of destructuring

// const nested = [2, 4, [6, 8]];

// const [uno, dos, [tres, quatro]] = nested;
// console.log(uno, dos, tres, quatro);

// // default values
// let [p, q, r, s] = [3, 5, 7];
// console.log(p, q, r, s);
// [p = 1, q = 1, r = 1, s = 1] = [3, 5, 7];
// console.log(p, q, r, s);

// =========================================================================
// Destructuring Objects
// creating variables from objects
// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // mutating values
// let a = 111;
// let b = 999;

// const obj = { a: 12, b: 34, c: 56 };

// console.log(a, b, obj.c);

// // cannot start with prerenthises so wraped in brackets
// ({ a, b } = obj);

// console.log(a, b, obj.c);

// // Nested Objects

// const {
//   fri: { open, close },
// } = openingHours;
// // console.log(fri);
// console.log(open, close);

const arr = [7, 9, 3];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(...arr);

let newMenu = [...restaurant.mainMenu];
console.log(newMenu);
console.log(...newMenu);
newMenu = [...restaurant.mainMenu, "pasta", "raviolli"];
console.log(newMenu);
console.log(...newMenu);