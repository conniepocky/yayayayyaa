function diffArray(arr1, arr2) {

    var waffles = arr1.concat(arr2)
  
    return waffles.filter(snape => !arr1.includes(snape) || !arr2.includes(snape))
  }
  
 console.log( diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));