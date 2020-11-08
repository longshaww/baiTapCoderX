/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */

// pop , push , unshift , shift , concat , splice , spice
var myDog = ['LongXu', 'Husky',' Poodle']
var myCat = ['BritishCat','Vietnamese Cat','3 line']

function concat2Array()
{
var concat = myDog.concat(myCat);
return concat; 
}

function popMyDogArr()
{
myDog.pop();
return myDog;
}

function shiftMyArray()
{
  myDog.shift();
  return myDog;
}

function unShiftMyArray()
{
  myDog.unshift('Wolf','Corgi');
  return myDog;
}

function pushMyArray()
{
  myDog.push('Chihuahua','Sausage')
  return myDog;
}
function sliceMyArray()
{
  var slice = myCat.slice(0,2);
  return slice;
}
function spliceMyArray()
{
  var splice = myCat.splice(2,0,'Garfield')
  return myCat;
}

//Test
console.log('Mảng myDog ban đầu')
console.log(myDog);
console.log('Xóa đi phần tử cuối trong mảng myDog')
console.log(popMyDogArr()); //pop xóa đi poodle là phần tử cuối trong mảng Dog
console.log('===============================================');
console.log('Concat 2 mảng myDog và myCat')
console.log(concat2Array()); //concat 2 mảng myDog và myCat
console.log('Đã xóa đi phần tử đầu và cuối nên myDog chỉ có phần tử ở giữa là Husky')
console.log(shiftMyArray()); // shift ( xóa đi phần tử đầu tiên của mảng)
console.log('unshift thêm wolf và corgi vào đầu mảng')
console.log(unShiftMyArray());// unshift thêm wolf và corgi vào đầu mảng
console.log('push thêm chiahuahua và sausage vào cuối mảng')
console.log(pushMyArray()); // push thêm chiahuahua và sausage vào cuối mảng
console.log('=======================================')
console.log('slice là 1 bản clone mảng có giá trị từ begin đến end')
console.log(sliceMyArray());
console.log('splice là 1 phương thức đặc biệt trong đó giá trị đầu tiên là vị trí phần từ begin , giá trị thứ 2 là số phần tử muốn xóa , giá trị thứ 3 trở đi là item thêm vào')
console.log(spliceMyArray());
