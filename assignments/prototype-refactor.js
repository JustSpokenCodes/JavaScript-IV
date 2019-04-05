/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string 'GameObject was removed from the game.' 
*/
function GameObject(options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
    this.name = options.name;
  }
  
  GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`;
  };
  

  //###########################

  class GameObject {
    constructor(createdAt,dimensions,name){
      this.createdAt = createdAt;
      this.dimensions = dimensions;
      this.name = name;
    }
    destroy(){
      `${this.name} was removed from the game.`;
    }
  }


  /*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
  */
  
  function CharacterStats(characterStatsOptions) {
    GameObject.call(this, characterStatsOptions);
    this.healthPoints = characterStatsOptions.healthPoints;
  }
  
  //#########################
  class CharacterStats extends name {
    healthPoints(){
      super.healthPoints();
      console.log(`${this.name} took damage.`);
    }
  }
  // Sets up inheritance with GameObject
  CharacterStats.prototype = Object.create(GameObject.prototype);
  CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage.`;
  };
  
  /*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
  */
  function Humanoid(humanoidOptions) {
    CharacterStats.call(this, humanoidOptions);
    this.team = humanoidOptions.team;
    this.weapons = humanoidOptions.weapons;
    this.language = humanoidOptions.language;
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`;
  };
  
//####################################
  class Humanoid extends Humanoid {
    characterStats(){
      super.characterStats();
      console.log(`${this.name} offers a greeting in ${this.language}.`)
    }
    
  }