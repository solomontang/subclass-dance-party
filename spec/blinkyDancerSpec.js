describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
  
  describe('lineUp', function() {
    it('should line up all blinkyDancers at top: 700px', function () {
      blinkyDancer.lineUp();
      expect(blinkyDancer.$node.get(0).style.top).to.be.equal('700px');
    });
    it('should line up all blinkyDancers at the same left position before and after lineUp', function() {
      var left = blinkyDancer.$node.get(0).style.left;
      blinkyDancer.lineUp();
      expect(blinkyDancer.$node.get(0).style.left).to.be.equal(left);
    });
  });  
});
