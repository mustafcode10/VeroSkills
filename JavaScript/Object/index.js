// const mustafArr = [
//     "Mustaf",
//     "Abtidon",
//     2024-1994,
//     "Software Engineer",
//     ["Hassan", "Yahye"]
// ]

// const mustafObj = {
//     firstName: "Mustaf",
//     lastName: "Abtidon",
//     age: 2024 - 1994,
//     job: "Software Engineer",
//     friends: ["Hassan", "Yahye"]
// }

// // console.log(MustafObj)

// // Dot notation
// console.log(mustafObj.firstName)

// // Brakets
// console.log(mustafObj["lastName"])

// const nameKey = "Name"
// console.log(mustafObj["first" + nameKey])
// console.log(mustafObj["last" + nameKey])

// // add key in object

// const interest = 'soccer'

// console.log(mustafObj.interest = interest)
// // console.log(mustafObj[interest] = "football")
// console.log(mustafObj)

const mustafObj = {
  firstName: "Mustaf",
  lastName: "Abtidon",
  birthday: 1994,
  job: "Software Engineer",
  friends: ["Hassan", "Yahye"],
  canRideRollerCoast: false,
  calAge: function () {
    this.age = 2024 - this.birthday;
    // console.log("This", this);
    return this.age;
  },
  compareThis: function () {
    return console.log(this === mustafObj);
  },
  // one way
  // getSummary: function() {
  //     if(this.canRideRollerCoast === true){
  //         this.canRide = 'can ride'
  //     } else {
  //         this.canRide = 'cant ride'
  //     }
  //     return `${this.firstName} is ${this.calAge()} years old and ${this.job} ${this.canRide}`
  // }
};
//  console.log(mustafObj.calAge())
// console.log(mustafObj.compareThis());
// console.log(mustafObj.getSummary());

// Object Method.

// console.log(mustafObj.calAge(1994))
// console.log(mustafObj["calAge"](1994))
// console.log(mustafObj.calAge(mustafObj.birthday))

// Another way.
mustafObj.getSummary = function () {
  const summary = `${this.firstName} is a ${this.calAge()} year-old and ${
    this.job
  } and ${this.canRideRollerCoast ? "can" : "cannot"} ride rouler coasters`;
  console.log(summary)
  return summary
};

mustafObj.getSummary()
const summary = mustafObj.getSummary()
console.log('summary', summary)


