$(document).ready(function(){
    AOS.init({
        duration: 1200,
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

    //go to top button
    $('.gotop').click(function(){
        $('html,body').animate({scrollTop: 0}, 500);
    });
});