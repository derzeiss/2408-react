import { checkNumber, checkNumber2, job } from './07-job.js';

const testJob = () => {
  job().then(console.log);
  job().then(console.log);
  job().then(console.log);
};

const testCheckNumber = () => {
  const testCases = ['test', 1, 2];
  testCases.forEach((val) => checkNumber(val).then(console.log).catch(console.error));
};

const testChaining1 = () => {
  for (let i = 0; i < 10; i++) {
    job().then(checkNumber).then(console.log);
  }
};

const testChaining2 = () => {
  for (let i = 0; i < 10; i++) {
    job()
      .then(checkNumber2)
      .then((num) => console.log(`${num} * 2 = ${num * 2}`))
      .catch((err) => console.log('Number is greater then 5.\nOriginal error:', err));
  }
};

testChaining2();
