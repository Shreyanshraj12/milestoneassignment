const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    let discountAmount = originalPrice - discountedPrice;
    let discountPercentage = (discountAmount / originalPrice) * 100;
    discountPercentage = discountPercentage.toFixed(2);
    return discountPercentage;
  };
  
  // Example usage
  let originalPrice = 100;
  let discountedPrice = 75;
  let discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log(`Discount Percentage: ${discountPercentage}%`);
  