const projectOverlay = document.querySelectorAll('.overlay');

// Show project overlays on hover
$(projectOverlay).hover(function () {
  $(this).animate({
    'opacity':'.9'},
    500);
  },
  function () {
    $(this).animate({
      'opacity':'0'},
      500);
  });