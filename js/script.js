/*eslint-env browser*/

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let selectedTable = document.querySelector('#employees');
let tableBody = selectedTable.firstElementChild;

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let newId = document.querySelector('#id').value;
    let newName = document.querySelector('#name').value;
    let newExtn = document.querySelector('#extension').value;
    let newEmail = document.querySelector('#email').value;
    let newDept = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = selectedTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell();
    let cellName = row.insertCell();
    let cellExtn = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDept = row.insertCell();
    let cellDelete = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(newId));
    cellName.appendChild(document.createTextNode(newName));
    cellExtn.appendChild(document.createTextNode(newExtn));
    cellEmail.appendChild(document.createTextNode(newEmail));
    cellDept.appendChild(document.createTextNode(newDept));

    // CREATE THE DELETE BUTTON and appending it as child...
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-danger delete'; 
    deleteBtn.appendChild(document.createTextNode('X'));
    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM
    document.querySelector('#id').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#extension').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#department').value = '';

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus;
    
    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count+=1;
    document.getElementById('empCount').value = count;

});


// DELETE EMPLOYEE
selectedTable.addEventListener('click', (e)=> {
    //e.target.classList.contains('delete'); 
        if(confirm('Are you sure you want to delete the employee?')) {
            //updated this line of code
            selectedTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
            count-=1;
            document.getElementById('empCount').value = count;
        }
    
});

