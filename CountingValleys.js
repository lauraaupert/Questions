
let test1 = 12
let test2 = "DDUUDDUDUUUD"

let test3 = 8
let test4 = "UDDDUDUU"

valleys(test1, test2)

function valleys(steps, directions) {
  let valleys = 0;
  let seaLevel = 0;
  let isValley = false;
  let stepsArray = directions.split('')

  stepsArray.forEach(element => {

    if (element === "U") {
      seaLevel++;
    } else {
      seaLevel--;
    }
    if (seaLevel < 0 && !isValley) {
      isValley = true;
      valleys++;
    } else if (seaLevel >= 0 && isValley) {
      isValley = false;
    }
  })
  return valleys;
}