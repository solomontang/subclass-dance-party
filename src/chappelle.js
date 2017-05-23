var makeChappelleDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeChappelleDancer.prototype = Object.create(makeDancer.prototype);
makeChappelleDancer.prototype.constructor = makeChappelleDancer;

makeChappelleDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};