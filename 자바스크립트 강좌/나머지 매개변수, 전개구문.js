//나머지 매개 변수
function sum(...numbers){
    const result = numbers.reduce((p,c) => p+c)
    console.log(result);
}

sum(1,2,3,4,5);

function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1= new User('Mike', 30, 'html', 'css');
const user2= new User('Mike', 20, 'JS', 'react');
const user3= new User('Mike', 10, 'English');
console.log(user3);

//전개 구문
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let result = [...arr1, ...arr2]
console.log(result);

const pr = new Promise(((resolve, reject) => {
    setTimeout(() => {
        resolve('ok')
    },2000)
}))