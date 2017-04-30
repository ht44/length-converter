function convert(value, conversion) {
  const INPUT = parseFloat(value);
  if (Number.isNaN(INPUT)) {
    return '';
  }
  return conversion(INPUT).toFixed(2);
}

export default convert;
