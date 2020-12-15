printWithDiscount({ prod.price = 100 });

// ✅ Same level of abstraction
function printWithDiscount(prod) {
  const price = prod.price;
  const finalPrice = calcFinalPrice(price);
  print(finalPrice);
}

function calcFinalPrice(price) {
  const discount = 0.9;
  return price * discount;
}

function print(text) {
  console.log(text);
}