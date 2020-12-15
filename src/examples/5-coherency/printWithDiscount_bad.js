printWithDiscount({ prod.price = 100 });

// ❌ high level and low level logic
function printWithDiscount(prod){
  const price = prod.price;
  const discount = 0.9;
  const finalPrice = price * discount;
  console.log(finalPrice);
}