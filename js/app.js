const navButton = document.querySelector('.nav-toggler');
const navList = document.querySelector('.nav-list');
const calender = document.querySelector('.calender');

navButton.addEventListener('click', () => {
  if(navList.style.display === 'none'){
    navList.style.display = 'block'
    navList.classList.add('animated', 'fadeIn')
  } else {
    navList.style.display = 'none'
  }
});

new GitHubCalendar(calender, "AnthonyJRay", {
  responsive: true
});