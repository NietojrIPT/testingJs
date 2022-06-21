describe('group 1', () => {
  beforeAll(() => {
    // para ejecutar algo antes de los casos de prueba
    console.log('beforeAll');
  });

  afterAll(() => {
    // para ejecutar algo despues de los casos de prueba
    console.log('afterAll');
  });

  beforeEach(() => {
    // para ejecutar antes de cada test
    console.log('beforeEach');
  });

  afterEach(() => {
    // para ejecutar despues de cada test
    console.log('afterEach');
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('group 2', () => {
    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });

    test('case 4', () => {
      console.log('case 4');
      expect(2 + 3).toBe(5);
    });
  });
});
