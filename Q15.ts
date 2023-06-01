/*
Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. 
Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest 
who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

*/
let guestList: string[] = ["Rabi", "Mazhar", "Yasir","Mudassir"];

// Print initial set of invitation 

guestList.forEach((guest) => {
  console.log(`Dear ${guest}, please join us for dinner!`);
});

// Replace a guest who can't make it with a new guest

const unableToAttend = "Mazhar";
const newGuest = "Mufti Saalik Ashraf";
const index = guestList.indexOf(unableToAttend);
if (index !== -1) {
  guestList[index] = newGuest;
  console.log(`${unableToAttend} is unable to attend, but we have invited ${newGuest} in their place.`);
}

// Print updated set of invitation messages

guestList.forEach((guest) => {
  console.log(`Dear ${guest}, please join us for dinner!`);
});

export{}