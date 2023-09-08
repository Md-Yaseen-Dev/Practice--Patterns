function numbering(row, column) {
  let str = "";
  for (i = 0; i < row; i++) {
    let num = 0;
    for (j = 1; j <= column; j++) {
      if (j % 2 == 0) {
        num +=  row*2 -1 ;
        str += num - i + " ";
      } else {
        num++;
        str += num + i + " ";
      }
    }

    str += "\n";
  }
  return str;
}

console.log(numbering(4, 5));
console.log(numbering(6, 5));

