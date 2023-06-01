//Your Own Array: Think of your favorite mode of transportation,
//such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const vehicles: string[] = ["Honda motorcycle", "Tesla Model S", "Jeep Wrangler", "Yamaha jet ski"];

// Print a statement about each vehicle

for (const vehicle of vehicles) {
    console.log(`I would like to own a ${vehicle}.`);
}
