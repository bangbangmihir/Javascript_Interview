// arr.map((elem,index,arr)=>{})



Array.prototype.myMap = function(cb){

    let temp = []
    for (let index = 0; index < this.length; index++) {
        temp.push(cb(this[index],index,this))
    }
    return temp
}

const multipybythree = [3,4,2].myMap((ele,i,index)=>{
    return ele*3 
})

console.log(multipybythree)