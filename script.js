// Create a style element

const cols = document.querySelectorAll('.col');
console.log('h')

cols.forEach(col => {
  let bgColor = getComputedStyle.backgroundColor
  console.log(getComputedStyle.backgroundColor)
  console.log('f')

  col.addEventListener('mouseover', () => {
      console.log('hover')
      
    col.style.backgroundColor = 'white'
    col.style.color = 'black'
    
  });

  col.addEventListener('mouseout', () => {
    col.style.backgroundColor = 'rgb(59,59,59)'
    col.style.color = 'white'
  });

  col.addEventListener('touchstart', () => {
    console.log('hover')
    event.preventDefault();
    
  col.style.backgroundColor = 'white'
  col.style.color = 'black'
  
});

col.addEventListener('touchend', () => {
    event.preventDefault();
  col.style.backgroundColor = 'rgb(59,59,59)'
  col.style.color = 'white'
});


});;




const styleElement = document.createElement("style");
    const cssRules = [];

    for (let i = 1; i <= 20; i++) {
      cssRules[i] = `
        .class${i} {
          grid-area: class${i};
        
          
          margin:10px 10px;
        }
      `;
    }

    styleElement.textContent = cssRules.join('\n');

    // Append the style element to the document's head
    document.head.appendChild(styleElement);

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



const card = document.querySelectorAll('.col')

cards.forEach(card => {
    card.addEventListener('click', () => {
      console.log('card.offsetHeight');
    });
  });



  


 
