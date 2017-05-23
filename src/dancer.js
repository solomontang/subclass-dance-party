// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  //debugger;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  //debugger;
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
makeDancer.prototype.lineUp = function () {
  this.setPosition(700, this.left);
};

makeDancer.prototype.partnerUp = function() {
  
};