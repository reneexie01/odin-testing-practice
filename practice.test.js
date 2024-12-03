const { default: expect } = require('expect');
const { practice, capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./practice');

test('Return exists', () => {
    expect(practice()).toBe('exists');
})

test('Capitalizes the first letter of a given string', () => {
    expect(capitalize('bison')).toBe('Bison');
})

test('Receives input string and reverses the string', () => {
    expect(reverseString('abc 123')).toBe('321 cba');
})

test('Adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
})

test('Subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
})

test('Multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
})

test('Divides two numbers', () => {
    expect(calculator.divide(9, 3)).toBe(3);
})

test('Letters are moved by one place in the alphabet', () => {
    expect(caesarCipher.cipher('abc', 1)).toBe('bcd');
})

test('Wrapping for caesarCipher', () => {
    expect(caesarCipher.cipher('xyz', 3)).toBe('abc');
})

test('Case preservation for caesarCipher', () => {
    expect(caesarCipher.cipher('HeLLo', 3)).toBe('KhOOr');
})

test('Non-alphabetical characters remained unchanged for caesarCipher', () => {
    expect(caesarCipher.cipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('Analysis returns correct average, min, max, length', () => {
    expect(analyzeArray.analysis([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
})
