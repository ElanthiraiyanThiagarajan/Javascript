// const employeeList = [{"name":"Elan","age":50}];

// employeeList.forEach(element => {
//     element.retired = element.age>49? true : false; 
//     console.log(element);
// });

// var person = { firstName: "John", lastName : "Doe",
// id : 5566, fullName : function() {
// return this.firstName + " " + this.lastName; }
// };

// console.log(person.fullName());

// const a = 10;
// a = 50;
// console.log(50);

// let a = 50;
// a = 100;


// Type Conversion

// console.log('2'+'3');
// console.log('a'+'3');
// console.log(3-null);
// console.log(5-undefined);

// console.log(Number('5'));
// console.log(parseFloat(0.34));
// console.log(String(0.00));
// console.log(Boolean(null));




// for(var i=0;i<=5;i++){
//     console.log("Iteration is"+i);
// }

// var i =0 ;
// while(i<=5){
//     console.log("Iteration is"+i);
//     i++;
// }

// var i= 5;
// do{
//     console.log("Iteration Number"+i);
//     i++;
// } while(i<=5)


// const numArray = [1,2,3,4,5,6];
// for(const num of numArray){
// console.log(num);
// }


// Functions

function greet(userName) {
    console.log('Good Morning ' + userName);
}

greet('Elan')
greet('Anitha')

function add(a, b) {
    return a + b;
}

const arrowSum = (a, b) => a + b;

const a = arrowSum(10, 20);
console.log(a);

const addFive = num => num + 5;
console.log(addFive(5))
