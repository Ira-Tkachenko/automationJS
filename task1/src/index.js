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
  CM,
  M,
  MILES,
  SEA_MILES,
  INCHES,
  FOOT,
} = MEASUREMENTS_NAME;

function convertToMeasurement(value, measurement, CONVERT_TO_MEASUREMENT) {
  const {
    cm,
    m,
    miles,
    seaMiles,
    inches,
    foot,
  } = CONVERT_TO_MEASUREMENT;

  if (value === null || value === undefined || value < 0) {
    throw new Error('The value must be a positive number');
  }
  switch (measurement) {
    case CM:
      return value * cm;
    case M:
      return value * m;
    case MILES:
      return value * miles;
    case SEA_MILES:
      return value * seaMiles;
    case INCHES:
      return value * inches;
    case FOOT:
      return value * foot;
    default:
      throw new Error('Unknown measurement');
  }
}

class LengthConverter {
  static convertToCm(value, measurement) {
    return convertToMeasurement(value, measurement, CONVERT_TO_CM);
  }

  static convertToMeters(value, measurement) {
    return convertToMeasurement(value, measurement, CONVERT_TO_M);
  }

  static convertToMiles(value, measurement) {
    return convertToMeasurement(value, measurement, CONVERT_TO_MILES);
  }

  static convertToSeaMiles(value, measurement) {
    return convertToMeasurement(value, measurement, CONVERT_TO_SEA_MILES);
  }

  static convertToInches(value, measurement) {
    return convertToMeasurement(value, measurement, CONVERT_TO_INCHES);
  }

  static convertToFoot(value, measurement) {
    return convertToMeasurement(value, measurement, CONVERT_TO_FOOT);
  }
}

const convertToMeters = LengthConverter.convertToMeters(1, 'miles'); // 1609.344
console.log(convertToMeters);

const convertToCm = LengthConverter.convertToCm(1, 'miles'); // 160934.4
console.log(convertToCm);

module.exports = LengthConverter;
