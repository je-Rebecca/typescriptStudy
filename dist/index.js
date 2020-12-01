"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const Brian = new Human("Brian", 22, "male");
const sayHi = (person) => {
    return `Hello ${person.name},you are ${person.age}, 
    you are ${person.gender}!`;
};
console.log(sayHi(Brian));
//# sourceMappingURL=index.js.map