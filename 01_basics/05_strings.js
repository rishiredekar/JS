const name = "Rishi"
const repoCount = 24

// console.log(name +  repoCount + " Value");

console.log(`Hello My Name Is ${name} And My Repo Count Is ${repoCount}`);

const gameName = new String('rishi-acc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  rishi  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rishi.com/rishi%20redekar"

console.log(url.replace('%20', '_'));
 
console.log(url.includes('rishi-redekar'));
 
console.log(gameName.split('-'));
