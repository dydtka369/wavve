$(function(){
    $('.bt1').click(function(){
      let sw = false;
      if(sw){
        $('#bottom_list1').css('display','none');
        sw=!sw;
      }else {
        $('.bt3').css('border-bottom','0');
        $('.bt2').css('border-bottom','0');
        $('.bt1').css('border-bottom','3px solid #1351f9');
        $('#bottom_list1').css('display','block');
        $('#bottom_list2').css('display','none');
        $('#bottom_list3').css('display','none'); 
      }
    });
      $('.bt2').click(function(){
      let sw = false;
      if(sw){
        $('#bottom_list2').css('display','none');
      }else {
        $('.bt1').css('border-bottom','0');
        $('.bt3').css('border-bottom','0');
        $('.bt2').css('border-bottom','3px solid #1351f9');
        $('#bottom_list1').css('display','none');
         $('#bottom_list3').css('display','none');
        $('#bottom_list2').css('display','block'); 
      }
    });
    $('.bt3').click(function(){
      let sw = false;
      if(sw){
        $('#bottom_list3').css('display','none');
      }else {
        $('.bt1').css('border-bottom','0');
        $('.bt2').css('border-bottom','0');
        $('.bt3').css('border-bottom','3px solid #1351f9');
        $('#bottom_list1').css('display','none');
        $('#bottom_list3').css('display','block'); 
        $('#bottom_list2').css('display','none');
      }
    });
    $('#loading').fadeOut(2000);
  })