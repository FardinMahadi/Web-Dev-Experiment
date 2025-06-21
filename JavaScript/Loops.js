let user = { name: "Alice", age: 25, isEmployed: false };

console.log(user);

for (let key in user) {
  console.log(key, user[key]);
}

for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  if (i === 1) continue;
  console.log(i);
}

// let num = 0;
// while (num < 10) {
//   console.log("Num: ", num);
//   num++;
// }

const str = "Fardin";
const data = new String("Fardin");
console.log(typeof str, typeof data);
