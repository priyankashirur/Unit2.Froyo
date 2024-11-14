//give user a prompt "Please enter a comma separated list of flavors" and store it into an variable (will be stored as a string)

let flavors = prompt("Please enter a comma separated list of Froyo flavors.");

//create local variable to use for testing code in terminal
// let flavors =
//   "vanilla,chocolate,vanilla,chocolate,strawberry,vanilla,strawberry";

console.log("Entered string: ", flavors);

//turn the variable into an array by splitting each item at the comma. string --> array
let flavorsarray = flavors.split(",");
console.log("Array of user input: ", flavorsarray);

//parse through the array variable and for each - add it to an object with key of the array entry and count of how many times it appears.

//create object we will be filling
let flavorCounts = {};

//loop through each flavor. for each flavor in the flavor array, if the key in the object exists increase the value by 1. if the key in the object does not exist, set it as 1.
for (let flavor of flavorsarray) {
  console.log("Each flavor in array is: ", flavor);
  //checking if the key exists
  if (flavor in flavorCounts) {
    flavorCounts[flavor]++;
  }
  // if the key doesnt exist
  else {
    flavorCounts[flavor] = 1;
  }
}

//print out the object
console.table("The final flavor counts are: ", flavorCounts);
