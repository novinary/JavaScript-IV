// CODE here for your Lambda Classes
// Base class - Person
class Person{
    constructor(perInfo){
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender 
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

// Sub class - Instrutor 
class Instructor extends Person {
    constructor(insInfo){
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

// Sub class - Student
class Student extends Person {
    constructor(stuInfo){
        super(stuInfo);
        this.previousBackground = stuInfo.previousBackground;
        this.className = stuInfo.previousBackground;
        this.favSubjects = stuInfo.favSubjects;
    }
    //methods
    listSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.naame} has begin the sprint challenge on ${subject}.`;
    }
}