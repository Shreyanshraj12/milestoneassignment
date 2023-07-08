function mixColors(color1, color2) {
    let resultingColor;
  
    switch (color1) {
      case "red":
        switch (color2) {
          case "blue":
            resultingColor = "purple";
            break;
          case "yellow":
            resultingColor = "orange";
            break;
          default:
            resultingColor = "Invalid color combination";
            break;
        }
        break;
      case "blue":
        switch (color2) {
          case "red":
            resultingColor = "purple";
            break;
          case "yellow":
            resultingColor = "green";
            break;
          default:
            resultingColor = "Invalid color combination";
            break;
        }
        break;
      case "yellow":
        switch (color2) {
          case "red":
            resultingColor = "orange";
            break;
          case "blue":
            resultingColor = "green";
            break;
          default:
            resultingColor = "Invalid color combination";
            break;
        }
        break;
      default:
        resultingColor = "Invalid color combination";
        break;
    }
  
    console.log(`Resulting color: ${resultingColor}`);
  }
  
  // Example usage
  mixColors("red", "blue"); // Output: Resulting color: purple
  mixColors("blue", "red"); // Output: Resulting color: purple
  mixColors("red", "yellow"); // Output: Resulting color: orange
  mixColors("yellow", "red"); // Output: Resulting color: orange
  mixColors("blue", "yellow"); // Output: Resulting color: green
  mixColors("yellow", "blue"); // Output: Resulting color: green
  mixColors("red", "green"); // Output: Resulting color: Invalid color combination
  