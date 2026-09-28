-- Week 2 Log --

Day 1 & 2 - JavaScript Fundamentals
1. Map(): Creates a new array by changing every element of an existing array.
2. filter(): Creates a new array containing only the elements that satisfy a condition. 
3. reduce(): Takes multiple values and reduces them into one result.
4. Promises: Represents a value that will be available later.
5. async/await: A cleaner way to work with Promises.
6. Destructuring: Lets you extract values from objects or arrays easily.
7. Modules: Lets you split JavaScript code into separate files and share functionality between them.

Day 3 - TypeScript
1. Types: A type tells TypeScript what kind of value a variable can contain.
for eg: let name: string = "John";
        let age: number = 21;
        let isActive: boolean = true;
2. Interfaces: An interface describes the structure of an object.
3. Unions: When a value can have more than one type.
4. Optional fields: (?) Can exist or not needed.
5. Generics: Lets you create reusable code while preserving the type of the data you're working with.
6. Strict mode: Does not let uncertain or unsafe code pass.

Day 4 - Browser Tools
1. Elements: Lets you inspect the HTML currently rendered in the browser. Changes made directly in DevTools are Temporary.
2. Console: The Console is where you can: see JavaScript errors, see warnings.
3. Network: Lets you see communication between your browser and external resources, particularly API requests.

Day 5 - Vitests
1. Vitest is a testing framework for JavaScript and TypeScript.
2. Sample Test with edge cases:
Code:
export function findLargest(numbers: number[]): number | null {
    if (numbers.length === 0) {
        return null;
    }

    let largest = numbers[0];

    for (const number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}
Test: 
import { describe, it, expect } from "vitest";
import { findLargest } from "./functions";

describe("findLargest", () => {

    // Normal case
    it("finds the largest number", () => {
        expect(findLargest([10, 20, 5, 30, 15])).toBe(30);
    });

    // Single element
    it("handles an array with one number", () => {
        expect(findLargest([7])).toBe(7);
    });

    // Negative numbers
    it("handles negative numbers", () => {
        expect(findLargest([-10, -5, -20])).toBe(-5);
    });

    // All numbers are the same
    it("handles duplicate numbers", () => {
        expect(findLargest([5, 5, 5, 5])).toBe(5);
    });

    // Zero
    it("handles zero", () => {
        expect(findLargest([0, -5, -10])).toBe(0);
    });

    // Empty array
    it("returns null for an empty array", () => {
        expect(findLargest([])).toBe(null);
    });

});



