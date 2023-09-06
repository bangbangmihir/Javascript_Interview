// Flat method in js => flat method is used to flat a multidimensional array, Inside flat method we pass depth(optional) which is used \\

// const nestedArray = [1, 2, [3, 4, [5, 6]]];
// const flattenedArray = nestedArray.flat(2);  // Flattened to depth 2 (optional)
// console.log(flattenedArray);
// Output: [1, 2, 3, 4, 5, 6]


Array.prototype.myFlat = function(){

  

    let temp = [];

    for (let index = 0; index < this.length; index++) {
            if(Array.isArray(this[index])){
                temp.push(...this[index].myFlat())
            }
            else{
                temp.push(this[index])
            }
    }
    return temp

}

const flattenedArray = [1, 2, [3, 4, [5, 6]]].myFlat(1); 

console.log(flattenedArray)





