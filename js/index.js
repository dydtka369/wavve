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
    let index=0;
    // 좌측 버튼 클릭 이벤트
    $('.left_control').click(function(){
         index--;
         if(index < 0) {
             index = 4;
         }
         moveSilder(index);
        // index--;
        // moveSilder(index);
    });
    // 우측버튼 클릭 이벤트
    $('.right_control').click(function(){
         index++;
         if(index >= 4){
             index = 0;
         }
         moveSilder(index);
        // index++;
        // moveSilder(index);
    });
    //이미지 슬라이더 구현 함수
    function moveSilder(index) {
        // if(index >= 0 && index < 4){
        //     $('.left_control').fadeIn(500)
        //     $('.right_control').fadeIn(500)
        // }
        // if(index == 0) {
        //     $('.left_control').fadeOut(500)
        //     $('.right_control').fadeIn(500)
        // }
        // if(index == 4) {
        //     $('.left_control').fadeIn(500)
        //     $('.right_control').fadeOut(500)
        // }
        $('.slider_panel').animate({
            left : -(index*1240)
        },'slow')
        $('.control_button').removeClass('active');
        $('.control_button').eq(index).addClass('active');
        // $('.slider_text').css('left',-400);
        // $('.slider_text').eq(index).animate({
            //     left : 0
            // },'fast')
            $('.slider_text').hide()
            $('.slider_text').eq(index).fadeIn('slow'); 
    }


    

    });






