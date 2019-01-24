// CODE here for your Lambda Classes
// Base class - Person
class Person{
    constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender 
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

// Instrutor class
class Instructor extends Person {
    constructor(uniqueInfo){
        this.speciality = uniqueInfo.speciality;
        this.favLanguage = uniqueInfo.favLanguage;
        this.catchPhrase = uniqueInfo.catchPhrase;
    }
    // methods
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} recieves a perfect score on ${subject}.`;
    }
}