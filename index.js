function del (klass, keys) {
  for (var i = 0, len = keys.length; i < len; i++) {
    delete klass[keys[i]]
  }
}

del(Array.prototype,
  ['every', 'filter', 'forEach', 'indexOf', 'lastIndexOf', 'map', 'slice',
    'some', 'sort', 'reduce', 'reduceRight', 'push', 'join'])
del(Date.prototype,
  ['toJSON', 'toISOString'])
del(Function.prototype,
  ['bind'])
del(Number.prototype,
  ['toFixed', 'toPrecision'])
del(String.prototype,
  ['split', 'trim', 'lastIndexOf'])
del(RegExp.prototype,
  ['toString'])
del(Object,
  ['keys', 'assign', 'getPrototypeOf', 'getOwnPropertyNames', 'isSealed',
    'isFrozen', 'freeze', 'isExtensible', 'defineProperty',
    'getOwnPropertyDescriptor', 'defineProperties', 'seal',
    'preventExtensions'])
del(Array,
  ['isArray'])
del(Date,
  ['now', 'parse'])
del(this,
  ['Map', 'WeakMap', 'Symbol'])
