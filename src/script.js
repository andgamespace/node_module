import { loadLink1 } from "./linkpage1.js";
import { loadMainPage } from "./mainPage.js";
import { loadAboutPage } from "./about-page.js";

function main() {
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");
    button1.setAttribute("id", "button1");
    button1.textContent = 'Menu';
    button2.setAttribute("id", "button2");
    button2.textContent = "Main page";
    button3.textContent = 'About Page';
    button3.setAttribute('id', 'button3');
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    //contentDiv.style.justifyContent = "center";
    button1.style.justifyContent = "space-between";
    button2.style.justifyContent = "space-between";
    button3.style.justifyContent = "space-between";

    contentDiv.appendChild(button1);
    contentDiv.appendChild(button2);
    contentDiv.appendChild(button3);
    //        <button id = "button1"></button>
    //        <button id = "button2"></button>

    //contentDiv.style.backgroundImage = 
    //document.(contentDiv);
    //contentDiv.setProperty("background-color", "grey");
    //contentDiv.justifyContent('space-between');
    //button1.style.scale("width", "200px");
    button1.addEventListener("click", loadLink1);
    button2.addEventListener('click', loadAboutPage);
    button3.addEventListener('click', loadMainPage);

}
// function refresh(){
//     var count = childnodes.length; 
//     var subElements = node.childnodes;
//     while(contentDiv.subElements.length > 0){
//         if(subElements[count] !== null){
//             element.forEach(element => {
//                 subElements.remove(element); 
//             });(subElements[i].getNestedElements(subElements[i]))
//         }d
//         count --;
        
//     }
// }

document.onload = main();