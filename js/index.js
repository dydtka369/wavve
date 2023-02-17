$(function(){
    $(window).scroll(function(){
        let pos = $(this).scrollTop();
        if(pos>0){
            $('#up').css('opacity','1')
        }else {
            $('#up').css('opacity','0')
        }
    
    })
    let sw=false;
    let index=0;
    let auto;
    moveSilder(index);
    autoSlider();
    $('.control_button').click(function(){
        index = $(this).index();
        moveSilder(index);
    });
    // 좌측 버튼 클릭 이벤트
    $('.left_control').click(function(){
        if(index > 0) {
            index--;
            moveSilder(index);
        }else {
            index = 3;
            moveSilder(index);
        }
    })
    // 우측버튼 클릭 이벤트
    $('.right_control').stop(true).click(function(){
        if(index < 3) {
            index++;
            moveSilder(index);
        }else {
            index = 0;
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
            left : -(index*910)
        },'slow')
    }
     //자동이미지 슬라이더 구현 함수
            function autoSlider() {
            auto = setInterval(function(){
                    $('.right_control').trigger('click');
            },2000);
        }

       
    



        // 첫 번째 미니 슬라이드
        let ide=0;
        miniSlide(ide);
        $('.le').click(function(){
            ide--;
            if(ide < 0) {
                ide = 1;
            }
            
                miniSlide(ide);
                console.log(ide)
        })

        $('.re').click(function(){
            ide++;
            if(ide >= 2){
                ide = 0;
            }
            miniSlide(ide);
        });


       //미니 슬라이드 구현 함수
        function miniSlide(ide) {
            $('.slid').animate({
                left : -(ide*1240)
            },'slow')
        }
       


        // 두번째 미니 슬라이드

        let ide1=0;
        miniSlide1(ide1);
        $('.le1').click(function(){
            ide1--;
            if(ide1 < 0) {
                ide1 = 1;
            }
            
            miniSlide1(ide1);
                console.log(ide1)
        })

        $('.re1').click(function(){
            ide1++;
            if(ide1 >= 2){
                ide1 = 0;
            }
            miniSlide1(ide1);
        });
   


       //미니 슬라이드 구현 함수
        function miniSlide1(ide1) {
            $('.slid2').animate({
                left : -(ide1*1240)
            },'slow')
        }
       


          // 세번째 미니 슬라이드

          let ide2=0;
          miniSlide2(ide2);
          $('.le2').click(function(){
            ide2--;
              if(ide2 < 0) {
                ide2 = 1;
              }
              
              miniSlide2(ide2);
                  console.log(ide2)
          })
  
          $('.re2').click(function(){
            ide2++;
              if(ide2 >= 2){
                ide2 = 0;
              }
              miniSlide2(ide2);
          });
  
  
  
         //미니 슬라이드 구현 함수
          function miniSlide2(ide2) {
              $('.slid2').animate({
                  left : -(ide2*1240)
              },'slow')
          }
        
          

             // 네번째 미니 슬라이드

             let ide3=0;
             miniSlide3(ide3);
             $('.le3').click(function(){
                ide3--;
                 if(ide3 < 0) {
                    ide3 = 1;
                 }
                 
                 miniSlide3(ide3);
                     console.log(ide3)
             })
     
             $('.re3').click(function(){
                ide3++;
                 if(ide3 >= 2){
                    ide3 = 0;
                 }
                 miniSlide3(ide3);
             });
     
     
     
            //미니 슬라이드 구현 함수
             function miniSlide3(ide3) {
                 $('.slid3').animate({
                     left : -(ide3*1240)
                 },'slow')
             }
            
           })
   




        




