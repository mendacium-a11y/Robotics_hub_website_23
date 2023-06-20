// Create a style element

const cols = document.querySelectorAll('.col');

cols.forEach(col => {
  col.style.backgroundColor = 'rgb(0,0,0)'
  col.style.transition = 'transform 0.3s ease'
  let bgColor = getComputedStyle.backgroundColor
  console.log(getComputedStyle.backgroundColor)
  

  col.addEventListener('mouseover', () => {
      console.log('hover')
      col.style.transform = 'scale(1.06)'
    col.style.backgroundColor = 'white'
    col.style.color = 'black'
    
  });

  col.addEventListener('mouseout', () => {
    col.style.backgroundColor = 'rgb(0,0,0)'
    col.style.color = 'white'
    col.style.transform = ''
  });

  col.addEventListener('touchstart', () => {
    col.style.transform = 'scale(1.06)'
    
    // event.preventDefault();
    
  col.style.backgroundColor = 'white'
  col.style.color = 'black'
  
});

col.addEventListener('touchend', () => {
  col.style.transform = ''
    // event.preventDefault();
  col.style.backgroundColor = 'rgb(0,0,0)'
  col.style.color = 'white'
});


});;


// Get all the image elements with the class "myImage"
// Get all the image elements with the class "myImage"
const images = document.querySelectorAll('.grid-wrapper > div > a');

// Function to apply the scale transformation and center the image
function scaleAndCenterImage(image) {
  // Get the dimensions of the image
  const imageWidth = image.offsetWidth;
  const imageHeight = image.offsetHeight;

  // Apply the scale transformation
  image.style.transform = 'scale(1.5)';
  // Center the image on the page
  image.style.left = `calc(50% - ${imageWidth / 2}px)`;
  image.style.top = `calc(50% - ${imageHeight / 2}px)`;
  image.style.transformOrigin = 'center center';
}

// Function to reset the image to its original state
function resetImage(image) {
  // Remove the scale transformation and centering
  image.style.transform = '';
  image.style.left = '';
  image.style.top = '';
  image.style.transformOrigin = '';
}

// Loop through each image and attach event listeners
images.forEach(function (image) {
  // Mouseover (hover) event
  image.addEventListener('mouseover', function () {
    // Apply the scale transformation on hover
    scaleAndCenterImage(this);
  });

  // Mouseout event (when the mouse leaves the image)
  image.addEventListener('mouseout', function () {
    // Reset the image to its original state
    resetImage(this);
  });

  // Click event
  image.addEventListener('click', function () {
    // Apply the scale transformation and center the image on click
    scaleAndCenterImage(this);
  });

  // Touchstart event (for touch devices)
  image.addEventListener('touchstart', function (event) {
    // Prevent the default touch behavior
    event.preventDefault();
    // Apply the scale transformation and center the image on touch
    scaleAndCenterImage(this);
  });

  // Touchend event (when the touch event ends)
  image.addEventListener('touchend', function (event) {
    // Prevent the default touch behavior
    event.preventDefault();
    // Reset the image to its original state
    resetImage(this);
  });
});





// Get the navbar element
const navbar = document.querySelector('.h11l');

let prevScrollPos = window.scrollY;

// Add scroll event listener
window.addEventListener('scroll', () => {
  const currentScrollPos = window.scrollY;
  

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar.classList.remove('hidden');
  } else {
    // Scrolling down
    navbar.classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
});






  


 
