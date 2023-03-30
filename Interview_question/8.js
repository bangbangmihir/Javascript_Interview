//check that user with such name exist in array of objects

const users = [
  {
    id: 1,
    name: "Mihir",
    isActive: true,
  },
  {
    id: 1,
    name: "Abhinav",
    isActive: true,
  },
  {
    id: 1,
    name: "Abhishek",
    isActive: false,
  },
  {
    id: 1,
    name: "Anand",
    isActive: true,
  },
];

// const isNameexist = (name, users) => {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === name) {
//       return users[i];
//     }
//   }
//   return -1;
// };

let isNameexist = (name, users) => {

  //some function return true and false based on condition satisfied
  // return users.some((user) => user.name === name);

  //Return object from the array of objects
  // return users.find((user)=>user.name === name)

  //By Using FindIndex methods we get index of the array objects
  const index = users.findIndex((user)=>user.name === name);
  return index > 0 ? true : false


};

console.log(isNameexist("Anand", users));
