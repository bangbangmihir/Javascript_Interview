//sort the array of numbers
//1.Sort Methods mutate the original array

const result = [8, 3, 7, 4].sort((a, b) => (a < b ? -1 : 1));
const newresult = [8, 3, 7, 4].sort((a, b) => a - b);

console.log(result);
console.log(newresult);

//Sort array of objects by their properties

const book = [
  {
    name: "Harry potter",
    author: "Joanne Rowling",
  },
  { name: "Warcross", author: "Maria Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

const sortedresult = book.sort((book1,book2)=>{
    const authorlastnamebook1 = book1.author.split(" ")[1];
    const authorlastnamebook2 = book2.author.split(" ")[1];
    return authorlastnamebook1 < authorlastnamebook2 ? -1 : 1
})


console.log(sortedresult)