// Array are very common Data Structure.

// const friend1 = "Chris"
// const friend2 = "Steven"
// const friend3 = "Ronald"


// const friends = ["Chris", "Steven", "Ronald"]
// console.log(friends)

// const friends2 = new Array("Chris", "Steven", "Ronald")
// // console.log(friends2)

// // get the first element of the array
// console.log(friends[0])
// // array property of length
// // console.log(friends.length)
// // the last element in the array
// // console.log(friends[friends.length - 1])
// // Quick challenge can you log just the year 2023
// // const years = [2020, 2021, 2022, 2023, 2024, 2025]
// // console.log(years[3])
// // how you change array or accessing array
// friends[1] = "George"
// // console.log(friends)
// const justNumber = 7
// const numbers = ['23', 23, 500-100, justNumber, true, [23, 32]]
// // console.log(numbers)

// //Arrays in Arrays
// const moreFriends = ["Jimmy", "James", friends]
// // console.log(moreFriends)

// // Calculate ages.

// const calAge = function(birthday) {
//     return 2026 - birthday
// }
// const years = [2020, 2021, 2022, 2023, 2024, 2025]
// const age1 = calAge(years[0])
// const age2 = calAge(years[1])
// const age3 = calAge(years[2])
// const age4 = calAge(years[years.length - 1])

// const ages = [calAge(years[0]), calAge(years[1]), calAge(years[2]), calAge(years[years.length -1])]
// console.log(ages)

// const ages2 = [age1, age2, age3, age4]
// // console.log(ages2)


// Array Methods.
// .push() adds new element to the end of the array and return the new length of the array.

const friends = ["Jimmy", "George", "Alex"]
const newFriend = friends.push("Jill")
// console.log(friends)

// .unshift adds  a new element at the front of the array.
friends.unshift("Abby")
// console.log(friends)

// .pop() will remove the last element in the array, return the element removed.

const noMoreFriend = friends.pop()
// console.log(friends)
// console.log(noMoreFriend)

// .shift() will remove the first element in the array.

const alsoNoLongerFriend = friends.shift();
// console.log(friends)
// console.log(alsoNoLongerFriend)

// find items in the array indexOf() the position if exits if not -1 and caseSensitive.
//find items includes() gives boolean value

// console.log(friends.indexOf("George"))
console.log(friends[friends.indexOf("George")])
// console.log(friends.includes("George"))