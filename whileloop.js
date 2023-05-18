// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

// let n=parseInt(prompt(`enter a number`));

// let sum=0;
// while(n>0)
// {
//     sum=sum+n  
    
//     n=parseInt(prompt(`enter a number`));

// }
// console.log(`the sum of n num is ${sum}`);

// do while loop
let n=parseInt(prompt(`enter a number`));

let sum=0;
do {
    sum=sum+n;
    n=parseInt(prompt(`enter a number`));
}while(n>0)
console.log(`the sum is ${sum}`);