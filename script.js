$(document).ready(function(){
    AOS.init({
        duration: 1200,
        once: true,
        offset: 200,
    });
    $(window).scroll(function(){
        if(this.scrollY >  $(window).height()){
            $('.navbar').addClass("sticky");   
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });

    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.gotop').attr('style', 'opcaticy: 1');
        }
        else{
            $('.gotop').attr('style', 'opacity: 0');
        }
    });

    //toggle menu / navbar script
    $('.menu-btn').click(function(){
        $('.navbar .navbar-nav').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["中文", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //go to top button
    $('.gotop').click(function(){
        $('html,body').animate({scrollTop: 0}, 500);
    });
});