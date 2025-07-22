function addTwo(num: number): number {
  return num + 2;
  //   return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean): string {
  return "str";
}

let loginUser = (
  name: string,
  email: string,
  isPaid: boolean = false
): number => {
  return 2;
};

addTwo(5);
getUpper("Fardin");

signUpUser("Mahadi Hasan Fardin", "f@gmail.com", true);

loginUser("f", "f@f.com");

function getValue(myVal: number): boolean | string {
  if (myVal > 5) return true;
  return "200 OK";
}

const getHello = (s: string): string => {
  return "str";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
  //   return 1;
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
