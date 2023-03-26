//Closure

// Create a counter function which has increment and getvalue functionality
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

const privatecounter = () =>{
    let count = 0;

    return {
        increment:(val=1)=>{
            count +=val;
        },
        getvalue:()=>{
            return count;
        }
    }
}


const counter = privatecounter();
console.log(counter.getvalue())
counter.increment()
console.log(counter.getvalue())

//Example :-2

const privatesecret = () =>{
    const secret = "foo";

    return () => secret
}

const getsecret = privatesecret();
console.log(getsecret())



let num = 1;
let totalvalue =5;

function getnumber(){
    num += 2
    return {
        getnum:()=>{
            return num
        },
        returnvalue:()=>{
          return  totalvalue
        }
    }
}

console.log(getnumber().getnum())
console.log(getnumber().returnvalue())