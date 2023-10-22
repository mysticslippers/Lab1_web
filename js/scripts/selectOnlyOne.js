function selectOnlyOne(checkbox) {
    const checkboxesList = document.getElementsByClassName("checkbox-input");
    for (let i = 0; i < checkboxesList.length; i++) {
        checkboxesList.item(i).checked = false;
    }
    checkbox.checked = true;
}