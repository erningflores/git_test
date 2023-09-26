/*
const x = "4";
let y = Number(x);
y++;
console.log(y);



function updateBtn(){
const btn = document.querySelector("button");
const txt = document.querySelector("p");
   if(txt.innerHTML === "The machine is stopped."){
      btn.textContent = "Stop machine";
      txt.textContent = "The machine has started!";
   }else {
      btn.textContent = "Start machine";
      txt.textContent = "The machine is stopped.";
   }
}
*/

//TASK AFTER READ
//task 1
let  a = 1, b = 1;
let c = ++a; //? c = 2
let d = b++; //? d = 1
console.log(`c = ${c} and d = ${d}`);
//task2
a =2;
let x = 1 + (a *= 2); // a = 4; x = 5;
console.log(`a = ${a} and x = ${x}`);
//task3
let arr = [];
arr[0] = "" + 1 + 0; // "10"
arr[1] = "" - 1 + 0; // -1
arr[2] = true + false; // 1
arr[3] = 6 + "3"; // "63"
arr[4] = "2" * "3"; // 6
arr[5] = 4 + 5 + "px"; // "45px" ---------- 9px
arr[6] = "$" + 4 + 5; // "$45"
arr[7] = "4" - 2; // 2
arr[8] = "4px" - 2; // nan ------------ NAN
arr[9] = "  -9  " + 5; // "  -9  5"
arr[10] = "  -9  " - 5;// nan ----------- -14
arr[11] = null + 1; // null ------------- 1
arr[12] = undefined + 1; // undefined -------NAN
arr[13] = " \t \n" - 2; // nan  ------- -2

for(let y = 0; y < 14; y++){
   console.log(`${y} = ${arr[y]}`);
}

//task 4
/*
let aa = prompt("First number?", 1);
let bb = prompt("Second number?", 2);
aa = Number(aa);
bb = Number(bb);
alert(aa + bb);
*/

//assignment
console.log(23 + 97);
let arr1 = [23, 24, 25, 26, 27 ,28];
let sum = 0;
for(let i of arr1){
   sum += i;
}
console.log(`sum is ${sum}`);

let x3 = (4 + 6 + 9)/77;
console.log(`
   (10 + 9)/77
   19/77
   answer = ${x3}
`);

let a4 = 10;
console.log(a4);
console.log(9 * a4);
let b4 = 7 * a4;
console.log(b4);

const max = 57;
let actual = max - 13;
let percentage = actual/max;
console.log(percentage);
