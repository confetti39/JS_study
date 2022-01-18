const Links = {
    setColor: function (color) {
        let aList = document.querySelectorAll('a');
        let i = 0;
        while (i < aList.length) {
            aList[i].style.color = color;
            i++;
        }
    }
}

const Body = {
    setColor: function (color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

function nightDayHandler(self) {
    const target = document.querySelector('body')
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}