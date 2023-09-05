// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => element > 10);

// console.log(found);

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.


Array.prototype.myFind = function(cb){

    for (let index = 0; index < this.length; index++) {
        if(cb(this[index],index,this)){
            return this[index]
        }
    }


}


const found = [5, 12, 8, 130, 44].myFind((element,index,arr) => element > 10);

console.log(found);


