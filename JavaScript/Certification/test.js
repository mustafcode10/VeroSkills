// function cal(n1, n2){
   
//     if(n1 !== typeof "number" || n2 !== typeof "number"){
//         return 'Invalid Number'

//     }

//     return ` addition ${addition(n1, n2)} and sub ${sub(n1, n2)}`
// }


// function addition(n1, n2){
//     return n1 + n2 
// }

// function sub(n1, n2){
//     return n1 - n2
// }

// console.log(cal(2, 4))


// function cal2(n1, n2) {
//     let message;
//     switch (true) {
//         case (typeof n1 !== 'number' || typeof n2 !== 'number'):
//             message = 'Invalid input: Both inputs should be numbers.';
//             break;
//         case (n1 < 0 || n2 < 0):
//             message = 'Invalid input: Both inputs should be non-negative numbers.';
//             break;
//         default:
//             let addResult = addition2(n1, n2);
//             let subResult = sub2(n1, n2);
//             if (subResult < 0) {
//                 message = `Invalid result: Subtraction result should not be negative ${subResult}.`;
//             } else if (addResult > 1000000) {
//                 message = `Invalid addition: sum exceeds one million ${addResult}.`;
//             } else {
//                 message = `Addition: ${addResult}, Subtraction: ${subResult}`;
//             }
//             break;
//     }
//     return message;
// }

// function addition2(n1, n2) {
//     return n1 + n2;
// }

// function sub2(n1, n2) {
//     return n1 - n2;
// }



function cal(n1, n2){
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return 'Invalid input: Both inputs should be numbers.';
    } else if (n1 < 0 || n2 < 0) {
        return 'Invalid input: Both inputs should be non-negative numbers.';
    } else {
        let addResult = addition(n1, n2);
        let subResult = sub(n1, n2);
        if (subResult < 0) {
            // return 'Invalid result: Subtraction result should not be negative.';
            return `Invalid result: Subtraction result should not be negative ${subResult}.`;
        } else if (addResult > 1000000){
            return `Invalid addition not more than million ${addResult}`
        } else {
            return `Addition: ${addResult}, Subtraction: ${subResult}`;
        }
    }
}

function addition(n1, n2){
 
    return n1 + n2; 
}

function sub(n1, n2){
  
    return n1 - n2;
}

// console.log(cal(0, 4));
// console.log(cal(4, 2))
// console.log(cal(null, 2))
// console.log(cal(1000000, 2))
// console.log(cal(-2, -2))


// // Define an array to store students
// let students = [];

// // Function to add a new student
// function addStudent(name, age, subjects) {
//     let student = {
//         name: name,
//         age: age,
//         subjects: subjects
//     };
//     students.push(student);
// }

// // Function to display information about all students
// function displayStudents() {
//     console.log("List of Students:");
//     students.forEach(function(student) {
//         console.log(`Name: ${student.name}, Age: ${student.age}, Subjects: ${student.subjects.join(', ')}`);
//     });
// }

// // Function to find students by age
// function findStudentsByAge(targetAge) {
//     let foundStudents = students.filter(function(student) {
//         return student.age === targetAge;
//     });
//     if (foundStudents.length > 0) {
//         console.log(`Students aged ${targetAge}:`);
//         foundStudents.forEach(function(student) {
//             console.log(`Name: ${student.name}, Age: ${student.age}, Subjects: ${student.subjects.join(', ')}`);
//         });
//     } else {
//         console.log(`No students found aged ${targetAge}.`);
//     }
// }

// // Adding some sample students
// addStudent("Alice", 20, ["Math", "Physics"]);
// addStudent("Bob", 22, ["English", "History"]);
// addStudent("Charlie", 20, ["Biology", "Chemistry"]);

// // Display all students
// displayStudents();

// // Find students by age
// findStudentsByAge(20);




// Define an array to store students
// let students = [];

// // Function to add a new student
// function addStudent(name, age, subjects) {
//     let student = {
//         name: name,
//         age: age,
//         subjects: subjects
//     };
//     students.push(student);
// }

// // Function to display information about all students
// function displayStudents() {
//     console.log("List of Students:");
//     for (let i = 0; i < students.length; i++) {
//         let student = students[i];
//         // console.log(`student ---`, student, '*', students[i])
//         console.log(`Name: ${student.name}, Age: ${student.age}, Subjects: ${student.subjects.join(', ')}`);
//     }
// }

// // Function to find students by age
// function findStudentsByAge(targetAge) {
//     let foundStudents = [];
//     for (let i = 0; i < students.length; i++) {
//         let student = students[i];
//         if (student.age === targetAge) {
//             foundStudents.push(student);
//         }
//     }
//     if (foundStudents.length > 0) {
//         console.log(`Students aged ${targetAge}:`);
//         for (let i = 0; i < foundStudents.length; i++) {
//             let student = foundStudents[i];
//             console.log(`Name: ${student.name}, Age: ${student.age}, Subjects: ${student.subjects.join(', ')}`);
//         }
//     } else {
//         console.log(`No students found aged ${targetAge}.`);
//     }
// }

// // Adding some sample students
// addStudent("Alice", 20, ["Math", "Physics"]);
// addStudent("Bob", 22, ["English", "History"]);
// addStudent("Charlie", 20, ["Biology", "Chemistry"]);

// // Display all students
// displayStudents();

// // Find students by age
// findStudentsByAge(20);


// Define an array to store students
let students = [];

// Function to add a new student
function addStudent(name, age, subjects) {
    let student = [name, age, subjects];
    students.push(student);
}

// Function to display information about all students
function displayStudents() {
    console.log("List of Students:");
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        console.log(`Name: ${student[0]}, Age: ${student[1]}, Subjects: ${student[2].join(', ')}`);
    }
}

// Function to find students by age
function findStudentsByAge(targetAge) {
    let foundStudents = [];
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        if (student[1] === targetAge) {
            foundStudents.push(student);
        }
    }
    if (foundStudents.length > 0) {
        console.log(`Students aged ${targetAge}:`);
        for (let i = 0; i < foundStudents.length; i++) {
            let student = foundStudents[i];
            console.log(`Name: ${student[0]}, Age: ${student[1]}, Subjects: ${student[2].join(', ')}`);
        }
    } else {
        console.log(`No students found aged ${targetAge}.`);
    }
}

// Adding some sample students
addStudent("Alice", 20, ["Math", "Physics"]);
addStudent("Bob", 22, ["English", "History"]);
addStudent("Charlie", 20, ["Biology", "Chemistry"]);

// Display all students
displayStudents();

// Find students by age
findStudentsByAge(20);




function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

console.log(calculator(5, 3, '+')); // Output: 8
console.log(calculator(5, 3, '-')); // Output: 2
console.log(calculator(5, 3, '*')); // Output: 15
console.log(calculator(5, 3, '/')); // Output: 1.6666666666666667
console.log(calculator(5, 3, '%')); // Output: Invalid operator


// Maximum number in an array
function maxNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Minimum number in an array
function minNumber(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Sum of all numbers in an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Average of all numbers in an array
function averageArray(arr) {
    let sum = sumArray(arr);
    return sum / arr.length;
}





