var onstop = require('onstop');

module.exports = function(el, time, fn) {
  var oninput = onstop(time, fn);
  el.addEventListener('input', oninput);
};
