const superObj = { superVal: 'super' }
const subObj = { subVal: 'sub' }

subObj.__proto__ = superObj; //prototype, __proto__ 각각 다른 기능임
console.log('subObj.subVal => ', subObj.subVal);
console.log('subObj.superVal => ', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal => ', superObj.superVal);
console.log('subObj.superVal => ', subObj.superVal);