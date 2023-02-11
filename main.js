var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter=document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup',filterItems);

//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //add class
    li.className='list-group-item';
    //add textnode with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var deleteBtn = document.createElement('button');

    //add classname to deletebtn
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //append textnode
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    //append li to list
    itemList.appendChild(li);
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
    
}

//fiter items
function filterItems(e){
    //convert to lower case
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li')
    //convert to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }else{
            item.style.display = 'none';
        }
        
    });
    
}