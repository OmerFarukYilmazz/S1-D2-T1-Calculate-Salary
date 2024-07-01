const sumPersonelSalaries = require('./index.js');

describe('sumPersonelSalaries', () => {
  test('Tüm maaşlar pozitif ve normal değerlerde olduğunda doğru toplamı döndürüyor mu?', () => {
    expect(sumPersonelSalaries(3000, 4000, 3500, 4500, 5000)).toBe(20000);
  });

  test('Maaşlardan biri çok yüksek olduğunda doğru toplamı döndürüyor mu?', () => {
    expect(sumPersonelSalaries(3000, 4000, 3500, 4500, 20000)).toBe(35000);
  });

  test('Tüm maaşlar sıfır olduğunda toplamın sıfır olduğunu doğruluyor mu?', () => {
    expect(sumPersonelSalaries(0, 0, 0, 0, 0)).toBe(0);
  });

  test('Maaşlar arasında ondalıklı sayılar olduğunda doğru toplamı döndürüyor mu?', () => {
    expect(sumPersonelSalaries(3000.75, 4000.5, 3500.25, 4500.0, 5000.1)).toBe(
      20001.6
    );
  });
});