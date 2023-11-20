// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    { id: 1, name: "John Doe", extension: 1234, email: "john.doe@example.com", department: "Engineering" },
    { id: 2, name: "Jane Smith", extension: 5678, email: "jane.smith@example.com", department: "Marketing" },
    { id: 3, name: "Bob Johnson", extension: 9012, email: "bob.johnson@example.com", department: "Sales" },
    { id: 4, name: "Alice Williams", extension: 3456, email: "alice.williams@example.com", department: "QA" },
    { id: 5, name: "Charlie Brown", extension: 7890, email: "charlie.brown@example.com", department: "Administrative" }
];
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
document.addEventListener('DOMContentLoaded', function () {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) {
        employees = storedEmployees;
    }

    // GET DOM ELEMENTS
    const form = document.getElementById('addForm');
    const empTable = document.getElementById('empTable');
    const empCountOutput = document.getElementById('empCount');

    // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
    buildGrid();

    // ADD EMPLOYEE
    form.addEventListener('submit', function (e) {
        // PREVENT FORM SUBMISSION
        e.preventDefault();

        // GET THE VALUES FROM THE TEXT BOXES
        const id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const extension = document.getElementById('extension').value;
        const email = document.getElementById('email').value;
        const department = document.getElementById('department').value;

        // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
        const newEmployee = {
            id: id,
            name: name,
            extension: extension,
            email: email,
            department: department
        };

        // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
        employees.push(newEmployee);

        // BUILD THE GRID
        buildGrid();

        // RESET THE FORM
        form.reset();

        // SET FOCUS BACK TO THE ID TEXT BOX
        document.getElementById('id').focus();
    });

    // DELETE EMPLOYEE
    empTable.addEventListener('click', function (e) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            const rowIndex = e.target.parentNode.parentNode.rowIndex;

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex - 1, 1);

            // BUILD THE GRID
            buildGrid();
        }
    });

    // BUILD THE EMPLOYEES GRID
    function buildGrid() {
        // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    const tbody = document.querySelector('#empTable tbody');
    tbody.innerHTML = '';
        // REBUILD THE TBODY FROM SCRATCH
        for (const employee of employees) {
            const row = document.createElement('tr');
    
            for (const key in employee) {
                const cell = document.createElement('td');
                cell.textContent = employee[key];
                row.appendChild(cell);
            }

        // LOOP THROUGH THE ARRAY OF EMPLOYEES
        // REBUILDING THE ROW STRUCTURE
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        tbody.appendChild(row);
    }
        // BIND THE TBODY TO THE EMPLOYEE TABLE
        empTable.appendChild(tbody);

        // UPDATE EMPLOYEE COUNT
        document.getElementById('empCount').textContent = employees.length;

        // STORE THE ARRAY IN STORAGE
        localStorage.setItem('employees', JSON.stringify(employees));
    }
});