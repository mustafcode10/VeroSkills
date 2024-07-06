console.log('---- JavaScript Certification. -----')


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
            return `Invalid result: Subtraction result should not be negative ${subResult}. addition ${addResult}` ;
        } else if (addResult > 1000000 || addResult < 0){
            return `Invalid addition not more than million ${addResult} and Subtraction ${subResult}`
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

// console.log(cal(undefined, 2))



// const arrNum =  [2,0,9,8,7,6]


// function multiplyNum(arrNum) {
//    let result = 1
//     for(i=0; i < arrNum.length; i++){
//         console.log('***', arrNum[i])  
//      return 0;
//     result  *= arrNum[i] 
//     console.log(result)
   
//     }
//     return result

// }

// console.log(multiplyNum(arrNum))


const arrNum = [2, 0, 9, 8, 7, 6];

function multiplyNum(arrNum) {
    let result = 1;
    for (let i = 0; i < arrNum.length; i++) {
        console.log('***', arrNum[i]);
        if (arrNum[i] === 0) {
            console.log("Encountered a zero. Stopping multiplication.");
            break; // Exit the loop if zero is encountered
        }
        result *= arrNum[i];
        console.log(result);
    }
    return result;
}

console.log(multiplyNum(arrNum));














