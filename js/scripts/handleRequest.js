function handleRequest(x, y, r){
    const url = '../php/scripts/check.php';
    const body = JSON.stringify({
        "x_input": x,
        "y_input": y,
        "r_input": r
    });
    const xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if (xhr.status === 200){
                console.log("Запрос успешно обработан!");
                const data = Object.values(JSON.parse(xhr.responseText));
                if(data[3] === "Ошибка!"){
                    alert("Произошла ошибка при вводе данных!");
                } else{
                    changeGIF(data[3]);
                    addResultToTable(data);
                }
            }
            else{
                console.log("Запрос обработан некорректно!\n" + xhr.readyState + "\n" + xhr.responseText);
            }
        }
    };
    xhr.send(body);
}