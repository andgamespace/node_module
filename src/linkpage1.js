export function loadLink1(){

    var contentDiv = document.getElementById("content");
    //var contentDiv2 = document.createElement("div");
    //contentDiv2.setAttribute("id", "contentDiv2");
    //contentDiv.style.setProperty('color', 'blue');
    var link1Text = document.createElement("p");
    link1Text.innerText = "Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down clap of thunder. Reef sails six pounders skysail code of conduct sloop cog Yellow Jack gunwalls grog blossom starboard. Swab black jack ahoy Brethren of the Coast schooner poop deck main sheet topmast furl marooned";
    link1Text.setAttribute('class', 'menu-page');
    //link1Text.innerText = "/{}/";
    contentDiv.appendChild(link1Text);
    const foodItems = [
        "Apple",
        "Banana",
        "Orange",
        "Bread",
        "Cheese",
        "Rice",
        "Pasta",
        "Tomato",
        "Potato",
        "Chicken"
      ];
    foodItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    contentDiv.appendChild(ul);
    
    var menuItems
    //contentDiv.style.setProperty("background-color", "black");
  
}
