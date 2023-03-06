
console.log('person1:shows ticket')
console.log('person2:shows ticket')

const premovie = async()=> {
    const promisewifebringingticks = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
    
        },3000)
    });

    const getPopcorn = new Promise((resolve,reject)=> resolve(` popcorn`));

    const getbutter = new Promise((resolve,reject)=> resolve(` butter`));

    const getcolddrinks = new Promise((resolve,reject)=> resolve(`cold drinks`));

    let ticket = await promisewifebringingticks;
    
    console.log(`wife:we got ${ticket}`)
    console.log('husband:we should go in')
    console.log('wife:no i am hungry')

    let popcorn = await getPopcorn;

    console.log(`husband:we have some ${popcorn}`)
    console.log('husband:we should go in')
    console.log('wife:no i need butter to my popcorn')

    let butter = await getbutter;

    console.log(`husband:i got some ${butter} on popcorn`);
    console.log('husband:anything else darling')
    console.log('wife:lets go we r getting late');
    //console.log('thank you for reminder')

    let colddrink = await getcolddrinks;
    console.log('husband:all okk')
    console.log('wife: no, i need colddrinks please this is last one');
    console.log('husband:okk i will bring')

    // let [popcorn,butter,colddrink] = await Promise.all([getPopcorn.getbutter,getcolddrinks])
    // console.log(`${popcorn},${butter},${colddrink}`);
    return ticket; 
}
premovie().then((m)=>console.log(`person3:shows${m}`));

console.log('person4:shows ticket')
console.log('person5:shows ticket')