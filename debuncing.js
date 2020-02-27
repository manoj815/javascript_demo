
//Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called.
//For example, “execute this function only if 100 milliseconds have passed without it being called.”


// as long as it continues to be invoked, it will not be triggered
function debounce (func, interval) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, interval || 200);
  }
}
