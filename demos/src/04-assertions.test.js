// matchers
test('Test obj', () => {
  const data = { name: 'Rogelio' };
  data.lastname = 'Nieto';
  expect(data).toEqual({ name: 'Rogelio', lastname: 'Nieto' });
});

test('valores null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('valores booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('valores string', () => {
  expect('Juanito').toMatch(/anit/);
});

test('valores array', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
