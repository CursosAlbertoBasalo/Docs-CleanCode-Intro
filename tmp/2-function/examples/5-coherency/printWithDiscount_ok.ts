printWithDiscount({ price: 100 });

// ✅ Same level of abstraction
export function printWithDiscount(product: { price: number }) {
  const price = getPrice(product);
  const finalPrice = calculateFinalPrice(price);
  printPrice(finalPrice);
}

// ⚠️ Avoid nested complex calls
export function printWithDiscountOnLiner(product: { price: number }) {
  printPrice(calculateFinalPrice(getPrice(product)));
}

// low level functions

function getPrice(product: { price: number }) {
  return product.price;
}

function calculateFinalPrice(price: number) {
  const discount = 0.9;
  return price * discount;
}

function printPrice(price: number) {
  console.log('The price is ' + price);
}
