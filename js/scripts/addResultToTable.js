function addResultToTable(data){
    const resultTable = document.getElementById('tbody-id');
    let row = document.createElement("tr");
    for(let i = 0; i < data.length; i++){
        let cell = document.createElement("td");
        cell.innerHTML = data[i];
        row.appendChild(cell);
    }
    resultTable.appendChild(row);
}