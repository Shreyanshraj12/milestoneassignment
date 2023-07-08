function calculateTotalBill(costPerDish, numPeople) {
    let totalBill = costPerDish * numPeople;
    let billPerPerson = totalBill / numPeople;
  
    let billDetails = {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  
    return billDetails;
  }
  
  // Example usage
  let costPerDish = 150;
  let numPeople = 4;
  let billDetails = calculateTotalBill(costPerDish, numPeople);
  console.log("Bill Details:", billDetails);
  