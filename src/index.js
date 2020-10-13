
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let rez=[];

  if (!Array.isArray(matrix)) {
    return rez;
  }

  matrix.forEach(function(item, index, array) {
    if (Array.isArray(item)) {
      if (index % 2 === 0) {
      item.forEach(function(item, index, array) {
        rez.push(item);
      });
    } else {
      item.reverse();
      item.forEach(function(item, index, array) {
        rez.push(item);
      });
    } 
    



  }
  else {
    rez.push(item);
  }
    


});

console.log(matrix);
console.log(rez);
  return rez;


}