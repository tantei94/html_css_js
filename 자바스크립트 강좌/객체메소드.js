//Computed property
let a = 'age';
const user = {
    name: 'Mike',
    [a]: 30,
    gender: 'male'
}
const info = {
    [1+4]: 5,
    ['안녕' + '하세요']: '인사'
}
console.log("user:", user);
console.log("info:", info);

//Object.assign(); 객체 복제에 쓸수 있음
//타겟 객체에 병합됨;
const cloneUser = Object.assign({}, user);
console.log(user === cloneUser);
// const userInfo = Object.assign(user, info);
// console.log(user);
console.log('Object.assign({}, info):', cloneUser);


//Object.keys(): 키 배열 반환
const userKey = Object.keys(user);
console.log("Object.keys(user)", userKey);

//Object.values(): 값 배열 반환
const userValue = Object.values(user);
console.log("Object.values(user)", userValue);

//Object.entries(): 키/값 배열 반환
console.log(Object.entries(user));

//Object.fromEntries(userArr); 키/값 배열을 객체로 변환
const userArr = [
    ["name", "Mike"],
    ["age", 30],
    ['gender', 'male']
]
console.log(Object.fromEntries(userArr));