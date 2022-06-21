function sum(a, b) {
  return a + b;
}
function mult(a, b) {
  return a * b;
}

function divi(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function conca(orac1, orac2) {
  return (`${orac1} ${orac2}`);
}

module.exports = {
  sum,
  mult,
  divi,
  conca,
};
