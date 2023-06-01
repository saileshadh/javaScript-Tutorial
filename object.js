// let car = {
//     name:"hyundai i10",
//     color:"black",
//     dimensions : {
//         lengths:'20' ,
//         breadth:'2',
//         height:'32'
//     }
// };
// console.log((car.name));
// console.log(car.color);
// console.log(car.dimensions.lengths);
// QN

countProperties = (obj) => {
    const keys = Object.keys(obj)
    return keys.length;
}
const car = {color:'red', num:20, name:'i10'}
console.log(countProperties(car));