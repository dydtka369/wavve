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
    let index=1;
    let auto;
    moveSilder(index);
    autoSlider();
    $('.slider_panel').append($('.slider_image').first().clone());
    $('.slider_panel').prepend($('.slider_image').eq(-2).clone());
    $('.control_button').click(function(){
        index = $(this).index();
        moveSilder(index+1);
    });
    // 좌측 버튼 클릭 이벤트
    $('.left_control').click(function(){
        if(index > 1) {
            index--;
            moveSilder(index);
        }else {
            $('.slider_panel').css('left', -8680); 
            index = 6;
            moveSilder(index);
        }
    })
    // 우측버튼 클릭 이벤트
    $('.right_control').stop(true).click(function(){
        if(index < 6) {
            index++;
            moveSilder(index);
        }else {
            $('.slider_panel').css('left', 0);
            index = 1;
            moveSilder(index);
        }
    });
      // 애니메이션 캔버스 영역
      $('.animation_canvas').hover(function(){
        clearInterval(auto);
    }, function(){
        autoSlider();
    })

    //이미지 슬라이더 구현 함수
    function moveSilder(index) {
        $('.slider_panel').animate({
            left : -(index*1240)
        },'slow')
    }
     //자동이미지 슬라이더 구현 함수
            function autoSlider() {
            auto = setInterval(function(){
                    $('.right_control').trigger('click');
            },2000);
        }

        $('.le').click(function(){
            $('.slid_wapper').css('left',500)
        })

       
        })





