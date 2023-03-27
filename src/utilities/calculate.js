import Cosmetic from "../components/Cosmetic/Cosmetic";

const add = (first, second) => {
  return first + second;
};
const multiply = (first, second) => {
  return first * second;
};

const getTotalPrice = (products) => {
  const reducer = (previous, current) => previous + current.price;
  const total = products.reduce(reducer, 0);
  return total;
};

export { add, multiply, getTotalPrice as getTotal };
