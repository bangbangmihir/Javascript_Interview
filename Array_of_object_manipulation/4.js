// Get the object with the maximum value of a specific property

let Student = [
  {
    studenName: "jack",
    studenClass: 6,
    studenSection: "a",
  },
  {
    studenName: "tom",
    studenClass: 7,
    studenSection: "b",
  },
  {
    studenName: "Abshi",
    studenClass: 2,
    studenSection: "d",
  },
];

function getObjectWithMaxValue(arr, prop) {
  return arr.reduce((maxObj, obj) => (obj[prop] > maxObj[prop] ? obj : maxObj));
}

console.log(getObjectWithMaxValue(Student, "studenClass"));
