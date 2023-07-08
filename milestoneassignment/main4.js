function findHighestMarks(marks) {
    let highestMarks = 0;
  
    marks.forEach(function (mark) {
      highestMarks = mark > highestMarks ? mark : highestMarks;
    });
  
    return highestMarks;
  }
  
  // Example usage
  let marks = [80, 90, 75, 95, 85];
  let highestMarks = findHighestMarks(marks);
  console.log(`The highest marks scored in the class: ${highestMarks}`);
  