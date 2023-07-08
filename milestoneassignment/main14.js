const calculateTotalCost = (cart) => {
    let totalCost = 0;
  
    cart.forEach((item) => {
      let itemCost = item.unitPrice * item.quantity;
      totalCost += itemCost;
    });
  
    return totalCost;
  };
  
  // Example usage
  let cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 15, quantity: 3 },
    { unitPrice: 5, quantity: 4 }
  ];
  let totalCost = calculateTotalCost(cart);
  console.log(`Total Cost: $${totalCost}`);
  