// To check string of anagram or not ?
// String "hello" -> "llheo"

// codition:
// length check (for both Strings)
// Strings 'hello'

// {h:1, e:1,l:2,O:1}
// {h:0,e:0,l:0,O:0}

// function isAnagramCheck(string1, string2) {
//     if(string1.length !== string2.length) {
//         return false;
//     }
//     let counter = {};
//     for(let letters = 0; letters<string1.length; letters++) {
//         counter[string1[letters]] = (counter[string1[letters]] || 0) + 1;
//         console.log(string1[letters]);
//         console.log('counter',  counter[string1[letters]]);
//     } 
//     console.log("🚀 ~ file: Anagram.js:19 ~ isAnagramCheck ~ ounter[string1[letters]]", counter)
//     for(let items of string2) {
//        if(!counter[items]) {
//         console.log('for third cases', items);
//         return false;
//        } 
//     // decreasing the letters till zero if can't find the zero then condition is failed ?
//        counter[items] -= 1;
//     }
//  return true;
// }
// const result = isAnagramCheck('hello','lloho');
// console.log("🚀 ~ file: Anagram.js:32 ~ result", result);

