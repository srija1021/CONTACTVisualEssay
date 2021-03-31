$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $frame = $('.frame');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $frame.each(function() {
        var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            $('.in-view').removeClass("in-view");
            $this.addClass('in-view');
        }
    });    
}).scroll();
