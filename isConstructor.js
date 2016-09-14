
function isConstructor(value, type) {
  return value == null ? false :
    type === value.constructor
}

module.exports = isConstructor;
