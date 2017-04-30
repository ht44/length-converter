function validateUnit(str) {
  const UNITS = [
    'kilometers',
    'meters',
    'centimeters',
    'miles',
    'yards',
    'feet',
    'inches'
  ];
  return UNITS.includes(str);
}

export default validateUnit;
