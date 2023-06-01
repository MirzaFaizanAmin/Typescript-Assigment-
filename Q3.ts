//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
/*
let myName: string = "Mirza Faizan Amin";
let TitleCase: string = "";

console.log(myName.toLocaleUpperCase());
console.log(myName.toLowerCase());
console.log(
  myName.charAt(0).toLocaleUpperCase() + myName.slice(1).toLocaleLowerCase()
);

for (let i = 0; i < myName.length; i++) {
  if (i === 0 || myName[i - 1] === " ") {
    TitleCase = TitleCase + myName[i].toUpperCase();
  } else {
    TitleCase = TitleCase + myName[i].toLocaleLowerCase();
  }
}
console.log(TitleCase);
*/


let sentence:string = "How aRe yoU";
let word:string[] = sentence.split(' ');
let titleCaseWords :string[] =word.map(function(word){

    return word[0].toUpperCase() + word.slice(1).toLocaleLowerCase()
})

let titleCaseSentence:string = titleCaseWords.join(" ");

console.log(titleCaseSentence);
