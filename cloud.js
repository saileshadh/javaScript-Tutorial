// Write a function that accepts an array of numbers, and then divide them into 10-
// percentiles i.e., Taking 0 as 0% and the largest number in the array as 100% return an array
// of 10 elements that indicate the number of elements that are at 0-10%, 10-20%, 20-30%,
// etc.
function calculatePercentile(number){
    let min = number[0];
    let max = number[0];

    for (let i=0;i<number.length;i++){
        for(let j=i+1; j<number.length;j++){
            if(number[i]>number[j]){
                temp=number[i];
                number[i]=number[j];
                number[j]=temp;
            }
        }
    }
    console.log(`sorted number : `, number);
    console.log(`minimum number:`, number[0]);
    console.log(`maximum number:`, number[number.length - 1]);

    const range = (max-min)/10;

    console.log(range);

}
const inputArray = [ ];
const arraySize=parseInt(prompt("enter the size of array"));
for(let i=0;i<arraySize;i++){
    inputArray[i]=prompt(`Enter Element :`  + (i+1)` :`);
}
console.log(inputArray);
calculatePercentile(inputArray);