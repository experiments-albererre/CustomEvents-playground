// Event
let backgroundUpdateEvent = new CustomEvent('backgroundUpdateEvent');

let backgroundColorList = ["#e6a324", "#2793e6", "#f00", "#ecf126", "#14ec3a", "#e41dd3"];

// JavaScript event with dispatch
document.addEventListener('click', function(){
  document.dispatchEvent(backgroundUpdateEvent);
});

// Custom JavaScript event with aditional info
document.addEventListener('backgroundUpdateEvent', function(event) {

    let randomColorIndex = Math.round( Math.random() * 5);

    document.body.style.backgroundColor = backgroundColorList[randomColorIndex];
});