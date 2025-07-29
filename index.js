// const arr = ["Vanilla", " Strawberry ", " Coffee"];
// let userInput = [];

// If using a while loop
// const pickFlavor = (arr) => {
//   let cont = true;
//   while (cont) {
//     let flavor = prompt(`Pick a flavor from ${arr}`);
//     userInput.push(flavor);
//     let userCont = prompt(`Do you want another flavor Y/N`);
//     if (userCont === "N" || userCont === "No") {
//       cont = false;
//     }
//   }
// };

// console.log(pickFlavor(arr));
// console.log(userInput);

const arr = ["vanilla", "strawberry", "coffee"];

let input = prompt(
  `Enter a list of froyo flavors separated by commas from: ${arr} `
);
let userInput = input.split(",");

const countFlavors = {};
const flavorCounter = (userInput) => {
  for (const element of userInput) {
    if (countFlavors[element]) {
      countFlavors[element] += 1;
    } else {
      countFlavors[element] = 1;
    }
  }
  return countFlavors;
};
console.log(flavorCounter(userInput));
