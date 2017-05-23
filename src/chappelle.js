var makeChappelleDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer chappelle"></span>');
  this.setPosition(top, left);
};

makeChappelleDancer.prototype = Object.create(makeDancer.prototype);
makeChappelleDancer.prototype.constructor = makeChappelleDancer;

makeChappelleDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};