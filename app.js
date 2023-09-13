let body = document.querySelector('body');
let toDoDiv = document.createElement('div');
let addDiv = document.createElement('div');
let task1 = document.createElement('input');
let buttonAdd = document.createElement('button');
let addBox = document.createElement('div');

body.prepend(toDoDiv);
toDoDiv.append(addDiv);
addDiv.append(task1);
addDiv.append(addBox);
addBox.append(buttonAdd);

task1.placeholder = "Task1"
buttonAdd.textContent = "Add";

body.style.backgroundColor = "#2c326b";
addDiv.style.backgroundColor = "#067fff";
addDiv.style.display = 'flex';
addDiv.style.justifyContent = 'space-around';
addDiv.style.padding = '50px';
addDiv.style.width = '50%';
addDiv.style.margin = '0 auto';

task1.style.padding = '15px';
task1.style.width = '50%';
buttonAdd.style.padding = '15px';
buttonAdd.style.cursor = 'pointer';

buttonAdd.addEventListener('click', function () {

    let itemDivs = document.createElement('div');
    toDoDiv.append(itemDivs);
    toDoDiv.style.display = 'flex';
    toDoDiv.style.flexDirection = 'column';
    toDoDiv.style.gap = '10px';

    itemDivs.style.backgroundColor = "#067fff";
    itemDivs.style.display = 'flex';
    itemDivs.style.justifyContent = 'space-around';
    itemDivs.style.padding = '50px';
    itemDivs.style.width = '50%';
    itemDivs.style.margin = '0 auto';

    let itemDiv = document.createElement('div');
    let deleteBox = document.createElement('div');
    let buttonDelete = document.createElement('button');

    let ul = document.createElement('ul');
    let li = document.createElement('li');

    itemDiv.append(ul);
    ul.append(li);

    itemDiv.style.background = 'white';
    itemDiv.style.width = '50%';
    ul.style.color = 'black';

    buttonDelete.style.cursor = 'pointer';

    itemDivs.prepend(itemDiv);
    itemDivs.append(buttonDelete);

    buttonDelete.textContent = 'Delete';
    li.innerText = task1.value;
    li.style.listStyle = "none";
    li.style.color = 'black';
    li.style.margin = "0 auto";

    //button delete event
    buttonDelete.addEventListener('click', function () {
        itemDivs.remove();
    })

})