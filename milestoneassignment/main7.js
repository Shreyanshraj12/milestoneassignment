// Initialize an empty array to store the items in the cart
let shoppingCart = [];

function addItemToCart(item) {
  // Check if the item already exists in the cart
  if (shoppingCart.includes(item)) {
    console.log(`Item "${item}" is already in the cart. Please choose a different quantity.`);
  } else {
    // Add the item to the cart
    shoppingCart.push(item);
    console.log(`Item "${item}" added to the cart.`);
  }
}

// Example usage
addItemToCart("Product 1"); // Output: Item "Product 1" added to the cart.
addItemToCart("Product 2"); // Output: Item "Product 2" added to the cart.
addItemToCart("Product 1"); // Output: Item "Product 1" is already in the cart. Please choose a different quantity.
