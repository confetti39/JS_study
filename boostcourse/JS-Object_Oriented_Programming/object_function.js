const kim = { name: 'kim', first: 10, second: 20 }
const lee = { name: 'lee', first: 10, second: 10 }

function sum(prefix) {
    return prefix + (this.first + this.second);
}

// sum();
// call의 파라미터중 첫번째는 call 함수를 수행할 객체이며, 두번째부터 call 함수를 수행할 메소드의 파라미터이다.
console.log("sum.call(kim)", sum.call(kim, "=> "));
console.log("sum.call(lee)", sum.call(lee, ": "));
const kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());

// 실행할 때 마다 어떤 함수의 this 값을 바꾸는, context를 바꾸는 함수 => call
// call 처럼 실행할 때 마다 this를 변경하는 것이 아닌, 내부적으로 고정시켜 사용하고 싶다면 => bind
