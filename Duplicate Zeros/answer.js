/**
 * @param {number[]} 
 * @return {number[]}  
 */
 var duplicateZeros = function (arr) {
    const arrCopy = [...arr];
    let additional = 1;
    for (let i = 0; i < arrCopy.length; i++) {
      if (arrCopy[i] === 0) {
        arr.splice(i + additional, 0, 0);
        additional += 1;
      }
    }
    arr.splice(arrCopy.length, arr.length);
  };