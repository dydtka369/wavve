$(function(){
    $(window).scroll(function(){
        let pos = $(this).scrollTop();
        if(pos>500){
            $('#up').css('opacity','1')
        }else {
            $('#up').css('opacity','0')
        }

    })
})