// Write a function that takes an array of objects and a property as input and returns an object containing the count of occurrences of each value of the specified property.

const user = [
  {
    employeeName: "Ram",
    employeeId: 23,
  },
  {
    employeeName: "Shyam",
    employeeId: 24,
  },
  {
    employeeName: "Ram",
    employeeId: 20,
  },
  {
    employeeName: "Ram",
    employeeId: 25,
  },
  {
    employeeName: "Kisan",
    employeeId: 22,
  },
  {
    employeeName: "Shyam",
    employeeId: 20,
  },
];

function countPropertyOccurrences(arr, prop) {
  const countObj = {};

  arr.forEach((obj) => {
    if (countObj[obj[prop]]) {
      countObj[obj[prop]]++;
    } else {
      countObj[obj[prop]] = 1;
    }
  });
  return countObj;
}

console.log(countPropertyOccurrences(user, "employeeName"));

//Return array of objects with occurence


const newuser = [
    {
      employeeName: "Ram",
      employeeId: 23,
    },
    {
      employeeName: "Shyam",
      employeeId: 24,
    },
    {
      employeeName: "Ram",
      employeeId: 20,
    },
    {
      employeeName: "Ram",
      employeeId: 20,
    },
    {
      employeeName: "Ram",
      employeeId: 20,
    },
    {
      employeeName: "Ram",
      employeeId: 25,
    },
    {
      employeeName: "Kisan",
      employeeId: 22,
    },
    {
      employeeName: "Shyam",
      employeeId: 20,
    },
  ];

function countPropertyOccurrencesinArray(arr, prop) {
    const countObj = [];
  
    arr.forEach((obj) => {

        const userfind = countObj.find((user)=>user[prop] === obj[prop])
        if(userfind){
            userfind["Ocuurence"] += 1
        }
        else{
            countObj.push({
                [prop]:obj[prop],
                "Ocuurence":1
            })
        }
 
    });
    return countObj;
  }
  
  console.log(countPropertyOccurrencesinArray(newuser, "employeeName"));