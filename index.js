// const press=document.querySelector(".increment_pressed");
// const  trg = document.getElementById("triggered");
// const  btn=document.querySelector(".button");
// const  thr = document.getElementById("thrott");

// let pressed=0;
// let trigger=0;
// let thro=0;

// const debounce=function(cb,delay){
//     var timer=null;
//     return  function(...args){
//         console.log(args,timer);
//         if(timer){
//             clearTimeout(timer);
//         }
//             timer=setTimeout(cb,delay);
//     }
// };


// const debounceCount=debounce(()=>{
//     trigger++;
//     trg.innerHTML=trigger;
// },800);

// const throtlling=(cb,delay)=>{
//     var last=0;
//     return  (...args)=>{
//         let currentTime= new Date().getTime();
//         console.log(currentTime-last);
//         if(currentTime-last>=delay) {
//             last=currentTime;
//             return cb(...args);
//         }
//         return;
//     }
// };


// const  throtllingCount=throtlling(()=>{
//     thro++;
//     thr.innerHTML=thro;
// },800);

// btn.addEventListener('click',()=>{
//     press.innerHTML=++pressed;
//     debounceCount();
//     throtllingCount();
// })



function cachedCall(time) {
    const cache = {};
    return async (url) => {
      const key = `${url}`;
      const entry = cache[key];
      if (entry && entry.expiry > Date.now()) {
        console.log("cache_Value");
        return entry.data;
      }
      try {
        console.log('Request sent to the server')
        const resp = await fetch(url);
        const data = await resp.json();
        cache[key] = {
          data,
          expiry: Date.now() + time,
        };
        return data;
      } catch (e) {
        console.log("Error", e);
      }
    };
  }
  
  const call = cachedCall(1200);
  setTimeout(()=>{
    call("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
      console.log(data)
    )},
    800
  );
  setTimeout(()=>{
    call("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
      console.log(data)
    )},
    1800
  );
  