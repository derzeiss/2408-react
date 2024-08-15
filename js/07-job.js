export const randint = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(min + Math.random() * (max - min));
};

export const job = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(randint(10)), 2000);
  });

export const checkNumber = (num) =>
  new Promise((resolve, reject) => {
    if (typeof num !== 'number') return reject('error_');
    if (num % 2 === 1) return setTimeout(() => resolve('odd'), 1000);
    setTimeout(() => resolve('even'), 2000);
  });

export const checkNumber2 = (num) =>
  new Promise((resolve, reject) => {
    if (typeof num !== 'number') return reject(`Given value is not a number`);
    if (num > 5) return reject(num);
    if (num % 2 === 1) return setTimeout(() => resolve(num), 1000);
    setTimeout(() => resolve(num), 2000);
  });
