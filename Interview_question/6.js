//write a function which get's an array and an element and returns a array with this elements at the end.

const append = (arr,el)=>{
    arr.push(el)
    return arr

}

console.log(append([1,2],3))

//arr push methods modify the array


const numbers = [1,2];
const newappend =(arr,el)=>{
    return [...arr,el]
    // return arr.push(el)
}


const newNumbers = newappend(numbers,3);
console.log(newNumbers)
console.log(numbers)

