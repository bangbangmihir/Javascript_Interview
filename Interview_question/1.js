// Given an Array of Objects return name of each objects

const user = [
  {
    id: 1,
    name: "Mihir",
    isActive: true,
  },
  {
    id: 2,
    name: "Abhishek",
    isActive: false,
  },
  {
    id: 3,
    name: "Amit",
    isActive: false,
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