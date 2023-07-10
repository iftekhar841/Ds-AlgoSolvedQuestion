//  Count Unique Number

//  [1,1,2,2,3,4,4,5,6,6,7,8,9,9]
// Total count = [9]

// const countUniqueNumber = (array) => {
//     let count = 0;
//     const a = new Array(10).fill(0);
//     for(let i = 0; i<array.length; i++) {
//         if(a[array[i]]===0){
//             a[array[i]]++
//         }
//     } 
//     for(let i=0; i<a.length; i++){
//         if(a[i]!=0){
//             count++;
//         }
//     }
//     return count;
// }
// const result  = countUniqueNumber([2,3,4,4,4,5,5,6,6,762,3,5,5,6,6,7,8,9,9]);
// console.log("🚀 ~ file: CountUniqueNo.js:20 ~ result", result);


//        i         j  
// [1,2,3,4,2,3,4,4,4]
// output -> 4

// condition :
//  i=0, j=1
// 1.array[i]!== array[j]
// 2. i++
// 3. array[i] = array[j]

function uniqueCount(array) {
    if (array.length > 0) {
        i = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i++;
                array[i] = array[j];
            }
        }
        return i+1;
    }else {
        throw new Error('Array is Empty');
    }
}
const output = uniqueCount([1,2,1,3,4,5,4]);   
console.log("🚀 ~ file: CountUniqueNo.js:50 ~ output", output);
