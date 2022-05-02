// Solution #1: if-else 
// A straight-forward approach using the good old if-else statements. It is nice because it is easy to implement and you can code this while you are explaining to the interviewer what is happening statement per statement.

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        } else if (i % 3 === 0) {
        console.log('Fizz');
        } else if (i % 5 === 0) {
        console.log('Buzz');
        } else {
        console.log(i);
        }
    }
}

// Solution #2: Nice, fancy one-liner
// I would stay away from this on an actual interview as you would look like a leetcode material/master. You may mention that you saw a one-liner solution using couple of ternary and you are aware. Might get a bonus for that.

for(let i = 0; i < 100;) console.log((++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)