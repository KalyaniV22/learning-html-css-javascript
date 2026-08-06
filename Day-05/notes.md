# Day 05 - JavaScript Fundamentals & Logic Reference Notes

---

## 1. Introduction to JavaScript

### What is JavaScript?
**JavaScript (JS)** is a lightweight, interpreted, single-threaded, dynamic programming language with first-class functions. It is the core programming language for client-side web browser logic and server-side runtimes (Node.js).

---

## 2. Variables & Data Types

### `const` vs `let` vs `var`:
- `const`: Block-scoped. Cannot be reassigned. Use by default!
- `let`: Block-scoped. Can be reassigned. Use when variable values change.
- `var`: Function-scoped / globally scoped. Hoisted. Avoid in modern ES6+ code!

### Data Types:
1. **Primitives (Stored by Value):**
   - `String`: `'Hello'`, `"World"`, `` `Template literal ${var}` ``
   - `Number`: `42`, `3.14`, `NaN`, `Infinity`
   - `Boolean`: `true` or `false`
   - `Undefined`: Variable declared but not assigned a value
   - `Null`: Intentional absence of value
   - `Symbol`: Unique immutable primitive identifier
   - `BigInt`: Large integers beyond `2^53 - 1`

2. **Reference Types (Stored by Reference):**
   - `Object`: `{ name: 'Kalyani', role: 'Developer' }`
   - `Array`: `['HTML', 'CSS', 'JS']`
   - `Function`: `function() {}` or `() => {}`

---

## 3. Strict Equality & Operators

- `===` (Strict Equality): Compares both **value AND data type** (No implicit type coercion). Always prefer `===`!
- `==` (Loose Equality): Performs type coercion before comparing (Avoid!).
- `!==` (Strict Inequality)
- Logical Operators: `&&` (AND), `||` (OR), `!` (NOT), `??` (Nullish Coalescing)
- Ternary Operator: `const status = age >= 18 ? 'Adult' : 'Minor';`

---

## 4. Functions & Arrow Syntax

### Function Declaration:
```javascript
function greet(name = 'Developer') {
    return `Welcome, ${name}!`;
}
```

### Arrow Function (ES6):
```javascript
const add = (a, b) => a + b;
```

---

## 5. Arrays & Higher-Order Methods

```javascript
const numbers = [10, 20, 30, 40, 50];

// map: Transforms each element into a new array
const doubled = numbers.map(num => num * 2); // [20, 40, 60, 80, 100]

// filter: Keeps elements matching condition
const greaterThan25 = numbers.filter(num => num > 25); // [30, 40, 50]

// reduce: Accumulates elements into a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 150
```

---

## 6. Objects & Destructuring

```javascript
const developer = {
    name: 'Kalyani Velukar',
    role: 'Backend Developer',
    skills: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JS'],
    company: 'AD TECH Enterprises'
};

// Destructuring
const { name, role, skills } = developer;
console.log(name); // "Kalyani Velukar"
```
