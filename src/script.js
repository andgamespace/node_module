import { loadLink1 } from "./linkpage1.js";

function main() {
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    button1.setAttribute("id", "button1");
    button2.setAttribute("id", "button2");
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(button1);
    //        <button id = "button1"></button>
    //        <button id = "button2"></button>
    contentDiv.innerHTML = "";
    contentDiv.style.justifyContent = "center";
    //contentDiv.style.backgroundImage = 
    
}
var refresh = false;
// function refresh(){
//     if(refresh){
//         $('#content'). empty();
//     }
// }
window.addEventListener = (onload) => {
    main();
}