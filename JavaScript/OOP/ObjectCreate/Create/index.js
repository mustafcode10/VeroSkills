
// Object Create to change the prototype and then 
// Object Assign to merge the properties onto new object
const obj1 = Object.create(Object.prototype)
console.log(obj1)

const obj2 = {}
console.log('obj2', obj2)
 console.log(`obj2 === obj1 ${obj2.__proto__ === obj1.__proto__}`)
 console.log(`obj2 === Object.prototype ${obj2.__proto__ === Object.prototype}`)

// obj2 the first object empty prototype and than second obj has the prototype
const obj3 = Object.create({})
console.log('obj3', obj3)
console.log(`obj3 === obj ${obj3.__proto__ === obj1.__proto__}`)
console.log(`obj3 === Object.prototype ${obj3.__proto__ === Object.prototype}`)


////////////////////////////////////////////////////////////
/////////////////////  PART TWO //////////////////////////
////////////////////////////////////////////////////////

// Define the obj4 with writable, enumerable, and configurable set to true
const obj4 = {
    name: 'Mustaf'
 }
 
 // Define the descriptor with writable, enumerable, and configurable set to false
 const descriptor = {
     name: {
         value: 'Mustaf',
         writable: false,
         enumerable: false,
         configurable: false
     }
 }
 
 // Create a new object using Object.create() with the descriptor
 const obj = Object.create(Object.prototype, descriptor)
 
 // Attempt to modify the name property (will not change because writable is false)
 obj.name = 'John'
 
 // Attempt to delete the name property (will not delete because configurable is false)
 delete obj.name
 
 // Logging the object (name property should still be 'Mustaf')
 console.log( obj) // Output: {}
 
 // Verify that the property is non-enumerable
 console.log(Object.getOwnPropertyDescriptor(obj, 'name'))


 /////////////////////////////////////////////////////////////
 ////////////// PART THREE /////////////////////////////////
 //////////////////////////////////////////////////////////

 // Create object with no prototype

 const obj5 =  Object.create(null)
 console.log(obj5)
 

 // PART FOUR
 // Create Private Property.


 const me = {
    name: 'phil',
    age: 33,
    isCool: true,
    favFood: ['pizza', 'burger', 'steak', 'lobster'],
    address: {
        streetName: 'shirley',
        streetNumber: '123',
        zipCode: 92627,
        state: 'California'
    }

 }

Object.defineProperty(me, 'name', {
    writable: false,
    enumerable: true, // for in loop
    // value: 'abtidon',
    configurable: false

})


for(const key in me){
    console.log(key)

}

console.log('delete me.name', delete me.name)


const me2 = {

}

Object.defineProperty(me2, "name", {
    value: 'John'
})

console.log(me2.name)