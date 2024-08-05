module.exports = function check(str, bracketsConfig) {
  let oldStringLength;

  do {
    oldStringLength = str.length;

    bracketsConfig.forEach((config) => {
      str = str.replaceAll(config.join(""), "");
    });
  } while (str.length < oldStringLength);

  return str.length === 0;
};
