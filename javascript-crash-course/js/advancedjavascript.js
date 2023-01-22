/**
 * Nested scope
 */
// let a = 10;
// function Outer() {
//     let b = 20;
//     function Inner() {
//         let c = 30;
//         console.log(a, b, c);
//     }
//     Inner();
// }

// Outer();

/**
 * Closure
 */
// function outer() {
//     let count = 0;
//     function inner() {
//         count++;
//         console.log(count);
//     }
//     return inner
// }
// const fn = outer()
// fn();
// fn();


/**
 * Curry
 */
// function sum(a, b, c) {
//     return a + b + c;
// }

// // console.log(sum(1, 2, 3));

// function curry(fn) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c)
//             }
//         }
//     }
// }

// const curriedSum = curry(sum);

// console.log(curriedSum(1)(2)(3));

// const add1 = curriedSum(1)
// const add2 = add1(2)
// const add3 = add2(3);
// console.log(add3);

// function sayMyName(name){
//     console.log(`My Name is ${name}`)
// }

// sayMyName('Elan')
// sayMyName('Anitha')


// const person = {
//     firstName: "Elan",
//     // lastName : function(){
//     //     console.log(`My Name is ${this.firstName}`)
//     // }
// }

// globalThis.firstName ='Captain'
// function sayMyName() {
//     console.log(`My Name is ${this.firstName}`)
// }

// sayMyName.call(person);
// sayMyName();

// function Person(name) {
//     // this = {}
//     this.name = name;
// }

// const p1 = new Person('Anitha');
// const p2 = new Person('Elan');

// console.log(p1.name, p2.name)


/**
 * Prototype
 */

function Person1(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}

const p1 = new Person1('Elan', 'thiraiyan');
const p2 = new Person1('Anitha', 'Rajendran');

Person1.prototype.getFullName = function () {
    return this.firstName + '' + this.lastName;
}


// console.log(p1.getFullName())
// console.log(p2.getFullName())


function superHero(firstName, lastName) {

    Person1.call(this, firstName, lastName);
    this.isSuperHero = true;

}

Person1.prototype.fightCrime = function () {
    console.log("Fighting Crime")
}
superHero.prototype = Object.create(Person1.prototype)

const a = new superHero('Super', 'Man');
superHero.prototype.constructor = superHero;
// console.log(a.fightCrime())

/**
 * Class
 */

class Person {
    constructor(firstName, lastName) {
        this.fname = firstName;
        this.lname = lastName;
    }

    sayMyName() {
        console.log(`My Name is ${this.fname}`)
    }
}

class SuperHero extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName)
        this.isSuperHero = true
    }

    fighting() {
        console.log('Fighting is crime')
    }
}

const superHero1 = new SuperHero('Elan', 'Thiraiyan');
// console.log(superHero1.fighting())

// const cp1 = new Person('Anitha','Rajendran');
// cp1.sayMyName()

const obj = {
    [Symbol.iterator]: function () {
        let step = 0;
        const iterator = {
            next: function () {
                step++;
                if (step == 1) {
                    return { value: 'Hello', done: false }
                } else if (step == 2) {
                    return { value: 'World', done: false }
                }
                return { value: undefined, done: true }
            },
        }
        return iterator
    },
}

for (const word of obj) {
    console.log(word)
}
