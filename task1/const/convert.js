const CONVERT_TO_CM = {
  cm: 1,
  m: 100,
  miles: 160934.4,
  seaMiles: 185200,
  inches: 2.54,
  foot: 30.48,
};

const CONVERT_TO_M = {
  cm: 1 / 100,
  m: 1,
  miles: 1609.344,
  seaMiles: 1852,
  inches: 1 / 39.37,
  foot: 1 / 3.281,
};

const CONVERT_TO_MILES = {
  cm: 1 / 160934.4,
  m: 1 / 1609.344,
  miles: 1,
  seaMiles: 11.151,
  inches: 1 / 63360,
  foot: 1 / 5280,
};

const CONVERT_TO_SEA_MILES = {
  cm: 1 / 185200,
  m: 1 / 1852,
  miles: 1 / 1.151,
  seaMiles: 1,
  inches: 1 / 72913.386,
  foot: 1 / 6076.115,
};

const CONVERT_TO_INCHES = {
  cm: 1 / 2.54,
  m: 39.37,
  miles: 63360,
  seaMiles: 72913.386,
  inches: 1,
  foot: 12,
};

const CONVERT_TO_FOOT = {
  cm: 1 / 30.48,
  m: 3.281,
  miles: 5280,
  seaMiles: 6076.115,
  inches: 1 / 39.37,
  foot: 1 / 12,
};

const MEASUREMENTS_NAME = {
  CM: 'cm',
  M: 'm',
  MILES: 'miles',
  SEA_MILES: 'seaMiles',
  INCHES: 'inches',
  FOOT: 'foot',
};

module.exports = {
  CONVERT_TO_CM,
  CONVERT_TO_M,
  CONVERT_TO_MILES,
  CONVERT_TO_SEA_MILES,
  CONVERT_TO_INCHES,
  CONVERT_TO_FOOT,
  MEASUREMENTS_NAME,
};
