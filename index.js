module.exports = function(Lab) {
  global.expect = Lab.expect;
  global.describe = Lab.describe;
  global.it = Lab.it;
  global.before = Lab.before;
  global.after = Lab.after;
  global.beforeEach = Lab.beforeEach;
  global.afterEach = Lab.afterEach;

  global.it.skip = function() {};
  global.describe.skip = function() {};
};
