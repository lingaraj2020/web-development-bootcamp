// var form = document.getElementById('addForm');
// form.addEventListener('submit',addItem);
// function addItem(e){
//     e.preventDefault();
//     var newitem=document.getElementById="listofitems".value;
//     var li=document.createElement('li');
//     li.className="listofgropitem";
//     li.appendChild(document.createTextNode(newitem));
//}

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
    }

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

            const editbutton = document.createElement('input');
            editbutton.type = 'button';
            editbutton.value = 'Edit';

            editbutton.onclick=() =>{
                localStorage.removeItem(obj.email);
                parentEle.removeChild(childEle);
                document.getElementById('usernameInputTag').value = obj.name;
                document.getElementById('emailInputTag').value = obj.email;
                document.getElementById('phonenumberInputTag').value = obj.phonenumber;
                
            }
            childEle.appendChild(deletebutton);
            childEle.appendChild(editbutton);
            parentEle.appendChild(childEle);
        } 
    
    // function greeting(name) {
    //     alert(`Hello, ${name}`);
    //   }
      
    //   function processUserInput(callback) {
    //     const name = prompt("Please enter your name.");
    //     callback(name);
    //   }
      
    //   processUserInput(greeting);
    // create2ndpost().then(()=>{
    //     deletepost().then((popedele)=>{
    //         console.log(popedele.title);
    //         create3rdpost().then(()=>{
    //             deletepost().then((popedele)=>{
    //                 console.log(popedele.title);
    //                 deletepost().then(()=>{})
    //                 .catch((err)=>{
    //                     console.log(err);
    //                 })
    //                 .catch((err)=>{})
    //             })
    //             .catch((err)=>{})
    //         })
    //         .catch((err)=>{})
    //     })
    //     .catch((err)=>{}})
    // })