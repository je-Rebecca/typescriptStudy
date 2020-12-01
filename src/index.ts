class Human{
   public name:string;
   public age:number;
   public gender:string;
   constructor(name: string, age:number, gender:string){
    this.name = name;
    this.age =age;
    this.gender=gender;
   }
}
const Brian = new Human("Brian",22,"male");
const sayHi =( person:Human) :string =>{
    return `Hello ${person.name},you are ${person.age}, 
    you are ${person.gender}!`;
    
};
console.log(sayHi(Brian));

export {};