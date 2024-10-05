// To trigger an event, we can use the followig syntax:
// node.event = function;

// example: on clicking the button (id = "babysFirstEvent"), we can changeg the text inside it:
let changeButtonText = document.querySelector("#babysFirstEvent");
changeButtonText.onclick = () => {
    // using inline functions is preferred for doing this type of thing
    changeButtonText.textContent = "something has happened...";
}

// you can even keep track of how many times a button has been clicked and do things accordingly:
let countClicks = 0;
changeButtonText.onclick = () => {
    countClicks++;

    switch (countClicks){
        case 1:
            changeButtonText.textContent = "something has happened...";
            break;
        case 5:
            changeButtonText.textContent = "clicking it repeatedly... will it trigger something that should not be triggered?";
            break;
        case 10:
            changeButtonText.textContent = "... you can stop now...";
            break;
        case 18:
            changeButtonText.textContent = "stop... seriously";
            break;
        case 30:
            changeButtonText.textContent = "...";
            break;
        case 50:
            changeButtonText.textContent = "BRO NOTHING WILL HAPPEN GO BE PRODUCTIVE";
            break;
    }
}

// the program above is simple and changes the text inside the button depending on how many times the button has been clicked
// it tries to tell a mysterious story to keep the user hooked

//! Using multiple events for a single element is not recommended in practice, this is only for showcase
//? The definition of the event which is defined at the most later part in a code will be used

// next, let's reward a user if he clicks inside the inner div block (#reward).
// this div block is positioned absolutely on the page, relative to the outer div block (.trackMouse)
// the outer block will change color when the mouse is inside the #reward block

let Div = document.querySelector(".trackMouse");
let textInDiv = document.querySelector(".trackMouse span");
console.log(textInDiv);
let reward = document.querySelector("#reward");

// the reward:
// defining
let cookie = document.createElement("img");
cookie.src = "../cookieReward.jpg"; // accessing attributes of img using node.attribute
cookie.alt = "no cookie :&#40";

// styling:
cookie.style.height = "100%";
cookie.style.width = "100%";
cookie.style.opacity = "0";
cookie.style.objectFit = "cover";

// transitioning: what property will be affected, duration, easing
// to actually achieve the transition, we would need to call a function when the #reward div block is clicked:

// Since the image is the child of #reward div block, we need to change the size and shape of the #reward div block to make the image fit the outer .trackMouse div block
// reward.style.height = "100%";
// reward.style.width = "100%";
// reward.style.bottom = "0px";
// reward.style.left = "0px";
// reward.style.borderStyle = "hidden";

// positioning:
// reward.appendChild(cookie);



reward.onmouseover = () => {
    Div.style.backgroundColor = "rgba(253, 253, 253, 1)";
    reward.style.cursor = "text";
}

reward.onmouseout = () => {
    Div.style.backgroundColor = "";
}

let clickCount = 0;

reward.onclick = () => {

    clickCount++;

    textInDiv.textContent = "You found the reward! It was a cookie!";

    console.log(textInDiv);

    // these adjustments need to be made before appending the image
    reward.style.height = "100%";
    reward.style.width = "100%";
    reward.style.bottom = "0px";
    reward.style.left = "0px";
    reward.style.borderStyle = "none";
    reward.style.backgroundColor = "transparent";

    cookie.style.opacity = "0";
    
    // appending the image
    if(clickCount === 1){
        reward.appendChild(cookie);
        setTimeout(
            () => {
                cookie.style.transitionProperty = "opacity";
                cookie.style.transitionDuration = "6s";
                cookie.style.transitionTimingFunction = "";

                cookie.style.opacity = "1";
            }, 1
        );
    }
    else{
        cookie.style.opacity = "1";
    }
}