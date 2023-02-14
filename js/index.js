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
    let sw=false;
    let index=0;
    let auto;
    let mindex;
    moveSilder(index);
    autoSlider();
    // 좌측 버튼 클릭 이벤트
    $('.left_control').click(function(){
         index--;
         if(index < 0) {
             index = 5;
         }
         moveSilder(index);
        // index--;
        // moveSilder(index);
    });
    // 우측버튼 클릭 이벤트
    $('.right_control').click(function(){
         index++;
         if(index >= 5){
             index = 0;
         }
         moveSilder(index);
        // index++;
        // moveSilder(index);
    });
      // 애니메이션 캔버스 영역
      $('.animation_canvas').hover(function(){
        clearInterval(auto);
    }, function(){
        autoSlider();
    })

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
     //자동이미지 슬라이더 구현 함수
            function autoSlider() {
            auto = setInterval(function(){
                if(index < 5 && sw == false){
                    $('.right_control').trigger('click');
                }else {
                    sw=true;
                }
                 if(index > 0 && sw==true){
                    $('.left_control').trigger('click');
                }else {
                    sw= false;
                }
            },2000);
        }

    
    });






