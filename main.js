// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

const ageToAbilities = (age) => {
    let message
    switch (true) {
        case (age < 16) :
            message = "You can't drive.";
            break;
        case (age < 18) :
            message = "You can drive but not vote.";
            break;
        case (age < 25) :
            message = "You can vote but not rent a car.";
            break;
        case (age >= 25) :
            message = "You can do pretty much anything.";
            break;
    }
    return message
}

const oddIndices = (arr) => {
    let newArr = []
    for (let i = 1; i < arr.length; i += 2) {
        newArr.push(arr[i])
    }
    return newArr
}

const numOddValues = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            count ++
        }
    }
    return count
}

const averageStringLength = (arr) => {
    if (arr.length > 0){
    let total = 0
    for (let i = 0; i < arr.length; i++){
        total += arr[i].length
    }
    return (total/(arr.length))
}
return 0
}

const  firstPunctuationIndex = (str) => {
    let result = -1
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '.' || str.charAt(i) === '?' || str.charAt(i) === '!')
        return result = i
    }
    return result
}

const getPlace = (arr, score) => {
    let place
    let str
    for (let i = 0; i <= arr.length; i++) {
      if (score > arr[i]) {
        let place = i + 1
          switch (place % 100) {
            case 1 :
              str = place + "st place";
              break;
            case 2 :
              str = place + "nd place";
              break;
            case 3 :
              str = place + "rd place";
              break;
            default :
              str = place + "th place";
              break;
          } return str
      }
    }
  }

const addToObj = (obj, key, value) => {
    if (typeof key !== 'string'){
        return "Function must be called with a valid key."
    }else
    obj[key] = value
}

const duplicateElements = (arr) => {
    let arr2 = []
    for (let i1 = 0 ; i1 <= arr.length ; i1++) {
        for (let i2 = i1 + 1 ; i2 <= arr.length ; i2++) {
            if (arr[i1] === arr[i2] && arr2.includes(arr[i2]) === false) {
                arr2.push(arr[i2]);
            }
        }
    }
    return arr2;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};
