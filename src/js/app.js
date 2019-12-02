// // TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));
export default function findBy(a, b) {
    const field = a;
    const value = b;
    return function (element) {
      if (element[field].includes(value)) return true;
      return false;
    };
  }