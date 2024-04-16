// 1st Division
let fontSize = 16; // Default font size in pixels

function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

function increaseFontSize() {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
}

function decreaseFontSize() {
    if (fontSize > 10) { // Ensure font size doesn't go too small
        fontSize -= 2;
        document.body.style.fontSize = fontSize + 'px';
    }
}

function resetFontSize() {
    fontSize = 16;
    document.body.style.fontSize = fontSize + 'px';
}


// 2nd and 3rd Division
 // Get the hamburger icon
 var navToggle = document.getElementById('nav-toggle');

 // Get the third division
 var division3 = document.getElementById('division3');

 // Add click event listener to the hamburger icon
 navToggle.addEventListener('click', function() {
     // Toggle the visibility of the third division
     division3.classList.toggle('active');
 });

 // Add resize event listener to the window object
 window.addEventListener('resize', function() {
     // If the viewport width is more than 600px
     if (window.innerWidth > 600) {
         // Remove the active class from the third division
         division3.classList.remove('active');
     }
 });

