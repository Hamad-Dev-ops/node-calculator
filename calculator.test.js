const { add, subtract, multiply, divide, modulus } = require('./calculator');

describe('Calculator Tests', () => {
    
    // Addition tests
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds negative numbers correctly', () => {
        expect(add(-1, -2)).toBe(-3);
    });

    test('adds decimal numbers correctly', () => {
        expect(add(1.5, 2.5)).toBe(4);
    });

    // Subtraction tests
    test('subtracts 5 - 3 to equal 2', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts negative numbers correctly', () => {
        expect(subtract(-1, -2)).toBe(1);
    });

    test('subtracts decimal numbers correctly', () => {
        expect(subtract(5.5, 2.5)).toBe(3);
    });

    // Multiplication tests
    test('multiplies 3 * 4 to equal 12', () => {
        expect(multiply(3, 4)).toBe(12);
    });

    test('multiplies by zero correctly', () => {
        expect(multiply(5, 0)).toBe(0);
    });

    test('multiplies negative numbers correctly', () => {
        expect(multiply(-3, 4)).toBe(-12);
    });

    // Division tests
    test('divides 10 / 2 to equal 5', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('divides negative numbers correctly', () => {
        expect(divide(-10, 2)).toBe(-5);
    });

    test('divides decimal numbers correctly', () => {
        expect(divide(10.5, 2)).toBe(5.25);
    });

    // Modulus tests
    test('modulus 10 % 3 to equal 1', () => {
        expect(modulus(10, 3)).toBe(1);
    });

    test('modulus 15 % 4 to equal 3', () => {
        expect(modulus(15, 4)).toBe(3);
    });

    test('modulus handles negative numbers', () => {
        expect(modulus(-10, 3)).toBe(-1);
    });

    test('modulus handles zero dividend', () => {
        expect(modulus(0, 5)).toBe(0);
    });

    test('throws error when modulus by zero', () => {
        expect(() => modulus(10, 0)).toThrow('Modulus by zero is not allowed');
    });

    test('modulus with larger divisor returns dividend', () => {
        expect(modulus(3, 10)).toBe(3);
    });
});
