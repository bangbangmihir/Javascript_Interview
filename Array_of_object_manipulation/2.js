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
    const countObj = {
       
      };

    arr.forEach(obj => {
      if (countObj[obj[prop]]) {
        countObj[obj[prop]]++;
      } else {
        countObj[obj[prop]] = 1;
      }
    });
    return countObj;
  }


  console.log(countPropertyOccurrences(user,"employeeName"))



