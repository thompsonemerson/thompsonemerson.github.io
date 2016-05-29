$(function(){

  $('body').mousemove(function() {
    var w   = $(this).width(),
        pct = 360*(+event.pageX)/w,
        bg  = 'linear-gradient('+ pct/20 +'deg, #c05a9c, #223971)';
        $(this).css('background-image', bg);
  });

});
