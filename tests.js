import {
  findLongestWord, sumUniqueNumbers, mergeArrays, hasProperty, getPropertyValue, invertObject,
} from './index.js';

console.log(`1 ${'='.repeat(78)}`);
console.log(findLongestWord(['Java', 'Python', 'JavaScript'])); // "JavaScript"
console.log(findLongestWord(['football', 'basketball', 'tennis'])); // "basketball"
console.log(findLongestWord(['sun', 'moon', 'stars'])); // "stars"

console.log(`2 ${'='.repeat(78)}`);
console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6

console.log(`3 ${'='.repeat(78)}`);
console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]

console.log(`4 ${'='.repeat(78)}`);
console.log(hasProperty({ name: 'Alice', age: 25 }, 'age')); // true
console.log(hasProperty({ name: 'Bob', country: 'France' }, 'gender')); // false
console.log(hasProperty({ type: 'fruit', color: 'red' }, 'color')); // true

console.log(`5 ${'='.repeat(78)}`);
console.log(getPropertyValue({ name: 'Alice', age: 25 }, 'name')); // "Alice"
console.log(getPropertyValue({ brand: 'Toyota', model: 'Camry' }, 'year')); // undefined
console.log(getPropertyValue({ type: 'laptop', brand: 'Dell' }, 'brand')); // "Dell".

console.log(`6 ${'='.repeat(78)}`);
const originalObject1 = { a: 1, b: 2, c: 1 };
const invertedObject1 = invertObject(originalObject1);
console.log(invertedObject1); // Выведет: { '1': 'c', '2': 'b' }
