//Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.


const names: string[] = ["Rabi", "Mazhar", "Yasir", "Mudassir","Saud"];

// Print a personalized message to each person

for (const name of names) {
    console.log(`Hello, ${name}! How are you today?`);
}
