class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}
class PersonPlus extends Person {
    constructor(name, first, second, third) {
        super(name, first, second);
        this.third = third;
    }
    sum() {
        return super.sum() + this.third;
    }
    avg() {
        return (this.first + this.second) / 2;
    }
}

const kim = new PersonPlus('kim', 10, 20, 30);

console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());

// super(): 부모 클래스의 생성자 호출
// super.sum(): 부모 클래스