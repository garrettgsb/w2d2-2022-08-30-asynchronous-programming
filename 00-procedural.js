function calculateBill(total, taxRate, diners) {
  const randomIndex = Math.floor(Math.random() * diners.length);
  console.log(`${diners[randomIndex]} will get the bill, which comes to ${totalBill * (1 + taxRate)}, plus the tip.`);
}

const totalBill = 83.50;
const taxRate = 0.14;
const diners = [
  "Alice",
  "Bob",
  "Carol",
  "Dean",
];

calculateBill(totalBill, taxRate, diners);
