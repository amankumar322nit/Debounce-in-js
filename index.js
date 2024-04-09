const press=document.querySelector(".increment_pressed");
const  trg = document.getElementById("triggered");
const  btn=document.querySelector(".button");
const  thr = document.getElementById("thrott");

let pressed=0;
let trigger=0;
let thro=0;

const debounce=function(cb,delay){
    var timer=null;
    return  function(...args){
        console.log(args,timer);
        if(timer){
            clearTimeout(timer);
        }
            timer=setTimeout(cb,delay);
    }
};


const debounceCount=debounce(()=>{
    trigger++;
    trg.innerHTML=trigger;
},800);

const throtlling=(cb,delay)=>{
    var last=0;
    return  (...args)=>{
        let currentTime= new Date().getTime();
        console.log(currentTime-last);
        if(currentTime-last>=delay) {
            last=currentTime;
            return cb(...args);
        }
        return;
    }
};


const  throtllingCount=throtlling(()=>{
    thro++;
    thr.innerHTML=thro;
},800);

btn.addEventListener('click',()=>{
    press.innerHTML=++pressed;
    debounceCount();
    throtllingCount();
})