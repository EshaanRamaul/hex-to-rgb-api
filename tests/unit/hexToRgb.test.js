const hexToRgb = require('../../src/utils/hexToRgb');

describe('hexToRgb (unit)', () => {
  test('converts 6-digit uppercase with #', () => {
    expect(hexToRgb('#FFAABB')).toEqual({ hex: '#FFAABB', rgb: [255, 170, 187] });
  });

  test('converts 6-digit lowercase without #', () => {
    expect(hexToRgb('ffaabb')).toEqual({ hex: '#FFAABB', rgb: [255, 170, 187] });
  });

  test('converts 3-digit shorthand', () => {
    expect(hexToRgb('#FAB')).toEqual({ hex: '#FFAABB', rgb: [255, 170, 187] });
  });

  test('throws on invalid length', () => {
    expect(() => hexToRgb('FFFF')).toThrow(/length/i);
  });

  test('throws on invalid characters', () => {
    expect(() => hexToRgb('GGG')).toThrow(/characters/i);
  });

  test('throws on missing value', () => {
    expect(() => hexToRgb()).toThrow(/Missing hex parameter/i);
  });
});
