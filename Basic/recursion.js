let sum= (num) => {
    let sum=0
    for (let i=1;i<=num;i++)
    {
        sum=sum+i;
    }
 return sum;
}
const num = parseInt(prompt('enter a num : '));
s=sum(num);
console.log(s);