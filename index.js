const deepEqual = function (first, second) {
    if (first=== second) {
      return true;
    }
    else if ((typeof first == "object" && first != null) && (typeof second == "object" && second != null)) {
      if (Object.keys(first).length != Object.keys(second).length)
        return false;
  
      for (var val in first) {
        const y_elem=Object.keys(second)
        if (y_elem.includes(val))
        {  
          if (! deepEqual(first[val], second[val]))
            return false;
        }
        else
          return false;
      }
      
      return true;
    }
    else 
      return false;
  }


console.log(deepEqual(1, 1));
console.log(deepEqual(1, "1"));
console.log(deepEqual(null, null));
console.log(deepEqual(null, undefined));
console.log(deepEqual([], []));
console.log(deepEqual({}, {}));
console.log(deepEqual([], {}));
console.log(deepEqual({ a: 123, b: { c: [4, 5, 6] } }, { a: 123, b: { c: [4, 5, 6] } }));
console.log(deepEqual({ a: 123, b: { c: [4, 5, 6] } }, { b: { c: [4, 5, 6] } }));
console.log(deepEqual({ a: 123, b: { c: [4, 5, 6] } }, { a: 123, b: { c: [4, "5", 6] } }));
console.log(deepEqual([1, 2, [3, 4]], [1, 2, [3, 4]]));
console.log(deepEqual([1, 2, [3, 4, { a: 'abc' }]], [1, 2, [3, 4, { a: 'abc' }]]));
