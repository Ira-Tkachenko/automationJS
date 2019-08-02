const { expect } = require('chai');
const LengthConverter = require('../src/index.js');

describe('LengthConverter', () => {
  describe('convertToMeters', () => {
    it('convert meters to centimeters', () => {
      expect(LengthConverter.convertToMeters(16, 'cm')).equal(1600);
    });
    it('convert meters to meters', () => {
      expect(LengthConverter.convertToMeters(16, 'm')).equal(16);
    });
    it('convert meters to miles', () => {
      expect(LengthConverter.convertToMeters(1609.344, 'miles')).equal(1);
    });
    it('convert meters to sea miles', () => {
      expect(LengthConverter.convertToMeters(1852, 'sea miles')).equal(1);
    });
    it('convert meters to inches', () => {
      expect(LengthConverter.convertToMeters(1, 'inches')).equal(39.37);
    });
    it('convert meters to foot', () => {
      expect(LengthConverter.convertToMeters(1, 'foot')).equal(3.281);
    });
    it('convert meters to unknown measurement', () => {
      expect(() => LengthConverter.convertToMeters(1, 'some value')).throw('Unknown measurement');
    });
    it('convert meters to negative value', () => {
      expect(() => LengthConverter.convertToMeters(-100, 'cm')).throw('The value must be a positive number');
    });
  });
});
