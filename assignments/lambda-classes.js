// CODE here for your Lambda Classes
//Base class - Person
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