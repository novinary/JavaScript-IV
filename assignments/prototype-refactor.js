/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// GameObject
/*   ** solution from yesterday ** 
function GameObject (attributes){
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function () {
  return (`${this.name} was removed from the game.`);
}
*/
class GameObject {
    constructor (attributes)
    {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
    destroy (){
        return (`${this.name} was removed from the game.`);
    }
};


/* CharacterStats
** solution from yesterday ** 
function CharacterStats (charAttributes){
    GameObject.call(this, charAttributes);
    this.healthPoints = charAttributes.healthPoints;
    this.name = charAttributes.name;
};
CharacterStats.prototype  = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function ()
{
  return (`${this.name} took damage.`);
}
*/
//subclass of GameObject class and it uses the extends keyword to set itself as a subclass
class CharacterStats extends GameObject {
    constructor (charAttributes)
    {
        super(charAttributes)    //super keyword used as a function which calls the parent class with the paramater passed to this class
        this.healthPoints = charAttributes.healthPoints;
        this.name = charAttributes.name;
    }
    takeDamage() {
        return (`${this.name} took damage.`);
    }
};
/*
function Humanoid(humAtrributes){
  GameObject.call(this, humAtrributes);
  CharacterStats.call(this, humAtrributes);
  this.team = humAtrributes.team;
  this.weapons = humAtrributes.weapons;
  this.language = humAtrributes.language;
};
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function (){
  return (`${this.name} offers a greeting in ${this.language}.`);
}
*/
//subclass of humAttributes class and it uses the extends keyword to set itself as a subclass
class Humanoid extends CharacterStats {
    constructor (humAtrributes){
        super(humAtrributes);
        this.team = humAtrributes.team;
        this.weapons = humAtrributes.weapons;
        this.language = humAtrributes.language;
    }
    greet(){
        return (`${this.name}offers a greeting in ${this.language}.`);
    }
}

// Test you work by un-commenting these 3 objects and the list of console logs below:
    const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.



  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
/*
  function Villain(vilAttributes){
    GameObject.call(this, vilAttributes);
    CharacterStats.call(this, vilAttributes);
    Humanoid.call(this, vilAttributes);
  };
  Villain.prototype = Object.create(Humanoid.prototype);

  Villain.prototype.serveDamage = function (enemy) {
    console.log(`${this.name} hits ${enemy.name}`);
    let newHealth = enemy.healthPoints = enemy.healthPoints - 3;
    return (`${enemy.name}'s health is now ${newHealth}`)
  };

  const goblin = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 3,
      height: 6,
    },
    healthPoints: 20,
    name: 'Loghaat',
    team: 'Rebellion',
    weapons: [
      'Mace',
      'Shield',
    ],
    language: ' Ghukliak',
  });
  */
 //Villan
 /*class Vilain extends Humanoid {
     constructor(vilAttributes){
         super(vilAttributes);
         this.
     }
 }*/
  /*
  function Hero(vilAttributes){
    GameObject.call(this, vilAttributes);
    CharacterStats.call(this, vilAttributes);
    Humanoid.call(this, vilAttributes);
  };
  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.giveDamage = function (enemy) {
    console.log(`${this.name} hits ${enemy.name}`);
    let newHealth = enemy.healthPoints = enemy.healthPoints - 3;
    return (`${enemy.name}'s health is now ${newHealth}`)
  };

    const human = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 3,
      height: 6,
    },
    healthPoints: 20,
    name: 'Bob',
    team: 'Lumbridge',
    weapons: [
      'Rock',
      'Spoon',
    ],
    language: 'English',
  });


console.log(human.giveDamage(goblin)); 
console.log(goblin.serveDamage(human));
console.log(human.giveDamage(goblin)); 
console.log(goblin.serveDamage(human));
*/
