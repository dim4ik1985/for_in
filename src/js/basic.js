export default function orderByProps(obj, sortingOrder) {
  const arrSorted = [];
  Object.entries(obj).sort((a, b) => (a > b ? 1 : -1)).forEach((el) => {
    if (sortingOrder.indexOf(el[0]) === -1) {
      arrSorted.push(el[0]);
    }
  });

  const arrSortedResult = sortingOrder.concat(arrSorted);
  const cardHeroes = [];

  // eslint-disable-next-line guard-for-in
  for (const item in arrSortedResult) {
    cardHeroes.push({ key: arrSortedResult[item], value: obj[arrSortedResult[item]] });
  }
  return cardHeroes;
}
