//REduce Methods 
// arrr.reduce((accumutor,ele,index,arr)=>{},initialvalue)



Array.prototype.myReduce = function(cb,initialvalue) {

    let accumulator = initialvalue;

    for (let index = 0; index < this.length; index++) {

        accumulator = accumulator ? cb(accumulator ,this[index],index,this) : this[index]
       
        
    }


    return accumulator


    
}


const sumall = [4,2,3].myReduce((acc,ele,index,arr)=>{
    return acc+ele
},0)


console.log(sumall)