// Calculate the average of a specific property for all objects in an array

let Student = [
  {
    studenName: "jack",
    studenClass: 6,
    studenSection: "a",
    Marks: 20,
  },
  {
    studenName: "tom",
    studenClass: 7,
    studenSection: "b",
    Marks: 50,
  },
  {
    studenName: "Abshi",
    studenClass: 2,
    studenSection: "d",
    Marks: 100,
  },
];

function calculatepropertyAverage(arr, prop) {
  const sum = arr.reduce((total, obj) => total + obj[prop], 0);
  const avg = sum / arr.length;

  return avg
}


console.log(calculatepropertyAverage(Student,"Marks"))