// Pre-existing array of list items
const listItemsArray = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
  ];
  
  // Global variable to keep track of the current index
  let currentIndex = 0;
  
  // Function to add a new list item on button click
  function addListItem() {
    const list = document.getElementById("listItems");
    const addButton = document.getElementById("addButton");
  
    // Check if there are remaining items in the array
    if (currentIndex < listItemsArray.length) {
      // Create a new list item element
      const listItem = document.createElement("li");
      listItem.textContent = listItemsArray[currentIndex];
  
      // Append the new list item to the list
      list.appendChild(listItem);
  
      // Increment the current index
      currentIndex++;
    } else {
      // Disable the button and display a message when all items have been added
      addButton.disabled = true;
      addButton.textContent = "All items added!";
    }
  }
  
  // Event listener for the button click
  document.getElementById("addButton").addEventListener("click", addListItem);
  