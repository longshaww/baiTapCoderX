//bài tập array.reduce
var orders = [
    { name: 'A', quantity: 2, unitPrice: 200 },
    { name: 'B', quantity: 1, unitPrice: 400 },
    { name: 'C', quantity: 5, unitPrice: 15 }
];
// dùng reduce để tính tông đơn hàng

var sumBill = orders.reduce(function(total, item) {
    return total + (item.unitPrice * item.quantity)
}, 0);
sumBill;