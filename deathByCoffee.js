var coffeeLimits = function (y, m, d) {
  let month = minTwoDigits(m);
  let day = minTwoDigits(d);
  var dob = parseInt([y, month, day].join(""));

  var h = convertToHex(dob);
  var cafe = convertHexToDec("cafe");
  var decaf = convertHexToDec("decaf");

  let drinksOfCoffee = drinkCoffeeTilYouDie(h, cafe);
  let drinksOfDecaf = drinkCoffeeTilYouDie(h, decaf);

  return [drinksOfCoffee, drinksOfDecaf];
};

function drinkCoffeeTilYouDie(health, coffeeType) {
  let drinksOfCoffee = 0;
  let index = 0;

  while (index <= 5000) {
    let dec = convertHexToDec(health);
    dec = dec + coffeeType;
    health = convertToHex(dec);

    if (health.includes("dead")) {
      drinksOfCoffee = index + 1;
      break;
    }
    index++;
  }

  return drinksOfCoffee;
}

function convertToHex(num) {
  return num.toString(16);
}

function convertHexToDec(num) {
  return parseInt(num, 16);
}

function minTwoDigits(n) {
  return (n < 10 ? "0" : "") + n;
}

module.exports = { coffeeLimits, convertToHex, convertHexToDec };
