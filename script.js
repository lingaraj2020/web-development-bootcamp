//Local storage
localStorage.setItem('Nmae','lingaraj');
//console.log(localStorage.getItem('Name'));
localStorage.removeItem('Nmae');

sessionStorage.setItem('Name','raj');
//console.log(sessionStorage.getItem('Name'));
//sessionStorage.removeItem('Name');
sessionStorage.setItem('Name','prasanna');

document.cookie = 'name=kyle; expires=' + new Date(9999,0,1).toUTCString();
document.cookie = 'lastName=smith; expires=' + new Date(9999,0,1).toUTCString();

console.log(document.cookie);