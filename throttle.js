//Throttling enforces a maximum number of times a function can be called over time. For example,
//“execute this function at most once every 100 milliseconds.”
//In other words: By using throttle, we don’t allow to our function to execute more than once every X milliseconds.

// as long as it continues to be invoked, raise on every interval
function throttle (func, interval) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function () {
      timeout = false;
    };
    if (!timeout) {
      func.apply(context, args)
      timeout = true;
      setTimeout(later, interval)
    }
  }
}
