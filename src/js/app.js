/* eslint-disable func-names */
export default function findBy(a, b) {
  const field = a;
  const value = b;
  return function (element) {
    if (element[field] !== undefined && element[field].includes(value)) return true;
    return false;
  };
}

// такой вариант не проходит: includes не читается.

// const findBy = (a, b) => {
//   const field = a;
//   const value = b;
//   return (element) => {
//     if (element[field].includes(value)) return true;
//     return false;
//   };
// };

// export default findBy();
