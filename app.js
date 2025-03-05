// Method Push
let sleepTogether = ['John', 'Nana']
sleepTogether.push('Mia')
console.log(sleepTogether)

// Method Pop
let playGames = ['Jinc', 'Virgi', 'Abi', 'Omi']
playGames.pop()
console.log(playGames)

// Method Shift and unshift
let letsGoo = ["Bogor", "Bandung", "Jogja", "Papua", "Bali"]
letsGoo.shift();
letsGoo.unshift('Lembang');
console.log(letsGoo)

// Method Concat

const array1 = ["Giraffe", "Elephant", "Zebra"];
const array2 = ["Lion", "Tiger", "Bear"];
const array3 = array1.concat(array2);

console.log(array3);

// Methods Includes

let cats = ['Gradient', 'Gray', 'Loreng'];
console.log(cats.includes("Gray"));
console.log(cats.includes("Loreng-Orange"));

// IndexOf

let animal = ['Giraffe', 'Lion', 'Tiger', 'Eagle'];
console.log(animal.indexOf("Tiger"));
console.log(animal.indexOf("Lion"));

// Method Reverse

const num = [1, 2, 3, 4];
const reversed = num.reverse();
console.log("Hitung Mundar :", reversed);
console.log("Hitung :", num);

// Method Slice

let room = ['bath-room', 'gamer-room', 'enjoy-room', 'gym-room', 'spa-room', 'sex-room'];
console.log(room.slice(3));
console.log(room.slice(-2));
console.log(room.slice(4, -1));
console.log(room.slice(1, 4));

// Method Splice

let wifi = ['indihome', 'myrepublik', 'biznet', 'firstmedia', 'oxygen', 'corpnet'];
wifi.splice(3,1);
console.log(wifi);

const angka = ['one', 'two', 'eight', 'four', 'six'];
angka.splice(4, 1, "five");
angka.splice(2, 1, "three")
console.log(angka);

const color = ['blue', 'red', 'green', 'yellow', 'oranges', 'purple'];
color.splice(3, 0, "green-yellow");
color.splice(0, 2, "blue-red")
console.log(color);

// method sort

const audition = [
    { name: 'Bobby', age: 50},
    { name: 'Cyntia', age: 30},
    { name: 'Alice', age: 24},
    { name: 'David', age: 33}
];

audition.sort((a, b) => {
    if (a.name === b.name) {
        return a.age - b.age;
    }
    return a.name.localeCompare(b.name);
})

console.log(audition);

    