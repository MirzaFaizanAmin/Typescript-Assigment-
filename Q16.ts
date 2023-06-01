/*
More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
*/
let guests: string[] = ["Rabi", "Mazhar", "yasir"];

console.log("Good news, everyone! We found a bigger iftar party !");

guests.unshift("Mudassir"); // Add a guest to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Tariq bhai"); // Add a guest to the middle
guests.push("Ustaad"); // Add a guest to the end

for (let guest of guests) {
  console.log(`Dear ${guest}, please come to iftar at my place on Saturday!`);
}
