//Task 4
function findElement(arr) {
  var n = arr.length;
  for (i = 1; i < n; i++) {
    let sumLeft = 0;
    for (j = i - 1; j >= 0; j--) {
      sumLeft += arr[j];
    }

    let sumRight = 0;
    for (k = i + 1; k < n; k++) {
      sumRight += arr[k];
    }

    if (sumLeft === sumRight) {
      console.log("Eleman:", arr[i]);
      console.log("Index:", i);
      return;
    }
  }
  console.log("Eleman bulunamadı.");
  return;
}
