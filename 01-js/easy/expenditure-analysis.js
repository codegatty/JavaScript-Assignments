/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

// const transactions = [
//   {
//     itemName: "Milk",
//     category: "Groceries",
//     price: 60,
//     timestamp: 1708502400000,
//   },
//   {
//     itemName: "Bread",
//     category: "Groceries",
//     price: 40,
//     timestamp: 1708506000000,
//   },
//   {
//     itemName: "Movie Ticket",
//     category: "Entertainment",
//     price: 250,
//     timestamp: 1708510000000,
//   },
//   {
//     itemName: "Bus Ticket",
//     category: "Transport",
//     price: 30,
//     timestamp: 1708515000000,
//   },
//   {
//     itemName: "Petrol",
//     category: "Transport",
//     price: 500,
//     timestamp: 1708520000000,
//   },
//   {
//     itemName: "Netflix Subscription",
//     category: "Entertainment",
//     price: 499,
//     timestamp: 1708525000000,
//   },
// ];

function calculateTotalSpentByCategory(transactions) {
  const finder = [];
  const result = [];
  transactions.forEach((element) => {
    const category = element.category;
    if (finder.includes(category)) {
      const index = finder.indexOf(category);
      const oldData = result[index];
      const newSpentTotal = oldData.totalSpent + element.price;
      result[index] = { category: category, totalSpent: newSpentTotal };
    } else {
      finder.push(element.category);
      result.push({ category: category, totalSpent: element.price });
    }
  });

  return result;
}

//console.log(calculateTotalSpentByCategory(transactions));

//console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
