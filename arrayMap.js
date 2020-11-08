var rectangles =  [
    { width : 10 , height:5 },
    { width : 10 , height:20},
    { width : 4 , height:16}
  ];
  // dùng method map để biến đổi rectangle thành 1 array mới gồm có diện tích của các hình trên
  
  
  var dienTich = rectangles.map(function(x){return x.width * x.height});
  dienTich;
  