const kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function () {
        return this.first + this.second;
    }
}
// this: 어떤 메소드에서 그 메소드가 속해 있는 객체를 가리키는 특수한 키워드
// console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
console.log("kim.sum(kim.first, kim.second)", kim.sum());
