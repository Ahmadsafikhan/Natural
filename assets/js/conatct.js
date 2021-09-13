$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            nav: true
        },
        600:{
            items:2,
            nav: false
        },
        1000:{
            items:4,
            nav: false
        }
    }
})
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