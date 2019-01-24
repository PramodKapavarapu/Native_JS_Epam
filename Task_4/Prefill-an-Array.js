function add(n){
  var func = function(value){
    return add(n + value);
  };
  func.valueOf=function(){
    return n
  };
  return func;
}
