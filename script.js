const inputBox = document.getElementById('inputText');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('write sth');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'; // generates cross sign
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//saves data in local storage of browser
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
    // all the contents of listcontainer is stored in local storage with name data.
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showData();