let arr = [1,2,3,4,5]

//splice 스플라이스
//특정 요소 삭제 하고 추가
//중간에 0을 넣으면 지우지 않고 추가만
//원본 배열을 수정
//삭제된 요소를 반환
let result = arr.splice(1,2, 100, 200);
console.log(arr);
console.log(result);

//slice
//배열을 수정하지 않음
//반환만
//파라미터 없으면 배열 복사
let sliceRes = arr.slice(1,4);
console.log(sliceRes);

//concat
//합처서 새배열 반환
console.log(arr.concat([6,7],8));

//find, findIndex
//함수를 사용
//첫번째만 확인하고 끝냄
const even = arr.find(item => item % 2 === 0)
console.log(even);

let userList= [
    {name: 'Mike', age: 30},
    {name: 'Jone', age: 20},
    {name: 'Tom', age: 10},
]
//map
//새로운 배열 반환
let newUserList = userList.map((user, index)=> {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19
    })
})
console.log(newUserList);

//join
//배열을 문자열로
console.log(arr.join('-'));
//split
//문자열을 배열로
const users = "Mike,Jone,Tom";
console.log(users.split(","));


//arr.sort
arr.sort((a,b) => a-b);
console.log(arr);


const reduceRes = arr.reduce((prev, cur) => {
    return prev+cur;
},-300)
console.log(reduceRes);

const adultArr = userList.reduce((prev, cur) => {
    if(cur.age> 19){
        prev.push(cur.name);
    }
    return prev;
},[])
console.log(adultArr);

//배열 구조분해: 값 바꿀때 쓸 수 있다
let a =1;
let b =2;
[a,b] = [b,a];
console.log(a,b);