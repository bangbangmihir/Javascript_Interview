// Given an Array of Objects return name of each objects

const user = [
  {
    id: 1,
    name: "Mihir",
    isActive: true,
    age:19
  },
  {
    id: 2,
    name: "Abhishek",
    isActive: false,
    age:22
  },
  {
    id: 3,
    name: "Amit",
    isActive: false,
    age:16
  },
];

//Print Name of each the user

//Method:-1

let username= []
for(let i=0;i<user.length;i++){
    username.push(user[i].name)
}
console.log(username)

//Method :- 2

let username1 = [];

user.forEach((user)=>{
    username1.push(user.name)
    // username1.push({
    //     name:user.name,
    //     isActive:user
    // })
})

console.log(username1)


//Method :- 3

const usernames = user.map((user)=>{
    // return {
    //     "name":user.name,
    //     "isActive":user.isActive
    // }
    return user.name
})

console.log(usernames)

//Qusetion => Get only active user from the array of objects

const newuser = user.filter((user)=>user.isActive === true)
console.log(newuser)


//Get name of the active user
let newusers = user.filter((user)=>user.isActive === true).map((user)=>user.name)
console.log(newusers)


//Qusetion Sort user by its Age

let sorteduser = user.sort((user1,user2)=>user1.age - user2.age)
console.log(sorteduser)

// print Sorted user Only Name
let sortedusername = user.sort((user1,user2)=>user1.age - user2.age).map((user)=>user.name)
console.log(sortedusername)