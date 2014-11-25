onstoptyping
============

Fires an event when the user stops typing on an input or textarea, given a time interval.

Example
-------

```js
var inpt = document.querySelector('#myinput');
onstoptyping(inpt, 1000, function() {
  save();
});
```

License
-------

MIT
