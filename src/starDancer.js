var makeStarDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeStarDancer.prototype = Object.create(makeDancer.prototype);
makeStarDancer.prototype.constructor = makeStarDancer;

makeStarDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};