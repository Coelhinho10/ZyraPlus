import { abbreviate } from "../src/functions/abbreviate.js";

console.log(abbreviate(1500));       // "1.5k"
console.log(abbreviate(1000000));    // "1M"
console.log(abbreviate(123456789));  // "123.4M"
console.log(abbreviate(1000000000)); // "1B"
console.log(abbreviate(-2500));      // "-2.5k"
console.log(abbreviate(500));        // "500"
console.log(abbreviate(0));          // "0"
