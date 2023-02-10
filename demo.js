//examine the document object
//console.dir(document);

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

//GETELEMENTBYID
//console.log(document.getElementById('header-title'));
// var headertitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(header);
//  headertitle.style.fontWeight='bold';

// //console.log(headertitle.textContent);

// header.style.borderBottom='3px solid #000';

//GETELEMENTBYCLASSNAME
 var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
//items[1].textContent='hello2';
//items[2].style.fontWeight='bold';
items[2].style.backgroundColor='green';

//items.style.backgroundColor='yellow';
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}


