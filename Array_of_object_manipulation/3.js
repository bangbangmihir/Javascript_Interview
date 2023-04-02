// Group an array of objects by a specific property value

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

  function groupArrayOfObjects(arr, prop) {
    const groupObj = {};
    arr.forEach(obj => {
      if (groupObj[obj[prop]]) {
        groupObj[obj[prop]].push(obj);
      } else {
        groupObj[obj[prop]] = [obj];
      }
    });
    return groupObj;
  }

  console.log(groupArrayOfObjects(user,"employeeName"))