//Remove all duplicates in the array

const uniquearrayValue = (arr) => {
  // const uniqueelemets = new Set(arr)
  // return [...uniqueelemets]

  const newarr = [];

  arr.forEach((element) => {
    if (!newarr.includes(element)) {
      newarr.push(element);
    }
  });

  return newarr;
};

console.log(uniquearrayValue([1, 2, 2, 3, 4, 2, 6]));





const users = [
    { name: "Mihir", age: 22, isActive: true },
    { name: "Abhishek", age: 21, isActive: false },
    { name: "Abhishek", age: 21, isActive: false },
];


const uniqueArr = (arr) =>{
    const uniquearr = arr.reduce((acc,ele)=>{
       
        // if(acc.includes(ele)){
        //     return acc
        // }
        // else{
        //     return [...acc,ele]
        // }
       return acc.includes(ele) ? acc : [...acc,ele]
    },[])

    return uniquearr
}


console.log(uniqueArr([1, 2, 2, 3, 4, 2, 6]))
console.log(uniqueArr([1, 2, 2, 3, 4, 2, 6]))







