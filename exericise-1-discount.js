/**
 *
 * @param {number} price El valor total de la compra
 * @returns {number} Devuelve los euros que le podemos aplicar de descuento
 */
function calculateDiscount(price) {
  let discount = 0;

  // Implementar Iteración 1A
  if (price >= 500 && price < 1000) {
    discount = price * 0.05;
  } else if (price >= 1000) {
     discount = price * 0.1;
  }
  return discount;
}
console.log("--A--");
console.log(calculateDiscount(1000)); // 100 , pues 100 es el 10% de 1000
console.log(calculateDiscount(100)); // 0, pues no llegamos al mínimo para obtener un descuento

console.log("--B--");
console.log(calculateDiscount(750)); // 37.95
// console.assert(calculateDiscount(1000)==100, 'El descuento debe ser de 100€'); // 100 , pues 100 es el 10% de 1000
// console.assert(calculateDiscount(100)==0, 'El precio no llega a 100, el descuento es 0'); // 0, pues no llegamos al mínimo


// - basePrice: Siempre va a ser un number positivo
// - voucher: Puede ser 0, 10 o 20. (es el cheque descuento). SIEMPRE va a ser alguno de estos 3 valores.

function calculateTotal(basePrice, voucher) {
    let shippingCosts = 5;
    let discount = calculateDiscount(basePrice);
    let total = basePrice - discount - voucher + shippingCosts;
    console.log("Gastos:", shippingCosts, " precio total: ", basePrice, " con descuento: ", basePrice - discount, " Total: ", total)
    return total;
}

console.log("--C--");

console.log("Compra de 750€ sin cheque descuento se le debería aplicar un 5% de descuento", calculateTotal(750, 0)) // 717.5

console.log("Compra de 1500 con un cheque descuento de 10€. Se le debería aplicar un 10% de descuento", calculateTotal(1500, 10)) // 1346
