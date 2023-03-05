//to many promises in life
// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const Promise3 = new Promise((resolve,reject)=>
// setTimeout(resolve,2000,'good bye')
// );
// const Promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json);
// Promise.all([promise1,promise2,Promise3,Promise4]).then(values=>console.log(values));

function createpost() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            posts.push(post);
            resolve();
        }, 1000)
    }) 
}

const user={
    userneme:'lingaraj',
    lastactivitytime:'3rd march'
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            user.lastactivitytime=new Date().getTime();
            resolve(user.lastactivitytime)

            
        },1000);
    })
}
function userupdatepost(){
    Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
}