// Start JS Barista

// Ask user for drink temperature preference
let question = prompt("Would you like a cold or hot drink?");

if (question === "cold") {
  // Inform user that cold drinks are unavailable
  console.log("Sorry, cold drinks are sold out.");
} else if (question === "hot") {
  // Define drink prices
  const prices = {
    latte: 180,
    cappuccino: 130,
    americano: 210
  };

  // Ask user for their favorite hot drink
  let choice = prompt("What's your favorite drink? (latte/cappuccino/americano)");

  // Check if the drink is available
  if (choice === "latte" || choice === "cappuccino" || choice === "americano") {
    // Ask how many cups the user wants
    let order = Number(prompt("How many cups of " + choice + "?"));

    // Calculate total price
    let totalPrice = order * prices[choice];

    // Apply discount if order is more than 3 cups
    if (order > 3) {
      totalPrice *= 0.9;
      console.log("You get a 10% discount!");
    }

    // Show order summary
    console.log("Your order is: " + order + " " + choice);
    console.log("Total price: " + totalPrice + "$");
  } else {
    // Inform user if drink is not available
    console.log("We don't have that drink.");
  }
}

// Ask if user wants to order more
let more = prompt("Would you like anything else? (yes/no)");

if (more === "no") {
  // End interaction politely
  console.log("Thank you for choosing Barista.");
} else if (more === "yes") {
  // Reuse the same prices object
  const prices = {
    latte: 180,
    cappuccino: 130,
    americano: 210
  };

  // Ask for second drink choice
  let newChoice = prompt("Which one would you like? (latte/cappuccino/americano)");

  // Check if the drink is available
  if (newChoice === "latte" || newChoice === "cappuccino" || newChoice === "americano") {
    // Ask how many cups the user wants
    let newOrder = Number(prompt("How many cups of " + newChoice + "?"));

    // Calculate total price
    let newTotalPrice = newOrder * prices[newChoice];

    // Apply discount if order is more than 3 cups
    if (newOrder > 3) {
      newTotalPrice *= 0.9;
      console.log("You get a 10% discount!");
    }

    // Show order summary
    console.log("Your order is: " + newOrder + " " + newChoice);
    console.log("Total price: " + newTotalPrice + "$");
    console.log("Thank you for choosing Barista.");
  } else {
    // Inform user if drink is not available
    console.log("We don't have that drink.");
  }
}

// End JS Barista
