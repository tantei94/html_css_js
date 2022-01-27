// 심볼은 이름이 같더라도 다른값을 보장;
// 심볼은 객체의 키로만 쓸 수 있음 유일한 목적
// 심볼로 만든 키는 보이지 않음 일반적으로

const user = {
    name: 'Mike',
    age: 30,
    gender: 'male'
}

// user.showName = function(){
//     console.log(this.name);
// };

const showName = Symbol('show name');
user[showName] = function(){
    console.log(this.name);
}
user[showName]();

for (const key in user) {
    console.log(`His ${key} is ${user[key]}.` );
}