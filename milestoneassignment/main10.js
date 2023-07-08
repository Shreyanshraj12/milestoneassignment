function correctCartBug(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2;
    }
    return cart;
  }
  
  // Example usage
  let cart = [1, 2, 3, 4, 5];
  let correctedCart = correctCartBug(cart);
  console.log("Corrected Cart:", correctedCart);
  