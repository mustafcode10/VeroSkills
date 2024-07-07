

// Advanced Control Flow with Conditional Statements and Loops
// Prompt: Create a script that uses complex conditional statements (if/else, switch) and 
//loops (for, while) to process an array of data. 
//Include logic to break out of or skip iterations in the loop based on specific conditions:

// Use a loop to iterate through the array. Use if/else statements to filter users by age and status.
// For example, select users who are over 21 and have an active status.
// Use at least one switch statement to categorize users based on a new property, like membership level,
// which could have values like silver, gold, or platinum.
// Use break to exit the loop early if a certain condition is met (e.g., if a platinum member is found).
// Use continue to skip processing for users who are inactive.
// Calculate and log the number of users in each category of membership level.
// Skills Assessed: Advanced control flow, conditional logic, loop control.
// Array of user objects
const users = [
    { name: 'Alice', age: 25, status: 'active', membershipLevel: 'silver' },
    { name: 'Bob', age: 18, status: 'inactive', membershipLevel: 'gold' },
    { name: 'Charlie', age: 30, status: 'active', membershipLevel: 'gold' },
    { name: 'David', age: 22, status: 'active', membershipLevel: 'platinum' },
    { name: 'Eve', age: 19, status: 'inactive', membershipLevel: 'silver' }
];

// Initialize variables to count users in each membership level
let silverCount = 0;
let goldCount = 0;
let platinumCount = 0;

// Loop through the array of users
for (let i = 0; i < users.length; i++) {
    const user = users[i];

    // Skip processing for inactive users
    if (user.status === 'inactive') {
        continue;
    }

    // Filter users by age and status
    if (user.age >= 21 && user.status === 'active') {
        // Use switch statement to categorize users based on membership level
        switch (user.membershipLevel) {
            case 'silver':
                silverCount++;
                break;
            case 'gold':
                goldCount++;
                break;
            case 'platinum':
                platinumCount++;
                // Break early if a platinum member is found
                console.log('Platinum member found:', user.name);
                break;
            default:
                console.log('Unknown membership level for user:', user.name);
        }
    }
}

// Log the number of users in each category of membership level
console.log('Silver members:', silverCount);
console.log('Gold members:', goldCount);
console.log('Platinum members:', platinumCount);