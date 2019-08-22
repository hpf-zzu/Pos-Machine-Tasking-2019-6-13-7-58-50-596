const {countProducts,fetchProduct,assemble,countTotalPrice,generatedReceiptItem} = require('../main');
// it ('should add two numbers', () => {
//     expect(add(2, 3)).toBe(5);
// });

// it( 'should count codes',() => {
//     //given
//     const codes = ['0003','0001','0003'];
//     //when
//     const countedCodes = countProducts(codes);
//     console.log(countedCodes);
//     //then
//     //expect(countecodes[0].count).toBe(2);
//     expect(countedCodes[0].count).toBe(2);
// }
// );

// it('should fetch product', () => {
//     //given
//     const db = [
//         {"id": "0001", "name" : "Coca Cola", "price": 3},
//         {"id": "0002", "name" : "Diet Coke", "price": 4}
//     ];
//     const code = '0001';
//     //when
//     const product = fetchProduct(db,code);
//     //then
//     expect(product[0].price).toBe(3);

// });

 it('validate result', () =>{
//     var codes = generatedReceiptItems(['0003','0003','0001']);
//     console.log("generatedReceiptItems:",codes);
//     [
//         {name: 'Pepsi-Cola', price: 5, count: 2},
//         {name: 'Coca Cola', price: 3, count: 1}
//     ]

// }
// );
// var assembleInput = [
//     {name: 'Pepsi-Cola', price: 5, count: 2},
//     {name: 'Coca Cola', price: 3, count: 1}
// ];
// var receiptText = assemble(assembleInput,13);
// console.log(receiptText);

// var totalPrice = countTotalPrice(Input);
// console.log(totalPrice);
const codes = ['0003','0001','0003'];
console.log(fetchProduct('0001'));
var out = countProducts(codes);
console.log(out);

var out1 = generatedReceiptItem(codes);

console.log(out1);

var sum = countTotalPrice(out1);
var out2 = assemble(out1,sum);
console.log(out2);


})

