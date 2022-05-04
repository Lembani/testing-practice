const stringLength = (str) => {
  if (str.length < 1 && str.length > 10) {
    throw Error(`${str} is too short or too long`);
  }
  const len = str.split('').length;
  return len;
};

module.exports = stringLength;