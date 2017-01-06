$(document).on("click",".about",function() {
  console.log('pressed')
    $('html, body').animate({
        scrollTop: $("#name").offset().top
    }, 1500);
});
$(document).on("click",".projects",function() {
  console.log('pressed')
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1500);
});
$(document).on("click",".contact",function() {
  console.log('pressed')
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1500);
});
