// class Person {
//   // moved here b/c it was identical
//   constructor(name, quirkyFact, email) {
//     this.name = name;
//     this.quirkyFact = quirkyFact;
//     this.email = email
//   }
//   alive() {
//     return "HE'S ALIVE!!!"
//   }
//   // moved here b/c it was identical
//   bio() {
//     return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
//   }
// }


// class Student extends Person {
//   // stays in Student class since it's specific to students only
//   enroll(cohort) {
//     this.cohort = cohort;
//   }
// }

// class Mentor extends Person {
//   // specific to mentors
//   goOnShift() {
//     this.onShift = true;
//   }

//   // specific to mentors
//   goOffShift() {
//     this.onShift = false;
//   }
// }



// let student1 = new Student()
// console.log(student1)
// let student2 = new Student("jeff", "i got the duck")
// console.log(student2)
// student2.enroll()
// console.log(student2)


// let teacher1 = new Mentor("john", "i sent the duck")
// console.log(teacher1)
// teacher1.goOnShift()
// console.log(teacher1.alive())
// console.log(teacher1)


// Super class
class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Mentor extends Person {
  // Mentor bios need to include a bit more info
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}


class Student extends Person {
  bio() {
    return `I'm a student at Lighthouse Labs. ${super.bio()}`;
  }
}
// DRIVER CODE

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());
const jeff = new Student('Rob Boss', 'I like mountains way too much');
console.log(jeff.bio());
