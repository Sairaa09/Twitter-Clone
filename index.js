let inputBox= document.querySelector(".input-box")
let searchBox = document.querySelector(".search-area")

inputBox.addEventListener("focus",()=>{
    // if(searchBox.style.display=="hidden"){
    //     searchBox.style.display="block";
    //     console.log("block");
        
    // }else{
    //     searchBox.style.display="hidden";
    //     console.log("hidden");
        
    // }
    searchBox.classList.toggle("hidden");
})
console.log("hello");


// search.addEventListener("focus", () => {
//     searchBox.classList.toggle("hidden");
//   });


const menuicon=document.queryselector(".menubar")
const  menulist=document.querySelector(".first")
menuicon.addEventListener("click",()=>{
    menulist.classList.toggle("hidden")
})