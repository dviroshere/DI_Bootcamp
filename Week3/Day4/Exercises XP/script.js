// Exercise 1
let x = 52;
let y = 27;

if (x > y) {
	console.log(`${x} is bigger than ${y}`);
} else {
	console.log(`${y} is bigger than ${x}`);
}

// Exercise 2
let newDog = 'Chihuahua';
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog === 'Chihuahua') {
	console.log(`I love Chihuahuas, it's my favorite dog breed`);
} else {
	console.log(`I dont care, I prefer cats`);
}

// Exercise 3
// let userNum = +prompt('your number please');
// if (userNum % 2 === 0) {
// 	console.log(`${userNum} is an even number`);
// } else {
// 	console.log(`${userNum} is an odd number`);
// }

// Exercise 4
let users = ['Lea123', 'Princess45', 'cat&doglovers', 'helooo@000'];

if (users.length === 1) {
	console.log(`${users[0]} is online`);
} else if (users.length === 2) {
	console.log(`${users[0]} and ${users[1]} is online`);
} else if (users.length > 2) {
	console.log(
		`${users[0]}, ${users[1]} and ${users.length - 2} more are online`
	);
} else {
	console.log(`no one is online`);
}
