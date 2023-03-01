import React from 'react';

export function ArrayList( a ,  b) {
  var arr = []; var j = 0;
  for (let index = a; index < b; index++) {

      arr[j] = index;
      j++;

  }
  return arr;
}
