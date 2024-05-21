import { loadLink1 } from "./linkpage1.js";

function main() {
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");
    button1.setAttribute("id", "button1");
    button2.setAttribute("id", "button2");
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    contentDiv.style.justifyContent = "center";
    contentDiv.appendChild(button1);
    contentDiv.appendChild(button2);
    contentDiv.appendChild(button3);
    //        <button id = "button1"></button>
    //        <button id = "button2"></button>

    //contentDiv.style.backgroundImage = 
    //document.(contentDiv);
    contentDiv.style.setProperty("background-color", "grey");
    //button1.style.scale("width", "200px");
    button1.addEventListener('click', loadLink1);
}
var refresh = false;
// function refresh(){
//     var count = childnodes.length;
//     var subElements = node.childnodes;
//     while(contentDiv.subElements.length > 0){
//         if(subElements[count] !== null){
//             element.forEach(element => {
//                 subElements.remove(element); 
//             });(subElements[i].getNestedElements(subElements[i]))
//         }
//         count --;
        
//     }
// }
window.addEventListener = (onload) => {
    main();
}