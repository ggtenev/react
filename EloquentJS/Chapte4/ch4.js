

//EX.1
// Write a range function that takes two arguments, start and end, and returns an array containing
//  all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
// Run the example program and see whether it does indeed return 55.
//  Modify your range function to take an optional third argument that indicates the “step” value used 
//  when building the array. If no step is given, the elements go up by increments of one, corresponding
//  to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it
//  also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function sum(arr){
    let sum = 0;
    for(let i of arr){
        sum+=i;
    }
    return sum;
}

const range = (start, end,step = 1) => {
    let arr = [];
    let s = Math.abs(step);
    if(start < end){
        for(let i = start; i <= end; i+=s){
            arr.push(i);
        }
    }else if (start > end){
        for(let i = start; i >= end; i-=s){
            arr.push(i);
        }
    }else arr.push(start);
    return arr;
}

console.log(sum(range(333,-22,55)));


// EX.2
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear.
// For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
// takes an array as argument and produces a new array that has the same elements in the inverse order. 
// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument 
// by reversing its elements. Neither may use the standard reverse method.



function reverseArray(arr){
    let arrayReversed = [];
    for(let i of arr){
        arrayReversed.unshift(i);
    }
    return arrayReversed;
}

function reverseArrayInPlace(arr){
    for(let i = 0; i < Math.floor(arr.length/2); i++){
        let pos = 1;
        let temp = arr[i];
        arr[i] = arr[arr.length-pos];
        arr[arr.length-pos] = temp;
        pos++;
    }
}

