const { expect } = require('chai');
const LengthConverter = require('../src/index.js');
const {
  CONVERT_TO_CM,
  CONVERT_TO_M,
  CONVERT_TO_MILES,
  CONVERT_TO_SEA_MILES,
  CONVERT_TO_INCHES,
  CONVERT_TO_FOOT,
  MEASUREMENTS_NAME,
} = require('../const/convert');

const {
  convertToCm,
  convertToMeters,
  convertToMiles,
  convertToSeaMiles,
  convertToInches,
  convertToFoot,
} = LengthConverter;

const {
  CM,
  M,
  MILES,
  SEA_MILES,
  INCHES,
  FOOT,
} = MEASUREMENTS_NAME;

const convertToMeasurement = [
  convertToCm,
  convertToMeters,
  convertToMiles,
  convertToSeaMiles,
  convertToInches,
  convertToFoot,
];

const measurementsName = [
  'cm',
  'm',
  'miles',
  'sea miles',
  'inches',
  'foot',
];

describe('error check', () => {
  convertToMeasurement.forEach((item, i) => {
    it(`convert unknown measurement to ${measurementsName[i]}`, () => {
      expect(() => item(1, 'some value')).throw('Unknown measurement');
    });
    it(`convert negative value to ${measurementsName[i]}`, () => {
      expect(() => item(-100, `${measurementsName[i]}`)).throw('The value must be a positive number');
    });
  });
});

describe('convertToMeasurement', () => {
  describe('convertToCm', () => {
    Object.keys(CONVERT_TO_CM).forEach((key) => {
      it(`convert ${key} to ${CM}`, () => {
        expect(convertToCm(1, key)).equal(CONVERT_TO_CM[key]);
      });
    });
  });

  describe('convertToMeters', () => {
    Object.keys(CONVERT_TO_M).forEach((key) => {
      it(`convert ${key} to ${M}`, () => {
        expect(convertToMeters(1, key)).equal(CONVERT_TO_M[key]);
      });
    });
  });

  describe('convertToMiles', () => {
    Object.keys(CONVERT_TO_MILES).forEach((key) => {
      it(`convert ${key} to ${MILES}`, () => {
        expect(convertToMiles(1, key)).equal(CONVERT_TO_MILES[key]);
      });
    });
  });

  describe('convertToSeaMiles', () => {
    Object.keys(CONVERT_TO_SEA_MILES).forEach((key) => {
      it(`convert ${key} to ${SEA_MILES}`, () => {
        expect(convertToSeaMiles(1, key)).equal(CONVERT_TO_SEA_MILES[key]);
      });
    });
  });

  describe('convertToInches', () => {
    Object.keys(CONVERT_TO_INCHES).forEach((key) => {
      it(`convert ${key} to ${INCHES}`, () => {
        expect(convertToInches(1, key)).equal(CONVERT_TO_INCHES[key]);
      });
    });
  });

  describe('convertToFoot', () => {
    Object.keys(CONVERT_TO_FOOT).forEach((key) => {
      it(`convert ${key} to ${FOOT}`, () => {
        expect(convertToFoot(1, key)).equal(CONVERT_TO_FOOT[key]);
      });
    });
  });
});
