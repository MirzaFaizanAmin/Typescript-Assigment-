/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

*/
let guests: string[] = ["Rabi", "Yasir", "Mudassir"];
console.log(`There are ${guests.length} people invited to dinner.`);

// Add more guests
console.log("I found a bigger dinner table!");
guests.unshift("Ustaad"); // Add at the beginning
guests.splice(Math.floor(guests.length/2), 0, "Tariq bhai"); // Add in the middle
guests.push("Mazhar"); // Add at the end
console.log(`There are now ${guests.length} people invited to dinner.`);

// Remove guests
console.log("Uh oh, the dinner table won't arrive on time!");
console.log("I can only invite two people now.");
while (guests.length > 2) {
  const removedGuest = guests.pop();
  console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}
console.log(`The final guests are: ${guests.join(", ")}.`);
