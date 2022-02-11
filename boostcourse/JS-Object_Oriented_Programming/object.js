const memberArray = ['egoing', 'graphittie', 'leexhce'];
console.log("memberArray[1]", memberArray[1]);

const memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}
memberObject.designer = 'leezche';
//객체 데이터 수정
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);
delete memberObject.manager
console.log("after delete memberObject.manager", memberObject.manager);
//객체 데이터 삭제

