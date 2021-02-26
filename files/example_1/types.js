/* ============= typeof ================= */

var nonevar; // объявили переменную но не задали ей значение
var numVar = 22; // переменная типа number
var stringVar = "John"; // переменная типа string
var booleanVar = true; // переменная типа boolean
var nullVar = null; // переменная типа number
var symbolVar = Symbol("age");
var bigNumVar = 1022n;
var obVar = { id: 22, firstName: "Bill" };
var arrVar = [1, 2, 3];
function fn() {}

console.groupCollapsed("Types");

console.log("nonevar, typeof: ", typeof nonevar);
console.log("numVar=22, typeof: ", typeof numVar);
console.log('stringVar = "John", typeof: ', stringVar);
console.log("booleanVar = true, typeof: ", typeof booleanVar);
console.log("nullVar = null, typeof: ", typeof nullVar);
console.log("symbolVar = Symbol('age'), typeof: ", typeof symbolVar);
console.log("bigNumVar = 1022n, typeof: ", typeof bigNumVar);
console.log("obVar = {...}, typeof: ", typeof obVar);
console.log("arrVar = [1,2,3], typeof: ", typeof arrVar);
console.log("fn, typeof: ", typeof fn);
console.groupEnd();
/* ============ Number  ================== */
/*
--------------------------------------------------------
Тип        ! приводится в  true  ! приводится в  false |
--------------------------------------------------------
Boolean    !  true               !     false           |
--------------------------------------------------------
String     ! непустая строка     !       ""            |
--------------------------------------------------------
Number     !  ненулевое число    !      0, NaN         |
--------------------------------------------------------
Object     ! любой   object      !       null          |
--------------------------------------------------------
Undefined  !   n/a               !     undefined       |
--------------------------------------------------------
*/
console.groupCollapsed("Boolean");
var test = null;
//    test = "string";
//    test = "";
//	  test = "0";
//    test = 22;
//	  test = 0;
var boolTest = Boolean(test);

console.log("test: ", boolTest);
console.groupEnd();
/* ============= Number  ================= */
/* --------------------------------------------------------
Тип        !                                           |
--------------------------------------------------------
boolean    !  true -> 1    false -> 0                  |
--------------------------------------------------------
string     !   "123" -> 123                            |
           !   "00123" -> 123                          |
		   !   "1.45" -> 1.45                          |
		   !   "0001.23" -> 1.23                       |
		   !   "0xf" ->  15                            |
		   !   "" ->    0                              |
		   !   "a123" -> NaN   "1a" -> NaN             |
--------------------------------------------------------
null       !      0                                    |
--------------------------------------------------------
object     !  valueOf() и приведение к числу           |
           !  если нет valueOf() то  toString()        |
--------------------------------------------------------
undefined  !     NaN                                   |
--------------------------------------------------------
*/
console.groupCollapsed("Number");
console.log("Тип null -> " + Number(null)); // 0
console.log("Тип undefined -> " + Number(undefined)); // NaN
console.log("Строка '1' -> " + Number("1")); // 1
console.log("Строка '0000010' -> " + Number("0000010")); //10
console.log("Строка '-010' -> " + Number("-010")); //-10
console.log("Строка '01.23' -> " + Number("01.23")); //-10
console.log("Строка '0xf' -> " + Number("0xf")); //15
console.log("Пустая строка '' -> " + Number("")); // 0
console.log("Строка 'test' -> " + Number("test")); // NaN
console.log("Строка 't123' -> " + Number("t123")); // NaN
console.groupEnd();

/* ============================== */
/*
NaN - "not a number" это специальная числовая величина,
 которая показывает что операция проводимая с числами
 не возвращает числовой результат, то есть не является числом
*/

console.groupCollapsed("NaN");
// Любая операция с самим значением NaN возвращает результат  = NaN
console.log('"" + NaN => ', "" + NaN / 10);

// NaN не равно никакой величине, в том числе и самой NaN.
console.log("NaN == NaN  => " + (NaN == NaN));

/*
Функция isNaN() принимает любой тип и определяет
является переданная величина “not a number”.
*/
console.log("Число 10  =>  " + isNaN(10)); //false
console.log("значение NaN  =>  " + isNaN(NaN)); // true
console.log("Строка '10'  =>  " + isNaN("10")); //false
console.log("Строка 'true'  =>  " + isNaN("true")); //true
console.log("Значение true  =>  " + isNaN(true)); //false
console.groupEnd();

/* ============================== */
/* ============================== */

/* console.groupCollapsed("Number");
console.groupEnd(); */
