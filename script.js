function updateRows() {
    let selectedValue = document.getElementById("rows").value;
    let table = document.getElementById("dataTable");
    let rows = table.getElementsByTagName("tr");
    let rowCount = rows.length;
    
    for (let i = 1; i < rowCount; i++) {
        rows[i].style.display = (selectedValue === "all" || i <= parseInt(selectedValue)) ? "" : "none";
    }
}

function sortTable(ascending) {
    let table = document.getElementById("dataTable");
    let tbody = table.querySelector("tbody");
    let rows = Array.from(tbody.rows);
    rows.sort((rowA, rowB) => {
        let a = parseInt(rowA.cells[0].textContent);
        let b = parseInt(rowB.cells[0].textContent);
        return ascending ? a - b : b - a;
    });
    tbody.append(...rows);
}

function searchTable() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#dataTable tbody tr");
    rows.forEach(row => {
        let number = row.cells[0].textContent.toLowerCase();
        let title = row.cells[1].textContent.toLowerCase();
        row.style.display = number.includes(input) || title.includes(input) ? "" : "none";
    });
}
