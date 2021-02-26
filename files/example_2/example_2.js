const resEl = document.getElementById("res");

const x1 = prompt("Enter first number");
const x2 = prompt("Enter second number");

const res = x1 + x2;
resEl.innerHTML = res;

/* ============= Example 2  */
// Что не так с этой функцией

/* 
function trimLower(text) {
  return text.trim().toUpperCase();
}
trimLower("Hello");
trimLower(null);
*/
