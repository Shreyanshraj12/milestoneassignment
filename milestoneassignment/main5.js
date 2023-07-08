function capitalizeFirstName(name) {
    let firstLetter = name.charAt(0);
    let capitalizedFirstLetter = firstLetter.toLowerCase() !== firstLetter ? firstLetter : firstLetter.toUpperCase();
    let modifiedName = capitalizedFirstLetter + name.slice(1);
    return modifiedName;
  }
  
  // Example usage
  let userName = "john";
  let modifiedName = capitalizeFirstName(userName);
  console.log(`Modified Name: ${modifiedName}`);
  