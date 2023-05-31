// let p = new Promise((resolve, reject) =>  {
//     console.log('Hello world');
//     setTimeout(() => {
//         console.log('I am a noob');
//         resolve();
//     }, 2)
    
// });
// let p = new Promise((resolve, reject) => {
//     console.log('Hello world');
//     setTimeout(() => {
//         console.log('I am a noob');
//         resolve();
//     }, 2);
// });

multiplyNumbers = (num1,num2) =>{
    return p= new Promise((reject, resolve)=>{
    
    if(num1>1 && num2>1){
        const multiplication = num1*num2;
        resolve(multiplication); 
    }
    else (num1<0 || num2<0)
    {
        reject('Negative num is not allowed');
    }
});
}
const num1=5;
const num2=6;
result=multiplyNumbers(num1,num2);
result.then((result) =>{
    console.log(result);
});
result.catch((error)=>{
    console.log('error',error);
});