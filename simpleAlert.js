// custom event
let event = new Event('pepe');

// dispatch custom event on click
document.addEventListener('click', function(){
document.dispatchEvent(event);
});

// Custom JavaScriot event implementation
document.addEventListener('pepe', function(){
alert('Soy pepe');
})