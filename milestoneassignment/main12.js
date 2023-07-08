function calculateRentalCost(numDays, carType) {
    let rentalCostPerDay;
  
    switch (carType.toLowerCase()) {
      case 'economy':
        rentalCostPerDay = 4000;
        break;
      case 'midsize':
        rentalCostPerDay = 15000;
        break;
      case 'luxury':
        rentalCostPerDay = 20000;
        break;
      default:
        return 'Invalid car type';
    }
  
    let totalCost = rentalCostPerDay * numDays;
    return totalCost;
  }
  
  // Example usage
  let numDaysRented = 5;
  let carType = 'midsize';
  let rentalCost = calculateRentalCost(numDaysRented, carType);
  console.log(`Total Rental Cost: Rs. ${rentalCost}/-`);
  