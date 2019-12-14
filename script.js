const getID = id => document.getElementById(id);
const getSel = sel => document.querySelector(sel);
let familyButton = document.forms['familyButton'];
let text = document.querySelector('.header').children;
let check = false;
let textArea = getSel('.insideText');
getSel('.header').classList.add('box');
getSel('.chooseWhatYouWant').style.display = 'none';
getSel('.editBox').style.display = 'none';
getSel('.styleBox').style.display = 'none';
getSel('.colorBoxBackground').style.display = 'none';
getSel('.colorBoxText').style.display = 'none';

getSel('.editButton').onclick = function () {
    getSel('.editBox').style.display = 'block';
    getSel('.empty').style.display = 'none';
    getSel('.editBox').classList.add('box');
    getSel('.insideText').style.backgroundColor = 'white';
    getSel('.styleBox').style.display = 'none';
    if (check == false) {
        textArea.value = getSel('.header').innerHTML;
        check = true;
    }
}

getSel('.saveButton').onclick = function () {
    getSel('.header').innerHTML = textArea.value;
    getSel('.empty').style.display = 'block';
    getSel('.editBox').style.display = 'none';


}

getSel('.styleButton').onclick = function () {
    getSel('.editBox').style.display = 'none';
    getSel('.empty').style.display = 'none';
    getSel('.styleBox').style.display = 'flex';
    getSel('.styleBox').classList.add('box');
    check = true;
}

getSel('.colorOfText').onclick = function () {
    getSel('.colorBoxText').style.display = 'flex';
    getSel('.colorBoxBackground').style.display = 'none';
}

getSel('.backgroundColor').onclick = function () {
    getSel('.colorBoxText').style.display = 'none';
    getSel('.colorBoxBackground').style.display = 'flex';
}

getSel('.Red').onclick = function () {
    getSel('.header').style.backgroundColor = 'red';
}
getSel('.Orange').onclick = function () {
    getSel('.header').style.backgroundColor = 'orange';
}
getSel('.Yellow').onclick = function () {
    getSel('.header').style.backgroundColor = 'yellow';
}
getSel('.DarkGreen').onclick = function () {
    getSel('.header').style.backgroundColor = 'darkGreen';
}
getSel('.Green').onclick = function () {
    getSel('.header').style.backgroundColor = 'green';
}
getSel('.LightGreen').onclick = function () {
    getSel('.header').style.backgroundColor = 'lightGreen';
}
getSel('.LightBlue').onclick = function () {
    getSel('.header').style.backgroundColor = 'lightBlue';
}
getSel('.Blue').onclick = function () {
    getSel('.header').style.backgroundColor = 'blue';
}
getSel('.Purple').onclick = function () {
    getSel('.header').style.backgroundColor = 'purple';
}

getSel('.RedText').onclick = function () {
    for (let i = 0; i < text.length; i++)
        text[i].style.color = 'red';
}
getSel('.OrangeText').onclick = function () {
    for (let i = 0; i < text.length; i++)
        text[i].style.color = 'orange';
}
getSel('.YellowText').onclick = function () {
    for (let i = 0; i < text.length; i++)
        text[i].style.color = 'yellow';
}
getSel('.DarkGreenText').onclick = function () {
    for (let i = 0; i < text.length; i++)
        text[i].style.color = 'darkGreen';
}
getSel('.GreenText').onclick = function () {
    for (let i = 0; i < text.length; i++)
        text[i].style.color = 'green';
}
getSel('.LightGreenText').onclick = function () {
    for (let i = 0; i < text.length; i++)
        text[i].style.color = 'lightGreen';
}
getSel('.LightBlueText').onclick = function () {
    for (let i = 0; i < text.length; i++)
        text[i].style.color = 'lightBlue';
}
getSel('.BlueText').onclick = function () {
    for (let i = 0; i < text.length; i++)
        text[i].style.color = 'blue';
}
getSel('.PurpleText').onclick = function () {
    for (let i = 0; i < text.length; i++)
        text[i].style.color = 'purple';
}

let xxx = getSel('.familyButton');
xxx.onchange = function () {
    for (let i = 0; i < text.length; i++) {
        text[i].style.fontFamily = this.value;
    }
}

getSel('.boldText').onclick = function () {
    for (let i = 0; i < text.length; i++) {
        if (getSel('.boldText').checked) {
            text[i].style.fontWeight = 'bold';
        } else {
            text[i].style.fontWeight = 'normal';
        }
    }
}
getSel('.cursiveText').onclick = function () {
    for (let i = 0; i < text.length; i++) {
        if (getSel('.cursiveText').checked) {
            text[i].style.fontStyle = 'italic';
        } else {
            text[i].style.fontStyle = 'normal';
        }
    }
}

getSel('.sizeButton12px').onclick = function () {
    for (let i = 0; i < text.length; i++) {
        if (getSel('.sizeButton12px').checked) {
            text[i].style.fontSize = '12' + 'px';
        } else {
            text[i].style.fontSize = '10' + 'px';
        }
    }
}
getSel('.sizeButton14px').onclick = function () {
    for (let i = 0; i < text.length; i++) {
        if (getSel('.sizeButton14px').checked) {
            text[i].style.fontSize = '14' + 'px';
        } else {
            text[i].style.fontSize = '10' + 'px';
        }
    }
}

getSel('.sizeButton16px').onclick = function () {
    for (let i = 0; i < text.length; i++) {
        if (getSel('.sizeButton16px').checked) {
            text[i].style.fontSize = '16' + 'px';
        } else {
            text[i].style.fontSize = '10' + 'px';
        }
    }
}

getSel('.sizeButton18px').onclick = function () {
    for (let i = 0; i < text.length; i++) {
        if (getSel('.sizeButton18px').checked) {
            text[i].style.fontSize = '18' + 'px';
        } else {
            text[i].style.fontSize = '10' + 'px';
        }
    }
}

getSel('.sizeButton20px').onclick = function () {
    for (let i = 0; i < text.length; i++) {
        if (getSel('.sizeButton20px').checked) {
            text[i].style.fontSize = '20' + 'px';
        } else {
            text[i].style.fontSize = '10' + 'px';
        }
    }
}

getSel('.addButton').onclick = function () {
    getSel('.header').style.display = 'none';
    getSel('.chooseWhatYouWant').style.display = 'block';
    getSel('.chooseWhatYouWant').classList.add('box');
    getSel('.editBox').style.display = 'none';
    getSel('.styleBox').style.display = 'none';
    getSel('.centerButtons').style.display = 'none';
    getSel('.listBox').style.display = 'none';
    getSel('.tableBox').style.display = 'none';
}

getSel('.tableButton').onclick = function () {
    getSel('.tableBox').style.display = 'block';
    getSel('.listBox').style.display = 'none';
}

getSel('.listButton').onclick = function () {
    getSel('.listBox').style.display = 'block';
    getSel('.tableBox').style.display = 'none';
}
let textInsideList = 'item';
let countList = getSel('.countLi').value;
let typeList = getSel('.typeOfMarks').value;

getSel('.createList').onclick = function () {
    let countList = getSel('.countLi').value;
    let typeList = getSel('.typeOfMarks').value;
    let listList = 'li';
    for (let i = 1; i <= countList; i++) {
        let listEnd = (`<${listList} type="${typeList}">${textInsideList}</${listList}> `);
        textArea.value += listEnd;
    }
    getSel('.header').style.display = 'block';
    getSel('.chooseWhatYouWant').style.display = 'none';
    getSel('.editBox').style.display = 'block';
    getSel('.centerButtons').style.display = 'flex';
    getSel('.tableBox').style.display = 'none';
    check = true;
}

let x = "<table>";
getSel('.createTable').onclick = function tableCreate() {
    let countTR = getSel('.countTR').value;
    let countTD = getSel('.countTD').value;
    let widthTD = getSel('.widthOfTD').value;
    let heightTD = getSel('.heightOfTD').value;
    let widthOfBorder = getSel('.widthOfBorder').value;
    let typeOfBorder = getSel('.typeOfBorder').value;
    let colorOfBorder = getSel('.colorOfBorder').value;
    let tdData = "<td style = \"width:" + widthTD + "px; height: " + heightTD + "px ; border:" + widthOfBorder + "px " + typeOfBorder + " " + colorOfBorder + "\" >item</td>";
    for (let i = 1; i <= countTR; i++) {
        x += "<tr>";
        for (let j = 1; j <= countTD; j++) {
            x += tdData;
        }
        x += "</tr>";
    }
    x += "</table>";
    textArea.value += x;
    getSel('.header').style.display = 'block';
    getSel('.chooseWhatYouWant').style.display = 'none';
    getSel('.editBox').style.display = 'block';
    getSel('.centerButtons').style.display = 'flex';
    getSel('.tableBox').style.display = 'none';
    check = true;
}