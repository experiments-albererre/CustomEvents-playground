// Event
let customEvent = new CustomEvent('lolo', {'detail': [1,4,17]}); // Required detail as name, only detail is allowed

// JavaScript event with dispatch
document.addEventListener('click', function(){
  document.dispatchEvent(customEvent);
});

// Custom JavaScript event with aditional info
document.addEventListener('lolo', function(e){

  // this adds 0 for every click
  e.detail.push(0);

  console.log(e.detail);
});