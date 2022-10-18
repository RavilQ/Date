




let aTag = document.getElementById("alma");
let second = 0;
let int = setInterval(()=>{
     second++;
     aTag.innerText = second;
 },500)

 let button = document.getElementById("button");
 button.addEventListener("click",()=>{
    clearInterval(int);
 })
let button2 = document.getElementById("button2");
button2.addEventListener("click",()=>{
        clearInterval(int);
        int = setInterval(()=>{
            second++;
            aTag.innerText = second;
        },500)
    
 
        
    
})

let button3 = document.getElementById("button3");
button3.addEventListener("click",()=>{
    clearInterval(int);
    second=0;
    int = setInterval(()=>{
        second++;
        aTag.innerText = second;
    },500)


})








// let stopp = document.getElementById("button");
// stopp.addEventListener("click",()=>{
//     clearInterval(start);
// })

// let continuue = document.getElementById("button2");
// continuue.addEventListener("click",e=>{
    
//         start = setInterval( ()=> {
//             reqem++;
//             test.innerText = reqem;
//         }, 500);

    
   
// })

////////////////////////////////////////////////////////////////////////////////////////

let last = document.getElementById("Doneee");
last.addEventListener("click",()=>{

    last.parentElement.parentElement.parentElement.setAttribute("style",
    
    
    "background-color:none !important; background-color:green !important;"
    );
    // last.parentElement.setAttribute("class","klasess2");
    // last.setAttribute("class","klases")

})

let last1 = document.getElementById("Donee");
last1.addEventListener("click",()=>{

    last1.parentElement.parentElement.parentElement.setAttribute("style",
    
    
    "background-color:none !important; background-color:green !important;"
    );
    // last.parentElement.setAttribute("class","klasess2");
    // last.setAttribute("class","klases")

})

let last2 = document.getElementById("Done");
last2.addEventListener("click",()=>{


   let deyisgen = last2.parentElement.parentElement.parentElement;

   deyisgen.style.backgroundColor="green";

    // last2.parentElement.parentElement.parentElement.setAttribute("style",
    
    
    // "background-color:none !important; background-color:green !important;"
    // );
    
})


// let last3 = document.getElementById("Done");
// last3.addEventListener("click",()=>{
//     last3.parentElement.parentElement.parentElement.style.backgroundColor="green";
// })