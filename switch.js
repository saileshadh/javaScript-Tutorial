// simple calculator
let result 
let operator = prompt(`choose a operator ( + , - , * , / ) `);

let num1=parseInt(prompt(`enter a num `));

let num2=parseInt(prompt(`enter a num `));
 switch(operator   ){
    case `+`:
        result=num1+num2;
        console.log(result);
        break;
        case `-`:
            result=num1-num2;
            console.log(result);
            break;
            case `*`:
                result=num1*num2;
                console.log(result);
                break;
                case `/`:
                    result=num1+num2;
                    console.log(result);
                    break;
 }