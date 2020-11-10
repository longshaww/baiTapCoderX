var math = {
    add: function(a, b) {
      return a + b;
    },
    sum: function(arr)
    {
      var s = 0
   for( i of arr)
   {
     s += i;
   }
   return s;
  },
  }
  
  
  // cách 2
  /*var math = {
    add: function(a, b) {
      return a + b;
    },
    sum: function(arr){
      return arr.reduce(function(sum, item){return sum + item},0);
    }
  }; */
  module.exports = math;