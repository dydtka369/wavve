$(function(){
    $(window).scroll(function(){
        let pos = $(this).scrollTop();
        if(pos>0){
            $('#up').css('opacity','1')
        }else {
            $('#up').css('opacity','0')
        }
    
        $('#img2').hover(function(){
            $(this).attr('src','./images/좋댓알.gif.gif')
        },function(){
            $(this).attr('src','./images/좋아하면.jpg')
        })
    })
    
    });






