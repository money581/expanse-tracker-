var row = null;
function Submit() {
    var enteredData = retrieveData();
    //console.log(enteredData);
    var readData = readingDatafromLocalStorage(enteredData);
    if (row == null) {
        insert(readData);
        msg.innerHTML="data inserted"
    }
    else {
        update();
        msg.innerHTML="data updated" 
    }
}
//create
function retrieveData() {
    var amount1 = document.getElementById('amount').value;
    var description1 = document.getElementById('description').value;
    var category1 = document.getElementById('category').value;
    var arr = [amount1, description1, category1];
    return arr;
}
//store data in local storage
function readingDatafromLocalStorage(enteredData) {
    var a = localStorage.setItem("amount", enteredData[0]);
    var d = localStorage.setItem("description", enteredData[1]);
    var c = localStorage.setItem("category", enteredData[2]);
    //read data
    var a1 = localStorage.getItem("amount", a);
    var d1 = localStorage.getItem("description", d);
    var c1 = localStorage.getItem("category", c);
    var arr = [a1, d1, c1];
    return arr;
}
function insert(readData) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button onclick="edit(this)">edit</button><button onclick="remove(this)">delete</button>`;
    //for set value null in input
    document.getElementById('amount').value = ' ';
    document.getElementById('description').value = ' ';
    document.getElementById('category').value = ' ';
}
function edit(td) {
    row = td.parentElement.parentElement;
    document.getElementById('amount').value = row.cells[0].innerHTML;
    document.getElementById('description').value = row.cells[1].innerHTML;
    document.getElementById('category').value = row.cells[2].innerHTML;
}
function update() {
    row.cells[0].innerHTML = document.getElementById('amount').value;
    row.cells[1].innerHTML = document.getElementById('description').value;
    row.cells[2].innerHTML = document.getElementById('category').value;
    row = null;
    //for set value null in input
    document.getElementById('amount').value = ' ';
    document.getElementById('description').value = ' ';
    document.getElementById('category').value = ' ';
}
function remove(td){
    row=td.parentElement.parentElement;
    document.getElementById('table').deleteRow(row.rowIndex);
}