$(document).ready(function() {
  window.dancers = [];

  var parsePixel = function(string) {
    return Number(string.slice(0, -2));
  };

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

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
      console.log(ele);
      ele.lineUp();
    });
  });
  
  $('body').on('click', 'span.dancer', function(event) {
    var shortest = null;
    var closestEl = null;
    var originalEl = this;

    var pyt = function(x, y) {
      return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)); 
    };
    var top = parsePixel(this.style.top);
    var left = parsePixel(this.style.left);
    
    // debugger;
    $('.dancer').each(function(i) {
      // debugger;
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
    // debugger;
    $(closestEl).fadeOut();



    $(this).fadeIn();
    $(closestEl).fadeIn();

  });
    
  $('body').on('mouseover', 'span.chappelle', function() {
    $(this).slideUp();
    $(this).slideDown();
  });
});

