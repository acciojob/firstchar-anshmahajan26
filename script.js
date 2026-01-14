function firstChar(text) {
  // your code here
	for (let i = 0; i < str.length; i++) {
    // if character is not a space
    if (str[i] !== " ") {
      return str[i];
    }
  }
  // if only spaces or empty string
  return "";
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
