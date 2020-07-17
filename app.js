//1

let input = document.getElementById("input");
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let a = input.value;
    let arr = a.split('"');
    // let reverse = arr.reverse();
    // console.log(reverse);
    let length = arr.length - 1;
    let map = arr.map((value, index) => {
      return arr[length - index];
    });
    console.log(map);
  }
});

// 2;

let listNumber = [128, 2, 4, 16, 2, 128, 64, 4, 7, 4, 64];
// let newListNumber = [];
let newListNumber = listNumber.map((value, index, arr) => {
  let boolean = arr.indexOf(value) === index;
  if (boolean === true) {
    return value;
  } else return undefined;
});
let length = newListNumber.length;
for (let i = 0; i < length; i++) {
  for (let j = i + 1; j < length; j++) {
    if (newListNumber[i] * newListNumber[j] == 256) {
      console.log(
        `${newListNumber[i]} và  ${newListNumber[j]} tại vị trí ${i + 1} và ${
          j + 1
        } `
      );
    }
  }
}




