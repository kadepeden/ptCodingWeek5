console.log("Is this thing on?");

//class that represents a students
//classes use "pascel" case - the first letter of each word is capitalized
//declared as "class", then the name of the class
//then curly braces
//everything in between the curly braces constitutes the "class"
//inside of {} we use the constructor function
class Student {
    constructor(firstName, lastName, phoneNumber, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

//classes can take paramenters
//using "this" makes the variable beyond the = sign distict to the instance, or to the object

    introduce () {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}.`)
    }
}

//using "new" is the function you use to "instantiate" something

let student1 = new Student("Tom", "Sawyer", "7193148637","A");
let student2 = new Student("Kade","Peden","5413241187","B");

student1.introduce();
student2.introduce();

//you know you need a new class when you need something to be in control of something
//a class should control one thing
//for example, in a card game, you'd have classes for
//  players
//  cards
//  tables
//  tokens




