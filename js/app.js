const navButton = document.querySelector('.nav-toggler');
const navList = document.querySelector('.nav-list');

navButton.addEventListener('click', () => {
  if(navList.style.display === 'none'){
    navList.style.display = 'block'
    navList.classList.add('animated', 'fadeIn')
  } else {
    navList.style.display = 'none'
  }
});