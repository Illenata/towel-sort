module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  
  matrix.map((item, index) => {
    if (index % 2 !== 0) {
      return item.reverse();
    }
  });
  return [].concat(...matrix);
};