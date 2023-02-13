// var form = document.getElementById('addForm');
// form.addEventListener('submit',addItem);
// function addItem(e){
//     e.preventDefault();
//     var newitem=document.getElementById="listofitems".value;
//     var li=document.createElement('li');
//     li.className="listofgropitem";
//     li.appendChild(document.createTextNode(newitem));


    //saveToLocalStorage function
    function saveToLocalStorage(event) {
        event.preventDefault();
        const name = event.target.username.value;
        const email = event.target.emailid.value;
        const phonenumber = event.target.phonenumber.value;
        const obj={
            name,
            email,
            phonenumber

        };
        localStorage.setItem(obj.email,JSON.stringify(obj));
        showUserOnscreen(obj);

        function showUserOnscreen(obj){
            const parentEle=document.getElementById('listofitems');
            const childEle=document.createElement('li');
            childEle.textContent = obj.name + ' - '+ obj.email + ' - '+ obj.phonenumber;
            parentEle.appendChild(childEle);
            //parentEle.innerHTML=parentEle.innerHTML+ `<li>${obj.name} - ${obj.email} - ${obj.phonenumber}</li>`


            const deletebutton = document.createElement('input');
            deletebutton.type = 'button';
            deletebutton.value = 'Delete';
            deletebutton.onclick = () =>{
                localStorage.removeItem(obj.email);
                parentEle.removeChild(childEle);

            }
            childEle.appendChild(deletebutton);
            parentEle.appendChild(childEle);
        } 
    }