$(document).ready(function() {
    var previous;
    var growSize = '300px';
    var shrinkSize = '100px';
    
    $('.ig-list-circle').click(function() {
        console.log('click');
        $(this).animate({height: growSize, width: growSize});
        $(this).parent().css('height', growSize);
        $(this).parent().css('width', growSize);
        
        $(previous).animate({height: shrinkSize, width: shrinkSize});
        $(previous).parent().css('height', shrinkSize);
        $(previous).parent().css('width', shrinkSize);
        
        previous = $(this);
    });
});