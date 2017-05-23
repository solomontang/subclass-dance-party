$(document).ready(function() {
  window.dancers = [];

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
    var top = Number(this.style.top.slice(0, -2));
    var left = Number(this.style.left.slice(0, -2));

    window.dancers.forEach(function(el) {
      var x = Math.abs(left - el.left);
      var y = Math.abs(top - el.top);
      var distance = pyt(x, y);
      if (distance > 0.1 && (shortest === null || distance < shortest)) {
        shortest = distance;
        closestEl = el;
      }
    });
    
    $(this).fadeOut();
    closestEl.$node.fadeOut();
    $(this).fadeIn();
    closestEl.$node.fadeIn();

  });
  
$('body').on('mouseover', 'span.chappelle', function() {
    $(this).slideToggle();
    $(this).slideToggle();
  });
});

