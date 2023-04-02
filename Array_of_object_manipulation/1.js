// Write a function that takes an array of objects as input and returns an array of objects sorted by a specific property (e.g. name, class,section).

let Student = [
    {
     studenName: "jack",
     studenClass: 6,
     studenSection: "a"
    },
    {
     studenName: "tom",
     studenClass: 7,
     studenSection: "b"
    },
    {
     studenName: "Abshi",
     studenClass: 2,
     studenSection: "d"
    }
];


function sortarrayOfObjects (arr,property){

    const result = arr.sort((student1,student2)=>{
      return  student1[property] < student2[property] ? -1 : 1
    })

    return result


    //One Liner

    return arr.sort((student1,student2)=>student1[property]-student2[property])




}

console.log(sortarrayOfObjects(Student,"studenClass"))
console.log(sortarrayOfObjects(Student,"studenSection"))
console.log(sortarrayOfObjects(Student,"studenName"))