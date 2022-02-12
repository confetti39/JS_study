const kim = { name: 'kim', first: 10, second: 20 }
const lee = { name: 'lee', first: 10, second: 10 }

function sum(prefix) {
    return prefix + (this.first + this.second);
}

// sum();
// call의 파라미터중 첫번째는 call 함수를 수행할 객체이며, 두번째부터 call 함수를 수행할 메소드의 파라미터이다.
console.log("sum.call(kim)", sum.call(kim, "=> "));
console.log("sum.call(lee)", sum.call(lee, ": "));