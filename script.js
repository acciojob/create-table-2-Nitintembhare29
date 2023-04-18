function createTable() {
    //Write your code here
  const table = document.getElementById('myTable');
  const rows = prompt('Input number of rows');
  const columns = prompt('Input number of columns');

  for (let i = 0; i < rows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < columns; j++) {
      const cell = row.insertCell();
      cell.innerText = `Row-${i} Column-${j}`;
    }
  }
  
}
