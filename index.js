module.exports = function(Lab) {
  //check if lab 4.0.0
  var lab = Lab;
  if (typeof Lab.script == 'function') {
    lab = exports.lab = Lab.script();
  }
  global.expect = Lab.expect;
  global.describe = lab.describe;
  global.it = lab.it;
  global.before = lab.before;
  global.after = lab.after;
  global.beforeEach = lab.beforeEach;
  global.afterEach = lab.afterEach;

  global.it.skip = function() {};
  global.describe.skip = function() {};
};
