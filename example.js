var onstoptyping = require('./');

var inpt = document.createElement('input');
document.body.appendChild(inpt);
onstoptyping(inpt, 1000, function() {
  alert('Stopped!');
});
