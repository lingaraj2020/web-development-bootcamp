examine the document object
console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms[0]);
console.log(document.images);

GETELEMENTBYID//
console.log(document.getElementById('header-title'));
var headertitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(header);
 headertitle.style.fontWeight='bold';

//console.log(headertitle.textContent);

header.style.borderBottom='3px solid #000';

GETELEMENTBYCLASSNAME//
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='hello2';
items[2].style.fontWeight='bold';
items[2].style.backgroundColor='green';

//items.style.backgroundColor='yellow';
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}

GETELEMENTBYTAGNAME//
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='hello2';
li[2].style.fontWeight='bold';
li[2].style.backgroundColor='green';

//items.style.backgroundColor='yellow';
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}

QUERY SELECTORS//
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

var input=document.querySelector('input');
input.value='Hello world';

var submit=document.querySelector('input[type="submit"]');
submit.value="SEND";

var item=document.querySelector('.list-group-item');
item.style.color='red';
var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';
var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='none';

QUERYSELECTORALL//
var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#ccc';
}


//TRAVERSING DOM//
var itemlist=document.querySelector('#items');

//parentNode
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentNode.parentNode.parentNode);

//parentElement
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentNode.parentNode.parentNode);

//chilnodes
console.log(itemlist.childNodes);
console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor='yellow';

// //firstchild
console.log(itemlist.firstChild);

// //FirstElementchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = 'Hello 1';

//lastchild
console.log(itemlist.lastChild);

//lastElementchild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = 'Hello 1';

//nextsibling
console.log(itemlist.nextSibling);
// //nextElementsibling
 console.log(itemlist.nextElementSibling);

//previoussibling
 console.log(itemlist.previousSibling);
// //previousElementsibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color='green';

//create Element

//create div
var newDiv=document.createElement('div');

//add class
newDiv.className='hello';
//add id
newDiv.id='hello1';
//add attr
newDiv.setAttribute('title','Hello Div');

//creat textnode
var newDivtext=document.createTextNode('Hello world');

//ADD text to node
newDiv.appendChild(newDivtext);

var container = document.querySelector('header.container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';

container.insertBefore(newDiv,h1);

var titl=document.querySelector('ul.list-group-item');
var li=document.querySelector('ul li');
titl.insertBefore(newDiv,li);






