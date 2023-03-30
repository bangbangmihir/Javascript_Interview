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

const isNameexist = (name, users) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      return users[i];
    }
  }
  return -1
};


console.log(isNameexist("anand",users))