//생성자 함수는 대문자로 시작
function Item(title, price) {
    this.title = title;
    this.price = price;

    this.showPrice = function(){
        console.log(price);
    }
}

//new!!
const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 4000);
const item3 = new Item('지갑', 5000);

console.log(item1, item2, item3);
item1.showPrice();