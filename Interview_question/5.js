//Currying
//Write a function which helps to achieve multiply(a)(b) and return the product of a and b.

const multiply = (num1)=>{
    return (num2) =>{
        return (num3)=>{
            return num1*num2*num3
        }
    }

}

//One liner multiply
const onelinermultiply = (num1) => (num2) => (num3) => num1 * num2 * num3;

console.log(multiply(2)(3)(4));
console.log(onelinermultiply(2)(3)(4));


//Create a curry function

