printWithDiscount({ price: 100 });

// ❌ high level and low level logic mixed
function printWithDiscount(prod: { price: any }): void {
  const price = prod.price;
  const discount = 0.9;
  const finalPrice = price * discount;
  console.log(finalPrice);
}
