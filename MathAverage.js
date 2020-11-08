
function average(arr) {
    // your code here!
    return Math.round(arr.reduce(function(a,b){
        return a+b;
    })/arr.length);
  }
  
  average([8,9,5]);
  