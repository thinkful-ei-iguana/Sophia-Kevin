/*/*function repeat(fn, n) {
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

/*function filter(arr, fn) {
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

overTurnTruck(`Beryl and Diamond`); */

const movement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
/*function filteredMovement () {
  let filtered = movement.filter(function(x) {return x[0] >=0 && x[1] >=0;});
  console.log(filtered);
  filtered.forEach(function(y){
    console.log(y);
  })
  return filtered;
}
filteredMovement(movement);

function mappedMovement () {
  let mapped = movement.map(function(x) {return x[0] + x[1];});
  console.log(mapped);
}
mappedMovement(movement); */

function howManySteps(){
  let increment = 0;
  movement.forEach(function(x) {
    increment ++;
    let totalMovement = (x[0] + x[1]); 
    console.log('Movement #' + increment + ': ' + totalMovement + 'steps.');
    return totalMovement;
  });
}
howManySteps(movement);

