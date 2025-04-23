// Step 1
// In this workshop, you will apply the functional programming concepts
// you have learned in the previous lectures to build an ingredient
// converter app.

// The HTML and CSS have already been provided for you.

// Start by declaring an empty conversionTable object.

// Step 2
// Give your conversionTable a cup property, and assign it an object
// with a gram property set to 240, an ounce property set to 8.0, and
// a teaspoon property set to 48.

// Step 3
// Give your conversionTable a gram property, and assign it an object
// with a cup property set to 1/240, an ounce property set to 0.0353,
// and a teaspoon property set to 0.2.

// Step 4
// Give your conversionTable an ounce property, and assign it an object
// with a cup property set to 0.125, a gram property set to 28.35, and
// a teaspoon property set to 6.

// Step 5
// Finally, give your conversionTable a teaspoon object with a cup property
// set to 1/48, a gram property set to 5, and an ounce property set to 0.167.

const conversionTable = {
  cup: { gram: 240, ounce: 8.0, teaspoon: 48 },
  gram: { cup: 1 / 240, ounce: 0.0353, teaspoon: 0.2 },
  ounce: { cup: 0.125, gram: 28.35, teaspoon: 6 },
  teaspoon: { cup: 1 / 48, gram: 5, ounce: 0.167 },
};

// Step 6
// Now you'll need to create your first curried function. Remember
// that a curried function is a function that returns another
// function, like so:

// Example Code
// const tikkaMasala = (spice) => (protein) => (vegetable) => {
//   return "Yum!";
// }
// Start by declaring a convertQuantity function. It should have
// a single fromUnit parameter, and should be empty.

// Step 7
// Example Code
// const tikkaMasala = (spice) => (protein) => (vegetable) => {
//   return "Yum!";
// }
// Now, following the syntax above, update your convertQuantity
// function to return a second function. This inner function
// should accept a toUnit argument, and should be empty.

// Step 8
// Example Code
// const tikkaMasala = (spice) => (protein) => (vegetable) => {
//   return "Yum!";
// }
// Finally, update your inner function to return a third function.
// This third function should also accept a single argument named
// quantity, and have an empty body.

// Step 9
// Your innermost curried function will hold the logic for converting
// the value.

// First, use the fromUnit argument to access your conversionTable object,
// then use the toUnit argument to access the nested object.

// Return the result of multiplying that conversion value with the quantity
// value.

const convertQuantity = (fromUnit) => (toUnit) => (quantity) => {
  return convertQuantity("gram")("cup")(1);
};
