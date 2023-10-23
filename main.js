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

const getPlace = (highScores, score) => {
    let place = 0
    for (let i = 0; i < highScores.length; i++){
        if (score > highScores[i]) {
            place = i + 1
        }
    }    
    if (place[(place.length)] === 0){
        return `${place}st place`
    }if (place[(place.length)] === 1){
        return `${place}nd place`
    }if (place[(place.length)] === 2){
        return `${place}rd place`
    }else{
        return `${place}th place`
    }
}


const addToObj = (person, key, value) => {
    if (typeof key === 'string'){
    person.key = value;
    return
    }
    else return "Function must be called with a valid key."
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
