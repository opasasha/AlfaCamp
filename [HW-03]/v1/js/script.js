function clickTable(e) {
    if (e.target.tagName !== 'TD')
        return;
    tab.removeEventListener('click', clickTable);

    let area = document.createElement('textarea'),
        btn1 = document.createElement('button'),
        btn2 = document.createElement('button'),
        tabTd = e.target;
    const tmpText = tabTd.textContent;

    area.autofocus = true;
    btn1.innerText = "save";
    btn2.innerText = "cancel";

    const change = {
        createNew() {
            area.innerText = tmpText;
            tabTd.innerHTML = "";
            tabTd.append(area, btn1, btn2);
        },
        saveText(){
            tabTd.innerHTML = area.value;
            setTimeout(change.addEvent, 0);
        },
        cancelNode(){
            tabTd.innerHTML = tmpText;
            setTimeout(change.addEvent, 0);
        },
        addEvent(){
            tab.addEventListener('click', clickTable);
        }

    };
    btn1.addEventListener('click', change.saveText);
    btn2.addEventListener('click', change.cancelNode);
    change.createNew();
    area.autofocus = true;

}

let tab = document.querySelector("table");

tab.addEventListener('click', clickTable);