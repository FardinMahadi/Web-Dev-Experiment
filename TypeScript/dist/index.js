"use strict";
// class User {
//   public email: string;
//   name: string;
//   private readonly city: string = "Dhaka";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Dhaka";
    }
}
const fardin = new User("fm@f.com", "fardin", "userId");
// fardin.city;
