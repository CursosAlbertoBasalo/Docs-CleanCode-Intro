printWithDiscount({ price: 100 });

// ✅ Same level of abstraction
function printWithDiscount(product) {
  const price = product.price;
  const finalPrice = calculateFinalPrice(price);
  printText(finalPrice);
}

function calculateFinalPrice(price) {
  const discount = 0.9;
  return price * discount;
}

function printText(text) {
  console.log(text);
}
