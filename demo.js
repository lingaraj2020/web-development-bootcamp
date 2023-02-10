//examine the document object
//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms[0]);
// console.log(document.images);

//GETELEMENTBYID//
//console.log(document.getElementById('header-title'));
// var headertitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(header);
//  headertitle.style.fontWeight='bold';

// //console.log(headertitle.textContent);

// header.style.borderBottom='3px solid #000';

//GETELEMENTBYCLASSNAME//
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='hello2';
// items[2].style.fontWeight='bold';
// items[2].style.backgroundColor='green';

// //items.style.backgroundColor='yellow';
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';
//}

//GETELEMENTBYTAGNAME//
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='hello2';
// li[2].style.fontWeight='bold';
// li[2].style.backgroundColor='green';

// //items.style.backgroundColor='yellow';
// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }

//QUERY SELECTORS//
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='Hello world';

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";

var item=document.querySelector('.list-group-item');
item.style.color='red';
var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';
var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='none';

//QUERYSELECTORALL//
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#ccc';
}



