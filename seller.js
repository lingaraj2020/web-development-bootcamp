function saveToLocalStorage(event){
    event.preventDefault();
    const amount = event.target.sellingprice.value;
    const product =event.target.productname.value;
    const obj={
        amount,
        product
    };
    localStorage.setItem(obj.amount,JSON.stringify(obj));
    showUserOnscreen(obj);
}

function showUserOnscreen(obj){
    const parentEle = document.getElementById('listofitems');
    const childEle = document.createElement('li');
    childEle.textContent = obj.amount +' - '+ obj.product;
    parentEle.appendChild(childEle);

    const deletebutton = document.createElement('input');
    deletebutton.type = 'button';
    deletebutton.value = 'delete product';

    deletebutton.onclick = () => {
        localStorage.removeItem(obj.amount);
        parentEle.removeChild(childEle);

    }
    childEle.appendChild(deletebutton);

    const total= obj.reduce(function(previousval,currentval){
        return previousval+currentval.amount();
    },0)
    document.getElementById('total value').value=total;
}

