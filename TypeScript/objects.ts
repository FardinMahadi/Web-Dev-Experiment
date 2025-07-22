// const user = {
//   name: "Fardin",
//   email: "fardin@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "fardin", isPaid: false, email: "f@f.com" };

// createUser({ name: "fardin", isPaid: false });

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }

// type User = {
//   _id: string;
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "Fardin", email: "", isActive: false };
// }

// createUser({ name: "Fardin", email: "", isActive: false });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "f",
  email: "f@f.com",
  isActive: false,
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

myUser.email = "f@gmail.com";
// myUser._id = "my name is "

export {};
