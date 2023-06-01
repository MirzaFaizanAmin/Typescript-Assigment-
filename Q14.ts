//Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? Make a list that includes at least
// three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.


const guests: string[] = ["Albert Einstein", "Frida Kahlo", "Neil Armstrong"];

// Print a personalized invitation message to each guest

for (const guest of guests) {
    console.log(`Dear ${guest}, 
    you are cordially invited to dinner at my place next Saturday. 
    Please let me know if you can make it. \n Sincerely,\n Mirza Faizan Amin`);
}
