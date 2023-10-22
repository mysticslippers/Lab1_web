function handleRequest(x, y, r){
    const url = '../php/scripts/check.php';
    const body = "x-input=" + x + "&y-input=" + y + "&r-input=" + r;
    const xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if (xhr.status === 200){
                console.log("Запрос успешно обработан!");
                const data = xhr.responseText.split(" ");
                addResultToTable(data);
            }
            else{
                console.log("Запрос обработан некорректно!\n" + xhr.readyState + "\n" + xhr.responseText);
            }
        }
    };
    xhr.send(body);
}