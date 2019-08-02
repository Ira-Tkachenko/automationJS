class LengthConverter {
  // static convertToCm(value, measurement) {
  // }
  static convertToMeters(value, measurement) {
    if (value < 0) {
      throw new Error('The value must be a positive number');
    }
    switch (measurement) {
      case 'cm':
        return value * 100;
      case 'm':
        return value;
      case 'miles':
        return value / 1609.344;
      case 'sea miles':
        return value / 1852;
      case 'inches':
        return value * 39.37;
      case 'foot':
        return value * 3.281;
      default:
        throw new Error('Unknown measurement');
    }
  }
  // static convertToMiles(value, measurement) {
  // }
  // static convertToSeaMiles(value, measurement) {
  // }
  // static convertToInches(value, measurement) {
  // }
  // static convertToFoot(value, measurement) {
  // }
}

const v = LengthConverter.convertToMeters(1609.344, 'miles'); // 1
console.log(v);

module.exports = LengthConverter;
