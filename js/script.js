let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
$('section').each(function(){
  
    let top = $(window).scrollTop();
    let offset = $(this).offset().top - 200;
    let id = $(this).attr('id');
    let height = $(this).height();

    if(top > offset && top < offset + height){
      $('.navbar a').removeClass('active');
      $('.navbar').find(`[href="#${id}"]`).addClass('active');
    }

  });



// smooth scrolling 

$('a[href*="#home"]').on('click',function(e){

  $('html, body').animate({

    scrollTop : $($(this).attr('href')).offset().top,

  },
    500,
    'linear'
  );

});