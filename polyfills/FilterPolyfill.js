// arr.filter((elem,index,arr)=>{return ele>2})


Array.prototype.myFilter = function(cb){

    let temp = []

    for (let index = 0; index < this.length; index++) {

        if(cb(this[index],index,this)){
            temp.push(this[index])
        }


    }

    return temp

}

const filtergreaterthan2 = [3,2,1,5].myFilter((ele,index,arr)=>{
    return ele > 2;
})

console.log(filtergreaterthan2)


