export const handleCountryData = (object, exclude) => {
  return Object.keys(object).reduce((acc, current) => {
    if (!exclude.includes(current)) {
      return [...acc, { key: current, value: object[current] }];
    } else {
      return [...acc];
    }
  }, []);
};
