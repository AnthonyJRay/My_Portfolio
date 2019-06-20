const link = document.querySelectorAll('.nav-link');
const navBar = document.querySelector('.collapse');
const calender = document.querySelector('.calender');
const projectImage = document.querySelector('.project-img');

// Add HTML markup as Text
document.querySelector('.open-span').textContent = '<span>';
document.querySelector('.close-span').textContent = '</span>';

document.querySelector('.para-open').textContent = '<p>';
document.querySelector('.para-close').textContent = '</p>';

document.querySelector('.header-open').textContent = '<h1>';
document.querySelector('.header-close').textContent = '</h1>';





// Close Nav Menu after clicking a link
$(link).on('click', function (event) {
  if (navBar.classList.contains('show'))
    navBar.classList.remove('show')
});
// Close Nav Menu if clicking outside of Menu
$(document).on('click', function () {
  navBar.classList.remove('show');
})
// Set Smooth Scroll when clicking Menu links
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function () {
        window.location.hash = hash;
      });
    }
  });
});


// Get and Display Current Time in Footer

// Get current Time
const time = new Date();
const mins = time.getMinutes().toString();
const hours = time.getHours().toString();

timeOfDay = () => {
  if (hours < "12") {
    timeOfDay = 'AM'
  } else {
    timeOfDay = 'PM'
  }
  return timeOfDay;
}
timeOfDay();
console.log(timeOfDay);

getTime = () => {
  getTime = hours +':'+ mins +' '+timeOfDay;
  return getTime;
}

// Find if Morning or Afternoon


displayTime = () => {
  const currentTime = document.querySelector('#currentTime');
  currentTime.innerContent = hours;
}
  