function clean(){
    const resultTable = document.getElementById("tbody-id");
    while(resultTable.firstChild){
        resultTable.removeChild(resultTable.firstChild);
    }
}