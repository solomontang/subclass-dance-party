$(document).ready(function() {
  window.dancers = [];

  var parsePixel = function(string) {
    return Number(string.slice(0, -2));
  };

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function(event) {
    window.dancers.forEach(function (ele) {
      ele.lineUp();
    });
  });
  
  $('body').on('click', 'span.dancer', function(event) {
    var shortest = null;
    var closestEl = null;

    var pyt = function(x, y) {
      return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)); 
    };
    var top = parsePixel(this.style.top);
    var left = parsePixel(this.style.left);
    
    $('.dancer').each(function(i) {

      var el = $('.dancer').get(i);
      var x = Math.abs(left - parsePixel(el.style.left));
      var y = Math.abs(top - parsePixel(el.style.top));
      var distance = pyt(x, y);
      if (distance > 0.1 && (shortest === null || distance < shortest)) {
        shortest = distance;
        closestEl = el;
      }
    });

    $(this).fadeOut();
    $(closestEl).fadeOut();

    $(this).fadeIn();
    $(closestEl).fadeIn();
  });
    
  $('body').on('mouseover', 'span.chappelle', function() {
    $(this).slideUp();
    $(this).slideDown();
  });
});

