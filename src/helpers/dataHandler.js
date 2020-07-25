export const handleMovieData = (object, allowed) => {
  return Object.keys(object).reduce((acc, current) => {
    if (allowed.includes(current)) {
      return [...acc, { key: current, value: object[current] }];
    } else {
      return [...acc];
    }
  }, []);
};
