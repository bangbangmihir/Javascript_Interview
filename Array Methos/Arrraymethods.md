# Array Methods
* values()
* length()
* reverse()
* sort()
* at()
* fill()
* from()
* join()
* toString()
* pop()
* forEach()
* shift()
* copyWithin()
* push()
* unshift()
* concat()
* some()
* splice()
* flat()
* lastIndexOf()
* of()
* every()
* slice()
* flatMap()
* findIndex()
* find()
* inculdes()
* entries()
* reduceRight()
* reduce()
* isArray()
* filter()
* keys()
* map()

## values()
This method returns an iterator
that provides the values for each index in
the array. It takes no arguments.

```
const arr = ["apple","banana","cherry"]
const iterator = arr.values();

for (const value of iterator){
    console.log(vale)
    //Output: apple banana cherry 
}
````

## length()
This property returns the length of
the array.

```
const arr = ["apple","banana","cherry"]
console.log(arr.length); //Output : 3
```

## reverse()
This method reverses the order of
the elements in the array.

```
const arr = ["apple","banana","cherry"];
arr.reverse();
console.log(arr) ; //Output : ['cherry','banana','apple']
```

## sort()
This method sorts the elements of an
array in place and returns the sorted array.
It can take an optional compare function as
an argument.

```
const arr = ['banana','apple','cherry'];
arr.sort();
console.log(arr);
//Output : ['apple','banana','cherry']
```

## at()
This method returns the element at the
specified index in the array. It takes one
argument: the index.

```
const arr = ['apple','banana','cherry']
console.log(arr.at(1))
```

## fill()
This method fills all the elements of an
array from a start index to an end index with a
static value. It can take up to three arguments:
the value to fill with, the start index, and the
end index.

```
const arr = ['banana','apple','cherry'];
arr.fill('orange',1,2)
console.log(arr) //Output: ['banana','orange','cherry']
```

## from()
This method creates a new array from
an array-like object or an iterable object. It can
take up to two arguments: the object to convert
to an array, and a mapping function to apply to
each element of the new array.

```
const obj = [{0:'apple',1:'banana',2:'cherry',length:3}]

const arr = Array.from(obj);

console.log(arr); // Output : ['apple','banana','cherry'] 

```

## join()
