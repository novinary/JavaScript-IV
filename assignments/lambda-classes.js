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
        this.grade = stuInfo.grade;
    }
    //methods
    listsSubjects(){
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
 console.log(sonia.grade('Ash', 'Data Functions')); 


 //Student
 const Ash = new Student({
    name: 'Ash Townley',
    age: 25,
    location: 'Basingstoke',
    gender: 'male',
    previousBackground: 'Student',
    className: '123',
    favSubjects: [
        'Maths',
        'Chemistry', 
    ],
    grade: 75,
});

const Ralph = new Student({
    name: 'Ralph Kinnard',
    age: 25,
    location: 'Southampton',
    gender: 'male',
    previousBackground: 'Student',
    className: '123',
    favSubjects: [
        'IT',
        'History', 
    ],
    grade: 80,
});

console.log(Ralph);
console.log(Ralph.speak()); 
console.log(Ralph.listsSubjects()); 
console.log(Ralph.PRAssignment('Javascript I')); 
console.log(Ralph.sprintChallenge('Javascript I')); 
console.log(Ralph.grade); 


//Project Managers
const Samar = new ProjectManager({
    name: 'Samar',
    age: 30,
    location: 'India',
    gender: 'male',
    specialty: 'Javascript',
    favLanguage: 'English',
    catchPhrase: 'Rock n roll',
    gradClassName: '123',
    favInstructor: 'Gabe',
});

const Luke = new ProjectManager({
    name: 'Luke',
    age: 30,
    location: 'Poland',
    gender: 'male',
    specialty: 'CSS',
    favLanguage: 'English',
    catchPhrase: 'Pardy time',
    gradClassName: '123',
    favInstructor: 'Gabe',
});

console.log(Samar);
console.log(Samar.speak()); 
console.log(Luke.demo('Functions')); 
console.log(Samar.grade(Ralph, 'Sprocs')); 
console.log(Luke.standUp('WEBEU1_LUKE')); 
console.log(Samar.debugsCode(Ash, 'VSCode')); 
