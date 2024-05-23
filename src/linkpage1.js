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
    var foodItems = document.createElement('p');
    foodItems.innerText = '\n Apple \n Banana \n Orange \n Bread \n Cheese \n Rice';
        // "Apple",
        // "Banana",
        // "Orange",
        // "Bread",
        // "Cheese",
        // "Rice",
        // "Pasta",
        // "Tomato",
        // "Potato",
        // "Chicken"
    contentDiv.appendChild(foodItems);
    foodItems.style.justifyContent('center');
      
}
