// checking sum zero - Problem 1
// [-9,-7,-5,-4,-2,0,2,5,6,8,9] --> input
// [-2,2] --> output
// Time complexity is: 0(n^)

// ********************* Using normal functiona

function getSumZeroPair(arr) {
    for(let num=0; num<arr.length; num++) {
        console.log('outer loop');
        for(let j=num+1; j<arr.length; j++) {
            console.log('inner loop');
            if(arr[num] + arr[j] === 0) {
                return [arr[num], arr[j]];
            }
        }
    }
}
const result = getSumZeroPair([-1,-7,-8,0,2,5,7]);
console.log("🚀 ~ file: sumToZero.js:16 ~ result", result);


// ************* Using fat arrow functiona

// const sumZeroPair = (array) => {                             
//     for(let number of array) {
//         for(let j=1; j<array.length; j++) {
//             if(number + array[j] == 0) {
//                 return [number, array[j]];
//             }
//         }
//     }


// }
// const Output = sumZeroPair([-3,-2,-1,0,2,4,5]);
// console.log('sum zero is:', Output);

// ******************* using single loop to solve above the problem ?
// checking sum zero - Problem 1
// [-9,-7,-5,-4,-2,0,2,5,6,8,9] --> input
// [-9,9] --> output


// function sumZeroPair(array) {
//     let left = 0;
//     let right = array.length-1;

//     while(left < right) {
//        let sum = array[left] + array[right];
//        if(sum === 0) {
//         return [array[left],array[right]];
//        } else if(sum > 0) {
//          right--;
//        } else {
//         left++;
//        }          
//     }
// }
// const result = sumZeroPair([-3,-2,-1,0,1,4,5]);
// console.log("🚀 ~ file: sumToZero.js:16 ~ result", result);




