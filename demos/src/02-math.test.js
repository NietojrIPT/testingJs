const {
  sum, mult, divi, conca,
} = require('./02-math');

describe('Test for math', () => {
  describe('Test for suma', () => {
    test('add  1 + 3  should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });

  describe('Test for multiplicar', () => {
    test('add  2 * 3  should be 6', () => {
      const rta = mult(2, 3);
      expect(rta).toBe(6);
    });
  });

  describe('Test for dividir', () => {
    test('add  10 / 2  should be 5', () => {
      const rta = divi(10, 2);
      expect(rta).toBe(5);

      const rta2 = divi(5, 2);
      expect(rta2).toBe(2.5);
    });

    test('add  divide number for zero', () => {
      const rta = divi(10, 0);
      expect(rta).toBe(null);
    });
  });

  describe('Test for cadenas', () => {
    test('Concatenar Sr. con nombre Rogelio', () => {
      const cadena = conca('Sr', 'Rogelio');
      expect(cadena).toBe('Sr Rogelio');
    });
  });
});
