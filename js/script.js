$(function(){
    // 레이어팝업
    $('.layerPopup').on('click',function(){
        $('#popup').fadeIn();
    });
    $('.close').on('click',function(){
        $('#popup').fadeOut();
    });
    // .on():이벤트 등록 메서드
});