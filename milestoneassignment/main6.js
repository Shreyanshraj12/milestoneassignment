function countVowels(name) {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < name.length; i++) {
      let char = name[i].toLowerCase();
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  // Example usage
  let name = "John Doe";
  let numVowels = countVowels(name);
  console.log(`Number of vowels in the name: ${numVowels}`);
  