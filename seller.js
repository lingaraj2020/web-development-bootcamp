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

// const arr = [3,2,5,4,1,0]
// for (let i = 0; i < arr.length; i++) {
// for (let j = i+1; j < arr.length; j++) {
// if(arr[i] < arr[j]) {
// let temp = arr[i];
// arr[i] = arr[j];
// arr[j] = temp;
// }
// }
// }
// console.log("Elements of array sorted in ascending order:");
// for (let i = 0; i < arr.length; i++) {
// console.log("Elements of array sorted in ascending order",
// arr[i]);
// }
