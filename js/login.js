$(function(){
    $('#login_big').click(function(){
        if($('#txtID').val() == "")   {
            alert('아이디 입력바람');
            $('#txtID').focus()
            return false;    
        }

    })
})