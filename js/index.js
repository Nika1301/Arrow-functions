console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};
console.log("Get Current Hour:", getCurrentHour());
/*
/*function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}*/

const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
};
console.log("Get vector Lenght:", getVectorLength(2, 2, 2));

/*
function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}*/

const cleanInput = (string) => {
  return string.toLowerCase().trim();
};
console.log("Clean Input:", cleanInput("Hello"));

/*
function cleanInput(string) {
  return string.toLowerCase().trim();
}
*/

/*
Rewrite the following arrow functions as classic functions.
*/

/*
const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};

*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}
console.log("Is Odd And Small:", isOddAndSmall(1));

/* const add3 = (a, b, c) => a + b + c; */

function add3(a, b, c) {
  return a + b + c;
}
console.log("Add three:", add3(2, 3, 4));

/*
const repeat10 = (string) => string.repeat(10); */

function repeat10(string) {
  return string.repeat(10);
}
console.log("Repeat10:", repeat10("Y"));
