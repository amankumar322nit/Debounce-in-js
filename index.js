const press=document.querySelector(".increment_pressed");
const  trg = document.getElementById("triggered");
const  btn=document.querySelector(".button");

let pressed=0;
let trigger=0;

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

btn.addEventListener('click',()=>{
    press.innerHTML=++pressed;
    debounceCount();
})