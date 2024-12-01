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
    const alphabet = [
        'a','b','c','d',
        'e','f','g','h',
        'i','j','k','l',
        'm','n','o','p',
        'q','r','s','t',
        'u','v','w','x',
        'y','z'
    ];

    const cipher = (string, num) => {
        const arrString = string.split('');
        const newArr = [];
        const newDestructedString = [];
        arrString.forEach((char) => {
            const index = alphabet.indexOf(char);
            const shiftedIndex = index + num;
            newArr.push(shiftedIndex);
        })
        newArr.forEach((index) => {
            const letter = alphabet[index];
            newDestructedString.push(letter);
        })
        return newDestructedString.join('')
    }
    
    return { cipher }
})()

module.exports = { practice, capitalize, reverseString, calculator, caesarCipher };