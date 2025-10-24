const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator Tests', () => {
    
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds negative numbers correctly', () => {
        expect(add(-1, -2)).toBe(-3);
    });

    test('subtracts 5 - 3 to equal 2', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts negative numbers correctly', () => {
        expect(subtract(-1, -2)).toBe(1);
    });

    test('multiplies 3 * 4 to equal 12', () => {
        expect(multiply(3, 4)).toBe(12);
    });

    test('multiplies by zero correctly', () => {
        expect(multiply(5, 0)).toBe(0);
    });

    test('divides 10 / 2 to equal 5', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('divides negative numbers correctly', () => {
        expect(divide(-10, 2)).toBe(-5);
    });
});