import chalk from 'chalk';

var myUnusedVariable = 'It works';

const val = 3;

if (3 === val) {
  console.log(chalk.blue(myUnusedVariable));
}

export function calculate (a, b, operation){
    //Remove to make work again
    a = a + 1;
    
    if (operation === "+"){
        return a + b;
    }
    else if (operation === "-") {
        return a - b;
    }
    else {
        throw new Error("Invalid Operation");
    }
}