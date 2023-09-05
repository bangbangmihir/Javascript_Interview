
// let temp = [];
// const printvalue = [4,3,2].forEach((ele,index,arr)=>{
//     temp.push(ele)
// })
// console.log(temp)


Array.prototype.myForEach = function(cb){

    let temp=[];
    for (let index = 0; index < this.length; index++) {
        temp.push(cb(this[index],index,this))  
    }
    return temp;

}


let elements = [3,4,4].myForEach((ele,index,arr)=>{
    return ele;
})


console.log(elements)



