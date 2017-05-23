var makeStarDancer = function(top, left, timeBetweenSteps) {
  this.left = left;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer star"></span>');
  this.setPosition(top, left);
};

makeStarDancer.prototype = Object.create(makeDancer.prototype);
makeStarDancer.prototype.constructor = makeStarDancer;

makeStarDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
makeStarDancer.prototype.lineUp = function () {
  this.setPosition(500, this.left);
};