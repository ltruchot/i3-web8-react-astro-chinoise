import { animals } from "../data/animals";

export const getSign = y => {
  const rest = y % 12;
  return animals[rest];
};
