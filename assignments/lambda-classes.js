// CODE here for your Lambda Classes
// Base class - Person
class Person{
    constructor(perInfo){
        this.name = perInfo.name;
        this.age = perInfo.age;
        this.location = perInfo.location;
        this.gender = perInfo.gender 
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

// Sub class - Instructor 
class Instructor extends Person {
    constructor(insInfo){
        super(insInfo);
        this.speciality = insInfo.speciality;
        this.favLanguage = insInfo.favLanguage;
        this.catchPhrase = insInfo.catchPhrase;
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
        this.grade = props.grade;
    }
    //methods
    listSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begin the sprint challenge on ${subject}.`;
    }
    listGrade()
    {
        return `${this.name} has scored ${this.grade} on ${subject}.`;
    }
}

//sub class - PM
class ProjectManager extends Instructor {
    constructor(pmInfo)
    {
        super(pmInfo);
        this.gradeClassName = pmInfo.gradeClassName;
        this.favInstrutor = pmInfo.favInstrutor;
        this.channel = pmInfo.channel;
    }
    //methods
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    }
}

//Test
//Person
const bob = new Person({
    name: 'Bob Ginn',
    age: 26,
    location: 'Winchester',
    gender: 'male'
  });

  const andy = new Person({
    name: 'Andy Gordon',
    age: 37,
    location: 'Winchester',
    gender: 'male'
  });

console.log(bob);
console.log(andy.speak());

//Instructor
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const sonia = new Instructor({
    name: 'Sonia Thomas',
    location: 'Reading',
    age: 50,
    gender: 'gfemale',
    favLanguage: 'Sql',
    specialty: 'Back-end',
    catchPhrase: `You only live Once`
  });
 console.log(sonia);
 console.log(sonia.speak()); 
 console.log(sonia.demo('Stored Procedures')); 
 console.log(sonia.grade('Harry', 'Transfiguration')); 
