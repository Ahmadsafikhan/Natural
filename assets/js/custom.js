// carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// sticky navbar
window.onscroll=function(){
    myfunction()
};
var navbar = document.getElementById("mynavbar");
function myfunction(){
    if(window.pageYOffset>=100){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky");
    }
}

$(document).ready(function(){
    $('.venobox').venobox(); 
});


(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();