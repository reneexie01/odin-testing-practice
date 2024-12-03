function practice() {
    return 'exists';
};

function capitalize(string) {
    const firstUpper = string.charAt(0).toUpperCase();
    console.log(firstUpper)
    const removeFirst = string.slice(1)
    const newString = firstUpper + removeFirst;
    return newString
}

function reverseString(string) {
    const arrString = string.split('');
    const reverseArr = arrString.reverse();
    const joinedArr = reverseArr.join('');
    return joinedArr;
}

const calculator = (function() {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    return { add, subtract, multiply, divide }
})()

const caesarCipher = (function() {
    const cipher = (string, num) => {
        const arrString = string.split('');
        const newArr = [];
        arrString.forEach((element) => {
            const charCode = element.charCodeAt(0);
            let newCharCode;
            if (charCode > 31 && charCode < 48 || 
                charCode > 57 && charCode < 65 || 
                charCode > 90 && charCode < 97 || 
                charCode > 122 && charCode < 127) {
                newArr.push(charCode);
                return;
            }
            if (charCode > 64 && charCode < 91) {
                newCharCode = (charCode - 65 + num) % 26 + 65;
            } else if (charCode > 96 && charCode < 123) {
                newCharCode = (charCode - 97 + num) % 26 + 97;
            }
            newArr.push(newCharCode);
            console.log(newArr)
            return;
        })
        const cipheredString = String.fromCharCode(...newArr);
        return cipheredString;
    }
    return { cipher }
})()

const analyzeArray = (function() {
    let arrayLength;
    let arrayAverage;
    let arrayMin;
    let arrayMax;

    const analysis = (array) => {
        let object = {};
        object.average = average(array);
        object.min = min(array);
        object.max = max(array);
        object.length = length(array);
     return object;
    }

    const length = (array) => {
        arrayLength = array.length;
        return arrayLength;
    }

    const average = (array) => {
        const initialValue = 0;
        const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
        length(array);
        arrayAverage = sumWithInitial / arrayLength;
        return arrayAverage;
    }

    const min = (array) => {
        arrayMin = Math.min(...array);
        return arrayMin;
    }

    const max = (array) => {
        arrayMax = Math.max(...array);
        return arrayMax;
    }
     return { analysis }
})()

module.exports = { practice, capitalize, reverseString, calculator, caesarCipher, analyzeArray };