const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Person('Rogelio', 45, 1.83);
  });
  test('should return down', () => {
    // AAA
    // Arrange/Given Act/When Assert/Then
    // Arrange
    person.weight = 45;
    // Act/When
    const imc = person.calcIMC();
    // Assert/Then
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 60;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
