// ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️ find out the factorial of an number 

// function factorical (n){
//     if(n<=0){
//         return 1
//     }
//     else {
//        return  n*factorical(n-1)
//     }
// }
// console.log(factorical(5))

// ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️ find out the range of two number 

// function rangeofNum(num1,num2){
// if (num2<num1){
//     return []
// }
// else {
//         const  number = rangeofNum(num1,num2-1)
//         number.push(num2)
//         return number
// }
// }
// console.log(rangeofNum(0,6))

// ♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️♦️ find out is palindrome or not 

// var isPalindrome = function(x) {
//     let str = x.toString();

//     if(x<0){
//         return false;
//     }

//     if(str.length<=1)return true;
//     if(str[0] !== str[str.length-1]){
//         return false;
//     }
//     return isPalindrome(str.slice(1,-1))
// };

// console.log(isPalindrome(1512));

// function count( i) //function count
//   {
//     if(i==6)
//     {
//         "the line changes "
//       return ;
//     }
//     else 
//     {
//         console.log(i)
//         count(i+1);
//         console.log(i)
//     }
//   }
//   count(1)

// function printMultiplesOf5(n, current = 0) {
//     // Base case: stop recursion when current exceeds n
//     if (current > n) {
//         return;
//     }
    
//     // Print current if it's a multiple of 5
//     if (current % 5 === 0) {
//         console.log(current);
//     }
    
//     // Recursive call with current incremented by 5
//     printMultiplesOf5(n, current + 5);
// }

// // Test the function with n = 25
// let n = 25;
// printMultiplesOf5(n);

// function printSubsequences(arr, index = 0, subsequence = []) {
//     // Base case: when we reach the end of the array
//     if (index === arr.length) {
//         // Print the subsequence if it's not empty
//         if (subsequence.length > 0) {
//             console.log(subsequence);
//         }
//         return;
//     }
//     // Recursive case 1: include the current element in the subsequence
//     printSubsequences(arr, index + 1, subsequence.concat(arr[index]));

//     // Recursive case 2: exclude the current element from the subsequence
//     printSubsequences(arr, index + 1, subsequence);
// }

// // Example
// const array = [1, 2, 3];
// printSubsequences(array);


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const array = [8, 3, 2, 7, 4, 6, 8, 1, 9];
console.log("Original array:", array);
console.log("Sorted array:", mergeSort(array));
