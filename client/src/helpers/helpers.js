export const isValidDollarFigure = function (str) {
  if (str.length === 0) return false;
  const decimalIndex = str.indexOf('.');

  if (decimalIndex != -1 && str.length - 1 - decimalIndex > 2) {
    return false;
  }

  return !isNaN(str);
};

export const round = function (number, precision) {
  var shift = function (number, precision, reverseShift) {
    if (reverseShift) {
      precision = -precision;
    }
    var numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, precision, false)), precision, true);
};

export const toDecimalString = function (num, decimalPoints) {
  num = num.toString();
  const decimalIndex = num.indexOf('.');

  return decimalIndex == -1
    ? `${num}.${Array(decimalPoints + 1).join('0')}`
    : `${num}${Array(decimalPoints + 1 - (num.length - decimalIndex - 1)).join('0')}`;

};
