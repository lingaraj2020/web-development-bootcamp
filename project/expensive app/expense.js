function saveToLocalStorage(event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const obj = {
        amount,
        description,
        category

    };
    localStorage.setItem(obj.amount, JSON.stringify(obj));
    showUserOnscreen(obj);
}

function showUserOnscreen(obj) {
    const parentEle = document.getElementById('listofitems');
    const childEle = document.createElement('li');
    childEle.textContent = obj.amount + ' - ' + obj.description + ' - ' + obj.category;
    parentEle.appendChild(childEle);

    const deletebutton = document.createElement('input');
    deletebutton.type = 'button';
    deletebutton.value = 'Deleteexpense';

    deletebutton.onclick = () => {
        localStorage.removeItem(obj.amount);
        parentEle.removeChild(childEle);

    }

    const editbutton = document.createElement('input');
    editbutton.type = 'button';
    editbutton.value = 'Editexpense';

    editbutton.onclick = () => {
        localStorage.removeItem(obj.amount);
        parentEle.removeChild(childEle);
        document.getElementById('amountInputTag').value = obj.amount;
        document.getElementById('descriptionInputTag').value = obj.description;
        document.getElementById('categoryInputTag').value = obj.category;

    }
    childEle.appendChild(deletebutton);
    childEle.appendChild(editbutton);
    parentEle.appendChild(childEle);
}

