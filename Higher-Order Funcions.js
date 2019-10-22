/*function repeat(fn, n) {
    for (let i=1; i <= n; i++) {
        fn()
    }
}

function hello() {
    console.log('Hello world');
}

function goodbye() {
    console.log('Goodbye world');
}

repeat(hello, 5);

repeat(goodbye, 3); */

function filter(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i ++) {
    if (fn(arr[i]) == true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function (location){
    warningCounter = warningCounter + 1;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };

}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const overTurnTruck = hazardWarningCreator('Overturned Truck on the Road!');
const downedPowerLines = hazardWarningCreator('Power lines are down!');

overTurnTruck(`Beryl and Diamond`);

