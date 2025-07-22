let score: number | string = 33;
score = 44;
score = "44";

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let fardin: User | Admin = {
  name: "fardin",
  id: 334,
};

fardin = {
  userName: "MH",
  id: 334,
};

// function getDbId(id: number | string) {
//   // making some API calls
//   console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") id.toLowerCase();
  if (typeof id === "number") id + 2;
}

// array

const data1: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: string[] | number[] = ["1", "2", "3"];
