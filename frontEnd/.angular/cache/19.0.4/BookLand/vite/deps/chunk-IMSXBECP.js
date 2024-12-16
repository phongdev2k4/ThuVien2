// node_modules/ts-custom-error/dist/custom-error.mjs
function fixProto(target, prototype) {
  var setPrototypeOf = Object.setPrototypeOf;
  setPrototypeOf ? setPrototypeOf(target, prototype) : target.__proto__ = prototype;
}
function fixStack(target, fn) {
  if (fn === void 0) {
    fn = target.constructor;
  }
  var captureStackTrace = Error.captureStackTrace;
  captureStackTrace && captureStackTrace(target, fn);
}
var __extends = /* @__PURE__ */ function() {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) {
        if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      }
    };
    return _extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var CustomError = function(_super) {
  __extends(CustomError2, _super);
  function CustomError2(message, options) {
    var _newTarget = this.constructor;
    var _this = _super.call(this, message, options) || this;
    Object.defineProperty(_this, "name", {
      value: _newTarget.name,
      enumerable: false,
      configurable: true
    });
    fixProto(_this, _newTarget.prototype);
    fixStack(_this);
    return _this;
  }
  return CustomError2;
}(Error);

// node_modules/@zxing/library/esm/core/Exception.js
var __extends2 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Exception = (
  /** @class */
  function(_super) {
    __extends2(Exception2, _super);
    function Exception2(message) {
      if (message === void 0) {
        message = void 0;
      }
      var _this = _super.call(this, message) || this;
      _this.message = message;
      return _this;
    }
    Exception2.prototype.getKind = function() {
      var ex = this.constructor;
      return ex.kind;
    };
    Exception2.kind = "Exception";
    return Exception2;
  }(CustomError)
);
var Exception_default = Exception;

// node_modules/@zxing/library/esm/core/ArgumentException.js
var __extends3 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ArgumentException = (
  /** @class */
  function(_super) {
    __extends3(ArgumentException2, _super);
    function ArgumentException2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ArgumentException2.kind = "ArgumentException";
    return ArgumentException2;
  }(Exception_default)
);
var ArgumentException_default = ArgumentException;

// node_modules/@zxing/library/esm/core/IllegalArgumentException.js
var __extends4 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var IllegalArgumentException = (
  /** @class */
  function(_super) {
    __extends4(IllegalArgumentException2, _super);
    function IllegalArgumentException2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    IllegalArgumentException2.kind = "IllegalArgumentException";
    return IllegalArgumentException2;
  }(Exception_default)
);
var IllegalArgumentException_default = IllegalArgumentException;

// node_modules/@zxing/library/esm/core/BinaryBitmap.js
var BinaryBitmap = (
  /** @class */
  function() {
    function BinaryBitmap2(binarizer) {
      this.binarizer = binarizer;
      if (binarizer === null) {
        throw new IllegalArgumentException_default("Binarizer must be non-null.");
      }
    }
    BinaryBitmap2.prototype.getWidth = function() {
      return this.binarizer.getWidth();
    };
    BinaryBitmap2.prototype.getHeight = function() {
      return this.binarizer.getHeight();
    };
    BinaryBitmap2.prototype.getBlackRow = function(y, row) {
      return this.binarizer.getBlackRow(y, row);
    };
    BinaryBitmap2.prototype.getBlackMatrix = function() {
      if (this.matrix === null || this.matrix === void 0) {
        this.matrix = this.binarizer.getBlackMatrix();
      }
      return this.matrix;
    };
    BinaryBitmap2.prototype.isCropSupported = function() {
      return this.binarizer.getLuminanceSource().isCropSupported();
    };
    BinaryBitmap2.prototype.crop = function(left, top, width, height) {
      var newSource = this.binarizer.getLuminanceSource().crop(left, top, width, height);
      return new BinaryBitmap2(this.binarizer.createBinarizer(newSource));
    };
    BinaryBitmap2.prototype.isRotateSupported = function() {
      return this.binarizer.getLuminanceSource().isRotateSupported();
    };
    BinaryBitmap2.prototype.rotateCounterClockwise = function() {
      var newSource = this.binarizer.getLuminanceSource().rotateCounterClockwise();
      return new BinaryBitmap2(this.binarizer.createBinarizer(newSource));
    };
    BinaryBitmap2.prototype.rotateCounterClockwise45 = function() {
      var newSource = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
      return new BinaryBitmap2(this.binarizer.createBinarizer(newSource));
    };
    BinaryBitmap2.prototype.toString = function() {
      try {
        return this.getBlackMatrix().toString();
      } catch (e) {
        return "";
      }
    };
    return BinaryBitmap2;
  }()
);
var BinaryBitmap_default = BinaryBitmap;

// node_modules/@zxing/library/esm/core/ChecksumException.js
var __extends5 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ChecksumException = (
  /** @class */
  function(_super) {
    __extends5(ChecksumException2, _super);
    function ChecksumException2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ChecksumException2.getChecksumInstance = function() {
      return new ChecksumException2();
    };
    ChecksumException2.kind = "ChecksumException";
    return ChecksumException2;
  }(Exception_default)
);
var ChecksumException_default = ChecksumException;

// node_modules/@zxing/library/esm/core/Binarizer.js
var Binarizer = (
  /** @class */
  function() {
    function Binarizer2(source) {
      this.source = source;
    }
    Binarizer2.prototype.getLuminanceSource = function() {
      return this.source;
    };
    Binarizer2.prototype.getWidth = function() {
      return this.source.getWidth();
    };
    Binarizer2.prototype.getHeight = function() {
      return this.source.getHeight();
    };
    return Binarizer2;
  }()
);
var Binarizer_default = Binarizer;

// node_modules/@zxing/library/esm/core/util/System.js
var System = (
  /** @class */
  function() {
    function System2() {
    }
    System2.arraycopy = function(src, srcPos, dest, destPos, length) {
      while (length--) {
        dest[destPos++] = src[srcPos++];
      }
    };
    System2.currentTimeMillis = function() {
      return Date.now();
    };
    return System2;
  }()
);
var System_default = System;

// node_modules/@zxing/library/esm/core/IndexOutOfBoundsException.js
var __extends6 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var IndexOutOfBoundsException = (
  /** @class */
  function(_super) {
    __extends6(IndexOutOfBoundsException2, _super);
    function IndexOutOfBoundsException2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    IndexOutOfBoundsException2.kind = "IndexOutOfBoundsException";
    return IndexOutOfBoundsException2;
  }(Exception_default)
);
var IndexOutOfBoundsException_default = IndexOutOfBoundsException;

// node_modules/@zxing/library/esm/core/ArrayIndexOutOfBoundsException.js
var __extends7 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ArrayIndexOutOfBoundsException = (
  /** @class */
  function(_super) {
    __extends7(ArrayIndexOutOfBoundsException2, _super);
    function ArrayIndexOutOfBoundsException2(index, message) {
      if (index === void 0) {
        index = void 0;
      }
      if (message === void 0) {
        message = void 0;
      }
      var _this = _super.call(this, message) || this;
      _this.index = index;
      _this.message = message;
      return _this;
    }
    ArrayIndexOutOfBoundsException2.kind = "ArrayIndexOutOfBoundsException";
    return ArrayIndexOutOfBoundsException2;
  }(IndexOutOfBoundsException_default)
);
var ArrayIndexOutOfBoundsException_default = ArrayIndexOutOfBoundsException;

// node_modules/@zxing/library/esm/core/util/Arrays.js
var __values = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Arrays = (
  /** @class */
  function() {
    function Arrays2() {
    }
    Arrays2.fill = function(a, val) {
      for (var i = 0, len = a.length; i < len; i++) a[i] = val;
    };
    Arrays2.fillWithin = function(a, fromIndex, toIndex, val) {
      Arrays2.rangeCheck(a.length, fromIndex, toIndex);
      for (var i = fromIndex; i < toIndex; i++) a[i] = val;
    };
    Arrays2.rangeCheck = function(arrayLength, fromIndex, toIndex) {
      if (fromIndex > toIndex) {
        throw new IllegalArgumentException_default("fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")");
      }
      if (fromIndex < 0) {
        throw new ArrayIndexOutOfBoundsException_default(fromIndex);
      }
      if (toIndex > arrayLength) {
        throw new ArrayIndexOutOfBoundsException_default(toIndex);
      }
    };
    Arrays2.asList = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return args;
    };
    Arrays2.create = function(rows, cols, value) {
      var arr = Array.from({
        length: rows
      });
      return arr.map(function(x) {
        return Array.from({
          length: cols
        }).fill(value);
      });
    };
    Arrays2.createInt32Array = function(rows, cols, value) {
      var arr = Array.from({
        length: rows
      });
      return arr.map(function(x) {
        return Int32Array.from({
          length: cols
        }).fill(value);
      });
    };
    Arrays2.equals = function(first, second) {
      if (!first) {
        return false;
      }
      if (!second) {
        return false;
      }
      if (!first.length) {
        return false;
      }
      if (!second.length) {
        return false;
      }
      if (first.length !== second.length) {
        return false;
      }
      for (var i = 0, length_1 = first.length; i < length_1; i++) {
        if (first[i] !== second[i]) {
          return false;
        }
      }
      return true;
    };
    Arrays2.hashCode = function(a) {
      var e_1, _a2;
      if (a === null) {
        return 0;
      }
      var result = 1;
      try {
        for (var a_1 = __values(a), a_1_1 = a_1.next(); !a_1_1.done; a_1_1 = a_1.next()) {
          var element = a_1_1.value;
          result = 31 * result + element;
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (a_1_1 && !a_1_1.done && (_a2 = a_1.return)) _a2.call(a_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return result;
    };
    Arrays2.fillUint8Array = function(a, value) {
      for (var i = 0; i !== a.length; i++) {
        a[i] = value;
      }
    };
    Arrays2.copyOf = function(original, newLength) {
      return original.slice(0, newLength);
    };
    Arrays2.copyOfUint8Array = function(original, newLength) {
      if (original.length <= newLength) {
        var newArray = new Uint8Array(newLength);
        newArray.set(original);
        return newArray;
      }
      return original.slice(0, newLength);
    };
    Arrays2.copyOfRange = function(original, from, to) {
      var newLength = to - from;
      var copy = new Int32Array(newLength);
      System_default.arraycopy(original, from, copy, 0, newLength);
      return copy;
    };
    Arrays2.binarySearch = function(ar, el, comparator) {
      if (void 0 === comparator) {
        comparator = Arrays2.numberComparator;
      }
      var m = 0;
      var n = ar.length - 1;
      while (m <= n) {
        var k = n + m >> 1;
        var cmp = comparator(el, ar[k]);
        if (cmp > 0) {
          m = k + 1;
        } else if (cmp < 0) {
          n = k - 1;
        } else {
          return k;
        }
      }
      return -m - 1;
    };
    Arrays2.numberComparator = function(a, b) {
      return a - b;
    };
    return Arrays2;
  }()
);
var Arrays_default = Arrays;

// node_modules/@zxing/library/esm/core/util/Integer.js
var Integer = (
  /** @class */
  function() {
    function Integer2() {
    }
    Integer2.numberOfTrailingZeros = function(i) {
      var y;
      if (i === 0) return 32;
      var n = 31;
      y = i << 16;
      if (y !== 0) {
        n -= 16;
        i = y;
      }
      y = i << 8;
      if (y !== 0) {
        n -= 8;
        i = y;
      }
      y = i << 4;
      if (y !== 0) {
        n -= 4;
        i = y;
      }
      y = i << 2;
      if (y !== 0) {
        n -= 2;
        i = y;
      }
      return n - (i << 1 >>> 31);
    };
    Integer2.numberOfLeadingZeros = function(i) {
      if (i === 0) {
        return 32;
      }
      var n = 1;
      if (i >>> 16 === 0) {
        n += 16;
        i <<= 16;
      }
      if (i >>> 24 === 0) {
        n += 8;
        i <<= 8;
      }
      if (i >>> 28 === 0) {
        n += 4;
        i <<= 4;
      }
      if (i >>> 30 === 0) {
        n += 2;
        i <<= 2;
      }
      n -= i >>> 31;
      return n;
    };
    Integer2.toHexString = function(i) {
      return i.toString(16);
    };
    Integer2.toBinaryString = function(intNumber) {
      return String(parseInt(String(intNumber), 2));
    };
    Integer2.bitCount = function(i) {
      i = i - (i >>> 1 & 1431655765);
      i = (i & 858993459) + (i >>> 2 & 858993459);
      i = i + (i >>> 4) & 252645135;
      i = i + (i >>> 8);
      i = i + (i >>> 16);
      return i & 63;
    };
    Integer2.truncDivision = function(dividend, divisor) {
      return Math.trunc(dividend / divisor);
    };
    Integer2.parseInt = function(num, radix) {
      if (radix === void 0) {
        radix = void 0;
      }
      return parseInt(num, radix);
    };
    Integer2.MIN_VALUE_32_BITS = -2147483648;
    Integer2.MAX_VALUE = Number.MAX_SAFE_INTEGER;
    return Integer2;
  }()
);
var Integer_default = Integer;

// node_modules/@zxing/library/esm/core/common/BitArray.js
var BitArray = (
  /** @class */
  function() {
    function BitArray2(size, bits) {
      if (void 0 === size) {
        this.size = 0;
        this.bits = new Int32Array(1);
      } else {
        this.size = size;
        if (void 0 === bits || null === bits) {
          this.bits = BitArray2.makeArray(size);
        } else {
          this.bits = bits;
        }
      }
    }
    BitArray2.prototype.getSize = function() {
      return this.size;
    };
    BitArray2.prototype.getSizeInBytes = function() {
      return Math.floor((this.size + 7) / 8);
    };
    BitArray2.prototype.ensureCapacity = function(size) {
      if (size > this.bits.length * 32) {
        var newBits = BitArray2.makeArray(size);
        System_default.arraycopy(this.bits, 0, newBits, 0, this.bits.length);
        this.bits = newBits;
      }
    };
    BitArray2.prototype.get = function(i) {
      return (this.bits[Math.floor(i / 32)] & 1 << (i & 31)) !== 0;
    };
    BitArray2.prototype.set = function(i) {
      this.bits[Math.floor(i / 32)] |= 1 << (i & 31);
    };
    BitArray2.prototype.flip = function(i) {
      this.bits[Math.floor(i / 32)] ^= 1 << (i & 31);
    };
    BitArray2.prototype.getNextSet = function(from) {
      var size = this.size;
      if (from >= size) {
        return size;
      }
      var bits = this.bits;
      var bitsOffset = Math.floor(from / 32);
      var currentBits = bits[bitsOffset];
      currentBits &= ~((1 << (from & 31)) - 1);
      var length = bits.length;
      while (currentBits === 0) {
        if (++bitsOffset === length) {
          return size;
        }
        currentBits = bits[bitsOffset];
      }
      var result = bitsOffset * 32 + Integer_default.numberOfTrailingZeros(currentBits);
      return result > size ? size : result;
    };
    BitArray2.prototype.getNextUnset = function(from) {
      var size = this.size;
      if (from >= size) {
        return size;
      }
      var bits = this.bits;
      var bitsOffset = Math.floor(from / 32);
      var currentBits = ~bits[bitsOffset];
      currentBits &= ~((1 << (from & 31)) - 1);
      var length = bits.length;
      while (currentBits === 0) {
        if (++bitsOffset === length) {
          return size;
        }
        currentBits = ~bits[bitsOffset];
      }
      var result = bitsOffset * 32 + Integer_default.numberOfTrailingZeros(currentBits);
      return result > size ? size : result;
    };
    BitArray2.prototype.setBulk = function(i, newBits) {
      this.bits[Math.floor(i / 32)] = newBits;
    };
    BitArray2.prototype.setRange = function(start, end) {
      if (end < start || start < 0 || end > this.size) {
        throw new IllegalArgumentException_default();
      }
      if (end === start) {
        return;
      }
      end--;
      var firstInt = Math.floor(start / 32);
      var lastInt = Math.floor(end / 32);
      var bits = this.bits;
      for (var i = firstInt; i <= lastInt; i++) {
        var firstBit = i > firstInt ? 0 : start & 31;
        var lastBit = i < lastInt ? 31 : end & 31;
        var mask = (2 << lastBit) - (1 << firstBit);
        bits[i] |= mask;
      }
    };
    BitArray2.prototype.clear = function() {
      var max = this.bits.length;
      var bits = this.bits;
      for (var i = 0; i < max; i++) {
        bits[i] = 0;
      }
    };
    BitArray2.prototype.isRange = function(start, end, value) {
      if (end < start || start < 0 || end > this.size) {
        throw new IllegalArgumentException_default();
      }
      if (end === start) {
        return true;
      }
      end--;
      var firstInt = Math.floor(start / 32);
      var lastInt = Math.floor(end / 32);
      var bits = this.bits;
      for (var i = firstInt; i <= lastInt; i++) {
        var firstBit = i > firstInt ? 0 : start & 31;
        var lastBit = i < lastInt ? 31 : end & 31;
        var mask = (2 << lastBit) - (1 << firstBit) & 4294967295;
        if ((bits[i] & mask) !== (value ? mask : 0)) {
          return false;
        }
      }
      return true;
    };
    BitArray2.prototype.appendBit = function(bit) {
      this.ensureCapacity(this.size + 1);
      if (bit) {
        this.bits[Math.floor(this.size / 32)] |= 1 << (this.size & 31);
      }
      this.size++;
    };
    BitArray2.prototype.appendBits = function(value, numBits) {
      if (numBits < 0 || numBits > 32) {
        throw new IllegalArgumentException_default("Num bits must be between 0 and 32");
      }
      this.ensureCapacity(this.size + numBits);
      for (var numBitsLeft = numBits; numBitsLeft > 0; numBitsLeft--) {
        this.appendBit((value >> numBitsLeft - 1 & 1) === 1);
      }
    };
    BitArray2.prototype.appendBitArray = function(other) {
      var otherSize = other.size;
      this.ensureCapacity(this.size + otherSize);
      for (var i = 0; i < otherSize; i++) {
        this.appendBit(other.get(i));
      }
    };
    BitArray2.prototype.xor = function(other) {
      if (this.size !== other.size) {
        throw new IllegalArgumentException_default("Sizes don't match");
      }
      var bits = this.bits;
      for (var i = 0, length_1 = bits.length; i < length_1; i++) {
        bits[i] ^= other.bits[i];
      }
    };
    BitArray2.prototype.toBytes = function(bitOffset, array, offset, numBytes) {
      for (var i = 0; i < numBytes; i++) {
        var theByte = 0;
        for (var j = 0; j < 8; j++) {
          if (this.get(bitOffset)) {
            theByte |= 1 << 7 - j;
          }
          bitOffset++;
        }
        array[offset + i] = /*(byte)*/
        theByte;
      }
    };
    BitArray2.prototype.getBitArray = function() {
      return this.bits;
    };
    BitArray2.prototype.reverse = function() {
      var newBits = new Int32Array(this.bits.length);
      var len = Math.floor((this.size - 1) / 32);
      var oldBitsLen = len + 1;
      var bits = this.bits;
      for (var i = 0; i < oldBitsLen; i++) {
        var x = bits[i];
        x = x >> 1 & 1431655765 | (x & 1431655765) << 1;
        x = x >> 2 & 858993459 | (x & 858993459) << 2;
        x = x >> 4 & 252645135 | (x & 252645135) << 4;
        x = x >> 8 & 16711935 | (x & 16711935) << 8;
        x = x >> 16 & 65535 | (x & 65535) << 16;
        newBits[len - i] = /*(int)*/
        x;
      }
      if (this.size !== oldBitsLen * 32) {
        var leftOffset = oldBitsLen * 32 - this.size;
        var currentInt = newBits[0] >>> leftOffset;
        for (var i = 1; i < oldBitsLen; i++) {
          var nextInt = newBits[i];
          currentInt |= nextInt << 32 - leftOffset;
          newBits[i - 1] = currentInt;
          currentInt = nextInt >>> leftOffset;
        }
        newBits[oldBitsLen - 1] = currentInt;
      }
      this.bits = newBits;
    };
    BitArray2.makeArray = function(size) {
      return new Int32Array(Math.floor((size + 31) / 32));
    };
    BitArray2.prototype.equals = function(o) {
      if (!(o instanceof BitArray2)) {
        return false;
      }
      var other = o;
      return this.size === other.size && Arrays_default.equals(this.bits, other.bits);
    };
    BitArray2.prototype.hashCode = function() {
      return 31 * this.size + Arrays_default.hashCode(this.bits);
    };
    BitArray2.prototype.toString = function() {
      var result = "";
      for (var i = 0, size = this.size; i < size; i++) {
        if ((i & 7) === 0) {
          result += " ";
        }
        result += this.get(i) ? "X" : ".";
      }
      return result;
    };
    BitArray2.prototype.clone = function() {
      return new BitArray2(this.size, this.bits.slice());
    };
    BitArray2.prototype.toArray = function() {
      var result = [];
      for (var i = 0, size = this.size; i < size; i++) {
        result.push(this.get(i));
      }
      return result;
    };
    return BitArray2;
  }()
);
var BitArray_default = BitArray;

// node_modules/@zxing/library/esm/core/DecodeHintType.js
var DecodeHintType;
(function(DecodeHintType2) {
  DecodeHintType2[DecodeHintType2["OTHER"] = 0] = "OTHER";
  DecodeHintType2[DecodeHintType2["PURE_BARCODE"] = 1] = "PURE_BARCODE";
  DecodeHintType2[DecodeHintType2["POSSIBLE_FORMATS"] = 2] = "POSSIBLE_FORMATS";
  DecodeHintType2[DecodeHintType2["TRY_HARDER"] = 3] = "TRY_HARDER";
  DecodeHintType2[DecodeHintType2["CHARACTER_SET"] = 4] = "CHARACTER_SET";
  DecodeHintType2[DecodeHintType2["ALLOWED_LENGTHS"] = 5] = "ALLOWED_LENGTHS";
  DecodeHintType2[DecodeHintType2["ASSUME_CODE_39_CHECK_DIGIT"] = 6] = "ASSUME_CODE_39_CHECK_DIGIT";
  DecodeHintType2[DecodeHintType2["ENABLE_CODE_39_EXTENDED_MODE"] = 7] = "ENABLE_CODE_39_EXTENDED_MODE";
  DecodeHintType2[DecodeHintType2["ASSUME_GS1"] = 8] = "ASSUME_GS1";
  DecodeHintType2[DecodeHintType2["RETURN_CODABAR_START_END"] = 9] = "RETURN_CODABAR_START_END";
  DecodeHintType2[DecodeHintType2["NEED_RESULT_POINT_CALLBACK"] = 10] = "NEED_RESULT_POINT_CALLBACK";
  DecodeHintType2[DecodeHintType2["ALLOWED_EAN_EXTENSIONS"] = 11] = "ALLOWED_EAN_EXTENSIONS";
})(DecodeHintType || (DecodeHintType = {}));
var DecodeHintType_default = DecodeHintType;

// node_modules/@zxing/library/esm/core/FormatException.js
var __extends8 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var FormatException = (
  /** @class */
  function(_super) {
    __extends8(FormatException2, _super);
    function FormatException2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatException2.getFormatInstance = function() {
      return new FormatException2();
    };
    FormatException2.kind = "FormatException";
    return FormatException2;
  }(Exception_default)
);
var FormatException_default = FormatException;

// node_modules/@zxing/library/esm/core/common/CharacterSetECI.js
var __values2 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var CharacterSetValueIdentifiers;
(function(CharacterSetValueIdentifiers2) {
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp437"] = 0] = "Cp437";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_1"] = 1] = "ISO8859_1";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_2"] = 2] = "ISO8859_2";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_3"] = 3] = "ISO8859_3";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_4"] = 4] = "ISO8859_4";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_5"] = 5] = "ISO8859_5";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_6"] = 6] = "ISO8859_6";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_7"] = 7] = "ISO8859_7";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_8"] = 8] = "ISO8859_8";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_9"] = 9] = "ISO8859_9";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_10"] = 10] = "ISO8859_10";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_11"] = 11] = "ISO8859_11";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_13"] = 12] = "ISO8859_13";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_14"] = 13] = "ISO8859_14";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_15"] = 14] = "ISO8859_15";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ISO8859_16"] = 15] = "ISO8859_16";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["SJIS"] = 16] = "SJIS";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1250"] = 17] = "Cp1250";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1251"] = 18] = "Cp1251";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1252"] = 19] = "Cp1252";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Cp1256"] = 20] = "Cp1256";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["UnicodeBigUnmarked"] = 21] = "UnicodeBigUnmarked";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["UTF8"] = 22] = "UTF8";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["ASCII"] = 23] = "ASCII";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["Big5"] = 24] = "Big5";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["GB18030"] = 25] = "GB18030";
  CharacterSetValueIdentifiers2[CharacterSetValueIdentifiers2["EUC_KR"] = 26] = "EUC_KR";
})(CharacterSetValueIdentifiers || (CharacterSetValueIdentifiers = {}));
var CharacterSetECI = (
  /** @class */
  function() {
    function CharacterSetECI2(valueIdentifier, valuesParam, name) {
      var e_1, _a2;
      var otherEncodingNames = [];
      for (var _i = 3; _i < arguments.length; _i++) {
        otherEncodingNames[_i - 3] = arguments[_i];
      }
      this.valueIdentifier = valueIdentifier;
      this.name = name;
      if (typeof valuesParam === "number") {
        this.values = Int32Array.from([valuesParam]);
      } else {
        this.values = valuesParam;
      }
      this.otherEncodingNames = otherEncodingNames;
      CharacterSetECI2.VALUE_IDENTIFIER_TO_ECI.set(valueIdentifier, this);
      CharacterSetECI2.NAME_TO_ECI.set(name, this);
      var values = this.values;
      for (var i = 0, length_1 = values.length; i !== length_1; i++) {
        var v = values[i];
        CharacterSetECI2.VALUES_TO_ECI.set(v, this);
      }
      try {
        for (var otherEncodingNames_1 = __values2(otherEncodingNames), otherEncodingNames_1_1 = otherEncodingNames_1.next(); !otherEncodingNames_1_1.done; otherEncodingNames_1_1 = otherEncodingNames_1.next()) {
          var otherName = otherEncodingNames_1_1.value;
          CharacterSetECI2.NAME_TO_ECI.set(otherName, this);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (otherEncodingNames_1_1 && !otherEncodingNames_1_1.done && (_a2 = otherEncodingNames_1.return)) _a2.call(otherEncodingNames_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }
    CharacterSetECI2.prototype.getValueIdentifier = function() {
      return this.valueIdentifier;
    };
    CharacterSetECI2.prototype.getName = function() {
      return this.name;
    };
    CharacterSetECI2.prototype.getValue = function() {
      return this.values[0];
    };
    CharacterSetECI2.getCharacterSetECIByValue = function(value) {
      if (value < 0 || value >= 900) {
        throw new FormatException_default("incorect value");
      }
      var characterSet = CharacterSetECI2.VALUES_TO_ECI.get(value);
      if (void 0 === characterSet) {
        throw new FormatException_default("incorect value");
      }
      return characterSet;
    };
    CharacterSetECI2.getCharacterSetECIByName = function(name) {
      var characterSet = CharacterSetECI2.NAME_TO_ECI.get(name);
      if (void 0 === characterSet) {
        throw new FormatException_default("incorect value");
      }
      return characterSet;
    };
    CharacterSetECI2.prototype.equals = function(o) {
      if (!(o instanceof CharacterSetECI2)) {
        return false;
      }
      var other = o;
      return this.getName() === other.getName();
    };
    CharacterSetECI2.VALUE_IDENTIFIER_TO_ECI = /* @__PURE__ */ new Map();
    CharacterSetECI2.VALUES_TO_ECI = /* @__PURE__ */ new Map();
    CharacterSetECI2.NAME_TO_ECI = /* @__PURE__ */ new Map();
    CharacterSetECI2.Cp437 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp437, Int32Array.from([0, 2]), "Cp437");
    CharacterSetECI2.ISO8859_1 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1");
    CharacterSetECI2.ISO8859_2 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2");
    CharacterSetECI2.ISO8859_3 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3");
    CharacterSetECI2.ISO8859_4 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4");
    CharacterSetECI2.ISO8859_5 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5");
    CharacterSetECI2.ISO8859_6 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6");
    CharacterSetECI2.ISO8859_7 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7");
    CharacterSetECI2.ISO8859_8 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8");
    CharacterSetECI2.ISO8859_9 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9");
    CharacterSetECI2.ISO8859_10 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10");
    CharacterSetECI2.ISO8859_11 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11");
    CharacterSetECI2.ISO8859_13 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13");
    CharacterSetECI2.ISO8859_14 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14");
    CharacterSetECI2.ISO8859_15 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15");
    CharacterSetECI2.ISO8859_16 = new CharacterSetECI2(CharacterSetValueIdentifiers.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16");
    CharacterSetECI2.SJIS = new CharacterSetECI2(CharacterSetValueIdentifiers.SJIS, 20, "SJIS", "Shift_JIS");
    CharacterSetECI2.Cp1250 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp1250, 21, "Cp1250", "windows-1250");
    CharacterSetECI2.Cp1251 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp1251, 22, "Cp1251", "windows-1251");
    CharacterSetECI2.Cp1252 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp1252, 23, "Cp1252", "windows-1252");
    CharacterSetECI2.Cp1256 = new CharacterSetECI2(CharacterSetValueIdentifiers.Cp1256, 24, "Cp1256", "windows-1256");
    CharacterSetECI2.UnicodeBigUnmarked = new CharacterSetECI2(CharacterSetValueIdentifiers.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig");
    CharacterSetECI2.UTF8 = new CharacterSetECI2(CharacterSetValueIdentifiers.UTF8, 26, "UTF8", "UTF-8");
    CharacterSetECI2.ASCII = new CharacterSetECI2(CharacterSetValueIdentifiers.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII");
    CharacterSetECI2.Big5 = new CharacterSetECI2(CharacterSetValueIdentifiers.Big5, 28, "Big5");
    CharacterSetECI2.GB18030 = new CharacterSetECI2(CharacterSetValueIdentifiers.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK");
    CharacterSetECI2.EUC_KR = new CharacterSetECI2(CharacterSetValueIdentifiers.EUC_KR, 30, "EUC_KR", "EUC-KR");
    return CharacterSetECI2;
  }()
);
var CharacterSetECI_default = CharacterSetECI;

// node_modules/@zxing/library/esm/core/UnsupportedOperationException.js
var __extends9 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var UnsupportedOperationException = (
  /** @class */
  function(_super) {
    __extends9(UnsupportedOperationException2, _super);
    function UnsupportedOperationException2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    UnsupportedOperationException2.kind = "UnsupportedOperationException";
    return UnsupportedOperationException2;
  }(Exception_default)
);
var UnsupportedOperationException_default = UnsupportedOperationException;

// node_modules/@zxing/library/esm/core/util/StringEncoding.js
var StringEncoding = (
  /** @class */
  function() {
    function StringEncoding2() {
    }
    StringEncoding2.decode = function(bytes, encoding) {
      var encodingName = this.encodingName(encoding);
      if (this.customDecoder) {
        return this.customDecoder(bytes, encodingName);
      }
      if (typeof TextDecoder === "undefined" || this.shouldDecodeOnFallback(encodingName)) {
        return this.decodeFallback(bytes, encodingName);
      }
      return new TextDecoder(encodingName).decode(bytes);
    };
    StringEncoding2.shouldDecodeOnFallback = function(encodingName) {
      return !StringEncoding2.isBrowser() && encodingName === "ISO-8859-1";
    };
    StringEncoding2.encode = function(s, encoding) {
      var encodingName = this.encodingName(encoding);
      if (this.customEncoder) {
        return this.customEncoder(s, encodingName);
      }
      if (typeof TextEncoder === "undefined") {
        return this.encodeFallback(s);
      }
      return new TextEncoder().encode(s);
    };
    StringEncoding2.isBrowser = function() {
      return typeof window !== "undefined" && {}.toString.call(window) === "[object Window]";
    };
    StringEncoding2.encodingName = function(encoding) {
      return typeof encoding === "string" ? encoding : encoding.getName();
    };
    StringEncoding2.encodingCharacterSet = function(encoding) {
      if (encoding instanceof CharacterSetECI_default) {
        return encoding;
      }
      return CharacterSetECI_default.getCharacterSetECIByName(encoding);
    };
    StringEncoding2.decodeFallback = function(bytes, encoding) {
      var characterSet = this.encodingCharacterSet(encoding);
      if (StringEncoding2.isDecodeFallbackSupported(characterSet)) {
        var s = "";
        for (var i = 0, length_1 = bytes.length; i < length_1; i++) {
          var h = bytes[i].toString(16);
          if (h.length < 2) {
            h = "0" + h;
          }
          s += "%" + h;
        }
        return decodeURIComponent(s);
      }
      if (characterSet.equals(CharacterSetECI_default.UnicodeBigUnmarked)) {
        return String.fromCharCode.apply(null, new Uint16Array(bytes.buffer));
      }
      throw new UnsupportedOperationException_default("Encoding " + this.encodingName(encoding) + " not supported by fallback.");
    };
    StringEncoding2.isDecodeFallbackSupported = function(characterSet) {
      return characterSet.equals(CharacterSetECI_default.UTF8) || characterSet.equals(CharacterSetECI_default.ISO8859_1) || characterSet.equals(CharacterSetECI_default.ASCII);
    };
    StringEncoding2.encodeFallback = function(s) {
      var encodedURIstring = btoa(unescape(encodeURIComponent(s)));
      var charList = encodedURIstring.split("");
      var uintArray = [];
      for (var i = 0; i < charList.length; i++) {
        uintArray.push(charList[i].charCodeAt(0));
      }
      return new Uint8Array(uintArray);
    };
    return StringEncoding2;
  }()
);
var StringEncoding_default = StringEncoding;

// node_modules/@zxing/library/esm/core/common/StringUtils.js
var StringUtils = (
  /** @class */
  function() {
    function StringUtils2() {
    }
    StringUtils2.castAsNonUtf8Char = function(code, encoding) {
      if (encoding === void 0) {
        encoding = null;
      }
      var e = encoding ? encoding.getName() : this.ISO88591;
      return StringEncoding_default.decode(new Uint8Array([code]), e);
    };
    StringUtils2.guessEncoding = function(bytes, hints) {
      if (hints !== null && hints !== void 0 && void 0 !== hints.get(DecodeHintType_default.CHARACTER_SET)) {
        return hints.get(DecodeHintType_default.CHARACTER_SET).toString();
      }
      var length = bytes.length;
      var canBeISO88591 = true;
      var canBeShiftJIS = true;
      var canBeUTF8 = true;
      var utf8BytesLeft = 0;
      var utf2BytesChars = 0;
      var utf3BytesChars = 0;
      var utf4BytesChars = 0;
      var sjisBytesLeft = 0;
      var sjisKatakanaChars = 0;
      var sjisCurKatakanaWordLength = 0;
      var sjisCurDoubleBytesWordLength = 0;
      var sjisMaxKatakanaWordLength = 0;
      var sjisMaxDoubleBytesWordLength = 0;
      var isoHighOther = 0;
      var utf8bom = bytes.length > 3 && bytes[0] === /*(byte) */
      239 && bytes[1] === /*(byte) */
      187 && bytes[2] === /*(byte) */
      191;
      for (var i = 0; i < length && (canBeISO88591 || canBeShiftJIS || canBeUTF8); i++) {
        var value = bytes[i] & 255;
        if (canBeUTF8) {
          if (utf8BytesLeft > 0) {
            if ((value & 128) === 0) {
              canBeUTF8 = false;
            } else {
              utf8BytesLeft--;
            }
          } else if ((value & 128) !== 0) {
            if ((value & 64) === 0) {
              canBeUTF8 = false;
            } else {
              utf8BytesLeft++;
              if ((value & 32) === 0) {
                utf2BytesChars++;
              } else {
                utf8BytesLeft++;
                if ((value & 16) === 0) {
                  utf3BytesChars++;
                } else {
                  utf8BytesLeft++;
                  if ((value & 8) === 0) {
                    utf4BytesChars++;
                  } else {
                    canBeUTF8 = false;
                  }
                }
              }
            }
          }
        }
        if (canBeISO88591) {
          if (value > 127 && value < 160) {
            canBeISO88591 = false;
          } else if (value > 159) {
            if (value < 192 || value === 215 || value === 247) {
              isoHighOther++;
            }
          }
        }
        if (canBeShiftJIS) {
          if (sjisBytesLeft > 0) {
            if (value < 64 || value === 127 || value > 252) {
              canBeShiftJIS = false;
            } else {
              sjisBytesLeft--;
            }
          } else if (value === 128 || value === 160 || value > 239) {
            canBeShiftJIS = false;
          } else if (value > 160 && value < 224) {
            sjisKatakanaChars++;
            sjisCurDoubleBytesWordLength = 0;
            sjisCurKatakanaWordLength++;
            if (sjisCurKatakanaWordLength > sjisMaxKatakanaWordLength) {
              sjisMaxKatakanaWordLength = sjisCurKatakanaWordLength;
            }
          } else if (value > 127) {
            sjisBytesLeft++;
            sjisCurKatakanaWordLength = 0;
            sjisCurDoubleBytesWordLength++;
            if (sjisCurDoubleBytesWordLength > sjisMaxDoubleBytesWordLength) {
              sjisMaxDoubleBytesWordLength = sjisCurDoubleBytesWordLength;
            }
          } else {
            sjisCurKatakanaWordLength = 0;
            sjisCurDoubleBytesWordLength = 0;
          }
        }
      }
      if (canBeUTF8 && utf8BytesLeft > 0) {
        canBeUTF8 = false;
      }
      if (canBeShiftJIS && sjisBytesLeft > 0) {
        canBeShiftJIS = false;
      }
      if (canBeUTF8 && (utf8bom || utf2BytesChars + utf3BytesChars + utf4BytesChars > 0)) {
        return StringUtils2.UTF8;
      }
      if (canBeShiftJIS && (StringUtils2.ASSUME_SHIFT_JIS || sjisMaxKatakanaWordLength >= 3 || sjisMaxDoubleBytesWordLength >= 3)) {
        return StringUtils2.SHIFT_JIS;
      }
      if (canBeISO88591 && canBeShiftJIS) {
        return sjisMaxKatakanaWordLength === 2 && sjisKatakanaChars === 2 || isoHighOther * 10 >= length ? StringUtils2.SHIFT_JIS : StringUtils2.ISO88591;
      }
      if (canBeISO88591) {
        return StringUtils2.ISO88591;
      }
      if (canBeShiftJIS) {
        return StringUtils2.SHIFT_JIS;
      }
      if (canBeUTF8) {
        return StringUtils2.UTF8;
      }
      return StringUtils2.PLATFORM_DEFAULT_ENCODING;
    };
    StringUtils2.format = function(append) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      var i = -1;
      function callback(exp, p0, p1, p2, p3, p4) {
        if (exp === "%%") return "%";
        if (args[++i] === void 0) return void 0;
        exp = p2 ? parseInt(p2.substr(1)) : void 0;
        var base = p3 ? parseInt(p3.substr(1)) : void 0;
        var val;
        switch (p4) {
          case "s":
            val = args[i];
            break;
          case "c":
            val = args[i][0];
            break;
          case "f":
            val = parseFloat(args[i]).toFixed(exp);
            break;
          case "p":
            val = parseFloat(args[i]).toPrecision(exp);
            break;
          case "e":
            val = parseFloat(args[i]).toExponential(exp);
            break;
          case "x":
            val = parseInt(args[i]).toString(base ? base : 16);
            break;
          case "d":
            val = parseFloat(parseInt(args[i], base ? base : 10).toPrecision(exp)).toFixed(0);
            break;
        }
        val = typeof val === "object" ? JSON.stringify(val) : (+val).toString(base);
        var size = parseInt(p1);
        var ch = p1 && p1[0] + "" === "0" ? "0" : " ";
        while (val.length < size) val = p0 !== void 0 ? val + ch : ch + val;
        return val;
      }
      var regex = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
      return append.replace(regex, callback);
    };
    StringUtils2.getBytes = function(str, encoding) {
      return StringEncoding_default.encode(str, encoding);
    };
    StringUtils2.getCharCode = function(str, index) {
      if (index === void 0) {
        index = 0;
      }
      return str.charCodeAt(index);
    };
    StringUtils2.getCharAt = function(charCode) {
      return String.fromCharCode(charCode);
    };
    StringUtils2.SHIFT_JIS = CharacterSetECI_default.SJIS.getName();
    StringUtils2.GB2312 = "GB2312";
    StringUtils2.ISO88591 = CharacterSetECI_default.ISO8859_1.getName();
    StringUtils2.EUC_JP = "EUC_JP";
    StringUtils2.UTF8 = CharacterSetECI_default.UTF8.getName();
    StringUtils2.PLATFORM_DEFAULT_ENCODING = StringUtils2.UTF8;
    StringUtils2.ASSUME_SHIFT_JIS = false;
    return StringUtils2;
  }()
);
var StringUtils_default = StringUtils;

// node_modules/@zxing/library/esm/core/util/StringBuilder.js
var StringBuilder = (
  /** @class */
  function() {
    function StringBuilder2(value) {
      if (value === void 0) {
        value = "";
      }
      this.value = value;
    }
    StringBuilder2.prototype.enableDecoding = function(encoding) {
      this.encoding = encoding;
      return this;
    };
    StringBuilder2.prototype.append = function(s) {
      if (typeof s === "string") {
        this.value += s.toString();
      } else if (this.encoding) {
        this.value += StringUtils_default.castAsNonUtf8Char(s, this.encoding);
      } else {
        this.value += String.fromCharCode(s);
      }
      return this;
    };
    StringBuilder2.prototype.appendChars = function(str, offset, len) {
      for (var i = offset; offset < offset + len; i++) {
        this.append(str[i]);
      }
      return this;
    };
    StringBuilder2.prototype.length = function() {
      return this.value.length;
    };
    StringBuilder2.prototype.charAt = function(n) {
      return this.value.charAt(n);
    };
    StringBuilder2.prototype.deleteCharAt = function(n) {
      this.value = this.value.substr(0, n) + this.value.substring(n + 1);
    };
    StringBuilder2.prototype.setCharAt = function(n, c) {
      this.value = this.value.substr(0, n) + c + this.value.substr(n + 1);
    };
    StringBuilder2.prototype.substring = function(start, end) {
      return this.value.substring(start, end);
    };
    StringBuilder2.prototype.setLengthToZero = function() {
      this.value = "";
    };
    StringBuilder2.prototype.toString = function() {
      return this.value;
    };
    StringBuilder2.prototype.insert = function(n, c) {
      this.value = this.value.substring(0, n) + c + this.value.substring(n);
    };
    return StringBuilder2;
  }()
);
var StringBuilder_default = StringBuilder;

// node_modules/@zxing/library/esm/core/common/BitMatrix.js
var BitMatrix = (
  /** @class */
  function() {
    function BitMatrix2(width, height, rowSize, bits) {
      this.width = width;
      this.height = height;
      this.rowSize = rowSize;
      this.bits = bits;
      if (void 0 === height || null === height) {
        height = width;
      }
      this.height = height;
      if (width < 1 || height < 1) {
        throw new IllegalArgumentException_default("Both dimensions must be greater than 0");
      }
      if (void 0 === rowSize || null === rowSize) {
        rowSize = Math.floor((width + 31) / 32);
      }
      this.rowSize = rowSize;
      if (void 0 === bits || null === bits) {
        this.bits = new Int32Array(this.rowSize * this.height);
      }
    }
    BitMatrix2.parseFromBooleanArray = function(image) {
      var height = image.length;
      var width = image[0].length;
      var bits = new BitMatrix2(width, height);
      for (var i = 0; i < height; i++) {
        var imageI = image[i];
        for (var j = 0; j < width; j++) {
          if (imageI[j]) {
            bits.set(j, i);
          }
        }
      }
      return bits;
    };
    BitMatrix2.parseFromString = function(stringRepresentation, setString, unsetString) {
      if (stringRepresentation === null) {
        throw new IllegalArgumentException_default("stringRepresentation cannot be null");
      }
      var bits = new Array(stringRepresentation.length);
      var bitsPos = 0;
      var rowStartPos = 0;
      var rowLength = -1;
      var nRows = 0;
      var pos = 0;
      while (pos < stringRepresentation.length) {
        if (stringRepresentation.charAt(pos) === "\n" || stringRepresentation.charAt(pos) === "\r") {
          if (bitsPos > rowStartPos) {
            if (rowLength === -1) {
              rowLength = bitsPos - rowStartPos;
            } else if (bitsPos - rowStartPos !== rowLength) {
              throw new IllegalArgumentException_default("row lengths do not match");
            }
            rowStartPos = bitsPos;
            nRows++;
          }
          pos++;
        } else if (stringRepresentation.substring(pos, pos + setString.length) === setString) {
          pos += setString.length;
          bits[bitsPos] = true;
          bitsPos++;
        } else if (stringRepresentation.substring(pos, pos + unsetString.length) === unsetString) {
          pos += unsetString.length;
          bits[bitsPos] = false;
          bitsPos++;
        } else {
          throw new IllegalArgumentException_default("illegal character encountered: " + stringRepresentation.substring(pos));
        }
      }
      if (bitsPos > rowStartPos) {
        if (rowLength === -1) {
          rowLength = bitsPos - rowStartPos;
        } else if (bitsPos - rowStartPos !== rowLength) {
          throw new IllegalArgumentException_default("row lengths do not match");
        }
        nRows++;
      }
      var matrix = new BitMatrix2(rowLength, nRows);
      for (var i = 0; i < bitsPos; i++) {
        if (bits[i]) {
          matrix.set(Math.floor(i % rowLength), Math.floor(i / rowLength));
        }
      }
      return matrix;
    };
    BitMatrix2.prototype.get = function(x, y) {
      var offset = y * this.rowSize + Math.floor(x / 32);
      return (this.bits[offset] >>> (x & 31) & 1) !== 0;
    };
    BitMatrix2.prototype.set = function(x, y) {
      var offset = y * this.rowSize + Math.floor(x / 32);
      this.bits[offset] |= 1 << (x & 31) & 4294967295;
    };
    BitMatrix2.prototype.unset = function(x, y) {
      var offset = y * this.rowSize + Math.floor(x / 32);
      this.bits[offset] &= ~(1 << (x & 31) & 4294967295);
    };
    BitMatrix2.prototype.flip = function(x, y) {
      var offset = y * this.rowSize + Math.floor(x / 32);
      this.bits[offset] ^= 1 << (x & 31) & 4294967295;
    };
    BitMatrix2.prototype.xor = function(mask) {
      if (this.width !== mask.getWidth() || this.height !== mask.getHeight() || this.rowSize !== mask.getRowSize()) {
        throw new IllegalArgumentException_default("input matrix dimensions do not match");
      }
      var rowArray = new BitArray_default(Math.floor(this.width / 32) + 1);
      var rowSize = this.rowSize;
      var bits = this.bits;
      for (var y = 0, height = this.height; y < height; y++) {
        var offset = y * rowSize;
        var row = mask.getRow(y, rowArray).getBitArray();
        for (var x = 0; x < rowSize; x++) {
          bits[offset + x] ^= row[x];
        }
      }
    };
    BitMatrix2.prototype.clear = function() {
      var bits = this.bits;
      var max = bits.length;
      for (var i = 0; i < max; i++) {
        bits[i] = 0;
      }
    };
    BitMatrix2.prototype.setRegion = function(left, top, width, height) {
      if (top < 0 || left < 0) {
        throw new IllegalArgumentException_default("Left and top must be nonnegative");
      }
      if (height < 1 || width < 1) {
        throw new IllegalArgumentException_default("Height and width must be at least 1");
      }
      var right = left + width;
      var bottom = top + height;
      if (bottom > this.height || right > this.width) {
        throw new IllegalArgumentException_default("The region must fit inside the matrix");
      }
      var rowSize = this.rowSize;
      var bits = this.bits;
      for (var y = top; y < bottom; y++) {
        var offset = y * rowSize;
        for (var x = left; x < right; x++) {
          bits[offset + Math.floor(x / 32)] |= 1 << (x & 31) & 4294967295;
        }
      }
    };
    BitMatrix2.prototype.getRow = function(y, row) {
      if (row === null || row === void 0 || row.getSize() < this.width) {
        row = new BitArray_default(this.width);
      } else {
        row.clear();
      }
      var rowSize = this.rowSize;
      var bits = this.bits;
      var offset = y * rowSize;
      for (var x = 0; x < rowSize; x++) {
        row.setBulk(x * 32, bits[offset + x]);
      }
      return row;
    };
    BitMatrix2.prototype.setRow = function(y, row) {
      System_default.arraycopy(row.getBitArray(), 0, this.bits, y * this.rowSize, this.rowSize);
    };
    BitMatrix2.prototype.rotate180 = function() {
      var width = this.getWidth();
      var height = this.getHeight();
      var topRow = new BitArray_default(width);
      var bottomRow = new BitArray_default(width);
      for (var i = 0, length_1 = Math.floor((height + 1) / 2); i < length_1; i++) {
        topRow = this.getRow(i, topRow);
        bottomRow = this.getRow(height - 1 - i, bottomRow);
        topRow.reverse();
        bottomRow.reverse();
        this.setRow(i, bottomRow);
        this.setRow(height - 1 - i, topRow);
      }
    };
    BitMatrix2.prototype.getEnclosingRectangle = function() {
      var width = this.width;
      var height = this.height;
      var rowSize = this.rowSize;
      var bits = this.bits;
      var left = width;
      var top = height;
      var right = -1;
      var bottom = -1;
      for (var y = 0; y < height; y++) {
        for (var x32 = 0; x32 < rowSize; x32++) {
          var theBits = bits[y * rowSize + x32];
          if (theBits !== 0) {
            if (y < top) {
              top = y;
            }
            if (y > bottom) {
              bottom = y;
            }
            if (x32 * 32 < left) {
              var bit = 0;
              while ((theBits << 31 - bit & 4294967295) === 0) {
                bit++;
              }
              if (x32 * 32 + bit < left) {
                left = x32 * 32 + bit;
              }
            }
            if (x32 * 32 + 31 > right) {
              var bit = 31;
              while (theBits >>> bit === 0) {
                bit--;
              }
              if (x32 * 32 + bit > right) {
                right = x32 * 32 + bit;
              }
            }
          }
        }
      }
      if (right < left || bottom < top) {
        return null;
      }
      return Int32Array.from([left, top, right - left + 1, bottom - top + 1]);
    };
    BitMatrix2.prototype.getTopLeftOnBit = function() {
      var rowSize = this.rowSize;
      var bits = this.bits;
      var bitsOffset = 0;
      while (bitsOffset < bits.length && bits[bitsOffset] === 0) {
        bitsOffset++;
      }
      if (bitsOffset === bits.length) {
        return null;
      }
      var y = bitsOffset / rowSize;
      var x = bitsOffset % rowSize * 32;
      var theBits = bits[bitsOffset];
      var bit = 0;
      while ((theBits << 31 - bit & 4294967295) === 0) {
        bit++;
      }
      x += bit;
      return Int32Array.from([x, y]);
    };
    BitMatrix2.prototype.getBottomRightOnBit = function() {
      var rowSize = this.rowSize;
      var bits = this.bits;
      var bitsOffset = bits.length - 1;
      while (bitsOffset >= 0 && bits[bitsOffset] === 0) {
        bitsOffset--;
      }
      if (bitsOffset < 0) {
        return null;
      }
      var y = Math.floor(bitsOffset / rowSize);
      var x = Math.floor(bitsOffset % rowSize) * 32;
      var theBits = bits[bitsOffset];
      var bit = 31;
      while (theBits >>> bit === 0) {
        bit--;
      }
      x += bit;
      return Int32Array.from([x, y]);
    };
    BitMatrix2.prototype.getWidth = function() {
      return this.width;
    };
    BitMatrix2.prototype.getHeight = function() {
      return this.height;
    };
    BitMatrix2.prototype.getRowSize = function() {
      return this.rowSize;
    };
    BitMatrix2.prototype.equals = function(o) {
      if (!(o instanceof BitMatrix2)) {
        return false;
      }
      var other = o;
      return this.width === other.width && this.height === other.height && this.rowSize === other.rowSize && Arrays_default.equals(this.bits, other.bits);
    };
    BitMatrix2.prototype.hashCode = function() {
      var hash = this.width;
      hash = 31 * hash + this.width;
      hash = 31 * hash + this.height;
      hash = 31 * hash + this.rowSize;
      hash = 31 * hash + Arrays_default.hashCode(this.bits);
      return hash;
    };
    BitMatrix2.prototype.toString = function(setString, unsetString, lineSeparator) {
      if (setString === void 0) {
        setString = "X ";
      }
      if (unsetString === void 0) {
        unsetString = "  ";
      }
      if (lineSeparator === void 0) {
        lineSeparator = "\n";
      }
      return this.buildToString(setString, unsetString, lineSeparator);
    };
    BitMatrix2.prototype.buildToString = function(setString, unsetString, lineSeparator) {
      var result = new StringBuilder_default();
      for (var y = 0, height = this.height; y < height; y++) {
        for (var x = 0, width = this.width; x < width; x++) {
          result.append(this.get(x, y) ? setString : unsetString);
        }
        result.append(lineSeparator);
      }
      return result.toString();
    };
    BitMatrix2.prototype.clone = function() {
      return new BitMatrix2(this.width, this.height, this.rowSize, this.bits.slice());
    };
    return BitMatrix2;
  }()
);
var BitMatrix_default = BitMatrix;

// node_modules/@zxing/library/esm/core/NotFoundException.js
var __extends10 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var NotFoundException = (
  /** @class */
  function(_super) {
    __extends10(NotFoundException2, _super);
    function NotFoundException2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NotFoundException2.getNotFoundInstance = function() {
      return new NotFoundException2();
    };
    NotFoundException2.kind = "NotFoundException";
    return NotFoundException2;
  }(Exception_default)
);
var NotFoundException_default = NotFoundException;

// node_modules/@zxing/library/esm/core/common/GlobalHistogramBinarizer.js
var __extends11 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var GlobalHistogramBinarizer = (
  /** @class */
  function(_super) {
    __extends11(GlobalHistogramBinarizer2, _super);
    function GlobalHistogramBinarizer2(source) {
      var _this = _super.call(this, source) || this;
      _this.luminances = GlobalHistogramBinarizer2.EMPTY;
      _this.buckets = new Int32Array(GlobalHistogramBinarizer2.LUMINANCE_BUCKETS);
      return _this;
    }
    GlobalHistogramBinarizer2.prototype.getBlackRow = function(y, row) {
      var source = this.getLuminanceSource();
      var width = source.getWidth();
      if (row === void 0 || row === null || row.getSize() < width) {
        row = new BitArray_default(width);
      } else {
        row.clear();
      }
      this.initArrays(width);
      var localLuminances = source.getRow(y, this.luminances);
      var localBuckets = this.buckets;
      for (var x = 0; x < width; x++) {
        localBuckets[(localLuminances[x] & 255) >> GlobalHistogramBinarizer2.LUMINANCE_SHIFT]++;
      }
      var blackPoint = GlobalHistogramBinarizer2.estimateBlackPoint(localBuckets);
      if (width < 3) {
        for (var x = 0; x < width; x++) {
          if ((localLuminances[x] & 255) < blackPoint) {
            row.set(x);
          }
        }
      } else {
        var left = localLuminances[0] & 255;
        var center = localLuminances[1] & 255;
        for (var x = 1; x < width - 1; x++) {
          var right = localLuminances[x + 1] & 255;
          if ((center * 4 - left - right) / 2 < blackPoint) {
            row.set(x);
          }
          left = center;
          center = right;
        }
      }
      return row;
    };
    GlobalHistogramBinarizer2.prototype.getBlackMatrix = function() {
      var source = this.getLuminanceSource();
      var width = source.getWidth();
      var height = source.getHeight();
      var matrix = new BitMatrix_default(width, height);
      this.initArrays(width);
      var localBuckets = this.buckets;
      for (var y = 1; y < 5; y++) {
        var row = Math.floor(height * y / 5);
        var localLuminances_1 = source.getRow(row, this.luminances);
        var right = Math.floor(width * 4 / 5);
        for (var x = Math.floor(width / 5); x < right; x++) {
          var pixel = localLuminances_1[x] & 255;
          localBuckets[pixel >> GlobalHistogramBinarizer2.LUMINANCE_SHIFT]++;
        }
      }
      var blackPoint = GlobalHistogramBinarizer2.estimateBlackPoint(localBuckets);
      var localLuminances = source.getMatrix();
      for (var y = 0; y < height; y++) {
        var offset = y * width;
        for (var x = 0; x < width; x++) {
          var pixel = localLuminances[offset + x] & 255;
          if (pixel < blackPoint) {
            matrix.set(x, y);
          }
        }
      }
      return matrix;
    };
    GlobalHistogramBinarizer2.prototype.createBinarizer = function(source) {
      return new GlobalHistogramBinarizer2(source);
    };
    GlobalHistogramBinarizer2.prototype.initArrays = function(luminanceSize) {
      if (this.luminances.length < luminanceSize) {
        this.luminances = new Uint8ClampedArray(luminanceSize);
      }
      var buckets = this.buckets;
      for (var x = 0; x < GlobalHistogramBinarizer2.LUMINANCE_BUCKETS; x++) {
        buckets[x] = 0;
      }
    };
    GlobalHistogramBinarizer2.estimateBlackPoint = function(buckets) {
      var numBuckets = buckets.length;
      var maxBucketCount = 0;
      var firstPeak = 0;
      var firstPeakSize = 0;
      for (var x = 0; x < numBuckets; x++) {
        if (buckets[x] > firstPeakSize) {
          firstPeak = x;
          firstPeakSize = buckets[x];
        }
        if (buckets[x] > maxBucketCount) {
          maxBucketCount = buckets[x];
        }
      }
      var secondPeak = 0;
      var secondPeakScore = 0;
      for (var x = 0; x < numBuckets; x++) {
        var distanceToBiggest = x - firstPeak;
        var score = buckets[x] * distanceToBiggest * distanceToBiggest;
        if (score > secondPeakScore) {
          secondPeak = x;
          secondPeakScore = score;
        }
      }
      if (firstPeak > secondPeak) {
        var temp = firstPeak;
        firstPeak = secondPeak;
        secondPeak = temp;
      }
      if (secondPeak - firstPeak <= numBuckets / 16) {
        throw new NotFoundException_default();
      }
      var bestValley = secondPeak - 1;
      var bestValleyScore = -1;
      for (var x = secondPeak - 1; x > firstPeak; x--) {
        var fromFirst = x - firstPeak;
        var score = fromFirst * fromFirst * (secondPeak - x) * (maxBucketCount - buckets[x]);
        if (score > bestValleyScore) {
          bestValley = x;
          bestValleyScore = score;
        }
      }
      return bestValley << GlobalHistogramBinarizer2.LUMINANCE_SHIFT;
    };
    GlobalHistogramBinarizer2.LUMINANCE_BITS = 5;
    GlobalHistogramBinarizer2.LUMINANCE_SHIFT = 8 - GlobalHistogramBinarizer2.LUMINANCE_BITS;
    GlobalHistogramBinarizer2.LUMINANCE_BUCKETS = 1 << GlobalHistogramBinarizer2.LUMINANCE_BITS;
    GlobalHistogramBinarizer2.EMPTY = Uint8ClampedArray.from([0]);
    return GlobalHistogramBinarizer2;
  }(Binarizer_default)
);
var GlobalHistogramBinarizer_default = GlobalHistogramBinarizer;

// node_modules/@zxing/library/esm/core/common/HybridBinarizer.js
var __extends12 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var HybridBinarizer = (
  /** @class */
  function(_super) {
    __extends12(HybridBinarizer2, _super);
    function HybridBinarizer2(source) {
      var _this = _super.call(this, source) || this;
      _this.matrix = null;
      return _this;
    }
    HybridBinarizer2.prototype.getBlackMatrix = function() {
      if (this.matrix !== null) {
        return this.matrix;
      }
      var source = this.getLuminanceSource();
      var width = source.getWidth();
      var height = source.getHeight();
      if (width >= HybridBinarizer2.MINIMUM_DIMENSION && height >= HybridBinarizer2.MINIMUM_DIMENSION) {
        var luminances = source.getMatrix();
        var subWidth = width >> HybridBinarizer2.BLOCK_SIZE_POWER;
        if ((width & HybridBinarizer2.BLOCK_SIZE_MASK) !== 0) {
          subWidth++;
        }
        var subHeight = height >> HybridBinarizer2.BLOCK_SIZE_POWER;
        if ((height & HybridBinarizer2.BLOCK_SIZE_MASK) !== 0) {
          subHeight++;
        }
        var blackPoints = HybridBinarizer2.calculateBlackPoints(luminances, subWidth, subHeight, width, height);
        var newMatrix = new BitMatrix_default(width, height);
        HybridBinarizer2.calculateThresholdForBlock(luminances, subWidth, subHeight, width, height, blackPoints, newMatrix);
        this.matrix = newMatrix;
      } else {
        this.matrix = _super.prototype.getBlackMatrix.call(this);
      }
      return this.matrix;
    };
    HybridBinarizer2.prototype.createBinarizer = function(source) {
      return new HybridBinarizer2(source);
    };
    HybridBinarizer2.calculateThresholdForBlock = function(luminances, subWidth, subHeight, width, height, blackPoints, matrix) {
      var maxYOffset = height - HybridBinarizer2.BLOCK_SIZE;
      var maxXOffset = width - HybridBinarizer2.BLOCK_SIZE;
      for (var y = 0; y < subHeight; y++) {
        var yoffset = y << HybridBinarizer2.BLOCK_SIZE_POWER;
        if (yoffset > maxYOffset) {
          yoffset = maxYOffset;
        }
        var top_1 = HybridBinarizer2.cap(y, 2, subHeight - 3);
        for (var x = 0; x < subWidth; x++) {
          var xoffset = x << HybridBinarizer2.BLOCK_SIZE_POWER;
          if (xoffset > maxXOffset) {
            xoffset = maxXOffset;
          }
          var left = HybridBinarizer2.cap(x, 2, subWidth - 3);
          var sum = 0;
          for (var z = -2; z <= 2; z++) {
            var blackRow = blackPoints[top_1 + z];
            sum += blackRow[left - 2] + blackRow[left - 1] + blackRow[left] + blackRow[left + 1] + blackRow[left + 2];
          }
          var average = sum / 25;
          HybridBinarizer2.thresholdBlock(luminances, xoffset, yoffset, average, width, matrix);
        }
      }
    };
    HybridBinarizer2.cap = function(value, min, max) {
      return value < min ? min : value > max ? max : value;
    };
    HybridBinarizer2.thresholdBlock = function(luminances, xoffset, yoffset, threshold, stride, matrix) {
      for (var y = 0, offset = yoffset * stride + xoffset; y < HybridBinarizer2.BLOCK_SIZE; y++, offset += stride) {
        for (var x = 0; x < HybridBinarizer2.BLOCK_SIZE; x++) {
          if ((luminances[offset + x] & 255) <= threshold) {
            matrix.set(xoffset + x, yoffset + y);
          }
        }
      }
    };
    HybridBinarizer2.calculateBlackPoints = function(luminances, subWidth, subHeight, width, height) {
      var maxYOffset = height - HybridBinarizer2.BLOCK_SIZE;
      var maxXOffset = width - HybridBinarizer2.BLOCK_SIZE;
      var blackPoints = new Array(subHeight);
      for (var y = 0; y < subHeight; y++) {
        blackPoints[y] = new Int32Array(subWidth);
        var yoffset = y << HybridBinarizer2.BLOCK_SIZE_POWER;
        if (yoffset > maxYOffset) {
          yoffset = maxYOffset;
        }
        for (var x = 0; x < subWidth; x++) {
          var xoffset = x << HybridBinarizer2.BLOCK_SIZE_POWER;
          if (xoffset > maxXOffset) {
            xoffset = maxXOffset;
          }
          var sum = 0;
          var min = 255;
          var max = 0;
          for (var yy = 0, offset = yoffset * width + xoffset; yy < HybridBinarizer2.BLOCK_SIZE; yy++, offset += width) {
            for (var xx = 0; xx < HybridBinarizer2.BLOCK_SIZE; xx++) {
              var pixel = luminances[offset + xx] & 255;
              sum += pixel;
              if (pixel < min) {
                min = pixel;
              }
              if (pixel > max) {
                max = pixel;
              }
            }
            if (max - min > HybridBinarizer2.MIN_DYNAMIC_RANGE) {
              for (yy++, offset += width; yy < HybridBinarizer2.BLOCK_SIZE; yy++, offset += width) {
                for (var xx = 0; xx < HybridBinarizer2.BLOCK_SIZE; xx++) {
                  sum += luminances[offset + xx] & 255;
                }
              }
            }
          }
          var average = sum >> HybridBinarizer2.BLOCK_SIZE_POWER * 2;
          if (max - min <= HybridBinarizer2.MIN_DYNAMIC_RANGE) {
            average = min / 2;
            if (y > 0 && x > 0) {
              var averageNeighborBlackPoint = (blackPoints[y - 1][x] + 2 * blackPoints[y][x - 1] + blackPoints[y - 1][x - 1]) / 4;
              if (min < averageNeighborBlackPoint) {
                average = averageNeighborBlackPoint;
              }
            }
          }
          blackPoints[y][x] = average;
        }
      }
      return blackPoints;
    };
    HybridBinarizer2.BLOCK_SIZE_POWER = 3;
    HybridBinarizer2.BLOCK_SIZE = 1 << HybridBinarizer2.BLOCK_SIZE_POWER;
    HybridBinarizer2.BLOCK_SIZE_MASK = HybridBinarizer2.BLOCK_SIZE - 1;
    HybridBinarizer2.MINIMUM_DIMENSION = HybridBinarizer2.BLOCK_SIZE * 5;
    HybridBinarizer2.MIN_DYNAMIC_RANGE = 24;
    return HybridBinarizer2;
  }(GlobalHistogramBinarizer_default)
);
var HybridBinarizer_default = HybridBinarizer;

// node_modules/@zxing/library/esm/core/LuminanceSource.js
var LuminanceSource = (
  /** @class */
  function() {
    function LuminanceSource2(width, height) {
      this.width = width;
      this.height = height;
    }
    LuminanceSource2.prototype.getWidth = function() {
      return this.width;
    };
    LuminanceSource2.prototype.getHeight = function() {
      return this.height;
    };
    LuminanceSource2.prototype.isCropSupported = function() {
      return false;
    };
    LuminanceSource2.prototype.crop = function(left, top, width, height) {
      throw new UnsupportedOperationException_default("This luminance source does not support cropping.");
    };
    LuminanceSource2.prototype.isRotateSupported = function() {
      return false;
    };
    LuminanceSource2.prototype.rotateCounterClockwise = function() {
      throw new UnsupportedOperationException_default("This luminance source does not support rotation by 90 degrees.");
    };
    LuminanceSource2.prototype.rotateCounterClockwise45 = function() {
      throw new UnsupportedOperationException_default("This luminance source does not support rotation by 45 degrees.");
    };
    LuminanceSource2.prototype.toString = function() {
      var row = new Uint8ClampedArray(this.width);
      var result = new StringBuilder_default();
      for (var y = 0; y < this.height; y++) {
        var sourceRow = this.getRow(y, row);
        for (var x = 0; x < this.width; x++) {
          var luminance = sourceRow[x] & 255;
          var c = void 0;
          if (luminance < 64) {
            c = "#";
          } else if (luminance < 128) {
            c = "+";
          } else if (luminance < 192) {
            c = ".";
          } else {
            c = " ";
          }
          result.append(c);
        }
        result.append("\n");
      }
      return result.toString();
    };
    return LuminanceSource2;
  }()
);
var LuminanceSource_default = LuminanceSource;

// node_modules/@zxing/library/esm/core/InvertedLuminanceSource.js
var __extends13 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var InvertedLuminanceSource = (
  /** @class */
  function(_super) {
    __extends13(InvertedLuminanceSource2, _super);
    function InvertedLuminanceSource2(delegate) {
      var _this = _super.call(this, delegate.getWidth(), delegate.getHeight()) || this;
      _this.delegate = delegate;
      return _this;
    }
    InvertedLuminanceSource2.prototype.getRow = function(y, row) {
      var sourceRow = this.delegate.getRow(y, row);
      var width = this.getWidth();
      for (var i = 0; i < width; i++) {
        sourceRow[i] = /*(byte)*/
        255 - (sourceRow[i] & 255);
      }
      return sourceRow;
    };
    InvertedLuminanceSource2.prototype.getMatrix = function() {
      var matrix = this.delegate.getMatrix();
      var length = this.getWidth() * this.getHeight();
      var invertedMatrix = new Uint8ClampedArray(length);
      for (var i = 0; i < length; i++) {
        invertedMatrix[i] = /*(byte)*/
        255 - (matrix[i] & 255);
      }
      return invertedMatrix;
    };
    InvertedLuminanceSource2.prototype.isCropSupported = function() {
      return this.delegate.isCropSupported();
    };
    InvertedLuminanceSource2.prototype.crop = function(left, top, width, height) {
      return new InvertedLuminanceSource2(this.delegate.crop(left, top, width, height));
    };
    InvertedLuminanceSource2.prototype.isRotateSupported = function() {
      return this.delegate.isRotateSupported();
    };
    InvertedLuminanceSource2.prototype.invert = function() {
      return this.delegate;
    };
    InvertedLuminanceSource2.prototype.rotateCounterClockwise = function() {
      return new InvertedLuminanceSource2(this.delegate.rotateCounterClockwise());
    };
    InvertedLuminanceSource2.prototype.rotateCounterClockwise45 = function() {
      return new InvertedLuminanceSource2(this.delegate.rotateCounterClockwise45());
    };
    return InvertedLuminanceSource2;
  }(LuminanceSource_default)
);
var InvertedLuminanceSource_default = InvertedLuminanceSource;

// node_modules/@zxing/library/esm/browser/HTMLCanvasElementLuminanceSource.js
var __extends14 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var HTMLCanvasElementLuminanceSource = (
  /** @class */
  function(_super) {
    __extends14(HTMLCanvasElementLuminanceSource2, _super);
    function HTMLCanvasElementLuminanceSource2(canvas, doAutoInvert) {
      if (doAutoInvert === void 0) {
        doAutoInvert = false;
      }
      var _this = _super.call(this, canvas.width, canvas.height) || this;
      _this.canvas = canvas;
      _this.tempCanvasElement = null;
      _this.buffer = HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData(canvas, doAutoInvert);
      return _this;
    }
    HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData = function(canvas, doAutoInvert) {
      if (doAutoInvert === void 0) {
        doAutoInvert = false;
      }
      var imageData = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
      return HTMLCanvasElementLuminanceSource2.toGrayscaleBuffer(imageData.data, canvas.width, canvas.height, doAutoInvert);
    };
    HTMLCanvasElementLuminanceSource2.toGrayscaleBuffer = function(imageBuffer, width, height, doAutoInvert) {
      if (doAutoInvert === void 0) {
        doAutoInvert = false;
      }
      var grayscaleBuffer = new Uint8ClampedArray(width * height);
      HTMLCanvasElementLuminanceSource2.FRAME_INDEX = !HTMLCanvasElementLuminanceSource2.FRAME_INDEX;
      if (HTMLCanvasElementLuminanceSource2.FRAME_INDEX || !doAutoInvert) {
        for (var i = 0, j = 0, length_1 = imageBuffer.length; i < length_1; i += 4, j++) {
          var gray = void 0;
          var alpha = imageBuffer[i + 3];
          if (alpha === 0) {
            gray = 255;
          } else {
            var pixelR = imageBuffer[i];
            var pixelG = imageBuffer[i + 1];
            var pixelB = imageBuffer[i + 2];
            gray = 306 * pixelR + 601 * pixelG + 117 * pixelB + 512 >> 10;
          }
          grayscaleBuffer[j] = gray;
        }
      } else {
        for (var i = 0, j = 0, length_2 = imageBuffer.length; i < length_2; i += 4, j++) {
          var gray = void 0;
          var alpha = imageBuffer[i + 3];
          if (alpha === 0) {
            gray = 255;
          } else {
            var pixelR = imageBuffer[i];
            var pixelG = imageBuffer[i + 1];
            var pixelB = imageBuffer[i + 2];
            gray = 306 * pixelR + 601 * pixelG + 117 * pixelB + 512 >> 10;
          }
          grayscaleBuffer[j] = 255 - gray;
        }
      }
      return grayscaleBuffer;
    };
    HTMLCanvasElementLuminanceSource2.prototype.getRow = function(y, row) {
      if (y < 0 || y >= this.getHeight()) {
        throw new IllegalArgumentException_default("Requested row is outside the image: " + y);
      }
      var width = this.getWidth();
      var start = y * width;
      if (row === null) {
        row = this.buffer.slice(start, start + width);
      } else {
        if (row.length < width) {
          row = new Uint8ClampedArray(width);
        }
        row.set(this.buffer.slice(start, start + width));
      }
      return row;
    };
    HTMLCanvasElementLuminanceSource2.prototype.getMatrix = function() {
      return this.buffer;
    };
    HTMLCanvasElementLuminanceSource2.prototype.isCropSupported = function() {
      return true;
    };
    HTMLCanvasElementLuminanceSource2.prototype.crop = function(left, top, width, height) {
      _super.prototype.crop.call(this, left, top, width, height);
      return this;
    };
    HTMLCanvasElementLuminanceSource2.prototype.isRotateSupported = function() {
      return true;
    };
    HTMLCanvasElementLuminanceSource2.prototype.rotateCounterClockwise = function() {
      this.rotate(-90);
      return this;
    };
    HTMLCanvasElementLuminanceSource2.prototype.rotateCounterClockwise45 = function() {
      this.rotate(-45);
      return this;
    };
    HTMLCanvasElementLuminanceSource2.prototype.getTempCanvasElement = function() {
      if (null === this.tempCanvasElement) {
        var tempCanvasElement = this.canvas.ownerDocument.createElement("canvas");
        tempCanvasElement.width = this.canvas.width;
        tempCanvasElement.height = this.canvas.height;
        this.tempCanvasElement = tempCanvasElement;
      }
      return this.tempCanvasElement;
    };
    HTMLCanvasElementLuminanceSource2.prototype.rotate = function(angle) {
      var tempCanvasElement = this.getTempCanvasElement();
      var tempContext = tempCanvasElement.getContext("2d");
      var angleRadians = angle * HTMLCanvasElementLuminanceSource2.DEGREE_TO_RADIANS;
      var width = this.canvas.width;
      var height = this.canvas.height;
      var newWidth = Math.ceil(Math.abs(Math.cos(angleRadians)) * width + Math.abs(Math.sin(angleRadians)) * height);
      var newHeight = Math.ceil(Math.abs(Math.sin(angleRadians)) * width + Math.abs(Math.cos(angleRadians)) * height);
      tempCanvasElement.width = newWidth;
      tempCanvasElement.height = newHeight;
      tempContext.translate(newWidth / 2, newHeight / 2);
      tempContext.rotate(angleRadians);
      tempContext.drawImage(this.canvas, width / -2, height / -2);
      this.buffer = HTMLCanvasElementLuminanceSource2.makeBufferFromCanvasImageData(tempCanvasElement);
      return this;
    };
    HTMLCanvasElementLuminanceSource2.prototype.invert = function() {
      return new InvertedLuminanceSource_default(this);
    };
    HTMLCanvasElementLuminanceSource2.DEGREE_TO_RADIANS = Math.PI / 180;
    HTMLCanvasElementLuminanceSource2.FRAME_INDEX = true;
    return HTMLCanvasElementLuminanceSource2;
  }(LuminanceSource_default)
);

// node_modules/@zxing/library/esm/browser/VideoInputDevice.js
var VideoInputDevice = (
  /** @class */
  function() {
    function VideoInputDevice2(deviceId, label, groupId) {
      this.deviceId = deviceId;
      this.label = label;
      this.kind = "videoinput";
      this.groupId = groupId || void 0;
    }
    VideoInputDevice2.prototype.toJSON = function() {
      return {
        kind: this.kind,
        groupId: this.groupId,
        deviceId: this.deviceId,
        label: this.label
      };
    };
    return VideoInputDevice2;
  }()
);

// node_modules/@zxing/library/esm/browser/BrowserCodeReader.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = {
    label: 0,
    sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  }, f, y, t, g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var __values3 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var BrowserCodeReader = (
  /** @class */
  function() {
    function BrowserCodeReader2(reader, timeBetweenScansMillis, _hints) {
      if (timeBetweenScansMillis === void 0) {
        timeBetweenScansMillis = 500;
      }
      this.reader = reader;
      this.timeBetweenScansMillis = timeBetweenScansMillis;
      this._hints = _hints;
      this._stopContinuousDecode = false;
      this._stopAsyncDecode = false;
      this._timeBetweenDecodingAttempts = 0;
    }
    Object.defineProperty(BrowserCodeReader2.prototype, "hasNavigator", {
      /**
       * If navigator is present.
       */
      get: function() {
        return typeof navigator !== "undefined";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BrowserCodeReader2.prototype, "isMediaDevicesSuported", {
      /**
       * If mediaDevices under navigator is supported.
       */
      get: function() {
        return this.hasNavigator && !!navigator.mediaDevices;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BrowserCodeReader2.prototype, "canEnumerateDevices", {
      /**
       * If enumerateDevices under navigator is supported.
       */
      get: function() {
        return !!(this.isMediaDevicesSuported && navigator.mediaDevices.enumerateDevices);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BrowserCodeReader2.prototype, "timeBetweenDecodingAttempts", {
      /** Time between two decoding tries in milli seconds. */
      get: function() {
        return this._timeBetweenDecodingAttempts;
      },
      /**
       * Change the time span the decoder waits between two decoding tries.
       *
       * @param {number} millis Time between two decoding tries in milli seconds.
       */
      set: function(millis) {
        this._timeBetweenDecodingAttempts = millis < 0 ? 0 : millis;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BrowserCodeReader2.prototype, "hints", {
      /**
       * Sets the hints.
       */
      get: function() {
        return this._hints;
      },
      /**
       * Sets the hints.
       */
      set: function(hints) {
        this._hints = hints || null;
      },
      enumerable: false,
      configurable: true
    });
    BrowserCodeReader2.prototype.listVideoInputDevices = function() {
      return __awaiter(this, void 0, void 0, function() {
        var devices, videoDevices, devices_1, devices_1_1, device, kind, deviceId, label, groupId, videoDevice;
        var e_1, _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!this.hasNavigator) {
                throw new Error("Can't enumerate devices, navigator is not present.");
              }
              if (!this.canEnumerateDevices) {
                throw new Error("Can't enumerate devices, method not supported.");
              }
              return [4, navigator.mediaDevices.enumerateDevices()];
            case 1:
              devices = _b.sent();
              videoDevices = [];
              try {
                for (devices_1 = __values3(devices), devices_1_1 = devices_1.next(); !devices_1_1.done; devices_1_1 = devices_1.next()) {
                  device = devices_1_1.value;
                  kind = device.kind === "video" ? "videoinput" : device.kind;
                  if (kind !== "videoinput") {
                    continue;
                  }
                  deviceId = device.deviceId || device.id;
                  label = device.label || "Video device " + (videoDevices.length + 1);
                  groupId = device.groupId;
                  videoDevice = {
                    deviceId,
                    label,
                    kind,
                    groupId
                  };
                  videoDevices.push(videoDevice);
                }
              } catch (e_1_1) {
                e_1 = {
                  error: e_1_1
                };
              } finally {
                try {
                  if (devices_1_1 && !devices_1_1.done && (_a2 = devices_1.return)) _a2.call(devices_1);
                } finally {
                  if (e_1) throw e_1.error;
                }
              }
              return [2, videoDevices];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.getVideoInputDevices = function() {
      return __awaiter(this, void 0, void 0, function() {
        var devices;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.listVideoInputDevices()];
            case 1:
              devices = _a2.sent();
              return [2, devices.map(function(d) {
                return new VideoInputDevice(d.deviceId, d.label);
              })];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.findDeviceById = function(deviceId) {
      return __awaiter(this, void 0, void 0, function() {
        var devices;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.listVideoInputDevices()];
            case 1:
              devices = _a2.sent();
              if (!devices) {
                return [2, null];
              }
              return [2, devices.find(function(x) {
                return x.deviceId === deviceId;
              })];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeFromInputVideoDevice = function(deviceId, videoSource) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.decodeOnceFromVideoDevice(deviceId, videoSource)];
            case 1:
              return [2, _a2.sent()];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeOnceFromVideoDevice = function(deviceId, videoSource) {
      return __awaiter(this, void 0, void 0, function() {
        var videoConstraints, constraints;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              this.reset();
              if (!deviceId) {
                videoConstraints = {
                  facingMode: "environment"
                };
              } else {
                videoConstraints = {
                  deviceId: {
                    exact: deviceId
                  }
                };
              }
              constraints = {
                video: videoConstraints
              };
              return [4, this.decodeOnceFromConstraints(constraints, videoSource)];
            case 1:
              return [2, _a2.sent()];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeOnceFromConstraints = function(constraints, videoSource) {
      return __awaiter(this, void 0, void 0, function() {
        var stream;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, navigator.mediaDevices.getUserMedia(constraints)];
            case 1:
              stream = _a2.sent();
              return [4, this.decodeOnceFromStream(stream, videoSource)];
            case 2:
              return [2, _a2.sent()];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeOnceFromStream = function(stream, videoSource) {
      return __awaiter(this, void 0, void 0, function() {
        var video, result;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              this.reset();
              return [4, this.attachStreamToVideo(stream, videoSource)];
            case 1:
              video = _a2.sent();
              return [4, this.decodeOnce(video)];
            case 2:
              result = _a2.sent();
              return [2, result];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeFromInputVideoDeviceContinuously = function(deviceId, videoSource, callbackFn) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.decodeFromVideoDevice(deviceId, videoSource, callbackFn)];
            case 1:
              return [2, _a2.sent()];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeFromVideoDevice = function(deviceId, videoSource, callbackFn) {
      return __awaiter(this, void 0, void 0, function() {
        var videoConstraints, constraints;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              if (!deviceId) {
                videoConstraints = {
                  facingMode: "environment"
                };
              } else {
                videoConstraints = {
                  deviceId: {
                    exact: deviceId
                  }
                };
              }
              constraints = {
                video: videoConstraints
              };
              return [4, this.decodeFromConstraints(constraints, videoSource, callbackFn)];
            case 1:
              return [2, _a2.sent()];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeFromConstraints = function(constraints, videoSource, callbackFn) {
      return __awaiter(this, void 0, void 0, function() {
        var stream;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, navigator.mediaDevices.getUserMedia(constraints)];
            case 1:
              stream = _a2.sent();
              return [4, this.decodeFromStream(stream, videoSource, callbackFn)];
            case 2:
              return [2, _a2.sent()];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.decodeFromStream = function(stream, videoSource, callbackFn) {
      return __awaiter(this, void 0, void 0, function() {
        var video;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              this.reset();
              return [4, this.attachStreamToVideo(stream, videoSource)];
            case 1:
              video = _a2.sent();
              return [4, this.decodeContinuously(video, callbackFn)];
            case 2:
              return [2, _a2.sent()];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.stopAsyncDecode = function() {
      this._stopAsyncDecode = true;
    };
    BrowserCodeReader2.prototype.stopContinuousDecode = function() {
      this._stopContinuousDecode = true;
    };
    BrowserCodeReader2.prototype.attachStreamToVideo = function(stream, videoSource) {
      return __awaiter(this, void 0, void 0, function() {
        var videoElement;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              videoElement = this.prepareVideoElement(videoSource);
              this.addVideoSource(videoElement, stream);
              this.videoElement = videoElement;
              this.stream = stream;
              return [4, this.playVideoOnLoadAsync(videoElement)];
            case 1:
              _a2.sent();
              return [2, videoElement];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.playVideoOnLoadAsync = function(videoElement) {
      var _this = this;
      return new Promise(function(resolve, reject) {
        return _this.playVideoOnLoad(videoElement, function() {
          return resolve();
        });
      });
    };
    BrowserCodeReader2.prototype.playVideoOnLoad = function(element, callbackFn) {
      var _this = this;
      this.videoEndedListener = function() {
        return _this.stopStreams();
      };
      this.videoCanPlayListener = function() {
        return _this.tryPlayVideo(element);
      };
      element.addEventListener("ended", this.videoEndedListener);
      element.addEventListener("canplay", this.videoCanPlayListener);
      element.addEventListener("playing", callbackFn);
      this.tryPlayVideo(element);
    };
    BrowserCodeReader2.prototype.isVideoPlaying = function(video) {
      return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
    };
    BrowserCodeReader2.prototype.tryPlayVideo = function(videoElement) {
      return __awaiter(this, void 0, void 0, function() {
        var _a2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (this.isVideoPlaying(videoElement)) {
                console.warn("Trying to play video that is already playing.");
                return [
                  2
                  /*return*/
                ];
              }
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, videoElement.play()];
            case 2:
              _b.sent();
              return [3, 4];
            case 3:
              _a2 = _b.sent();
              console.warn("It was not possible to play the video.");
              return [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.getMediaElement = function(mediaElementId, type) {
      var mediaElement = document.getElementById(mediaElementId);
      if (!mediaElement) {
        throw new ArgumentException_default("element with id '" + mediaElementId + "' not found");
      }
      if (mediaElement.nodeName.toLowerCase() !== type.toLowerCase()) {
        throw new ArgumentException_default("element with id '" + mediaElementId + "' must be an " + type + " element");
      }
      return mediaElement;
    };
    BrowserCodeReader2.prototype.decodeFromImage = function(source, url) {
      if (!source && !url) {
        throw new ArgumentException_default("either imageElement with a src set or an url must be provided");
      }
      if (url && !source) {
        return this.decodeFromImageUrl(url);
      }
      return this.decodeFromImageElement(source);
    };
    BrowserCodeReader2.prototype.decodeFromVideo = function(source, url) {
      if (!source && !url) {
        throw new ArgumentException_default("Either an element with a src set or an URL must be provided");
      }
      if (url && !source) {
        return this.decodeFromVideoUrl(url);
      }
      return this.decodeFromVideoElement(source);
    };
    BrowserCodeReader2.prototype.decodeFromVideoContinuously = function(source, url, callbackFn) {
      if (void 0 === source && void 0 === url) {
        throw new ArgumentException_default("Either an element with a src set or an URL must be provided");
      }
      if (url && !source) {
        return this.decodeFromVideoUrlContinuously(url, callbackFn);
      }
      return this.decodeFromVideoElementContinuously(source, callbackFn);
    };
    BrowserCodeReader2.prototype.decodeFromImageElement = function(source) {
      if (!source) {
        throw new ArgumentException_default("An image element must be provided.");
      }
      this.reset();
      var element = this.prepareImageElement(source);
      this.imageElement = element;
      var task;
      if (this.isImageLoaded(element)) {
        task = this.decodeOnce(element, false, true);
      } else {
        task = this._decodeOnLoadImage(element);
      }
      return task;
    };
    BrowserCodeReader2.prototype.decodeFromVideoElement = function(source) {
      var element = this._decodeFromVideoElementSetup(source);
      return this._decodeOnLoadVideo(element);
    };
    BrowserCodeReader2.prototype.decodeFromVideoElementContinuously = function(source, callbackFn) {
      var element = this._decodeFromVideoElementSetup(source);
      return this._decodeOnLoadVideoContinuously(element, callbackFn);
    };
    BrowserCodeReader2.prototype._decodeFromVideoElementSetup = function(source) {
      if (!source) {
        throw new ArgumentException_default("A video element must be provided.");
      }
      this.reset();
      var element = this.prepareVideoElement(source);
      this.videoElement = element;
      return element;
    };
    BrowserCodeReader2.prototype.decodeFromImageUrl = function(url) {
      if (!url) {
        throw new ArgumentException_default("An URL must be provided.");
      }
      this.reset();
      var element = this.prepareImageElement();
      this.imageElement = element;
      var decodeTask = this._decodeOnLoadImage(element);
      element.src = url;
      return decodeTask;
    };
    BrowserCodeReader2.prototype.decodeFromVideoUrl = function(url) {
      if (!url) {
        throw new ArgumentException_default("An URL must be provided.");
      }
      this.reset();
      var element = this.prepareVideoElement();
      var decodeTask = this.decodeFromVideoElement(element);
      element.src = url;
      return decodeTask;
    };
    BrowserCodeReader2.prototype.decodeFromVideoUrlContinuously = function(url, callbackFn) {
      if (!url) {
        throw new ArgumentException_default("An URL must be provided.");
      }
      this.reset();
      var element = this.prepareVideoElement();
      var decodeTask = this.decodeFromVideoElementContinuously(element, callbackFn);
      element.src = url;
      return decodeTask;
    };
    BrowserCodeReader2.prototype._decodeOnLoadImage = function(element) {
      var _this = this;
      return new Promise(function(resolve, reject) {
        _this.imageLoadedListener = function() {
          return _this.decodeOnce(element, false, true).then(resolve, reject);
        };
        element.addEventListener("load", _this.imageLoadedListener);
      });
    };
    BrowserCodeReader2.prototype._decodeOnLoadVideo = function(videoElement) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.playVideoOnLoadAsync(videoElement)];
            case 1:
              _a2.sent();
              return [4, this.decodeOnce(videoElement)];
            case 2:
              return [2, _a2.sent()];
          }
        });
      });
    };
    BrowserCodeReader2.prototype._decodeOnLoadVideoContinuously = function(videoElement, callbackFn) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, this.playVideoOnLoadAsync(videoElement)];
            case 1:
              _a2.sent();
              this.decodeContinuously(videoElement, callbackFn);
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    BrowserCodeReader2.prototype.isImageLoaded = function(img) {
      if (!img.complete) {
        return false;
      }
      if (img.naturalWidth === 0) {
        return false;
      }
      return true;
    };
    BrowserCodeReader2.prototype.prepareImageElement = function(imageSource) {
      var imageElement;
      if (typeof imageSource === "undefined") {
        imageElement = document.createElement("img");
        imageElement.width = 200;
        imageElement.height = 200;
      }
      if (typeof imageSource === "string") {
        imageElement = this.getMediaElement(imageSource, "img");
      }
      if (imageSource instanceof HTMLImageElement) {
        imageElement = imageSource;
      }
      return imageElement;
    };
    BrowserCodeReader2.prototype.prepareVideoElement = function(videoSource) {
      var videoElement;
      if (!videoSource && typeof document !== "undefined") {
        videoElement = document.createElement("video");
        videoElement.width = 200;
        videoElement.height = 200;
      }
      if (typeof videoSource === "string") {
        videoElement = this.getMediaElement(videoSource, "video");
      }
      if (videoSource instanceof HTMLVideoElement) {
        videoElement = videoSource;
      }
      videoElement.setAttribute("autoplay", "true");
      videoElement.setAttribute("muted", "true");
      videoElement.setAttribute("playsinline", "true");
      return videoElement;
    };
    BrowserCodeReader2.prototype.decodeOnce = function(element, retryIfNotFound, retryIfChecksumOrFormatError) {
      var _this = this;
      if (retryIfNotFound === void 0) {
        retryIfNotFound = true;
      }
      if (retryIfChecksumOrFormatError === void 0) {
        retryIfChecksumOrFormatError = true;
      }
      this._stopAsyncDecode = false;
      var loop = function(resolve, reject) {
        if (_this._stopAsyncDecode) {
          reject(new NotFoundException_default("Video stream has ended before any code could be detected."));
          _this._stopAsyncDecode = void 0;
          return;
        }
        try {
          var result = _this.decode(element);
          resolve(result);
        } catch (e) {
          var ifNotFound = retryIfNotFound && e instanceof NotFoundException_default;
          var isChecksumOrFormatError = e instanceof ChecksumException_default || e instanceof FormatException_default;
          var ifChecksumOrFormat = isChecksumOrFormatError && retryIfChecksumOrFormatError;
          if (ifNotFound || ifChecksumOrFormat) {
            return setTimeout(loop, _this._timeBetweenDecodingAttempts, resolve, reject);
          }
          reject(e);
        }
      };
      return new Promise(function(resolve, reject) {
        return loop(resolve, reject);
      });
    };
    BrowserCodeReader2.prototype.decodeContinuously = function(element, callbackFn) {
      var _this = this;
      this._stopContinuousDecode = false;
      var loop = function() {
        if (_this._stopContinuousDecode) {
          _this._stopContinuousDecode = void 0;
          return;
        }
        try {
          var result = _this.decode(element);
          callbackFn(result, null);
          setTimeout(loop, _this.timeBetweenScansMillis);
        } catch (e) {
          callbackFn(null, e);
          var isChecksumOrFormatError = e instanceof ChecksumException_default || e instanceof FormatException_default;
          var isNotFound = e instanceof NotFoundException_default;
          if (isChecksumOrFormatError || isNotFound) {
            setTimeout(loop, _this._timeBetweenDecodingAttempts);
          }
        }
      };
      loop();
    };
    BrowserCodeReader2.prototype.decode = function(element) {
      var binaryBitmap = this.createBinaryBitmap(element);
      return this.decodeBitmap(binaryBitmap);
    };
    BrowserCodeReader2.prototype.createBinaryBitmap = function(mediaElement) {
      var ctx = this.getCaptureCanvasContext(mediaElement);
      var doAutoInvert = false;
      if (mediaElement instanceof HTMLVideoElement) {
        this.drawFrameOnCanvas(mediaElement);
        doAutoInvert = true;
      } else {
        this.drawImageOnCanvas(mediaElement);
      }
      var canvas = this.getCaptureCanvas(mediaElement);
      var luminanceSource = new HTMLCanvasElementLuminanceSource(canvas, doAutoInvert);
      var hybridBinarizer = new HybridBinarizer_default(luminanceSource);
      return new BinaryBitmap_default(hybridBinarizer);
    };
    BrowserCodeReader2.prototype.getCaptureCanvasContext = function(mediaElement) {
      if (!this.captureCanvasContext) {
        var elem = this.getCaptureCanvas(mediaElement);
        var ctx = void 0;
        try {
          ctx = elem.getContext("2d", {
            willReadFrequently: true
          });
        } catch (e) {
          ctx = elem.getContext("2d");
        }
        this.captureCanvasContext = ctx;
      }
      return this.captureCanvasContext;
    };
    BrowserCodeReader2.prototype.getCaptureCanvas = function(mediaElement) {
      if (!this.captureCanvas) {
        var elem = this.createCaptureCanvas(mediaElement);
        this.captureCanvas = elem;
      }
      return this.captureCanvas;
    };
    BrowserCodeReader2.prototype.drawFrameOnCanvas = function(srcElement, dimensions, canvasElementContext) {
      if (dimensions === void 0) {
        dimensions = {
          sx: 0,
          sy: 0,
          sWidth: srcElement.videoWidth,
          sHeight: srcElement.videoHeight,
          dx: 0,
          dy: 0,
          dWidth: srcElement.videoWidth,
          dHeight: srcElement.videoHeight
        };
      }
      if (canvasElementContext === void 0) {
        canvasElementContext = this.captureCanvasContext;
      }
      canvasElementContext.drawImage(srcElement, dimensions.sx, dimensions.sy, dimensions.sWidth, dimensions.sHeight, dimensions.dx, dimensions.dy, dimensions.dWidth, dimensions.dHeight);
    };
    BrowserCodeReader2.prototype.drawImageOnCanvas = function(srcElement, dimensions, canvasElementContext) {
      if (dimensions === void 0) {
        dimensions = {
          sx: 0,
          sy: 0,
          sWidth: srcElement.naturalWidth,
          sHeight: srcElement.naturalHeight,
          dx: 0,
          dy: 0,
          dWidth: srcElement.naturalWidth,
          dHeight: srcElement.naturalHeight
        };
      }
      if (canvasElementContext === void 0) {
        canvasElementContext = this.captureCanvasContext;
      }
      canvasElementContext.drawImage(srcElement, dimensions.sx, dimensions.sy, dimensions.sWidth, dimensions.sHeight, dimensions.dx, dimensions.dy, dimensions.dWidth, dimensions.dHeight);
    };
    BrowserCodeReader2.prototype.decodeBitmap = function(binaryBitmap) {
      return this.reader.decode(binaryBitmap, this._hints);
    };
    BrowserCodeReader2.prototype.createCaptureCanvas = function(mediaElement) {
      if (typeof document === "undefined") {
        this._destroyCaptureCanvas();
        return null;
      }
      var canvasElement = document.createElement("canvas");
      var width;
      var height;
      if (typeof mediaElement !== "undefined") {
        if (mediaElement instanceof HTMLVideoElement) {
          width = mediaElement.videoWidth;
          height = mediaElement.videoHeight;
        } else if (mediaElement instanceof HTMLImageElement) {
          width = mediaElement.naturalWidth || mediaElement.width;
          height = mediaElement.naturalHeight || mediaElement.height;
        }
      }
      canvasElement.style.width = width + "px";
      canvasElement.style.height = height + "px";
      canvasElement.width = width;
      canvasElement.height = height;
      return canvasElement;
    };
    BrowserCodeReader2.prototype.stopStreams = function() {
      if (this.stream) {
        this.stream.getVideoTracks().forEach(function(t) {
          return t.stop();
        });
        this.stream = void 0;
      }
      if (this._stopAsyncDecode === false) {
        this.stopAsyncDecode();
      }
      if (this._stopContinuousDecode === false) {
        this.stopContinuousDecode();
      }
    };
    BrowserCodeReader2.prototype.reset = function() {
      this.stopStreams();
      this._destroyVideoElement();
      this._destroyImageElement();
      this._destroyCaptureCanvas();
    };
    BrowserCodeReader2.prototype._destroyVideoElement = function() {
      if (!this.videoElement) {
        return;
      }
      if (typeof this.videoEndedListener !== "undefined") {
        this.videoElement.removeEventListener("ended", this.videoEndedListener);
      }
      if (typeof this.videoPlayingEventListener !== "undefined") {
        this.videoElement.removeEventListener("playing", this.videoPlayingEventListener);
      }
      if (typeof this.videoCanPlayListener !== "undefined") {
        this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener);
      }
      this.cleanVideoSource(this.videoElement);
      this.videoElement = void 0;
    };
    BrowserCodeReader2.prototype._destroyImageElement = function() {
      if (!this.imageElement) {
        return;
      }
      if (void 0 !== this.imageLoadedListener) {
        this.imageElement.removeEventListener("load", this.imageLoadedListener);
      }
      this.imageElement.src = void 0;
      this.imageElement.removeAttribute("src");
      this.imageElement = void 0;
    };
    BrowserCodeReader2.prototype._destroyCaptureCanvas = function() {
      this.captureCanvasContext = void 0;
      this.captureCanvas = void 0;
    };
    BrowserCodeReader2.prototype.addVideoSource = function(videoElement, stream) {
      try {
        videoElement.srcObject = stream;
      } catch (err) {
        videoElement.src = URL.createObjectURL(stream);
      }
    };
    BrowserCodeReader2.prototype.cleanVideoSource = function(videoElement) {
      try {
        videoElement.srcObject = null;
      } catch (err) {
        videoElement.src = "";
      }
      this.videoElement.removeAttribute("src");
    };
    return BrowserCodeReader2;
  }()
);

// node_modules/@zxing/library/esm/core/Result.js
var Result = (
  /** @class */
  function() {
    function Result3(text, rawBytes, numBits, resultPoints, format, timestamp) {
      if (numBits === void 0) {
        numBits = rawBytes == null ? 0 : 8 * rawBytes.length;
      }
      if (timestamp === void 0) {
        timestamp = System_default.currentTimeMillis();
      }
      this.text = text;
      this.rawBytes = rawBytes;
      this.numBits = numBits;
      this.resultPoints = resultPoints;
      this.format = format;
      this.timestamp = timestamp;
      this.text = text;
      this.rawBytes = rawBytes;
      if (void 0 === numBits || null === numBits) {
        this.numBits = rawBytes === null || rawBytes === void 0 ? 0 : 8 * rawBytes.length;
      } else {
        this.numBits = numBits;
      }
      this.resultPoints = resultPoints;
      this.format = format;
      this.resultMetadata = null;
      if (void 0 === timestamp || null === timestamp) {
        this.timestamp = System_default.currentTimeMillis();
      } else {
        this.timestamp = timestamp;
      }
    }
    Result3.prototype.getText = function() {
      return this.text;
    };
    Result3.prototype.getRawBytes = function() {
      return this.rawBytes;
    };
    Result3.prototype.getNumBits = function() {
      return this.numBits;
    };
    Result3.prototype.getResultPoints = function() {
      return this.resultPoints;
    };
    Result3.prototype.getBarcodeFormat = function() {
      return this.format;
    };
    Result3.prototype.getResultMetadata = function() {
      return this.resultMetadata;
    };
    Result3.prototype.putMetadata = function(type, value) {
      if (this.resultMetadata === null) {
        this.resultMetadata = /* @__PURE__ */ new Map();
      }
      this.resultMetadata.set(type, value);
    };
    Result3.prototype.putAllMetadata = function(metadata) {
      if (metadata !== null) {
        if (this.resultMetadata === null) {
          this.resultMetadata = metadata;
        } else {
          this.resultMetadata = new Map(metadata);
        }
      }
    };
    Result3.prototype.addResultPoints = function(newPoints) {
      var oldPoints = this.resultPoints;
      if (oldPoints === null) {
        this.resultPoints = newPoints;
      } else if (newPoints !== null && newPoints.length > 0) {
        var allPoints = new Array(oldPoints.length + newPoints.length);
        System_default.arraycopy(oldPoints, 0, allPoints, 0, oldPoints.length);
        System_default.arraycopy(newPoints, 0, allPoints, oldPoints.length, newPoints.length);
        this.resultPoints = allPoints;
      }
    };
    Result3.prototype.getTimestamp = function() {
      return this.timestamp;
    };
    Result3.prototype.toString = function() {
      return this.text;
    };
    return Result3;
  }()
);
var Result_default = Result;

// node_modules/@zxing/library/esm/core/BarcodeFormat.js
var BarcodeFormat;
(function(BarcodeFormat2) {
  BarcodeFormat2[BarcodeFormat2["AZTEC"] = 0] = "AZTEC";
  BarcodeFormat2[BarcodeFormat2["CODABAR"] = 1] = "CODABAR";
  BarcodeFormat2[BarcodeFormat2["CODE_39"] = 2] = "CODE_39";
  BarcodeFormat2[BarcodeFormat2["CODE_93"] = 3] = "CODE_93";
  BarcodeFormat2[BarcodeFormat2["CODE_128"] = 4] = "CODE_128";
  BarcodeFormat2[BarcodeFormat2["DATA_MATRIX"] = 5] = "DATA_MATRIX";
  BarcodeFormat2[BarcodeFormat2["EAN_8"] = 6] = "EAN_8";
  BarcodeFormat2[BarcodeFormat2["EAN_13"] = 7] = "EAN_13";
  BarcodeFormat2[BarcodeFormat2["ITF"] = 8] = "ITF";
  BarcodeFormat2[BarcodeFormat2["MAXICODE"] = 9] = "MAXICODE";
  BarcodeFormat2[BarcodeFormat2["PDF_417"] = 10] = "PDF_417";
  BarcodeFormat2[BarcodeFormat2["QR_CODE"] = 11] = "QR_CODE";
  BarcodeFormat2[BarcodeFormat2["RSS_14"] = 12] = "RSS_14";
  BarcodeFormat2[BarcodeFormat2["RSS_EXPANDED"] = 13] = "RSS_EXPANDED";
  BarcodeFormat2[BarcodeFormat2["UPC_A"] = 14] = "UPC_A";
  BarcodeFormat2[BarcodeFormat2["UPC_E"] = 15] = "UPC_E";
  BarcodeFormat2[BarcodeFormat2["UPC_EAN_EXTENSION"] = 16] = "UPC_EAN_EXTENSION";
})(BarcodeFormat || (BarcodeFormat = {}));
var BarcodeFormat_default = BarcodeFormat;

// node_modules/@zxing/library/esm/core/ResultMetadataType.js
var ResultMetadataType;
(function(ResultMetadataType2) {
  ResultMetadataType2[ResultMetadataType2["OTHER"] = 0] = "OTHER";
  ResultMetadataType2[ResultMetadataType2["ORIENTATION"] = 1] = "ORIENTATION";
  ResultMetadataType2[ResultMetadataType2["BYTE_SEGMENTS"] = 2] = "BYTE_SEGMENTS";
  ResultMetadataType2[ResultMetadataType2["ERROR_CORRECTION_LEVEL"] = 3] = "ERROR_CORRECTION_LEVEL";
  ResultMetadataType2[ResultMetadataType2["ISSUE_NUMBER"] = 4] = "ISSUE_NUMBER";
  ResultMetadataType2[ResultMetadataType2["SUGGESTED_PRICE"] = 5] = "SUGGESTED_PRICE";
  ResultMetadataType2[ResultMetadataType2["POSSIBLE_COUNTRY"] = 6] = "POSSIBLE_COUNTRY";
  ResultMetadataType2[ResultMetadataType2["UPC_EAN_EXTENSION"] = 7] = "UPC_EAN_EXTENSION";
  ResultMetadataType2[ResultMetadataType2["PDF417_EXTRA_METADATA"] = 8] = "PDF417_EXTRA_METADATA";
  ResultMetadataType2[ResultMetadataType2["STRUCTURED_APPEND_SEQUENCE"] = 9] = "STRUCTURED_APPEND_SEQUENCE";
  ResultMetadataType2[ResultMetadataType2["STRUCTURED_APPEND_PARITY"] = 10] = "STRUCTURED_APPEND_PARITY";
})(ResultMetadataType || (ResultMetadataType = {}));
var ResultMetadataType_default = ResultMetadataType;

// node_modules/@zxing/library/esm/core/common/DecoderResult.js
var DecoderResult = (
  /** @class */
  function() {
    function DecoderResult2(rawBytes, text, byteSegments, ecLevel, structuredAppendSequenceNumber, structuredAppendParity) {
      if (structuredAppendSequenceNumber === void 0) {
        structuredAppendSequenceNumber = -1;
      }
      if (structuredAppendParity === void 0) {
        structuredAppendParity = -1;
      }
      this.rawBytes = rawBytes;
      this.text = text;
      this.byteSegments = byteSegments;
      this.ecLevel = ecLevel;
      this.structuredAppendSequenceNumber = structuredAppendSequenceNumber;
      this.structuredAppendParity = structuredAppendParity;
      this.numBits = rawBytes === void 0 || rawBytes === null ? 0 : 8 * rawBytes.length;
    }
    DecoderResult2.prototype.getRawBytes = function() {
      return this.rawBytes;
    };
    DecoderResult2.prototype.getNumBits = function() {
      return this.numBits;
    };
    DecoderResult2.prototype.setNumBits = function(numBits) {
      this.numBits = numBits;
    };
    DecoderResult2.prototype.getText = function() {
      return this.text;
    };
    DecoderResult2.prototype.getByteSegments = function() {
      return this.byteSegments;
    };
    DecoderResult2.prototype.getECLevel = function() {
      return this.ecLevel;
    };
    DecoderResult2.prototype.getErrorsCorrected = function() {
      return this.errorsCorrected;
    };
    DecoderResult2.prototype.setErrorsCorrected = function(errorsCorrected) {
      this.errorsCorrected = errorsCorrected;
    };
    DecoderResult2.prototype.getErasures = function() {
      return this.erasures;
    };
    DecoderResult2.prototype.setErasures = function(erasures) {
      this.erasures = erasures;
    };
    DecoderResult2.prototype.getOther = function() {
      return this.other;
    };
    DecoderResult2.prototype.setOther = function(other) {
      this.other = other;
    };
    DecoderResult2.prototype.hasStructuredAppend = function() {
      return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
    };
    DecoderResult2.prototype.getStructuredAppendParity = function() {
      return this.structuredAppendParity;
    };
    DecoderResult2.prototype.getStructuredAppendSequenceNumber = function() {
      return this.structuredAppendSequenceNumber;
    };
    return DecoderResult2;
  }()
);
var DecoderResult_default = DecoderResult;

// node_modules/@zxing/library/esm/core/common/reedsolomon/AbstractGenericGF.js
var AbstractGenericGF = (
  /** @class */
  function() {
    function AbstractGenericGF2() {
    }
    AbstractGenericGF2.prototype.exp = function(a) {
      return this.expTable[a];
    };
    AbstractGenericGF2.prototype.log = function(a) {
      if (a === 0) {
        throw new IllegalArgumentException_default();
      }
      return this.logTable[a];
    };
    AbstractGenericGF2.addOrSubtract = function(a, b) {
      return a ^ b;
    };
    return AbstractGenericGF2;
  }()
);
var AbstractGenericGF_default = AbstractGenericGF;

// node_modules/@zxing/library/esm/core/common/reedsolomon/GenericGFPoly.js
var GenericGFPoly = (
  /** @class */
  function() {
    function GenericGFPoly2(field, coefficients) {
      if (coefficients.length === 0) {
        throw new IllegalArgumentException_default();
      }
      this.field = field;
      var coefficientsLength = coefficients.length;
      if (coefficientsLength > 1 && coefficients[0] === 0) {
        var firstNonZero = 1;
        while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
          firstNonZero++;
        }
        if (firstNonZero === coefficientsLength) {
          this.coefficients = Int32Array.from([0]);
        } else {
          this.coefficients = new Int32Array(coefficientsLength - firstNonZero);
          System_default.arraycopy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
        }
      } else {
        this.coefficients = coefficients;
      }
    }
    GenericGFPoly2.prototype.getCoefficients = function() {
      return this.coefficients;
    };
    GenericGFPoly2.prototype.getDegree = function() {
      return this.coefficients.length - 1;
    };
    GenericGFPoly2.prototype.isZero = function() {
      return this.coefficients[0] === 0;
    };
    GenericGFPoly2.prototype.getCoefficient = function(degree) {
      return this.coefficients[this.coefficients.length - 1 - degree];
    };
    GenericGFPoly2.prototype.evaluateAt = function(a) {
      if (a === 0) {
        return this.getCoefficient(0);
      }
      var coefficients = this.coefficients;
      var result;
      if (a === 1) {
        result = 0;
        for (var i = 0, length_1 = coefficients.length; i !== length_1; i++) {
          var coefficient = coefficients[i];
          result = AbstractGenericGF_default.addOrSubtract(result, coefficient);
        }
        return result;
      }
      result = coefficients[0];
      var size = coefficients.length;
      var field = this.field;
      for (var i = 1; i < size; i++) {
        result = AbstractGenericGF_default.addOrSubtract(field.multiply(a, result), coefficients[i]);
      }
      return result;
    };
    GenericGFPoly2.prototype.addOrSubtract = function(other) {
      if (!this.field.equals(other.field)) {
        throw new IllegalArgumentException_default("GenericGFPolys do not have same GenericGF field");
      }
      if (this.isZero()) {
        return other;
      }
      if (other.isZero()) {
        return this;
      }
      var smallerCoefficients = this.coefficients;
      var largerCoefficients = other.coefficients;
      if (smallerCoefficients.length > largerCoefficients.length) {
        var temp = smallerCoefficients;
        smallerCoefficients = largerCoefficients;
        largerCoefficients = temp;
      }
      var sumDiff = new Int32Array(largerCoefficients.length);
      var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
      System_default.arraycopy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
      for (var i = lengthDiff; i < largerCoefficients.length; i++) {
        sumDiff[i] = AbstractGenericGF_default.addOrSubtract(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
      }
      return new GenericGFPoly2(this.field, sumDiff);
    };
    GenericGFPoly2.prototype.multiply = function(other) {
      if (!this.field.equals(other.field)) {
        throw new IllegalArgumentException_default("GenericGFPolys do not have same GenericGF field");
      }
      if (this.isZero() || other.isZero()) {
        return this.field.getZero();
      }
      var aCoefficients = this.coefficients;
      var aLength = aCoefficients.length;
      var bCoefficients = other.coefficients;
      var bLength = bCoefficients.length;
      var product = new Int32Array(aLength + bLength - 1);
      var field = this.field;
      for (var i = 0; i < aLength; i++) {
        var aCoeff = aCoefficients[i];
        for (var j = 0; j < bLength; j++) {
          product[i + j] = AbstractGenericGF_default.addOrSubtract(product[i + j], field.multiply(aCoeff, bCoefficients[j]));
        }
      }
      return new GenericGFPoly2(field, product);
    };
    GenericGFPoly2.prototype.multiplyScalar = function(scalar) {
      if (scalar === 0) {
        return this.field.getZero();
      }
      if (scalar === 1) {
        return this;
      }
      var size = this.coefficients.length;
      var field = this.field;
      var product = new Int32Array(size);
      var coefficients = this.coefficients;
      for (var i = 0; i < size; i++) {
        product[i] = field.multiply(coefficients[i], scalar);
      }
      return new GenericGFPoly2(field, product);
    };
    GenericGFPoly2.prototype.multiplyByMonomial = function(degree, coefficient) {
      if (degree < 0) {
        throw new IllegalArgumentException_default();
      }
      if (coefficient === 0) {
        return this.field.getZero();
      }
      var coefficients = this.coefficients;
      var size = coefficients.length;
      var product = new Int32Array(size + degree);
      var field = this.field;
      for (var i = 0; i < size; i++) {
        product[i] = field.multiply(coefficients[i], coefficient);
      }
      return new GenericGFPoly2(field, product);
    };
    GenericGFPoly2.prototype.divide = function(other) {
      if (!this.field.equals(other.field)) {
        throw new IllegalArgumentException_default("GenericGFPolys do not have same GenericGF field");
      }
      if (other.isZero()) {
        throw new IllegalArgumentException_default("Divide by 0");
      }
      var field = this.field;
      var quotient = field.getZero();
      var remainder = this;
      var denominatorLeadingTerm = other.getCoefficient(other.getDegree());
      var inverseDenominatorLeadingTerm = field.inverse(denominatorLeadingTerm);
      while (remainder.getDegree() >= other.getDegree() && !remainder.isZero()) {
        var degreeDifference = remainder.getDegree() - other.getDegree();
        var scale = field.multiply(remainder.getCoefficient(remainder.getDegree()), inverseDenominatorLeadingTerm);
        var term = other.multiplyByMonomial(degreeDifference, scale);
        var iterationQuotient = field.buildMonomial(degreeDifference, scale);
        quotient = quotient.addOrSubtract(iterationQuotient);
        remainder = remainder.addOrSubtract(term);
      }
      return [quotient, remainder];
    };
    GenericGFPoly2.prototype.toString = function() {
      var result = "";
      for (var degree = this.getDegree(); degree >= 0; degree--) {
        var coefficient = this.getCoefficient(degree);
        if (coefficient !== 0) {
          if (coefficient < 0) {
            result += " - ";
            coefficient = -coefficient;
          } else {
            if (result.length > 0) {
              result += " + ";
            }
          }
          if (degree === 0 || coefficient !== 1) {
            var alphaPower = this.field.log(coefficient);
            if (alphaPower === 0) {
              result += "1";
            } else if (alphaPower === 1) {
              result += "a";
            } else {
              result += "a^";
              result += alphaPower;
            }
          }
          if (degree !== 0) {
            if (degree === 1) {
              result += "x";
            } else {
              result += "x^";
              result += degree;
            }
          }
        }
      }
      return result;
    };
    return GenericGFPoly2;
  }()
);
var GenericGFPoly_default = GenericGFPoly;

// node_modules/@zxing/library/esm/core/ArithmeticException.js
var __extends15 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ArithmeticException = (
  /** @class */
  function(_super) {
    __extends15(ArithmeticException2, _super);
    function ArithmeticException2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ArithmeticException2.kind = "ArithmeticException";
    return ArithmeticException2;
  }(Exception_default)
);
var ArithmeticException_default = ArithmeticException;

// node_modules/@zxing/library/esm/core/common/reedsolomon/GenericGF.js
var __extends16 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var GenericGF = (
  /** @class */
  function(_super) {
    __extends16(GenericGF2, _super);
    function GenericGF2(primitive, size, generatorBase) {
      var _this = _super.call(this) || this;
      _this.primitive = primitive;
      _this.size = size;
      _this.generatorBase = generatorBase;
      var expTable = new Int32Array(size);
      var x = 1;
      for (var i = 0; i < size; i++) {
        expTable[i] = x;
        x *= 2;
        if (x >= size) {
          x ^= primitive;
          x &= size - 1;
        }
      }
      _this.expTable = expTable;
      var logTable = new Int32Array(size);
      for (var i = 0; i < size - 1; i++) {
        logTable[expTable[i]] = i;
      }
      _this.logTable = logTable;
      _this.zero = new GenericGFPoly_default(_this, Int32Array.from([0]));
      _this.one = new GenericGFPoly_default(_this, Int32Array.from([1]));
      return _this;
    }
    GenericGF2.prototype.getZero = function() {
      return this.zero;
    };
    GenericGF2.prototype.getOne = function() {
      return this.one;
    };
    GenericGF2.prototype.buildMonomial = function(degree, coefficient) {
      if (degree < 0) {
        throw new IllegalArgumentException_default();
      }
      if (coefficient === 0) {
        return this.zero;
      }
      var coefficients = new Int32Array(degree + 1);
      coefficients[0] = coefficient;
      return new GenericGFPoly_default(this, coefficients);
    };
    GenericGF2.prototype.inverse = function(a) {
      if (a === 0) {
        throw new ArithmeticException_default();
      }
      return this.expTable[this.size - this.logTable[a] - 1];
    };
    GenericGF2.prototype.multiply = function(a, b) {
      if (a === 0 || b === 0) {
        return 0;
      }
      return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.size - 1)];
    };
    GenericGF2.prototype.getSize = function() {
      return this.size;
    };
    GenericGF2.prototype.getGeneratorBase = function() {
      return this.generatorBase;
    };
    GenericGF2.prototype.toString = function() {
      return "GF(0x" + Integer_default.toHexString(this.primitive) + "," + this.size + ")";
    };
    GenericGF2.prototype.equals = function(o) {
      return o === this;
    };
    GenericGF2.AZTEC_DATA_12 = new GenericGF2(4201, 4096, 1);
    GenericGF2.AZTEC_DATA_10 = new GenericGF2(1033, 1024, 1);
    GenericGF2.AZTEC_DATA_6 = new GenericGF2(67, 64, 1);
    GenericGF2.AZTEC_PARAM = new GenericGF2(19, 16, 1);
    GenericGF2.QR_CODE_FIELD_256 = new GenericGF2(285, 256, 0);
    GenericGF2.DATA_MATRIX_FIELD_256 = new GenericGF2(301, 256, 1);
    GenericGF2.AZTEC_DATA_8 = GenericGF2.DATA_MATRIX_FIELD_256;
    GenericGF2.MAXICODE_FIELD_64 = GenericGF2.AZTEC_DATA_6;
    return GenericGF2;
  }(AbstractGenericGF_default)
);
var GenericGF_default = GenericGF;

// node_modules/@zxing/library/esm/core/ReedSolomonException.js
var __extends17 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ReedSolomonException = (
  /** @class */
  function(_super) {
    __extends17(ReedSolomonException2, _super);
    function ReedSolomonException2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ReedSolomonException2.kind = "ReedSolomonException";
    return ReedSolomonException2;
  }(Exception_default)
);
var ReedSolomonException_default = ReedSolomonException;

// node_modules/@zxing/library/esm/core/IllegalStateException.js
var __extends18 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var IllegalStateException = (
  /** @class */
  function(_super) {
    __extends18(IllegalStateException2, _super);
    function IllegalStateException2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    IllegalStateException2.kind = "IllegalStateException";
    return IllegalStateException2;
  }(Exception_default)
);
var IllegalStateException_default = IllegalStateException;

// node_modules/@zxing/library/esm/core/common/reedsolomon/ReedSolomonDecoder.js
var ReedSolomonDecoder = (
  /** @class */
  function() {
    function ReedSolomonDecoder2(field) {
      this.field = field;
    }
    ReedSolomonDecoder2.prototype.decode = function(received, twoS) {
      var field = this.field;
      var poly = new GenericGFPoly_default(field, received);
      var syndromeCoefficients = new Int32Array(twoS);
      var noError = true;
      for (var i = 0; i < twoS; i++) {
        var evalResult = poly.evaluateAt(field.exp(i + field.getGeneratorBase()));
        syndromeCoefficients[syndromeCoefficients.length - 1 - i] = evalResult;
        if (evalResult !== 0) {
          noError = false;
        }
      }
      if (noError) {
        return;
      }
      var syndrome = new GenericGFPoly_default(field, syndromeCoefficients);
      var sigmaOmega = this.runEuclideanAlgorithm(field.buildMonomial(twoS, 1), syndrome, twoS);
      var sigma = sigmaOmega[0];
      var omega = sigmaOmega[1];
      var errorLocations = this.findErrorLocations(sigma);
      var errorMagnitudes = this.findErrorMagnitudes(omega, errorLocations);
      for (var i = 0; i < errorLocations.length; i++) {
        var position = received.length - 1 - field.log(errorLocations[i]);
        if (position < 0) {
          throw new ReedSolomonException_default("Bad error location");
        }
        received[position] = GenericGF_default.addOrSubtract(received[position], errorMagnitudes[i]);
      }
    };
    ReedSolomonDecoder2.prototype.runEuclideanAlgorithm = function(a, b, R) {
      if (a.getDegree() < b.getDegree()) {
        var temp = a;
        a = b;
        b = temp;
      }
      var field = this.field;
      var rLast = a;
      var r = b;
      var tLast = field.getZero();
      var t = field.getOne();
      while (r.getDegree() >= (R / 2 | 0)) {
        var rLastLast = rLast;
        var tLastLast = tLast;
        rLast = r;
        tLast = t;
        if (rLast.isZero()) {
          throw new ReedSolomonException_default("r_{i-1} was zero");
        }
        r = rLastLast;
        var q = field.getZero();
        var denominatorLeadingTerm = rLast.getCoefficient(rLast.getDegree());
        var dltInverse = field.inverse(denominatorLeadingTerm);
        while (r.getDegree() >= rLast.getDegree() && !r.isZero()) {
          var degreeDiff = r.getDegree() - rLast.getDegree();
          var scale = field.multiply(r.getCoefficient(r.getDegree()), dltInverse);
          q = q.addOrSubtract(field.buildMonomial(degreeDiff, scale));
          r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
        }
        t = q.multiply(tLast).addOrSubtract(tLastLast);
        if (r.getDegree() >= rLast.getDegree()) {
          throw new IllegalStateException_default("Division algorithm failed to reduce polynomial?");
        }
      }
      var sigmaTildeAtZero = t.getCoefficient(0);
      if (sigmaTildeAtZero === 0) {
        throw new ReedSolomonException_default("sigmaTilde(0) was zero");
      }
      var inverse = field.inverse(sigmaTildeAtZero);
      var sigma = t.multiplyScalar(inverse);
      var omega = r.multiplyScalar(inverse);
      return [sigma, omega];
    };
    ReedSolomonDecoder2.prototype.findErrorLocations = function(errorLocator) {
      var numErrors = errorLocator.getDegree();
      if (numErrors === 1) {
        return Int32Array.from([errorLocator.getCoefficient(1)]);
      }
      var result = new Int32Array(numErrors);
      var e = 0;
      var field = this.field;
      for (var i = 1; i < field.getSize() && e < numErrors; i++) {
        if (errorLocator.evaluateAt(i) === 0) {
          result[e] = field.inverse(i);
          e++;
        }
      }
      if (e !== numErrors) {
        throw new ReedSolomonException_default("Error locator degree does not match number of roots");
      }
      return result;
    };
    ReedSolomonDecoder2.prototype.findErrorMagnitudes = function(errorEvaluator, errorLocations) {
      var s = errorLocations.length;
      var result = new Int32Array(s);
      var field = this.field;
      for (var i = 0; i < s; i++) {
        var xiInverse = field.inverse(errorLocations[i]);
        var denominator = 1;
        for (var j = 0; j < s; j++) {
          if (i !== j) {
            var term = field.multiply(errorLocations[j], xiInverse);
            var termPlus1 = (term & 1) === 0 ? term | 1 : term & ~1;
            denominator = field.multiply(denominator, termPlus1);
          }
        }
        result[i] = field.multiply(errorEvaluator.evaluateAt(xiInverse), field.inverse(denominator));
        if (field.getGeneratorBase() !== 0) {
          result[i] = field.multiply(result[i], xiInverse);
        }
      }
      return result;
    };
    return ReedSolomonDecoder2;
  }()
);
var ReedSolomonDecoder_default = ReedSolomonDecoder;

// node_modules/@zxing/library/esm/core/aztec/decoder/Decoder.js
var Table;
(function(Table2) {
  Table2[Table2["UPPER"] = 0] = "UPPER";
  Table2[Table2["LOWER"] = 1] = "LOWER";
  Table2[Table2["MIXED"] = 2] = "MIXED";
  Table2[Table2["DIGIT"] = 3] = "DIGIT";
  Table2[Table2["PUNCT"] = 4] = "PUNCT";
  Table2[Table2["BINARY"] = 5] = "BINARY";
})(Table || (Table = {}));
var Decoder = (
  /** @class */
  function() {
    function Decoder4() {
    }
    Decoder4.prototype.decode = function(detectorResult) {
      this.ddata = detectorResult;
      var matrix = detectorResult.getBits();
      var rawbits = this.extractBits(matrix);
      var correctedBits = this.correctBits(rawbits);
      var rawBytes = Decoder4.convertBoolArrayToByteArray(correctedBits);
      var result = Decoder4.getEncodedData(correctedBits);
      var decoderResult = new DecoderResult_default(rawBytes, result, null, null);
      decoderResult.setNumBits(correctedBits.length);
      return decoderResult;
    };
    Decoder4.highLevelDecode = function(correctedBits) {
      return this.getEncodedData(correctedBits);
    };
    Decoder4.getEncodedData = function(correctedBits) {
      var endIndex = correctedBits.length;
      var latchTable = Table.UPPER;
      var shiftTable = Table.UPPER;
      var result = "";
      var index = 0;
      while (index < endIndex) {
        if (shiftTable === Table.BINARY) {
          if (endIndex - index < 5) {
            break;
          }
          var length_1 = Decoder4.readCode(correctedBits, index, 5);
          index += 5;
          if (length_1 === 0) {
            if (endIndex - index < 11) {
              break;
            }
            length_1 = Decoder4.readCode(correctedBits, index, 11) + 31;
            index += 11;
          }
          for (var charCount = 0; charCount < length_1; charCount++) {
            if (endIndex - index < 8) {
              index = endIndex;
              break;
            }
            var code = Decoder4.readCode(correctedBits, index, 8);
            result += /*(char)*/
            StringUtils_default.castAsNonUtf8Char(code);
            index += 8;
          }
          shiftTable = latchTable;
        } else {
          var size = shiftTable === Table.DIGIT ? 4 : 5;
          if (endIndex - index < size) {
            break;
          }
          var code = Decoder4.readCode(correctedBits, index, size);
          index += size;
          var str = Decoder4.getCharacter(shiftTable, code);
          if (str.startsWith("CTRL_")) {
            latchTable = shiftTable;
            shiftTable = Decoder4.getTable(str.charAt(5));
            if (str.charAt(6) === "L") {
              latchTable = shiftTable;
            }
          } else {
            result += str;
            shiftTable = latchTable;
          }
        }
      }
      return result;
    };
    Decoder4.getTable = function(t) {
      switch (t) {
        case "L":
          return Table.LOWER;
        case "P":
          return Table.PUNCT;
        case "M":
          return Table.MIXED;
        case "D":
          return Table.DIGIT;
        case "B":
          return Table.BINARY;
        case "U":
        default:
          return Table.UPPER;
      }
    };
    Decoder4.getCharacter = function(table, code) {
      switch (table) {
        case Table.UPPER:
          return Decoder4.UPPER_TABLE[code];
        case Table.LOWER:
          return Decoder4.LOWER_TABLE[code];
        case Table.MIXED:
          return Decoder4.MIXED_TABLE[code];
        case Table.PUNCT:
          return Decoder4.PUNCT_TABLE[code];
        case Table.DIGIT:
          return Decoder4.DIGIT_TABLE[code];
        default:
          throw new IllegalStateException_default("Bad table");
      }
    };
    Decoder4.prototype.correctBits = function(rawbits) {
      var gf;
      var codewordSize;
      if (this.ddata.getNbLayers() <= 2) {
        codewordSize = 6;
        gf = GenericGF_default.AZTEC_DATA_6;
      } else if (this.ddata.getNbLayers() <= 8) {
        codewordSize = 8;
        gf = GenericGF_default.AZTEC_DATA_8;
      } else if (this.ddata.getNbLayers() <= 22) {
        codewordSize = 10;
        gf = GenericGF_default.AZTEC_DATA_10;
      } else {
        codewordSize = 12;
        gf = GenericGF_default.AZTEC_DATA_12;
      }
      var numDataCodewords = this.ddata.getNbDatablocks();
      var numCodewords = rawbits.length / codewordSize;
      if (numCodewords < numDataCodewords) {
        throw new FormatException_default();
      }
      var offset = rawbits.length % codewordSize;
      var dataWords = new Int32Array(numCodewords);
      for (var i = 0; i < numCodewords; i++, offset += codewordSize) {
        dataWords[i] = Decoder4.readCode(rawbits, offset, codewordSize);
      }
      try {
        var rsDecoder = new ReedSolomonDecoder_default(gf);
        rsDecoder.decode(dataWords, numCodewords - numDataCodewords);
      } catch (ex) {
        throw new FormatException_default(ex);
      }
      var mask = (1 << codewordSize) - 1;
      var stuffedBits = 0;
      for (var i = 0; i < numDataCodewords; i++) {
        var dataWord = dataWords[i];
        if (dataWord === 0 || dataWord === mask) {
          throw new FormatException_default();
        } else if (dataWord === 1 || dataWord === mask - 1) {
          stuffedBits++;
        }
      }
      var correctedBits = new Array(numDataCodewords * codewordSize - stuffedBits);
      var index = 0;
      for (var i = 0; i < numDataCodewords; i++) {
        var dataWord = dataWords[i];
        if (dataWord === 1 || dataWord === mask - 1) {
          correctedBits.fill(dataWord > 1, index, index + codewordSize - 1);
          index += codewordSize - 1;
        } else {
          for (var bit = codewordSize - 1; bit >= 0; --bit) {
            correctedBits[index++] = (dataWord & 1 << bit) !== 0;
          }
        }
      }
      return correctedBits;
    };
    Decoder4.prototype.extractBits = function(matrix) {
      var compact = this.ddata.isCompact();
      var layers = this.ddata.getNbLayers();
      var baseMatrixSize = (compact ? 11 : 14) + layers * 4;
      var alignmentMap = new Int32Array(baseMatrixSize);
      var rawbits = new Array(this.totalBitsInLayer(layers, compact));
      if (compact) {
        for (var i = 0; i < alignmentMap.length; i++) {
          alignmentMap[i] = i;
        }
      } else {
        var matrixSize = baseMatrixSize + 1 + 2 * Integer_default.truncDivision(Integer_default.truncDivision(baseMatrixSize, 2) - 1, 15);
        var origCenter = baseMatrixSize / 2;
        var center = Integer_default.truncDivision(matrixSize, 2);
        for (var i = 0; i < origCenter; i++) {
          var newOffset = i + Integer_default.truncDivision(i, 15);
          alignmentMap[origCenter - i - 1] = center - newOffset - 1;
          alignmentMap[origCenter + i] = center + newOffset + 1;
        }
      }
      for (var i = 0, rowOffset = 0; i < layers; i++) {
        var rowSize = (layers - i) * 4 + (compact ? 9 : 12);
        var low = i * 2;
        var high = baseMatrixSize - 1 - low;
        for (var j = 0; j < rowSize; j++) {
          var columnOffset = j * 2;
          for (var k = 0; k < 2; k++) {
            rawbits[rowOffset + columnOffset + k] = matrix.get(alignmentMap[low + k], alignmentMap[low + j]);
            rawbits[rowOffset + 2 * rowSize + columnOffset + k] = matrix.get(alignmentMap[low + j], alignmentMap[high - k]);
            rawbits[rowOffset + 4 * rowSize + columnOffset + k] = matrix.get(alignmentMap[high - k], alignmentMap[high - j]);
            rawbits[rowOffset + 6 * rowSize + columnOffset + k] = matrix.get(alignmentMap[high - j], alignmentMap[low + k]);
          }
        }
        rowOffset += rowSize * 8;
      }
      return rawbits;
    };
    Decoder4.readCode = function(rawbits, startIndex, length) {
      var res = 0;
      for (var i = startIndex; i < startIndex + length; i++) {
        res <<= 1;
        if (rawbits[i]) {
          res |= 1;
        }
      }
      return res;
    };
    Decoder4.readByte = function(rawbits, startIndex) {
      var n = rawbits.length - startIndex;
      if (n >= 8) {
        return Decoder4.readCode(rawbits, startIndex, 8);
      }
      return Decoder4.readCode(rawbits, startIndex, n) << 8 - n;
    };
    Decoder4.convertBoolArrayToByteArray = function(boolArr) {
      var byteArr = new Uint8Array((boolArr.length + 7) / 8);
      for (var i = 0; i < byteArr.length; i++) {
        byteArr[i] = Decoder4.readByte(boolArr, 8 * i);
      }
      return byteArr;
    };
    Decoder4.prototype.totalBitsInLayer = function(layers, compact) {
      return ((compact ? 88 : 112) + 16 * layers) * layers;
    };
    Decoder4.UPPER_TABLE = ["CTRL_PS", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "CTRL_LL", "CTRL_ML", "CTRL_DL", "CTRL_BS"];
    Decoder4.LOWER_TABLE = ["CTRL_PS", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "CTRL_US", "CTRL_ML", "CTRL_DL", "CTRL_BS"];
    Decoder4.MIXED_TABLE = ["CTRL_PS", " ", "", "", "", "", "", "", "\x07", "\b", "	", "\n", "\v", "\f", "\r", "\x1B", "", "", "", "", "@", "\\", "^", "_", "`", "|", "~", "", "CTRL_LL", "CTRL_UL", "CTRL_PL", "CTRL_BS"];
    Decoder4.PUNCT_TABLE = ["", "\r", "\r\n", ". ", ", ", ": ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}", "CTRL_UL"];
    Decoder4.DIGIT_TABLE = ["CTRL_PS", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "CTRL_UL", "CTRL_US"];
    return Decoder4;
  }()
);
var Decoder_default = Decoder;

// node_modules/@zxing/library/esm/core/common/detector/MathUtils.js
var MathUtils = (
  /** @class */
  function() {
    function MathUtils2() {
    }
    MathUtils2.round = function(d) {
      if (isNaN(d)) return 0;
      if (d <= Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;
      if (d >= Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;
      return (
        /*(int) */
        d + (d < 0 ? -0.5 : 0.5) | 0
      );
    };
    MathUtils2.distance = function(aX, aY, bX, bY) {
      var xDiff = aX - bX;
      var yDiff = aY - bY;
      return (
        /*(float) */
        Math.sqrt(xDiff * xDiff + yDiff * yDiff)
      );
    };
    MathUtils2.sum = function(array) {
      var count = 0;
      for (var i = 0, length_1 = array.length; i !== length_1; i++) {
        var a = array[i];
        count += a;
      }
      return count;
    };
    return MathUtils2;
  }()
);
var MathUtils_default = MathUtils;

// node_modules/@zxing/library/esm/core/util/Float.js
var Float = (
  /** @class */
  function() {
    function Float2() {
    }
    Float2.floatToIntBits = function(f) {
      return f;
    };
    Float2.MAX_VALUE = Number.MAX_SAFE_INTEGER;
    return Float2;
  }()
);
var Float_default = Float;

// node_modules/@zxing/library/esm/core/ResultPoint.js
var ResultPoint = (
  /** @class */
  function() {
    function ResultPoint2(x, y) {
      this.x = x;
      this.y = y;
    }
    ResultPoint2.prototype.getX = function() {
      return this.x;
    };
    ResultPoint2.prototype.getY = function() {
      return this.y;
    };
    ResultPoint2.prototype.equals = function(other) {
      if (other instanceof ResultPoint2) {
        var otherPoint = other;
        return this.x === otherPoint.x && this.y === otherPoint.y;
      }
      return false;
    };
    ResultPoint2.prototype.hashCode = function() {
      return 31 * Float_default.floatToIntBits(this.x) + Float_default.floatToIntBits(this.y);
    };
    ResultPoint2.prototype.toString = function() {
      return "(" + this.x + "," + this.y + ")";
    };
    ResultPoint2.orderBestPatterns = function(patterns) {
      var zeroOneDistance = this.distance(patterns[0], patterns[1]);
      var oneTwoDistance = this.distance(patterns[1], patterns[2]);
      var zeroTwoDistance = this.distance(patterns[0], patterns[2]);
      var pointA;
      var pointB;
      var pointC;
      if (oneTwoDistance >= zeroOneDistance && oneTwoDistance >= zeroTwoDistance) {
        pointB = patterns[0];
        pointA = patterns[1];
        pointC = patterns[2];
      } else if (zeroTwoDistance >= oneTwoDistance && zeroTwoDistance >= zeroOneDistance) {
        pointB = patterns[1];
        pointA = patterns[0];
        pointC = patterns[2];
      } else {
        pointB = patterns[2];
        pointA = patterns[0];
        pointC = patterns[1];
      }
      if (this.crossProductZ(pointA, pointB, pointC) < 0) {
        var temp = pointA;
        pointA = pointC;
        pointC = temp;
      }
      patterns[0] = pointA;
      patterns[1] = pointB;
      patterns[2] = pointC;
    };
    ResultPoint2.distance = function(pattern1, pattern2) {
      return MathUtils_default.distance(pattern1.x, pattern1.y, pattern2.x, pattern2.y);
    };
    ResultPoint2.crossProductZ = function(pointA, pointB, pointC) {
      var bX = pointB.x;
      var bY = pointB.y;
      return (pointC.x - bX) * (pointA.y - bY) - (pointC.y - bY) * (pointA.x - bX);
    };
    return ResultPoint2;
  }()
);
var ResultPoint_default = ResultPoint;

// node_modules/@zxing/library/esm/core/common/DetectorResult.js
var DetectorResult = (
  /** @class */
  function() {
    function DetectorResult2(bits, points) {
      this.bits = bits;
      this.points = points;
    }
    DetectorResult2.prototype.getBits = function() {
      return this.bits;
    };
    DetectorResult2.prototype.getPoints = function() {
      return this.points;
    };
    return DetectorResult2;
  }()
);
var DetectorResult_default = DetectorResult;

// node_modules/@zxing/library/esm/core/aztec/AztecDetectorResult.js
var __extends19 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AztecDetectorResult = (
  /** @class */
  function(_super) {
    __extends19(AztecDetectorResult2, _super);
    function AztecDetectorResult2(bits, points, compact, nbDatablocks, nbLayers) {
      var _this = _super.call(this, bits, points) || this;
      _this.compact = compact;
      _this.nbDatablocks = nbDatablocks;
      _this.nbLayers = nbLayers;
      return _this;
    }
    AztecDetectorResult2.prototype.getNbLayers = function() {
      return this.nbLayers;
    };
    AztecDetectorResult2.prototype.getNbDatablocks = function() {
      return this.nbDatablocks;
    };
    AztecDetectorResult2.prototype.isCompact = function() {
      return this.compact;
    };
    return AztecDetectorResult2;
  }(DetectorResult_default)
);
var AztecDetectorResult_default = AztecDetectorResult;

// node_modules/@zxing/library/esm/core/common/detector/WhiteRectangleDetector.js
var WhiteRectangleDetector = (
  /** @class */
  function() {
    function WhiteRectangleDetector2(image, initSize, x, y) {
      this.image = image;
      this.height = image.getHeight();
      this.width = image.getWidth();
      if (void 0 === initSize || null === initSize) {
        initSize = WhiteRectangleDetector2.INIT_SIZE;
      }
      if (void 0 === x || null === x) {
        x = image.getWidth() / 2 | 0;
      }
      if (void 0 === y || null === y) {
        y = image.getHeight() / 2 | 0;
      }
      var halfsize = initSize / 2 | 0;
      this.leftInit = x - halfsize;
      this.rightInit = x + halfsize;
      this.upInit = y - halfsize;
      this.downInit = y + halfsize;
      if (this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) {
        throw new NotFoundException_default();
      }
    }
    WhiteRectangleDetector2.prototype.detect = function() {
      var left = this.leftInit;
      var right = this.rightInit;
      var up = this.upInit;
      var down = this.downInit;
      var sizeExceeded = false;
      var aBlackPointFoundOnBorder = true;
      var atLeastOneBlackPointFoundOnBorder = false;
      var atLeastOneBlackPointFoundOnRight = false;
      var atLeastOneBlackPointFoundOnBottom = false;
      var atLeastOneBlackPointFoundOnLeft = false;
      var atLeastOneBlackPointFoundOnTop = false;
      var width = this.width;
      var height = this.height;
      while (aBlackPointFoundOnBorder) {
        aBlackPointFoundOnBorder = false;
        var rightBorderNotWhite = true;
        while ((rightBorderNotWhite || !atLeastOneBlackPointFoundOnRight) && right < width) {
          rightBorderNotWhite = this.containsBlackPoint(up, down, right, false);
          if (rightBorderNotWhite) {
            right++;
            aBlackPointFoundOnBorder = true;
            atLeastOneBlackPointFoundOnRight = true;
          } else if (!atLeastOneBlackPointFoundOnRight) {
            right++;
          }
        }
        if (right >= width) {
          sizeExceeded = true;
          break;
        }
        var bottomBorderNotWhite = true;
        while ((bottomBorderNotWhite || !atLeastOneBlackPointFoundOnBottom) && down < height) {
          bottomBorderNotWhite = this.containsBlackPoint(left, right, down, true);
          if (bottomBorderNotWhite) {
            down++;
            aBlackPointFoundOnBorder = true;
            atLeastOneBlackPointFoundOnBottom = true;
          } else if (!atLeastOneBlackPointFoundOnBottom) {
            down++;
          }
        }
        if (down >= height) {
          sizeExceeded = true;
          break;
        }
        var leftBorderNotWhite = true;
        while ((leftBorderNotWhite || !atLeastOneBlackPointFoundOnLeft) && left >= 0) {
          leftBorderNotWhite = this.containsBlackPoint(up, down, left, false);
          if (leftBorderNotWhite) {
            left--;
            aBlackPointFoundOnBorder = true;
            atLeastOneBlackPointFoundOnLeft = true;
          } else if (!atLeastOneBlackPointFoundOnLeft) {
            left--;
          }
        }
        if (left < 0) {
          sizeExceeded = true;
          break;
        }
        var topBorderNotWhite = true;
        while ((topBorderNotWhite || !atLeastOneBlackPointFoundOnTop) && up >= 0) {
          topBorderNotWhite = this.containsBlackPoint(left, right, up, true);
          if (topBorderNotWhite) {
            up--;
            aBlackPointFoundOnBorder = true;
            atLeastOneBlackPointFoundOnTop = true;
          } else if (!atLeastOneBlackPointFoundOnTop) {
            up--;
          }
        }
        if (up < 0) {
          sizeExceeded = true;
          break;
        }
        if (aBlackPointFoundOnBorder) {
          atLeastOneBlackPointFoundOnBorder = true;
        }
      }
      if (!sizeExceeded && atLeastOneBlackPointFoundOnBorder) {
        var maxSize = right - left;
        var z = null;
        for (var i = 1; z === null && i < maxSize; i++) {
          z = this.getBlackPointOnSegment(left, down - i, left + i, down);
        }
        if (z == null) {
          throw new NotFoundException_default();
        }
        var t = null;
        for (var i = 1; t === null && i < maxSize; i++) {
          t = this.getBlackPointOnSegment(left, up + i, left + i, up);
        }
        if (t == null) {
          throw new NotFoundException_default();
        }
        var x = null;
        for (var i = 1; x === null && i < maxSize; i++) {
          x = this.getBlackPointOnSegment(right, up + i, right - i, up);
        }
        if (x == null) {
          throw new NotFoundException_default();
        }
        var y = null;
        for (var i = 1; y === null && i < maxSize; i++) {
          y = this.getBlackPointOnSegment(right, down - i, right - i, down);
        }
        if (y == null) {
          throw new NotFoundException_default();
        }
        return this.centerEdges(y, z, x, t);
      } else {
        throw new NotFoundException_default();
      }
    };
    WhiteRectangleDetector2.prototype.getBlackPointOnSegment = function(aX, aY, bX, bY) {
      var dist = MathUtils_default.round(MathUtils_default.distance(aX, aY, bX, bY));
      var xStep = (bX - aX) / dist;
      var yStep = (bY - aY) / dist;
      var image = this.image;
      for (var i = 0; i < dist; i++) {
        var x = MathUtils_default.round(aX + i * xStep);
        var y = MathUtils_default.round(aY + i * yStep);
        if (image.get(x, y)) {
          return new ResultPoint_default(x, y);
        }
      }
      return null;
    };
    WhiteRectangleDetector2.prototype.centerEdges = function(y, z, x, t) {
      var yi = y.getX();
      var yj = y.getY();
      var zi = z.getX();
      var zj = z.getY();
      var xi = x.getX();
      var xj = x.getY();
      var ti = t.getX();
      var tj = t.getY();
      var CORR = WhiteRectangleDetector2.CORR;
      if (yi < this.width / 2) {
        return [new ResultPoint_default(ti - CORR, tj + CORR), new ResultPoint_default(zi + CORR, zj + CORR), new ResultPoint_default(xi - CORR, xj - CORR), new ResultPoint_default(yi + CORR, yj - CORR)];
      } else {
        return [new ResultPoint_default(ti + CORR, tj + CORR), new ResultPoint_default(zi + CORR, zj - CORR), new ResultPoint_default(xi - CORR, xj + CORR), new ResultPoint_default(yi - CORR, yj - CORR)];
      }
    };
    WhiteRectangleDetector2.prototype.containsBlackPoint = function(a, b, fixed, horizontal) {
      var image = this.image;
      if (horizontal) {
        for (var x = a; x <= b; x++) {
          if (image.get(x, fixed)) {
            return true;
          }
        }
      } else {
        for (var y = a; y <= b; y++) {
          if (image.get(fixed, y)) {
            return true;
          }
        }
      }
      return false;
    };
    WhiteRectangleDetector2.INIT_SIZE = 10;
    WhiteRectangleDetector2.CORR = 1;
    return WhiteRectangleDetector2;
  }()
);
var WhiteRectangleDetector_default = WhiteRectangleDetector;

// node_modules/@zxing/library/esm/core/common/GridSampler.js
var GridSampler = (
  /** @class */
  function() {
    function GridSampler2() {
    }
    GridSampler2.checkAndNudgePoints = function(image, points) {
      var width = image.getWidth();
      var height = image.getHeight();
      var nudged = true;
      for (var offset = 0; offset < points.length && nudged; offset += 2) {
        var x = Math.floor(points[offset]);
        var y = Math.floor(points[offset + 1]);
        if (x < -1 || x > width || y < -1 || y > height) {
          throw new NotFoundException_default();
        }
        nudged = false;
        if (x === -1) {
          points[offset] = 0;
          nudged = true;
        } else if (x === width) {
          points[offset] = width - 1;
          nudged = true;
        }
        if (y === -1) {
          points[offset + 1] = 0;
          nudged = true;
        } else if (y === height) {
          points[offset + 1] = height - 1;
          nudged = true;
        }
      }
      nudged = true;
      for (var offset = points.length - 2; offset >= 0 && nudged; offset -= 2) {
        var x = Math.floor(points[offset]);
        var y = Math.floor(points[offset + 1]);
        if (x < -1 || x > width || y < -1 || y > height) {
          throw new NotFoundException_default();
        }
        nudged = false;
        if (x === -1) {
          points[offset] = 0;
          nudged = true;
        } else if (x === width) {
          points[offset] = width - 1;
          nudged = true;
        }
        if (y === -1) {
          points[offset + 1] = 0;
          nudged = true;
        } else if (y === height) {
          points[offset + 1] = height - 1;
          nudged = true;
        }
      }
    };
    return GridSampler2;
  }()
);
var GridSampler_default = GridSampler;

// node_modules/@zxing/library/esm/core/common/PerspectiveTransform.js
var PerspectiveTransform = (
  /** @class */
  function() {
    function PerspectiveTransform2(a11, a21, a31, a12, a22, a32, a13, a23, a33) {
      this.a11 = a11;
      this.a21 = a21;
      this.a31 = a31;
      this.a12 = a12;
      this.a22 = a22;
      this.a32 = a32;
      this.a13 = a13;
      this.a23 = a23;
      this.a33 = a33;
    }
    PerspectiveTransform2.quadrilateralToQuadrilateral = function(x0, y0, x1, y1, x2, y2, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
      var qToS = PerspectiveTransform2.quadrilateralToSquare(x0, y0, x1, y1, x2, y2, x3, y3);
      var sToQ = PerspectiveTransform2.squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
      return sToQ.times(qToS);
    };
    PerspectiveTransform2.prototype.transformPoints = function(points) {
      var max = points.length;
      var a11 = this.a11;
      var a12 = this.a12;
      var a13 = this.a13;
      var a21 = this.a21;
      var a22 = this.a22;
      var a23 = this.a23;
      var a31 = this.a31;
      var a32 = this.a32;
      var a33 = this.a33;
      for (var i = 0; i < max; i += 2) {
        var x = points[i];
        var y = points[i + 1];
        var denominator = a13 * x + a23 * y + a33;
        points[i] = (a11 * x + a21 * y + a31) / denominator;
        points[i + 1] = (a12 * x + a22 * y + a32) / denominator;
      }
    };
    PerspectiveTransform2.prototype.transformPointsWithValues = function(xValues, yValues) {
      var a11 = this.a11;
      var a12 = this.a12;
      var a13 = this.a13;
      var a21 = this.a21;
      var a22 = this.a22;
      var a23 = this.a23;
      var a31 = this.a31;
      var a32 = this.a32;
      var a33 = this.a33;
      var n = xValues.length;
      for (var i = 0; i < n; i++) {
        var x = xValues[i];
        var y = yValues[i];
        var denominator = a13 * x + a23 * y + a33;
        xValues[i] = (a11 * x + a21 * y + a31) / denominator;
        yValues[i] = (a12 * x + a22 * y + a32) / denominator;
      }
    };
    PerspectiveTransform2.squareToQuadrilateral = function(x0, y0, x1, y1, x2, y2, x3, y3) {
      var dx3 = x0 - x1 + x2 - x3;
      var dy3 = y0 - y1 + y2 - y3;
      if (dx3 === 0 && dy3 === 0) {
        return new PerspectiveTransform2(x1 - x0, x2 - x1, x0, y1 - y0, y2 - y1, y0, 0, 0, 1);
      } else {
        var dx1 = x1 - x2;
        var dx2 = x3 - x2;
        var dy1 = y1 - y2;
        var dy2 = y3 - y2;
        var denominator = dx1 * dy2 - dx2 * dy1;
        var a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
        var a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
        return new PerspectiveTransform2(x1 - x0 + a13 * x1, x3 - x0 + a23 * x3, x0, y1 - y0 + a13 * y1, y3 - y0 + a23 * y3, y0, a13, a23, 1);
      }
    };
    PerspectiveTransform2.quadrilateralToSquare = function(x0, y0, x1, y1, x2, y2, x3, y3) {
      return PerspectiveTransform2.squareToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3).buildAdjoint();
    };
    PerspectiveTransform2.prototype.buildAdjoint = function() {
      return new PerspectiveTransform2(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
    };
    PerspectiveTransform2.prototype.times = function(other) {
      return new PerspectiveTransform2(this.a11 * other.a11 + this.a21 * other.a12 + this.a31 * other.a13, this.a11 * other.a21 + this.a21 * other.a22 + this.a31 * other.a23, this.a11 * other.a31 + this.a21 * other.a32 + this.a31 * other.a33, this.a12 * other.a11 + this.a22 * other.a12 + this.a32 * other.a13, this.a12 * other.a21 + this.a22 * other.a22 + this.a32 * other.a23, this.a12 * other.a31 + this.a22 * other.a32 + this.a32 * other.a33, this.a13 * other.a11 + this.a23 * other.a12 + this.a33 * other.a13, this.a13 * other.a21 + this.a23 * other.a22 + this.a33 * other.a23, this.a13 * other.a31 + this.a23 * other.a32 + this.a33 * other.a33);
    };
    return PerspectiveTransform2;
  }()
);
var PerspectiveTransform_default = PerspectiveTransform;

// node_modules/@zxing/library/esm/core/common/DefaultGridSampler.js
var __extends20 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var DefaultGridSampler = (
  /** @class */
  function(_super) {
    __extends20(DefaultGridSampler2, _super);
    function DefaultGridSampler2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultGridSampler2.prototype.sampleGrid = function(image, dimensionX, dimensionY, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
      var transform = PerspectiveTransform_default.quadrilateralToQuadrilateral(p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY);
      return this.sampleGridWithTransform(image, dimensionX, dimensionY, transform);
    };
    DefaultGridSampler2.prototype.sampleGridWithTransform = function(image, dimensionX, dimensionY, transform) {
      if (dimensionX <= 0 || dimensionY <= 0) {
        throw new NotFoundException_default();
      }
      var bits = new BitMatrix_default(dimensionX, dimensionY);
      var points = new Float32Array(2 * dimensionX);
      for (var y = 0; y < dimensionY; y++) {
        var max = points.length;
        var iValue = y + 0.5;
        for (var x = 0; x < max; x += 2) {
          points[x] = x / 2 + 0.5;
          points[x + 1] = iValue;
        }
        transform.transformPoints(points);
        GridSampler_default.checkAndNudgePoints(image, points);
        try {
          for (var x = 0; x < max; x += 2) {
            if (image.get(Math.floor(points[x]), Math.floor(points[x + 1]))) {
              bits.set(x / 2, y);
            }
          }
        } catch (aioobe) {
          throw new NotFoundException_default();
        }
      }
      return bits;
    };
    return DefaultGridSampler2;
  }(GridSampler_default)
);
var DefaultGridSampler_default = DefaultGridSampler;

// node_modules/@zxing/library/esm/core/common/GridSamplerInstance.js
var GridSamplerInstance = (
  /** @class */
  function() {
    function GridSamplerInstance2() {
    }
    GridSamplerInstance2.setGridSampler = function(newGridSampler) {
      GridSamplerInstance2.gridSampler = newGridSampler;
    };
    GridSamplerInstance2.getInstance = function() {
      return GridSamplerInstance2.gridSampler;
    };
    GridSamplerInstance2.gridSampler = new DefaultGridSampler_default();
    return GridSamplerInstance2;
  }()
);
var GridSamplerInstance_default = GridSamplerInstance;

// node_modules/@zxing/library/esm/core/aztec/detector/Detector.js
var Point = (
  /** @class */
  function() {
    function Point2(x, y) {
      this.x = x;
      this.y = y;
    }
    Point2.prototype.toResultPoint = function() {
      return new ResultPoint_default(this.getX(), this.getY());
    };
    Point2.prototype.getX = function() {
      return this.x;
    };
    Point2.prototype.getY = function() {
      return this.y;
    };
    return Point2;
  }()
);
var Detector = (
  /** @class */
  function() {
    function Detector5(image) {
      this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799]);
      this.image = image;
    }
    Detector5.prototype.detect = function() {
      return this.detectMirror(false);
    };
    Detector5.prototype.detectMirror = function(isMirror) {
      var pCenter = this.getMatrixCenter();
      var bullsEyeCorners = this.getBullsEyeCorners(pCenter);
      if (isMirror) {
        var temp = bullsEyeCorners[0];
        bullsEyeCorners[0] = bullsEyeCorners[2];
        bullsEyeCorners[2] = temp;
      }
      this.extractParameters(bullsEyeCorners);
      var bits = this.sampleGrid(this.image, bullsEyeCorners[this.shift % 4], bullsEyeCorners[(this.shift + 1) % 4], bullsEyeCorners[(this.shift + 2) % 4], bullsEyeCorners[(this.shift + 3) % 4]);
      var corners = this.getMatrixCornerPoints(bullsEyeCorners);
      return new AztecDetectorResult_default(bits, corners, this.compact, this.nbDataBlocks, this.nbLayers);
    };
    Detector5.prototype.extractParameters = function(bullsEyeCorners) {
      if (!this.isValidPoint(bullsEyeCorners[0]) || !this.isValidPoint(bullsEyeCorners[1]) || !this.isValidPoint(bullsEyeCorners[2]) || !this.isValidPoint(bullsEyeCorners[3])) {
        throw new NotFoundException_default();
      }
      var length = 2 * this.nbCenterLayers;
      var sides = new Int32Array([
        this.sampleLine(bullsEyeCorners[0], bullsEyeCorners[1], length),
        this.sampleLine(bullsEyeCorners[1], bullsEyeCorners[2], length),
        this.sampleLine(bullsEyeCorners[2], bullsEyeCorners[3], length),
        this.sampleLine(bullsEyeCorners[3], bullsEyeCorners[0], length)
        // Top
      ]);
      this.shift = this.getRotation(sides, length);
      var parameterData = 0;
      for (var i = 0; i < 4; i++) {
        var side = sides[(this.shift + i) % 4];
        if (this.compact) {
          parameterData <<= 7;
          parameterData += side >> 1 & 127;
        } else {
          parameterData <<= 10;
          parameterData += (side >> 2 & 31 << 5) + (side >> 1 & 31);
        }
      }
      var correctedData = this.getCorrectedParameterData(parameterData, this.compact);
      if (this.compact) {
        this.nbLayers = (correctedData >> 6) + 1;
        this.nbDataBlocks = (correctedData & 63) + 1;
      } else {
        this.nbLayers = (correctedData >> 11) + 1;
        this.nbDataBlocks = (correctedData & 2047) + 1;
      }
    };
    Detector5.prototype.getRotation = function(sides, length) {
      var cornerBits = 0;
      sides.forEach(function(side, idx, arr) {
        var t = (side >> length - 2 << 1) + (side & 1);
        cornerBits = (cornerBits << 3) + t;
      });
      cornerBits = ((cornerBits & 1) << 11) + (cornerBits >> 1);
      for (var shift = 0; shift < 4; shift++) {
        if (Integer_default.bitCount(cornerBits ^ this.EXPECTED_CORNER_BITS[shift]) <= 2) {
          return shift;
        }
      }
      throw new NotFoundException_default();
    };
    Detector5.prototype.getCorrectedParameterData = function(parameterData, compact) {
      var numCodewords;
      var numDataCodewords;
      if (compact) {
        numCodewords = 7;
        numDataCodewords = 2;
      } else {
        numCodewords = 10;
        numDataCodewords = 4;
      }
      var numECCodewords = numCodewords - numDataCodewords;
      var parameterWords = new Int32Array(numCodewords);
      for (var i = numCodewords - 1; i >= 0; --i) {
        parameterWords[i] = parameterData & 15;
        parameterData >>= 4;
      }
      try {
        var rsDecoder = new ReedSolomonDecoder_default(GenericGF_default.AZTEC_PARAM);
        rsDecoder.decode(parameterWords, numECCodewords);
      } catch (ignored) {
        throw new NotFoundException_default();
      }
      var result = 0;
      for (var i = 0; i < numDataCodewords; i++) {
        result = (result << 4) + parameterWords[i];
      }
      return result;
    };
    Detector5.prototype.getBullsEyeCorners = function(pCenter) {
      var pina = pCenter;
      var pinb = pCenter;
      var pinc = pCenter;
      var pind = pCenter;
      var color = true;
      for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
        var pouta = this.getFirstDifferent(pina, color, 1, -1);
        var poutb = this.getFirstDifferent(pinb, color, 1, 1);
        var poutc = this.getFirstDifferent(pinc, color, -1, 1);
        var poutd = this.getFirstDifferent(pind, color, -1, -1);
        if (this.nbCenterLayers > 2) {
          var q = this.distancePoint(poutd, pouta) * this.nbCenterLayers / (this.distancePoint(pind, pina) * (this.nbCenterLayers + 2));
          if (q < 0.75 || q > 1.25 || !this.isWhiteOrBlackRectangle(pouta, poutb, poutc, poutd)) {
            break;
          }
        }
        pina = pouta;
        pinb = poutb;
        pinc = poutc;
        pind = poutd;
        color = !color;
      }
      if (this.nbCenterLayers !== 5 && this.nbCenterLayers !== 7) {
        throw new NotFoundException_default();
      }
      this.compact = this.nbCenterLayers === 5;
      var pinax = new ResultPoint_default(pina.getX() + 0.5, pina.getY() - 0.5);
      var pinbx = new ResultPoint_default(pinb.getX() + 0.5, pinb.getY() + 0.5);
      var pincx = new ResultPoint_default(pinc.getX() - 0.5, pinc.getY() + 0.5);
      var pindx = new ResultPoint_default(pind.getX() - 0.5, pind.getY() - 0.5);
      return this.expandSquare([pinax, pinbx, pincx, pindx], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
    };
    Detector5.prototype.getMatrixCenter = function() {
      var pointA;
      var pointB;
      var pointC;
      var pointD;
      try {
        var cornerPoints = new WhiteRectangleDetector_default(this.image).detect();
        pointA = cornerPoints[0];
        pointB = cornerPoints[1];
        pointC = cornerPoints[2];
        pointD = cornerPoints[3];
      } catch (e) {
        var cx_1 = this.image.getWidth() / 2;
        var cy_1 = this.image.getHeight() / 2;
        pointA = this.getFirstDifferent(new Point(cx_1 + 7, cy_1 - 7), false, 1, -1).toResultPoint();
        pointB = this.getFirstDifferent(new Point(cx_1 + 7, cy_1 + 7), false, 1, 1).toResultPoint();
        pointC = this.getFirstDifferent(new Point(cx_1 - 7, cy_1 + 7), false, -1, 1).toResultPoint();
        pointD = this.getFirstDifferent(new Point(cx_1 - 7, cy_1 - 7), false, -1, -1).toResultPoint();
      }
      var cx = MathUtils_default.round((pointA.getX() + pointD.getX() + pointB.getX() + pointC.getX()) / 4);
      var cy = MathUtils_default.round((pointA.getY() + pointD.getY() + pointB.getY() + pointC.getY()) / 4);
      try {
        var cornerPoints = new WhiteRectangleDetector_default(this.image, 15, cx, cy).detect();
        pointA = cornerPoints[0];
        pointB = cornerPoints[1];
        pointC = cornerPoints[2];
        pointD = cornerPoints[3];
      } catch (e) {
        pointA = this.getFirstDifferent(new Point(cx + 7, cy - 7), false, 1, -1).toResultPoint();
        pointB = this.getFirstDifferent(new Point(cx + 7, cy + 7), false, 1, 1).toResultPoint();
        pointC = this.getFirstDifferent(new Point(cx - 7, cy + 7), false, -1, 1).toResultPoint();
        pointD = this.getFirstDifferent(new Point(cx - 7, cy - 7), false, -1, -1).toResultPoint();
      }
      cx = MathUtils_default.round((pointA.getX() + pointD.getX() + pointB.getX() + pointC.getX()) / 4);
      cy = MathUtils_default.round((pointA.getY() + pointD.getY() + pointB.getY() + pointC.getY()) / 4);
      return new Point(cx, cy);
    };
    Detector5.prototype.getMatrixCornerPoints = function(bullsEyeCorners) {
      return this.expandSquare(bullsEyeCorners, 2 * this.nbCenterLayers, this.getDimension());
    };
    Detector5.prototype.sampleGrid = function(image, topLeft, topRight, bottomRight, bottomLeft) {
      var sampler = GridSamplerInstance_default.getInstance();
      var dimension = this.getDimension();
      var low = dimension / 2 - this.nbCenterLayers;
      var high = dimension / 2 + this.nbCenterLayers;
      return sampler.sampleGrid(
        image,
        dimension,
        dimension,
        low,
        low,
        // topleft
        high,
        low,
        // topright
        high,
        high,
        // bottomright
        low,
        high,
        // bottomleft
        topLeft.getX(),
        topLeft.getY(),
        topRight.getX(),
        topRight.getY(),
        bottomRight.getX(),
        bottomRight.getY(),
        bottomLeft.getX(),
        bottomLeft.getY()
      );
    };
    Detector5.prototype.sampleLine = function(p1, p2, size) {
      var result = 0;
      var d = this.distanceResultPoint(p1, p2);
      var moduleSize = d / size;
      var px = p1.getX();
      var py = p1.getY();
      var dx = moduleSize * (p2.getX() - p1.getX()) / d;
      var dy = moduleSize * (p2.getY() - p1.getY()) / d;
      for (var i = 0; i < size; i++) {
        if (this.image.get(MathUtils_default.round(px + i * dx), MathUtils_default.round(py + i * dy))) {
          result |= 1 << size - i - 1;
        }
      }
      return result;
    };
    Detector5.prototype.isWhiteOrBlackRectangle = function(p1, p2, p3, p4) {
      var corr = 3;
      p1 = new Point(p1.getX() - corr, p1.getY() + corr);
      p2 = new Point(p2.getX() - corr, p2.getY() - corr);
      p3 = new Point(p3.getX() + corr, p3.getY() - corr);
      p4 = new Point(p4.getX() + corr, p4.getY() + corr);
      var cInit = this.getColor(p4, p1);
      if (cInit === 0) {
        return false;
      }
      var c = this.getColor(p1, p2);
      if (c !== cInit) {
        return false;
      }
      c = this.getColor(p2, p3);
      if (c !== cInit) {
        return false;
      }
      c = this.getColor(p3, p4);
      return c === cInit;
    };
    Detector5.prototype.getColor = function(p1, p2) {
      var d = this.distancePoint(p1, p2);
      var dx = (p2.getX() - p1.getX()) / d;
      var dy = (p2.getY() - p1.getY()) / d;
      var error = 0;
      var px = p1.getX();
      var py = p1.getY();
      var colorModel = this.image.get(p1.getX(), p1.getY());
      var iMax = Math.ceil(d);
      for (var i = 0; i < iMax; i++) {
        px += dx;
        py += dy;
        if (this.image.get(MathUtils_default.round(px), MathUtils_default.round(py)) !== colorModel) {
          error++;
        }
      }
      var errRatio = error / d;
      if (errRatio > 0.1 && errRatio < 0.9) {
        return 0;
      }
      return errRatio <= 0.1 === colorModel ? 1 : -1;
    };
    Detector5.prototype.getFirstDifferent = function(init, color, dx, dy) {
      var x = init.getX() + dx;
      var y = init.getY() + dy;
      while (this.isValid(x, y) && this.image.get(x, y) === color) {
        x += dx;
        y += dy;
      }
      x -= dx;
      y -= dy;
      while (this.isValid(x, y) && this.image.get(x, y) === color) {
        x += dx;
      }
      x -= dx;
      while (this.isValid(x, y) && this.image.get(x, y) === color) {
        y += dy;
      }
      y -= dy;
      return new Point(x, y);
    };
    Detector5.prototype.expandSquare = function(cornerPoints, oldSide, newSide) {
      var ratio = newSide / (2 * oldSide);
      var dx = cornerPoints[0].getX() - cornerPoints[2].getX();
      var dy = cornerPoints[0].getY() - cornerPoints[2].getY();
      var centerx = (cornerPoints[0].getX() + cornerPoints[2].getX()) / 2;
      var centery = (cornerPoints[0].getY() + cornerPoints[2].getY()) / 2;
      var result0 = new ResultPoint_default(centerx + ratio * dx, centery + ratio * dy);
      var result2 = new ResultPoint_default(centerx - ratio * dx, centery - ratio * dy);
      dx = cornerPoints[1].getX() - cornerPoints[3].getX();
      dy = cornerPoints[1].getY() - cornerPoints[3].getY();
      centerx = (cornerPoints[1].getX() + cornerPoints[3].getX()) / 2;
      centery = (cornerPoints[1].getY() + cornerPoints[3].getY()) / 2;
      var result1 = new ResultPoint_default(centerx + ratio * dx, centery + ratio * dy);
      var result3 = new ResultPoint_default(centerx - ratio * dx, centery - ratio * dy);
      var results = [result0, result1, result2, result3];
      return results;
    };
    Detector5.prototype.isValid = function(x, y) {
      return x >= 0 && x < this.image.getWidth() && y > 0 && y < this.image.getHeight();
    };
    Detector5.prototype.isValidPoint = function(point) {
      var x = MathUtils_default.round(point.getX());
      var y = MathUtils_default.round(point.getY());
      return this.isValid(x, y);
    };
    Detector5.prototype.distancePoint = function(a, b) {
      return MathUtils_default.distance(a.getX(), a.getY(), b.getX(), b.getY());
    };
    Detector5.prototype.distanceResultPoint = function(a, b) {
      return MathUtils_default.distance(a.getX(), a.getY(), b.getX(), b.getY());
    };
    Detector5.prototype.getDimension = function() {
      if (this.compact) {
        return 4 * this.nbLayers + 11;
      }
      if (this.nbLayers <= 4) {
        return 4 * this.nbLayers + 15;
      }
      return 4 * this.nbLayers + 2 * (Integer_default.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
    };
    return Detector5;
  }()
);
var Detector_default = Detector;

// node_modules/@zxing/library/esm/core/aztec/AztecReader.js
var AztecReader = (
  /** @class */
  function() {
    function AztecReader2() {
    }
    AztecReader2.prototype.decode = function(image, hints) {
      if (hints === void 0) {
        hints = null;
      }
      var exception = null;
      var detector = new Detector_default(image.getBlackMatrix());
      var points = null;
      var decoderResult = null;
      try {
        var detectorResult = detector.detectMirror(false);
        points = detectorResult.getPoints();
        this.reportFoundResultPoints(hints, points);
        decoderResult = new Decoder_default().decode(detectorResult);
      } catch (e) {
        exception = e;
      }
      if (decoderResult == null) {
        try {
          var detectorResult = detector.detectMirror(true);
          points = detectorResult.getPoints();
          this.reportFoundResultPoints(hints, points);
          decoderResult = new Decoder_default().decode(detectorResult);
        } catch (e) {
          if (exception != null) {
            throw exception;
          }
          throw e;
        }
      }
      var result = new Result_default(decoderResult.getText(), decoderResult.getRawBytes(), decoderResult.getNumBits(), points, BarcodeFormat_default.AZTEC, System_default.currentTimeMillis());
      var byteSegments = decoderResult.getByteSegments();
      if (byteSegments != null) {
        result.putMetadata(ResultMetadataType_default.BYTE_SEGMENTS, byteSegments);
      }
      var ecLevel = decoderResult.getECLevel();
      if (ecLevel != null) {
        result.putMetadata(ResultMetadataType_default.ERROR_CORRECTION_LEVEL, ecLevel);
      }
      return result;
    };
    AztecReader2.prototype.reportFoundResultPoints = function(hints, points) {
      if (hints != null) {
        var rpcb_1 = hints.get(DecodeHintType_default.NEED_RESULT_POINT_CALLBACK);
        if (rpcb_1 != null) {
          points.forEach(function(point, idx, arr) {
            rpcb_1.foundPossibleResultPoint(point);
          });
        }
      }
    };
    AztecReader2.prototype.reset = function() {
    };
    return AztecReader2;
  }()
);
var AztecReader_default = AztecReader;

// node_modules/@zxing/library/esm/browser/BrowserAztecCodeReader.js
var __extends21 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BrowserAztecCodeReader = (
  /** @class */
  function(_super) {
    __extends21(BrowserAztecCodeReader2, _super);
    function BrowserAztecCodeReader2(timeBetweenScansMillis) {
      if (timeBetweenScansMillis === void 0) {
        timeBetweenScansMillis = 500;
      }
      return _super.call(this, new AztecReader_default(), timeBetweenScansMillis) || this;
    }
    return BrowserAztecCodeReader2;
  }(BrowserCodeReader)
);

// node_modules/@zxing/library/esm/core/oned/OneDReader.js
var OneDReader = (
  /** @class */
  function() {
    function OneDReader2() {
    }
    OneDReader2.prototype.decode = function(image, hints) {
      try {
        return this.doDecode(image, hints);
      } catch (nfe) {
        var tryHarder = hints && hints.get(DecodeHintType_default.TRY_HARDER) === true;
        if (tryHarder && image.isRotateSupported()) {
          var rotatedImage = image.rotateCounterClockwise();
          var result = this.doDecode(rotatedImage, hints);
          var metadata = result.getResultMetadata();
          var orientation_1 = 270;
          if (metadata !== null && metadata.get(ResultMetadataType_default.ORIENTATION) === true) {
            orientation_1 = orientation_1 + metadata.get(ResultMetadataType_default.ORIENTATION) % 360;
          }
          result.putMetadata(ResultMetadataType_default.ORIENTATION, orientation_1);
          var points = result.getResultPoints();
          if (points !== null) {
            var height = rotatedImage.getHeight();
            for (var i = 0; i < points.length; i++) {
              points[i] = new ResultPoint_default(height - points[i].getY() - 1, points[i].getX());
            }
          }
          return result;
        } else {
          throw new NotFoundException_default();
        }
      }
    };
    OneDReader2.prototype.reset = function() {
    };
    OneDReader2.prototype.doDecode = function(image, hints) {
      var width = image.getWidth();
      var height = image.getHeight();
      var row = new BitArray_default(width);
      var tryHarder = hints && hints.get(DecodeHintType_default.TRY_HARDER) === true;
      var rowStep = Math.max(1, height >> (tryHarder ? 8 : 5));
      var maxLines;
      if (tryHarder) {
        maxLines = height;
      } else {
        maxLines = 15;
      }
      var middle = Math.trunc(height / 2);
      for (var x = 0; x < maxLines; x++) {
        var rowStepsAboveOrBelow = Math.trunc((x + 1) / 2);
        var isAbove = (x & 1) === 0;
        var rowNumber = middle + rowStep * (isAbove ? rowStepsAboveOrBelow : -rowStepsAboveOrBelow);
        if (rowNumber < 0 || rowNumber >= height) {
          break;
        }
        try {
          row = image.getBlackRow(rowNumber, row);
        } catch (ignored) {
          continue;
        }
        var _loop_1 = function(attempt2) {
          if (attempt2 === 1) {
            row.reverse();
            if (hints && hints.get(DecodeHintType_default.NEED_RESULT_POINT_CALLBACK) === true) {
              var newHints_1 = /* @__PURE__ */ new Map();
              hints.forEach(function(hint, key) {
                return newHints_1.set(key, hint);
              });
              newHints_1.delete(DecodeHintType_default.NEED_RESULT_POINT_CALLBACK);
              hints = newHints_1;
            }
          }
          try {
            var result = this_1.decodeRow(rowNumber, row, hints);
            if (attempt2 === 1) {
              result.putMetadata(ResultMetadataType_default.ORIENTATION, 180);
              var points = result.getResultPoints();
              if (points !== null) {
                points[0] = new ResultPoint_default(width - points[0].getX() - 1, points[0].getY());
                points[1] = new ResultPoint_default(width - points[1].getX() - 1, points[1].getY());
              }
            }
            return {
              value: result
            };
          } catch (re) {
          }
        };
        var this_1 = this;
        for (var attempt = 0; attempt < 2; attempt++) {
          var state_1 = _loop_1(attempt);
          if (typeof state_1 === "object") return state_1.value;
        }
      }
      throw new NotFoundException_default();
    };
    OneDReader2.recordPattern = function(row, start, counters) {
      var numCounters = counters.length;
      for (var index = 0; index < numCounters; index++) counters[index] = 0;
      var end = row.getSize();
      if (start >= end) {
        throw new NotFoundException_default();
      }
      var isWhite = !row.get(start);
      var counterPosition = 0;
      var i = start;
      while (i < end) {
        if (row.get(i) !== isWhite) {
          counters[counterPosition]++;
        } else {
          if (++counterPosition === numCounters) {
            break;
          } else {
            counters[counterPosition] = 1;
            isWhite = !isWhite;
          }
        }
        i++;
      }
      if (!(counterPosition === numCounters || counterPosition === numCounters - 1 && i === end)) {
        throw new NotFoundException_default();
      }
    };
    OneDReader2.recordPatternInReverse = function(row, start, counters) {
      var numTransitionsLeft = counters.length;
      var last = row.get(start);
      while (start > 0 && numTransitionsLeft >= 0) {
        if (row.get(--start) !== last) {
          numTransitionsLeft--;
          last = !last;
        }
      }
      if (numTransitionsLeft >= 0) {
        throw new NotFoundException_default();
      }
      OneDReader2.recordPattern(row, start + 1, counters);
    };
    OneDReader2.patternMatchVariance = function(counters, pattern, maxIndividualVariance) {
      var numCounters = counters.length;
      var total = 0;
      var patternLength = 0;
      for (var i = 0; i < numCounters; i++) {
        total += counters[i];
        patternLength += pattern[i];
      }
      if (total < patternLength) {
        return Number.POSITIVE_INFINITY;
      }
      var unitBarWidth = total / patternLength;
      maxIndividualVariance *= unitBarWidth;
      var totalVariance = 0;
      for (var x = 0; x < numCounters; x++) {
        var counter = counters[x];
        var scaledPattern = pattern[x] * unitBarWidth;
        var variance = counter > scaledPattern ? counter - scaledPattern : scaledPattern - counter;
        if (variance > maxIndividualVariance) {
          return Number.POSITIVE_INFINITY;
        }
        totalVariance += variance;
      }
      return totalVariance / total;
    };
    return OneDReader2;
  }()
);
var OneDReader_default = OneDReader;

// node_modules/@zxing/library/esm/core/oned/Code128Reader.js
var __extends22 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Code128Reader = (
  /** @class */
  function(_super) {
    __extends22(Code128Reader2, _super);
    function Code128Reader2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Code128Reader2.findStartPattern = function(row) {
      var width = row.getSize();
      var rowOffset = row.getNextSet(0);
      var counterPosition = 0;
      var counters = Int32Array.from([0, 0, 0, 0, 0, 0]);
      var patternStart = rowOffset;
      var isWhite = false;
      var patternLength = 6;
      for (var i = rowOffset; i < width; i++) {
        if (row.get(i) !== isWhite) {
          counters[counterPosition]++;
        } else {
          if (counterPosition === patternLength - 1) {
            var bestVariance = Code128Reader2.MAX_AVG_VARIANCE;
            var bestMatch = -1;
            for (var startCode = Code128Reader2.CODE_START_A; startCode <= Code128Reader2.CODE_START_C; startCode++) {
              var variance = OneDReader_default.patternMatchVariance(counters, Code128Reader2.CODE_PATTERNS[startCode], Code128Reader2.MAX_INDIVIDUAL_VARIANCE);
              if (variance < bestVariance) {
                bestVariance = variance;
                bestMatch = startCode;
              }
            }
            if (bestMatch >= 0 && row.isRange(Math.max(0, patternStart - (i - patternStart) / 2), patternStart, false)) {
              return Int32Array.from([patternStart, i, bestMatch]);
            }
            patternStart += counters[0] + counters[1];
            counters = counters.slice(2, counters.length);
            counters[counterPosition - 1] = 0;
            counters[counterPosition] = 0;
            counterPosition--;
          } else {
            counterPosition++;
          }
          counters[counterPosition] = 1;
          isWhite = !isWhite;
        }
      }
      throw new NotFoundException_default();
    };
    Code128Reader2.decodeCode = function(row, counters, rowOffset) {
      OneDReader_default.recordPattern(row, rowOffset, counters);
      var bestVariance = Code128Reader2.MAX_AVG_VARIANCE;
      var bestMatch = -1;
      for (var d = 0; d < Code128Reader2.CODE_PATTERNS.length; d++) {
        var pattern = Code128Reader2.CODE_PATTERNS[d];
        var variance = this.patternMatchVariance(counters, pattern, Code128Reader2.MAX_INDIVIDUAL_VARIANCE);
        if (variance < bestVariance) {
          bestVariance = variance;
          bestMatch = d;
        }
      }
      if (bestMatch >= 0) {
        return bestMatch;
      } else {
        throw new NotFoundException_default();
      }
    };
    Code128Reader2.prototype.decodeRow = function(rowNumber, row, hints) {
      var convertFNC1 = hints && hints.get(DecodeHintType_default.ASSUME_GS1) === true;
      var startPatternInfo = Code128Reader2.findStartPattern(row);
      var startCode = startPatternInfo[2];
      var currentRawCodesIndex = 0;
      var rawCodes = new Uint8Array(20);
      rawCodes[currentRawCodesIndex++] = startCode;
      var codeSet;
      switch (startCode) {
        case Code128Reader2.CODE_START_A:
          codeSet = Code128Reader2.CODE_CODE_A;
          break;
        case Code128Reader2.CODE_START_B:
          codeSet = Code128Reader2.CODE_CODE_B;
          break;
        case Code128Reader2.CODE_START_C:
          codeSet = Code128Reader2.CODE_CODE_C;
          break;
        default:
          throw new FormatException_default();
      }
      var done = false;
      var isNextShifted = false;
      var result = "";
      var lastStart = startPatternInfo[0];
      var nextStart = startPatternInfo[1];
      var counters = Int32Array.from([0, 0, 0, 0, 0, 0]);
      var lastCode = 0;
      var code = 0;
      var checksumTotal = startCode;
      var multiplier = 0;
      var lastCharacterWasPrintable = true;
      var upperMode = false;
      var shiftUpperMode = false;
      while (!done) {
        var unshift = isNextShifted;
        isNextShifted = false;
        lastCode = code;
        code = Code128Reader2.decodeCode(row, counters, nextStart);
        rawCodes[currentRawCodesIndex++] = code;
        if (code !== Code128Reader2.CODE_STOP) {
          lastCharacterWasPrintable = true;
        }
        if (code !== Code128Reader2.CODE_STOP) {
          multiplier++;
          checksumTotal += multiplier * code;
        }
        lastStart = nextStart;
        nextStart += counters.reduce(function(previous, current) {
          return previous + current;
        }, 0);
        switch (code) {
          case Code128Reader2.CODE_START_A:
          case Code128Reader2.CODE_START_B:
          case Code128Reader2.CODE_START_C:
            throw new FormatException_default();
        }
        switch (codeSet) {
          case Code128Reader2.CODE_CODE_A:
            if (code < 64) {
              if (shiftUpperMode === upperMode) {
                result += String.fromCharCode(" ".charCodeAt(0) + code);
              } else {
                result += String.fromCharCode(" ".charCodeAt(0) + code + 128);
              }
              shiftUpperMode = false;
            } else if (code < 96) {
              if (shiftUpperMode === upperMode) {
                result += String.fromCharCode(code - 64);
              } else {
                result += String.fromCharCode(code + 64);
              }
              shiftUpperMode = false;
            } else {
              if (code !== Code128Reader2.CODE_STOP) {
                lastCharacterWasPrintable = false;
              }
              switch (code) {
                case Code128Reader2.CODE_FNC_1:
                  if (convertFNC1) {
                    if (result.length === 0) {
                      result += "]C1";
                    } else {
                      result += String.fromCharCode(29);
                    }
                  }
                  break;
                case Code128Reader2.CODE_FNC_2:
                case Code128Reader2.CODE_FNC_3:
                  break;
                case Code128Reader2.CODE_FNC_4_A:
                  if (!upperMode && shiftUpperMode) {
                    upperMode = true;
                    shiftUpperMode = false;
                  } else if (upperMode && shiftUpperMode) {
                    upperMode = false;
                    shiftUpperMode = false;
                  } else {
                    shiftUpperMode = true;
                  }
                  break;
                case Code128Reader2.CODE_SHIFT:
                  isNextShifted = true;
                  codeSet = Code128Reader2.CODE_CODE_B;
                  break;
                case Code128Reader2.CODE_CODE_B:
                  codeSet = Code128Reader2.CODE_CODE_B;
                  break;
                case Code128Reader2.CODE_CODE_C:
                  codeSet = Code128Reader2.CODE_CODE_C;
                  break;
                case Code128Reader2.CODE_STOP:
                  done = true;
                  break;
              }
            }
            break;
          case Code128Reader2.CODE_CODE_B:
            if (code < 96) {
              if (shiftUpperMode === upperMode) {
                result += String.fromCharCode(" ".charCodeAt(0) + code);
              } else {
                result += String.fromCharCode(" ".charCodeAt(0) + code + 128);
              }
              shiftUpperMode = false;
            } else {
              if (code !== Code128Reader2.CODE_STOP) {
                lastCharacterWasPrintable = false;
              }
              switch (code) {
                case Code128Reader2.CODE_FNC_1:
                  if (convertFNC1) {
                    if (result.length === 0) {
                      result += "]C1";
                    } else {
                      result += String.fromCharCode(29);
                    }
                  }
                  break;
                case Code128Reader2.CODE_FNC_2:
                case Code128Reader2.CODE_FNC_3:
                  break;
                case Code128Reader2.CODE_FNC_4_B:
                  if (!upperMode && shiftUpperMode) {
                    upperMode = true;
                    shiftUpperMode = false;
                  } else if (upperMode && shiftUpperMode) {
                    upperMode = false;
                    shiftUpperMode = false;
                  } else {
                    shiftUpperMode = true;
                  }
                  break;
                case Code128Reader2.CODE_SHIFT:
                  isNextShifted = true;
                  codeSet = Code128Reader2.CODE_CODE_A;
                  break;
                case Code128Reader2.CODE_CODE_A:
                  codeSet = Code128Reader2.CODE_CODE_A;
                  break;
                case Code128Reader2.CODE_CODE_C:
                  codeSet = Code128Reader2.CODE_CODE_C;
                  break;
                case Code128Reader2.CODE_STOP:
                  done = true;
                  break;
              }
            }
            break;
          case Code128Reader2.CODE_CODE_C:
            if (code < 100) {
              if (code < 10) {
                result += "0";
              }
              result += code;
            } else {
              if (code !== Code128Reader2.CODE_STOP) {
                lastCharacterWasPrintable = false;
              }
              switch (code) {
                case Code128Reader2.CODE_FNC_1:
                  if (convertFNC1) {
                    if (result.length === 0) {
                      result += "]C1";
                    } else {
                      result += String.fromCharCode(29);
                    }
                  }
                  break;
                case Code128Reader2.CODE_CODE_A:
                  codeSet = Code128Reader2.CODE_CODE_A;
                  break;
                case Code128Reader2.CODE_CODE_B:
                  codeSet = Code128Reader2.CODE_CODE_B;
                  break;
                case Code128Reader2.CODE_STOP:
                  done = true;
                  break;
              }
            }
            break;
        }
        if (unshift) {
          codeSet = codeSet === Code128Reader2.CODE_CODE_A ? Code128Reader2.CODE_CODE_B : Code128Reader2.CODE_CODE_A;
        }
      }
      var lastPatternSize = nextStart - lastStart;
      nextStart = row.getNextUnset(nextStart);
      if (!row.isRange(nextStart, Math.min(row.getSize(), nextStart + (nextStart - lastStart) / 2), false)) {
        throw new NotFoundException_default();
      }
      checksumTotal -= multiplier * lastCode;
      if (checksumTotal % 103 !== lastCode) {
        throw new ChecksumException_default();
      }
      var resultLength = result.length;
      if (resultLength === 0) {
        throw new NotFoundException_default();
      }
      if (resultLength > 0 && lastCharacterWasPrintable) {
        if (codeSet === Code128Reader2.CODE_CODE_C) {
          result = result.substring(0, resultLength - 2);
        } else {
          result = result.substring(0, resultLength - 1);
        }
      }
      var left = (startPatternInfo[1] + startPatternInfo[0]) / 2;
      var right = lastStart + lastPatternSize / 2;
      var rawCodesSize = rawCodes.length;
      var rawBytes = new Uint8Array(rawCodesSize);
      for (var i = 0; i < rawCodesSize; i++) {
        rawBytes[i] = rawCodes[i];
      }
      var points = [new ResultPoint_default(left, rowNumber), new ResultPoint_default(right, rowNumber)];
      return new Result_default(result, rawBytes, 0, points, BarcodeFormat_default.CODE_128, (/* @__PURE__ */ new Date()).getTime());
    };
    Code128Reader2.CODE_PATTERNS = [Int32Array.from([2, 1, 2, 2, 2, 2]), Int32Array.from([2, 2, 2, 1, 2, 2]), Int32Array.from([2, 2, 2, 2, 2, 1]), Int32Array.from([1, 2, 1, 2, 2, 3]), Int32Array.from([1, 2, 1, 3, 2, 2]), Int32Array.from([1, 3, 1, 2, 2, 2]), Int32Array.from([1, 2, 2, 2, 1, 3]), Int32Array.from([1, 2, 2, 3, 1, 2]), Int32Array.from([1, 3, 2, 2, 1, 2]), Int32Array.from([2, 2, 1, 2, 1, 3]), Int32Array.from([2, 2, 1, 3, 1, 2]), Int32Array.from([2, 3, 1, 2, 1, 2]), Int32Array.from([1, 1, 2, 2, 3, 2]), Int32Array.from([1, 2, 2, 1, 3, 2]), Int32Array.from([1, 2, 2, 2, 3, 1]), Int32Array.from([1, 1, 3, 2, 2, 2]), Int32Array.from([1, 2, 3, 1, 2, 2]), Int32Array.from([1, 2, 3, 2, 2, 1]), Int32Array.from([2, 2, 3, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 3, 2]), Int32Array.from([2, 2, 1, 2, 3, 1]), Int32Array.from([2, 1, 3, 2, 1, 2]), Int32Array.from([2, 2, 3, 1, 1, 2]), Int32Array.from([3, 1, 2, 1, 3, 1]), Int32Array.from([3, 1, 1, 2, 2, 2]), Int32Array.from([3, 2, 1, 1, 2, 2]), Int32Array.from([3, 2, 1, 2, 2, 1]), Int32Array.from([3, 1, 2, 2, 1, 2]), Int32Array.from([3, 2, 2, 1, 1, 2]), Int32Array.from([3, 2, 2, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 2, 3]), Int32Array.from([2, 1, 2, 3, 2, 1]), Int32Array.from([2, 3, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 3, 2, 3]), Int32Array.from([1, 3, 1, 1, 2, 3]), Int32Array.from([1, 3, 1, 3, 2, 1]), Int32Array.from([1, 1, 2, 3, 1, 3]), Int32Array.from([1, 3, 2, 1, 1, 3]), Int32Array.from([1, 3, 2, 3, 1, 1]), Int32Array.from([2, 1, 1, 3, 1, 3]), Int32Array.from([2, 3, 1, 1, 1, 3]), Int32Array.from([2, 3, 1, 3, 1, 1]), Int32Array.from([1, 1, 2, 1, 3, 3]), Int32Array.from([1, 1, 2, 3, 3, 1]), Int32Array.from([1, 3, 2, 1, 3, 1]), Int32Array.from([1, 1, 3, 1, 2, 3]), Int32Array.from([1, 1, 3, 3, 2, 1]), Int32Array.from([1, 3, 3, 1, 2, 1]), Int32Array.from([3, 1, 3, 1, 2, 1]), Int32Array.from([2, 1, 1, 3, 3, 1]), Int32Array.from([2, 3, 1, 1, 3, 1]), Int32Array.from([2, 1, 3, 1, 1, 3]), Int32Array.from([2, 1, 3, 3, 1, 1]), Int32Array.from([2, 1, 3, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 2, 3]), Int32Array.from([3, 1, 1, 3, 2, 1]), Int32Array.from([3, 3, 1, 1, 2, 1]), Int32Array.from([3, 1, 2, 1, 1, 3]), Int32Array.from([3, 1, 2, 3, 1, 1]), Int32Array.from([3, 3, 2, 1, 1, 1]), Int32Array.from([3, 1, 4, 1, 1, 1]), Int32Array.from([2, 2, 1, 4, 1, 1]), Int32Array.from([4, 3, 1, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 2, 4]), Int32Array.from([1, 1, 1, 4, 2, 2]), Int32Array.from([1, 2, 1, 1, 2, 4]), Int32Array.from([1, 2, 1, 4, 2, 1]), Int32Array.from([1, 4, 1, 1, 2, 2]), Int32Array.from([1, 4, 1, 2, 2, 1]), Int32Array.from([1, 1, 2, 2, 1, 4]), Int32Array.from([1, 1, 2, 4, 1, 2]), Int32Array.from([1, 2, 2, 1, 1, 4]), Int32Array.from([1, 2, 2, 4, 1, 1]), Int32Array.from([1, 4, 2, 1, 1, 2]), Int32Array.from([1, 4, 2, 2, 1, 1]), Int32Array.from([2, 4, 1, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 1, 4]), Int32Array.from([4, 1, 3, 1, 1, 1]), Int32Array.from([2, 4, 1, 1, 1, 2]), Int32Array.from([1, 3, 4, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 4, 2]), Int32Array.from([1, 2, 1, 1, 4, 2]), Int32Array.from([1, 2, 1, 2, 4, 1]), Int32Array.from([1, 1, 4, 2, 1, 2]), Int32Array.from([1, 2, 4, 1, 1, 2]), Int32Array.from([1, 2, 4, 2, 1, 1]), Int32Array.from([4, 1, 1, 2, 1, 2]), Int32Array.from([4, 2, 1, 1, 1, 2]), Int32Array.from([4, 2, 1, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 4, 1]), Int32Array.from([2, 1, 4, 1, 2, 1]), Int32Array.from([4, 1, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 1, 4, 3]), Int32Array.from([1, 1, 1, 3, 4, 1]), Int32Array.from([1, 3, 1, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 1, 3]), Int32Array.from([1, 1, 4, 3, 1, 1]), Int32Array.from([4, 1, 1, 1, 1, 3]), Int32Array.from([4, 1, 1, 3, 1, 1]), Int32Array.from([1, 1, 3, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 4, 1]), Int32Array.from([4, 1, 1, 1, 3, 1]), Int32Array.from([2, 1, 1, 4, 1, 2]), Int32Array.from([2, 1, 1, 2, 1, 4]), Int32Array.from([2, 1, 1, 2, 3, 2]), Int32Array.from([2, 3, 3, 1, 1, 1, 2])];
    Code128Reader2.MAX_AVG_VARIANCE = 0.25;
    Code128Reader2.MAX_INDIVIDUAL_VARIANCE = 0.7;
    Code128Reader2.CODE_SHIFT = 98;
    Code128Reader2.CODE_CODE_C = 99;
    Code128Reader2.CODE_CODE_B = 100;
    Code128Reader2.CODE_CODE_A = 101;
    Code128Reader2.CODE_FNC_1 = 102;
    Code128Reader2.CODE_FNC_2 = 97;
    Code128Reader2.CODE_FNC_3 = 96;
    Code128Reader2.CODE_FNC_4_A = 101;
    Code128Reader2.CODE_FNC_4_B = 100;
    Code128Reader2.CODE_START_A = 103;
    Code128Reader2.CODE_START_B = 104;
    Code128Reader2.CODE_START_C = 105;
    Code128Reader2.CODE_STOP = 106;
    return Code128Reader2;
  }(OneDReader_default)
);
var Code128Reader_default = Code128Reader;

// node_modules/@zxing/library/esm/core/oned/Code39Reader.js
var __extends23 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values4 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Code39Reader = (
  /** @class */
  function(_super) {
    __extends23(Code39Reader2, _super);
    function Code39Reader2(usingCheckDigit, extendedMode) {
      if (usingCheckDigit === void 0) {
        usingCheckDigit = false;
      }
      if (extendedMode === void 0) {
        extendedMode = false;
      }
      var _this = _super.call(this) || this;
      _this.usingCheckDigit = usingCheckDigit;
      _this.extendedMode = extendedMode;
      _this.decodeRowResult = "";
      _this.counters = new Int32Array(9);
      return _this;
    }
    Code39Reader2.prototype.decodeRow = function(rowNumber, row, hints) {
      var e_1, _a2, e_2, _b;
      var theCounters = this.counters;
      theCounters.fill(0);
      this.decodeRowResult = "";
      var start = Code39Reader2.findAsteriskPattern(row, theCounters);
      var nextStart = row.getNextSet(start[1]);
      var end = row.getSize();
      var decodedChar;
      var lastStart;
      do {
        Code39Reader2.recordPattern(row, nextStart, theCounters);
        var pattern = Code39Reader2.toNarrowWidePattern(theCounters);
        if (pattern < 0) {
          throw new NotFoundException_default();
        }
        decodedChar = Code39Reader2.patternToChar(pattern);
        this.decodeRowResult += decodedChar;
        lastStart = nextStart;
        try {
          for (var theCounters_1 = (e_1 = void 0, __values4(theCounters)), theCounters_1_1 = theCounters_1.next(); !theCounters_1_1.done; theCounters_1_1 = theCounters_1.next()) {
            var counter = theCounters_1_1.value;
            nextStart += counter;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (theCounters_1_1 && !theCounters_1_1.done && (_a2 = theCounters_1.return)) _a2.call(theCounters_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        nextStart = row.getNextSet(nextStart);
      } while (decodedChar !== "*");
      this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
      var lastPatternSize = 0;
      try {
        for (var theCounters_2 = __values4(theCounters), theCounters_2_1 = theCounters_2.next(); !theCounters_2_1.done; theCounters_2_1 = theCounters_2.next()) {
          var counter = theCounters_2_1.value;
          lastPatternSize += counter;
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (theCounters_2_1 && !theCounters_2_1.done && (_b = theCounters_2.return)) _b.call(theCounters_2);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      var whiteSpaceAfterEnd = nextStart - lastStart - lastPatternSize;
      if (nextStart !== end && whiteSpaceAfterEnd * 2 < lastPatternSize) {
        throw new NotFoundException_default();
      }
      if (this.usingCheckDigit) {
        var max = this.decodeRowResult.length - 1;
        var total = 0;
        for (var i = 0; i < max; i++) {
          total += Code39Reader2.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(i));
        }
        if (this.decodeRowResult.charAt(max) !== Code39Reader2.ALPHABET_STRING.charAt(total % 43)) {
          throw new ChecksumException_default();
        }
        this.decodeRowResult = this.decodeRowResult.substring(0, max);
      }
      if (this.decodeRowResult.length === 0) {
        throw new NotFoundException_default();
      }
      var resultString;
      if (this.extendedMode) {
        resultString = Code39Reader2.decodeExtended(this.decodeRowResult);
      } else {
        resultString = this.decodeRowResult;
      }
      var left = (start[1] + start[0]) / 2;
      var right = lastStart + lastPatternSize / 2;
      return new Result_default(resultString, null, 0, [new ResultPoint_default(left, rowNumber), new ResultPoint_default(right, rowNumber)], BarcodeFormat_default.CODE_39, (/* @__PURE__ */ new Date()).getTime());
    };
    Code39Reader2.findAsteriskPattern = function(row, counters) {
      var width = row.getSize();
      var rowOffset = row.getNextSet(0);
      var counterPosition = 0;
      var patternStart = rowOffset;
      var isWhite = false;
      var patternLength = counters.length;
      for (var i = rowOffset; i < width; i++) {
        if (row.get(i) !== isWhite) {
          counters[counterPosition]++;
        } else {
          if (counterPosition === patternLength - 1) {
            if (this.toNarrowWidePattern(counters) === Code39Reader2.ASTERISK_ENCODING && row.isRange(Math.max(0, patternStart - Math.floor((i - patternStart) / 2)), patternStart, false)) {
              return [patternStart, i];
            }
            patternStart += counters[0] + counters[1];
            counters.copyWithin(0, 2, 2 + counterPosition - 1);
            counters[counterPosition - 1] = 0;
            counters[counterPosition] = 0;
            counterPosition--;
          } else {
            counterPosition++;
          }
          counters[counterPosition] = 1;
          isWhite = !isWhite;
        }
      }
      throw new NotFoundException_default();
    };
    Code39Reader2.toNarrowWidePattern = function(counters) {
      var e_3, _a2;
      var numCounters = counters.length;
      var maxNarrowCounter = 0;
      var wideCounters;
      do {
        var minCounter = 2147483647;
        try {
          for (var counters_1 = (e_3 = void 0, __values4(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
            var counter = counters_1_1.value;
            if (counter < minCounter && counter > maxNarrowCounter) {
              minCounter = counter;
            }
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (counters_1_1 && !counters_1_1.done && (_a2 = counters_1.return)) _a2.call(counters_1);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        maxNarrowCounter = minCounter;
        wideCounters = 0;
        var totalWideCountersWidth = 0;
        var pattern = 0;
        for (var i = 0; i < numCounters; i++) {
          var counter = counters[i];
          if (counter > maxNarrowCounter) {
            pattern |= 1 << numCounters - 1 - i;
            wideCounters++;
            totalWideCountersWidth += counter;
          }
        }
        if (wideCounters === 3) {
          for (var i = 0; i < numCounters && wideCounters > 0; i++) {
            var counter = counters[i];
            if (counter > maxNarrowCounter) {
              wideCounters--;
              if (counter * 2 >= totalWideCountersWidth) {
                return -1;
              }
            }
          }
          return pattern;
        }
      } while (wideCounters > 3);
      return -1;
    };
    Code39Reader2.patternToChar = function(pattern) {
      for (var i = 0; i < Code39Reader2.CHARACTER_ENCODINGS.length; i++) {
        if (Code39Reader2.CHARACTER_ENCODINGS[i] === pattern) {
          return Code39Reader2.ALPHABET_STRING.charAt(i);
        }
      }
      if (pattern === Code39Reader2.ASTERISK_ENCODING) {
        return "*";
      }
      throw new NotFoundException_default();
    };
    Code39Reader2.decodeExtended = function(encoded) {
      var length = encoded.length;
      var decoded = "";
      for (var i = 0; i < length; i++) {
        var c = encoded.charAt(i);
        if (c === "+" || c === "$" || c === "%" || c === "/") {
          var next = encoded.charAt(i + 1);
          var decodedChar = "\0";
          switch (c) {
            case "+":
              if (next >= "A" && next <= "Z") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) + 32);
              } else {
                throw new FormatException_default();
              }
              break;
            case "$":
              if (next >= "A" && next <= "Z") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) - 64);
              } else {
                throw new FormatException_default();
              }
              break;
            case "%":
              if (next >= "A" && next <= "E") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) - 38);
              } else if (next >= "F" && next <= "J") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) - 11);
              } else if (next >= "K" && next <= "O") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) + 16);
              } else if (next >= "P" && next <= "T") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) + 43);
              } else if (next === "U") {
                decodedChar = "\0";
              } else if (next === "V") {
                decodedChar = "@";
              } else if (next === "W") {
                decodedChar = "`";
              } else if (next === "X" || next === "Y" || next === "Z") {
                decodedChar = "";
              } else {
                throw new FormatException_default();
              }
              break;
            case "/":
              if (next >= "A" && next <= "O") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) - 32);
              } else if (next === "Z") {
                decodedChar = ":";
              } else {
                throw new FormatException_default();
              }
              break;
          }
          decoded += decodedChar;
          i++;
        } else {
          decoded += c;
        }
      }
      return decoded;
    };
    Code39Reader2.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%";
    Code39Reader2.CHARACTER_ENCODINGS = [
      52,
      289,
      97,
      352,
      49,
      304,
      112,
      37,
      292,
      100,
      265,
      73,
      328,
      25,
      280,
      88,
      13,
      268,
      76,
      28,
      259,
      67,
      322,
      19,
      274,
      82,
      7,
      262,
      70,
      22,
      385,
      193,
      448,
      145,
      400,
      208,
      133,
      388,
      196,
      168,
      162,
      138,
      42
      // /-%
    ];
    Code39Reader2.ASTERISK_ENCODING = 148;
    return Code39Reader2;
  }(OneDReader_default)
);
var Code39Reader_default = Code39Reader;

// node_modules/@zxing/library/esm/core/oned/Code93Reader.js
var __extends24 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values5 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Code93Reader = (
  /** @class */
  function(_super) {
    __extends24(Code93Reader2, _super);
    function Code93Reader2() {
      var _this = _super.call(this) || this;
      _this.decodeRowResult = "";
      _this.counters = new Int32Array(6);
      return _this;
    }
    Code93Reader2.prototype.decodeRow = function(rowNumber, row, hints) {
      var e_1, _a2, e_2, _b;
      var start = this.findAsteriskPattern(row);
      var nextStart = row.getNextSet(start[1]);
      var end = row.getSize();
      var theCounters = this.counters;
      theCounters.fill(0);
      this.decodeRowResult = "";
      var decodedChar;
      var lastStart;
      do {
        Code93Reader2.recordPattern(row, nextStart, theCounters);
        var pattern = this.toPattern(theCounters);
        if (pattern < 0) {
          throw new NotFoundException_default();
        }
        decodedChar = this.patternToChar(pattern);
        this.decodeRowResult += decodedChar;
        lastStart = nextStart;
        try {
          for (var theCounters_1 = (e_1 = void 0, __values5(theCounters)), theCounters_1_1 = theCounters_1.next(); !theCounters_1_1.done; theCounters_1_1 = theCounters_1.next()) {
            var counter = theCounters_1_1.value;
            nextStart += counter;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (theCounters_1_1 && !theCounters_1_1.done && (_a2 = theCounters_1.return)) _a2.call(theCounters_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        nextStart = row.getNextSet(nextStart);
      } while (decodedChar !== "*");
      this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
      var lastPatternSize = 0;
      try {
        for (var theCounters_2 = __values5(theCounters), theCounters_2_1 = theCounters_2.next(); !theCounters_2_1.done; theCounters_2_1 = theCounters_2.next()) {
          var counter = theCounters_2_1.value;
          lastPatternSize += counter;
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (theCounters_2_1 && !theCounters_2_1.done && (_b = theCounters_2.return)) _b.call(theCounters_2);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      if (nextStart === end || !row.get(nextStart)) {
        throw new NotFoundException_default();
      }
      if (this.decodeRowResult.length < 2) {
        throw new NotFoundException_default();
      }
      this.checkChecksums(this.decodeRowResult);
      this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 2);
      var resultString = this.decodeExtended(this.decodeRowResult);
      var left = (start[1] + start[0]) / 2;
      var right = lastStart + lastPatternSize / 2;
      return new Result_default(resultString, null, 0, [new ResultPoint_default(left, rowNumber), new ResultPoint_default(right, rowNumber)], BarcodeFormat_default.CODE_93, (/* @__PURE__ */ new Date()).getTime());
    };
    Code93Reader2.prototype.findAsteriskPattern = function(row) {
      var width = row.getSize();
      var rowOffset = row.getNextSet(0);
      this.counters.fill(0);
      var theCounters = this.counters;
      var patternStart = rowOffset;
      var isWhite = false;
      var patternLength = theCounters.length;
      var counterPosition = 0;
      for (var i = rowOffset; i < width; i++) {
        if (row.get(i) !== isWhite) {
          theCounters[counterPosition]++;
        } else {
          if (counterPosition === patternLength - 1) {
            if (this.toPattern(theCounters) === Code93Reader2.ASTERISK_ENCODING) {
              return new Int32Array([patternStart, i]);
            }
            patternStart += theCounters[0] + theCounters[1];
            theCounters.copyWithin(0, 2, 2 + counterPosition - 1);
            theCounters[counterPosition - 1] = 0;
            theCounters[counterPosition] = 0;
            counterPosition--;
          } else {
            counterPosition++;
          }
          theCounters[counterPosition] = 1;
          isWhite = !isWhite;
        }
      }
      throw new NotFoundException_default();
    };
    Code93Reader2.prototype.toPattern = function(counters) {
      var e_3, _a2;
      var sum = 0;
      try {
        for (var counters_1 = __values5(counters), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
          var counter = counters_1_1.value;
          sum += counter;
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (counters_1_1 && !counters_1_1.done && (_a2 = counters_1.return)) _a2.call(counters_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      var pattern = 0;
      var max = counters.length;
      for (var i = 0; i < max; i++) {
        var scaled = Math.round(counters[i] * 9 / sum);
        if (scaled < 1 || scaled > 4) {
          return -1;
        }
        if ((i & 1) === 0) {
          for (var j = 0; j < scaled; j++) {
            pattern = pattern << 1 | 1;
          }
        } else {
          pattern <<= scaled;
        }
      }
      return pattern;
    };
    Code93Reader2.prototype.patternToChar = function(pattern) {
      for (var i = 0; i < Code93Reader2.CHARACTER_ENCODINGS.length; i++) {
        if (Code93Reader2.CHARACTER_ENCODINGS[i] === pattern) {
          return Code93Reader2.ALPHABET_STRING.charAt(i);
        }
      }
      throw new NotFoundException_default();
    };
    Code93Reader2.prototype.decodeExtended = function(encoded) {
      var length = encoded.length;
      var decoded = "";
      for (var i = 0; i < length; i++) {
        var c = encoded.charAt(i);
        if (c >= "a" && c <= "d") {
          if (i >= length - 1) {
            throw new FormatException_default();
          }
          var next = encoded.charAt(i + 1);
          var decodedChar = "\0";
          switch (c) {
            case "d":
              if (next >= "A" && next <= "Z") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) + 32);
              } else {
                throw new FormatException_default();
              }
              break;
            case "a":
              if (next >= "A" && next <= "Z") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) - 64);
              } else {
                throw new FormatException_default();
              }
              break;
            case "b":
              if (next >= "A" && next <= "E") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) - 38);
              } else if (next >= "F" && next <= "J") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) - 11);
              } else if (next >= "K" && next <= "O") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) + 16);
              } else if (next >= "P" && next <= "T") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) + 43);
              } else if (next === "U") {
                decodedChar = "\0";
              } else if (next === "V") {
                decodedChar = "@";
              } else if (next === "W") {
                decodedChar = "`";
              } else if (next >= "X" && next <= "Z") {
                decodedChar = String.fromCharCode(127);
              } else {
                throw new FormatException_default();
              }
              break;
            case "c":
              if (next >= "A" && next <= "O") {
                decodedChar = String.fromCharCode(next.charCodeAt(0) - 32);
              } else if (next === "Z") {
                decodedChar = ":";
              } else {
                throw new FormatException_default();
              }
              break;
          }
          decoded += decodedChar;
          i++;
        } else {
          decoded += c;
        }
      }
      return decoded;
    };
    Code93Reader2.prototype.checkChecksums = function(result) {
      var length = result.length;
      this.checkOneChecksum(result, length - 2, 20);
      this.checkOneChecksum(result, length - 1, 15);
    };
    Code93Reader2.prototype.checkOneChecksum = function(result, checkPosition, weightMax) {
      var weight = 1;
      var total = 0;
      for (var i = checkPosition - 1; i >= 0; i--) {
        total += weight * Code93Reader2.ALPHABET_STRING.indexOf(result.charAt(i));
        if (++weight > weightMax) {
          weight = 1;
        }
      }
      if (result.charAt(checkPosition) !== Code93Reader2.ALPHABET_STRING[total % 47]) {
        throw new ChecksumException_default();
      }
    };
    Code93Reader2.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*";
    Code93Reader2.CHARACTER_ENCODINGS = [276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418, 404, 402, 394, 360, 356, 354, 308, 282, 344, 332, 326, 300, 278, 436, 434, 428, 422, 406, 410, 364, 358, 310, 314, 302, 468, 466, 458, 366, 374, 430, 294, 474, 470, 306, 350];
    Code93Reader2.ASTERISK_ENCODING = Code93Reader2.CHARACTER_ENCODINGS[47];
    return Code93Reader2;
  }(OneDReader_default)
);
var Code93Reader_default = Code93Reader;

// node_modules/@zxing/library/esm/core/oned/ITFReader.js
var __extends25 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values6 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ITFReader = (
  /** @class */
  function(_super) {
    __extends25(ITFReader2, _super);
    function ITFReader2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.narrowLineWidth = -1;
      return _this;
    }
    ITFReader2.prototype.decodeRow = function(rowNumber, row, hints) {
      var e_1, _a2;
      var startRange = this.decodeStart(row);
      var endRange = this.decodeEnd(row);
      var result = new StringBuilder_default();
      ITFReader2.decodeMiddle(row, startRange[1], endRange[0], result);
      var resultString = result.toString();
      var allowedLengths = null;
      if (hints != null) {
        allowedLengths = hints.get(DecodeHintType_default.ALLOWED_LENGTHS);
      }
      if (allowedLengths == null) {
        allowedLengths = ITFReader2.DEFAULT_ALLOWED_LENGTHS;
      }
      var length = resultString.length;
      var lengthOK = false;
      var maxAllowedLength = 0;
      try {
        for (var allowedLengths_1 = __values6(allowedLengths), allowedLengths_1_1 = allowedLengths_1.next(); !allowedLengths_1_1.done; allowedLengths_1_1 = allowedLengths_1.next()) {
          var value = allowedLengths_1_1.value;
          if (length === value) {
            lengthOK = true;
            break;
          }
          if (value > maxAllowedLength) {
            maxAllowedLength = value;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (allowedLengths_1_1 && !allowedLengths_1_1.done && (_a2 = allowedLengths_1.return)) _a2.call(allowedLengths_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      if (!lengthOK && length > maxAllowedLength) {
        lengthOK = true;
      }
      if (!lengthOK) {
        throw new FormatException_default();
      }
      var points = [new ResultPoint_default(startRange[1], rowNumber), new ResultPoint_default(endRange[0], rowNumber)];
      var resultReturn = new Result_default(
        resultString,
        null,
        // no natural byte representation for these barcodes
        0,
        points,
        BarcodeFormat_default.ITF,
        (/* @__PURE__ */ new Date()).getTime()
      );
      return resultReturn;
    };
    ITFReader2.decodeMiddle = function(row, payloadStart, payloadEnd, resultString) {
      var counterDigitPair = new Int32Array(10);
      var counterBlack = new Int32Array(5);
      var counterWhite = new Int32Array(5);
      counterDigitPair.fill(0);
      counterBlack.fill(0);
      counterWhite.fill(0);
      while (payloadStart < payloadEnd) {
        OneDReader_default.recordPattern(row, payloadStart, counterDigitPair);
        for (var k = 0; k < 5; k++) {
          var twoK = 2 * k;
          counterBlack[k] = counterDigitPair[twoK];
          counterWhite[k] = counterDigitPair[twoK + 1];
        }
        var bestMatch = ITFReader2.decodeDigit(counterBlack);
        resultString.append(bestMatch.toString());
        bestMatch = this.decodeDigit(counterWhite);
        resultString.append(bestMatch.toString());
        counterDigitPair.forEach(function(counterDigit) {
          payloadStart += counterDigit;
        });
      }
    };
    ITFReader2.prototype.decodeStart = function(row) {
      var endStart = ITFReader2.skipWhiteSpace(row);
      var startPattern = ITFReader2.findGuardPattern(row, endStart, ITFReader2.START_PATTERN);
      this.narrowLineWidth = (startPattern[1] - startPattern[0]) / 4;
      this.validateQuietZone(row, startPattern[0]);
      return startPattern;
    };
    ITFReader2.prototype.validateQuietZone = function(row, startPattern) {
      var quietCount = this.narrowLineWidth * 10;
      quietCount = quietCount < startPattern ? quietCount : startPattern;
      for (var i = startPattern - 1; quietCount > 0 && i >= 0; i--) {
        if (row.get(i)) {
          break;
        }
        quietCount--;
      }
      if (quietCount !== 0) {
        throw new NotFoundException_default();
      }
    };
    ITFReader2.skipWhiteSpace = function(row) {
      var width = row.getSize();
      var endStart = row.getNextSet(0);
      if (endStart === width) {
        throw new NotFoundException_default();
      }
      return endStart;
    };
    ITFReader2.prototype.decodeEnd = function(row) {
      row.reverse();
      try {
        var endStart = ITFReader2.skipWhiteSpace(row);
        var endPattern = void 0;
        try {
          endPattern = ITFReader2.findGuardPattern(row, endStart, ITFReader2.END_PATTERN_REVERSED[0]);
        } catch (error) {
          if (error instanceof NotFoundException_default) {
            endPattern = ITFReader2.findGuardPattern(row, endStart, ITFReader2.END_PATTERN_REVERSED[1]);
          }
        }
        this.validateQuietZone(row, endPattern[0]);
        var temp = endPattern[0];
        endPattern[0] = row.getSize() - endPattern[1];
        endPattern[1] = row.getSize() - temp;
        return endPattern;
      } finally {
        row.reverse();
      }
    };
    ITFReader2.findGuardPattern = function(row, rowOffset, pattern) {
      var patternLength = pattern.length;
      var counters = new Int32Array(patternLength);
      var width = row.getSize();
      var isWhite = false;
      var counterPosition = 0;
      var patternStart = rowOffset;
      counters.fill(0);
      for (var x = rowOffset; x < width; x++) {
        if (row.get(x) !== isWhite) {
          counters[counterPosition]++;
        } else {
          if (counterPosition === patternLength - 1) {
            if (OneDReader_default.patternMatchVariance(counters, pattern, ITFReader2.MAX_INDIVIDUAL_VARIANCE) < ITFReader2.MAX_AVG_VARIANCE) {
              return [patternStart, x];
            }
            patternStart += counters[0] + counters[1];
            System_default.arraycopy(counters, 2, counters, 0, counterPosition - 1);
            counters[counterPosition - 1] = 0;
            counters[counterPosition] = 0;
            counterPosition--;
          } else {
            counterPosition++;
          }
          counters[counterPosition] = 1;
          isWhite = !isWhite;
        }
      }
      throw new NotFoundException_default();
    };
    ITFReader2.decodeDigit = function(counters) {
      var bestVariance = ITFReader2.MAX_AVG_VARIANCE;
      var bestMatch = -1;
      var max = ITFReader2.PATTERNS.length;
      for (var i = 0; i < max; i++) {
        var pattern = ITFReader2.PATTERNS[i];
        var variance = OneDReader_default.patternMatchVariance(counters, pattern, ITFReader2.MAX_INDIVIDUAL_VARIANCE);
        if (variance < bestVariance) {
          bestVariance = variance;
          bestMatch = i;
        } else if (variance === bestVariance) {
          bestMatch = -1;
        }
      }
      if (bestMatch >= 0) {
        return bestMatch % 10;
      } else {
        throw new NotFoundException_default();
      }
    };
    ITFReader2.PATTERNS = [
      Int32Array.from([1, 1, 2, 2, 1]),
      Int32Array.from([2, 1, 1, 1, 2]),
      Int32Array.from([1, 2, 1, 1, 2]),
      Int32Array.from([2, 2, 1, 1, 1]),
      Int32Array.from([1, 1, 2, 1, 2]),
      Int32Array.from([2, 1, 2, 1, 1]),
      Int32Array.from([1, 2, 2, 1, 1]),
      Int32Array.from([1, 1, 1, 2, 2]),
      Int32Array.from([2, 1, 1, 2, 1]),
      Int32Array.from([1, 2, 1, 2, 1]),
      Int32Array.from([1, 1, 3, 3, 1]),
      Int32Array.from([3, 1, 1, 1, 3]),
      Int32Array.from([1, 3, 1, 1, 3]),
      Int32Array.from([3, 3, 1, 1, 1]),
      Int32Array.from([1, 1, 3, 1, 3]),
      Int32Array.from([3, 1, 3, 1, 1]),
      Int32Array.from([1, 3, 3, 1, 1]),
      Int32Array.from([1, 1, 1, 3, 3]),
      Int32Array.from([3, 1, 1, 3, 1]),
      Int32Array.from([1, 3, 1, 3, 1])
      // 9
    ];
    ITFReader2.MAX_AVG_VARIANCE = 0.38;
    ITFReader2.MAX_INDIVIDUAL_VARIANCE = 0.5;
    ITFReader2.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14];
    ITFReader2.START_PATTERN = Int32Array.from([1, 1, 1, 1]);
    ITFReader2.END_PATTERN_REVERSED = [
      Int32Array.from([1, 1, 2]),
      Int32Array.from([1, 1, 3])
      // 3x
    ];
    return ITFReader2;
  }(OneDReader_default)
);
var ITFReader_default = ITFReader;

// node_modules/@zxing/library/esm/core/oned/AbstractUPCEANReader.js
var __extends26 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AbstractUPCEANReader = (
  /** @class */
  function(_super) {
    __extends26(AbstractUPCEANReader2, _super);
    function AbstractUPCEANReader2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.decodeRowStringBuffer = "";
      return _this;
    }
    AbstractUPCEANReader2.findStartGuardPattern = function(row) {
      var foundStart = false;
      var startRange;
      var nextStart = 0;
      var counters = Int32Array.from([0, 0, 0]);
      while (!foundStart) {
        counters = Int32Array.from([0, 0, 0]);
        startRange = AbstractUPCEANReader2.findGuardPattern(row, nextStart, false, this.START_END_PATTERN, counters);
        var start = startRange[0];
        nextStart = startRange[1];
        var quietStart = start - (nextStart - start);
        if (quietStart >= 0) {
          foundStart = row.isRange(quietStart, start, false);
        }
      }
      return startRange;
    };
    AbstractUPCEANReader2.checkChecksum = function(s) {
      return AbstractUPCEANReader2.checkStandardUPCEANChecksum(s);
    };
    AbstractUPCEANReader2.checkStandardUPCEANChecksum = function(s) {
      var length = s.length;
      if (length === 0) return false;
      var check = parseInt(s.charAt(length - 1), 10);
      return AbstractUPCEANReader2.getStandardUPCEANChecksum(s.substring(0, length - 1)) === check;
    };
    AbstractUPCEANReader2.getStandardUPCEANChecksum = function(s) {
      var length = s.length;
      var sum = 0;
      for (var i = length - 1; i >= 0; i -= 2) {
        var digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
        if (digit < 0 || digit > 9) {
          throw new FormatException_default();
        }
        sum += digit;
      }
      sum *= 3;
      for (var i = length - 2; i >= 0; i -= 2) {
        var digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
        if (digit < 0 || digit > 9) {
          throw new FormatException_default();
        }
        sum += digit;
      }
      return (1e3 - sum) % 10;
    };
    AbstractUPCEANReader2.decodeEnd = function(row, endStart) {
      return AbstractUPCEANReader2.findGuardPattern(row, endStart, false, AbstractUPCEANReader2.START_END_PATTERN, new Int32Array(AbstractUPCEANReader2.START_END_PATTERN.length).fill(0));
    };
    AbstractUPCEANReader2.findGuardPatternWithoutCounters = function(row, rowOffset, whiteFirst, pattern) {
      return this.findGuardPattern(row, rowOffset, whiteFirst, pattern, new Int32Array(pattern.length));
    };
    AbstractUPCEANReader2.findGuardPattern = function(row, rowOffset, whiteFirst, pattern, counters) {
      var width = row.getSize();
      rowOffset = whiteFirst ? row.getNextUnset(rowOffset) : row.getNextSet(rowOffset);
      var counterPosition = 0;
      var patternStart = rowOffset;
      var patternLength = pattern.length;
      var isWhite = whiteFirst;
      for (var x = rowOffset; x < width; x++) {
        if (row.get(x) !== isWhite) {
          counters[counterPosition]++;
        } else {
          if (counterPosition === patternLength - 1) {
            if (OneDReader_default.patternMatchVariance(counters, pattern, AbstractUPCEANReader2.MAX_INDIVIDUAL_VARIANCE) < AbstractUPCEANReader2.MAX_AVG_VARIANCE) {
              return Int32Array.from([patternStart, x]);
            }
            patternStart += counters[0] + counters[1];
            var slice = counters.slice(2, counters.length);
            for (var i = 0; i < counterPosition - 1; i++) {
              counters[i] = slice[i];
            }
            counters[counterPosition - 1] = 0;
            counters[counterPosition] = 0;
            counterPosition--;
          } else {
            counterPosition++;
          }
          counters[counterPosition] = 1;
          isWhite = !isWhite;
        }
      }
      throw new NotFoundException_default();
    };
    AbstractUPCEANReader2.decodeDigit = function(row, counters, rowOffset, patterns) {
      this.recordPattern(row, rowOffset, counters);
      var bestVariance = this.MAX_AVG_VARIANCE;
      var bestMatch = -1;
      var max = patterns.length;
      for (var i = 0; i < max; i++) {
        var pattern = patterns[i];
        var variance = OneDReader_default.patternMatchVariance(counters, pattern, AbstractUPCEANReader2.MAX_INDIVIDUAL_VARIANCE);
        if (variance < bestVariance) {
          bestVariance = variance;
          bestMatch = i;
        }
      }
      if (bestMatch >= 0) {
        return bestMatch;
      } else {
        throw new NotFoundException_default();
      }
    };
    AbstractUPCEANReader2.MAX_AVG_VARIANCE = 0.48;
    AbstractUPCEANReader2.MAX_INDIVIDUAL_VARIANCE = 0.7;
    AbstractUPCEANReader2.START_END_PATTERN = Int32Array.from([1, 1, 1]);
    AbstractUPCEANReader2.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]);
    AbstractUPCEANReader2.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]);
    AbstractUPCEANReader2.L_PATTERNS = [Int32Array.from([3, 2, 1, 1]), Int32Array.from([2, 2, 2, 1]), Int32Array.from([2, 1, 2, 2]), Int32Array.from([1, 4, 1, 1]), Int32Array.from([1, 1, 3, 2]), Int32Array.from([1, 2, 3, 1]), Int32Array.from([1, 1, 1, 4]), Int32Array.from([1, 3, 1, 2]), Int32Array.from([1, 2, 1, 3]), Int32Array.from([3, 1, 1, 2])];
    return AbstractUPCEANReader2;
  }(OneDReader_default)
);
var AbstractUPCEANReader_default = AbstractUPCEANReader;

// node_modules/@zxing/library/esm/core/oned/UPCEANExtension5Support.js
var __values7 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var UPCEANExtension5Support = (
  /** @class */
  function() {
    function UPCEANExtension5Support2() {
      this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];
      this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
      this.decodeRowStringBuffer = "";
    }
    UPCEANExtension5Support2.prototype.decodeRow = function(rowNumber, row, extensionStartRange) {
      var result = this.decodeRowStringBuffer;
      var end = this.decodeMiddle(row, extensionStartRange, result);
      var resultString = result.toString();
      var extensionData = UPCEANExtension5Support2.parseExtensionString(resultString);
      var resultPoints = [new ResultPoint_default((extensionStartRange[0] + extensionStartRange[1]) / 2, rowNumber), new ResultPoint_default(end, rowNumber)];
      var extensionResult = new Result_default(resultString, null, 0, resultPoints, BarcodeFormat_default.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
      if (extensionData != null) {
        extensionResult.putAllMetadata(extensionData);
      }
      return extensionResult;
    };
    UPCEANExtension5Support2.prototype.decodeMiddle = function(row, startRange, resultString) {
      var e_1, _a2;
      var counters = this.decodeMiddleCounters;
      counters[0] = 0;
      counters[1] = 0;
      counters[2] = 0;
      counters[3] = 0;
      var end = row.getSize();
      var rowOffset = startRange[1];
      var lgPatternFound = 0;
      for (var x = 0; x < 5 && rowOffset < end; x++) {
        var bestMatch = AbstractUPCEANReader_default.decodeDigit(row, counters, rowOffset, AbstractUPCEANReader_default.L_AND_G_PATTERNS);
        resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
        try {
          for (var counters_1 = (e_1 = void 0, __values7(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
            var counter = counters_1_1.value;
            rowOffset += counter;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (counters_1_1 && !counters_1_1.done && (_a2 = counters_1.return)) _a2.call(counters_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        if (bestMatch >= 10) {
          lgPatternFound |= 1 << 4 - x;
        }
        if (x !== 4) {
          rowOffset = row.getNextSet(rowOffset);
          rowOffset = row.getNextUnset(rowOffset);
        }
      }
      if (resultString.length !== 5) {
        throw new NotFoundException_default();
      }
      var checkDigit = this.determineCheckDigit(lgPatternFound);
      if (UPCEANExtension5Support2.extensionChecksum(resultString.toString()) !== checkDigit) {
        throw new NotFoundException_default();
      }
      return rowOffset;
    };
    UPCEANExtension5Support2.extensionChecksum = function(s) {
      var length = s.length;
      var sum = 0;
      for (var i = length - 2; i >= 0; i -= 2) {
        sum += s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
      }
      sum *= 3;
      for (var i = length - 1; i >= 0; i -= 2) {
        sum += s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
      }
      sum *= 3;
      return sum % 10;
    };
    UPCEANExtension5Support2.prototype.determineCheckDigit = function(lgPatternFound) {
      for (var d = 0; d < 10; d++) {
        if (lgPatternFound === this.CHECK_DIGIT_ENCODINGS[d]) {
          return d;
        }
      }
      throw new NotFoundException_default();
    };
    UPCEANExtension5Support2.parseExtensionString = function(raw) {
      if (raw.length !== 5) {
        return null;
      }
      var value = UPCEANExtension5Support2.parseExtension5String(raw);
      if (value == null) {
        return null;
      }
      return /* @__PURE__ */ new Map([[ResultMetadataType_default.SUGGESTED_PRICE, value]]);
    };
    UPCEANExtension5Support2.parseExtension5String = function(raw) {
      var currency;
      switch (raw.charAt(0)) {
        case "0":
          currency = "£";
          break;
        case "5":
          currency = "$";
          break;
        case "9":
          switch (raw) {
            case "90000":
              return null;
            case "99991":
              return "0.00";
            case "99990":
              return "Used";
          }
          currency = "";
          break;
        default:
          currency = "";
          break;
      }
      var rawAmount = parseInt(raw.substring(1));
      var unitsString = (rawAmount / 100).toString();
      var hundredths = rawAmount % 100;
      var hundredthsString = hundredths < 10 ? "0" + hundredths : hundredths.toString();
      return currency + unitsString + "." + hundredthsString;
    };
    return UPCEANExtension5Support2;
  }()
);
var UPCEANExtension5Support_default = UPCEANExtension5Support;

// node_modules/@zxing/library/esm/core/oned/UPCEANExtension2Support.js
var __values8 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var UPCEANExtension2Support = (
  /** @class */
  function() {
    function UPCEANExtension2Support2() {
      this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
      this.decodeRowStringBuffer = "";
    }
    UPCEANExtension2Support2.prototype.decodeRow = function(rowNumber, row, extensionStartRange) {
      var result = this.decodeRowStringBuffer;
      var end = this.decodeMiddle(row, extensionStartRange, result);
      var resultString = result.toString();
      var extensionData = UPCEANExtension2Support2.parseExtensionString(resultString);
      var resultPoints = [new ResultPoint_default((extensionStartRange[0] + extensionStartRange[1]) / 2, rowNumber), new ResultPoint_default(end, rowNumber)];
      var extensionResult = new Result_default(resultString, null, 0, resultPoints, BarcodeFormat_default.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
      if (extensionData != null) {
        extensionResult.putAllMetadata(extensionData);
      }
      return extensionResult;
    };
    UPCEANExtension2Support2.prototype.decodeMiddle = function(row, startRange, resultString) {
      var e_1, _a2;
      var counters = this.decodeMiddleCounters;
      counters[0] = 0;
      counters[1] = 0;
      counters[2] = 0;
      counters[3] = 0;
      var end = row.getSize();
      var rowOffset = startRange[1];
      var checkParity = 0;
      for (var x = 0; x < 2 && rowOffset < end; x++) {
        var bestMatch = AbstractUPCEANReader_default.decodeDigit(row, counters, rowOffset, AbstractUPCEANReader_default.L_AND_G_PATTERNS);
        resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
        try {
          for (var counters_1 = (e_1 = void 0, __values8(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
            var counter = counters_1_1.value;
            rowOffset += counter;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (counters_1_1 && !counters_1_1.done && (_a2 = counters_1.return)) _a2.call(counters_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        if (bestMatch >= 10) {
          checkParity |= 1 << 1 - x;
        }
        if (x !== 1) {
          rowOffset = row.getNextSet(rowOffset);
          rowOffset = row.getNextUnset(rowOffset);
        }
      }
      if (resultString.length !== 2) {
        throw new NotFoundException_default();
      }
      if (parseInt(resultString.toString()) % 4 !== checkParity) {
        throw new NotFoundException_default();
      }
      return rowOffset;
    };
    UPCEANExtension2Support2.parseExtensionString = function(raw) {
      if (raw.length !== 2) {
        return null;
      }
      return /* @__PURE__ */ new Map([[ResultMetadataType_default.ISSUE_NUMBER, parseInt(raw)]]);
    };
    return UPCEANExtension2Support2;
  }()
);
var UPCEANExtension2Support_default = UPCEANExtension2Support;

// node_modules/@zxing/library/esm/core/oned/UPCEANExtensionSupport.js
var UPCEANExtensionSupport = (
  /** @class */
  function() {
    function UPCEANExtensionSupport2() {
    }
    UPCEANExtensionSupport2.decodeRow = function(rowNumber, row, rowOffset) {
      var extensionStartRange = AbstractUPCEANReader_default.findGuardPattern(row, rowOffset, false, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
      try {
        var fiveSupport = new UPCEANExtension5Support_default();
        return fiveSupport.decodeRow(rowNumber, row, extensionStartRange);
      } catch (err) {
        var twoSupport = new UPCEANExtension2Support_default();
        return twoSupport.decodeRow(rowNumber, row, extensionStartRange);
      }
    };
    UPCEANExtensionSupport2.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
    return UPCEANExtensionSupport2;
  }()
);
var UPCEANExtensionSupport_default = UPCEANExtensionSupport;

// node_modules/@zxing/library/esm/core/oned/UPCEANReader.js
var __extends27 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var UPCEANReader = (
  /** @class */
  function(_super) {
    __extends27(UPCEANReader2, _super);
    function UPCEANReader2() {
      var _this = _super.call(this) || this;
      _this.decodeRowStringBuffer = "";
      UPCEANReader2.L_AND_G_PATTERNS = UPCEANReader2.L_PATTERNS.map(function(arr) {
        return Int32Array.from(arr);
      });
      for (var i = 10; i < 20; i++) {
        var widths = UPCEANReader2.L_PATTERNS[i - 10];
        var reversedWidths = new Int32Array(widths.length);
        for (var j = 0; j < widths.length; j++) {
          reversedWidths[j] = widths[widths.length - j - 1];
        }
        UPCEANReader2.L_AND_G_PATTERNS[i] = reversedWidths;
      }
      return _this;
    }
    UPCEANReader2.prototype.decodeRow = function(rowNumber, row, hints) {
      var startGuardRange = UPCEANReader2.findStartGuardPattern(row);
      var resultPointCallback = hints == null ? null : hints.get(DecodeHintType_default.NEED_RESULT_POINT_CALLBACK);
      if (resultPointCallback != null) {
        var resultPoint_1 = new ResultPoint_default((startGuardRange[0] + startGuardRange[1]) / 2, rowNumber);
        resultPointCallback.foundPossibleResultPoint(resultPoint_1);
      }
      var budello = this.decodeMiddle(row, startGuardRange, this.decodeRowStringBuffer);
      var endStart = budello.rowOffset;
      var result = budello.resultString;
      if (resultPointCallback != null) {
        var resultPoint_2 = new ResultPoint_default(endStart, rowNumber);
        resultPointCallback.foundPossibleResultPoint(resultPoint_2);
      }
      var endRange = UPCEANReader2.decodeEnd(row, endStart);
      if (resultPointCallback != null) {
        var resultPoint_3 = new ResultPoint_default((endRange[0] + endRange[1]) / 2, rowNumber);
        resultPointCallback.foundPossibleResultPoint(resultPoint_3);
      }
      var end = endRange[1];
      var quietEnd = end + (end - endRange[0]);
      if (quietEnd >= row.getSize() || !row.isRange(end, quietEnd, false)) {
        throw new NotFoundException_default();
      }
      var resultString = result.toString();
      if (resultString.length < 8) {
        throw new FormatException_default();
      }
      if (!UPCEANReader2.checkChecksum(resultString)) {
        throw new ChecksumException_default();
      }
      var left = (startGuardRange[1] + startGuardRange[0]) / 2;
      var right = (endRange[1] + endRange[0]) / 2;
      var format = this.getBarcodeFormat();
      var resultPoint = [new ResultPoint_default(left, rowNumber), new ResultPoint_default(right, rowNumber)];
      var decodeResult = new Result_default(resultString, null, 0, resultPoint, format, (/* @__PURE__ */ new Date()).getTime());
      var extensionLength = 0;
      try {
        var extensionResult = UPCEANExtensionSupport_default.decodeRow(rowNumber, row, endRange[1]);
        decodeResult.putMetadata(ResultMetadataType_default.UPC_EAN_EXTENSION, extensionResult.getText());
        decodeResult.putAllMetadata(extensionResult.getResultMetadata());
        decodeResult.addResultPoints(extensionResult.getResultPoints());
        extensionLength = extensionResult.getText().length;
      } catch (err) {
      }
      var allowedExtensions = hints == null ? null : hints.get(DecodeHintType_default.ALLOWED_EAN_EXTENSIONS);
      if (allowedExtensions != null) {
        var valid = false;
        for (var length_1 in allowedExtensions) {
          if (extensionLength.toString() === length_1) {
            valid = true;
            break;
          }
        }
        if (!valid) {
          throw new NotFoundException_default();
        }
      }
      if (format === BarcodeFormat_default.EAN_13 || format === BarcodeFormat_default.UPC_A) {
      }
      return decodeResult;
    };
    UPCEANReader2.checkChecksum = function(s) {
      return UPCEANReader2.checkStandardUPCEANChecksum(s);
    };
    UPCEANReader2.checkStandardUPCEANChecksum = function(s) {
      var length = s.length;
      if (length === 0) return false;
      var check = parseInt(s.charAt(length - 1), 10);
      return UPCEANReader2.getStandardUPCEANChecksum(s.substring(0, length - 1)) === check;
    };
    UPCEANReader2.getStandardUPCEANChecksum = function(s) {
      var length = s.length;
      var sum = 0;
      for (var i = length - 1; i >= 0; i -= 2) {
        var digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
        if (digit < 0 || digit > 9) {
          throw new FormatException_default();
        }
        sum += digit;
      }
      sum *= 3;
      for (var i = length - 2; i >= 0; i -= 2) {
        var digit = s.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
        if (digit < 0 || digit > 9) {
          throw new FormatException_default();
        }
        sum += digit;
      }
      return (1e3 - sum) % 10;
    };
    UPCEANReader2.decodeEnd = function(row, endStart) {
      return UPCEANReader2.findGuardPattern(row, endStart, false, UPCEANReader2.START_END_PATTERN, new Int32Array(UPCEANReader2.START_END_PATTERN.length).fill(0));
    };
    return UPCEANReader2;
  }(AbstractUPCEANReader_default)
);
var UPCEANReader_default = UPCEANReader;

// node_modules/@zxing/library/esm/core/oned/EAN13Reader.js
var __extends28 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values9 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var EAN13Reader = (
  /** @class */
  function(_super) {
    __extends28(EAN13Reader2, _super);
    function EAN13Reader2() {
      var _this = _super.call(this) || this;
      _this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
      return _this;
    }
    EAN13Reader2.prototype.decodeMiddle = function(row, startRange, resultString) {
      var e_1, _a2, e_2, _b;
      var counters = this.decodeMiddleCounters;
      counters[0] = 0;
      counters[1] = 0;
      counters[2] = 0;
      counters[3] = 0;
      var end = row.getSize();
      var rowOffset = startRange[1];
      var lgPatternFound = 0;
      for (var x = 0; x < 6 && rowOffset < end; x++) {
        var bestMatch = UPCEANReader_default.decodeDigit(row, counters, rowOffset, UPCEANReader_default.L_AND_G_PATTERNS);
        resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
        try {
          for (var counters_1 = (e_1 = void 0, __values9(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
            var counter = counters_1_1.value;
            rowOffset += counter;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (counters_1_1 && !counters_1_1.done && (_a2 = counters_1.return)) _a2.call(counters_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        if (bestMatch >= 10) {
          lgPatternFound |= 1 << 5 - x;
        }
      }
      resultString = EAN13Reader2.determineFirstDigit(resultString, lgPatternFound);
      var middleRange = UPCEANReader_default.findGuardPattern(row, rowOffset, true, UPCEANReader_default.MIDDLE_PATTERN, new Int32Array(UPCEANReader_default.MIDDLE_PATTERN.length).fill(0));
      rowOffset = middleRange[1];
      for (var x = 0; x < 6 && rowOffset < end; x++) {
        var bestMatch = UPCEANReader_default.decodeDigit(row, counters, rowOffset, UPCEANReader_default.L_PATTERNS);
        resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch);
        try {
          for (var counters_2 = (e_2 = void 0, __values9(counters)), counters_2_1 = counters_2.next(); !counters_2_1.done; counters_2_1 = counters_2.next()) {
            var counter = counters_2_1.value;
            rowOffset += counter;
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (counters_2_1 && !counters_2_1.done && (_b = counters_2.return)) _b.call(counters_2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
      return {
        rowOffset,
        resultString
      };
    };
    EAN13Reader2.prototype.getBarcodeFormat = function() {
      return BarcodeFormat_default.EAN_13;
    };
    EAN13Reader2.determineFirstDigit = function(resultString, lgPatternFound) {
      for (var d = 0; d < 10; d++) {
        if (lgPatternFound === this.FIRST_DIGIT_ENCODINGS[d]) {
          resultString = String.fromCharCode("0".charCodeAt(0) + d) + resultString;
          return resultString;
        }
      }
      throw new NotFoundException_default();
    };
    EAN13Reader2.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26];
    return EAN13Reader2;
  }(UPCEANReader_default)
);
var EAN13Reader_default = EAN13Reader;

// node_modules/@zxing/library/esm/core/oned/EAN8Reader.js
var __extends29 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values10 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var EAN8Reader = (
  /** @class */
  function(_super) {
    __extends29(EAN8Reader2, _super);
    function EAN8Reader2() {
      var _this = _super.call(this) || this;
      _this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
      return _this;
    }
    EAN8Reader2.prototype.decodeMiddle = function(row, startRange, resultString) {
      var e_1, _a2, e_2, _b;
      var counters = this.decodeMiddleCounters;
      counters[0] = 0;
      counters[1] = 0;
      counters[2] = 0;
      counters[3] = 0;
      var end = row.getSize();
      var rowOffset = startRange[1];
      for (var x = 0; x < 4 && rowOffset < end; x++) {
        var bestMatch = UPCEANReader_default.decodeDigit(row, counters, rowOffset, UPCEANReader_default.L_PATTERNS);
        resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch);
        try {
          for (var counters_1 = (e_1 = void 0, __values10(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
            var counter = counters_1_1.value;
            rowOffset += counter;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (counters_1_1 && !counters_1_1.done && (_a2 = counters_1.return)) _a2.call(counters_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      var middleRange = UPCEANReader_default.findGuardPattern(row, rowOffset, true, UPCEANReader_default.MIDDLE_PATTERN, new Int32Array(UPCEANReader_default.MIDDLE_PATTERN.length).fill(0));
      rowOffset = middleRange[1];
      for (var x = 0; x < 4 && rowOffset < end; x++) {
        var bestMatch = UPCEANReader_default.decodeDigit(row, counters, rowOffset, UPCEANReader_default.L_PATTERNS);
        resultString += String.fromCharCode("0".charCodeAt(0) + bestMatch);
        try {
          for (var counters_2 = (e_2 = void 0, __values10(counters)), counters_2_1 = counters_2.next(); !counters_2_1.done; counters_2_1 = counters_2.next()) {
            var counter = counters_2_1.value;
            rowOffset += counter;
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (counters_2_1 && !counters_2_1.done && (_b = counters_2.return)) _b.call(counters_2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
      return {
        rowOffset,
        resultString
      };
    };
    EAN8Reader2.prototype.getBarcodeFormat = function() {
      return BarcodeFormat_default.EAN_8;
    };
    return EAN8Reader2;
  }(UPCEANReader_default)
);
var EAN8Reader_default = EAN8Reader;

// node_modules/@zxing/library/esm/core/oned/UPCAReader.js
var __extends30 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var UPCAReader = (
  /** @class */
  function(_super) {
    __extends30(UPCAReader2, _super);
    function UPCAReader2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.ean13Reader = new EAN13Reader_default();
      return _this;
    }
    UPCAReader2.prototype.getBarcodeFormat = function() {
      return BarcodeFormat_default.UPC_A;
    };
    UPCAReader2.prototype.decode = function(image, hints) {
      return this.maybeReturnResult(this.ean13Reader.decode(image));
    };
    UPCAReader2.prototype.decodeRow = function(rowNumber, row, hints) {
      return this.maybeReturnResult(this.ean13Reader.decodeRow(rowNumber, row, hints));
    };
    UPCAReader2.prototype.decodeMiddle = function(row, startRange, resultString) {
      return this.ean13Reader.decodeMiddle(row, startRange, resultString);
    };
    UPCAReader2.prototype.maybeReturnResult = function(result) {
      var text = result.getText();
      if (text.charAt(0) === "0") {
        var upcaResult = new Result_default(text.substring(1), null, null, result.getResultPoints(), BarcodeFormat_default.UPC_A);
        if (result.getResultMetadata() != null) {
          upcaResult.putAllMetadata(result.getResultMetadata());
        }
        return upcaResult;
      } else {
        throw new NotFoundException_default();
      }
    };
    UPCAReader2.prototype.reset = function() {
      this.ean13Reader.reset();
    };
    return UPCAReader2;
  }(UPCEANReader_default)
);
var UPCAReader_default = UPCAReader;

// node_modules/@zxing/library/esm/core/oned/UPCEReader.js
var __extends31 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values11 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var UPCEReader = (
  /** @class */
  function(_super) {
    __extends31(UPCEReader2, _super);
    function UPCEReader2() {
      var _this = _super.call(this) || this;
      _this.decodeMiddleCounters = new Int32Array(4);
      return _this;
    }
    UPCEReader2.prototype.decodeMiddle = function(row, startRange, result) {
      var e_1, _a2;
      var counters = this.decodeMiddleCounters.map(function(x2) {
        return x2;
      });
      counters[0] = 0;
      counters[1] = 0;
      counters[2] = 0;
      counters[3] = 0;
      var end = row.getSize();
      var rowOffset = startRange[1];
      var lgPatternFound = 0;
      for (var x = 0; x < 6 && rowOffset < end; x++) {
        var bestMatch = UPCEReader2.decodeDigit(row, counters, rowOffset, UPCEReader2.L_AND_G_PATTERNS);
        result += String.fromCharCode("0".charCodeAt(0) + bestMatch % 10);
        try {
          for (var counters_1 = (e_1 = void 0, __values11(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
            var counter = counters_1_1.value;
            rowOffset += counter;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (counters_1_1 && !counters_1_1.done && (_a2 = counters_1.return)) _a2.call(counters_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        if (bestMatch >= 10) {
          lgPatternFound |= 1 << 5 - x;
        }
      }
      UPCEReader2.determineNumSysAndCheckDigit(new StringBuilder_default(result), lgPatternFound);
      return rowOffset;
    };
    UPCEReader2.prototype.decodeEnd = function(row, endStart) {
      return UPCEReader2.findGuardPatternWithoutCounters(row, endStart, true, UPCEReader2.MIDDLE_END_PATTERN);
    };
    UPCEReader2.prototype.checkChecksum = function(s) {
      return UPCEANReader_default.checkChecksum(UPCEReader2.convertUPCEtoUPCA(s));
    };
    UPCEReader2.determineNumSysAndCheckDigit = function(resultString, lgPatternFound) {
      for (var numSys = 0; numSys <= 1; numSys++) {
        for (var d = 0; d < 10; d++) {
          if (lgPatternFound === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[numSys][d]) {
            resultString.insert(
              0,
              /*(char)*/
              "0" + numSys
            );
            resultString.append(
              /*(char)*/
              "0" + d
            );
            return;
          }
        }
      }
      throw NotFoundException_default.getNotFoundInstance();
    };
    UPCEReader2.prototype.getBarcodeFormat = function() {
      return BarcodeFormat_default.UPC_E;
    };
    UPCEReader2.convertUPCEtoUPCA = function(upce) {
      var upceChars = upce.slice(1, 7).split("").map(function(x) {
        return x.charCodeAt(0);
      });
      var result = new StringBuilder_default(
        /*12*/
      );
      result.append(upce.charAt(0));
      var lastChar = upceChars[5];
      switch (lastChar) {
        case 0:
        case 1:
        case 2:
          result.appendChars(upceChars, 0, 2);
          result.append(lastChar);
          result.append("0000");
          result.appendChars(upceChars, 2, 3);
          break;
        case 3:
          result.appendChars(upceChars, 0, 3);
          result.append("00000");
          result.appendChars(upceChars, 3, 2);
          break;
        case 4:
          result.appendChars(upceChars, 0, 4);
          result.append("00000");
          result.append(upceChars[4]);
          break;
        default:
          result.appendChars(upceChars, 0, 5);
          result.append("0000");
          result.append(lastChar);
          break;
      }
      if (upce.length >= 8) {
        result.append(upce.charAt(7));
      }
      return result.toString();
    };
    UPCEReader2.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]);
    UPCEReader2.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]), Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1])];
    return UPCEReader2;
  }(UPCEANReader_default)
);
var UPCEReader_default = UPCEReader;

// node_modules/@zxing/library/esm/core/oned/MultiFormatUPCEANReader.js
var __extends32 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values12 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var MultiFormatUPCEANReader = (
  /** @class */
  function(_super) {
    __extends32(MultiFormatUPCEANReader2, _super);
    function MultiFormatUPCEANReader2(hints) {
      var _this = _super.call(this) || this;
      var possibleFormats = hints == null ? null : hints.get(DecodeHintType_default.POSSIBLE_FORMATS);
      var readers = [];
      if (possibleFormats != null) {
        if (possibleFormats.indexOf(BarcodeFormat_default.EAN_13) > -1) {
          readers.push(new EAN13Reader_default());
        }
        if (possibleFormats.indexOf(BarcodeFormat_default.UPC_A) > -1) {
          readers.push(new UPCAReader_default());
        }
        if (possibleFormats.indexOf(BarcodeFormat_default.EAN_8) > -1) {
          readers.push(new EAN8Reader_default());
        }
        if (possibleFormats.indexOf(BarcodeFormat_default.UPC_E) > -1) {
          readers.push(new UPCEReader_default());
        }
      }
      if (readers.length === 0) {
        readers.push(new EAN13Reader_default());
        readers.push(new UPCAReader_default());
        readers.push(new EAN8Reader_default());
        readers.push(new UPCEReader_default());
      }
      _this.readers = readers;
      return _this;
    }
    MultiFormatUPCEANReader2.prototype.decodeRow = function(rowNumber, row, hints) {
      var e_1, _a2;
      try {
        for (var _b = __values12(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
          var reader = _c.value;
          try {
            var result = reader.decodeRow(rowNumber, row, hints);
            var ean13MayBeUPCA = result.getBarcodeFormat() === BarcodeFormat_default.EAN_13 && result.getText().charAt(0) === "0";
            var possibleFormats = hints == null ? null : hints.get(DecodeHintType_default.POSSIBLE_FORMATS);
            var canReturnUPCA = possibleFormats == null || possibleFormats.includes(BarcodeFormat_default.UPC_A);
            if (ean13MayBeUPCA && canReturnUPCA) {
              var rawBytes = result.getRawBytes();
              var resultUPCA = new Result_default(result.getText().substring(1), rawBytes, rawBytes ? rawBytes.length : null, result.getResultPoints(), BarcodeFormat_default.UPC_A);
              resultUPCA.putAllMetadata(result.getResultMetadata());
              return resultUPCA;
            }
            return result;
          } catch (err) {
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      throw new NotFoundException_default();
    };
    MultiFormatUPCEANReader2.prototype.reset = function() {
      var e_2, _a2;
      try {
        for (var _b = __values12(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
          var reader = _c.value;
          reader.reset();
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    };
    return MultiFormatUPCEANReader2;
  }(OneDReader_default)
);
var MultiFormatUPCEANReader_default = MultiFormatUPCEANReader;

// node_modules/@zxing/library/esm/core/oned/CodaBarReader.js
var __extends33 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var CodaBarReader = (
  /** @class */
  function(_super) {
    __extends33(CodaBarReader2, _super);
    function CodaBarReader2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.CODA_BAR_CHAR_SET = {
        nnnnnww: "0",
        nnnnwwn: "1",
        nnnwnnw: "2",
        wwnnnnn: "3",
        nnwnnwn: "4",
        wnnnnwn: "5",
        nwnnnnw: "6",
        nwnnwnn: "7",
        nwwnnnn: "8",
        wnnwnnn: "9",
        nnnwwnn: "-",
        nnwwnnn: "$",
        wnnnwnw: ":",
        wnwnnnw: "/",
        wnwnwnn: ".",
        nnwwwww: "+",
        nnwwnwn: "A",
        nwnwnnw: "B",
        nnnwnww: "C",
        nnnwwwn: "D"
      };
      return _this;
    }
    CodaBarReader2.prototype.decodeRow = function(rowNumber, row, hints) {
      var validRowData = this.getValidRowData(row);
      if (!validRowData) throw new NotFoundException_default();
      var retStr = this.codaBarDecodeRow(validRowData.row);
      if (!retStr) throw new NotFoundException_default();
      return new Result_default(retStr, null, 0, [new ResultPoint_default(validRowData.left, rowNumber), new ResultPoint_default(validRowData.right, rowNumber)], BarcodeFormat_default.CODABAR, (/* @__PURE__ */ new Date()).getTime());
    };
    CodaBarReader2.prototype.getValidRowData = function(row) {
      var booleanArr = row.toArray();
      var startIndex = booleanArr.indexOf(true);
      if (startIndex === -1) return null;
      var lastIndex = booleanArr.lastIndexOf(true);
      if (lastIndex <= startIndex) return null;
      booleanArr = booleanArr.slice(startIndex, lastIndex + 1);
      var result = [];
      var lastBit = booleanArr[0];
      var bitLength = 1;
      for (var i = 1; i < booleanArr.length; i++) {
        if (booleanArr[i] === lastBit) {
          bitLength++;
        } else {
          lastBit = booleanArr[i];
          result.push(bitLength);
          bitLength = 1;
        }
      }
      result.push(bitLength);
      if (result.length < 23 && (result.length + 1) % 8 !== 0) return null;
      return {
        row: result,
        left: startIndex,
        right: lastIndex
      };
    };
    CodaBarReader2.prototype.codaBarDecodeRow = function(row) {
      var code = [];
      var barThreshold = Math.ceil(row.reduce(function(pre, item) {
        return (pre + item) / 2;
      }, 0));
      while (row.length > 0) {
        var seg = row.splice(0, 8).splice(0, 7);
        var key = seg.map(function(len) {
          return len < barThreshold ? "n" : "w";
        }).join("");
        if (this.CODA_BAR_CHAR_SET[key] === void 0) return null;
        code.push(this.CODA_BAR_CHAR_SET[key]);
      }
      var strCode = code.join("");
      if (this.validCodaBarString(strCode)) return strCode;
      return null;
    };
    CodaBarReader2.prototype.validCodaBarString = function(src) {
      var reg = /^[A-D].{1,}[A-D]$/;
      return reg.test(src);
    };
    return CodaBarReader2;
  }(OneDReader_default)
);
var CodaBarReader_default = CodaBarReader;

// node_modules/@zxing/library/esm/core/oned/rss/AbstractRSSReader.js
var __extends34 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values13 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var AbstractRSSReader = (
  /** @class */
  function(_super) {
    __extends34(AbstractRSSReader2, _super);
    function AbstractRSSReader2() {
      var _this = _super.call(this) || this;
      _this.decodeFinderCounters = new Int32Array(4);
      _this.dataCharacterCounters = new Int32Array(8);
      _this.oddRoundingErrors = new Array(4);
      _this.evenRoundingErrors = new Array(4);
      _this.oddCounts = new Array(_this.dataCharacterCounters.length / 2);
      _this.evenCounts = new Array(_this.dataCharacterCounters.length / 2);
      return _this;
    }
    AbstractRSSReader2.prototype.getDecodeFinderCounters = function() {
      return this.decodeFinderCounters;
    };
    AbstractRSSReader2.prototype.getDataCharacterCounters = function() {
      return this.dataCharacterCounters;
    };
    AbstractRSSReader2.prototype.getOddRoundingErrors = function() {
      return this.oddRoundingErrors;
    };
    AbstractRSSReader2.prototype.getEvenRoundingErrors = function() {
      return this.evenRoundingErrors;
    };
    AbstractRSSReader2.prototype.getOddCounts = function() {
      return this.oddCounts;
    };
    AbstractRSSReader2.prototype.getEvenCounts = function() {
      return this.evenCounts;
    };
    AbstractRSSReader2.prototype.parseFinderValue = function(counters, finderPatterns) {
      for (var value = 0; value < finderPatterns.length; value++) {
        if (OneDReader_default.patternMatchVariance(counters, finderPatterns[value], AbstractRSSReader2.MAX_INDIVIDUAL_VARIANCE) < AbstractRSSReader2.MAX_AVG_VARIANCE) {
          return value;
        }
      }
      throw new NotFoundException_default();
    };
    AbstractRSSReader2.count = function(array) {
      return MathUtils_default.sum(new Int32Array(array));
    };
    AbstractRSSReader2.increment = function(array, errors) {
      var index = 0;
      var biggestError = errors[0];
      for (var i = 1; i < array.length; i++) {
        if (errors[i] > biggestError) {
          biggestError = errors[i];
          index = i;
        }
      }
      array[index]++;
    };
    AbstractRSSReader2.decrement = function(array, errors) {
      var index = 0;
      var biggestError = errors[0];
      for (var i = 1; i < array.length; i++) {
        if (errors[i] < biggestError) {
          biggestError = errors[i];
          index = i;
        }
      }
      array[index]--;
    };
    AbstractRSSReader2.isFinderPattern = function(counters) {
      var e_1, _a2;
      var firstTwoSum = counters[0] + counters[1];
      var sum = firstTwoSum + counters[2] + counters[3];
      var ratio = firstTwoSum / sum;
      if (ratio >= AbstractRSSReader2.MIN_FINDER_PATTERN_RATIO && ratio <= AbstractRSSReader2.MAX_FINDER_PATTERN_RATIO) {
        var minCounter = Number.MAX_SAFE_INTEGER;
        var maxCounter = Number.MIN_SAFE_INTEGER;
        try {
          for (var counters_1 = __values13(counters), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
            var counter = counters_1_1.value;
            if (counter > maxCounter) {
              maxCounter = counter;
            }
            if (counter < minCounter) {
              minCounter = counter;
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (counters_1_1 && !counters_1_1.done && (_a2 = counters_1.return)) _a2.call(counters_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return maxCounter < 10 * minCounter;
      }
      return false;
    };
    AbstractRSSReader2.MAX_AVG_VARIANCE = 0.2;
    AbstractRSSReader2.MAX_INDIVIDUAL_VARIANCE = 0.45;
    AbstractRSSReader2.MIN_FINDER_PATTERN_RATIO = 9.5 / 12;
    AbstractRSSReader2.MAX_FINDER_PATTERN_RATIO = 12.5 / 14;
    return AbstractRSSReader2;
  }(OneDReader_default)
);
var AbstractRSSReader_default = AbstractRSSReader;

// node_modules/@zxing/library/esm/core/oned/rss/DataCharacter.js
var DataCharacter = (
  /** @class */
  function() {
    function DataCharacter2(value, checksumPortion) {
      this.value = value;
      this.checksumPortion = checksumPortion;
    }
    DataCharacter2.prototype.getValue = function() {
      return this.value;
    };
    DataCharacter2.prototype.getChecksumPortion = function() {
      return this.checksumPortion;
    };
    DataCharacter2.prototype.toString = function() {
      return this.value + "(" + this.checksumPortion + ")";
    };
    DataCharacter2.prototype.equals = function(o) {
      if (!(o instanceof DataCharacter2)) {
        return false;
      }
      var that = o;
      return this.value === that.value && this.checksumPortion === that.checksumPortion;
    };
    DataCharacter2.prototype.hashCode = function() {
      return this.value ^ this.checksumPortion;
    };
    return DataCharacter2;
  }()
);
var DataCharacter_default = DataCharacter;

// node_modules/@zxing/library/esm/core/oned/rss/FinderPattern.js
var FinderPattern = (
  /** @class */
  function() {
    function FinderPattern3(value, startEnd, start, end, rowNumber) {
      this.value = value;
      this.startEnd = startEnd;
      this.value = value;
      this.startEnd = startEnd;
      this.resultPoints = new Array();
      this.resultPoints.push(new ResultPoint_default(start, rowNumber));
      this.resultPoints.push(new ResultPoint_default(end, rowNumber));
    }
    FinderPattern3.prototype.getValue = function() {
      return this.value;
    };
    FinderPattern3.prototype.getStartEnd = function() {
      return this.startEnd;
    };
    FinderPattern3.prototype.getResultPoints = function() {
      return this.resultPoints;
    };
    FinderPattern3.prototype.equals = function(o) {
      if (!(o instanceof FinderPattern3)) {
        return false;
      }
      var that = o;
      return this.value === that.value;
    };
    FinderPattern3.prototype.hashCode = function() {
      return this.value;
    };
    return FinderPattern3;
  }()
);
var FinderPattern_default = FinderPattern;

// node_modules/@zxing/library/esm/core/oned/rss/RSSUtils.js
var __values14 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var RSSUtils = (
  /** @class */
  function() {
    function RSSUtils2() {
    }
    RSSUtils2.getRSSvalue = function(widths, maxWidth, noNarrow) {
      var e_1, _a2;
      var n = 0;
      try {
        for (var widths_1 = __values14(widths), widths_1_1 = widths_1.next(); !widths_1_1.done; widths_1_1 = widths_1.next()) {
          var width = widths_1_1.value;
          n += width;
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (widths_1_1 && !widths_1_1.done && (_a2 = widths_1.return)) _a2.call(widths_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      var val = 0;
      var narrowMask = 0;
      var elements = widths.length;
      for (var bar = 0; bar < elements - 1; bar++) {
        var elmWidth = void 0;
        for (elmWidth = 1, narrowMask |= 1 << bar; elmWidth < widths[bar]; elmWidth++, narrowMask &= ~(1 << bar)) {
          var subVal = RSSUtils2.combins(n - elmWidth - 1, elements - bar - 2);
          if (noNarrow && narrowMask === 0 && n - elmWidth - (elements - bar - 1) >= elements - bar - 1) {
            subVal -= RSSUtils2.combins(n - elmWidth - (elements - bar), elements - bar - 2);
          }
          if (elements - bar - 1 > 1) {
            var lessVal = 0;
            for (var mxwElement = n - elmWidth - (elements - bar - 2); mxwElement > maxWidth; mxwElement--) {
              lessVal += RSSUtils2.combins(n - elmWidth - mxwElement - 1, elements - bar - 3);
            }
            subVal -= lessVal * (elements - 1 - bar);
          } else if (n - elmWidth > maxWidth) {
            subVal--;
          }
          val += subVal;
        }
        n -= elmWidth;
      }
      return val;
    };
    RSSUtils2.combins = function(n, r) {
      var maxDenom;
      var minDenom;
      if (n - r > r) {
        minDenom = r;
        maxDenom = n - r;
      } else {
        minDenom = n - r;
        maxDenom = r;
      }
      var val = 1;
      var j = 1;
      for (var i = n; i > maxDenom; i--) {
        val *= i;
        if (j <= minDenom) {
          val /= j;
          j++;
        }
      }
      while (j <= minDenom) {
        val /= j;
        j++;
      }
      return val;
    };
    return RSSUtils2;
  }()
);
var RSSUtils_default = RSSUtils;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/BitArrayBuilder.js
var BitArrayBuilder = (
  /** @class */
  function() {
    function BitArrayBuilder2() {
    }
    BitArrayBuilder2.buildBitArray = function(pairs) {
      var charNumber = pairs.length * 2 - 1;
      if (pairs[pairs.length - 1].getRightChar() == null) {
        charNumber -= 1;
      }
      var size = 12 * charNumber;
      var binary = new BitArray_default(size);
      var accPos = 0;
      var firstPair = pairs[0];
      var firstValue = firstPair.getRightChar().getValue();
      for (var i = 11; i >= 0; --i) {
        if ((firstValue & 1 << i) !== 0) {
          binary.set(accPos);
        }
        accPos++;
      }
      for (var i = 1; i < pairs.length; ++i) {
        var currentPair = pairs[i];
        var leftValue = currentPair.getLeftChar().getValue();
        for (var j = 11; j >= 0; --j) {
          if ((leftValue & 1 << j) !== 0) {
            binary.set(accPos);
          }
          accPos++;
        }
        if (currentPair.getRightChar() !== null) {
          var rightValue = currentPair.getRightChar().getValue();
          for (var j = 11; j >= 0; --j) {
            if ((rightValue & 1 << j) !== 0) {
              binary.set(accPos);
            }
            accPos++;
          }
        }
      }
      return binary;
    };
    return BitArrayBuilder2;
  }()
);
var BitArrayBuilder_default = BitArrayBuilder;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/BlockParsedResult.js
var BlockParsedResult = (
  /** @class */
  function() {
    function BlockParsedResult2(finished, decodedInformation) {
      if (decodedInformation) {
        this.decodedInformation = null;
      } else {
        this.finished = finished;
        this.decodedInformation = decodedInformation;
      }
    }
    BlockParsedResult2.prototype.getDecodedInformation = function() {
      return this.decodedInformation;
    };
    BlockParsedResult2.prototype.isFinished = function() {
      return this.finished;
    };
    return BlockParsedResult2;
  }()
);
var BlockParsedResult_default = BlockParsedResult;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/DecodedObject.js
var DecodedObject = (
  /** @class */
  function() {
    function DecodedObject2(newPosition) {
      this.newPosition = newPosition;
    }
    DecodedObject2.prototype.getNewPosition = function() {
      return this.newPosition;
    };
    return DecodedObject2;
  }()
);
var DecodedObject_default = DecodedObject;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/DecodedChar.js
var __extends35 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var DecodedChar = (
  /** @class */
  function(_super) {
    __extends35(DecodedChar2, _super);
    function DecodedChar2(newPosition, value) {
      var _this = _super.call(this, newPosition) || this;
      _this.value = value;
      return _this;
    }
    DecodedChar2.prototype.getValue = function() {
      return this.value;
    };
    DecodedChar2.prototype.isFNC1 = function() {
      return this.value === DecodedChar2.FNC1;
    };
    DecodedChar2.FNC1 = "$";
    return DecodedChar2;
  }(DecodedObject_default)
);
var DecodedChar_default = DecodedChar;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/DecodedInformation.js
var __extends36 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var DecodedInformation = (
  /** @class */
  function(_super) {
    __extends36(DecodedInformation2, _super);
    function DecodedInformation2(newPosition, newString, remainingValue) {
      var _this = _super.call(this, newPosition) || this;
      if (remainingValue) {
        _this.remaining = true;
        _this.remainingValue = _this.remainingValue;
      } else {
        _this.remaining = false;
        _this.remainingValue = 0;
      }
      _this.newString = newString;
      return _this;
    }
    DecodedInformation2.prototype.getNewString = function() {
      return this.newString;
    };
    DecodedInformation2.prototype.isRemaining = function() {
      return this.remaining;
    };
    DecodedInformation2.prototype.getRemainingValue = function() {
      return this.remainingValue;
    };
    return DecodedInformation2;
  }(DecodedObject_default)
);
var DecodedInformation_default = DecodedInformation;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/DecodedNumeric.js
var __extends37 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var DecodedNumeric = (
  /** @class */
  function(_super) {
    __extends37(DecodedNumeric2, _super);
    function DecodedNumeric2(newPosition, firstDigit, secondDigit) {
      var _this = _super.call(this, newPosition) || this;
      if (firstDigit < 0 || firstDigit > 10 || secondDigit < 0 || secondDigit > 10) {
        throw new FormatException_default();
      }
      _this.firstDigit = firstDigit;
      _this.secondDigit = secondDigit;
      return _this;
    }
    DecodedNumeric2.prototype.getFirstDigit = function() {
      return this.firstDigit;
    };
    DecodedNumeric2.prototype.getSecondDigit = function() {
      return this.secondDigit;
    };
    DecodedNumeric2.prototype.getValue = function() {
      return this.firstDigit * 10 + this.secondDigit;
    };
    DecodedNumeric2.prototype.isFirstDigitFNC1 = function() {
      return this.firstDigit === DecodedNumeric2.FNC1;
    };
    DecodedNumeric2.prototype.isSecondDigitFNC1 = function() {
      return this.secondDigit === DecodedNumeric2.FNC1;
    };
    DecodedNumeric2.prototype.isAnyFNC1 = function() {
      return this.firstDigit === DecodedNumeric2.FNC1 || this.secondDigit === DecodedNumeric2.FNC1;
    };
    DecodedNumeric2.FNC1 = 10;
    return DecodedNumeric2;
  }(DecodedObject_default)
);
var DecodedNumeric_default = DecodedNumeric;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/FieldParser.js
var __values15 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var FieldParser = (
  /** @class */
  function() {
    function FieldParser2() {
    }
    FieldParser2.parseFieldsInGeneralPurpose = function(rawInformation) {
      var e_1, _a2, e_2, _b, e_3, _c, e_4, _d;
      if (!rawInformation) {
        return null;
      }
      if (rawInformation.length < 2) {
        throw new NotFoundException_default();
      }
      var firstTwoDigits = rawInformation.substring(0, 2);
      try {
        for (var _e = __values15(FieldParser2.TWO_DIGIT_DATA_LENGTH), _f = _e.next(); !_f.done; _f = _e.next()) {
          var dataLength = _f.value;
          if (dataLength[0] === firstTwoDigits) {
            if (dataLength[1] === FieldParser2.VARIABLE_LENGTH) {
              return FieldParser2.processVariableAI(2, dataLength[2], rawInformation);
            }
            return FieldParser2.processFixedAI(2, dataLength[1], rawInformation);
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_a2 = _e.return)) _a2.call(_e);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      if (rawInformation.length < 3) {
        throw new NotFoundException_default();
      }
      var firstThreeDigits = rawInformation.substring(0, 3);
      try {
        for (var _g = __values15(FieldParser2.THREE_DIGIT_DATA_LENGTH), _h = _g.next(); !_h.done; _h = _g.next()) {
          var dataLength = _h.value;
          if (dataLength[0] === firstThreeDigits) {
            if (dataLength[1] === FieldParser2.VARIABLE_LENGTH) {
              return FieldParser2.processVariableAI(3, dataLength[2], rawInformation);
            }
            return FieldParser2.processFixedAI(3, dataLength[1], rawInformation);
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      try {
        for (var _j = __values15(FieldParser2.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), _k = _j.next(); !_k.done; _k = _j.next()) {
          var dataLength = _k.value;
          if (dataLength[0] === firstThreeDigits) {
            if (dataLength[1] === FieldParser2.VARIABLE_LENGTH) {
              return FieldParser2.processVariableAI(4, dataLength[2], rawInformation);
            }
            return FieldParser2.processFixedAI(4, dataLength[1], rawInformation);
          }
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      if (rawInformation.length < 4) {
        throw new NotFoundException_default();
      }
      var firstFourDigits = rawInformation.substring(0, 4);
      try {
        for (var _l = __values15(FieldParser2.FOUR_DIGIT_DATA_LENGTH), _m = _l.next(); !_m.done; _m = _l.next()) {
          var dataLength = _m.value;
          if (dataLength[0] === firstFourDigits) {
            if (dataLength[1] === FieldParser2.VARIABLE_LENGTH) {
              return FieldParser2.processVariableAI(4, dataLength[2], rawInformation);
            }
            return FieldParser2.processFixedAI(4, dataLength[1], rawInformation);
          }
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
      throw new NotFoundException_default();
    };
    FieldParser2.processFixedAI = function(aiSize, fieldSize, rawInformation) {
      if (rawInformation.length < aiSize) {
        throw new NotFoundException_default();
      }
      var ai = rawInformation.substring(0, aiSize);
      if (rawInformation.length < aiSize + fieldSize) {
        throw new NotFoundException_default();
      }
      var field = rawInformation.substring(aiSize, aiSize + fieldSize);
      var remaining = rawInformation.substring(aiSize + fieldSize);
      var result = "(" + ai + ")" + field;
      var parsedAI = FieldParser2.parseFieldsInGeneralPurpose(remaining);
      return parsedAI == null ? result : result + parsedAI;
    };
    FieldParser2.processVariableAI = function(aiSize, variableFieldSize, rawInformation) {
      var ai = rawInformation.substring(0, aiSize);
      var maxSize;
      if (rawInformation.length < aiSize + variableFieldSize) {
        maxSize = rawInformation.length;
      } else {
        maxSize = aiSize + variableFieldSize;
      }
      var field = rawInformation.substring(aiSize, maxSize);
      var remaining = rawInformation.substring(maxSize);
      var result = "(" + ai + ")" + field;
      var parsedAI = FieldParser2.parseFieldsInGeneralPurpose(remaining);
      return parsedAI == null ? result : result + parsedAI;
    };
    FieldParser2.VARIABLE_LENGTH = [];
    FieldParser2.TWO_DIGIT_DATA_LENGTH = [
      ["00", 18],
      ["01", 14],
      ["02", 14],
      ["10", FieldParser2.VARIABLE_LENGTH, 20],
      ["11", 6],
      ["12", 6],
      ["13", 6],
      ["15", 6],
      ["17", 6],
      ["20", 2],
      ["21", FieldParser2.VARIABLE_LENGTH, 20],
      ["22", FieldParser2.VARIABLE_LENGTH, 29],
      ["30", FieldParser2.VARIABLE_LENGTH, 8],
      ["37", FieldParser2.VARIABLE_LENGTH, 8],
      // internal company codes
      ["90", FieldParser2.VARIABLE_LENGTH, 30],
      ["91", FieldParser2.VARIABLE_LENGTH, 30],
      ["92", FieldParser2.VARIABLE_LENGTH, 30],
      ["93", FieldParser2.VARIABLE_LENGTH, 30],
      ["94", FieldParser2.VARIABLE_LENGTH, 30],
      ["95", FieldParser2.VARIABLE_LENGTH, 30],
      ["96", FieldParser2.VARIABLE_LENGTH, 30],
      ["97", FieldParser2.VARIABLE_LENGTH, 3],
      ["98", FieldParser2.VARIABLE_LENGTH, 30],
      ["99", FieldParser2.VARIABLE_LENGTH, 30]
    ];
    FieldParser2.THREE_DIGIT_DATA_LENGTH = [
      // Same format as above
      ["240", FieldParser2.VARIABLE_LENGTH, 30],
      ["241", FieldParser2.VARIABLE_LENGTH, 30],
      ["242", FieldParser2.VARIABLE_LENGTH, 6],
      ["250", FieldParser2.VARIABLE_LENGTH, 30],
      ["251", FieldParser2.VARIABLE_LENGTH, 30],
      ["253", FieldParser2.VARIABLE_LENGTH, 17],
      ["254", FieldParser2.VARIABLE_LENGTH, 20],
      ["400", FieldParser2.VARIABLE_LENGTH, 30],
      ["401", FieldParser2.VARIABLE_LENGTH, 30],
      ["402", 17],
      ["403", FieldParser2.VARIABLE_LENGTH, 30],
      ["410", 13],
      ["411", 13],
      ["412", 13],
      ["413", 13],
      ["414", 13],
      ["420", FieldParser2.VARIABLE_LENGTH, 20],
      ["421", FieldParser2.VARIABLE_LENGTH, 15],
      ["422", 3],
      ["423", FieldParser2.VARIABLE_LENGTH, 15],
      ["424", 3],
      ["425", 3],
      ["426", 3]
    ];
    FieldParser2.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
      // Same format as above
      ["310", 6],
      ["311", 6],
      ["312", 6],
      ["313", 6],
      ["314", 6],
      ["315", 6],
      ["316", 6],
      ["320", 6],
      ["321", 6],
      ["322", 6],
      ["323", 6],
      ["324", 6],
      ["325", 6],
      ["326", 6],
      ["327", 6],
      ["328", 6],
      ["329", 6],
      ["330", 6],
      ["331", 6],
      ["332", 6],
      ["333", 6],
      ["334", 6],
      ["335", 6],
      ["336", 6],
      ["340", 6],
      ["341", 6],
      ["342", 6],
      ["343", 6],
      ["344", 6],
      ["345", 6],
      ["346", 6],
      ["347", 6],
      ["348", 6],
      ["349", 6],
      ["350", 6],
      ["351", 6],
      ["352", 6],
      ["353", 6],
      ["354", 6],
      ["355", 6],
      ["356", 6],
      ["357", 6],
      ["360", 6],
      ["361", 6],
      ["362", 6],
      ["363", 6],
      ["364", 6],
      ["365", 6],
      ["366", 6],
      ["367", 6],
      ["368", 6],
      ["369", 6],
      ["390", FieldParser2.VARIABLE_LENGTH, 15],
      ["391", FieldParser2.VARIABLE_LENGTH, 18],
      ["392", FieldParser2.VARIABLE_LENGTH, 15],
      ["393", FieldParser2.VARIABLE_LENGTH, 18],
      ["703", FieldParser2.VARIABLE_LENGTH, 30]
    ];
    FieldParser2.FOUR_DIGIT_DATA_LENGTH = [
      // Same format as above
      ["7001", 13],
      ["7002", FieldParser2.VARIABLE_LENGTH, 30],
      ["7003", 10],
      ["8001", 14],
      ["8002", FieldParser2.VARIABLE_LENGTH, 20],
      ["8003", FieldParser2.VARIABLE_LENGTH, 30],
      ["8004", FieldParser2.VARIABLE_LENGTH, 30],
      ["8005", 6],
      ["8006", 18],
      ["8007", FieldParser2.VARIABLE_LENGTH, 30],
      ["8008", FieldParser2.VARIABLE_LENGTH, 12],
      ["8018", 18],
      ["8020", FieldParser2.VARIABLE_LENGTH, 25],
      ["8100", 6],
      ["8101", 10],
      ["8102", 2],
      ["8110", FieldParser2.VARIABLE_LENGTH, 70],
      ["8200", FieldParser2.VARIABLE_LENGTH, 70]
    ];
    return FieldParser2;
  }()
);
var FieldParser_default = FieldParser;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/GeneralAppIdDecoder.js
var GeneralAppIdDecoder = (
  /** @class */
  function() {
    function GeneralAppIdDecoder2(information) {
      this.buffer = new StringBuilder_default();
      this.information = information;
    }
    GeneralAppIdDecoder2.prototype.decodeAllCodes = function(buff, initialPosition) {
      var currentPosition = initialPosition;
      var remaining = null;
      do {
        var info = this.decodeGeneralPurposeField(currentPosition, remaining);
        var parsedFields = FieldParser_default.parseFieldsInGeneralPurpose(info.getNewString());
        if (parsedFields != null) {
          buff.append(parsedFields);
        }
        if (info.isRemaining()) {
          remaining = "" + info.getRemainingValue();
        } else {
          remaining = null;
        }
        if (currentPosition === info.getNewPosition()) {
          break;
        }
        currentPosition = info.getNewPosition();
      } while (true);
      return buff.toString();
    };
    GeneralAppIdDecoder2.prototype.isStillNumeric = function(pos) {
      if (pos + 7 > this.information.getSize()) {
        return pos + 4 <= this.information.getSize();
      }
      for (var i = pos; i < pos + 3; ++i) {
        if (this.information.get(i)) {
          return true;
        }
      }
      return this.information.get(pos + 3);
    };
    GeneralAppIdDecoder2.prototype.decodeNumeric = function(pos) {
      if (pos + 7 > this.information.getSize()) {
        var numeric_1 = this.extractNumericValueFromBitArray(pos, 4);
        if (numeric_1 === 0) {
          return new DecodedNumeric_default(this.information.getSize(), DecodedNumeric_default.FNC1, DecodedNumeric_default.FNC1);
        }
        return new DecodedNumeric_default(this.information.getSize(), numeric_1 - 1, DecodedNumeric_default.FNC1);
      }
      var numeric = this.extractNumericValueFromBitArray(pos, 7);
      var digit1 = (numeric - 8) / 11;
      var digit2 = (numeric - 8) % 11;
      return new DecodedNumeric_default(pos + 7, digit1, digit2);
    };
    GeneralAppIdDecoder2.prototype.extractNumericValueFromBitArray = function(pos, bits) {
      return GeneralAppIdDecoder2.extractNumericValueFromBitArray(this.information, pos, bits);
    };
    GeneralAppIdDecoder2.extractNumericValueFromBitArray = function(information, pos, bits) {
      var value = 0;
      for (var i = 0; i < bits; ++i) {
        if (information.get(pos + i)) {
          value |= 1 << bits - i - 1;
        }
      }
      return value;
    };
    GeneralAppIdDecoder2.prototype.decodeGeneralPurposeField = function(pos, remaining) {
      this.buffer.setLengthToZero();
      if (remaining != null) {
        this.buffer.append(remaining);
      }
      this.current.setPosition(pos);
      var lastDecoded = this.parseBlocks();
      if (lastDecoded != null && lastDecoded.isRemaining()) {
        return new DecodedInformation_default(this.current.getPosition(), this.buffer.toString(), lastDecoded.getRemainingValue());
      }
      return new DecodedInformation_default(this.current.getPosition(), this.buffer.toString());
    };
    GeneralAppIdDecoder2.prototype.parseBlocks = function() {
      var isFinished;
      var result;
      do {
        var initialPosition = this.current.getPosition();
        if (this.current.isAlpha()) {
          result = this.parseAlphaBlock();
          isFinished = result.isFinished();
        } else if (this.current.isIsoIec646()) {
          result = this.parseIsoIec646Block();
          isFinished = result.isFinished();
        } else {
          result = this.parseNumericBlock();
          isFinished = result.isFinished();
        }
        var positionChanged = initialPosition !== this.current.getPosition();
        if (!positionChanged && !isFinished) {
          break;
        }
      } while (!isFinished);
      return result.getDecodedInformation();
    };
    GeneralAppIdDecoder2.prototype.parseNumericBlock = function() {
      while (this.isStillNumeric(this.current.getPosition())) {
        var numeric = this.decodeNumeric(this.current.getPosition());
        this.current.setPosition(numeric.getNewPosition());
        if (numeric.isFirstDigitFNC1()) {
          var information = void 0;
          if (numeric.isSecondDigitFNC1()) {
            information = new DecodedInformation_default(this.current.getPosition(), this.buffer.toString());
          } else {
            information = new DecodedInformation_default(this.current.getPosition(), this.buffer.toString(), numeric.getSecondDigit());
          }
          return new BlockParsedResult_default(true, information);
        }
        this.buffer.append(numeric.getFirstDigit());
        if (numeric.isSecondDigitFNC1()) {
          var information = new DecodedInformation_default(this.current.getPosition(), this.buffer.toString());
          return new BlockParsedResult_default(true, information);
        }
        this.buffer.append(numeric.getSecondDigit());
      }
      if (this.isNumericToAlphaNumericLatch(this.current.getPosition())) {
        this.current.setAlpha();
        this.current.incrementPosition(4);
      }
      return new BlockParsedResult_default(false);
    };
    GeneralAppIdDecoder2.prototype.parseIsoIec646Block = function() {
      while (this.isStillIsoIec646(this.current.getPosition())) {
        var iso = this.decodeIsoIec646(this.current.getPosition());
        this.current.setPosition(iso.getNewPosition());
        if (iso.isFNC1()) {
          var information = new DecodedInformation_default(this.current.getPosition(), this.buffer.toString());
          return new BlockParsedResult_default(true, information);
        }
        this.buffer.append(iso.getValue());
      }
      if (this.isAlphaOr646ToNumericLatch(this.current.getPosition())) {
        this.current.incrementPosition(3);
        this.current.setNumeric();
      } else if (this.isAlphaTo646ToAlphaLatch(this.current.getPosition())) {
        if (this.current.getPosition() + 5 < this.information.getSize()) {
          this.current.incrementPosition(5);
        } else {
          this.current.setPosition(this.information.getSize());
        }
        this.current.setAlpha();
      }
      return new BlockParsedResult_default(false);
    };
    GeneralAppIdDecoder2.prototype.parseAlphaBlock = function() {
      while (this.isStillAlpha(this.current.getPosition())) {
        var alpha = this.decodeAlphanumeric(this.current.getPosition());
        this.current.setPosition(alpha.getNewPosition());
        if (alpha.isFNC1()) {
          var information = new DecodedInformation_default(this.current.getPosition(), this.buffer.toString());
          return new BlockParsedResult_default(true, information);
        }
        this.buffer.append(alpha.getValue());
      }
      if (this.isAlphaOr646ToNumericLatch(this.current.getPosition())) {
        this.current.incrementPosition(3);
        this.current.setNumeric();
      } else if (this.isAlphaTo646ToAlphaLatch(this.current.getPosition())) {
        if (this.current.getPosition() + 5 < this.information.getSize()) {
          this.current.incrementPosition(5);
        } else {
          this.current.setPosition(this.information.getSize());
        }
        this.current.setIsoIec646();
      }
      return new BlockParsedResult_default(false);
    };
    GeneralAppIdDecoder2.prototype.isStillIsoIec646 = function(pos) {
      if (pos + 5 > this.information.getSize()) {
        return false;
      }
      var fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
      if (fiveBitValue >= 5 && fiveBitValue < 16) {
        return true;
      }
      if (pos + 7 > this.information.getSize()) {
        return false;
      }
      var sevenBitValue = this.extractNumericValueFromBitArray(pos, 7);
      if (sevenBitValue >= 64 && sevenBitValue < 116) {
        return true;
      }
      if (pos + 8 > this.information.getSize()) {
        return false;
      }
      var eightBitValue = this.extractNumericValueFromBitArray(pos, 8);
      return eightBitValue >= 232 && eightBitValue < 253;
    };
    GeneralAppIdDecoder2.prototype.decodeIsoIec646 = function(pos) {
      var fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
      if (fiveBitValue === 15) {
        return new DecodedChar_default(pos + 5, DecodedChar_default.FNC1);
      }
      if (fiveBitValue >= 5 && fiveBitValue < 15) {
        return new DecodedChar_default(pos + 5, "0" + (fiveBitValue - 5));
      }
      var sevenBitValue = this.extractNumericValueFromBitArray(pos, 7);
      if (sevenBitValue >= 64 && sevenBitValue < 90) {
        return new DecodedChar_default(pos + 7, "" + (sevenBitValue + 1));
      }
      if (sevenBitValue >= 90 && sevenBitValue < 116) {
        return new DecodedChar_default(pos + 7, "" + (sevenBitValue + 7));
      }
      var eightBitValue = this.extractNumericValueFromBitArray(pos, 8);
      var c;
      switch (eightBitValue) {
        case 232:
          c = "!";
          break;
        case 233:
          c = '"';
          break;
        case 234:
          c = "%";
          break;
        case 235:
          c = "&";
          break;
        case 236:
          c = "'";
          break;
        case 237:
          c = "(";
          break;
        case 238:
          c = ")";
          break;
        case 239:
          c = "*";
          break;
        case 240:
          c = "+";
          break;
        case 241:
          c = ",";
          break;
        case 242:
          c = "-";
          break;
        case 243:
          c = ".";
          break;
        case 244:
          c = "/";
          break;
        case 245:
          c = ":";
          break;
        case 246:
          c = ";";
          break;
        case 247:
          c = "<";
          break;
        case 248:
          c = "=";
          break;
        case 249:
          c = ">";
          break;
        case 250:
          c = "?";
          break;
        case 251:
          c = "_";
          break;
        case 252:
          c = " ";
          break;
        default:
          throw new FormatException_default();
      }
      return new DecodedChar_default(pos + 8, c);
    };
    GeneralAppIdDecoder2.prototype.isStillAlpha = function(pos) {
      if (pos + 5 > this.information.getSize()) {
        return false;
      }
      var fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
      if (fiveBitValue >= 5 && fiveBitValue < 16) {
        return true;
      }
      if (pos + 6 > this.information.getSize()) {
        return false;
      }
      var sixBitValue = this.extractNumericValueFromBitArray(pos, 6);
      return sixBitValue >= 16 && sixBitValue < 63;
    };
    GeneralAppIdDecoder2.prototype.decodeAlphanumeric = function(pos) {
      var fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
      if (fiveBitValue === 15) {
        return new DecodedChar_default(pos + 5, DecodedChar_default.FNC1);
      }
      if (fiveBitValue >= 5 && fiveBitValue < 15) {
        return new DecodedChar_default(pos + 5, "0" + (fiveBitValue - 5));
      }
      var sixBitValue = this.extractNumericValueFromBitArray(pos, 6);
      if (sixBitValue >= 32 && sixBitValue < 58) {
        return new DecodedChar_default(pos + 6, "" + (sixBitValue + 33));
      }
      var c;
      switch (sixBitValue) {
        case 58:
          c = "*";
          break;
        case 59:
          c = ",";
          break;
        case 60:
          c = "-";
          break;
        case 61:
          c = ".";
          break;
        case 62:
          c = "/";
          break;
        default:
          throw new IllegalStateException_default("Decoding invalid alphanumeric value: " + sixBitValue);
      }
      return new DecodedChar_default(pos + 6, c);
    };
    GeneralAppIdDecoder2.prototype.isAlphaTo646ToAlphaLatch = function(pos) {
      if (pos + 1 > this.information.getSize()) {
        return false;
      }
      for (var i = 0; i < 5 && i + pos < this.information.getSize(); ++i) {
        if (i === 2) {
          if (!this.information.get(pos + 2)) {
            return false;
          }
        } else if (this.information.get(pos + i)) {
          return false;
        }
      }
      return true;
    };
    GeneralAppIdDecoder2.prototype.isAlphaOr646ToNumericLatch = function(pos) {
      if (pos + 3 > this.information.getSize()) {
        return false;
      }
      for (var i = pos; i < pos + 3; ++i) {
        if (this.information.get(i)) {
          return false;
        }
      }
      return true;
    };
    GeneralAppIdDecoder2.prototype.isNumericToAlphaNumericLatch = function(pos) {
      if (pos + 1 > this.information.getSize()) {
        return false;
      }
      for (var i = 0; i < 4 && i + pos < this.information.getSize(); ++i) {
        if (this.information.get(pos + i)) {
          return false;
        }
      }
      return true;
    };
    return GeneralAppIdDecoder2;
  }()
);
var GeneralAppIdDecoder_default = GeneralAppIdDecoder;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/AbstractExpandedDecoder.js
var AbstractExpandedDecoder = (
  /** @class */
  function() {
    function AbstractExpandedDecoder2(information) {
      this.information = information;
      this.generalDecoder = new GeneralAppIdDecoder_default(information);
    }
    AbstractExpandedDecoder2.prototype.getInformation = function() {
      return this.information;
    };
    AbstractExpandedDecoder2.prototype.getGeneralDecoder = function() {
      return this.generalDecoder;
    };
    return AbstractExpandedDecoder2;
  }()
);
var AbstractExpandedDecoder_default = AbstractExpandedDecoder;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/AI01decoder.js
var __extends38 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI01decoder = (
  /** @class */
  function(_super) {
    __extends38(AI01decoder2, _super);
    function AI01decoder2(information) {
      return _super.call(this, information) || this;
    }
    AI01decoder2.prototype.encodeCompressedGtin = function(buf, currentPos) {
      buf.append("(01)");
      var initialPosition = buf.length();
      buf.append("9");
      this.encodeCompressedGtinWithoutAI(buf, currentPos, initialPosition);
    };
    AI01decoder2.prototype.encodeCompressedGtinWithoutAI = function(buf, currentPos, initialBufferPosition) {
      for (var i = 0; i < 4; ++i) {
        var currentBlock = this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos + 10 * i, 10);
        if (currentBlock / 100 === 0) {
          buf.append("0");
        }
        if (currentBlock / 10 === 0) {
          buf.append("0");
        }
        buf.append(currentBlock);
      }
      AI01decoder2.appendCheckDigit(buf, initialBufferPosition);
    };
    AI01decoder2.appendCheckDigit = function(buf, currentPos) {
      var checkDigit = 0;
      for (var i = 0; i < 13; i++) {
        var digit = buf.charAt(i + currentPos).charCodeAt(0) - "0".charCodeAt(0);
        checkDigit += (i & 1) === 0 ? 3 * digit : digit;
      }
      checkDigit = 10 - checkDigit % 10;
      if (checkDigit === 10) {
        checkDigit = 0;
      }
      buf.append(checkDigit);
    };
    AI01decoder2.GTIN_SIZE = 40;
    return AI01decoder2;
  }(AbstractExpandedDecoder_default)
);
var AI01decoder_default = AI01decoder;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/AI01AndOtherAIs.js
var __extends39 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI01AndOtherAIs = (
  /** @class */
  function(_super) {
    __extends39(AI01AndOtherAIs2, _super);
    function AI01AndOtherAIs2(information) {
      return _super.call(this, information) || this;
    }
    AI01AndOtherAIs2.prototype.parseInformation = function() {
      var buff = new StringBuilder_default();
      buff.append("(01)");
      var initialGtinPosition = buff.length();
      var firstGtinDigit = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01AndOtherAIs2.HEADER_SIZE, 4);
      buff.append(firstGtinDigit);
      this.encodeCompressedGtinWithoutAI(buff, AI01AndOtherAIs2.HEADER_SIZE + 4, initialGtinPosition);
      return this.getGeneralDecoder().decodeAllCodes(buff, AI01AndOtherAIs2.HEADER_SIZE + 44);
    };
    AI01AndOtherAIs2.HEADER_SIZE = 1 + 1 + 2;
    return AI01AndOtherAIs2;
  }(AI01decoder_default)
);
var AI01AndOtherAIs_default = AI01AndOtherAIs;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/AnyAIDecoder.js
var __extends40 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AnyAIDecoder = (
  /** @class */
  function(_super) {
    __extends40(AnyAIDecoder2, _super);
    function AnyAIDecoder2(information) {
      return _super.call(this, information) || this;
    }
    AnyAIDecoder2.prototype.parseInformation = function() {
      var buf = new StringBuilder_default();
      return this.getGeneralDecoder().decodeAllCodes(buf, AnyAIDecoder2.HEADER_SIZE);
    };
    AnyAIDecoder2.HEADER_SIZE = 2 + 1 + 2;
    return AnyAIDecoder2;
  }(AbstractExpandedDecoder_default)
);
var AnyAIDecoder_default = AnyAIDecoder;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/AI01weightDecoder.js
var __extends41 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI01weightDecoder = (
  /** @class */
  function(_super) {
    __extends41(AI01weightDecoder2, _super);
    function AI01weightDecoder2(information) {
      return _super.call(this, information) || this;
    }
    AI01weightDecoder2.prototype.encodeCompressedWeight = function(buf, currentPos, weightSize) {
      var originalWeightNumeric = this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos, weightSize);
      this.addWeightCode(buf, originalWeightNumeric);
      var weightNumeric = this.checkWeight(originalWeightNumeric);
      var currentDivisor = 1e5;
      for (var i = 0; i < 5; ++i) {
        if (weightNumeric / currentDivisor === 0) {
          buf.append("0");
        }
        currentDivisor /= 10;
      }
      buf.append(weightNumeric);
    };
    return AI01weightDecoder2;
  }(AI01decoder_default)
);
var AI01weightDecoder_default = AI01weightDecoder;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/AI013x0xDecoder.js
var __extends42 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI013x0xDecoder = (
  /** @class */
  function(_super) {
    __extends42(AI013x0xDecoder2, _super);
    function AI013x0xDecoder2(information) {
      return _super.call(this, information) || this;
    }
    AI013x0xDecoder2.prototype.parseInformation = function() {
      if (this.getInformation().getSize() !== AI013x0xDecoder2.HEADER_SIZE + AI01weightDecoder_default.GTIN_SIZE + AI013x0xDecoder2.WEIGHT_SIZE) {
        throw new NotFoundException_default();
      }
      var buf = new StringBuilder_default();
      this.encodeCompressedGtin(buf, AI013x0xDecoder2.HEADER_SIZE);
      this.encodeCompressedWeight(buf, AI013x0xDecoder2.HEADER_SIZE + AI01weightDecoder_default.GTIN_SIZE, AI013x0xDecoder2.WEIGHT_SIZE);
      return buf.toString();
    };
    AI013x0xDecoder2.HEADER_SIZE = 4 + 1;
    AI013x0xDecoder2.WEIGHT_SIZE = 15;
    return AI013x0xDecoder2;
  }(AI01weightDecoder_default)
);
var AI013x0xDecoder_default = AI013x0xDecoder;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/AI013103decoder.js
var __extends43 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI013103decoder = (
  /** @class */
  function(_super) {
    __extends43(AI013103decoder2, _super);
    function AI013103decoder2(information) {
      return _super.call(this, information) || this;
    }
    AI013103decoder2.prototype.addWeightCode = function(buf, weight) {
      buf.append("(3103)");
    };
    AI013103decoder2.prototype.checkWeight = function(weight) {
      return weight;
    };
    return AI013103decoder2;
  }(AI013x0xDecoder_default)
);
var AI013103decoder_default = AI013103decoder;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/AI01320xDecoder.js
var __extends44 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI01320xDecoder = (
  /** @class */
  function(_super) {
    __extends44(AI01320xDecoder2, _super);
    function AI01320xDecoder2(information) {
      return _super.call(this, information) || this;
    }
    AI01320xDecoder2.prototype.addWeightCode = function(buf, weight) {
      if (weight < 1e4) {
        buf.append("(3202)");
      } else {
        buf.append("(3203)");
      }
    };
    AI01320xDecoder2.prototype.checkWeight = function(weight) {
      if (weight < 1e4) {
        return weight;
      }
      return weight - 1e4;
    };
    return AI01320xDecoder2;
  }(AI013x0xDecoder_default)
);
var AI01320xDecoder_default = AI01320xDecoder;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/AI01392xDecoder.js
var __extends45 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI01392xDecoder = (
  /** @class */
  function(_super) {
    __extends45(AI01392xDecoder2, _super);
    function AI01392xDecoder2(information) {
      return _super.call(this, information) || this;
    }
    AI01392xDecoder2.prototype.parseInformation = function() {
      if (this.getInformation().getSize() < AI01392xDecoder2.HEADER_SIZE + AI01decoder_default.GTIN_SIZE) {
        throw new NotFoundException_default();
      }
      var buf = new StringBuilder_default();
      this.encodeCompressedGtin(buf, AI01392xDecoder2.HEADER_SIZE);
      var lastAIdigit = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01392xDecoder2.HEADER_SIZE + AI01decoder_default.GTIN_SIZE, AI01392xDecoder2.LAST_DIGIT_SIZE);
      buf.append("(392");
      buf.append(lastAIdigit);
      buf.append(")");
      var decodedInformation = this.getGeneralDecoder().decodeGeneralPurposeField(AI01392xDecoder2.HEADER_SIZE + AI01decoder_default.GTIN_SIZE + AI01392xDecoder2.LAST_DIGIT_SIZE, null);
      buf.append(decodedInformation.getNewString());
      return buf.toString();
    };
    AI01392xDecoder2.HEADER_SIZE = 5 + 1 + 2;
    AI01392xDecoder2.LAST_DIGIT_SIZE = 2;
    return AI01392xDecoder2;
  }(AI01decoder_default)
);
var AI01392xDecoder_default = AI01392xDecoder;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/AI01393xDecoder.js
var __extends46 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI01393xDecoder = (
  /** @class */
  function(_super) {
    __extends46(AI01393xDecoder2, _super);
    function AI01393xDecoder2(information) {
      return _super.call(this, information) || this;
    }
    AI01393xDecoder2.prototype.parseInformation = function() {
      if (this.getInformation().getSize() < AI01393xDecoder2.HEADER_SIZE + AI01decoder_default.GTIN_SIZE) {
        throw new NotFoundException_default();
      }
      var buf = new StringBuilder_default();
      this.encodeCompressedGtin(buf, AI01393xDecoder2.HEADER_SIZE);
      var lastAIdigit = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01393xDecoder2.HEADER_SIZE + AI01decoder_default.GTIN_SIZE, AI01393xDecoder2.LAST_DIGIT_SIZE);
      buf.append("(393");
      buf.append(lastAIdigit);
      buf.append(")");
      var firstThreeDigits = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01393xDecoder2.HEADER_SIZE + AI01decoder_default.GTIN_SIZE + AI01393xDecoder2.LAST_DIGIT_SIZE, AI01393xDecoder2.FIRST_THREE_DIGITS_SIZE);
      if (firstThreeDigits / 100 === 0) {
        buf.append("0");
      }
      if (firstThreeDigits / 10 === 0) {
        buf.append("0");
      }
      buf.append(firstThreeDigits);
      var generalInformation = this.getGeneralDecoder().decodeGeneralPurposeField(AI01393xDecoder2.HEADER_SIZE + AI01decoder_default.GTIN_SIZE + AI01393xDecoder2.LAST_DIGIT_SIZE + AI01393xDecoder2.FIRST_THREE_DIGITS_SIZE, null);
      buf.append(generalInformation.getNewString());
      return buf.toString();
    };
    AI01393xDecoder2.HEADER_SIZE = 5 + 1 + 2;
    AI01393xDecoder2.LAST_DIGIT_SIZE = 2;
    AI01393xDecoder2.FIRST_THREE_DIGITS_SIZE = 10;
    return AI01393xDecoder2;
  }(AI01decoder_default)
);
var AI01393xDecoder_default = AI01393xDecoder;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/AI013x0x1xDecoder.js
var __extends47 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AI013x0x1xDecoder = (
  /** @class */
  function(_super) {
    __extends47(AI013x0x1xDecoder2, _super);
    function AI013x0x1xDecoder2(information, firstAIdigits, dateCode) {
      var _this = _super.call(this, information) || this;
      _this.dateCode = dateCode;
      _this.firstAIdigits = firstAIdigits;
      return _this;
    }
    AI013x0x1xDecoder2.prototype.parseInformation = function() {
      if (this.getInformation().getSize() !== AI013x0x1xDecoder2.HEADER_SIZE + AI013x0x1xDecoder2.GTIN_SIZE + AI013x0x1xDecoder2.WEIGHT_SIZE + AI013x0x1xDecoder2.DATE_SIZE) {
        throw new NotFoundException_default();
      }
      var buf = new StringBuilder_default();
      this.encodeCompressedGtin(buf, AI013x0x1xDecoder2.HEADER_SIZE);
      this.encodeCompressedWeight(buf, AI013x0x1xDecoder2.HEADER_SIZE + AI013x0x1xDecoder2.GTIN_SIZE, AI013x0x1xDecoder2.WEIGHT_SIZE);
      this.encodeCompressedDate(buf, AI013x0x1xDecoder2.HEADER_SIZE + AI013x0x1xDecoder2.GTIN_SIZE + AI013x0x1xDecoder2.WEIGHT_SIZE);
      return buf.toString();
    };
    AI013x0x1xDecoder2.prototype.encodeCompressedDate = function(buf, currentPos) {
      var numericDate = this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos, AI013x0x1xDecoder2.DATE_SIZE);
      if (numericDate === 38400) {
        return;
      }
      buf.append("(");
      buf.append(this.dateCode);
      buf.append(")");
      var day = numericDate % 32;
      numericDate /= 32;
      var month = numericDate % 12 + 1;
      numericDate /= 12;
      var year = numericDate;
      if (year / 10 === 0) {
        buf.append("0");
      }
      buf.append(year);
      if (month / 10 === 0) {
        buf.append("0");
      }
      buf.append(month);
      if (day / 10 === 0) {
        buf.append("0");
      }
      buf.append(day);
    };
    AI013x0x1xDecoder2.prototype.addWeightCode = function(buf, weight) {
      buf.append("(");
      buf.append(this.firstAIdigits);
      buf.append(weight / 1e5);
      buf.append(")");
    };
    AI013x0x1xDecoder2.prototype.checkWeight = function(weight) {
      return weight % 1e5;
    };
    AI013x0x1xDecoder2.HEADER_SIZE = 7 + 1;
    AI013x0x1xDecoder2.WEIGHT_SIZE = 20;
    AI013x0x1xDecoder2.DATE_SIZE = 16;
    return AI013x0x1xDecoder2;
  }(AI01weightDecoder_default)
);
var AI013x0x1xDecoder_default = AI013x0x1xDecoder;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/decoders/AbstractExpandedDecoderComplement.js
function createDecoder(information) {
  try {
    if (information.get(1)) {
      return new AI01AndOtherAIs_default(information);
    }
    if (!information.get(2)) {
      return new AnyAIDecoder_default(information);
    }
    var fourBitEncodationMethod = GeneralAppIdDecoder_default.extractNumericValueFromBitArray(information, 1, 4);
    switch (fourBitEncodationMethod) {
      case 4:
        return new AI013103decoder_default(information);
      case 5:
        return new AI01320xDecoder_default(information);
    }
    var fiveBitEncodationMethod = GeneralAppIdDecoder_default.extractNumericValueFromBitArray(information, 1, 5);
    switch (fiveBitEncodationMethod) {
      case 12:
        return new AI01392xDecoder_default(information);
      case 13:
        return new AI01393xDecoder_default(information);
    }
    var sevenBitEncodationMethod = GeneralAppIdDecoder_default.extractNumericValueFromBitArray(information, 1, 7);
    switch (sevenBitEncodationMethod) {
      case 56:
        return new AI013x0x1xDecoder_default(information, "310", "11");
      case 57:
        return new AI013x0x1xDecoder_default(information, "320", "11");
      case 58:
        return new AI013x0x1xDecoder_default(information, "310", "13");
      case 59:
        return new AI013x0x1xDecoder_default(information, "320", "13");
      case 60:
        return new AI013x0x1xDecoder_default(information, "310", "15");
      case 61:
        return new AI013x0x1xDecoder_default(information, "320", "15");
      case 62:
        return new AI013x0x1xDecoder_default(information, "310", "17");
      case 63:
        return new AI013x0x1xDecoder_default(information, "320", "17");
    }
  } catch (e) {
    console.log(e);
    throw new IllegalStateException_default("unknown decoder: " + information);
  }
}

// node_modules/@zxing/library/esm/core/oned/rss/expanded/ExpandedPair.js
var ExpandedPair = (
  /** @class */
  function() {
    function ExpandedPair2(leftChar, rightChar, finderPatter, mayBeLast) {
      this.leftchar = leftChar;
      this.rightchar = rightChar;
      this.finderpattern = finderPatter;
      this.maybeLast = mayBeLast;
    }
    ExpandedPair2.prototype.mayBeLast = function() {
      return this.maybeLast;
    };
    ExpandedPair2.prototype.getLeftChar = function() {
      return this.leftchar;
    };
    ExpandedPair2.prototype.getRightChar = function() {
      return this.rightchar;
    };
    ExpandedPair2.prototype.getFinderPattern = function() {
      return this.finderpattern;
    };
    ExpandedPair2.prototype.mustBeLast = function() {
      return this.rightchar == null;
    };
    ExpandedPair2.prototype.toString = function() {
      return "[ " + this.leftchar + ", " + this.rightchar + " : " + (this.finderpattern == null ? "null" : this.finderpattern.getValue()) + " ]";
    };
    ExpandedPair2.equals = function(o1, o2) {
      if (!(o1 instanceof ExpandedPair2)) {
        return false;
      }
      return ExpandedPair2.equalsOrNull(o1.leftchar, o2.leftchar) && ExpandedPair2.equalsOrNull(o1.rightchar, o2.rightchar) && ExpandedPair2.equalsOrNull(o1.finderpattern, o2.finderpattern);
    };
    ExpandedPair2.equalsOrNull = function(o1, o2) {
      return o1 === null ? o2 === null : ExpandedPair2.equals(o1, o2);
    };
    ExpandedPair2.prototype.hashCode = function() {
      var value = this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
      return value;
    };
    return ExpandedPair2;
  }()
);
var ExpandedPair_default = ExpandedPair;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/ExpandedRow.js
var ExpandedRow = (
  /** @class */
  function() {
    function ExpandedRow2(pairs, rowNumber, wasReversed) {
      this.pairs = pairs;
      this.rowNumber = rowNumber;
      this.wasReversed = wasReversed;
    }
    ExpandedRow2.prototype.getPairs = function() {
      return this.pairs;
    };
    ExpandedRow2.prototype.getRowNumber = function() {
      return this.rowNumber;
    };
    ExpandedRow2.prototype.isReversed = function() {
      return this.wasReversed;
    };
    ExpandedRow2.prototype.isEquivalent = function(otherPairs) {
      return this.checkEqualitity(this, otherPairs);
    };
    ExpandedRow2.prototype.toString = function() {
      return "{ " + this.pairs + " }";
    };
    ExpandedRow2.prototype.equals = function(o1, o2) {
      if (!(o1 instanceof ExpandedRow2)) {
        return false;
      }
      return this.checkEqualitity(o1, o2) && o1.wasReversed === o2.wasReversed;
    };
    ExpandedRow2.prototype.checkEqualitity = function(pair1, pair2) {
      if (!pair1 || !pair2) return;
      var result;
      pair1.forEach(function(e1, i) {
        pair2.forEach(function(e2) {
          if (e1.getLeftChar().getValue() === e2.getLeftChar().getValue() && e1.getRightChar().getValue() === e2.getRightChar().getValue() && e1.getFinderPatter().getValue() === e2.getFinderPatter().getValue()) {
            result = true;
          }
        });
      });
      return result;
    };
    return ExpandedRow2;
  }()
);
var ExpandedRow_default = ExpandedRow;

// node_modules/@zxing/library/esm/core/oned/rss/expanded/RSSExpandedReader.js
var __extends48 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values16 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var RSSExpandedReader = (
  /** @class */
  function(_super) {
    __extends48(RSSExpandedReader2, _super);
    function RSSExpandedReader2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.pairs = new Array(RSSExpandedReader2.MAX_PAIRS);
      _this.rows = new Array();
      _this.startEnd = [2];
      return _this;
    }
    RSSExpandedReader2.prototype.decodeRow = function(rowNumber, row, hints) {
      this.pairs.length = 0;
      this.startFromEven = false;
      try {
        return RSSExpandedReader2.constructResult(this.decodeRow2pairs(rowNumber, row));
      } catch (e) {
      }
      this.pairs.length = 0;
      this.startFromEven = true;
      return RSSExpandedReader2.constructResult(this.decodeRow2pairs(rowNumber, row));
    };
    RSSExpandedReader2.prototype.reset = function() {
      this.pairs.length = 0;
      this.rows.length = 0;
    };
    RSSExpandedReader2.prototype.decodeRow2pairs = function(rowNumber, row) {
      var done = false;
      while (!done) {
        try {
          this.pairs.push(this.retrieveNextPair(row, this.pairs, rowNumber));
        } catch (error) {
          if (error instanceof NotFoundException_default) {
            if (!this.pairs.length) {
              throw new NotFoundException_default();
            }
            done = true;
          }
        }
      }
      if (this.checkChecksum()) {
        return this.pairs;
      }
      var tryStackedDecode;
      if (this.rows.length) {
        tryStackedDecode = true;
      } else {
        tryStackedDecode = false;
      }
      this.storeRow(rowNumber, false);
      if (tryStackedDecode) {
        var ps = this.checkRowsBoolean(false);
        if (ps != null) {
          return ps;
        }
        ps = this.checkRowsBoolean(true);
        if (ps != null) {
          return ps;
        }
      }
      throw new NotFoundException_default();
    };
    RSSExpandedReader2.prototype.checkRowsBoolean = function(reverse) {
      if (this.rows.length > 25) {
        this.rows.length = 0;
        return null;
      }
      this.pairs.length = 0;
      if (reverse) {
        this.rows = this.rows.reverse();
      }
      var ps = null;
      try {
        ps = this.checkRows(new Array(), 0);
      } catch (e) {
        console.log(e);
      }
      if (reverse) {
        this.rows = this.rows.reverse();
      }
      return ps;
    };
    RSSExpandedReader2.prototype.checkRows = function(collectedRows, currentRow) {
      var e_1, _a2;
      for (var i = currentRow; i < this.rows.length; i++) {
        var row = this.rows[i];
        this.pairs.length = 0;
        try {
          for (var collectedRows_1 = (e_1 = void 0, __values16(collectedRows)), collectedRows_1_1 = collectedRows_1.next(); !collectedRows_1_1.done; collectedRows_1_1 = collectedRows_1.next()) {
            var collectedRow = collectedRows_1_1.value;
            this.pairs.push(collectedRow.getPairs());
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (collectedRows_1_1 && !collectedRows_1_1.done && (_a2 = collectedRows_1.return)) _a2.call(collectedRows_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        this.pairs.push(row.getPairs());
        if (!RSSExpandedReader2.isValidSequence(this.pairs)) {
          continue;
        }
        if (this.checkChecksum()) {
          return this.pairs;
        }
        var rs = new Array(collectedRows);
        rs.push(row);
        try {
          return this.checkRows(rs, i + 1);
        } catch (e) {
          console.log(e);
        }
      }
      throw new NotFoundException_default();
    };
    RSSExpandedReader2.isValidSequence = function(pairs) {
      var e_2, _a2;
      try {
        for (var _b = __values16(RSSExpandedReader2.FINDER_PATTERN_SEQUENCES), _c = _b.next(); !_c.done; _c = _b.next()) {
          var sequence = _c.value;
          if (pairs.length > sequence.length) {
            continue;
          }
          var stop_1 = true;
          for (var j = 0; j < pairs.length; j++) {
            if (pairs[j].getFinderPattern().getValue() !== sequence[j]) {
              stop_1 = false;
              break;
            }
          }
          if (stop_1) {
            return true;
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      return false;
    };
    RSSExpandedReader2.prototype.storeRow = function(rowNumber, wasReversed) {
      var insertPos = 0;
      var prevIsSame = false;
      var nextIsSame = false;
      while (insertPos < this.rows.length) {
        var erow = this.rows[insertPos];
        if (erow.getRowNumber() > rowNumber) {
          nextIsSame = erow.isEquivalent(this.pairs);
          break;
        }
        prevIsSame = erow.isEquivalent(this.pairs);
        insertPos++;
      }
      if (nextIsSame || prevIsSame) {
        return;
      }
      if (RSSExpandedReader2.isPartialRow(this.pairs, this.rows)) {
        return;
      }
      this.rows.push(insertPos, new ExpandedRow_default(this.pairs, rowNumber, wasReversed));
      this.removePartialRows(this.pairs, this.rows);
    };
    RSSExpandedReader2.prototype.removePartialRows = function(pairs, rows) {
      var e_3, _a2, e_4, _b, e_5, _c;
      try {
        for (var rows_1 = __values16(rows), rows_1_1 = rows_1.next(); !rows_1_1.done; rows_1_1 = rows_1.next()) {
          var row = rows_1_1.value;
          if (row.getPairs().length === pairs.length) {
            continue;
          }
          var allFound = true;
          try {
            for (var _d = (e_4 = void 0, __values16(row.getPairs())), _e = _d.next(); !_e.done; _e = _d.next()) {
              var p = _e.value;
              var found = false;
              try {
                for (var pairs_1 = (e_5 = void 0, __values16(pairs)), pairs_1_1 = pairs_1.next(); !pairs_1_1.done; pairs_1_1 = pairs_1.next()) {
                  var pp = pairs_1_1.value;
                  if (ExpandedPair_default.equals(p, pp)) {
                    found = true;
                    break;
                  }
                }
              } catch (e_5_1) {
                e_5 = {
                  error: e_5_1
                };
              } finally {
                try {
                  if (pairs_1_1 && !pairs_1_1.done && (_c = pairs_1.return)) _c.call(pairs_1);
                } finally {
                  if (e_5) throw e_5.error;
                }
              }
              if (!found) {
                allFound = false;
              }
            }
          } catch (e_4_1) {
            e_4 = {
              error: e_4_1
            };
          } finally {
            try {
              if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            } finally {
              if (e_4) throw e_4.error;
            }
          }
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (rows_1_1 && !rows_1_1.done && (_a2 = rows_1.return)) _a2.call(rows_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
    };
    RSSExpandedReader2.isPartialRow = function(pairs, rows) {
      var e_6, _a2, e_7, _b, e_8, _c;
      try {
        for (var rows_2 = __values16(rows), rows_2_1 = rows_2.next(); !rows_2_1.done; rows_2_1 = rows_2.next()) {
          var r = rows_2_1.value;
          var allFound = true;
          try {
            for (var pairs_2 = (e_7 = void 0, __values16(pairs)), pairs_2_1 = pairs_2.next(); !pairs_2_1.done; pairs_2_1 = pairs_2.next()) {
              var p = pairs_2_1.value;
              var found = false;
              try {
                for (var _d = (e_8 = void 0, __values16(r.getPairs())), _e = _d.next(); !_e.done; _e = _d.next()) {
                  var pp = _e.value;
                  if (p.equals(pp)) {
                    found = true;
                    break;
                  }
                }
              } catch (e_8_1) {
                e_8 = {
                  error: e_8_1
                };
              } finally {
                try {
                  if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                } finally {
                  if (e_8) throw e_8.error;
                }
              }
              if (!found) {
                allFound = false;
                break;
              }
            }
          } catch (e_7_1) {
            e_7 = {
              error: e_7_1
            };
          } finally {
            try {
              if (pairs_2_1 && !pairs_2_1.done && (_b = pairs_2.return)) _b.call(pairs_2);
            } finally {
              if (e_7) throw e_7.error;
            }
          }
          if (allFound) {
            return true;
          }
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (rows_2_1 && !rows_2_1.done && (_a2 = rows_2.return)) _a2.call(rows_2);
        } finally {
          if (e_6) throw e_6.error;
        }
      }
      return false;
    };
    RSSExpandedReader2.prototype.getRows = function() {
      return this.rows;
    };
    RSSExpandedReader2.constructResult = function(pairs) {
      var binary = BitArrayBuilder_default.buildBitArray(pairs);
      var decoder = createDecoder(binary);
      var resultingString = decoder.parseInformation();
      var firstPoints = pairs[0].getFinderPattern().getResultPoints();
      var lastPoints = pairs[pairs.length - 1].getFinderPattern().getResultPoints();
      var points = [firstPoints[0], firstPoints[1], lastPoints[0], lastPoints[1]];
      return new Result_default(resultingString, null, null, points, BarcodeFormat_default.RSS_EXPANDED, null);
    };
    RSSExpandedReader2.prototype.checkChecksum = function() {
      var firstPair = this.pairs.get(0);
      var checkCharacter = firstPair.getLeftChar();
      var firstCharacter = firstPair.getRightChar();
      if (firstCharacter === null) {
        return false;
      }
      var checksum = firstCharacter.getChecksumPortion();
      var s = 2;
      for (var i = 1; i < this.pairs.size(); ++i) {
        var currentPair = this.pairs.get(i);
        checksum += currentPair.getLeftChar().getChecksumPortion();
        s++;
        var currentRightChar = currentPair.getRightChar();
        if (currentRightChar != null) {
          checksum += currentRightChar.getChecksumPortion();
          s++;
        }
      }
      checksum %= 211;
      var checkCharacterValue = 211 * (s - 4) + checksum;
      return checkCharacterValue === checkCharacter.getValue();
    };
    RSSExpandedReader2.getNextSecondBar = function(row, initialPos) {
      var currentPos;
      if (row.get(initialPos)) {
        currentPos = row.getNextUnset(initialPos);
        currentPos = row.getNextSet(currentPos);
      } else {
        currentPos = row.getNextSet(initialPos);
        currentPos = row.getNextUnset(currentPos);
      }
      return currentPos;
    };
    RSSExpandedReader2.prototype.retrieveNextPair = function(row, previousPairs, rowNumber) {
      var isOddPattern = previousPairs.length % 2 === 0;
      if (this.startFromEven) {
        isOddPattern = !isOddPattern;
      }
      var pattern;
      var keepFinding = true;
      var forcedOffset = -1;
      do {
        this.findNextPair(row, previousPairs, forcedOffset);
        pattern = this.parseFoundFinderPattern(row, rowNumber, isOddPattern);
        if (pattern === null) {
          forcedOffset = RSSExpandedReader2.getNextSecondBar(row, this.startEnd[0]);
        } else {
          keepFinding = false;
        }
      } while (keepFinding);
      var leftChar = this.decodeDataCharacter(row, pattern, isOddPattern, true);
      if (!this.isEmptyPair(previousPairs) && previousPairs[previousPairs.length - 1].mustBeLast()) {
        throw new NotFoundException_default();
      }
      var rightChar;
      try {
        rightChar = this.decodeDataCharacter(row, pattern, isOddPattern, false);
      } catch (e) {
        rightChar = null;
        console.log(e);
      }
      return new ExpandedPair_default(leftChar, rightChar, pattern, true);
    };
    RSSExpandedReader2.prototype.isEmptyPair = function(pairs) {
      if (pairs.length === 0) {
        return true;
      }
      return false;
    };
    RSSExpandedReader2.prototype.findNextPair = function(row, previousPairs, forcedOffset) {
      var counters = this.getDecodeFinderCounters();
      counters[0] = 0;
      counters[1] = 0;
      counters[2] = 0;
      counters[3] = 0;
      var width = row.getSize();
      var rowOffset;
      if (forcedOffset >= 0) {
        rowOffset = forcedOffset;
      } else if (this.isEmptyPair(previousPairs)) {
        rowOffset = 0;
      } else {
        var lastPair = previousPairs[previousPairs.length - 1];
        rowOffset = lastPair.getFinderPattern().getStartEnd()[1];
      }
      var searchingEvenPair = previousPairs.length % 2 !== 0;
      if (this.startFromEven) {
        searchingEvenPair = !searchingEvenPair;
      }
      var isWhite = false;
      while (rowOffset < width) {
        isWhite = !row.get(rowOffset);
        if (!isWhite) {
          break;
        }
        rowOffset++;
      }
      var counterPosition = 0;
      var patternStart = rowOffset;
      for (var x = rowOffset; x < width; x++) {
        if (row.get(x) !== isWhite) {
          counters[counterPosition]++;
        } else {
          if (counterPosition === 3) {
            if (searchingEvenPair) {
              RSSExpandedReader2.reverseCounters(counters);
            }
            if (RSSExpandedReader2.isFinderPattern(counters)) {
              this.startEnd[0] = patternStart;
              this.startEnd[1] = x;
              return;
            }
            if (searchingEvenPair) {
              RSSExpandedReader2.reverseCounters(counters);
            }
            patternStart += counters[0] + counters[1];
            counters[0] = counters[2];
            counters[1] = counters[3];
            counters[2] = 0;
            counters[3] = 0;
            counterPosition--;
          } else {
            counterPosition++;
          }
          counters[counterPosition] = 1;
          isWhite = !isWhite;
        }
      }
      throw new NotFoundException_default();
    };
    RSSExpandedReader2.reverseCounters = function(counters) {
      var length = counters.length;
      for (var i = 0; i < length / 2; ++i) {
        var tmp = counters[i];
        counters[i] = counters[length - i - 1];
        counters[length - i - 1] = tmp;
      }
    };
    RSSExpandedReader2.prototype.parseFoundFinderPattern = function(row, rowNumber, oddPattern) {
      var firstCounter;
      var start;
      var end;
      if (oddPattern) {
        var firstElementStart = this.startEnd[0] - 1;
        while (firstElementStart >= 0 && !row.get(firstElementStart)) {
          firstElementStart--;
        }
        firstElementStart++;
        firstCounter = this.startEnd[0] - firstElementStart;
        start = firstElementStart;
        end = this.startEnd[1];
      } else {
        start = this.startEnd[0];
        end = row.getNextUnset(this.startEnd[1] + 1);
        firstCounter = end - this.startEnd[1];
      }
      var counters = this.getDecodeFinderCounters();
      System_default.arraycopy(counters, 0, counters, 1, counters.length - 1);
      counters[0] = firstCounter;
      var value;
      try {
        value = this.parseFinderValue(counters, RSSExpandedReader2.FINDER_PATTERNS);
      } catch (e) {
        return null;
      }
      return new FinderPattern_default(value, [start, end], start, end, rowNumber);
    };
    RSSExpandedReader2.prototype.decodeDataCharacter = function(row, pattern, isOddPattern, leftChar) {
      var counters = this.getDataCharacterCounters();
      for (var x = 0; x < counters.length; x++) {
        counters[x] = 0;
      }
      if (leftChar) {
        RSSExpandedReader2.recordPatternInReverse(row, pattern.getStartEnd()[0], counters);
      } else {
        RSSExpandedReader2.recordPattern(row, pattern.getStartEnd()[1], counters);
        for (var i = 0, j = counters.length - 1; i < j; i++, j--) {
          var temp = counters[i];
          counters[i] = counters[j];
          counters[j] = temp;
        }
      }
      var numModules = 17;
      var elementWidth = MathUtils_default.sum(new Int32Array(counters)) / numModules;
      var expectedElementWidth = (pattern.getStartEnd()[1] - pattern.getStartEnd()[0]) / 15;
      if (Math.abs(elementWidth - expectedElementWidth) / expectedElementWidth > 0.3) {
        throw new NotFoundException_default();
      }
      var oddCounts = this.getOddCounts();
      var evenCounts = this.getEvenCounts();
      var oddRoundingErrors = this.getOddRoundingErrors();
      var evenRoundingErrors = this.getEvenRoundingErrors();
      for (var i = 0; i < counters.length; i++) {
        var value_1 = 1 * counters[i] / elementWidth;
        var count = value_1 + 0.5;
        if (count < 1) {
          if (value_1 < 0.3) {
            throw new NotFoundException_default();
          }
          count = 1;
        } else if (count > 8) {
          if (value_1 > 8.7) {
            throw new NotFoundException_default();
          }
          count = 8;
        }
        var offset = i / 2;
        if ((i & 1) === 0) {
          oddCounts[offset] = count;
          oddRoundingErrors[offset] = value_1 - count;
        } else {
          evenCounts[offset] = count;
          evenRoundingErrors[offset] = value_1 - count;
        }
      }
      this.adjustOddEvenCounts(numModules);
      var weightRowNumber = 4 * pattern.getValue() + (isOddPattern ? 0 : 2) + (leftChar ? 0 : 1) - 1;
      var oddSum = 0;
      var oddChecksumPortion = 0;
      for (var i = oddCounts.length - 1; i >= 0; i--) {
        if (RSSExpandedReader2.isNotA1left(pattern, isOddPattern, leftChar)) {
          var weight = RSSExpandedReader2.WEIGHTS[weightRowNumber][2 * i];
          oddChecksumPortion += oddCounts[i] * weight;
        }
        oddSum += oddCounts[i];
      }
      var evenChecksumPortion = 0;
      for (var i = evenCounts.length - 1; i >= 0; i--) {
        if (RSSExpandedReader2.isNotA1left(pattern, isOddPattern, leftChar)) {
          var weight = RSSExpandedReader2.WEIGHTS[weightRowNumber][2 * i + 1];
          evenChecksumPortion += evenCounts[i] * weight;
        }
      }
      var checksumPortion = oddChecksumPortion + evenChecksumPortion;
      if ((oddSum & 1) !== 0 || oddSum > 13 || oddSum < 4) {
        throw new NotFoundException_default();
      }
      var group = (13 - oddSum) / 2;
      var oddWidest = RSSExpandedReader2.SYMBOL_WIDEST[group];
      var evenWidest = 9 - oddWidest;
      var vOdd = RSSUtils_default.getRSSvalue(oddCounts, oddWidest, true);
      var vEven = RSSUtils_default.getRSSvalue(evenCounts, evenWidest, false);
      var tEven = RSSExpandedReader2.EVEN_TOTAL_SUBSET[group];
      var gSum = RSSExpandedReader2.GSUM[group];
      var value = vOdd * tEven + vEven + gSum;
      return new DataCharacter_default(value, checksumPortion);
    };
    RSSExpandedReader2.isNotA1left = function(pattern, isOddPattern, leftChar) {
      return !(pattern.getValue() === 0 && isOddPattern && leftChar);
    };
    RSSExpandedReader2.prototype.adjustOddEvenCounts = function(numModules) {
      var oddSum = MathUtils_default.sum(new Int32Array(this.getOddCounts()));
      var evenSum = MathUtils_default.sum(new Int32Array(this.getEvenCounts()));
      var incrementOdd = false;
      var decrementOdd = false;
      if (oddSum > 13) {
        decrementOdd = true;
      } else if (oddSum < 4) {
        incrementOdd = true;
      }
      var incrementEven = false;
      var decrementEven = false;
      if (evenSum > 13) {
        decrementEven = true;
      } else if (evenSum < 4) {
        incrementEven = true;
      }
      var mismatch = oddSum + evenSum - numModules;
      var oddParityBad = (oddSum & 1) === 1;
      var evenParityBad = (evenSum & 1) === 0;
      if (mismatch === 1) {
        if (oddParityBad) {
          if (evenParityBad) {
            throw new NotFoundException_default();
          }
          decrementOdd = true;
        } else {
          if (!evenParityBad) {
            throw new NotFoundException_default();
          }
          decrementEven = true;
        }
      } else if (mismatch === -1) {
        if (oddParityBad) {
          if (evenParityBad) {
            throw new NotFoundException_default();
          }
          incrementOdd = true;
        } else {
          if (!evenParityBad) {
            throw new NotFoundException_default();
          }
          incrementEven = true;
        }
      } else if (mismatch === 0) {
        if (oddParityBad) {
          if (!evenParityBad) {
            throw new NotFoundException_default();
          }
          if (oddSum < evenSum) {
            incrementOdd = true;
            decrementEven = true;
          } else {
            decrementOdd = true;
            incrementEven = true;
          }
        } else {
          if (evenParityBad) {
            throw new NotFoundException_default();
          }
        }
      } else {
        throw new NotFoundException_default();
      }
      if (incrementOdd) {
        if (decrementOdd) {
          throw new NotFoundException_default();
        }
        RSSExpandedReader2.increment(this.getOddCounts(), this.getOddRoundingErrors());
      }
      if (decrementOdd) {
        RSSExpandedReader2.decrement(this.getOddCounts(), this.getOddRoundingErrors());
      }
      if (incrementEven) {
        if (decrementEven) {
          throw new NotFoundException_default();
        }
        RSSExpandedReader2.increment(this.getEvenCounts(), this.getOddRoundingErrors());
      }
      if (decrementEven) {
        RSSExpandedReader2.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
      }
    };
    RSSExpandedReader2.SYMBOL_WIDEST = [7, 5, 4, 3, 1];
    RSSExpandedReader2.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204];
    RSSExpandedReader2.GSUM = [0, 348, 1388, 2948, 3988];
    RSSExpandedReader2.FINDER_PATTERNS = [Int32Array.from([1, 8, 4, 1]), Int32Array.from([3, 6, 4, 1]), Int32Array.from([3, 4, 6, 1]), Int32Array.from([3, 2, 8, 1]), Int32Array.from([2, 6, 5, 1]), Int32Array.from([2, 2, 9, 1])];
    RSSExpandedReader2.WEIGHTS = [[1, 3, 9, 27, 81, 32, 96, 77], [20, 60, 180, 118, 143, 7, 21, 63], [189, 145, 13, 39, 117, 140, 209, 205], [193, 157, 49, 147, 19, 57, 171, 91], [62, 186, 136, 197, 169, 85, 44, 132], [185, 133, 188, 142, 4, 12, 36, 108], [113, 128, 173, 97, 80, 29, 87, 50], [150, 28, 84, 41, 123, 158, 52, 156], [46, 138, 203, 187, 139, 206, 196, 166], [76, 17, 51, 153, 37, 111, 122, 155], [43, 129, 176, 106, 107, 110, 119, 146], [16, 48, 144, 10, 30, 90, 59, 177], [109, 116, 137, 200, 178, 112, 125, 164], [70, 210, 208, 202, 184, 130, 179, 115], [134, 191, 151, 31, 93, 68, 204, 190], [148, 22, 66, 198, 172, 94, 71, 2], [6, 18, 54, 162, 64, 192, 154, 40], [120, 149, 25, 75, 14, 42, 126, 167], [79, 26, 78, 23, 69, 207, 199, 175], [103, 98, 83, 38, 114, 131, 182, 124], [161, 61, 183, 127, 170, 88, 53, 159], [55, 165, 73, 8, 24, 72, 5, 15], [45, 135, 194, 160, 58, 174, 100, 89]];
    RSSExpandedReader2.FINDER_PAT_A = 0;
    RSSExpandedReader2.FINDER_PAT_B = 1;
    RSSExpandedReader2.FINDER_PAT_C = 2;
    RSSExpandedReader2.FINDER_PAT_D = 3;
    RSSExpandedReader2.FINDER_PAT_E = 4;
    RSSExpandedReader2.FINDER_PAT_F = 5;
    RSSExpandedReader2.FINDER_PATTERN_SEQUENCES = [[RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_A], [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_B], [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_D], [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_C], [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_F], [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_F, RSSExpandedReader2.FINDER_PAT_F], [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_D], [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_E], [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_F, RSSExpandedReader2.FINDER_PAT_F], [RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_A, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_B, RSSExpandedReader2.FINDER_PAT_C, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_D, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_E, RSSExpandedReader2.FINDER_PAT_F, RSSExpandedReader2.FINDER_PAT_F]];
    RSSExpandedReader2.MAX_PAIRS = 11;
    return RSSExpandedReader2;
  }(AbstractRSSReader_default)
);
var RSSExpandedReader_default = RSSExpandedReader;

// node_modules/@zxing/library/esm/core/oned/rss/Pair.js
var __extends49 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Pair = (
  /** @class */
  function(_super) {
    __extends49(Pair2, _super);
    function Pair2(value, checksumPortion, finderPattern) {
      var _this = _super.call(this, value, checksumPortion) || this;
      _this.count = 0;
      _this.finderPattern = finderPattern;
      return _this;
    }
    Pair2.prototype.getFinderPattern = function() {
      return this.finderPattern;
    };
    Pair2.prototype.getCount = function() {
      return this.count;
    };
    Pair2.prototype.incrementCount = function() {
      this.count++;
    };
    return Pair2;
  }(DataCharacter_default)
);
var Pair_default = Pair;

// node_modules/@zxing/library/esm/core/oned/rss/RSS14Reader.js
var __extends50 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values17 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var RSS14Reader = (
  /** @class */
  function(_super) {
    __extends50(RSS14Reader2, _super);
    function RSS14Reader2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.possibleLeftPairs = [];
      _this.possibleRightPairs = [];
      return _this;
    }
    RSS14Reader2.prototype.decodeRow = function(rowNumber, row, hints) {
      var e_1, _a2, e_2, _b;
      var leftPair = this.decodePair(row, false, rowNumber, hints);
      RSS14Reader2.addOrTally(this.possibleLeftPairs, leftPair);
      row.reverse();
      var rightPair = this.decodePair(row, true, rowNumber, hints);
      RSS14Reader2.addOrTally(this.possibleRightPairs, rightPair);
      row.reverse();
      try {
        for (var _c = __values17(this.possibleLeftPairs), _d = _c.next(); !_d.done; _d = _c.next()) {
          var left = _d.value;
          if (left.getCount() > 1) {
            try {
              for (var _e = (e_2 = void 0, __values17(this.possibleRightPairs)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var right = _f.value;
                if (right.getCount() > 1 && RSS14Reader2.checkChecksum(left, right)) {
                  return RSS14Reader2.constructResult(left, right);
                }
              }
            } catch (e_2_1) {
              e_2 = {
                error: e_2_1
              };
            } finally {
              try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
              } finally {
                if (e_2) throw e_2.error;
              }
            }
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      throw new NotFoundException_default();
    };
    RSS14Reader2.addOrTally = function(possiblePairs, pair) {
      var e_3, _a2;
      if (pair == null) {
        return;
      }
      var found = false;
      try {
        for (var possiblePairs_1 = __values17(possiblePairs), possiblePairs_1_1 = possiblePairs_1.next(); !possiblePairs_1_1.done; possiblePairs_1_1 = possiblePairs_1.next()) {
          var other = possiblePairs_1_1.value;
          if (other.getValue() === pair.getValue()) {
            other.incrementCount();
            found = true;
            break;
          }
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (possiblePairs_1_1 && !possiblePairs_1_1.done && (_a2 = possiblePairs_1.return)) _a2.call(possiblePairs_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      if (!found) {
        possiblePairs.push(pair);
      }
    };
    RSS14Reader2.prototype.reset = function() {
      this.possibleLeftPairs.length = 0;
      this.possibleRightPairs.length = 0;
    };
    RSS14Reader2.constructResult = function(leftPair, rightPair) {
      var symbolValue = 4537077 * leftPair.getValue() + rightPair.getValue();
      var text = new String(symbolValue).toString();
      var buffer = new StringBuilder_default();
      for (var i = 13 - text.length; i > 0; i--) {
        buffer.append("0");
      }
      buffer.append(text);
      var checkDigit = 0;
      for (var i = 0; i < 13; i++) {
        var digit = buffer.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
        checkDigit += (i & 1) === 0 ? 3 * digit : digit;
      }
      checkDigit = 10 - checkDigit % 10;
      if (checkDigit === 10) {
        checkDigit = 0;
      }
      buffer.append(checkDigit.toString());
      var leftPoints = leftPair.getFinderPattern().getResultPoints();
      var rightPoints = rightPair.getFinderPattern().getResultPoints();
      return new Result_default(buffer.toString(), null, 0, [leftPoints[0], leftPoints[1], rightPoints[0], rightPoints[1]], BarcodeFormat_default.RSS_14, (/* @__PURE__ */ new Date()).getTime());
    };
    RSS14Reader2.checkChecksum = function(leftPair, rightPair) {
      var checkValue = (leftPair.getChecksumPortion() + 16 * rightPair.getChecksumPortion()) % 79;
      var targetCheckValue = 9 * leftPair.getFinderPattern().getValue() + rightPair.getFinderPattern().getValue();
      if (targetCheckValue > 72) {
        targetCheckValue--;
      }
      if (targetCheckValue > 8) {
        targetCheckValue--;
      }
      return checkValue === targetCheckValue;
    };
    RSS14Reader2.prototype.decodePair = function(row, right, rowNumber, hints) {
      try {
        var startEnd = this.findFinderPattern(row, right);
        var pattern = this.parseFoundFinderPattern(row, rowNumber, right, startEnd);
        var resultPointCallback = hints == null ? null : hints.get(DecodeHintType_default.NEED_RESULT_POINT_CALLBACK);
        if (resultPointCallback != null) {
          var center = (startEnd[0] + startEnd[1]) / 2;
          if (right) {
            center = row.getSize() - 1 - center;
          }
          resultPointCallback.foundPossibleResultPoint(new ResultPoint_default(center, rowNumber));
        }
        var outside = this.decodeDataCharacter(row, pattern, true);
        var inside = this.decodeDataCharacter(row, pattern, false);
        return new Pair_default(1597 * outside.getValue() + inside.getValue(), outside.getChecksumPortion() + 4 * inside.getChecksumPortion(), pattern);
      } catch (err) {
        return null;
      }
    };
    RSS14Reader2.prototype.decodeDataCharacter = function(row, pattern, outsideChar) {
      var counters = this.getDataCharacterCounters();
      for (var x = 0; x < counters.length; x++) {
        counters[x] = 0;
      }
      if (outsideChar) {
        OneDReader_default.recordPatternInReverse(row, pattern.getStartEnd()[0], counters);
      } else {
        OneDReader_default.recordPattern(row, pattern.getStartEnd()[1] + 1, counters);
        for (var i = 0, j = counters.length - 1; i < j; i++, j--) {
          var temp = counters[i];
          counters[i] = counters[j];
          counters[j] = temp;
        }
      }
      var numModules = outsideChar ? 16 : 15;
      var elementWidth = MathUtils_default.sum(new Int32Array(counters)) / numModules;
      var oddCounts = this.getOddCounts();
      var evenCounts = this.getEvenCounts();
      var oddRoundingErrors = this.getOddRoundingErrors();
      var evenRoundingErrors = this.getEvenRoundingErrors();
      for (var i = 0; i < counters.length; i++) {
        var value = counters[i] / elementWidth;
        var count = Math.floor(value + 0.5);
        if (count < 1) {
          count = 1;
        } else if (count > 8) {
          count = 8;
        }
        var offset = Math.floor(i / 2);
        if ((i & 1) === 0) {
          oddCounts[offset] = count;
          oddRoundingErrors[offset] = value - count;
        } else {
          evenCounts[offset] = count;
          evenRoundingErrors[offset] = value - count;
        }
      }
      this.adjustOddEvenCounts(outsideChar, numModules);
      var oddSum = 0;
      var oddChecksumPortion = 0;
      for (var i = oddCounts.length - 1; i >= 0; i--) {
        oddChecksumPortion *= 9;
        oddChecksumPortion += oddCounts[i];
        oddSum += oddCounts[i];
      }
      var evenChecksumPortion = 0;
      var evenSum = 0;
      for (var i = evenCounts.length - 1; i >= 0; i--) {
        evenChecksumPortion *= 9;
        evenChecksumPortion += evenCounts[i];
        evenSum += evenCounts[i];
      }
      var checksumPortion = oddChecksumPortion + 3 * evenChecksumPortion;
      if (outsideChar) {
        if ((oddSum & 1) !== 0 || oddSum > 12 || oddSum < 4) {
          throw new NotFoundException_default();
        }
        var group = (12 - oddSum) / 2;
        var oddWidest = RSS14Reader2.OUTSIDE_ODD_WIDEST[group];
        var evenWidest = 9 - oddWidest;
        var vOdd = RSSUtils_default.getRSSvalue(oddCounts, oddWidest, false);
        var vEven = RSSUtils_default.getRSSvalue(evenCounts, evenWidest, true);
        var tEven = RSS14Reader2.OUTSIDE_EVEN_TOTAL_SUBSET[group];
        var gSum = RSS14Reader2.OUTSIDE_GSUM[group];
        return new DataCharacter_default(vOdd * tEven + vEven + gSum, checksumPortion);
      } else {
        if ((evenSum & 1) !== 0 || evenSum > 10 || evenSum < 4) {
          throw new NotFoundException_default();
        }
        var group = (10 - evenSum) / 2;
        var oddWidest = RSS14Reader2.INSIDE_ODD_WIDEST[group];
        var evenWidest = 9 - oddWidest;
        var vOdd = RSSUtils_default.getRSSvalue(oddCounts, oddWidest, true);
        var vEven = RSSUtils_default.getRSSvalue(evenCounts, evenWidest, false);
        var tOdd = RSS14Reader2.INSIDE_ODD_TOTAL_SUBSET[group];
        var gSum = RSS14Reader2.INSIDE_GSUM[group];
        return new DataCharacter_default(vEven * tOdd + vOdd + gSum, checksumPortion);
      }
    };
    RSS14Reader2.prototype.findFinderPattern = function(row, rightFinderPattern) {
      var counters = this.getDecodeFinderCounters();
      counters[0] = 0;
      counters[1] = 0;
      counters[2] = 0;
      counters[3] = 0;
      var width = row.getSize();
      var isWhite = false;
      var rowOffset = 0;
      while (rowOffset < width) {
        isWhite = !row.get(rowOffset);
        if (rightFinderPattern === isWhite) {
          break;
        }
        rowOffset++;
      }
      var counterPosition = 0;
      var patternStart = rowOffset;
      for (var x = rowOffset; x < width; x++) {
        if (row.get(x) !== isWhite) {
          counters[counterPosition]++;
        } else {
          if (counterPosition === 3) {
            if (AbstractRSSReader_default.isFinderPattern(counters)) {
              return [patternStart, x];
            }
            patternStart += counters[0] + counters[1];
            counters[0] = counters[2];
            counters[1] = counters[3];
            counters[2] = 0;
            counters[3] = 0;
            counterPosition--;
          } else {
            counterPosition++;
          }
          counters[counterPosition] = 1;
          isWhite = !isWhite;
        }
      }
      throw new NotFoundException_default();
    };
    RSS14Reader2.prototype.parseFoundFinderPattern = function(row, rowNumber, right, startEnd) {
      var firstIsBlack = row.get(startEnd[0]);
      var firstElementStart = startEnd[0] - 1;
      while (firstElementStart >= 0 && firstIsBlack !== row.get(firstElementStart)) {
        firstElementStart--;
      }
      firstElementStart++;
      var firstCounter = startEnd[0] - firstElementStart;
      var counters = this.getDecodeFinderCounters();
      var copy = new Int32Array(counters.length);
      System_default.arraycopy(counters, 0, copy, 1, counters.length - 1);
      copy[0] = firstCounter;
      var value = this.parseFinderValue(copy, RSS14Reader2.FINDER_PATTERNS);
      var start = firstElementStart;
      var end = startEnd[1];
      if (right) {
        start = row.getSize() - 1 - start;
        end = row.getSize() - 1 - end;
      }
      return new FinderPattern_default(value, [firstElementStart, startEnd[1]], start, end, rowNumber);
    };
    RSS14Reader2.prototype.adjustOddEvenCounts = function(outsideChar, numModules) {
      var oddSum = MathUtils_default.sum(new Int32Array(this.getOddCounts()));
      var evenSum = MathUtils_default.sum(new Int32Array(this.getEvenCounts()));
      var incrementOdd = false;
      var decrementOdd = false;
      var incrementEven = false;
      var decrementEven = false;
      if (outsideChar) {
        if (oddSum > 12) {
          decrementOdd = true;
        } else if (oddSum < 4) {
          incrementOdd = true;
        }
        if (evenSum > 12) {
          decrementEven = true;
        } else if (evenSum < 4) {
          incrementEven = true;
        }
      } else {
        if (oddSum > 11) {
          decrementOdd = true;
        } else if (oddSum < 5) {
          incrementOdd = true;
        }
        if (evenSum > 10) {
          decrementEven = true;
        } else if (evenSum < 4) {
          incrementEven = true;
        }
      }
      var mismatch = oddSum + evenSum - numModules;
      var oddParityBad = (oddSum & 1) === (outsideChar ? 1 : 0);
      var evenParityBad = (evenSum & 1) === 1;
      if (mismatch === 1) {
        if (oddParityBad) {
          if (evenParityBad) {
            throw new NotFoundException_default();
          }
          decrementOdd = true;
        } else {
          if (!evenParityBad) {
            throw new NotFoundException_default();
          }
          decrementEven = true;
        }
      } else if (mismatch === -1) {
        if (oddParityBad) {
          if (evenParityBad) {
            throw new NotFoundException_default();
          }
          incrementOdd = true;
        } else {
          if (!evenParityBad) {
            throw new NotFoundException_default();
          }
          incrementEven = true;
        }
      } else if (mismatch === 0) {
        if (oddParityBad) {
          if (!evenParityBad) {
            throw new NotFoundException_default();
          }
          if (oddSum < evenSum) {
            incrementOdd = true;
            decrementEven = true;
          } else {
            decrementOdd = true;
            incrementEven = true;
          }
        } else {
          if (evenParityBad) {
            throw new NotFoundException_default();
          }
        }
      } else {
        throw new NotFoundException_default();
      }
      if (incrementOdd) {
        if (decrementOdd) {
          throw new NotFoundException_default();
        }
        AbstractRSSReader_default.increment(this.getOddCounts(), this.getOddRoundingErrors());
      }
      if (decrementOdd) {
        AbstractRSSReader_default.decrement(this.getOddCounts(), this.getOddRoundingErrors());
      }
      if (incrementEven) {
        if (decrementEven) {
          throw new NotFoundException_default();
        }
        AbstractRSSReader_default.increment(this.getEvenCounts(), this.getOddRoundingErrors());
      }
      if (decrementEven) {
        AbstractRSSReader_default.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
      }
    };
    RSS14Reader2.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126];
    RSS14Reader2.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81];
    RSS14Reader2.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715];
    RSS14Reader2.INSIDE_GSUM = [0, 336, 1036, 1516];
    RSS14Reader2.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1];
    RSS14Reader2.INSIDE_ODD_WIDEST = [2, 4, 6, 8];
    RSS14Reader2.FINDER_PATTERNS = [Int32Array.from([3, 8, 2, 1]), Int32Array.from([3, 5, 5, 1]), Int32Array.from([3, 3, 7, 1]), Int32Array.from([3, 1, 9, 1]), Int32Array.from([2, 7, 4, 1]), Int32Array.from([2, 5, 6, 1]), Int32Array.from([2, 3, 8, 1]), Int32Array.from([1, 5, 7, 1]), Int32Array.from([1, 3, 9, 1])];
    return RSS14Reader2;
  }(AbstractRSSReader_default)
);
var RSS14Reader_default = RSS14Reader;

// node_modules/@zxing/library/esm/core/oned/MultiFormatOneDReader.js
var __extends51 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var MultiFormatOneDReader = (
  /** @class */
  function(_super) {
    __extends51(MultiFormatOneDReader2, _super);
    function MultiFormatOneDReader2(hints) {
      var _this = _super.call(this) || this;
      _this.readers = [];
      var possibleFormats = !hints ? null : hints.get(DecodeHintType_default.POSSIBLE_FORMATS);
      var useCode39CheckDigit = hints && hints.get(DecodeHintType_default.ASSUME_CODE_39_CHECK_DIGIT) !== void 0;
      var useCode39ExtendedMode = hints && hints.get(DecodeHintType_default.ENABLE_CODE_39_EXTENDED_MODE) !== void 0;
      if (possibleFormats) {
        if (possibleFormats.includes(BarcodeFormat_default.EAN_13) || possibleFormats.includes(BarcodeFormat_default.UPC_A) || possibleFormats.includes(BarcodeFormat_default.EAN_8) || possibleFormats.includes(BarcodeFormat_default.UPC_E)) {
          _this.readers.push(new MultiFormatUPCEANReader_default(hints));
        }
        if (possibleFormats.includes(BarcodeFormat_default.CODE_39)) {
          _this.readers.push(new Code39Reader_default(useCode39CheckDigit, useCode39ExtendedMode));
        }
        if (possibleFormats.includes(BarcodeFormat_default.CODE_93)) {
          _this.readers.push(new Code93Reader_default());
        }
        if (possibleFormats.includes(BarcodeFormat_default.CODE_128)) {
          _this.readers.push(new Code128Reader_default());
        }
        if (possibleFormats.includes(BarcodeFormat_default.ITF)) {
          _this.readers.push(new ITFReader_default());
        }
        if (possibleFormats.includes(BarcodeFormat_default.CODABAR)) {
          _this.readers.push(new CodaBarReader_default());
        }
        if (possibleFormats.includes(BarcodeFormat_default.RSS_14)) {
          _this.readers.push(new RSS14Reader_default());
        }
        if (possibleFormats.includes(BarcodeFormat_default.RSS_EXPANDED)) {
          console.warn("RSS Expanded reader IS NOT ready for production yet! use at your own risk.");
          _this.readers.push(new RSSExpandedReader_default());
        }
      }
      if (_this.readers.length === 0) {
        _this.readers.push(new MultiFormatUPCEANReader_default(hints));
        _this.readers.push(new Code39Reader_default());
        _this.readers.push(new Code93Reader_default());
        _this.readers.push(new MultiFormatUPCEANReader_default(hints));
        _this.readers.push(new Code128Reader_default());
        _this.readers.push(new ITFReader_default());
        _this.readers.push(new RSS14Reader_default());
      }
      return _this;
    }
    MultiFormatOneDReader2.prototype.decodeRow = function(rowNumber, row, hints) {
      for (var i = 0; i < this.readers.length; i++) {
        try {
          return this.readers[i].decodeRow(rowNumber, row, hints);
        } catch (re) {
        }
      }
      throw new NotFoundException_default();
    };
    MultiFormatOneDReader2.prototype.reset = function() {
      this.readers.forEach(function(reader) {
        return reader.reset();
      });
    };
    return MultiFormatOneDReader2;
  }(OneDReader_default)
);
var MultiFormatOneDReader_default = MultiFormatOneDReader;

// node_modules/@zxing/library/esm/browser/BrowserBarcodeReader.js
var __extends52 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BrowserBarcodeReader = (
  /** @class */
  function(_super) {
    __extends52(BrowserBarcodeReader2, _super);
    function BrowserBarcodeReader2(timeBetweenScansMillis, hints) {
      if (timeBetweenScansMillis === void 0) {
        timeBetweenScansMillis = 500;
      }
      return _super.call(this, new MultiFormatOneDReader_default(hints), timeBetweenScansMillis, hints) || this;
    }
    return BrowserBarcodeReader2;
  }(BrowserCodeReader)
);

// node_modules/@zxing/library/esm/core/datamatrix/decoder/Version.js
var __values18 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ECBlocks = (
  /** @class */
  function() {
    function ECBlocks3(ecCodewords, ecBlocks1, ecBlocks2) {
      this.ecCodewords = ecCodewords;
      this.ecBlocks = [ecBlocks1];
      ecBlocks2 && this.ecBlocks.push(ecBlocks2);
    }
    ECBlocks3.prototype.getECCodewords = function() {
      return this.ecCodewords;
    };
    ECBlocks3.prototype.getECBlocks = function() {
      return this.ecBlocks;
    };
    return ECBlocks3;
  }()
);
var ECB = (
  /** @class */
  function() {
    function ECB3(count, dataCodewords) {
      this.count = count;
      this.dataCodewords = dataCodewords;
    }
    ECB3.prototype.getCount = function() {
      return this.count;
    };
    ECB3.prototype.getDataCodewords = function() {
      return this.dataCodewords;
    };
    return ECB3;
  }()
);
var Version = (
  /** @class */
  function() {
    function Version3(versionNumber, symbolSizeRows, symbolSizeColumns, dataRegionSizeRows, dataRegionSizeColumns, ecBlocks) {
      var e_1, _a2;
      this.versionNumber = versionNumber;
      this.symbolSizeRows = symbolSizeRows;
      this.symbolSizeColumns = symbolSizeColumns;
      this.dataRegionSizeRows = dataRegionSizeRows;
      this.dataRegionSizeColumns = dataRegionSizeColumns;
      this.ecBlocks = ecBlocks;
      var total = 0;
      var ecCodewords = ecBlocks.getECCodewords();
      var ecbArray = ecBlocks.getECBlocks();
      try {
        for (var ecbArray_1 = __values18(ecbArray), ecbArray_1_1 = ecbArray_1.next(); !ecbArray_1_1.done; ecbArray_1_1 = ecbArray_1.next()) {
          var ecBlock = ecbArray_1_1.value;
          total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (ecbArray_1_1 && !ecbArray_1_1.done && (_a2 = ecbArray_1.return)) _a2.call(ecbArray_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      this.totalCodewords = total;
    }
    Version3.prototype.getVersionNumber = function() {
      return this.versionNumber;
    };
    Version3.prototype.getSymbolSizeRows = function() {
      return this.symbolSizeRows;
    };
    Version3.prototype.getSymbolSizeColumns = function() {
      return this.symbolSizeColumns;
    };
    Version3.prototype.getDataRegionSizeRows = function() {
      return this.dataRegionSizeRows;
    };
    Version3.prototype.getDataRegionSizeColumns = function() {
      return this.dataRegionSizeColumns;
    };
    Version3.prototype.getTotalCodewords = function() {
      return this.totalCodewords;
    };
    Version3.prototype.getECBlocks = function() {
      return this.ecBlocks;
    };
    Version3.getVersionForDimensions = function(numRows, numColumns) {
      var e_2, _a2;
      if ((numRows & 1) !== 0 || (numColumns & 1) !== 0) {
        throw new FormatException_default();
      }
      try {
        for (var _b = __values18(Version3.VERSIONS), _c = _b.next(); !_c.done; _c = _b.next()) {
          var version = _c.value;
          if (version.symbolSizeRows === numRows && version.symbolSizeColumns === numColumns) {
            return version;
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      throw new FormatException_default();
    };
    Version3.prototype.toString = function() {
      return "" + this.versionNumber;
    };
    Version3.buildVersions = function() {
      return [new Version3(1, 10, 10, 8, 8, new ECBlocks(5, new ECB(1, 3))), new Version3(2, 12, 12, 10, 10, new ECBlocks(7, new ECB(1, 5))), new Version3(3, 14, 14, 12, 12, new ECBlocks(10, new ECB(1, 8))), new Version3(4, 16, 16, 14, 14, new ECBlocks(12, new ECB(1, 12))), new Version3(5, 18, 18, 16, 16, new ECBlocks(14, new ECB(1, 18))), new Version3(6, 20, 20, 18, 18, new ECBlocks(18, new ECB(1, 22))), new Version3(7, 22, 22, 20, 20, new ECBlocks(20, new ECB(1, 30))), new Version3(8, 24, 24, 22, 22, new ECBlocks(24, new ECB(1, 36))), new Version3(9, 26, 26, 24, 24, new ECBlocks(28, new ECB(1, 44))), new Version3(10, 32, 32, 14, 14, new ECBlocks(36, new ECB(1, 62))), new Version3(11, 36, 36, 16, 16, new ECBlocks(42, new ECB(1, 86))), new Version3(12, 40, 40, 18, 18, new ECBlocks(48, new ECB(1, 114))), new Version3(13, 44, 44, 20, 20, new ECBlocks(56, new ECB(1, 144))), new Version3(14, 48, 48, 22, 22, new ECBlocks(68, new ECB(1, 174))), new Version3(15, 52, 52, 24, 24, new ECBlocks(42, new ECB(2, 102))), new Version3(16, 64, 64, 14, 14, new ECBlocks(56, new ECB(2, 140))), new Version3(17, 72, 72, 16, 16, new ECBlocks(36, new ECB(4, 92))), new Version3(18, 80, 80, 18, 18, new ECBlocks(48, new ECB(4, 114))), new Version3(19, 88, 88, 20, 20, new ECBlocks(56, new ECB(4, 144))), new Version3(20, 96, 96, 22, 22, new ECBlocks(68, new ECB(4, 174))), new Version3(21, 104, 104, 24, 24, new ECBlocks(56, new ECB(6, 136))), new Version3(22, 120, 120, 18, 18, new ECBlocks(68, new ECB(6, 175))), new Version3(23, 132, 132, 20, 20, new ECBlocks(62, new ECB(8, 163))), new Version3(24, 144, 144, 22, 22, new ECBlocks(62, new ECB(8, 156), new ECB(2, 155))), new Version3(25, 8, 18, 6, 16, new ECBlocks(7, new ECB(1, 5))), new Version3(26, 8, 32, 6, 14, new ECBlocks(11, new ECB(1, 10))), new Version3(27, 12, 26, 10, 24, new ECBlocks(14, new ECB(1, 16))), new Version3(28, 12, 36, 10, 16, new ECBlocks(18, new ECB(1, 22))), new Version3(29, 16, 36, 14, 16, new ECBlocks(24, new ECB(1, 32))), new Version3(30, 16, 48, 14, 22, new ECBlocks(28, new ECB(1, 49)))];
    };
    Version3.VERSIONS = Version3.buildVersions();
    return Version3;
  }()
);
var Version_default = Version;

// node_modules/@zxing/library/esm/core/datamatrix/decoder/BitMatrixParser.js
var BitMatrixParser = (
  /** @class */
  function() {
    function BitMatrixParser3(bitMatrix) {
      var dimension = bitMatrix.getHeight();
      if (dimension < 8 || dimension > 144 || (dimension & 1) !== 0) {
        throw new FormatException_default();
      }
      this.version = BitMatrixParser3.readVersion(bitMatrix);
      this.mappingBitMatrix = this.extractDataRegion(bitMatrix);
      this.readMappingMatrix = new BitMatrix_default(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
    }
    BitMatrixParser3.prototype.getVersion = function() {
      return this.version;
    };
    BitMatrixParser3.readVersion = function(bitMatrix) {
      var numRows = bitMatrix.getHeight();
      var numColumns = bitMatrix.getWidth();
      return Version_default.getVersionForDimensions(numRows, numColumns);
    };
    BitMatrixParser3.prototype.readCodewords = function() {
      var result = new Int8Array(this.version.getTotalCodewords());
      var resultOffset = 0;
      var row = 4;
      var column = 0;
      var numRows = this.mappingBitMatrix.getHeight();
      var numColumns = this.mappingBitMatrix.getWidth();
      var corner1Read = false;
      var corner2Read = false;
      var corner3Read = false;
      var corner4Read = false;
      do {
        if (row === numRows && column === 0 && !corner1Read) {
          result[resultOffset++] = this.readCorner1(numRows, numColumns) & 255;
          row -= 2;
          column += 2;
          corner1Read = true;
        } else if (row === numRows - 2 && column === 0 && (numColumns & 3) !== 0 && !corner2Read) {
          result[resultOffset++] = this.readCorner2(numRows, numColumns) & 255;
          row -= 2;
          column += 2;
          corner2Read = true;
        } else if (row === numRows + 4 && column === 2 && (numColumns & 7) === 0 && !corner3Read) {
          result[resultOffset++] = this.readCorner3(numRows, numColumns) & 255;
          row -= 2;
          column += 2;
          corner3Read = true;
        } else if (row === numRows - 2 && column === 0 && (numColumns & 7) === 4 && !corner4Read) {
          result[resultOffset++] = this.readCorner4(numRows, numColumns) & 255;
          row -= 2;
          column += 2;
          corner4Read = true;
        } else {
          do {
            if (row < numRows && column >= 0 && !this.readMappingMatrix.get(column, row)) {
              result[resultOffset++] = this.readUtah(row, column, numRows, numColumns) & 255;
            }
            row -= 2;
            column += 2;
          } while (row >= 0 && column < numColumns);
          row += 1;
          column += 3;
          do {
            if (row >= 0 && column < numColumns && !this.readMappingMatrix.get(column, row)) {
              result[resultOffset++] = this.readUtah(row, column, numRows, numColumns) & 255;
            }
            row += 2;
            column -= 2;
          } while (row < numRows && column >= 0);
          row += 3;
          column += 1;
        }
      } while (row < numRows || column < numColumns);
      if (resultOffset !== this.version.getTotalCodewords()) {
        throw new FormatException_default();
      }
      return result;
    };
    BitMatrixParser3.prototype.readModule = function(row, column, numRows, numColumns) {
      if (row < 0) {
        row += numRows;
        column += 4 - (numRows + 4 & 7);
      }
      if (column < 0) {
        column += numColumns;
        row += 4 - (numColumns + 4 & 7);
      }
      this.readMappingMatrix.set(column, row);
      return this.mappingBitMatrix.get(column, row);
    };
    BitMatrixParser3.prototype.readUtah = function(row, column, numRows, numColumns) {
      var currentByte = 0;
      if (this.readModule(row - 2, column - 2, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(row - 2, column - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(row - 1, column - 2, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(row - 1, column - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(row - 1, column, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(row, column - 2, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(row, column - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(row, column, numRows, numColumns)) {
        currentByte |= 1;
      }
      return currentByte;
    };
    BitMatrixParser3.prototype.readCorner1 = function(numRows, numColumns) {
      var currentByte = 0;
      if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(numRows - 1, 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(numRows - 1, 2, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(2, numColumns - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(3, numColumns - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      return currentByte;
    };
    BitMatrixParser3.prototype.readCorner2 = function(numRows, numColumns) {
      var currentByte = 0;
      if (this.readModule(numRows - 3, 0, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(numRows - 2, 0, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(0, numColumns - 4, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(0, numColumns - 3, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      return currentByte;
    };
    BitMatrixParser3.prototype.readCorner3 = function(numRows, numColumns) {
      var currentByte = 0;
      if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(numRows - 1, numColumns - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(0, numColumns - 3, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(1, numColumns - 3, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(1, numColumns - 2, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      return currentByte;
    };
    BitMatrixParser3.prototype.readCorner4 = function(numRows, numColumns) {
      var currentByte = 0;
      if (this.readModule(numRows - 3, 0, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(numRows - 2, 0, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(2, numColumns - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      currentByte <<= 1;
      if (this.readModule(3, numColumns - 1, numRows, numColumns)) {
        currentByte |= 1;
      }
      return currentByte;
    };
    BitMatrixParser3.prototype.extractDataRegion = function(bitMatrix) {
      var symbolSizeRows = this.version.getSymbolSizeRows();
      var symbolSizeColumns = this.version.getSymbolSizeColumns();
      if (bitMatrix.getHeight() !== symbolSizeRows) {
        throw new IllegalArgumentException_default("Dimension of bitMatrix must match the version size");
      }
      var dataRegionSizeRows = this.version.getDataRegionSizeRows();
      var dataRegionSizeColumns = this.version.getDataRegionSizeColumns();
      var numDataRegionsRow = symbolSizeRows / dataRegionSizeRows | 0;
      var numDataRegionsColumn = symbolSizeColumns / dataRegionSizeColumns | 0;
      var sizeDataRegionRow = numDataRegionsRow * dataRegionSizeRows;
      var sizeDataRegionColumn = numDataRegionsColumn * dataRegionSizeColumns;
      var bitMatrixWithoutAlignment = new BitMatrix_default(sizeDataRegionColumn, sizeDataRegionRow);
      for (var dataRegionRow = 0; dataRegionRow < numDataRegionsRow; ++dataRegionRow) {
        var dataRegionRowOffset = dataRegionRow * dataRegionSizeRows;
        for (var dataRegionColumn = 0; dataRegionColumn < numDataRegionsColumn; ++dataRegionColumn) {
          var dataRegionColumnOffset = dataRegionColumn * dataRegionSizeColumns;
          for (var i = 0; i < dataRegionSizeRows; ++i) {
            var readRowOffset = dataRegionRow * (dataRegionSizeRows + 2) + 1 + i;
            var writeRowOffset = dataRegionRowOffset + i;
            for (var j = 0; j < dataRegionSizeColumns; ++j) {
              var readColumnOffset = dataRegionColumn * (dataRegionSizeColumns + 2) + 1 + j;
              if (bitMatrix.get(readColumnOffset, readRowOffset)) {
                var writeColumnOffset = dataRegionColumnOffset + j;
                bitMatrixWithoutAlignment.set(writeColumnOffset, writeRowOffset);
              }
            }
          }
        }
      }
      return bitMatrixWithoutAlignment;
    };
    return BitMatrixParser3;
  }()
);
var BitMatrixParser_default = BitMatrixParser;

// node_modules/@zxing/library/esm/core/datamatrix/decoder/DataBlock.js
var __values19 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var DataBlock = (
  /** @class */
  function() {
    function DataBlock3(numDataCodewords, codewords) {
      this.numDataCodewords = numDataCodewords;
      this.codewords = codewords;
    }
    DataBlock3.getDataBlocks = function(rawCodewords, version) {
      var e_1, _a2, e_2, _b;
      var ecBlocks = version.getECBlocks();
      var totalBlocks = 0;
      var ecBlockArray = ecBlocks.getECBlocks();
      try {
        for (var ecBlockArray_1 = __values19(ecBlockArray), ecBlockArray_1_1 = ecBlockArray_1.next(); !ecBlockArray_1_1.done; ecBlockArray_1_1 = ecBlockArray_1.next()) {
          var ecBlock = ecBlockArray_1_1.value;
          totalBlocks += ecBlock.getCount();
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (ecBlockArray_1_1 && !ecBlockArray_1_1.done && (_a2 = ecBlockArray_1.return)) _a2.call(ecBlockArray_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      var result = new Array(totalBlocks);
      var numResultBlocks = 0;
      try {
        for (var ecBlockArray_2 = __values19(ecBlockArray), ecBlockArray_2_1 = ecBlockArray_2.next(); !ecBlockArray_2_1.done; ecBlockArray_2_1 = ecBlockArray_2.next()) {
          var ecBlock = ecBlockArray_2_1.value;
          for (var i = 0; i < ecBlock.getCount(); i++) {
            var numDataCodewords = ecBlock.getDataCodewords();
            var numBlockCodewords = ecBlocks.getECCodewords() + numDataCodewords;
            result[numResultBlocks++] = new DataBlock3(numDataCodewords, new Uint8Array(numBlockCodewords));
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (ecBlockArray_2_1 && !ecBlockArray_2_1.done && (_b = ecBlockArray_2.return)) _b.call(ecBlockArray_2);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      var longerBlocksTotalCodewords = result[0].codewords.length;
      var longerBlocksNumDataCodewords = longerBlocksTotalCodewords - ecBlocks.getECCodewords();
      var shorterBlocksNumDataCodewords = longerBlocksNumDataCodewords - 1;
      var rawCodewordsOffset = 0;
      for (var i = 0; i < shorterBlocksNumDataCodewords; i++) {
        for (var j = 0; j < numResultBlocks; j++) {
          result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
        }
      }
      var specialVersion = version.getVersionNumber() === 24;
      var numLongerBlocks = specialVersion ? 8 : numResultBlocks;
      for (var j = 0; j < numLongerBlocks; j++) {
        result[j].codewords[longerBlocksNumDataCodewords - 1] = rawCodewords[rawCodewordsOffset++];
      }
      var max = result[0].codewords.length;
      for (var i = longerBlocksNumDataCodewords; i < max; i++) {
        for (var j = 0; j < numResultBlocks; j++) {
          var jOffset = specialVersion ? (j + 8) % numResultBlocks : j;
          var iOffset = specialVersion && jOffset > 7 ? i - 1 : i;
          result[jOffset].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
        }
      }
      if (rawCodewordsOffset !== rawCodewords.length) {
        throw new IllegalArgumentException_default();
      }
      return result;
    };
    DataBlock3.prototype.getNumDataCodewords = function() {
      return this.numDataCodewords;
    };
    DataBlock3.prototype.getCodewords = function() {
      return this.codewords;
    };
    return DataBlock3;
  }()
);
var DataBlock_default = DataBlock;

// node_modules/@zxing/library/esm/core/common/BitSource.js
var BitSource = (
  /** @class */
  function() {
    function BitSource2(bytes) {
      this.bytes = bytes;
      this.byteOffset = 0;
      this.bitOffset = 0;
    }
    BitSource2.prototype.getBitOffset = function() {
      return this.bitOffset;
    };
    BitSource2.prototype.getByteOffset = function() {
      return this.byteOffset;
    };
    BitSource2.prototype.readBits = function(numBits) {
      if (numBits < 1 || numBits > 32 || numBits > this.available()) {
        throw new IllegalArgumentException_default("" + numBits);
      }
      var result = 0;
      var bitOffset = this.bitOffset;
      var byteOffset = this.byteOffset;
      var bytes = this.bytes;
      if (bitOffset > 0) {
        var bitsLeft = 8 - bitOffset;
        var toRead = numBits < bitsLeft ? numBits : bitsLeft;
        var bitsToNotRead = bitsLeft - toRead;
        var mask = 255 >> 8 - toRead << bitsToNotRead;
        result = (bytes[byteOffset] & mask) >> bitsToNotRead;
        numBits -= toRead;
        bitOffset += toRead;
        if (bitOffset === 8) {
          bitOffset = 0;
          byteOffset++;
        }
      }
      if (numBits > 0) {
        while (numBits >= 8) {
          result = result << 8 | bytes[byteOffset] & 255;
          byteOffset++;
          numBits -= 8;
        }
        if (numBits > 0) {
          var bitsToNotRead = 8 - numBits;
          var mask = 255 >> bitsToNotRead << bitsToNotRead;
          result = result << numBits | (bytes[byteOffset] & mask) >> bitsToNotRead;
          bitOffset += numBits;
        }
      }
      this.bitOffset = bitOffset;
      this.byteOffset = byteOffset;
      return result;
    };
    BitSource2.prototype.available = function() {
      return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
    };
    return BitSource2;
  }()
);
var BitSource_default = BitSource;

// node_modules/@zxing/library/esm/core/datamatrix/decoder/DecodedBitStreamParser.js
var Mode;
(function(Mode5) {
  Mode5[Mode5["PAD_ENCODE"] = 0] = "PAD_ENCODE";
  Mode5[Mode5["ASCII_ENCODE"] = 1] = "ASCII_ENCODE";
  Mode5[Mode5["C40_ENCODE"] = 2] = "C40_ENCODE";
  Mode5[Mode5["TEXT_ENCODE"] = 3] = "TEXT_ENCODE";
  Mode5[Mode5["ANSIX12_ENCODE"] = 4] = "ANSIX12_ENCODE";
  Mode5[Mode5["EDIFACT_ENCODE"] = 5] = "EDIFACT_ENCODE";
  Mode5[Mode5["BASE256_ENCODE"] = 6] = "BASE256_ENCODE";
})(Mode || (Mode = {}));
var DecodedBitStreamParser = (
  /** @class */
  function() {
    function DecodedBitStreamParser4() {
    }
    DecodedBitStreamParser4.decode = function(bytes) {
      var bits = new BitSource_default(bytes);
      var result = new StringBuilder_default();
      var resultTrailer = new StringBuilder_default();
      var byteSegments = new Array();
      var mode = Mode.ASCII_ENCODE;
      do {
        if (mode === Mode.ASCII_ENCODE) {
          mode = this.decodeAsciiSegment(bits, result, resultTrailer);
        } else {
          switch (mode) {
            case Mode.C40_ENCODE:
              this.decodeC40Segment(bits, result);
              break;
            case Mode.TEXT_ENCODE:
              this.decodeTextSegment(bits, result);
              break;
            case Mode.ANSIX12_ENCODE:
              this.decodeAnsiX12Segment(bits, result);
              break;
            case Mode.EDIFACT_ENCODE:
              this.decodeEdifactSegment(bits, result);
              break;
            case Mode.BASE256_ENCODE:
              this.decodeBase256Segment(bits, result, byteSegments);
              break;
            default:
              throw new FormatException_default();
          }
          mode = Mode.ASCII_ENCODE;
        }
      } while (mode !== Mode.PAD_ENCODE && bits.available() > 0);
      if (resultTrailer.length() > 0) {
        result.append(resultTrailer.toString());
      }
      return new DecoderResult_default(bytes, result.toString(), byteSegments.length === 0 ? null : byteSegments, null);
    };
    DecodedBitStreamParser4.decodeAsciiSegment = function(bits, result, resultTrailer) {
      var upperShift = false;
      do {
        var oneByte = bits.readBits(8);
        if (oneByte === 0) {
          throw new FormatException_default();
        } else if (oneByte <= 128) {
          if (upperShift) {
            oneByte += 128;
          }
          result.append(String.fromCharCode(oneByte - 1));
          return Mode.ASCII_ENCODE;
        } else if (oneByte === 129) {
          return Mode.PAD_ENCODE;
        } else if (oneByte <= 229) {
          var value = oneByte - 130;
          if (value < 10) {
            result.append("0");
          }
          result.append("" + value);
        } else {
          switch (oneByte) {
            case 230:
              return Mode.C40_ENCODE;
            case 231:
              return Mode.BASE256_ENCODE;
            case 232:
              result.append(String.fromCharCode(29));
              break;
            case 233:
            case 234:
              break;
            case 235:
              upperShift = true;
              break;
            case 236:
              result.append("[)>05");
              resultTrailer.insert(0, "");
              break;
            case 237:
              result.append("[)>06");
              resultTrailer.insert(0, "");
              break;
            case 238:
              return Mode.ANSIX12_ENCODE;
            case 239:
              return Mode.TEXT_ENCODE;
            case 240:
              return Mode.EDIFACT_ENCODE;
            case 241:
              break;
            default:
              if (oneByte !== 254 || bits.available() !== 0) {
                throw new FormatException_default();
              }
              break;
          }
        }
      } while (bits.available() > 0);
      return Mode.ASCII_ENCODE;
    };
    DecodedBitStreamParser4.decodeC40Segment = function(bits, result) {
      var upperShift = false;
      var cValues = [];
      var shift = 0;
      do {
        if (bits.available() === 8) {
          return;
        }
        var firstByte = bits.readBits(8);
        if (firstByte === 254) {
          return;
        }
        this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
        for (var i = 0; i < 3; i++) {
          var cValue = cValues[i];
          switch (shift) {
            case 0:
              if (cValue < 3) {
                shift = cValue + 1;
              } else if (cValue < this.C40_BASIC_SET_CHARS.length) {
                var c40char = this.C40_BASIC_SET_CHARS[cValue];
                if (upperShift) {
                  result.append(String.fromCharCode(c40char.charCodeAt(0) + 128));
                  upperShift = false;
                } else {
                  result.append(c40char);
                }
              } else {
                throw new FormatException_default();
              }
              break;
            case 1:
              if (upperShift) {
                result.append(String.fromCharCode(cValue + 128));
                upperShift = false;
              } else {
                result.append(String.fromCharCode(cValue));
              }
              shift = 0;
              break;
            case 2:
              if (cValue < this.C40_SHIFT2_SET_CHARS.length) {
                var c40char = this.C40_SHIFT2_SET_CHARS[cValue];
                if (upperShift) {
                  result.append(String.fromCharCode(c40char.charCodeAt(0) + 128));
                  upperShift = false;
                } else {
                  result.append(c40char);
                }
              } else {
                switch (cValue) {
                  case 27:
                    result.append(String.fromCharCode(29));
                    break;
                  case 30:
                    upperShift = true;
                    break;
                  default:
                    throw new FormatException_default();
                }
              }
              shift = 0;
              break;
            case 3:
              if (upperShift) {
                result.append(String.fromCharCode(cValue + 224));
                upperShift = false;
              } else {
                result.append(String.fromCharCode(cValue + 96));
              }
              shift = 0;
              break;
            default:
              throw new FormatException_default();
          }
        }
      } while (bits.available() > 0);
    };
    DecodedBitStreamParser4.decodeTextSegment = function(bits, result) {
      var upperShift = false;
      var cValues = [];
      var shift = 0;
      do {
        if (bits.available() === 8) {
          return;
        }
        var firstByte = bits.readBits(8);
        if (firstByte === 254) {
          return;
        }
        this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
        for (var i = 0; i < 3; i++) {
          var cValue = cValues[i];
          switch (shift) {
            case 0:
              if (cValue < 3) {
                shift = cValue + 1;
              } else if (cValue < this.TEXT_BASIC_SET_CHARS.length) {
                var textChar = this.TEXT_BASIC_SET_CHARS[cValue];
                if (upperShift) {
                  result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                  upperShift = false;
                } else {
                  result.append(textChar);
                }
              } else {
                throw new FormatException_default();
              }
              break;
            case 1:
              if (upperShift) {
                result.append(String.fromCharCode(cValue + 128));
                upperShift = false;
              } else {
                result.append(String.fromCharCode(cValue));
              }
              shift = 0;
              break;
            case 2:
              if (cValue < this.TEXT_SHIFT2_SET_CHARS.length) {
                var textChar = this.TEXT_SHIFT2_SET_CHARS[cValue];
                if (upperShift) {
                  result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                  upperShift = false;
                } else {
                  result.append(textChar);
                }
              } else {
                switch (cValue) {
                  case 27:
                    result.append(String.fromCharCode(29));
                    break;
                  case 30:
                    upperShift = true;
                    break;
                  default:
                    throw new FormatException_default();
                }
              }
              shift = 0;
              break;
            case 3:
              if (cValue < this.TEXT_SHIFT3_SET_CHARS.length) {
                var textChar = this.TEXT_SHIFT3_SET_CHARS[cValue];
                if (upperShift) {
                  result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                  upperShift = false;
                } else {
                  result.append(textChar);
                }
                shift = 0;
              } else {
                throw new FormatException_default();
              }
              break;
            default:
              throw new FormatException_default();
          }
        }
      } while (bits.available() > 0);
    };
    DecodedBitStreamParser4.decodeAnsiX12Segment = function(bits, result) {
      var cValues = [];
      do {
        if (bits.available() === 8) {
          return;
        }
        var firstByte = bits.readBits(8);
        if (firstByte === 254) {
          return;
        }
        this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
        for (var i = 0; i < 3; i++) {
          var cValue = cValues[i];
          switch (cValue) {
            case 0:
              result.append("\r");
              break;
            case 1:
              result.append("*");
              break;
            case 2:
              result.append(">");
              break;
            case 3:
              result.append(" ");
              break;
            default:
              if (cValue < 14) {
                result.append(String.fromCharCode(cValue + 44));
              } else if (cValue < 40) {
                result.append(String.fromCharCode(cValue + 51));
              } else {
                throw new FormatException_default();
              }
              break;
          }
        }
      } while (bits.available() > 0);
    };
    DecodedBitStreamParser4.parseTwoBytes = function(firstByte, secondByte, result) {
      var fullBitValue = (firstByte << 8) + secondByte - 1;
      var temp = Math.floor(fullBitValue / 1600);
      result[0] = temp;
      fullBitValue -= temp * 1600;
      temp = Math.floor(fullBitValue / 40);
      result[1] = temp;
      result[2] = fullBitValue - temp * 40;
    };
    DecodedBitStreamParser4.decodeEdifactSegment = function(bits, result) {
      do {
        if (bits.available() <= 16) {
          return;
        }
        for (var i = 0; i < 4; i++) {
          var edifactValue = bits.readBits(6);
          if (edifactValue === 31) {
            var bitsLeft = 8 - bits.getBitOffset();
            if (bitsLeft !== 8) {
              bits.readBits(bitsLeft);
            }
            return;
          }
          if ((edifactValue & 32) === 0) {
            edifactValue |= 64;
          }
          result.append(String.fromCharCode(edifactValue));
        }
      } while (bits.available() > 0);
    };
    DecodedBitStreamParser4.decodeBase256Segment = function(bits, result, byteSegments) {
      var codewordPosition = 1 + bits.getByteOffset();
      var d1 = this.unrandomize255State(bits.readBits(8), codewordPosition++);
      var count;
      if (d1 === 0) {
        count = bits.available() / 8 | 0;
      } else if (d1 < 250) {
        count = d1;
      } else {
        count = 250 * (d1 - 249) + this.unrandomize255State(bits.readBits(8), codewordPosition++);
      }
      if (count < 0) {
        throw new FormatException_default();
      }
      var bytes = new Uint8Array(count);
      for (var i = 0; i < count; i++) {
        if (bits.available() < 8) {
          throw new FormatException_default();
        }
        bytes[i] = this.unrandomize255State(bits.readBits(8), codewordPosition++);
      }
      byteSegments.push(bytes);
      try {
        result.append(StringEncoding_default.decode(bytes, StringUtils_default.ISO88591));
      } catch (uee) {
        throw new IllegalStateException_default("Platform does not support required encoding: " + uee.message);
      }
    };
    DecodedBitStreamParser4.unrandomize255State = function(randomizedBase256Codeword, base256CodewordPosition) {
      var pseudoRandomNumber = 149 * base256CodewordPosition % 255 + 1;
      var tempVariable = randomizedBase256Codeword - pseudoRandomNumber;
      return tempVariable >= 0 ? tempVariable : tempVariable + 256;
    };
    DecodedBitStreamParser4.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    DecodedBitStreamParser4.C40_SHIFT2_SET_CHARS = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"];
    DecodedBitStreamParser4.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    DecodedBitStreamParser4.TEXT_SHIFT2_SET_CHARS = DecodedBitStreamParser4.C40_SHIFT2_SET_CHARS;
    DecodedBitStreamParser4.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", String.fromCharCode(127)];
    return DecodedBitStreamParser4;
  }()
);
var DecodedBitStreamParser_default = DecodedBitStreamParser;

// node_modules/@zxing/library/esm/core/datamatrix/decoder/Decoder.js
var __values20 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Decoder2 = (
  /** @class */
  function() {
    function Decoder4() {
      this.rsDecoder = new ReedSolomonDecoder_default(GenericGF_default.DATA_MATRIX_FIELD_256);
    }
    Decoder4.prototype.decode = function(bits) {
      var e_1, _a2;
      var parser = new BitMatrixParser_default(bits);
      var version = parser.getVersion();
      var codewords = parser.readCodewords();
      var dataBlocks = DataBlock_default.getDataBlocks(codewords, version);
      var totalBytes = 0;
      try {
        for (var dataBlocks_1 = __values20(dataBlocks), dataBlocks_1_1 = dataBlocks_1.next(); !dataBlocks_1_1.done; dataBlocks_1_1 = dataBlocks_1.next()) {
          var db = dataBlocks_1_1.value;
          totalBytes += db.getNumDataCodewords();
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (dataBlocks_1_1 && !dataBlocks_1_1.done && (_a2 = dataBlocks_1.return)) _a2.call(dataBlocks_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      var resultBytes = new Uint8Array(totalBytes);
      var dataBlocksCount = dataBlocks.length;
      for (var j = 0; j < dataBlocksCount; j++) {
        var dataBlock = dataBlocks[j];
        var codewordBytes = dataBlock.getCodewords();
        var numDataCodewords = dataBlock.getNumDataCodewords();
        this.correctErrors(codewordBytes, numDataCodewords);
        for (var i = 0; i < numDataCodewords; i++) {
          resultBytes[i * dataBlocksCount + j] = codewordBytes[i];
        }
      }
      return DecodedBitStreamParser_default.decode(resultBytes);
    };
    Decoder4.prototype.correctErrors = function(codewordBytes, numDataCodewords) {
      var codewordsInts = new Int32Array(codewordBytes);
      try {
        this.rsDecoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
      } catch (ignored) {
        throw new ChecksumException_default();
      }
      for (var i = 0; i < numDataCodewords; i++) {
        codewordBytes[i] = codewordsInts[i];
      }
    };
    return Decoder4;
  }()
);
var Decoder_default2 = Decoder2;

// node_modules/@zxing/library/esm/core/datamatrix/detector/Detector.js
var Detector2 = (
  /** @class */
  function() {
    function Detector5(image) {
      this.image = image;
      this.rectangleDetector = new WhiteRectangleDetector_default(this.image);
    }
    Detector5.prototype.detect = function() {
      var cornerPoints = this.rectangleDetector.detect();
      var points = this.detectSolid1(cornerPoints);
      points = this.detectSolid2(points);
      points[3] = this.correctTopRight(points);
      if (!points[3]) {
        throw new NotFoundException_default();
      }
      points = this.shiftToModuleCenter(points);
      var topLeft = points[0];
      var bottomLeft = points[1];
      var bottomRight = points[2];
      var topRight = points[3];
      var dimensionTop = this.transitionsBetween(topLeft, topRight) + 1;
      var dimensionRight = this.transitionsBetween(bottomRight, topRight) + 1;
      if ((dimensionTop & 1) === 1) {
        dimensionTop += 1;
      }
      if ((dimensionRight & 1) === 1) {
        dimensionRight += 1;
      }
      if (4 * dimensionTop < 7 * dimensionRight && 4 * dimensionRight < 7 * dimensionTop) {
        dimensionTop = dimensionRight = Math.max(dimensionTop, dimensionRight);
      }
      var bits = Detector5.sampleGrid(this.image, topLeft, bottomLeft, bottomRight, topRight, dimensionTop, dimensionRight);
      return new DetectorResult_default(bits, [topLeft, bottomLeft, bottomRight, topRight]);
    };
    Detector5.shiftPoint = function(point, to, div) {
      var x = (to.getX() - point.getX()) / (div + 1);
      var y = (to.getY() - point.getY()) / (div + 1);
      return new ResultPoint_default(point.getX() + x, point.getY() + y);
    };
    Detector5.moveAway = function(point, fromX, fromY) {
      var x = point.getX();
      var y = point.getY();
      if (x < fromX) {
        x -= 1;
      } else {
        x += 1;
      }
      if (y < fromY) {
        y -= 1;
      } else {
        y += 1;
      }
      return new ResultPoint_default(x, y);
    };
    Detector5.prototype.detectSolid1 = function(cornerPoints) {
      var pointA = cornerPoints[0];
      var pointB = cornerPoints[1];
      var pointC = cornerPoints[3];
      var pointD = cornerPoints[2];
      var trAB = this.transitionsBetween(pointA, pointB);
      var trBC = this.transitionsBetween(pointB, pointC);
      var trCD = this.transitionsBetween(pointC, pointD);
      var trDA = this.transitionsBetween(pointD, pointA);
      var min = trAB;
      var points = [pointD, pointA, pointB, pointC];
      if (min > trBC) {
        min = trBC;
        points[0] = pointA;
        points[1] = pointB;
        points[2] = pointC;
        points[3] = pointD;
      }
      if (min > trCD) {
        min = trCD;
        points[0] = pointB;
        points[1] = pointC;
        points[2] = pointD;
        points[3] = pointA;
      }
      if (min > trDA) {
        points[0] = pointC;
        points[1] = pointD;
        points[2] = pointA;
        points[3] = pointB;
      }
      return points;
    };
    Detector5.prototype.detectSolid2 = function(points) {
      var pointA = points[0];
      var pointB = points[1];
      var pointC = points[2];
      var pointD = points[3];
      var tr = this.transitionsBetween(pointA, pointD);
      var pointBs = Detector5.shiftPoint(pointB, pointC, (tr + 1) * 4);
      var pointCs = Detector5.shiftPoint(pointC, pointB, (tr + 1) * 4);
      var trBA = this.transitionsBetween(pointBs, pointA);
      var trCD = this.transitionsBetween(pointCs, pointD);
      if (trBA < trCD) {
        points[0] = pointA;
        points[1] = pointB;
        points[2] = pointC;
        points[3] = pointD;
      } else {
        points[0] = pointB;
        points[1] = pointC;
        points[2] = pointD;
        points[3] = pointA;
      }
      return points;
    };
    Detector5.prototype.correctTopRight = function(points) {
      var pointA = points[0];
      var pointB = points[1];
      var pointC = points[2];
      var pointD = points[3];
      var trTop = this.transitionsBetween(pointA, pointD);
      var trRight = this.transitionsBetween(pointB, pointD);
      var pointAs = Detector5.shiftPoint(pointA, pointB, (trRight + 1) * 4);
      var pointCs = Detector5.shiftPoint(pointC, pointB, (trTop + 1) * 4);
      trTop = this.transitionsBetween(pointAs, pointD);
      trRight = this.transitionsBetween(pointCs, pointD);
      var candidate1 = new ResultPoint_default(pointD.getX() + (pointC.getX() - pointB.getX()) / (trTop + 1), pointD.getY() + (pointC.getY() - pointB.getY()) / (trTop + 1));
      var candidate2 = new ResultPoint_default(pointD.getX() + (pointA.getX() - pointB.getX()) / (trRight + 1), pointD.getY() + (pointA.getY() - pointB.getY()) / (trRight + 1));
      if (!this.isValid(candidate1)) {
        if (this.isValid(candidate2)) {
          return candidate2;
        }
        return null;
      }
      if (!this.isValid(candidate2)) {
        return candidate1;
      }
      var sumc1 = this.transitionsBetween(pointAs, candidate1) + this.transitionsBetween(pointCs, candidate1);
      var sumc2 = this.transitionsBetween(pointAs, candidate2) + this.transitionsBetween(pointCs, candidate2);
      if (sumc1 > sumc2) {
        return candidate1;
      } else {
        return candidate2;
      }
    };
    Detector5.prototype.shiftToModuleCenter = function(points) {
      var pointA = points[0];
      var pointB = points[1];
      var pointC = points[2];
      var pointD = points[3];
      var dimH = this.transitionsBetween(pointA, pointD) + 1;
      var dimV = this.transitionsBetween(pointC, pointD) + 1;
      var pointAs = Detector5.shiftPoint(pointA, pointB, dimV * 4);
      var pointCs = Detector5.shiftPoint(pointC, pointB, dimH * 4);
      dimH = this.transitionsBetween(pointAs, pointD) + 1;
      dimV = this.transitionsBetween(pointCs, pointD) + 1;
      if ((dimH & 1) === 1) {
        dimH += 1;
      }
      if ((dimV & 1) === 1) {
        dimV += 1;
      }
      var centerX = (pointA.getX() + pointB.getX() + pointC.getX() + pointD.getX()) / 4;
      var centerY = (pointA.getY() + pointB.getY() + pointC.getY() + pointD.getY()) / 4;
      pointA = Detector5.moveAway(pointA, centerX, centerY);
      pointB = Detector5.moveAway(pointB, centerX, centerY);
      pointC = Detector5.moveAway(pointC, centerX, centerY);
      pointD = Detector5.moveAway(pointD, centerX, centerY);
      var pointBs;
      var pointDs;
      pointAs = Detector5.shiftPoint(pointA, pointB, dimV * 4);
      pointAs = Detector5.shiftPoint(pointAs, pointD, dimH * 4);
      pointBs = Detector5.shiftPoint(pointB, pointA, dimV * 4);
      pointBs = Detector5.shiftPoint(pointBs, pointC, dimH * 4);
      pointCs = Detector5.shiftPoint(pointC, pointD, dimV * 4);
      pointCs = Detector5.shiftPoint(pointCs, pointB, dimH * 4);
      pointDs = Detector5.shiftPoint(pointD, pointC, dimV * 4);
      pointDs = Detector5.shiftPoint(pointDs, pointA, dimH * 4);
      return [pointAs, pointBs, pointCs, pointDs];
    };
    Detector5.prototype.isValid = function(p) {
      return p.getX() >= 0 && p.getX() < this.image.getWidth() && p.getY() > 0 && p.getY() < this.image.getHeight();
    };
    Detector5.sampleGrid = function(image, topLeft, bottomLeft, bottomRight, topRight, dimensionX, dimensionY) {
      var sampler = GridSamplerInstance_default.getInstance();
      return sampler.sampleGrid(image, dimensionX, dimensionY, 0.5, 0.5, dimensionX - 0.5, 0.5, dimensionX - 0.5, dimensionY - 0.5, 0.5, dimensionY - 0.5, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRight.getX(), bottomRight.getY(), bottomLeft.getX(), bottomLeft.getY());
    };
    Detector5.prototype.transitionsBetween = function(from, to) {
      var fromX = Math.trunc(from.getX());
      var fromY = Math.trunc(from.getY());
      var toX = Math.trunc(to.getX());
      var toY = Math.trunc(to.getY());
      var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
      if (steep) {
        var temp = fromX;
        fromX = fromY;
        fromY = temp;
        temp = toX;
        toX = toY;
        toY = temp;
      }
      var dx = Math.abs(toX - fromX);
      var dy = Math.abs(toY - fromY);
      var error = -dx / 2;
      var ystep = fromY < toY ? 1 : -1;
      var xstep = fromX < toX ? 1 : -1;
      var transitions = 0;
      var inBlack = this.image.get(steep ? fromY : fromX, steep ? fromX : fromY);
      for (var x = fromX, y = fromY; x !== toX; x += xstep) {
        var isBlack = this.image.get(steep ? y : x, steep ? x : y);
        if (isBlack !== inBlack) {
          transitions++;
          inBlack = isBlack;
        }
        error += dy;
        if (error > 0) {
          if (y === toY) {
            break;
          }
          y += ystep;
          error -= dx;
        }
      }
      return transitions;
    };
    return Detector5;
  }()
);
var Detector_default2 = Detector2;

// node_modules/@zxing/library/esm/core/datamatrix/DataMatrixReader.js
var DataMatrixReader = (
  /** @class */
  function() {
    function DataMatrixReader2() {
      this.decoder = new Decoder_default2();
    }
    DataMatrixReader2.prototype.decode = function(image, hints) {
      if (hints === void 0) {
        hints = null;
      }
      var decoderResult;
      var points;
      if (hints != null && hints.has(DecodeHintType_default.PURE_BARCODE)) {
        var bits = DataMatrixReader2.extractPureBits(image.getBlackMatrix());
        decoderResult = this.decoder.decode(bits);
        points = DataMatrixReader2.NO_POINTS;
      } else {
        var detectorResult = new Detector_default2(image.getBlackMatrix()).detect();
        decoderResult = this.decoder.decode(detectorResult.getBits());
        points = detectorResult.getPoints();
      }
      var rawBytes = decoderResult.getRawBytes();
      var result = new Result_default(decoderResult.getText(), rawBytes, 8 * rawBytes.length, points, BarcodeFormat_default.DATA_MATRIX, System_default.currentTimeMillis());
      var byteSegments = decoderResult.getByteSegments();
      if (byteSegments != null) {
        result.putMetadata(ResultMetadataType_default.BYTE_SEGMENTS, byteSegments);
      }
      var ecLevel = decoderResult.getECLevel();
      if (ecLevel != null) {
        result.putMetadata(ResultMetadataType_default.ERROR_CORRECTION_LEVEL, ecLevel);
      }
      return result;
    };
    DataMatrixReader2.prototype.reset = function() {
    };
    DataMatrixReader2.extractPureBits = function(image) {
      var leftTopBlack = image.getTopLeftOnBit();
      var rightBottomBlack = image.getBottomRightOnBit();
      if (leftTopBlack == null || rightBottomBlack == null) {
        throw new NotFoundException_default();
      }
      var moduleSize = this.moduleSize(leftTopBlack, image);
      var top = leftTopBlack[1];
      var bottom = rightBottomBlack[1];
      var left = leftTopBlack[0];
      var right = rightBottomBlack[0];
      var matrixWidth = (right - left + 1) / moduleSize;
      var matrixHeight = (bottom - top + 1) / moduleSize;
      if (matrixWidth <= 0 || matrixHeight <= 0) {
        throw new NotFoundException_default();
      }
      var nudge = moduleSize / 2;
      top += nudge;
      left += nudge;
      var bits = new BitMatrix_default(matrixWidth, matrixHeight);
      for (var y = 0; y < matrixHeight; y++) {
        var iOffset = top + y * moduleSize;
        for (var x = 0; x < matrixWidth; x++) {
          if (image.get(left + x * moduleSize, iOffset)) {
            bits.set(x, y);
          }
        }
      }
      return bits;
    };
    DataMatrixReader2.moduleSize = function(leftTopBlack, image) {
      var width = image.getWidth();
      var x = leftTopBlack[0];
      var y = leftTopBlack[1];
      while (x < width && image.get(x, y)) {
        x++;
      }
      if (x === width) {
        throw new NotFoundException_default();
      }
      var moduleSize = x - leftTopBlack[0];
      if (moduleSize === 0) {
        throw new NotFoundException_default();
      }
      return moduleSize;
    };
    DataMatrixReader2.NO_POINTS = [];
    return DataMatrixReader2;
  }()
);
var DataMatrixReader_default = DataMatrixReader;

// node_modules/@zxing/library/esm/browser/BrowserDatamatrixCodeReader.js
var __extends53 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BrowserDatamatrixCodeReader = (
  /** @class */
  function(_super) {
    __extends53(BrowserDatamatrixCodeReader2, _super);
    function BrowserDatamatrixCodeReader2(timeBetweenScansMillis) {
      if (timeBetweenScansMillis === void 0) {
        timeBetweenScansMillis = 500;
      }
      return _super.call(this, new DataMatrixReader_default(), timeBetweenScansMillis) || this;
    }
    return BrowserDatamatrixCodeReader2;
  }(BrowserCodeReader)
);

// node_modules/@zxing/library/esm/core/qrcode/decoder/ErrorCorrectionLevel.js
var ErrorCorrectionLevelValues;
(function(ErrorCorrectionLevelValues2) {
  ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["L"] = 0] = "L";
  ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["M"] = 1] = "M";
  ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["Q"] = 2] = "Q";
  ErrorCorrectionLevelValues2[ErrorCorrectionLevelValues2["H"] = 3] = "H";
})(ErrorCorrectionLevelValues || (ErrorCorrectionLevelValues = {}));
var ErrorCorrectionLevel = (
  /** @class */
  function() {
    function ErrorCorrectionLevel2(value, stringValue, bits) {
      this.value = value;
      this.stringValue = stringValue;
      this.bits = bits;
      ErrorCorrectionLevel2.FOR_BITS.set(bits, this);
      ErrorCorrectionLevel2.FOR_VALUE.set(value, this);
    }
    ErrorCorrectionLevel2.prototype.getValue = function() {
      return this.value;
    };
    ErrorCorrectionLevel2.prototype.getBits = function() {
      return this.bits;
    };
    ErrorCorrectionLevel2.fromString = function(s) {
      switch (s) {
        case "L":
          return ErrorCorrectionLevel2.L;
        case "M":
          return ErrorCorrectionLevel2.M;
        case "Q":
          return ErrorCorrectionLevel2.Q;
        case "H":
          return ErrorCorrectionLevel2.H;
        default:
          throw new ArgumentException_default(s + "not available");
      }
    };
    ErrorCorrectionLevel2.prototype.toString = function() {
      return this.stringValue;
    };
    ErrorCorrectionLevel2.prototype.equals = function(o) {
      if (!(o instanceof ErrorCorrectionLevel2)) {
        return false;
      }
      var other = o;
      return this.value === other.value;
    };
    ErrorCorrectionLevel2.forBits = function(bits) {
      if (bits < 0 || bits >= ErrorCorrectionLevel2.FOR_BITS.size) {
        throw new IllegalArgumentException_default();
      }
      return ErrorCorrectionLevel2.FOR_BITS.get(bits);
    };
    ErrorCorrectionLevel2.FOR_BITS = /* @__PURE__ */ new Map();
    ErrorCorrectionLevel2.FOR_VALUE = /* @__PURE__ */ new Map();
    ErrorCorrectionLevel2.L = new ErrorCorrectionLevel2(ErrorCorrectionLevelValues.L, "L", 1);
    ErrorCorrectionLevel2.M = new ErrorCorrectionLevel2(ErrorCorrectionLevelValues.M, "M", 0);
    ErrorCorrectionLevel2.Q = new ErrorCorrectionLevel2(ErrorCorrectionLevelValues.Q, "Q", 3);
    ErrorCorrectionLevel2.H = new ErrorCorrectionLevel2(ErrorCorrectionLevelValues.H, "H", 2);
    return ErrorCorrectionLevel2;
  }()
);
var ErrorCorrectionLevel_default = ErrorCorrectionLevel;

// node_modules/@zxing/library/esm/core/qrcode/decoder/FormatInformation.js
var __values21 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var FormatInformation = (
  /** @class */
  function() {
    function FormatInformation2(formatInfo) {
      this.errorCorrectionLevel = ErrorCorrectionLevel_default.forBits(formatInfo >> 3 & 3);
      this.dataMask = /*(byte) */
      formatInfo & 7;
    }
    FormatInformation2.numBitsDiffering = function(a, b) {
      return Integer_default.bitCount(a ^ b);
    };
    FormatInformation2.decodeFormatInformation = function(maskedFormatInfo1, maskedFormatInfo2) {
      var formatInfo = FormatInformation2.doDecodeFormatInformation(maskedFormatInfo1, maskedFormatInfo2);
      if (formatInfo !== null) {
        return formatInfo;
      }
      return FormatInformation2.doDecodeFormatInformation(maskedFormatInfo1 ^ FormatInformation2.FORMAT_INFO_MASK_QR, maskedFormatInfo2 ^ FormatInformation2.FORMAT_INFO_MASK_QR);
    };
    FormatInformation2.doDecodeFormatInformation = function(maskedFormatInfo1, maskedFormatInfo2) {
      var e_1, _a2;
      var bestDifference = Number.MAX_SAFE_INTEGER;
      var bestFormatInfo = 0;
      try {
        for (var _b = __values21(FormatInformation2.FORMAT_INFO_DECODE_LOOKUP), _c = _b.next(); !_c.done; _c = _b.next()) {
          var decodeInfo = _c.value;
          var targetInfo = decodeInfo[0];
          if (targetInfo === maskedFormatInfo1 || targetInfo === maskedFormatInfo2) {
            return new FormatInformation2(decodeInfo[1]);
          }
          var bitsDifference = FormatInformation2.numBitsDiffering(maskedFormatInfo1, targetInfo);
          if (bitsDifference < bestDifference) {
            bestFormatInfo = decodeInfo[1];
            bestDifference = bitsDifference;
          }
          if (maskedFormatInfo1 !== maskedFormatInfo2) {
            bitsDifference = FormatInformation2.numBitsDiffering(maskedFormatInfo2, targetInfo);
            if (bitsDifference < bestDifference) {
              bestFormatInfo = decodeInfo[1];
              bestDifference = bitsDifference;
            }
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      if (bestDifference <= 3) {
        return new FormatInformation2(bestFormatInfo);
      }
      return null;
    };
    FormatInformation2.prototype.getErrorCorrectionLevel = function() {
      return this.errorCorrectionLevel;
    };
    FormatInformation2.prototype.getDataMask = function() {
      return this.dataMask;
    };
    FormatInformation2.prototype.hashCode = function() {
      return this.errorCorrectionLevel.getBits() << 3 | this.dataMask;
    };
    FormatInformation2.prototype.equals = function(o) {
      if (!(o instanceof FormatInformation2)) {
        return false;
      }
      var other = o;
      return this.errorCorrectionLevel === other.errorCorrectionLevel && this.dataMask === other.dataMask;
    };
    FormatInformation2.FORMAT_INFO_MASK_QR = 21522;
    FormatInformation2.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])];
    return FormatInformation2;
  }()
);
var FormatInformation_default = FormatInformation;

// node_modules/@zxing/library/esm/core/qrcode/decoder/ECBlocks.js
var __values22 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ECBlocks2 = (
  /** @class */
  function() {
    function ECBlocks3(ecCodewordsPerBlock) {
      var ecBlocks = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        ecBlocks[_i - 1] = arguments[_i];
      }
      this.ecCodewordsPerBlock = ecCodewordsPerBlock;
      this.ecBlocks = ecBlocks;
    }
    ECBlocks3.prototype.getECCodewordsPerBlock = function() {
      return this.ecCodewordsPerBlock;
    };
    ECBlocks3.prototype.getNumBlocks = function() {
      var e_1, _a2;
      var total = 0;
      var ecBlocks = this.ecBlocks;
      try {
        for (var ecBlocks_1 = __values22(ecBlocks), ecBlocks_1_1 = ecBlocks_1.next(); !ecBlocks_1_1.done; ecBlocks_1_1 = ecBlocks_1.next()) {
          var ecBlock = ecBlocks_1_1.value;
          total += ecBlock.getCount();
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (ecBlocks_1_1 && !ecBlocks_1_1.done && (_a2 = ecBlocks_1.return)) _a2.call(ecBlocks_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return total;
    };
    ECBlocks3.prototype.getTotalECCodewords = function() {
      return this.ecCodewordsPerBlock * this.getNumBlocks();
    };
    ECBlocks3.prototype.getECBlocks = function() {
      return this.ecBlocks;
    };
    return ECBlocks3;
  }()
);
var ECBlocks_default = ECBlocks2;

// node_modules/@zxing/library/esm/core/qrcode/decoder/ECB.js
var ECB2 = (
  /** @class */
  function() {
    function ECB3(count, dataCodewords) {
      this.count = count;
      this.dataCodewords = dataCodewords;
    }
    ECB3.prototype.getCount = function() {
      return this.count;
    };
    ECB3.prototype.getDataCodewords = function() {
      return this.dataCodewords;
    };
    return ECB3;
  }()
);
var ECB_default = ECB2;

// node_modules/@zxing/library/esm/core/qrcode/decoder/Version.js
var __values23 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Version2 = (
  /** @class */
  function() {
    function Version3(versionNumber, alignmentPatternCenters) {
      var e_1, _a2;
      var ecBlocks = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        ecBlocks[_i - 2] = arguments[_i];
      }
      this.versionNumber = versionNumber;
      this.alignmentPatternCenters = alignmentPatternCenters;
      this.ecBlocks = ecBlocks;
      var total = 0;
      var ecCodewords = ecBlocks[0].getECCodewordsPerBlock();
      var ecbArray = ecBlocks[0].getECBlocks();
      try {
        for (var ecbArray_1 = __values23(ecbArray), ecbArray_1_1 = ecbArray_1.next(); !ecbArray_1_1.done; ecbArray_1_1 = ecbArray_1.next()) {
          var ecBlock = ecbArray_1_1.value;
          total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (ecbArray_1_1 && !ecbArray_1_1.done && (_a2 = ecbArray_1.return)) _a2.call(ecbArray_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      this.totalCodewords = total;
    }
    Version3.prototype.getVersionNumber = function() {
      return this.versionNumber;
    };
    Version3.prototype.getAlignmentPatternCenters = function() {
      return this.alignmentPatternCenters;
    };
    Version3.prototype.getTotalCodewords = function() {
      return this.totalCodewords;
    };
    Version3.prototype.getDimensionForVersion = function() {
      return 17 + 4 * this.versionNumber;
    };
    Version3.prototype.getECBlocksForLevel = function(ecLevel) {
      return this.ecBlocks[ecLevel.getValue()];
    };
    Version3.getProvisionalVersionForDimension = function(dimension) {
      if (dimension % 4 !== 1) {
        throw new FormatException_default();
      }
      try {
        return this.getVersionForNumber((dimension - 17) / 4);
      } catch (ignored) {
        throw new FormatException_default();
      }
    };
    Version3.getVersionForNumber = function(versionNumber) {
      if (versionNumber < 1 || versionNumber > 40) {
        throw new IllegalArgumentException_default();
      }
      return Version3.VERSIONS[versionNumber - 1];
    };
    Version3.decodeVersionInformation = function(versionBits) {
      var bestDifference = Number.MAX_SAFE_INTEGER;
      var bestVersion = 0;
      for (var i = 0; i < Version3.VERSION_DECODE_INFO.length; i++) {
        var targetVersion = Version3.VERSION_DECODE_INFO[i];
        if (targetVersion === versionBits) {
          return Version3.getVersionForNumber(i + 7);
        }
        var bitsDifference = FormatInformation_default.numBitsDiffering(versionBits, targetVersion);
        if (bitsDifference < bestDifference) {
          bestVersion = i + 7;
          bestDifference = bitsDifference;
        }
      }
      if (bestDifference <= 3) {
        return Version3.getVersionForNumber(bestVersion);
      }
      return null;
    };
    Version3.prototype.buildFunctionPattern = function() {
      var dimension = this.getDimensionForVersion();
      var bitMatrix = new BitMatrix_default(dimension);
      bitMatrix.setRegion(0, 0, 9, 9);
      bitMatrix.setRegion(dimension - 8, 0, 8, 9);
      bitMatrix.setRegion(0, dimension - 8, 9, 8);
      var max = this.alignmentPatternCenters.length;
      for (var x = 0; x < max; x++) {
        var i = this.alignmentPatternCenters[x] - 2;
        for (var y = 0; y < max; y++) {
          if (x === 0 && (y === 0 || y === max - 1) || x === max - 1 && y === 0) {
            continue;
          }
          bitMatrix.setRegion(this.alignmentPatternCenters[y] - 2, i, 5, 5);
        }
      }
      bitMatrix.setRegion(6, 9, 1, dimension - 17);
      bitMatrix.setRegion(9, 6, dimension - 17, 1);
      if (this.versionNumber > 6) {
        bitMatrix.setRegion(dimension - 11, 0, 3, 6);
        bitMatrix.setRegion(0, dimension - 11, 6, 3);
      }
      return bitMatrix;
    };
    Version3.prototype.toString = function() {
      return "" + this.versionNumber;
    };
    Version3.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]);
    Version3.VERSIONS = [new Version3(1, new Int32Array(0), new ECBlocks_default(7, new ECB_default(1, 19)), new ECBlocks_default(10, new ECB_default(1, 16)), new ECBlocks_default(13, new ECB_default(1, 13)), new ECBlocks_default(17, new ECB_default(1, 9))), new Version3(2, Int32Array.from([6, 18]), new ECBlocks_default(10, new ECB_default(1, 34)), new ECBlocks_default(16, new ECB_default(1, 28)), new ECBlocks_default(22, new ECB_default(1, 22)), new ECBlocks_default(28, new ECB_default(1, 16))), new Version3(3, Int32Array.from([6, 22]), new ECBlocks_default(15, new ECB_default(1, 55)), new ECBlocks_default(26, new ECB_default(1, 44)), new ECBlocks_default(18, new ECB_default(2, 17)), new ECBlocks_default(22, new ECB_default(2, 13))), new Version3(4, Int32Array.from([6, 26]), new ECBlocks_default(20, new ECB_default(1, 80)), new ECBlocks_default(18, new ECB_default(2, 32)), new ECBlocks_default(26, new ECB_default(2, 24)), new ECBlocks_default(16, new ECB_default(4, 9))), new Version3(5, Int32Array.from([6, 30]), new ECBlocks_default(26, new ECB_default(1, 108)), new ECBlocks_default(24, new ECB_default(2, 43)), new ECBlocks_default(18, new ECB_default(2, 15), new ECB_default(2, 16)), new ECBlocks_default(22, new ECB_default(2, 11), new ECB_default(2, 12))), new Version3(6, Int32Array.from([6, 34]), new ECBlocks_default(18, new ECB_default(2, 68)), new ECBlocks_default(16, new ECB_default(4, 27)), new ECBlocks_default(24, new ECB_default(4, 19)), new ECBlocks_default(28, new ECB_default(4, 15))), new Version3(7, Int32Array.from([6, 22, 38]), new ECBlocks_default(20, new ECB_default(2, 78)), new ECBlocks_default(18, new ECB_default(4, 31)), new ECBlocks_default(18, new ECB_default(2, 14), new ECB_default(4, 15)), new ECBlocks_default(26, new ECB_default(4, 13), new ECB_default(1, 14))), new Version3(8, Int32Array.from([6, 24, 42]), new ECBlocks_default(24, new ECB_default(2, 97)), new ECBlocks_default(22, new ECB_default(2, 38), new ECB_default(2, 39)), new ECBlocks_default(22, new ECB_default(4, 18), new ECB_default(2, 19)), new ECBlocks_default(26, new ECB_default(4, 14), new ECB_default(2, 15))), new Version3(9, Int32Array.from([6, 26, 46]), new ECBlocks_default(30, new ECB_default(2, 116)), new ECBlocks_default(22, new ECB_default(3, 36), new ECB_default(2, 37)), new ECBlocks_default(20, new ECB_default(4, 16), new ECB_default(4, 17)), new ECBlocks_default(24, new ECB_default(4, 12), new ECB_default(4, 13))), new Version3(10, Int32Array.from([6, 28, 50]), new ECBlocks_default(18, new ECB_default(2, 68), new ECB_default(2, 69)), new ECBlocks_default(26, new ECB_default(4, 43), new ECB_default(1, 44)), new ECBlocks_default(24, new ECB_default(6, 19), new ECB_default(2, 20)), new ECBlocks_default(28, new ECB_default(6, 15), new ECB_default(2, 16))), new Version3(11, Int32Array.from([6, 30, 54]), new ECBlocks_default(20, new ECB_default(4, 81)), new ECBlocks_default(30, new ECB_default(1, 50), new ECB_default(4, 51)), new ECBlocks_default(28, new ECB_default(4, 22), new ECB_default(4, 23)), new ECBlocks_default(24, new ECB_default(3, 12), new ECB_default(8, 13))), new Version3(12, Int32Array.from([6, 32, 58]), new ECBlocks_default(24, new ECB_default(2, 92), new ECB_default(2, 93)), new ECBlocks_default(22, new ECB_default(6, 36), new ECB_default(2, 37)), new ECBlocks_default(26, new ECB_default(4, 20), new ECB_default(6, 21)), new ECBlocks_default(28, new ECB_default(7, 14), new ECB_default(4, 15))), new Version3(13, Int32Array.from([6, 34, 62]), new ECBlocks_default(26, new ECB_default(4, 107)), new ECBlocks_default(22, new ECB_default(8, 37), new ECB_default(1, 38)), new ECBlocks_default(24, new ECB_default(8, 20), new ECB_default(4, 21)), new ECBlocks_default(22, new ECB_default(12, 11), new ECB_default(4, 12))), new Version3(14, Int32Array.from([6, 26, 46, 66]), new ECBlocks_default(30, new ECB_default(3, 115), new ECB_default(1, 116)), new ECBlocks_default(24, new ECB_default(4, 40), new ECB_default(5, 41)), new ECBlocks_default(20, new ECB_default(11, 16), new ECB_default(5, 17)), new ECBlocks_default(24, new ECB_default(11, 12), new ECB_default(5, 13))), new Version3(15, Int32Array.from([6, 26, 48, 70]), new ECBlocks_default(22, new ECB_default(5, 87), new ECB_default(1, 88)), new ECBlocks_default(24, new ECB_default(5, 41), new ECB_default(5, 42)), new ECBlocks_default(30, new ECB_default(5, 24), new ECB_default(7, 25)), new ECBlocks_default(24, new ECB_default(11, 12), new ECB_default(7, 13))), new Version3(16, Int32Array.from([6, 26, 50, 74]), new ECBlocks_default(24, new ECB_default(5, 98), new ECB_default(1, 99)), new ECBlocks_default(28, new ECB_default(7, 45), new ECB_default(3, 46)), new ECBlocks_default(24, new ECB_default(15, 19), new ECB_default(2, 20)), new ECBlocks_default(30, new ECB_default(3, 15), new ECB_default(13, 16))), new Version3(17, Int32Array.from([6, 30, 54, 78]), new ECBlocks_default(28, new ECB_default(1, 107), new ECB_default(5, 108)), new ECBlocks_default(28, new ECB_default(10, 46), new ECB_default(1, 47)), new ECBlocks_default(28, new ECB_default(1, 22), new ECB_default(15, 23)), new ECBlocks_default(28, new ECB_default(2, 14), new ECB_default(17, 15))), new Version3(18, Int32Array.from([6, 30, 56, 82]), new ECBlocks_default(30, new ECB_default(5, 120), new ECB_default(1, 121)), new ECBlocks_default(26, new ECB_default(9, 43), new ECB_default(4, 44)), new ECBlocks_default(28, new ECB_default(17, 22), new ECB_default(1, 23)), new ECBlocks_default(28, new ECB_default(2, 14), new ECB_default(19, 15))), new Version3(19, Int32Array.from([6, 30, 58, 86]), new ECBlocks_default(28, new ECB_default(3, 113), new ECB_default(4, 114)), new ECBlocks_default(26, new ECB_default(3, 44), new ECB_default(11, 45)), new ECBlocks_default(26, new ECB_default(17, 21), new ECB_default(4, 22)), new ECBlocks_default(26, new ECB_default(9, 13), new ECB_default(16, 14))), new Version3(20, Int32Array.from([6, 34, 62, 90]), new ECBlocks_default(28, new ECB_default(3, 107), new ECB_default(5, 108)), new ECBlocks_default(26, new ECB_default(3, 41), new ECB_default(13, 42)), new ECBlocks_default(30, new ECB_default(15, 24), new ECB_default(5, 25)), new ECBlocks_default(28, new ECB_default(15, 15), new ECB_default(10, 16))), new Version3(21, Int32Array.from([6, 28, 50, 72, 94]), new ECBlocks_default(28, new ECB_default(4, 116), new ECB_default(4, 117)), new ECBlocks_default(26, new ECB_default(17, 42)), new ECBlocks_default(28, new ECB_default(17, 22), new ECB_default(6, 23)), new ECBlocks_default(30, new ECB_default(19, 16), new ECB_default(6, 17))), new Version3(22, Int32Array.from([6, 26, 50, 74, 98]), new ECBlocks_default(28, new ECB_default(2, 111), new ECB_default(7, 112)), new ECBlocks_default(28, new ECB_default(17, 46)), new ECBlocks_default(30, new ECB_default(7, 24), new ECB_default(16, 25)), new ECBlocks_default(24, new ECB_default(34, 13))), new Version3(23, Int32Array.from([6, 30, 54, 78, 102]), new ECBlocks_default(30, new ECB_default(4, 121), new ECB_default(5, 122)), new ECBlocks_default(28, new ECB_default(4, 47), new ECB_default(14, 48)), new ECBlocks_default(30, new ECB_default(11, 24), new ECB_default(14, 25)), new ECBlocks_default(30, new ECB_default(16, 15), new ECB_default(14, 16))), new Version3(24, Int32Array.from([6, 28, 54, 80, 106]), new ECBlocks_default(30, new ECB_default(6, 117), new ECB_default(4, 118)), new ECBlocks_default(28, new ECB_default(6, 45), new ECB_default(14, 46)), new ECBlocks_default(30, new ECB_default(11, 24), new ECB_default(16, 25)), new ECBlocks_default(30, new ECB_default(30, 16), new ECB_default(2, 17))), new Version3(25, Int32Array.from([6, 32, 58, 84, 110]), new ECBlocks_default(26, new ECB_default(8, 106), new ECB_default(4, 107)), new ECBlocks_default(28, new ECB_default(8, 47), new ECB_default(13, 48)), new ECBlocks_default(30, new ECB_default(7, 24), new ECB_default(22, 25)), new ECBlocks_default(30, new ECB_default(22, 15), new ECB_default(13, 16))), new Version3(26, Int32Array.from([6, 30, 58, 86, 114]), new ECBlocks_default(28, new ECB_default(10, 114), new ECB_default(2, 115)), new ECBlocks_default(28, new ECB_default(19, 46), new ECB_default(4, 47)), new ECBlocks_default(28, new ECB_default(28, 22), new ECB_default(6, 23)), new ECBlocks_default(30, new ECB_default(33, 16), new ECB_default(4, 17))), new Version3(27, Int32Array.from([6, 34, 62, 90, 118]), new ECBlocks_default(30, new ECB_default(8, 122), new ECB_default(4, 123)), new ECBlocks_default(28, new ECB_default(22, 45), new ECB_default(3, 46)), new ECBlocks_default(30, new ECB_default(8, 23), new ECB_default(26, 24)), new ECBlocks_default(30, new ECB_default(12, 15), new ECB_default(28, 16))), new Version3(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new ECBlocks_default(30, new ECB_default(3, 117), new ECB_default(10, 118)), new ECBlocks_default(28, new ECB_default(3, 45), new ECB_default(23, 46)), new ECBlocks_default(30, new ECB_default(4, 24), new ECB_default(31, 25)), new ECBlocks_default(30, new ECB_default(11, 15), new ECB_default(31, 16))), new Version3(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new ECBlocks_default(30, new ECB_default(7, 116), new ECB_default(7, 117)), new ECBlocks_default(28, new ECB_default(21, 45), new ECB_default(7, 46)), new ECBlocks_default(30, new ECB_default(1, 23), new ECB_default(37, 24)), new ECBlocks_default(30, new ECB_default(19, 15), new ECB_default(26, 16))), new Version3(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new ECBlocks_default(30, new ECB_default(5, 115), new ECB_default(10, 116)), new ECBlocks_default(28, new ECB_default(19, 47), new ECB_default(10, 48)), new ECBlocks_default(30, new ECB_default(15, 24), new ECB_default(25, 25)), new ECBlocks_default(30, new ECB_default(23, 15), new ECB_default(25, 16))), new Version3(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new ECBlocks_default(30, new ECB_default(13, 115), new ECB_default(3, 116)), new ECBlocks_default(28, new ECB_default(2, 46), new ECB_default(29, 47)), new ECBlocks_default(30, new ECB_default(42, 24), new ECB_default(1, 25)), new ECBlocks_default(30, new ECB_default(23, 15), new ECB_default(28, 16))), new Version3(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new ECBlocks_default(30, new ECB_default(17, 115)), new ECBlocks_default(28, new ECB_default(10, 46), new ECB_default(23, 47)), new ECBlocks_default(30, new ECB_default(10, 24), new ECB_default(35, 25)), new ECBlocks_default(30, new ECB_default(19, 15), new ECB_default(35, 16))), new Version3(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new ECBlocks_default(30, new ECB_default(17, 115), new ECB_default(1, 116)), new ECBlocks_default(28, new ECB_default(14, 46), new ECB_default(21, 47)), new ECBlocks_default(30, new ECB_default(29, 24), new ECB_default(19, 25)), new ECBlocks_default(30, new ECB_default(11, 15), new ECB_default(46, 16))), new Version3(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new ECBlocks_default(30, new ECB_default(13, 115), new ECB_default(6, 116)), new ECBlocks_default(28, new ECB_default(14, 46), new ECB_default(23, 47)), new ECBlocks_default(30, new ECB_default(44, 24), new ECB_default(7, 25)), new ECBlocks_default(30, new ECB_default(59, 16), new ECB_default(1, 17))), new Version3(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new ECBlocks_default(30, new ECB_default(12, 121), new ECB_default(7, 122)), new ECBlocks_default(28, new ECB_default(12, 47), new ECB_default(26, 48)), new ECBlocks_default(30, new ECB_default(39, 24), new ECB_default(14, 25)), new ECBlocks_default(30, new ECB_default(22, 15), new ECB_default(41, 16))), new Version3(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new ECBlocks_default(30, new ECB_default(6, 121), new ECB_default(14, 122)), new ECBlocks_default(28, new ECB_default(6, 47), new ECB_default(34, 48)), new ECBlocks_default(30, new ECB_default(46, 24), new ECB_default(10, 25)), new ECBlocks_default(30, new ECB_default(2, 15), new ECB_default(64, 16))), new Version3(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new ECBlocks_default(30, new ECB_default(17, 122), new ECB_default(4, 123)), new ECBlocks_default(28, new ECB_default(29, 46), new ECB_default(14, 47)), new ECBlocks_default(30, new ECB_default(49, 24), new ECB_default(10, 25)), new ECBlocks_default(30, new ECB_default(24, 15), new ECB_default(46, 16))), new Version3(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new ECBlocks_default(30, new ECB_default(4, 122), new ECB_default(18, 123)), new ECBlocks_default(28, new ECB_default(13, 46), new ECB_default(32, 47)), new ECBlocks_default(30, new ECB_default(48, 24), new ECB_default(14, 25)), new ECBlocks_default(30, new ECB_default(42, 15), new ECB_default(32, 16))), new Version3(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new ECBlocks_default(30, new ECB_default(20, 117), new ECB_default(4, 118)), new ECBlocks_default(28, new ECB_default(40, 47), new ECB_default(7, 48)), new ECBlocks_default(30, new ECB_default(43, 24), new ECB_default(22, 25)), new ECBlocks_default(30, new ECB_default(10, 15), new ECB_default(67, 16))), new Version3(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new ECBlocks_default(30, new ECB_default(19, 118), new ECB_default(6, 119)), new ECBlocks_default(28, new ECB_default(18, 47), new ECB_default(31, 48)), new ECBlocks_default(30, new ECB_default(34, 24), new ECB_default(34, 25)), new ECBlocks_default(30, new ECB_default(20, 15), new ECB_default(61, 16)))];
    return Version3;
  }()
);
var Version_default2 = Version2;

// node_modules/@zxing/library/esm/core/qrcode/decoder/DataMask.js
var DataMaskValues;
(function(DataMaskValues2) {
  DataMaskValues2[DataMaskValues2["DATA_MASK_000"] = 0] = "DATA_MASK_000";
  DataMaskValues2[DataMaskValues2["DATA_MASK_001"] = 1] = "DATA_MASK_001";
  DataMaskValues2[DataMaskValues2["DATA_MASK_010"] = 2] = "DATA_MASK_010";
  DataMaskValues2[DataMaskValues2["DATA_MASK_011"] = 3] = "DATA_MASK_011";
  DataMaskValues2[DataMaskValues2["DATA_MASK_100"] = 4] = "DATA_MASK_100";
  DataMaskValues2[DataMaskValues2["DATA_MASK_101"] = 5] = "DATA_MASK_101";
  DataMaskValues2[DataMaskValues2["DATA_MASK_110"] = 6] = "DATA_MASK_110";
  DataMaskValues2[DataMaskValues2["DATA_MASK_111"] = 7] = "DATA_MASK_111";
})(DataMaskValues || (DataMaskValues = {}));
var DataMask = (
  /** @class */
  function() {
    function DataMask2(value, isMasked) {
      this.value = value;
      this.isMasked = isMasked;
    }
    DataMask2.prototype.unmaskBitMatrix = function(bits, dimension) {
      for (var i = 0; i < dimension; i++) {
        for (var j = 0; j < dimension; j++) {
          if (this.isMasked(i, j)) {
            bits.flip(j, i);
          }
        }
      }
    };
    DataMask2.values = /* @__PURE__ */ new Map([
      /**
       * 000: mask bits for which (x + y) mod 2 == 0
       */
      [DataMaskValues.DATA_MASK_000, new DataMask2(DataMaskValues.DATA_MASK_000, function(i, j) {
        return (i + j & 1) === 0;
      })],
      /**
       * 001: mask bits for which x mod 2 == 0
       */
      [DataMaskValues.DATA_MASK_001, new DataMask2(DataMaskValues.DATA_MASK_001, function(i, j) {
        return (i & 1) === 0;
      })],
      /**
       * 010: mask bits for which y mod 3 == 0
       */
      [DataMaskValues.DATA_MASK_010, new DataMask2(DataMaskValues.DATA_MASK_010, function(i, j) {
        return j % 3 === 0;
      })],
      /**
       * 011: mask bits for which (x + y) mod 3 == 0
       */
      [DataMaskValues.DATA_MASK_011, new DataMask2(DataMaskValues.DATA_MASK_011, function(i, j) {
        return (i + j) % 3 === 0;
      })],
      /**
       * 100: mask bits for which (x/2 + y/3) mod 2 == 0
       */
      [DataMaskValues.DATA_MASK_100, new DataMask2(DataMaskValues.DATA_MASK_100, function(i, j) {
        return (Math.floor(i / 2) + Math.floor(j / 3) & 1) === 0;
      })],
      /**
       * 101: mask bits for which xy mod 2 + xy mod 3 == 0
       * equivalently, such that xy mod 6 == 0
       */
      [DataMaskValues.DATA_MASK_101, new DataMask2(DataMaskValues.DATA_MASK_101, function(i, j) {
        return i * j % 6 === 0;
      })],
      /**
       * 110: mask bits for which (xy mod 2 + xy mod 3) mod 2 == 0
       * equivalently, such that xy mod 6 < 3
       */
      [DataMaskValues.DATA_MASK_110, new DataMask2(DataMaskValues.DATA_MASK_110, function(i, j) {
        return i * j % 6 < 3;
      })],
      /**
       * 111: mask bits for which ((x+y)mod 2 + xy mod 3) mod 2 == 0
       * equivalently, such that (x + y + xy mod 3) mod 2 == 0
       */
      [DataMaskValues.DATA_MASK_111, new DataMask2(DataMaskValues.DATA_MASK_111, function(i, j) {
        return (i + j + i * j % 3 & 1) === 0;
      })]
    ]);
    return DataMask2;
  }()
);
var DataMask_default = DataMask;

// node_modules/@zxing/library/esm/core/qrcode/decoder/BitMatrixParser.js
var BitMatrixParser2 = (
  /** @class */
  function() {
    function BitMatrixParser3(bitMatrix) {
      var dimension = bitMatrix.getHeight();
      if (dimension < 21 || (dimension & 3) !== 1) {
        throw new FormatException_default();
      }
      this.bitMatrix = bitMatrix;
    }
    BitMatrixParser3.prototype.readFormatInformation = function() {
      if (this.parsedFormatInfo !== null && this.parsedFormatInfo !== void 0) {
        return this.parsedFormatInfo;
      }
      var formatInfoBits1 = 0;
      for (var i = 0; i < 6; i++) {
        formatInfoBits1 = this.copyBit(i, 8, formatInfoBits1);
      }
      formatInfoBits1 = this.copyBit(7, 8, formatInfoBits1);
      formatInfoBits1 = this.copyBit(8, 8, formatInfoBits1);
      formatInfoBits1 = this.copyBit(8, 7, formatInfoBits1);
      for (var j = 5; j >= 0; j--) {
        formatInfoBits1 = this.copyBit(8, j, formatInfoBits1);
      }
      var dimension = this.bitMatrix.getHeight();
      var formatInfoBits2 = 0;
      var jMin = dimension - 7;
      for (var j = dimension - 1; j >= jMin; j--) {
        formatInfoBits2 = this.copyBit(8, j, formatInfoBits2);
      }
      for (var i = dimension - 8; i < dimension; i++) {
        formatInfoBits2 = this.copyBit(i, 8, formatInfoBits2);
      }
      this.parsedFormatInfo = FormatInformation_default.decodeFormatInformation(formatInfoBits1, formatInfoBits2);
      if (this.parsedFormatInfo !== null) {
        return this.parsedFormatInfo;
      }
      throw new FormatException_default();
    };
    BitMatrixParser3.prototype.readVersion = function() {
      if (this.parsedVersion !== null && this.parsedVersion !== void 0) {
        return this.parsedVersion;
      }
      var dimension = this.bitMatrix.getHeight();
      var provisionalVersion = Math.floor((dimension - 17) / 4);
      if (provisionalVersion <= 6) {
        return Version_default2.getVersionForNumber(provisionalVersion);
      }
      var versionBits = 0;
      var ijMin = dimension - 11;
      for (var j = 5; j >= 0; j--) {
        for (var i = dimension - 9; i >= ijMin; i--) {
          versionBits = this.copyBit(i, j, versionBits);
        }
      }
      var theParsedVersion = Version_default2.decodeVersionInformation(versionBits);
      if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
        this.parsedVersion = theParsedVersion;
        return theParsedVersion;
      }
      versionBits = 0;
      for (var i = 5; i >= 0; i--) {
        for (var j = dimension - 9; j >= ijMin; j--) {
          versionBits = this.copyBit(i, j, versionBits);
        }
      }
      theParsedVersion = Version_default2.decodeVersionInformation(versionBits);
      if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
        this.parsedVersion = theParsedVersion;
        return theParsedVersion;
      }
      throw new FormatException_default();
    };
    BitMatrixParser3.prototype.copyBit = function(i, j, versionBits) {
      var bit = this.isMirror ? this.bitMatrix.get(j, i) : this.bitMatrix.get(i, j);
      return bit ? versionBits << 1 | 1 : versionBits << 1;
    };
    BitMatrixParser3.prototype.readCodewords = function() {
      var formatInfo = this.readFormatInformation();
      var version = this.readVersion();
      var dataMask = DataMask_default.values.get(formatInfo.getDataMask());
      var dimension = this.bitMatrix.getHeight();
      dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
      var functionPattern = version.buildFunctionPattern();
      var readingUp = true;
      var result = new Uint8Array(version.getTotalCodewords());
      var resultOffset = 0;
      var currentByte = 0;
      var bitsRead = 0;
      for (var j = dimension - 1; j > 0; j -= 2) {
        if (j === 6) {
          j--;
        }
        for (var count = 0; count < dimension; count++) {
          var i = readingUp ? dimension - 1 - count : count;
          for (var col = 0; col < 2; col++) {
            if (!functionPattern.get(j - col, i)) {
              bitsRead++;
              currentByte <<= 1;
              if (this.bitMatrix.get(j - col, i)) {
                currentByte |= 1;
              }
              if (bitsRead === 8) {
                result[resultOffset++] = /*(byte) */
                currentByte;
                bitsRead = 0;
                currentByte = 0;
              }
            }
          }
        }
        readingUp = !readingUp;
      }
      if (resultOffset !== version.getTotalCodewords()) {
        throw new FormatException_default();
      }
      return result;
    };
    BitMatrixParser3.prototype.remask = function() {
      if (this.parsedFormatInfo === null) {
        return;
      }
      var dataMask = DataMask_default.values.get(this.parsedFormatInfo.getDataMask());
      var dimension = this.bitMatrix.getHeight();
      dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
    };
    BitMatrixParser3.prototype.setMirror = function(isMirror) {
      this.parsedVersion = null;
      this.parsedFormatInfo = null;
      this.isMirror = isMirror;
    };
    BitMatrixParser3.prototype.mirror = function() {
      var bitMatrix = this.bitMatrix;
      for (var x = 0, width = bitMatrix.getWidth(); x < width; x++) {
        for (var y = x + 1, height = bitMatrix.getHeight(); y < height; y++) {
          if (bitMatrix.get(x, y) !== bitMatrix.get(y, x)) {
            bitMatrix.flip(y, x);
            bitMatrix.flip(x, y);
          }
        }
      }
    };
    return BitMatrixParser3;
  }()
);
var BitMatrixParser_default2 = BitMatrixParser2;

// node_modules/@zxing/library/esm/core/qrcode/decoder/DataBlock.js
var __values24 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var DataBlock2 = (
  /** @class */
  function() {
    function DataBlock3(numDataCodewords, codewords) {
      this.numDataCodewords = numDataCodewords;
      this.codewords = codewords;
    }
    DataBlock3.getDataBlocks = function(rawCodewords, version, ecLevel) {
      var e_1, _a2, e_2, _b;
      if (rawCodewords.length !== version.getTotalCodewords()) {
        throw new IllegalArgumentException_default();
      }
      var ecBlocks = version.getECBlocksForLevel(ecLevel);
      var totalBlocks = 0;
      var ecBlockArray = ecBlocks.getECBlocks();
      try {
        for (var ecBlockArray_1 = __values24(ecBlockArray), ecBlockArray_1_1 = ecBlockArray_1.next(); !ecBlockArray_1_1.done; ecBlockArray_1_1 = ecBlockArray_1.next()) {
          var ecBlock = ecBlockArray_1_1.value;
          totalBlocks += ecBlock.getCount();
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (ecBlockArray_1_1 && !ecBlockArray_1_1.done && (_a2 = ecBlockArray_1.return)) _a2.call(ecBlockArray_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      var result = new Array(totalBlocks);
      var numResultBlocks = 0;
      try {
        for (var ecBlockArray_2 = __values24(ecBlockArray), ecBlockArray_2_1 = ecBlockArray_2.next(); !ecBlockArray_2_1.done; ecBlockArray_2_1 = ecBlockArray_2.next()) {
          var ecBlock = ecBlockArray_2_1.value;
          for (var i = 0; i < ecBlock.getCount(); i++) {
            var numDataCodewords = ecBlock.getDataCodewords();
            var numBlockCodewords = ecBlocks.getECCodewordsPerBlock() + numDataCodewords;
            result[numResultBlocks++] = new DataBlock3(numDataCodewords, new Uint8Array(numBlockCodewords));
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (ecBlockArray_2_1 && !ecBlockArray_2_1.done && (_b = ecBlockArray_2.return)) _b.call(ecBlockArray_2);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      var shorterBlocksTotalCodewords = result[0].codewords.length;
      var longerBlocksStartAt = result.length - 1;
      while (longerBlocksStartAt >= 0) {
        var numCodewords = result[longerBlocksStartAt].codewords.length;
        if (numCodewords === shorterBlocksTotalCodewords) {
          break;
        }
        longerBlocksStartAt--;
      }
      longerBlocksStartAt++;
      var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.getECCodewordsPerBlock();
      var rawCodewordsOffset = 0;
      for (var i = 0; i < shorterBlocksNumDataCodewords; i++) {
        for (var j = 0; j < numResultBlocks; j++) {
          result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
        }
      }
      for (var j = longerBlocksStartAt; j < numResultBlocks; j++) {
        result[j].codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
      }
      var max = result[0].codewords.length;
      for (var i = shorterBlocksNumDataCodewords; i < max; i++) {
        for (var j = 0; j < numResultBlocks; j++) {
          var iOffset = j < longerBlocksStartAt ? i : i + 1;
          result[j].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
        }
      }
      return result;
    };
    DataBlock3.prototype.getNumDataCodewords = function() {
      return this.numDataCodewords;
    };
    DataBlock3.prototype.getCodewords = function() {
      return this.codewords;
    };
    return DataBlock3;
  }()
);
var DataBlock_default2 = DataBlock2;

// node_modules/@zxing/library/esm/core/qrcode/decoder/Mode.js
var ModeValues;
(function(ModeValues2) {
  ModeValues2[ModeValues2["TERMINATOR"] = 0] = "TERMINATOR";
  ModeValues2[ModeValues2["NUMERIC"] = 1] = "NUMERIC";
  ModeValues2[ModeValues2["ALPHANUMERIC"] = 2] = "ALPHANUMERIC";
  ModeValues2[ModeValues2["STRUCTURED_APPEND"] = 3] = "STRUCTURED_APPEND";
  ModeValues2[ModeValues2["BYTE"] = 4] = "BYTE";
  ModeValues2[ModeValues2["ECI"] = 5] = "ECI";
  ModeValues2[ModeValues2["KANJI"] = 6] = "KANJI";
  ModeValues2[ModeValues2["FNC1_FIRST_POSITION"] = 7] = "FNC1_FIRST_POSITION";
  ModeValues2[ModeValues2["FNC1_SECOND_POSITION"] = 8] = "FNC1_SECOND_POSITION";
  ModeValues2[ModeValues2["HANZI"] = 9] = "HANZI";
})(ModeValues || (ModeValues = {}));
var Mode2 = (
  /** @class */
  function() {
    function Mode5(value, stringValue, characterCountBitsForVersions, bits) {
      this.value = value;
      this.stringValue = stringValue;
      this.characterCountBitsForVersions = characterCountBitsForVersions;
      this.bits = bits;
      Mode5.FOR_BITS.set(bits, this);
      Mode5.FOR_VALUE.set(value, this);
    }
    Mode5.forBits = function(bits) {
      var mode = Mode5.FOR_BITS.get(bits);
      if (void 0 === mode) {
        throw new IllegalArgumentException_default();
      }
      return mode;
    };
    Mode5.prototype.getCharacterCountBits = function(version) {
      var versionNumber = version.getVersionNumber();
      var offset;
      if (versionNumber <= 9) {
        offset = 0;
      } else if (versionNumber <= 26) {
        offset = 1;
      } else {
        offset = 2;
      }
      return this.characterCountBitsForVersions[offset];
    };
    Mode5.prototype.getValue = function() {
      return this.value;
    };
    Mode5.prototype.getBits = function() {
      return this.bits;
    };
    Mode5.prototype.equals = function(o) {
      if (!(o instanceof Mode5)) {
        return false;
      }
      var other = o;
      return this.value === other.value;
    };
    Mode5.prototype.toString = function() {
      return this.stringValue;
    };
    Mode5.FOR_BITS = /* @__PURE__ */ new Map();
    Mode5.FOR_VALUE = /* @__PURE__ */ new Map();
    Mode5.TERMINATOR = new Mode5(ModeValues.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0);
    Mode5.NUMERIC = new Mode5(ModeValues.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1);
    Mode5.ALPHANUMERIC = new Mode5(ModeValues.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2);
    Mode5.STRUCTURED_APPEND = new Mode5(ModeValues.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3);
    Mode5.BYTE = new Mode5(ModeValues.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4);
    Mode5.ECI = new Mode5(ModeValues.ECI, "ECI", Int32Array.from([0, 0, 0]), 7);
    Mode5.KANJI = new Mode5(ModeValues.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8);
    Mode5.FNC1_FIRST_POSITION = new Mode5(ModeValues.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5);
    Mode5.FNC1_SECOND_POSITION = new Mode5(ModeValues.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9);
    Mode5.HANZI = new Mode5(ModeValues.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13);
    return Mode5;
  }()
);
var Mode_default = Mode2;

// node_modules/@zxing/library/esm/core/qrcode/decoder/DecodedBitStreamParser.js
var DecodedBitStreamParser2 = (
  /** @class */
  function() {
    function DecodedBitStreamParser4() {
    }
    DecodedBitStreamParser4.decode = function(bytes, version, ecLevel, hints) {
      var bits = new BitSource_default(bytes);
      var result = new StringBuilder_default();
      var byteSegments = new Array();
      var symbolSequence = -1;
      var parityData = -1;
      try {
        var currentCharacterSetECI = null;
        var fc1InEffect = false;
        var mode = void 0;
        do {
          if (bits.available() < 4) {
            mode = Mode_default.TERMINATOR;
          } else {
            var modeBits = bits.readBits(4);
            mode = Mode_default.forBits(modeBits);
          }
          switch (mode) {
            case Mode_default.TERMINATOR:
              break;
            case Mode_default.FNC1_FIRST_POSITION:
            case Mode_default.FNC1_SECOND_POSITION:
              fc1InEffect = true;
              break;
            case Mode_default.STRUCTURED_APPEND:
              if (bits.available() < 16) {
                throw new FormatException_default();
              }
              symbolSequence = bits.readBits(8);
              parityData = bits.readBits(8);
              break;
            case Mode_default.ECI:
              var value = DecodedBitStreamParser4.parseECIValue(bits);
              currentCharacterSetECI = CharacterSetECI_default.getCharacterSetECIByValue(value);
              if (currentCharacterSetECI === null) {
                throw new FormatException_default();
              }
              break;
            case Mode_default.HANZI:
              var subset = bits.readBits(4);
              var countHanzi = bits.readBits(mode.getCharacterCountBits(version));
              if (subset === DecodedBitStreamParser4.GB2312_SUBSET) {
                DecodedBitStreamParser4.decodeHanziSegment(bits, result, countHanzi);
              }
              break;
            default:
              var count = bits.readBits(mode.getCharacterCountBits(version));
              switch (mode) {
                case Mode_default.NUMERIC:
                  DecodedBitStreamParser4.decodeNumericSegment(bits, result, count);
                  break;
                case Mode_default.ALPHANUMERIC:
                  DecodedBitStreamParser4.decodeAlphanumericSegment(bits, result, count, fc1InEffect);
                  break;
                case Mode_default.BYTE:
                  DecodedBitStreamParser4.decodeByteSegment(bits, result, count, currentCharacterSetECI, byteSegments, hints);
                  break;
                case Mode_default.KANJI:
                  DecodedBitStreamParser4.decodeKanjiSegment(bits, result, count);
                  break;
                default:
                  throw new FormatException_default();
              }
              break;
          }
        } while (mode !== Mode_default.TERMINATOR);
      } catch (iae) {
        throw new FormatException_default();
      }
      return new DecoderResult_default(bytes, result.toString(), byteSegments.length === 0 ? null : byteSegments, ecLevel === null ? null : ecLevel.toString(), symbolSequence, parityData);
    };
    DecodedBitStreamParser4.decodeHanziSegment = function(bits, result, count) {
      if (count * 13 > bits.available()) {
        throw new FormatException_default();
      }
      var buffer = new Uint8Array(2 * count);
      var offset = 0;
      while (count > 0) {
        var twoBytes = bits.readBits(13);
        var assembledTwoBytes = twoBytes / 96 << 8 & 4294967295 | twoBytes % 96;
        if (assembledTwoBytes < 959) {
          assembledTwoBytes += 41377;
        } else {
          assembledTwoBytes += 42657;
        }
        buffer[offset] = /*(byte) */
        assembledTwoBytes >> 8 & 255;
        buffer[offset + 1] = /*(byte) */
        assembledTwoBytes & 255;
        offset += 2;
        count--;
      }
      try {
        result.append(StringEncoding_default.decode(buffer, StringUtils_default.GB2312));
      } catch (ignored) {
        throw new FormatException_default(ignored);
      }
    };
    DecodedBitStreamParser4.decodeKanjiSegment = function(bits, result, count) {
      if (count * 13 > bits.available()) {
        throw new FormatException_default();
      }
      var buffer = new Uint8Array(2 * count);
      var offset = 0;
      while (count > 0) {
        var twoBytes = bits.readBits(13);
        var assembledTwoBytes = twoBytes / 192 << 8 & 4294967295 | twoBytes % 192;
        if (assembledTwoBytes < 7936) {
          assembledTwoBytes += 33088;
        } else {
          assembledTwoBytes += 49472;
        }
        buffer[offset] = /*(byte) */
        assembledTwoBytes >> 8;
        buffer[offset + 1] = /*(byte) */
        assembledTwoBytes;
        offset += 2;
        count--;
      }
      try {
        result.append(StringEncoding_default.decode(buffer, StringUtils_default.SHIFT_JIS));
      } catch (ignored) {
        throw new FormatException_default(ignored);
      }
    };
    DecodedBitStreamParser4.decodeByteSegment = function(bits, result, count, currentCharacterSetECI, byteSegments, hints) {
      if (8 * count > bits.available()) {
        throw new FormatException_default();
      }
      var readBytes = new Uint8Array(count);
      for (var i = 0; i < count; i++) {
        readBytes[i] = /*(byte) */
        bits.readBits(8);
      }
      var encoding;
      if (currentCharacterSetECI === null) {
        encoding = StringUtils_default.guessEncoding(readBytes, hints);
      } else {
        encoding = currentCharacterSetECI.getName();
      }
      try {
        result.append(StringEncoding_default.decode(readBytes, encoding));
      } catch (ignored) {
        throw new FormatException_default(ignored);
      }
      byteSegments.push(readBytes);
    };
    DecodedBitStreamParser4.toAlphaNumericChar = function(value) {
      if (value >= DecodedBitStreamParser4.ALPHANUMERIC_CHARS.length) {
        throw new FormatException_default();
      }
      return DecodedBitStreamParser4.ALPHANUMERIC_CHARS[value];
    };
    DecodedBitStreamParser4.decodeAlphanumericSegment = function(bits, result, count, fc1InEffect) {
      var start = result.length();
      while (count > 1) {
        if (bits.available() < 11) {
          throw new FormatException_default();
        }
        var nextTwoCharsBits = bits.readBits(11);
        result.append(DecodedBitStreamParser4.toAlphaNumericChar(Math.floor(nextTwoCharsBits / 45)));
        result.append(DecodedBitStreamParser4.toAlphaNumericChar(nextTwoCharsBits % 45));
        count -= 2;
      }
      if (count === 1) {
        if (bits.available() < 6) {
          throw new FormatException_default();
        }
        result.append(DecodedBitStreamParser4.toAlphaNumericChar(bits.readBits(6)));
      }
      if (fc1InEffect) {
        for (var i = start; i < result.length(); i++) {
          if (result.charAt(i) === "%") {
            if (i < result.length() - 1 && result.charAt(i + 1) === "%") {
              result.deleteCharAt(i + 1);
            } else {
              result.setCharAt(i, String.fromCharCode(29));
            }
          }
        }
      }
    };
    DecodedBitStreamParser4.decodeNumericSegment = function(bits, result, count) {
      while (count >= 3) {
        if (bits.available() < 10) {
          throw new FormatException_default();
        }
        var threeDigitsBits = bits.readBits(10);
        if (threeDigitsBits >= 1e3) {
          throw new FormatException_default();
        }
        result.append(DecodedBitStreamParser4.toAlphaNumericChar(Math.floor(threeDigitsBits / 100)));
        result.append(DecodedBitStreamParser4.toAlphaNumericChar(Math.floor(threeDigitsBits / 10) % 10));
        result.append(DecodedBitStreamParser4.toAlphaNumericChar(threeDigitsBits % 10));
        count -= 3;
      }
      if (count === 2) {
        if (bits.available() < 7) {
          throw new FormatException_default();
        }
        var twoDigitsBits = bits.readBits(7);
        if (twoDigitsBits >= 100) {
          throw new FormatException_default();
        }
        result.append(DecodedBitStreamParser4.toAlphaNumericChar(Math.floor(twoDigitsBits / 10)));
        result.append(DecodedBitStreamParser4.toAlphaNumericChar(twoDigitsBits % 10));
      } else if (count === 1) {
        if (bits.available() < 4) {
          throw new FormatException_default();
        }
        var digitBits = bits.readBits(4);
        if (digitBits >= 10) {
          throw new FormatException_default();
        }
        result.append(DecodedBitStreamParser4.toAlphaNumericChar(digitBits));
      }
    };
    DecodedBitStreamParser4.parseECIValue = function(bits) {
      var firstByte = bits.readBits(8);
      if ((firstByte & 128) === 0) {
        return firstByte & 127;
      }
      if ((firstByte & 192) === 128) {
        var secondByte = bits.readBits(8);
        return (firstByte & 63) << 8 & 4294967295 | secondByte;
      }
      if ((firstByte & 224) === 192) {
        var secondThirdBytes = bits.readBits(16);
        return (firstByte & 31) << 16 & 4294967295 | secondThirdBytes;
      }
      throw new FormatException_default();
    };
    DecodedBitStreamParser4.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
    DecodedBitStreamParser4.GB2312_SUBSET = 1;
    return DecodedBitStreamParser4;
  }()
);
var DecodedBitStreamParser_default2 = DecodedBitStreamParser2;

// node_modules/@zxing/library/esm/core/qrcode/decoder/QRCodeDecoderMetaData.js
var QRCodeDecoderMetaData = (
  /** @class */
  function() {
    function QRCodeDecoderMetaData2(mirrored) {
      this.mirrored = mirrored;
    }
    QRCodeDecoderMetaData2.prototype.isMirrored = function() {
      return this.mirrored;
    };
    QRCodeDecoderMetaData2.prototype.applyMirroredCorrection = function(points) {
      if (!this.mirrored || points === null || points.length < 3) {
        return;
      }
      var bottomLeft = points[0];
      points[0] = points[2];
      points[2] = bottomLeft;
    };
    return QRCodeDecoderMetaData2;
  }()
);
var QRCodeDecoderMetaData_default = QRCodeDecoderMetaData;

// node_modules/@zxing/library/esm/core/qrcode/decoder/Decoder.js
var __values25 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Decoder3 = (
  /** @class */
  function() {
    function Decoder4() {
      this.rsDecoder = new ReedSolomonDecoder_default(GenericGF_default.QR_CODE_FIELD_256);
    }
    Decoder4.prototype.decodeBooleanArray = function(image, hints) {
      return this.decodeBitMatrix(BitMatrix_default.parseFromBooleanArray(image), hints);
    };
    Decoder4.prototype.decodeBitMatrix = function(bits, hints) {
      var parser = new BitMatrixParser_default2(bits);
      var ex = null;
      try {
        return this.decodeBitMatrixParser(parser, hints);
      } catch (e) {
        ex = e;
      }
      try {
        parser.remask();
        parser.setMirror(true);
        parser.readVersion();
        parser.readFormatInformation();
        parser.mirror();
        var result = this.decodeBitMatrixParser(parser, hints);
        result.setOther(new QRCodeDecoderMetaData_default(true));
        return result;
      } catch (e) {
        if (ex !== null) {
          throw ex;
        }
        throw e;
      }
    };
    Decoder4.prototype.decodeBitMatrixParser = function(parser, hints) {
      var e_1, _a2, e_2, _b;
      var version = parser.readVersion();
      var ecLevel = parser.readFormatInformation().getErrorCorrectionLevel();
      var codewords = parser.readCodewords();
      var dataBlocks = DataBlock_default2.getDataBlocks(codewords, version, ecLevel);
      var totalBytes = 0;
      try {
        for (var dataBlocks_1 = __values25(dataBlocks), dataBlocks_1_1 = dataBlocks_1.next(); !dataBlocks_1_1.done; dataBlocks_1_1 = dataBlocks_1.next()) {
          var dataBlock = dataBlocks_1_1.value;
          totalBytes += dataBlock.getNumDataCodewords();
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (dataBlocks_1_1 && !dataBlocks_1_1.done && (_a2 = dataBlocks_1.return)) _a2.call(dataBlocks_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      var resultBytes = new Uint8Array(totalBytes);
      var resultOffset = 0;
      try {
        for (var dataBlocks_2 = __values25(dataBlocks), dataBlocks_2_1 = dataBlocks_2.next(); !dataBlocks_2_1.done; dataBlocks_2_1 = dataBlocks_2.next()) {
          var dataBlock = dataBlocks_2_1.value;
          var codewordBytes = dataBlock.getCodewords();
          var numDataCodewords = dataBlock.getNumDataCodewords();
          this.correctErrors(codewordBytes, numDataCodewords);
          for (var i = 0; i < numDataCodewords; i++) {
            resultBytes[resultOffset++] = codewordBytes[i];
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (dataBlocks_2_1 && !dataBlocks_2_1.done && (_b = dataBlocks_2.return)) _b.call(dataBlocks_2);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      return DecodedBitStreamParser_default2.decode(resultBytes, version, ecLevel, hints);
    };
    Decoder4.prototype.correctErrors = function(codewordBytes, numDataCodewords) {
      var codewordsInts = new Int32Array(codewordBytes);
      try {
        this.rsDecoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
      } catch (ignored) {
        throw new ChecksumException_default();
      }
      for (var i = 0; i < numDataCodewords; i++) {
        codewordBytes[i] = /*(byte) */
        codewordsInts[i];
      }
    };
    return Decoder4;
  }()
);
var Decoder_default3 = Decoder3;

// node_modules/@zxing/library/esm/core/qrcode/detector/AlignmentPattern.js
var __extends54 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var AlignmentPattern = (
  /** @class */
  function(_super) {
    __extends54(AlignmentPattern2, _super);
    function AlignmentPattern2(posX, posY, estimatedModuleSize) {
      var _this = _super.call(this, posX, posY) || this;
      _this.estimatedModuleSize = estimatedModuleSize;
      return _this;
    }
    AlignmentPattern2.prototype.aboutEquals = function(moduleSize, i, j) {
      if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
        var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
        return moduleSizeDiff <= 1 || moduleSizeDiff <= this.estimatedModuleSize;
      }
      return false;
    };
    AlignmentPattern2.prototype.combineEstimate = function(i, j, newModuleSize) {
      var combinedX = (this.getX() + j) / 2;
      var combinedY = (this.getY() + i) / 2;
      var combinedModuleSize = (this.estimatedModuleSize + newModuleSize) / 2;
      return new AlignmentPattern2(combinedX, combinedY, combinedModuleSize);
    };
    return AlignmentPattern2;
  }(ResultPoint_default)
);
var AlignmentPattern_default = AlignmentPattern;

// node_modules/@zxing/library/esm/core/qrcode/detector/AlignmentPatternFinder.js
var __values26 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var AlignmentPatternFinder = (
  /** @class */
  function() {
    function AlignmentPatternFinder2(image, startX, startY, width, height, moduleSize, resultPointCallback) {
      this.image = image;
      this.startX = startX;
      this.startY = startY;
      this.width = width;
      this.height = height;
      this.moduleSize = moduleSize;
      this.resultPointCallback = resultPointCallback;
      this.possibleCenters = [];
      this.crossCheckStateCount = new Int32Array(3);
    }
    AlignmentPatternFinder2.prototype.find = function() {
      var startX = this.startX;
      var height = this.height;
      var width = this.width;
      var maxJ = startX + width;
      var middleI = this.startY + height / 2;
      var stateCount = new Int32Array(3);
      var image = this.image;
      for (var iGen = 0; iGen < height; iGen++) {
        var i = middleI + ((iGen & 1) === 0 ? Math.floor((iGen + 1) / 2) : -Math.floor((iGen + 1) / 2));
        stateCount[0] = 0;
        stateCount[1] = 0;
        stateCount[2] = 0;
        var j = startX;
        while (j < maxJ && !image.get(j, i)) {
          j++;
        }
        var currentState = 0;
        while (j < maxJ) {
          if (image.get(j, i)) {
            if (currentState === 1) {
              stateCount[1]++;
            } else {
              if (currentState === 2) {
                if (this.foundPatternCross(stateCount)) {
                  var confirmed = this.handlePossibleCenter(stateCount, i, j);
                  if (confirmed !== null) {
                    return confirmed;
                  }
                }
                stateCount[0] = stateCount[2];
                stateCount[1] = 1;
                stateCount[2] = 0;
                currentState = 1;
              } else {
                stateCount[++currentState]++;
              }
            }
          } else {
            if (currentState === 1) {
              currentState++;
            }
            stateCount[currentState]++;
          }
          j++;
        }
        if (this.foundPatternCross(stateCount)) {
          var confirmed = this.handlePossibleCenter(stateCount, i, maxJ);
          if (confirmed !== null) {
            return confirmed;
          }
        }
      }
      if (this.possibleCenters.length !== 0) {
        return this.possibleCenters[0];
      }
      throw new NotFoundException_default();
    };
    AlignmentPatternFinder2.centerFromEnd = function(stateCount, end) {
      return end - stateCount[2] - stateCount[1] / 2;
    };
    AlignmentPatternFinder2.prototype.foundPatternCross = function(stateCount) {
      var moduleSize = this.moduleSize;
      var maxVariance = moduleSize / 2;
      for (var i = 0; i < 3; i++) {
        if (Math.abs(moduleSize - stateCount[i]) >= maxVariance) {
          return false;
        }
      }
      return true;
    };
    AlignmentPatternFinder2.prototype.crossCheckVertical = function(startI, centerJ, maxCount, originalStateCountTotal) {
      var image = this.image;
      var maxI = image.getHeight();
      var stateCount = this.crossCheckStateCount;
      stateCount[0] = 0;
      stateCount[1] = 0;
      stateCount[2] = 0;
      var i = startI;
      while (i >= 0 && image.get(centerJ, i) && stateCount[1] <= maxCount) {
        stateCount[1]++;
        i--;
      }
      if (i < 0 || stateCount[1] > maxCount) {
        return NaN;
      }
      while (i >= 0 && !image.get(centerJ, i) && stateCount[0] <= maxCount) {
        stateCount[0]++;
        i--;
      }
      if (stateCount[0] > maxCount) {
        return NaN;
      }
      i = startI + 1;
      while (i < maxI && image.get(centerJ, i) && stateCount[1] <= maxCount) {
        stateCount[1]++;
        i++;
      }
      if (i === maxI || stateCount[1] > maxCount) {
        return NaN;
      }
      while (i < maxI && !image.get(centerJ, i) && stateCount[2] <= maxCount) {
        stateCount[2]++;
        i++;
      }
      if (stateCount[2] > maxCount) {
        return NaN;
      }
      var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
      if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
        return NaN;
      }
      return this.foundPatternCross(stateCount) ? AlignmentPatternFinder2.centerFromEnd(stateCount, i) : NaN;
    };
    AlignmentPatternFinder2.prototype.handlePossibleCenter = function(stateCount, i, j) {
      var e_1, _a2;
      var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
      var centerJ = AlignmentPatternFinder2.centerFromEnd(stateCount, j);
      var centerI = this.crossCheckVertical(
        i,
        /*(int) */
        centerJ,
        2 * stateCount[1],
        stateCountTotal
      );
      if (!isNaN(centerI)) {
        var estimatedModuleSize = (stateCount[0] + stateCount[1] + stateCount[2]) / 3;
        try {
          for (var _b = __values26(this.possibleCenters), _c = _b.next(); !_c.done; _c = _b.next()) {
            var center = _c.value;
            if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
              return center.combineEstimate(centerI, centerJ, estimatedModuleSize);
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        var point = new AlignmentPattern_default(centerJ, centerI, estimatedModuleSize);
        this.possibleCenters.push(point);
        if (this.resultPointCallback !== null && this.resultPointCallback !== void 0) {
          this.resultPointCallback.foundPossibleResultPoint(point);
        }
      }
      return null;
    };
    return AlignmentPatternFinder2;
  }()
);
var AlignmentPatternFinder_default = AlignmentPatternFinder;

// node_modules/@zxing/library/esm/core/qrcode/detector/FinderPattern.js
var __extends55 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var FinderPattern2 = (
  /** @class */
  function(_super) {
    __extends55(FinderPattern3, _super);
    function FinderPattern3(posX, posY, estimatedModuleSize, count) {
      var _this = _super.call(this, posX, posY) || this;
      _this.estimatedModuleSize = estimatedModuleSize;
      _this.count = count;
      if (void 0 === count) {
        _this.count = 1;
      }
      return _this;
    }
    FinderPattern3.prototype.getEstimatedModuleSize = function() {
      return this.estimatedModuleSize;
    };
    FinderPattern3.prototype.getCount = function() {
      return this.count;
    };
    FinderPattern3.prototype.aboutEquals = function(moduleSize, i, j) {
      if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
        var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
        return moduleSizeDiff <= 1 || moduleSizeDiff <= this.estimatedModuleSize;
      }
      return false;
    };
    FinderPattern3.prototype.combineEstimate = function(i, j, newModuleSize) {
      var combinedCount = this.count + 1;
      var combinedX = (this.count * this.getX() + j) / combinedCount;
      var combinedY = (this.count * this.getY() + i) / combinedCount;
      var combinedModuleSize = (this.count * this.estimatedModuleSize + newModuleSize) / combinedCount;
      return new FinderPattern3(combinedX, combinedY, combinedModuleSize, combinedCount);
    };
    return FinderPattern3;
  }(ResultPoint_default)
);
var FinderPattern_default2 = FinderPattern2;

// node_modules/@zxing/library/esm/core/qrcode/detector/FinderPatternInfo.js
var FinderPatternInfo = (
  /** @class */
  function() {
    function FinderPatternInfo2(patternCenters) {
      this.bottomLeft = patternCenters[0];
      this.topLeft = patternCenters[1];
      this.topRight = patternCenters[2];
    }
    FinderPatternInfo2.prototype.getBottomLeft = function() {
      return this.bottomLeft;
    };
    FinderPatternInfo2.prototype.getTopLeft = function() {
      return this.topLeft;
    };
    FinderPatternInfo2.prototype.getTopRight = function() {
      return this.topRight;
    };
    return FinderPatternInfo2;
  }()
);
var FinderPatternInfo_default = FinderPatternInfo;

// node_modules/@zxing/library/esm/core/qrcode/detector/FinderPatternFinder.js
var __values27 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var FinderPatternFinder = (
  /** @class */
  function() {
    function FinderPatternFinder2(image, resultPointCallback) {
      this.image = image;
      this.resultPointCallback = resultPointCallback;
      this.possibleCenters = [];
      this.crossCheckStateCount = new Int32Array(5);
      this.resultPointCallback = resultPointCallback;
    }
    FinderPatternFinder2.prototype.getImage = function() {
      return this.image;
    };
    FinderPatternFinder2.prototype.getPossibleCenters = function() {
      return this.possibleCenters;
    };
    FinderPatternFinder2.prototype.find = function(hints) {
      var tryHarder = hints !== null && hints !== void 0 && void 0 !== hints.get(DecodeHintType_default.TRY_HARDER);
      var pureBarcode = hints !== null && hints !== void 0 && void 0 !== hints.get(DecodeHintType_default.PURE_BARCODE);
      var image = this.image;
      var maxI = image.getHeight();
      var maxJ = image.getWidth();
      var iSkip = Math.floor(3 * maxI / (4 * FinderPatternFinder2.MAX_MODULES));
      if (iSkip < FinderPatternFinder2.MIN_SKIP || tryHarder) {
        iSkip = FinderPatternFinder2.MIN_SKIP;
      }
      var done = false;
      var stateCount = new Int32Array(5);
      for (var i = iSkip - 1; i < maxI && !done; i += iSkip) {
        stateCount[0] = 0;
        stateCount[1] = 0;
        stateCount[2] = 0;
        stateCount[3] = 0;
        stateCount[4] = 0;
        var currentState = 0;
        for (var j = 0; j < maxJ; j++) {
          if (image.get(j, i)) {
            if ((currentState & 1) === 1) {
              currentState++;
            }
            stateCount[currentState]++;
          } else {
            if ((currentState & 1) === 0) {
              if (currentState === 4) {
                if (FinderPatternFinder2.foundPatternCross(stateCount)) {
                  var confirmed = this.handlePossibleCenter(stateCount, i, j, pureBarcode);
                  if (confirmed === true) {
                    iSkip = 2;
                    if (this.hasSkipped === true) {
                      done = this.haveMultiplyConfirmedCenters();
                    } else {
                      var rowSkip = this.findRowSkip();
                      if (rowSkip > stateCount[2]) {
                        i += rowSkip - stateCount[2] - iSkip;
                        j = maxJ - 1;
                      }
                    }
                  } else {
                    stateCount[0] = stateCount[2];
                    stateCount[1] = stateCount[3];
                    stateCount[2] = stateCount[4];
                    stateCount[3] = 1;
                    stateCount[4] = 0;
                    currentState = 3;
                    continue;
                  }
                  currentState = 0;
                  stateCount[0] = 0;
                  stateCount[1] = 0;
                  stateCount[2] = 0;
                  stateCount[3] = 0;
                  stateCount[4] = 0;
                } else {
                  stateCount[0] = stateCount[2];
                  stateCount[1] = stateCount[3];
                  stateCount[2] = stateCount[4];
                  stateCount[3] = 1;
                  stateCount[4] = 0;
                  currentState = 3;
                }
              } else {
                stateCount[++currentState]++;
              }
            } else {
              stateCount[currentState]++;
            }
          }
        }
        if (FinderPatternFinder2.foundPatternCross(stateCount)) {
          var confirmed = this.handlePossibleCenter(stateCount, i, maxJ, pureBarcode);
          if (confirmed === true) {
            iSkip = stateCount[0];
            if (this.hasSkipped) {
              done = this.haveMultiplyConfirmedCenters();
            }
          }
        }
      }
      var patternInfo = this.selectBestPatterns();
      ResultPoint_default.orderBestPatterns(patternInfo);
      return new FinderPatternInfo_default(patternInfo);
    };
    FinderPatternFinder2.centerFromEnd = function(stateCount, end) {
      return end - stateCount[4] - stateCount[3] - stateCount[2] / 2;
    };
    FinderPatternFinder2.foundPatternCross = function(stateCount) {
      var totalModuleSize = 0;
      for (var i = 0; i < 5; i++) {
        var count = stateCount[i];
        if (count === 0) {
          return false;
        }
        totalModuleSize += count;
      }
      if (totalModuleSize < 7) {
        return false;
      }
      var moduleSize = totalModuleSize / 7;
      var maxVariance = moduleSize / 2;
      return Math.abs(moduleSize - stateCount[0]) < maxVariance && Math.abs(moduleSize - stateCount[1]) < maxVariance && Math.abs(3 * moduleSize - stateCount[2]) < 3 * maxVariance && Math.abs(moduleSize - stateCount[3]) < maxVariance && Math.abs(moduleSize - stateCount[4]) < maxVariance;
    };
    FinderPatternFinder2.prototype.getCrossCheckStateCount = function() {
      var crossCheckStateCount = this.crossCheckStateCount;
      crossCheckStateCount[0] = 0;
      crossCheckStateCount[1] = 0;
      crossCheckStateCount[2] = 0;
      crossCheckStateCount[3] = 0;
      crossCheckStateCount[4] = 0;
      return crossCheckStateCount;
    };
    FinderPatternFinder2.prototype.crossCheckDiagonal = function(startI, centerJ, maxCount, originalStateCountTotal) {
      var stateCount = this.getCrossCheckStateCount();
      var i = 0;
      var image = this.image;
      while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i)) {
        stateCount[2]++;
        i++;
      }
      if (startI < i || centerJ < i) {
        return false;
      }
      while (startI >= i && centerJ >= i && !image.get(centerJ - i, startI - i) && stateCount[1] <= maxCount) {
        stateCount[1]++;
        i++;
      }
      if (startI < i || centerJ < i || stateCount[1] > maxCount) {
        return false;
      }
      while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i) && stateCount[0] <= maxCount) {
        stateCount[0]++;
        i++;
      }
      if (stateCount[0] > maxCount) {
        return false;
      }
      var maxI = image.getHeight();
      var maxJ = image.getWidth();
      i = 1;
      while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i)) {
        stateCount[2]++;
        i++;
      }
      if (startI + i >= maxI || centerJ + i >= maxJ) {
        return false;
      }
      while (startI + i < maxI && centerJ + i < maxJ && !image.get(centerJ + i, startI + i) && stateCount[3] < maxCount) {
        stateCount[3]++;
        i++;
      }
      if (startI + i >= maxI || centerJ + i >= maxJ || stateCount[3] >= maxCount) {
        return false;
      }
      while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i) && stateCount[4] < maxCount) {
        stateCount[4]++;
        i++;
      }
      if (stateCount[4] >= maxCount) {
        return false;
      }
      var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
      return Math.abs(stateCountTotal - originalStateCountTotal) < 2 * originalStateCountTotal && FinderPatternFinder2.foundPatternCross(stateCount);
    };
    FinderPatternFinder2.prototype.crossCheckVertical = function(startI, centerJ, maxCount, originalStateCountTotal) {
      var image = this.image;
      var maxI = image.getHeight();
      var stateCount = this.getCrossCheckStateCount();
      var i = startI;
      while (i >= 0 && image.get(centerJ, i)) {
        stateCount[2]++;
        i--;
      }
      if (i < 0) {
        return NaN;
      }
      while (i >= 0 && !image.get(centerJ, i) && stateCount[1] <= maxCount) {
        stateCount[1]++;
        i--;
      }
      if (i < 0 || stateCount[1] > maxCount) {
        return NaN;
      }
      while (i >= 0 && image.get(centerJ, i) && stateCount[0] <= maxCount) {
        stateCount[0]++;
        i--;
      }
      if (stateCount[0] > maxCount) {
        return NaN;
      }
      i = startI + 1;
      while (i < maxI && image.get(centerJ, i)) {
        stateCount[2]++;
        i++;
      }
      if (i === maxI) {
        return NaN;
      }
      while (i < maxI && !image.get(centerJ, i) && stateCount[3] < maxCount) {
        stateCount[3]++;
        i++;
      }
      if (i === maxI || stateCount[3] >= maxCount) {
        return NaN;
      }
      while (i < maxI && image.get(centerJ, i) && stateCount[4] < maxCount) {
        stateCount[4]++;
        i++;
      }
      if (stateCount[4] >= maxCount) {
        return NaN;
      }
      var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
      if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
        return NaN;
      }
      return FinderPatternFinder2.foundPatternCross(stateCount) ? FinderPatternFinder2.centerFromEnd(stateCount, i) : NaN;
    };
    FinderPatternFinder2.prototype.crossCheckHorizontal = function(startJ, centerI, maxCount, originalStateCountTotal) {
      var image = this.image;
      var maxJ = image.getWidth();
      var stateCount = this.getCrossCheckStateCount();
      var j = startJ;
      while (j >= 0 && image.get(j, centerI)) {
        stateCount[2]++;
        j--;
      }
      if (j < 0) {
        return NaN;
      }
      while (j >= 0 && !image.get(j, centerI) && stateCount[1] <= maxCount) {
        stateCount[1]++;
        j--;
      }
      if (j < 0 || stateCount[1] > maxCount) {
        return NaN;
      }
      while (j >= 0 && image.get(j, centerI) && stateCount[0] <= maxCount) {
        stateCount[0]++;
        j--;
      }
      if (stateCount[0] > maxCount) {
        return NaN;
      }
      j = startJ + 1;
      while (j < maxJ && image.get(j, centerI)) {
        stateCount[2]++;
        j++;
      }
      if (j === maxJ) {
        return NaN;
      }
      while (j < maxJ && !image.get(j, centerI) && stateCount[3] < maxCount) {
        stateCount[3]++;
        j++;
      }
      if (j === maxJ || stateCount[3] >= maxCount) {
        return NaN;
      }
      while (j < maxJ && image.get(j, centerI) && stateCount[4] < maxCount) {
        stateCount[4]++;
        j++;
      }
      if (stateCount[4] >= maxCount) {
        return NaN;
      }
      var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
      if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= originalStateCountTotal) {
        return NaN;
      }
      return FinderPatternFinder2.foundPatternCross(stateCount) ? FinderPatternFinder2.centerFromEnd(stateCount, j) : NaN;
    };
    FinderPatternFinder2.prototype.handlePossibleCenter = function(stateCount, i, j, pureBarcode) {
      var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
      var centerJ = FinderPatternFinder2.centerFromEnd(stateCount, j);
      var centerI = this.crossCheckVertical(
        i,
        /*(int) */
        Math.floor(centerJ),
        stateCount[2],
        stateCountTotal
      );
      if (!isNaN(centerI)) {
        centerJ = this.crossCheckHorizontal(
          /*(int) */
          Math.floor(centerJ),
          /*(int) */
          Math.floor(centerI),
          stateCount[2],
          stateCountTotal
        );
        if (!isNaN(centerJ) && (!pureBarcode || this.crossCheckDiagonal(
          /*(int) */
          Math.floor(centerI),
          /*(int) */
          Math.floor(centerJ),
          stateCount[2],
          stateCountTotal
        ))) {
          var estimatedModuleSize = stateCountTotal / 7;
          var found = false;
          var possibleCenters = this.possibleCenters;
          for (var index = 0, length_1 = possibleCenters.length; index < length_1; index++) {
            var center = possibleCenters[index];
            if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
              possibleCenters[index] = center.combineEstimate(centerI, centerJ, estimatedModuleSize);
              found = true;
              break;
            }
          }
          if (!found) {
            var point = new FinderPattern_default2(centerJ, centerI, estimatedModuleSize);
            possibleCenters.push(point);
            if (this.resultPointCallback !== null && this.resultPointCallback !== void 0) {
              this.resultPointCallback.foundPossibleResultPoint(point);
            }
          }
          return true;
        }
      }
      return false;
    };
    FinderPatternFinder2.prototype.findRowSkip = function() {
      var e_1, _a2;
      var max = this.possibleCenters.length;
      if (max <= 1) {
        return 0;
      }
      var firstConfirmedCenter = null;
      try {
        for (var _b = __values27(this.possibleCenters), _c = _b.next(); !_c.done; _c = _b.next()) {
          var center = _c.value;
          if (center.getCount() >= FinderPatternFinder2.CENTER_QUORUM) {
            if (firstConfirmedCenter == null) {
              firstConfirmedCenter = center;
            } else {
              this.hasSkipped = true;
              return (
                /*(int) */
                Math.floor((Math.abs(firstConfirmedCenter.getX() - center.getX()) - Math.abs(firstConfirmedCenter.getY() - center.getY())) / 2)
              );
            }
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return 0;
    };
    FinderPatternFinder2.prototype.haveMultiplyConfirmedCenters = function() {
      var e_2, _a2, e_3, _b;
      var confirmedCount = 0;
      var totalModuleSize = 0;
      var max = this.possibleCenters.length;
      try {
        for (var _c = __values27(this.possibleCenters), _d = _c.next(); !_d.done; _d = _c.next()) {
          var pattern = _d.value;
          if (pattern.getCount() >= FinderPatternFinder2.CENTER_QUORUM) {
            confirmedCount++;
            totalModuleSize += pattern.getEstimatedModuleSize();
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      if (confirmedCount < 3) {
        return false;
      }
      var average = totalModuleSize / max;
      var totalDeviation = 0;
      try {
        for (var _e = __values27(this.possibleCenters), _f = _e.next(); !_f.done; _f = _e.next()) {
          var pattern = _f.value;
          totalDeviation += Math.abs(pattern.getEstimatedModuleSize() - average);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      return totalDeviation <= 0.05 * totalModuleSize;
    };
    FinderPatternFinder2.prototype.selectBestPatterns = function() {
      var e_4, _a2, e_5, _b;
      var startSize = this.possibleCenters.length;
      if (startSize < 3) {
        throw new NotFoundException_default();
      }
      var possibleCenters = this.possibleCenters;
      var average;
      if (startSize > 3) {
        var totalModuleSize = 0;
        var square = 0;
        try {
          for (var _c = __values27(this.possibleCenters), _d = _c.next(); !_d.done; _d = _c.next()) {
            var center = _d.value;
            var size = center.getEstimatedModuleSize();
            totalModuleSize += size;
            square += size * size;
          }
        } catch (e_4_1) {
          e_4 = {
            error: e_4_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
        average = totalModuleSize / startSize;
        var stdDev = Math.sqrt(square / startSize - average * average);
        possibleCenters.sort(
          /**
           * <p>Orders by furthest from average</p>
           */
          // FurthestFromAverageComparator implements Comparator<FinderPattern>
          function(center1, center2) {
            var dA = Math.abs(center2.getEstimatedModuleSize() - average);
            var dB = Math.abs(center1.getEstimatedModuleSize() - average);
            return dA < dB ? -1 : dA > dB ? 1 : 0;
          }
        );
        var limit = Math.max(0.2 * average, stdDev);
        for (var i = 0; i < possibleCenters.length && possibleCenters.length > 3; i++) {
          var pattern = possibleCenters[i];
          if (Math.abs(pattern.getEstimatedModuleSize() - average) > limit) {
            possibleCenters.splice(i, 1);
            i--;
          }
        }
      }
      if (possibleCenters.length > 3) {
        var totalModuleSize = 0;
        try {
          for (var possibleCenters_1 = __values27(possibleCenters), possibleCenters_1_1 = possibleCenters_1.next(); !possibleCenters_1_1.done; possibleCenters_1_1 = possibleCenters_1.next()) {
            var possibleCenter = possibleCenters_1_1.value;
            totalModuleSize += possibleCenter.getEstimatedModuleSize();
          }
        } catch (e_5_1) {
          e_5 = {
            error: e_5_1
          };
        } finally {
          try {
            if (possibleCenters_1_1 && !possibleCenters_1_1.done && (_b = possibleCenters_1.return)) _b.call(possibleCenters_1);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
        average = totalModuleSize / possibleCenters.length;
        possibleCenters.sort(
          /**
           * <p>Orders by {@link FinderPattern#getCount()}, descending.</p>
           */
          // CenterComparator implements Comparator<FinderPattern>
          function(center1, center2) {
            if (center2.getCount() === center1.getCount()) {
              var dA = Math.abs(center2.getEstimatedModuleSize() - average);
              var dB = Math.abs(center1.getEstimatedModuleSize() - average);
              return dA < dB ? 1 : dA > dB ? -1 : 0;
            } else {
              return center2.getCount() - center1.getCount();
            }
          }
        );
        possibleCenters.splice(3);
      }
      return [possibleCenters[0], possibleCenters[1], possibleCenters[2]];
    };
    FinderPatternFinder2.CENTER_QUORUM = 2;
    FinderPatternFinder2.MIN_SKIP = 3;
    FinderPatternFinder2.MAX_MODULES = 57;
    return FinderPatternFinder2;
  }()
);
var FinderPatternFinder_default = FinderPatternFinder;

// node_modules/@zxing/library/esm/core/qrcode/detector/Detector.js
var Detector3 = (
  /** @class */
  function() {
    function Detector5(image) {
      this.image = image;
    }
    Detector5.prototype.getImage = function() {
      return this.image;
    };
    Detector5.prototype.getResultPointCallback = function() {
      return this.resultPointCallback;
    };
    Detector5.prototype.detect = function(hints) {
      this.resultPointCallback = hints === null || hints === void 0 ? null : (
        /*(ResultPointCallback) */
        hints.get(DecodeHintType_default.NEED_RESULT_POINT_CALLBACK)
      );
      var finder = new FinderPatternFinder_default(this.image, this.resultPointCallback);
      var info = finder.find(hints);
      return this.processFinderPatternInfo(info);
    };
    Detector5.prototype.processFinderPatternInfo = function(info) {
      var topLeft = info.getTopLeft();
      var topRight = info.getTopRight();
      var bottomLeft = info.getBottomLeft();
      var moduleSize = this.calculateModuleSize(topLeft, topRight, bottomLeft);
      if (moduleSize < 1) {
        throw new NotFoundException_default("No pattern found in proccess finder.");
      }
      var dimension = Detector5.computeDimension(topLeft, topRight, bottomLeft, moduleSize);
      var provisionalVersion = Version_default2.getProvisionalVersionForDimension(dimension);
      var modulesBetweenFPCenters = provisionalVersion.getDimensionForVersion() - 7;
      var alignmentPattern = null;
      if (provisionalVersion.getAlignmentPatternCenters().length > 0) {
        var bottomRightX = topRight.getX() - topLeft.getX() + bottomLeft.getX();
        var bottomRightY = topRight.getY() - topLeft.getY() + bottomLeft.getY();
        var correctionToTopLeft = 1 - 3 / modulesBetweenFPCenters;
        var estAlignmentX = (
          /*(int) */
          Math.floor(topLeft.getX() + correctionToTopLeft * (bottomRightX - topLeft.getX()))
        );
        var estAlignmentY = (
          /*(int) */
          Math.floor(topLeft.getY() + correctionToTopLeft * (bottomRightY - topLeft.getY()))
        );
        for (var i = 4; i <= 16; i <<= 1) {
          try {
            alignmentPattern = this.findAlignmentInRegion(moduleSize, estAlignmentX, estAlignmentY, i);
            break;
          } catch (re) {
            if (!(re instanceof NotFoundException_default)) {
              throw re;
            }
          }
        }
      }
      var transform = Detector5.createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension);
      var bits = Detector5.sampleGrid(this.image, transform, dimension);
      var points;
      if (alignmentPattern === null) {
        points = [bottomLeft, topLeft, topRight];
      } else {
        points = [bottomLeft, topLeft, topRight, alignmentPattern];
      }
      return new DetectorResult_default(bits, points);
    };
    Detector5.createTransform = function(topLeft, topRight, bottomLeft, alignmentPattern, dimension) {
      var dimMinusThree = dimension - 3.5;
      var bottomRightX;
      var bottomRightY;
      var sourceBottomRightX;
      var sourceBottomRightY;
      if (alignmentPattern !== null) {
        bottomRightX = alignmentPattern.getX();
        bottomRightY = alignmentPattern.getY();
        sourceBottomRightX = dimMinusThree - 3;
        sourceBottomRightY = sourceBottomRightX;
      } else {
        bottomRightX = topRight.getX() - topLeft.getX() + bottomLeft.getX();
        bottomRightY = topRight.getY() - topLeft.getY() + bottomLeft.getY();
        sourceBottomRightX = dimMinusThree;
        sourceBottomRightY = dimMinusThree;
      }
      return PerspectiveTransform_default.quadrilateralToQuadrilateral(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRightX, bottomRightY, bottomLeft.getX(), bottomLeft.getY());
    };
    Detector5.sampleGrid = function(image, transform, dimension) {
      var sampler = GridSamplerInstance_default.getInstance();
      return sampler.sampleGridWithTransform(image, dimension, dimension, transform);
    };
    Detector5.computeDimension = function(topLeft, topRight, bottomLeft, moduleSize) {
      var tltrCentersDimension = MathUtils_default.round(ResultPoint_default.distance(topLeft, topRight) / moduleSize);
      var tlblCentersDimension = MathUtils_default.round(ResultPoint_default.distance(topLeft, bottomLeft) / moduleSize);
      var dimension = Math.floor((tltrCentersDimension + tlblCentersDimension) / 2) + 7;
      switch (dimension & 3) {
        case 0:
          dimension++;
          break;
        case 2:
          dimension--;
          break;
        case 3:
          throw new NotFoundException_default("Dimensions could be not found.");
      }
      return dimension;
    };
    Detector5.prototype.calculateModuleSize = function(topLeft, topRight, bottomLeft) {
      return (this.calculateModuleSizeOneWay(topLeft, topRight) + this.calculateModuleSizeOneWay(topLeft, bottomLeft)) / 2;
    };
    Detector5.prototype.calculateModuleSizeOneWay = function(pattern, otherPattern) {
      var moduleSizeEst1 = this.sizeOfBlackWhiteBlackRunBothWays(
        /*(int) */
        Math.floor(pattern.getX()),
        /*(int) */
        Math.floor(pattern.getY()),
        /*(int) */
        Math.floor(otherPattern.getX()),
        /*(int) */
        Math.floor(otherPattern.getY())
      );
      var moduleSizeEst2 = this.sizeOfBlackWhiteBlackRunBothWays(
        /*(int) */
        Math.floor(otherPattern.getX()),
        /*(int) */
        Math.floor(otherPattern.getY()),
        /*(int) */
        Math.floor(pattern.getX()),
        /*(int) */
        Math.floor(pattern.getY())
      );
      if (isNaN(moduleSizeEst1)) {
        return moduleSizeEst2 / 7;
      }
      if (isNaN(moduleSizeEst2)) {
        return moduleSizeEst1 / 7;
      }
      return (moduleSizeEst1 + moduleSizeEst2) / 14;
    };
    Detector5.prototype.sizeOfBlackWhiteBlackRunBothWays = function(fromX, fromY, toX, toY) {
      var result = this.sizeOfBlackWhiteBlackRun(fromX, fromY, toX, toY);
      var scale = 1;
      var otherToX = fromX - (toX - fromX);
      if (otherToX < 0) {
        scale = fromX / /*(float) */
        (fromX - otherToX);
        otherToX = 0;
      } else if (otherToX >= this.image.getWidth()) {
        scale = (this.image.getWidth() - 1 - fromX) / /*(float) */
        (otherToX - fromX);
        otherToX = this.image.getWidth() - 1;
      }
      var otherToY = (
        /*(int) */
        Math.floor(fromY - (toY - fromY) * scale)
      );
      scale = 1;
      if (otherToY < 0) {
        scale = fromY / /*(float) */
        (fromY - otherToY);
        otherToY = 0;
      } else if (otherToY >= this.image.getHeight()) {
        scale = (this.image.getHeight() - 1 - fromY) / /*(float) */
        (otherToY - fromY);
        otherToY = this.image.getHeight() - 1;
      }
      otherToX = /*(int) */
      Math.floor(fromX + (otherToX - fromX) * scale);
      result += this.sizeOfBlackWhiteBlackRun(fromX, fromY, otherToX, otherToY);
      return result - 1;
    };
    Detector5.prototype.sizeOfBlackWhiteBlackRun = function(fromX, fromY, toX, toY) {
      var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
      if (steep) {
        var temp = fromX;
        fromX = fromY;
        fromY = temp;
        temp = toX;
        toX = toY;
        toY = temp;
      }
      var dx = Math.abs(toX - fromX);
      var dy = Math.abs(toY - fromY);
      var error = -dx / 2;
      var xstep = fromX < toX ? 1 : -1;
      var ystep = fromY < toY ? 1 : -1;
      var state = 0;
      var xLimit = toX + xstep;
      for (var x = fromX, y = fromY; x !== xLimit; x += xstep) {
        var realX = steep ? y : x;
        var realY = steep ? x : y;
        if (state === 1 === this.image.get(realX, realY)) {
          if (state === 2) {
            return MathUtils_default.distance(x, y, fromX, fromY);
          }
          state++;
        }
        error += dy;
        if (error > 0) {
          if (y === toY) {
            break;
          }
          y += ystep;
          error -= dx;
        }
      }
      if (state === 2) {
        return MathUtils_default.distance(toX + xstep, toY, fromX, fromY);
      }
      return NaN;
    };
    Detector5.prototype.findAlignmentInRegion = function(overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
      var allowance = (
        /*(int) */
        Math.floor(allowanceFactor * overallEstModuleSize)
      );
      var alignmentAreaLeftX = Math.max(0, estAlignmentX - allowance);
      var alignmentAreaRightX = Math.min(this.image.getWidth() - 1, estAlignmentX + allowance);
      if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
        throw new NotFoundException_default("Alignment top exceeds estimated module size.");
      }
      var alignmentAreaTopY = Math.max(0, estAlignmentY - allowance);
      var alignmentAreaBottomY = Math.min(this.image.getHeight() - 1, estAlignmentY + allowance);
      if (alignmentAreaBottomY - alignmentAreaTopY < overallEstModuleSize * 3) {
        throw new NotFoundException_default("Alignment bottom exceeds estimated module size.");
      }
      var alignmentFinder = new AlignmentPatternFinder_default(this.image, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize, this.resultPointCallback);
      return alignmentFinder.find();
    };
    return Detector5;
  }()
);
var Detector_default3 = Detector3;

// node_modules/@zxing/library/esm/core/qrcode/QRCodeReader.js
var QRCodeReader = (
  /** @class */
  function() {
    function QRCodeReader2() {
      this.decoder = new Decoder_default3();
    }
    QRCodeReader2.prototype.getDecoder = function() {
      return this.decoder;
    };
    QRCodeReader2.prototype.decode = function(image, hints) {
      var decoderResult;
      var points;
      if (hints !== void 0 && hints !== null && void 0 !== hints.get(DecodeHintType_default.PURE_BARCODE)) {
        var bits = QRCodeReader2.extractPureBits(image.getBlackMatrix());
        decoderResult = this.decoder.decodeBitMatrix(bits, hints);
        points = QRCodeReader2.NO_POINTS;
      } else {
        var detectorResult = new Detector_default3(image.getBlackMatrix()).detect(hints);
        decoderResult = this.decoder.decodeBitMatrix(detectorResult.getBits(), hints);
        points = detectorResult.getPoints();
      }
      if (decoderResult.getOther() instanceof QRCodeDecoderMetaData_default) {
        decoderResult.getOther().applyMirroredCorrection(points);
      }
      var result = new Result_default(decoderResult.getText(), decoderResult.getRawBytes(), void 0, points, BarcodeFormat_default.QR_CODE, void 0);
      var byteSegments = decoderResult.getByteSegments();
      if (byteSegments !== null) {
        result.putMetadata(ResultMetadataType_default.BYTE_SEGMENTS, byteSegments);
      }
      var ecLevel = decoderResult.getECLevel();
      if (ecLevel !== null) {
        result.putMetadata(ResultMetadataType_default.ERROR_CORRECTION_LEVEL, ecLevel);
      }
      if (decoderResult.hasStructuredAppend()) {
        result.putMetadata(ResultMetadataType_default.STRUCTURED_APPEND_SEQUENCE, decoderResult.getStructuredAppendSequenceNumber());
        result.putMetadata(ResultMetadataType_default.STRUCTURED_APPEND_PARITY, decoderResult.getStructuredAppendParity());
      }
      return result;
    };
    QRCodeReader2.prototype.reset = function() {
    };
    QRCodeReader2.extractPureBits = function(image) {
      var leftTopBlack = image.getTopLeftOnBit();
      var rightBottomBlack = image.getBottomRightOnBit();
      if (leftTopBlack === null || rightBottomBlack === null) {
        throw new NotFoundException_default();
      }
      var moduleSize = this.moduleSize(leftTopBlack, image);
      var top = leftTopBlack[1];
      var bottom = rightBottomBlack[1];
      var left = leftTopBlack[0];
      var right = rightBottomBlack[0];
      if (left >= right || top >= bottom) {
        throw new NotFoundException_default();
      }
      if (bottom - top !== right - left) {
        right = left + (bottom - top);
        if (right >= image.getWidth()) {
          throw new NotFoundException_default();
        }
      }
      var matrixWidth = Math.round((right - left + 1) / moduleSize);
      var matrixHeight = Math.round((bottom - top + 1) / moduleSize);
      if (matrixWidth <= 0 || matrixHeight <= 0) {
        throw new NotFoundException_default();
      }
      if (matrixHeight !== matrixWidth) {
        throw new NotFoundException_default();
      }
      var nudge = (
        /*(int) */
        Math.floor(moduleSize / 2)
      );
      top += nudge;
      left += nudge;
      var nudgedTooFarRight = left + /*(int) */
      Math.floor((matrixWidth - 1) * moduleSize) - right;
      if (nudgedTooFarRight > 0) {
        if (nudgedTooFarRight > nudge) {
          throw new NotFoundException_default();
        }
        left -= nudgedTooFarRight;
      }
      var nudgedTooFarDown = top + /*(int) */
      Math.floor((matrixHeight - 1) * moduleSize) - bottom;
      if (nudgedTooFarDown > 0) {
        if (nudgedTooFarDown > nudge) {
          throw new NotFoundException_default();
        }
        top -= nudgedTooFarDown;
      }
      var bits = new BitMatrix_default(matrixWidth, matrixHeight);
      for (var y = 0; y < matrixHeight; y++) {
        var iOffset = top + /*(int) */
        Math.floor(y * moduleSize);
        for (var x = 0; x < matrixWidth; x++) {
          if (image.get(left + /*(int) */
          Math.floor(x * moduleSize), iOffset)) {
            bits.set(x, y);
          }
        }
      }
      return bits;
    };
    QRCodeReader2.moduleSize = function(leftTopBlack, image) {
      var height = image.getHeight();
      var width = image.getWidth();
      var x = leftTopBlack[0];
      var y = leftTopBlack[1];
      var inBlack = true;
      var transitions = 0;
      while (x < width && y < height) {
        if (inBlack !== image.get(x, y)) {
          if (++transitions === 5) {
            break;
          }
          inBlack = !inBlack;
        }
        x++;
        y++;
      }
      if (x === width || y === height) {
        throw new NotFoundException_default();
      }
      return (x - leftTopBlack[0]) / 7;
    };
    QRCodeReader2.NO_POINTS = new Array();
    return QRCodeReader2;
  }()
);
var QRCodeReader_default = QRCodeReader;

// node_modules/@zxing/library/esm/core/pdf417/PDF417Common.js
var __values28 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var PDF417Common = (
  /** @class */
  function() {
    function PDF417Common2() {
    }
    PDF417Common2.prototype.PDF417Common = function() {
    };
    PDF417Common2.getBitCountSum = function(moduleBitCount) {
      return MathUtils_default.sum(moduleBitCount);
    };
    PDF417Common2.toIntArray = function(list) {
      var e_1, _a2;
      if (list == null || !list.length) {
        return PDF417Common2.EMPTY_INT_ARRAY;
      }
      var result = new Int32Array(list.length);
      var i = 0;
      try {
        for (var list_1 = __values28(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
          var integer = list_1_1.value;
          result[i++] = integer;
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (list_1_1 && !list_1_1.done && (_a2 = list_1.return)) _a2.call(list_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return result;
    };
    PDF417Common2.getCodeword = function(symbol) {
      var i = Arrays_default.binarySearch(PDF417Common2.SYMBOL_TABLE, symbol & 262143);
      if (i < 0) {
        return -1;
      }
      return (PDF417Common2.CODEWORD_TABLE[i] - 1) % PDF417Common2.NUMBER_OF_CODEWORDS;
    };
    PDF417Common2.NUMBER_OF_CODEWORDS = 929;
    PDF417Common2.MAX_CODEWORDS_IN_BARCODE = PDF417Common2.NUMBER_OF_CODEWORDS - 1;
    PDF417Common2.MIN_ROWS_IN_BARCODE = 3;
    PDF417Common2.MAX_ROWS_IN_BARCODE = 90;
    PDF417Common2.MODULES_IN_CODEWORD = 17;
    PDF417Common2.MODULES_IN_STOP_PATTERN = 18;
    PDF417Common2.BARS_IN_MODULE = 8;
    PDF417Common2.EMPTY_INT_ARRAY = new Int32Array([]);
    PDF417Common2.SYMBOL_TABLE = Int32Array.from([66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632, 66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936, 66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150, 67164, 67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398, 67404, 67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692, 67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800, 67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960, 67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068, 68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536, 68546, 68548, 68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764, 68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996, 69e3, 69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108, 69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272, 69296, 69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554, 69556, 69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918, 69920, 69948, 69952, 70008, 70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152, 70174, 70176, 70264, 70384, 70412, 70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630, 70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896, 71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452, 71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758, 71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910, 71916, 71930, 71950, 71964, 71992, 72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180, 72206, 72220, 72248, 72304, 72318, 72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668, 72674, 72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950, 72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226, 73234, 73236, 73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420, 73432, 73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858, 73860, 73872, 73886, 73888, 73916, 73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160, 74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272, 74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638, 74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812, 74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576, 75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736, 75758, 75808, 75836, 75840, 75896, 76016, 76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296, 77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688, 77702, 77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966, 77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268, 78278, 78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768, 78782, 78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352, 79368, 79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740, 79772, 79800, 79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894, 79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078, 80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224, 80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364, 80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632, 80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828, 80844, 80856, 80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990, 80998, 81004, 81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160, 81168, 81182, 81184, 81212, 81216, 81272, 81286, 81292, 81304, 81328, 81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500, 81506, 81508, 81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734, 81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180, 82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328, 82352, 82366, 82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736, 82750, 82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974, 82976, 83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552, 83580, 83648, 83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028, 84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184, 85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776, 85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966, 85980, 86048, 86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536, 89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998, 90012, 90040, 90190, 90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528, 90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912, 90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360, 91388, 91584, 91640, 91664, 91678, 91680, 91708, 91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100, 92104, 92112, 92126, 92134, 92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248, 93304, 93424, 93664, 93720, 93744, 93758, 93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156, 94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398, 94414, 94428, 94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664, 94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844, 94912, 94968, 94990, 95004, 95032, 95088, 95102, 95112, 95120, 95134, 95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424, 95480, 95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060, 96064, 96120, 96152, 96176, 96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296, 96310, 96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416, 96444, 96454, 96460, 96472, 96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632, 96646, 96652, 96664, 96688, 96702, 96718, 96732, 96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008, 97030, 97036, 97048, 97072, 97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260, 97326, 97330, 97332, 97358, 97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488, 97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668, 97672, 97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774, 97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024, 98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932, 98968, 99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386, 99398, 99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548, 99554, 99556, 99560, 99574, 99590, 99596, 99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792, 99806, 99814, 99820, 99834, 99858, 99860, 99874, 99880, 99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044, 100056, 100078, 100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396, 100410, 100422, 100428, 100440, 100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578, 100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732, 100750, 100792, 100802, 100808, 100816, 100830, 100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988, 101056, 101112, 101148, 101176, 101232, 101246, 101250, 101252, 101256, 101264, 101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362, 101364, 101410, 101412, 101416, 101430, 101442, 101448, 101456, 101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536, 101564, 101580, 101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696, 101752, 101766, 101784, 101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986, 101988, 101992, 102030, 102044, 102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232, 102254, 102282, 102290, 102292, 102306, 102308, 102312, 102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534, 102552, 102576, 102590, 102606, 102620, 102626, 102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850, 102856, 102864, 102878, 102886, 102892, 102906, 102936, 102974, 103008, 103036, 103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366, 103372, 103384, 103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048, 104062, 104160, 104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326, 104332, 104344, 104368, 104382, 104398, 104412, 104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528, 104542, 104550, 104570, 104578, 104580, 104592, 104606, 104608, 104636, 104652, 104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768, 104824, 104838, 104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080, 105200, 105240, 105278, 105312, 105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564, 105570, 105572, 105576, 105614, 105628, 105656, 105666, 105672, 105680, 105702, 105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932, 105970, 105972, 106006, 106022, 106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174, 106190, 106210, 106212, 106216, 106250, 106258, 106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414, 106418, 106420, 106566, 106572, 106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758, 106764, 106776, 106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974, 106982, 106988, 107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394, 107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502, 107506, 107508, 107544, 107568, 107582, 107616, 107644, 107712, 107768, 108016, 108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320, 108348, 108352, 108408, 108422, 108428, 108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592, 108640, 108668, 108736, 108792, 109040, 109536, 109680, 109694, 109792, 109820, 110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348, 110360, 110384, 110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686, 110714, 110722, 110724, 110728, 110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856, 110864, 110878, 110880, 110908, 110912, 110968, 110982, 111e3, 111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134, 111136, 111164, 111168, 111224, 111344, 111372, 111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590, 111632, 111646, 111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514, 112516, 112520, 112528, 112542, 112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836, 112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022, 113026, 113028, 113032, 113040, 113054, 113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264, 113278, 113376, 113404, 113416, 113424, 113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708, 113734, 113740, 113752, 113778, 113780, 113798, 113804, 113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968, 113982, 114016, 114044, 114076, 114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242, 114244, 114248, 114256, 114270, 114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364, 114380, 114420, 114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532, 114536, 114842, 114866, 114868, 114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250, 115252, 115278, 115292, 115298, 115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494, 115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762, 115764, 115790, 115804, 115810, 115812, 115816, 115830, 115854, 115868, 115896, 115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024, 116080, 116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206, 116210, 116212, 116246, 116262, 116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400, 116414, 116430, 116444, 116450, 116452, 116456, 116498, 116500, 116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574, 116582, 116588, 116602, 116654, 116694, 116714, 116762, 116782, 116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892, 116920, 116930, 116936, 116944, 116958, 116966, 116972, 116986, 117006, 117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230, 117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568, 117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750, 117782, 117798, 117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988, 117992, 118022, 118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210, 118212, 118216, 118224, 118238, 118246, 118266, 118306, 118312, 118338, 118352, 118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514, 118516, 118574, 118578, 118580, 118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738, 118740, 118830, 118834, 118836, 118862, 118876, 118882, 118884, 118888, 118902, 118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068, 119096, 119152, 119166, 119170, 119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278, 119282, 119284, 119324, 119352, 119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686, 119692, 119704, 119728, 119742, 119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060, 120256, 120312, 120324, 120328, 120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638, 120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812, 120870, 120876, 120890, 120902, 120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038, 121058, 121060, 121064, 121078, 121100, 121112, 121136, 121150, 121184, 121212, 121244, 121282, 121284, 121288, 121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440, 121468, 121536, 121592, 121656, 121730, 121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924, 121928, 121936, 121950, 121958, 121978, 121986, 121988, 121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144, 122172, 122176, 122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460, 122466, 122468, 122472, 122510, 122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662, 122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770, 122772, 122786, 122788, 122792, 123018, 123026, 123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154, 123156, 123170, 123172, 123176, 123190, 123202, 123204, 123208, 123216, 123238, 123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412, 123426, 123428, 123432, 123446, 123458, 123464, 123472, 123486, 123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552, 123580, 123590, 123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740, 123746, 123748, 123752, 123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984, 123998, 124006, 124012, 124026, 124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148, 124162, 124164, 124168, 124176, 124190, 124192, 124220, 124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380, 124386, 124388, 124392, 124406, 124442, 124462, 124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616, 124624, 124646, 124666, 124694, 124710, 124716, 124730, 124742, 124748, 124760, 124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964, 124968, 124982, 124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072, 125086, 125088, 125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192, 125200, 125216, 125244, 125248, 125304, 125318, 125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412, 125416, 125430, 125444, 125448, 125456, 125472, 125504, 125560, 125680, 125702, 125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852, 125880, 125890, 125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044, 126050, 126052, 126056, 126094, 126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236, 126264, 126320, 126334, 126338, 126340, 126344, 126352, 126366, 126368, 126412, 126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580, 126598, 126604, 126616, 126640, 126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760, 126774, 126786, 126788, 126792, 126800, 126814, 126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178, 127186, 127188, 127254, 127270, 127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394, 127396, 127400, 127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628, 127640, 127664, 127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784, 127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922, 127924, 128022, 128038, 128044, 128058, 128070, 128076, 128088, 128110, 128114, 128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246, 128262, 128268, 128280, 128304, 128318, 128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464, 128478, 128486, 128492, 128506, 128522, 128530, 128532, 128546, 128548, 128552, 128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656, 128670, 128672, 128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868, 128872, 128886, 128918, 128934, 128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258, 129306, 129326, 129330, 129332, 129358, 129372, 129378, 129380, 129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490, 129492, 129562, 129582, 129586, 129588, 129614, 129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720, 129730, 129732, 129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880, 129902, 129906, 129908, 129930, 129938, 129940, 129954, 129956, 129960, 129974, 130010]);
    PDF417Common2.CODEWORD_TABLE = Int32Array.from([2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511, 873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752, 1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629, 1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576, 569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653, 1651, 1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900, 910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262, 257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052, 202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266, 1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434, 1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701, 2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592, 2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415, 1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758, 142, 141, 1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108, 1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284, 2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636, 1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672, 669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343, 255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152, 157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712, 2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504, 1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709, 662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954, 1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270, 2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700]);
    return PDF417Common2;
  }()
);
var PDF417Common_default = PDF417Common;

// node_modules/@zxing/library/esm/core/pdf417/detector/PDF417DetectorResult.js
var PDF417DetectorResult = (
  /** @class */
  function() {
    function PDF417DetectorResult2(bits, points) {
      this.bits = bits;
      this.points = points;
    }
    PDF417DetectorResult2.prototype.getBits = function() {
      return this.bits;
    };
    PDF417DetectorResult2.prototype.getPoints = function() {
      return this.points;
    };
    return PDF417DetectorResult2;
  }()
);
var PDF417DetectorResult_default = PDF417DetectorResult;

// node_modules/@zxing/library/esm/core/pdf417/detector/Detector.js
var __values29 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Detector4 = (
  /** @class */
  function() {
    function Detector5() {
    }
    Detector5.detectMultiple = function(image, hints, multiple) {
      var bitMatrix = image.getBlackMatrix();
      var barcodeCoordinates = Detector5.detect(multiple, bitMatrix);
      if (!barcodeCoordinates.length) {
        bitMatrix = bitMatrix.clone();
        bitMatrix.rotate180();
        barcodeCoordinates = Detector5.detect(multiple, bitMatrix);
      }
      return new PDF417DetectorResult_default(bitMatrix, barcodeCoordinates);
    };
    Detector5.detect = function(multiple, bitMatrix) {
      var e_1, _a2;
      var barcodeCoordinates = new Array();
      var row = 0;
      var column = 0;
      var foundBarcodeInRow = false;
      while (row < bitMatrix.getHeight()) {
        var vertices = Detector5.findVertices(bitMatrix, row, column);
        if (vertices[0] == null && vertices[3] == null) {
          if (!foundBarcodeInRow) {
            break;
          }
          foundBarcodeInRow = false;
          column = 0;
          try {
            for (var barcodeCoordinates_1 = (e_1 = void 0, __values29(barcodeCoordinates)), barcodeCoordinates_1_1 = barcodeCoordinates_1.next(); !barcodeCoordinates_1_1.done; barcodeCoordinates_1_1 = barcodeCoordinates_1.next()) {
              var barcodeCoordinate = barcodeCoordinates_1_1.value;
              if (barcodeCoordinate[1] != null) {
                row = Math.trunc(Math.max(row, barcodeCoordinate[1].getY()));
              }
              if (barcodeCoordinate[3] != null) {
                row = Math.max(row, Math.trunc(barcodeCoordinate[3].getY()));
              }
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (barcodeCoordinates_1_1 && !barcodeCoordinates_1_1.done && (_a2 = barcodeCoordinates_1.return)) _a2.call(barcodeCoordinates_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          row += Detector5.ROW_STEP;
          continue;
        }
        foundBarcodeInRow = true;
        barcodeCoordinates.push(vertices);
        if (!multiple) {
          break;
        }
        if (vertices[2] != null) {
          column = Math.trunc(vertices[2].getX());
          row = Math.trunc(vertices[2].getY());
        } else {
          column = Math.trunc(vertices[4].getX());
          row = Math.trunc(vertices[4].getY());
        }
      }
      return barcodeCoordinates;
    };
    Detector5.findVertices = function(matrix, startRow, startColumn) {
      var height = matrix.getHeight();
      var width = matrix.getWidth();
      var result = new Array(8);
      Detector5.copyToResult(result, Detector5.findRowsWithPattern(matrix, height, width, startRow, startColumn, Detector5.START_PATTERN), Detector5.INDEXES_START_PATTERN);
      if (result[4] != null) {
        startColumn = Math.trunc(result[4].getX());
        startRow = Math.trunc(result[4].getY());
      }
      Detector5.copyToResult(result, Detector5.findRowsWithPattern(matrix, height, width, startRow, startColumn, Detector5.STOP_PATTERN), Detector5.INDEXES_STOP_PATTERN);
      return result;
    };
    Detector5.copyToResult = function(result, tmpResult, destinationIndexes) {
      for (var i = 0; i < destinationIndexes.length; i++) {
        result[destinationIndexes[i]] = tmpResult[i];
      }
    };
    Detector5.findRowsWithPattern = function(matrix, height, width, startRow, startColumn, pattern) {
      var result = new Array(4);
      var found = false;
      var counters = new Int32Array(pattern.length);
      for (; startRow < height; startRow += Detector5.ROW_STEP) {
        var loc = Detector5.findGuardPattern(matrix, startColumn, startRow, width, false, pattern, counters);
        if (loc != null) {
          while (startRow > 0) {
            var previousRowLoc = Detector5.findGuardPattern(matrix, startColumn, --startRow, width, false, pattern, counters);
            if (previousRowLoc != null) {
              loc = previousRowLoc;
            } else {
              startRow++;
              break;
            }
          }
          result[0] = new ResultPoint_default(loc[0], startRow);
          result[1] = new ResultPoint_default(loc[1], startRow);
          found = true;
          break;
        }
      }
      var stopRow = startRow + 1;
      if (found) {
        var skippedRowCount = 0;
        var previousRowLoc = Int32Array.from([Math.trunc(result[0].getX()), Math.trunc(result[1].getX())]);
        for (; stopRow < height; stopRow++) {
          var loc = Detector5.findGuardPattern(matrix, previousRowLoc[0], stopRow, width, false, pattern, counters);
          if (loc != null && Math.abs(previousRowLoc[0] - loc[0]) < Detector5.MAX_PATTERN_DRIFT && Math.abs(previousRowLoc[1] - loc[1]) < Detector5.MAX_PATTERN_DRIFT) {
            previousRowLoc = loc;
            skippedRowCount = 0;
          } else {
            if (skippedRowCount > Detector5.SKIPPED_ROW_COUNT_MAX) {
              break;
            } else {
              skippedRowCount++;
            }
          }
        }
        stopRow -= skippedRowCount + 1;
        result[2] = new ResultPoint_default(previousRowLoc[0], stopRow);
        result[3] = new ResultPoint_default(previousRowLoc[1], stopRow);
      }
      if (stopRow - startRow < Detector5.BARCODE_MIN_HEIGHT) {
        Arrays_default.fill(result, null);
      }
      return result;
    };
    Detector5.findGuardPattern = function(matrix, column, row, width, whiteFirst, pattern, counters) {
      Arrays_default.fillWithin(counters, 0, counters.length, 0);
      var patternStart = column;
      var pixelDrift = 0;
      while (matrix.get(patternStart, row) && patternStart > 0 && pixelDrift++ < Detector5.MAX_PIXEL_DRIFT) {
        patternStart--;
      }
      var x = patternStart;
      var counterPosition = 0;
      var patternLength = pattern.length;
      for (var isWhite = whiteFirst; x < width; x++) {
        var pixel = matrix.get(x, row);
        if (pixel !== isWhite) {
          counters[counterPosition]++;
        } else {
          if (counterPosition === patternLength - 1) {
            if (Detector5.patternMatchVariance(counters, pattern, Detector5.MAX_INDIVIDUAL_VARIANCE) < Detector5.MAX_AVG_VARIANCE) {
              return new Int32Array([patternStart, x]);
            }
            patternStart += counters[0] + counters[1];
            System_default.arraycopy(counters, 2, counters, 0, counterPosition - 1);
            counters[counterPosition - 1] = 0;
            counters[counterPosition] = 0;
            counterPosition--;
          } else {
            counterPosition++;
          }
          counters[counterPosition] = 1;
          isWhite = !isWhite;
        }
      }
      if (counterPosition === patternLength - 1 && Detector5.patternMatchVariance(counters, pattern, Detector5.MAX_INDIVIDUAL_VARIANCE) < Detector5.MAX_AVG_VARIANCE) {
        return new Int32Array([patternStart, x - 1]);
      }
      return null;
    };
    Detector5.patternMatchVariance = function(counters, pattern, maxIndividualVariance) {
      var numCounters = counters.length;
      var total = 0;
      var patternLength = 0;
      for (var i = 0; i < numCounters; i++) {
        total += counters[i];
        patternLength += pattern[i];
      }
      if (total < patternLength) {
        return (
          /*Float.POSITIVE_INFINITY*/
          Infinity
        );
      }
      var unitBarWidth = total / patternLength;
      maxIndividualVariance *= unitBarWidth;
      var totalVariance = 0;
      for (var x = 0; x < numCounters; x++) {
        var counter = counters[x];
        var scaledPattern = pattern[x] * unitBarWidth;
        var variance = counter > scaledPattern ? counter - scaledPattern : scaledPattern - counter;
        if (variance > maxIndividualVariance) {
          return (
            /*Float.POSITIVE_INFINITY*/
            Infinity
          );
        }
        totalVariance += variance;
      }
      return totalVariance / total;
    };
    Detector5.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]);
    Detector5.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]);
    Detector5.MAX_AVG_VARIANCE = 0.42;
    Detector5.MAX_INDIVIDUAL_VARIANCE = 0.8;
    Detector5.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]);
    Detector5.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]);
    Detector5.MAX_PIXEL_DRIFT = 3;
    Detector5.MAX_PATTERN_DRIFT = 5;
    Detector5.SKIPPED_ROW_COUNT_MAX = 25;
    Detector5.ROW_STEP = 5;
    Detector5.BARCODE_MIN_HEIGHT = 10;
    return Detector5;
  }()
);
var Detector_default4 = Detector4;

// node_modules/@zxing/library/esm/core/pdf417/decoder/ec/ModulusPoly.js
var __values30 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ModulusPoly = (
  /** @class */
  function() {
    function ModulusPoly2(field, coefficients) {
      if (coefficients.length === 0) {
        throw new IllegalArgumentException_default();
      }
      this.field = field;
      var coefficientsLength = (
        /*int*/
        coefficients.length
      );
      if (coefficientsLength > 1 && coefficients[0] === 0) {
        var firstNonZero = (
          /*int*/
          1
        );
        while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
          firstNonZero++;
        }
        if (firstNonZero === coefficientsLength) {
          this.coefficients = new Int32Array([0]);
        } else {
          this.coefficients = new Int32Array(coefficientsLength - firstNonZero);
          System_default.arraycopy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
        }
      } else {
        this.coefficients = coefficients;
      }
    }
    ModulusPoly2.prototype.getCoefficients = function() {
      return this.coefficients;
    };
    ModulusPoly2.prototype.getDegree = function() {
      return this.coefficients.length - 1;
    };
    ModulusPoly2.prototype.isZero = function() {
      return this.coefficients[0] === 0;
    };
    ModulusPoly2.prototype.getCoefficient = function(degree) {
      return this.coefficients[this.coefficients.length - 1 - degree];
    };
    ModulusPoly2.prototype.evaluateAt = function(a) {
      var e_1, _a2;
      if (a === 0) {
        return this.getCoefficient(0);
      }
      if (a === 1) {
        var sum = (
          /*int*/
          0
        );
        try {
          for (var _b = __values30(this.coefficients), _c = _b.next(); !_c.done; _c = _b.next()) {
            var coefficient = _c.value;
            sum = this.field.add(sum, coefficient);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return sum;
      }
      var result = (
        /*int*/
        this.coefficients[0]
      );
      var size = (
        /*int*/
        this.coefficients.length
      );
      for (var i = 1; i < size; i++) {
        result = this.field.add(this.field.multiply(a, result), this.coefficients[i]);
      }
      return result;
    };
    ModulusPoly2.prototype.add = function(other) {
      if (!this.field.equals(other.field)) {
        throw new IllegalArgumentException_default("ModulusPolys do not have same ModulusGF field");
      }
      if (this.isZero()) {
        return other;
      }
      if (other.isZero()) {
        return this;
      }
      var smallerCoefficients = this.coefficients;
      var largerCoefficients = other.coefficients;
      if (smallerCoefficients.length > largerCoefficients.length) {
        var temp = smallerCoefficients;
        smallerCoefficients = largerCoefficients;
        largerCoefficients = temp;
      }
      var sumDiff = new Int32Array(largerCoefficients.length);
      var lengthDiff = (
        /*int*/
        largerCoefficients.length - smallerCoefficients.length
      );
      System_default.arraycopy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
      for (var i = lengthDiff; i < largerCoefficients.length; i++) {
        sumDiff[i] = this.field.add(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
      }
      return new ModulusPoly2(this.field, sumDiff);
    };
    ModulusPoly2.prototype.subtract = function(other) {
      if (!this.field.equals(other.field)) {
        throw new IllegalArgumentException_default("ModulusPolys do not have same ModulusGF field");
      }
      if (other.isZero()) {
        return this;
      }
      return this.add(other.negative());
    };
    ModulusPoly2.prototype.multiply = function(other) {
      if (other instanceof ModulusPoly2) {
        return this.multiplyOther(other);
      }
      return this.multiplyScalar(other);
    };
    ModulusPoly2.prototype.multiplyOther = function(other) {
      if (!this.field.equals(other.field)) {
        throw new IllegalArgumentException_default("ModulusPolys do not have same ModulusGF field");
      }
      if (this.isZero() || other.isZero()) {
        return new ModulusPoly2(this.field, new Int32Array([0]));
      }
      var aCoefficients = this.coefficients;
      var aLength = (
        /*int*/
        aCoefficients.length
      );
      var bCoefficients = other.coefficients;
      var bLength = (
        /*int*/
        bCoefficients.length
      );
      var product = new Int32Array(aLength + bLength - 1);
      for (var i = 0; i < aLength; i++) {
        var aCoeff = (
          /*int*/
          aCoefficients[i]
        );
        for (var j = 0; j < bLength; j++) {
          product[i + j] = this.field.add(product[i + j], this.field.multiply(aCoeff, bCoefficients[j]));
        }
      }
      return new ModulusPoly2(this.field, product);
    };
    ModulusPoly2.prototype.negative = function() {
      var size = (
        /*int*/
        this.coefficients.length
      );
      var negativeCoefficients = new Int32Array(size);
      for (var i = 0; i < size; i++) {
        negativeCoefficients[i] = this.field.subtract(0, this.coefficients[i]);
      }
      return new ModulusPoly2(this.field, negativeCoefficients);
    };
    ModulusPoly2.prototype.multiplyScalar = function(scalar) {
      if (scalar === 0) {
        return new ModulusPoly2(this.field, new Int32Array([0]));
      }
      if (scalar === 1) {
        return this;
      }
      var size = (
        /*int*/
        this.coefficients.length
      );
      var product = new Int32Array(size);
      for (var i = 0; i < size; i++) {
        product[i] = this.field.multiply(this.coefficients[i], scalar);
      }
      return new ModulusPoly2(this.field, product);
    };
    ModulusPoly2.prototype.multiplyByMonomial = function(degree, coefficient) {
      if (degree < 0) {
        throw new IllegalArgumentException_default();
      }
      if (coefficient === 0) {
        return new ModulusPoly2(this.field, new Int32Array([0]));
      }
      var size = (
        /*int*/
        this.coefficients.length
      );
      var product = new Int32Array(size + degree);
      for (var i = 0; i < size; i++) {
        product[i] = this.field.multiply(this.coefficients[i], coefficient);
      }
      return new ModulusPoly2(this.field, product);
    };
    ModulusPoly2.prototype.toString = function() {
      var result = new StringBuilder_default(
        /*8 * this.getDegree()*/
      );
      for (var degree = this.getDegree(); degree >= 0; degree--) {
        var coefficient = (
          /*int*/
          this.getCoefficient(degree)
        );
        if (coefficient !== 0) {
          if (coefficient < 0) {
            result.append(" - ");
            coefficient = -coefficient;
          } else {
            if (result.length() > 0) {
              result.append(" + ");
            }
          }
          if (degree === 0 || coefficient !== 1) {
            result.append(coefficient);
          }
          if (degree !== 0) {
            if (degree === 1) {
              result.append("x");
            } else {
              result.append("x^");
              result.append(degree);
            }
          }
        }
      }
      return result.toString();
    };
    return ModulusPoly2;
  }()
);
var ModulusPoly_default = ModulusPoly;

// node_modules/@zxing/library/esm/core/pdf417/decoder/ec/ModulusBase.js
var ModulusBase = (
  /** @class */
  function() {
    function ModulusBase2() {
    }
    ModulusBase2.prototype.add = function(a, b) {
      return (a + b) % this.modulus;
    };
    ModulusBase2.prototype.subtract = function(a, b) {
      return (this.modulus + a - b) % this.modulus;
    };
    ModulusBase2.prototype.exp = function(a) {
      return this.expTable[a];
    };
    ModulusBase2.prototype.log = function(a) {
      if (a === 0) {
        throw new IllegalArgumentException_default();
      }
      return this.logTable[a];
    };
    ModulusBase2.prototype.inverse = function(a) {
      if (a === 0) {
        throw new ArithmeticException_default();
      }
      return this.expTable[this.modulus - this.logTable[a] - 1];
    };
    ModulusBase2.prototype.multiply = function(a, b) {
      if (a === 0 || b === 0) {
        return 0;
      }
      return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.modulus - 1)];
    };
    ModulusBase2.prototype.getSize = function() {
      return this.modulus;
    };
    ModulusBase2.prototype.equals = function(o) {
      return o === this;
    };
    return ModulusBase2;
  }()
);
var ModulusBase_default = ModulusBase;

// node_modules/@zxing/library/esm/core/pdf417/decoder/ec/ModulusGF.js
var __extends56 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ModulusGF = (
  /** @class */
  function(_super) {
    __extends56(ModulusGF2, _super);
    function ModulusGF2(modulus, generator) {
      var _this = _super.call(this) || this;
      _this.modulus = modulus;
      _this.expTable = new Int32Array(modulus);
      _this.logTable = new Int32Array(modulus);
      var x = (
        /*int*/
        1
      );
      for (var i = 0; i < modulus; i++) {
        _this.expTable[i] = x;
        x = x * generator % modulus;
      }
      for (var i = 0; i < modulus - 1; i++) {
        _this.logTable[_this.expTable[i]] = i;
      }
      _this.zero = new ModulusPoly_default(_this, new Int32Array([0]));
      _this.one = new ModulusPoly_default(_this, new Int32Array([1]));
      return _this;
    }
    ModulusGF2.prototype.getZero = function() {
      return this.zero;
    };
    ModulusGF2.prototype.getOne = function() {
      return this.one;
    };
    ModulusGF2.prototype.buildMonomial = function(degree, coefficient) {
      if (degree < 0) {
        throw new IllegalArgumentException_default();
      }
      if (coefficient === 0) {
        return this.zero;
      }
      var coefficients = new Int32Array(degree + 1);
      coefficients[0] = coefficient;
      return new ModulusPoly_default(this, coefficients);
    };
    ModulusGF2.PDF417_GF = new ModulusGF2(PDF417Common_default.NUMBER_OF_CODEWORDS, 3);
    return ModulusGF2;
  }(ModulusBase_default)
);
var ModulusGF_default = ModulusGF;

// node_modules/@zxing/library/esm/core/pdf417/decoder/ec/ErrorCorrection.js
var __values31 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ErrorCorrection = (
  /** @class */
  function() {
    function ErrorCorrection3() {
      this.field = ModulusGF_default.PDF417_GF;
    }
    ErrorCorrection3.prototype.decode = function(received, numECCodewords, erasures) {
      var e_1, _a2;
      var poly = new ModulusPoly_default(this.field, received);
      var S = new Int32Array(numECCodewords);
      var error = false;
      for (var i = numECCodewords; i > 0; i--) {
        var evaluation = poly.evaluateAt(this.field.exp(i));
        S[numECCodewords - i] = evaluation;
        if (evaluation !== 0) {
          error = true;
        }
      }
      if (!error) {
        return 0;
      }
      var knownErrors = this.field.getOne();
      if (erasures != null) {
        try {
          for (var erasures_1 = __values31(erasures), erasures_1_1 = erasures_1.next(); !erasures_1_1.done; erasures_1_1 = erasures_1.next()) {
            var erasure = erasures_1_1.value;
            var b = this.field.exp(received.length - 1 - erasure);
            var term = new ModulusPoly_default(this.field, new Int32Array([this.field.subtract(0, b), 1]));
            knownErrors = knownErrors.multiply(term);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (erasures_1_1 && !erasures_1_1.done && (_a2 = erasures_1.return)) _a2.call(erasures_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      var syndrome = new ModulusPoly_default(this.field, S);
      var sigmaOmega = this.runEuclideanAlgorithm(this.field.buildMonomial(numECCodewords, 1), syndrome, numECCodewords);
      var sigma = sigmaOmega[0];
      var omega = sigmaOmega[1];
      var errorLocations = this.findErrorLocations(sigma);
      var errorMagnitudes = this.findErrorMagnitudes(omega, sigma, errorLocations);
      for (var i = 0; i < errorLocations.length; i++) {
        var position = received.length - 1 - this.field.log(errorLocations[i]);
        if (position < 0) {
          throw ChecksumException_default.getChecksumInstance();
        }
        received[position] = this.field.subtract(received[position], errorMagnitudes[i]);
      }
      return errorLocations.length;
    };
    ErrorCorrection3.prototype.runEuclideanAlgorithm = function(a, b, R) {
      if (a.getDegree() < b.getDegree()) {
        var temp = a;
        a = b;
        b = temp;
      }
      var rLast = a;
      var r = b;
      var tLast = this.field.getZero();
      var t = this.field.getOne();
      while (r.getDegree() >= Math.round(R / 2)) {
        var rLastLast = rLast;
        var tLastLast = tLast;
        rLast = r;
        tLast = t;
        if (rLast.isZero()) {
          throw ChecksumException_default.getChecksumInstance();
        }
        r = rLastLast;
        var q = this.field.getZero();
        var denominatorLeadingTerm = rLast.getCoefficient(rLast.getDegree());
        var dltInverse = this.field.inverse(denominatorLeadingTerm);
        while (r.getDegree() >= rLast.getDegree() && !r.isZero()) {
          var degreeDiff = r.getDegree() - rLast.getDegree();
          var scale = this.field.multiply(r.getCoefficient(r.getDegree()), dltInverse);
          q = q.add(this.field.buildMonomial(degreeDiff, scale));
          r = r.subtract(rLast.multiplyByMonomial(degreeDiff, scale));
        }
        t = q.multiply(tLast).subtract(tLastLast).negative();
      }
      var sigmaTildeAtZero = t.getCoefficient(0);
      if (sigmaTildeAtZero === 0) {
        throw ChecksumException_default.getChecksumInstance();
      }
      var inverse = this.field.inverse(sigmaTildeAtZero);
      var sigma = t.multiply(inverse);
      var omega = r.multiply(inverse);
      return [sigma, omega];
    };
    ErrorCorrection3.prototype.findErrorLocations = function(errorLocator) {
      var numErrors = errorLocator.getDegree();
      var result = new Int32Array(numErrors);
      var e = 0;
      for (var i = 1; i < this.field.getSize() && e < numErrors; i++) {
        if (errorLocator.evaluateAt(i) === 0) {
          result[e] = this.field.inverse(i);
          e++;
        }
      }
      if (e !== numErrors) {
        throw ChecksumException_default.getChecksumInstance();
      }
      return result;
    };
    ErrorCorrection3.prototype.findErrorMagnitudes = function(errorEvaluator, errorLocator, errorLocations) {
      var errorLocatorDegree = errorLocator.getDegree();
      var formalDerivativeCoefficients = new Int32Array(errorLocatorDegree);
      for (var i = 1; i <= errorLocatorDegree; i++) {
        formalDerivativeCoefficients[errorLocatorDegree - i] = this.field.multiply(i, errorLocator.getCoefficient(i));
      }
      var formalDerivative = new ModulusPoly_default(this.field, formalDerivativeCoefficients);
      var s = errorLocations.length;
      var result = new Int32Array(s);
      for (var i = 0; i < s; i++) {
        var xiInverse = this.field.inverse(errorLocations[i]);
        var numerator = this.field.subtract(0, errorEvaluator.evaluateAt(xiInverse));
        var denominator = this.field.inverse(formalDerivative.evaluateAt(xiInverse));
        result[i] = this.field.multiply(numerator, denominator);
      }
      return result;
    };
    return ErrorCorrection3;
  }()
);
var ErrorCorrection_default = ErrorCorrection;

// node_modules/@zxing/library/esm/core/pdf417/decoder/BoundingBox.js
var BoundingBox = (
  /** @class */
  function() {
    function BoundingBox2(image, topLeft, bottomLeft, topRight, bottomRight) {
      if (image instanceof BoundingBox2) {
        this.constructor_2(image);
      } else {
        this.constructor_1(image, topLeft, bottomLeft, topRight, bottomRight);
      }
    }
    BoundingBox2.prototype.constructor_1 = function(image, topLeft, bottomLeft, topRight, bottomRight) {
      var leftUnspecified = topLeft == null || bottomLeft == null;
      var rightUnspecified = topRight == null || bottomRight == null;
      if (leftUnspecified && rightUnspecified) {
        throw new NotFoundException_default();
      }
      if (leftUnspecified) {
        topLeft = new ResultPoint_default(0, topRight.getY());
        bottomLeft = new ResultPoint_default(0, bottomRight.getY());
      } else if (rightUnspecified) {
        topRight = new ResultPoint_default(image.getWidth() - 1, topLeft.getY());
        bottomRight = new ResultPoint_default(image.getWidth() - 1, bottomLeft.getY());
      }
      this.image = image;
      this.topLeft = topLeft;
      this.bottomLeft = bottomLeft;
      this.topRight = topRight;
      this.bottomRight = bottomRight;
      this.minX = Math.trunc(Math.min(topLeft.getX(), bottomLeft.getX()));
      this.maxX = Math.trunc(Math.max(topRight.getX(), bottomRight.getX()));
      this.minY = Math.trunc(Math.min(topLeft.getY(), topRight.getY()));
      this.maxY = Math.trunc(Math.max(bottomLeft.getY(), bottomRight.getY()));
    };
    BoundingBox2.prototype.constructor_2 = function(boundingBox) {
      this.image = boundingBox.image;
      this.topLeft = boundingBox.getTopLeft();
      this.bottomLeft = boundingBox.getBottomLeft();
      this.topRight = boundingBox.getTopRight();
      this.bottomRight = boundingBox.getBottomRight();
      this.minX = boundingBox.getMinX();
      this.maxX = boundingBox.getMaxX();
      this.minY = boundingBox.getMinY();
      this.maxY = boundingBox.getMaxY();
    };
    BoundingBox2.merge = function(leftBox, rightBox) {
      if (leftBox == null) {
        return rightBox;
      }
      if (rightBox == null) {
        return leftBox;
      }
      return new BoundingBox2(leftBox.image, leftBox.topLeft, leftBox.bottomLeft, rightBox.topRight, rightBox.bottomRight);
    };
    BoundingBox2.prototype.addMissingRows = function(missingStartRows, missingEndRows, isLeft) {
      var newTopLeft = this.topLeft;
      var newBottomLeft = this.bottomLeft;
      var newTopRight = this.topRight;
      var newBottomRight = this.bottomRight;
      if (missingStartRows > 0) {
        var top_1 = isLeft ? this.topLeft : this.topRight;
        var newMinY = Math.trunc(top_1.getY() - missingStartRows);
        if (newMinY < 0) {
          newMinY = 0;
        }
        var newTop = new ResultPoint_default(top_1.getX(), newMinY);
        if (isLeft) {
          newTopLeft = newTop;
        } else {
          newTopRight = newTop;
        }
      }
      if (missingEndRows > 0) {
        var bottom = isLeft ? this.bottomLeft : this.bottomRight;
        var newMaxY = Math.trunc(bottom.getY() + missingEndRows);
        if (newMaxY >= this.image.getHeight()) {
          newMaxY = this.image.getHeight() - 1;
        }
        var newBottom = new ResultPoint_default(bottom.getX(), newMaxY);
        if (isLeft) {
          newBottomLeft = newBottom;
        } else {
          newBottomRight = newBottom;
        }
      }
      return new BoundingBox2(this.image, newTopLeft, newBottomLeft, newTopRight, newBottomRight);
    };
    BoundingBox2.prototype.getMinX = function() {
      return this.minX;
    };
    BoundingBox2.prototype.getMaxX = function() {
      return this.maxX;
    };
    BoundingBox2.prototype.getMinY = function() {
      return this.minY;
    };
    BoundingBox2.prototype.getMaxY = function() {
      return this.maxY;
    };
    BoundingBox2.prototype.getTopLeft = function() {
      return this.topLeft;
    };
    BoundingBox2.prototype.getTopRight = function() {
      return this.topRight;
    };
    BoundingBox2.prototype.getBottomLeft = function() {
      return this.bottomLeft;
    };
    BoundingBox2.prototype.getBottomRight = function() {
      return this.bottomRight;
    };
    return BoundingBox2;
  }()
);
var BoundingBox_default = BoundingBox;

// node_modules/@zxing/library/esm/core/pdf417/decoder/BarcodeMetadata.js
var BarcodeMetadata = (
  /** @class */
  function() {
    function BarcodeMetadata2(columnCount, rowCountUpperPart, rowCountLowerPart, errorCorrectionLevel) {
      this.columnCount = columnCount;
      this.errorCorrectionLevel = errorCorrectionLevel;
      this.rowCountUpperPart = rowCountUpperPart;
      this.rowCountLowerPart = rowCountLowerPart;
      this.rowCount = rowCountUpperPart + rowCountLowerPart;
    }
    BarcodeMetadata2.prototype.getColumnCount = function() {
      return this.columnCount;
    };
    BarcodeMetadata2.prototype.getErrorCorrectionLevel = function() {
      return this.errorCorrectionLevel;
    };
    BarcodeMetadata2.prototype.getRowCount = function() {
      return this.rowCount;
    };
    BarcodeMetadata2.prototype.getRowCountUpperPart = function() {
      return this.rowCountUpperPart;
    };
    BarcodeMetadata2.prototype.getRowCountLowerPart = function() {
      return this.rowCountLowerPart;
    };
    return BarcodeMetadata2;
  }()
);
var BarcodeMetadata_default = BarcodeMetadata;

// node_modules/@zxing/library/esm/core/util/Formatter.js
var Formatter = (
  /** @class */
  function() {
    function Formatter2() {
      this.buffer = "";
    }
    Formatter2.form = function(str, arr) {
      var i = -1;
      function callback(exp, p0, p1, p2, p3, p4) {
        if (exp === "%%") return "%";
        if (arr[++i] === void 0) return void 0;
        exp = p2 ? parseInt(p2.substr(1)) : void 0;
        var base = p3 ? parseInt(p3.substr(1)) : void 0;
        var val;
        switch (p4) {
          case "s":
            val = arr[i];
            break;
          case "c":
            val = arr[i][0];
            break;
          case "f":
            val = parseFloat(arr[i]).toFixed(exp);
            break;
          case "p":
            val = parseFloat(arr[i]).toPrecision(exp);
            break;
          case "e":
            val = parseFloat(arr[i]).toExponential(exp);
            break;
          case "x":
            val = parseInt(arr[i]).toString(base ? base : 16);
            break;
          case "d":
            val = parseFloat(parseInt(arr[i], base ? base : 10).toPrecision(exp)).toFixed(0);
            break;
        }
        val = typeof val === "object" ? JSON.stringify(val) : (+val).toString(base);
        var size = parseInt(p1);
        var ch = p1 && p1[0] + "" === "0" ? "0" : " ";
        while (val.length < size) val = p0 !== void 0 ? val + ch : ch + val;
        return val;
      }
      var regex = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
      return str.replace(regex, callback);
    };
    Formatter2.prototype.format = function(append) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      this.buffer += Formatter2.form(append, args);
    };
    Formatter2.prototype.toString = function() {
      return this.buffer;
    };
    return Formatter2;
  }()
);
var Formatter_default = Formatter;

// node_modules/@zxing/library/esm/core/pdf417/decoder/DetectionResultColumn.js
var __values32 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var DetectionResultColumn = (
  /** @class */
  function() {
    function DetectionResultColumn2(boundingBox) {
      this.boundingBox = new BoundingBox_default(boundingBox);
      this.codewords = new Array(boundingBox.getMaxY() - boundingBox.getMinY() + 1);
    }
    DetectionResultColumn2.prototype.getCodewordNearby = function(imageRow) {
      var codeword = this.getCodeword(imageRow);
      if (codeword != null) {
        return codeword;
      }
      for (var i = 1; i < DetectionResultColumn2.MAX_NEARBY_DISTANCE; i++) {
        var nearImageRow = this.imageRowToCodewordIndex(imageRow) - i;
        if (nearImageRow >= 0) {
          codeword = this.codewords[nearImageRow];
          if (codeword != null) {
            return codeword;
          }
        }
        nearImageRow = this.imageRowToCodewordIndex(imageRow) + i;
        if (nearImageRow < this.codewords.length) {
          codeword = this.codewords[nearImageRow];
          if (codeword != null) {
            return codeword;
          }
        }
      }
      return null;
    };
    DetectionResultColumn2.prototype.imageRowToCodewordIndex = function(imageRow) {
      return imageRow - this.boundingBox.getMinY();
    };
    DetectionResultColumn2.prototype.setCodeword = function(imageRow, codeword) {
      this.codewords[this.imageRowToCodewordIndex(imageRow)] = codeword;
    };
    DetectionResultColumn2.prototype.getCodeword = function(imageRow) {
      return this.codewords[this.imageRowToCodewordIndex(imageRow)];
    };
    DetectionResultColumn2.prototype.getBoundingBox = function() {
      return this.boundingBox;
    };
    DetectionResultColumn2.prototype.getCodewords = function() {
      return this.codewords;
    };
    DetectionResultColumn2.prototype.toString = function() {
      var e_1, _a2;
      var formatter = new Formatter_default();
      var row = 0;
      try {
        for (var _b = __values32(this.codewords), _c = _b.next(); !_c.done; _c = _b.next()) {
          var codeword = _c.value;
          if (codeword == null) {
            formatter.format("%3d:    |   %n", row++);
            continue;
          }
          formatter.format("%3d: %3d|%3d%n", row++, codeword.getRowNumber(), codeword.getValue());
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return formatter.toString();
    };
    DetectionResultColumn2.MAX_NEARBY_DISTANCE = 5;
    return DetectionResultColumn2;
  }()
);
var DetectionResultColumn_default = DetectionResultColumn;

// node_modules/@zxing/library/esm/core/pdf417/decoder/BarcodeValue.js
var __values33 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var BarcodeValue = (
  /** @class */
  function() {
    function BarcodeValue2() {
      this.values = /* @__PURE__ */ new Map();
    }
    BarcodeValue2.prototype.setValue = function(value) {
      value = Math.trunc(value);
      var confidence = this.values.get(value);
      if (confidence == null) {
        confidence = 0;
      }
      confidence++;
      this.values.set(value, confidence);
    };
    BarcodeValue2.prototype.getValue = function() {
      var e_1, _a2;
      var maxConfidence = -1;
      var result = new Array();
      var _loop_1 = function(key2, value2) {
        var entry = {
          getKey: function() {
            return key2;
          },
          getValue: function() {
            return value2;
          }
        };
        if (entry.getValue() > maxConfidence) {
          maxConfidence = entry.getValue();
          result = [];
          result.push(entry.getKey());
        } else if (entry.getValue() === maxConfidence) {
          result.push(entry.getKey());
        }
      };
      try {
        for (var _b = __values33(this.values.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
          var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
          _loop_1(key, value);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return PDF417Common_default.toIntArray(result);
    };
    BarcodeValue2.prototype.getConfidence = function(value) {
      return this.values.get(value);
    };
    return BarcodeValue2;
  }()
);
var BarcodeValue_default = BarcodeValue;

// node_modules/@zxing/library/esm/core/pdf417/decoder/DetectionResultRowIndicatorColumn.js
var __extends57 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values34 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var DetectionResultRowIndicatorColumn = (
  /** @class */
  function(_super) {
    __extends57(DetectionResultRowIndicatorColumn2, _super);
    function DetectionResultRowIndicatorColumn2(boundingBox, isLeft) {
      var _this = _super.call(this, boundingBox) || this;
      _this._isLeft = isLeft;
      return _this;
    }
    DetectionResultRowIndicatorColumn2.prototype.setRowNumbers = function() {
      var e_1, _a2;
      try {
        for (var _b = __values34(this.getCodewords()), _c = _b.next(); !_c.done; _c = _b.next()) {
          var codeword = _c.value;
          if (codeword != null) {
            codeword.setRowNumberAsRowIndicatorColumn();
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };
    DetectionResultRowIndicatorColumn2.prototype.adjustCompleteIndicatorColumnRowNumbers = function(barcodeMetadata) {
      var codewords = this.getCodewords();
      this.setRowNumbers();
      this.removeIncorrectCodewords(codewords, barcodeMetadata);
      var boundingBox = this.getBoundingBox();
      var top = this._isLeft ? boundingBox.getTopLeft() : boundingBox.getTopRight();
      var bottom = this._isLeft ? boundingBox.getBottomLeft() : boundingBox.getBottomRight();
      var firstRow = this.imageRowToCodewordIndex(Math.trunc(top.getY()));
      var lastRow = this.imageRowToCodewordIndex(Math.trunc(bottom.getY()));
      var barcodeRow = -1;
      var maxRowHeight = 1;
      var currentRowHeight = 0;
      for (var codewordsRow = firstRow; codewordsRow < lastRow; codewordsRow++) {
        if (codewords[codewordsRow] == null) {
          continue;
        }
        var codeword = codewords[codewordsRow];
        var rowDifference = codeword.getRowNumber() - barcodeRow;
        if (rowDifference === 0) {
          currentRowHeight++;
        } else if (rowDifference === 1) {
          maxRowHeight = Math.max(maxRowHeight, currentRowHeight);
          currentRowHeight = 1;
          barcodeRow = codeword.getRowNumber();
        } else if (rowDifference < 0 || codeword.getRowNumber() >= barcodeMetadata.getRowCount() || rowDifference > codewordsRow) {
          codewords[codewordsRow] = null;
        } else {
          var checkedRows = void 0;
          if (maxRowHeight > 2) {
            checkedRows = (maxRowHeight - 2) * rowDifference;
          } else {
            checkedRows = rowDifference;
          }
          var closePreviousCodewordFound = checkedRows >= codewordsRow;
          for (var i = 1; i <= checkedRows && !closePreviousCodewordFound; i++) {
            closePreviousCodewordFound = codewords[codewordsRow - i] != null;
          }
          if (closePreviousCodewordFound) {
            codewords[codewordsRow] = null;
          } else {
            barcodeRow = codeword.getRowNumber();
            currentRowHeight = 1;
          }
        }
      }
    };
    DetectionResultRowIndicatorColumn2.prototype.getRowHeights = function() {
      var e_2, _a2;
      var barcodeMetadata = this.getBarcodeMetadata();
      if (barcodeMetadata == null) {
        return null;
      }
      this.adjustIncompleteIndicatorColumnRowNumbers(barcodeMetadata);
      var result = new Int32Array(barcodeMetadata.getRowCount());
      try {
        for (var _b = __values34(this.getCodewords()), _c = _b.next(); !_c.done; _c = _b.next()) {
          var codeword = _c.value;
          if (codeword != null) {
            var rowNumber = codeword.getRowNumber();
            if (rowNumber >= result.length) {
              continue;
            }
            result[rowNumber]++;
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      return result;
    };
    DetectionResultRowIndicatorColumn2.prototype.adjustIncompleteIndicatorColumnRowNumbers = function(barcodeMetadata) {
      var boundingBox = this.getBoundingBox();
      var top = this._isLeft ? boundingBox.getTopLeft() : boundingBox.getTopRight();
      var bottom = this._isLeft ? boundingBox.getBottomLeft() : boundingBox.getBottomRight();
      var firstRow = this.imageRowToCodewordIndex(Math.trunc(top.getY()));
      var lastRow = this.imageRowToCodewordIndex(Math.trunc(bottom.getY()));
      var codewords = this.getCodewords();
      var barcodeRow = -1;
      var maxRowHeight = 1;
      var currentRowHeight = 0;
      for (var codewordsRow = firstRow; codewordsRow < lastRow; codewordsRow++) {
        if (codewords[codewordsRow] == null) {
          continue;
        }
        var codeword = codewords[codewordsRow];
        codeword.setRowNumberAsRowIndicatorColumn();
        var rowDifference = codeword.getRowNumber() - barcodeRow;
        if (rowDifference === 0) {
          currentRowHeight++;
        } else if (rowDifference === 1) {
          maxRowHeight = Math.max(maxRowHeight, currentRowHeight);
          currentRowHeight = 1;
          barcodeRow = codeword.getRowNumber();
        } else if (codeword.getRowNumber() >= barcodeMetadata.getRowCount()) {
          codewords[codewordsRow] = null;
        } else {
          barcodeRow = codeword.getRowNumber();
          currentRowHeight = 1;
        }
      }
    };
    DetectionResultRowIndicatorColumn2.prototype.getBarcodeMetadata = function() {
      var e_3, _a2;
      var codewords = this.getCodewords();
      var barcodeColumnCount = new BarcodeValue_default();
      var barcodeRowCountUpperPart = new BarcodeValue_default();
      var barcodeRowCountLowerPart = new BarcodeValue_default();
      var barcodeECLevel = new BarcodeValue_default();
      try {
        for (var codewords_1 = __values34(codewords), codewords_1_1 = codewords_1.next(); !codewords_1_1.done; codewords_1_1 = codewords_1.next()) {
          var codeword = codewords_1_1.value;
          if (codeword == null) {
            continue;
          }
          codeword.setRowNumberAsRowIndicatorColumn();
          var rowIndicatorValue = codeword.getValue() % 30;
          var codewordRowNumber = codeword.getRowNumber();
          if (!this._isLeft) {
            codewordRowNumber += 2;
          }
          switch (codewordRowNumber % 3) {
            case 0:
              barcodeRowCountUpperPart.setValue(rowIndicatorValue * 3 + 1);
              break;
            case 1:
              barcodeECLevel.setValue(rowIndicatorValue / 3);
              barcodeRowCountLowerPart.setValue(rowIndicatorValue % 3);
              break;
            case 2:
              barcodeColumnCount.setValue(rowIndicatorValue + 1);
              break;
          }
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (codewords_1_1 && !codewords_1_1.done && (_a2 = codewords_1.return)) _a2.call(codewords_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      if (barcodeColumnCount.getValue().length === 0 || barcodeRowCountUpperPart.getValue().length === 0 || barcodeRowCountLowerPart.getValue().length === 0 || barcodeECLevel.getValue().length === 0 || barcodeColumnCount.getValue()[0] < 1 || barcodeRowCountUpperPart.getValue()[0] + barcodeRowCountLowerPart.getValue()[0] < PDF417Common_default.MIN_ROWS_IN_BARCODE || barcodeRowCountUpperPart.getValue()[0] + barcodeRowCountLowerPart.getValue()[0] > PDF417Common_default.MAX_ROWS_IN_BARCODE) {
        return null;
      }
      var barcodeMetadata = new BarcodeMetadata_default(barcodeColumnCount.getValue()[0], barcodeRowCountUpperPart.getValue()[0], barcodeRowCountLowerPart.getValue()[0], barcodeECLevel.getValue()[0]);
      this.removeIncorrectCodewords(codewords, barcodeMetadata);
      return barcodeMetadata;
    };
    DetectionResultRowIndicatorColumn2.prototype.removeIncorrectCodewords = function(codewords, barcodeMetadata) {
      for (var codewordRow = 0; codewordRow < codewords.length; codewordRow++) {
        var codeword = codewords[codewordRow];
        if (codewords[codewordRow] == null) {
          continue;
        }
        var rowIndicatorValue = codeword.getValue() % 30;
        var codewordRowNumber = codeword.getRowNumber();
        if (codewordRowNumber > barcodeMetadata.getRowCount()) {
          codewords[codewordRow] = null;
          continue;
        }
        if (!this._isLeft) {
          codewordRowNumber += 2;
        }
        switch (codewordRowNumber % 3) {
          case 0:
            if (rowIndicatorValue * 3 + 1 !== barcodeMetadata.getRowCountUpperPart()) {
              codewords[codewordRow] = null;
            }
            break;
          case 1:
            if (Math.trunc(rowIndicatorValue / 3) !== barcodeMetadata.getErrorCorrectionLevel() || rowIndicatorValue % 3 !== barcodeMetadata.getRowCountLowerPart()) {
              codewords[codewordRow] = null;
            }
            break;
          case 2:
            if (rowIndicatorValue + 1 !== barcodeMetadata.getColumnCount()) {
              codewords[codewordRow] = null;
            }
            break;
        }
      }
    };
    DetectionResultRowIndicatorColumn2.prototype.isLeft = function() {
      return this._isLeft;
    };
    DetectionResultRowIndicatorColumn2.prototype.toString = function() {
      return "IsLeft: " + this._isLeft + "\n" + _super.prototype.toString.call(this);
    };
    return DetectionResultRowIndicatorColumn2;
  }(DetectionResultColumn_default)
);
var DetectionResultRowIndicatorColumn_default = DetectionResultRowIndicatorColumn;

// node_modules/@zxing/library/esm/core/pdf417/decoder/DetectionResult.js
var __values35 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var DetectionResult = (
  /** @class */
  function() {
    function DetectionResult2(barcodeMetadata, boundingBox) {
      this.ADJUST_ROW_NUMBER_SKIP = 2;
      this.barcodeMetadata = barcodeMetadata;
      this.barcodeColumnCount = barcodeMetadata.getColumnCount();
      this.boundingBox = boundingBox;
      this.detectionResultColumns = new Array(this.barcodeColumnCount + 2);
    }
    DetectionResult2.prototype.getDetectionResultColumns = function() {
      this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]);
      this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
      var unadjustedCodewordCount = PDF417Common_default.MAX_CODEWORDS_IN_BARCODE;
      var previousUnadjustedCount;
      do {
        previousUnadjustedCount = unadjustedCodewordCount;
        unadjustedCodewordCount = this.adjustRowNumbersAndGetCount();
      } while (unadjustedCodewordCount > 0 && unadjustedCodewordCount < previousUnadjustedCount);
      return this.detectionResultColumns;
    };
    DetectionResult2.prototype.adjustIndicatorColumnRowNumbers = function(detectionResultColumn) {
      if (detectionResultColumn != null) {
        detectionResultColumn.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
      }
    };
    DetectionResult2.prototype.adjustRowNumbersAndGetCount = function() {
      var unadjustedCount = this.adjustRowNumbersByRow();
      if (unadjustedCount === 0) {
        return 0;
      }
      for (var barcodeColumn = 1; barcodeColumn < this.barcodeColumnCount + 1; barcodeColumn++) {
        var codewords = this.detectionResultColumns[barcodeColumn].getCodewords();
        for (var codewordsRow = 0; codewordsRow < codewords.length; codewordsRow++) {
          if (codewords[codewordsRow] == null) {
            continue;
          }
          if (!codewords[codewordsRow].hasValidRowNumber()) {
            this.adjustRowNumbers(barcodeColumn, codewordsRow, codewords);
          }
        }
      }
      return unadjustedCount;
    };
    DetectionResult2.prototype.adjustRowNumbersByRow = function() {
      this.adjustRowNumbersFromBothRI();
      var unadjustedCount = this.adjustRowNumbersFromLRI();
      return unadjustedCount + this.adjustRowNumbersFromRRI();
    };
    DetectionResult2.prototype.adjustRowNumbersFromBothRI = function() {
      if (this.detectionResultColumns[0] == null || this.detectionResultColumns[this.barcodeColumnCount + 1] == null) {
        return;
      }
      var LRIcodewords = this.detectionResultColumns[0].getCodewords();
      var RRIcodewords = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
      for (var codewordsRow = 0; codewordsRow < LRIcodewords.length; codewordsRow++) {
        if (LRIcodewords[codewordsRow] != null && RRIcodewords[codewordsRow] != null && LRIcodewords[codewordsRow].getRowNumber() === RRIcodewords[codewordsRow].getRowNumber()) {
          for (var barcodeColumn = 1; barcodeColumn <= this.barcodeColumnCount; barcodeColumn++) {
            var codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
            if (codeword == null) {
              continue;
            }
            codeword.setRowNumber(LRIcodewords[codewordsRow].getRowNumber());
            if (!codeword.hasValidRowNumber()) {
              this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow] = null;
            }
          }
        }
      }
    };
    DetectionResult2.prototype.adjustRowNumbersFromRRI = function() {
      if (this.detectionResultColumns[this.barcodeColumnCount + 1] == null) {
        return 0;
      }
      var unadjustedCount = 0;
      var codewords = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
      for (var codewordsRow = 0; codewordsRow < codewords.length; codewordsRow++) {
        if (codewords[codewordsRow] == null) {
          continue;
        }
        var rowIndicatorRowNumber = codewords[codewordsRow].getRowNumber();
        var invalidRowCounts = 0;
        for (var barcodeColumn = this.barcodeColumnCount + 1; barcodeColumn > 0 && invalidRowCounts < this.ADJUST_ROW_NUMBER_SKIP; barcodeColumn--) {
          var codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
          if (codeword != null) {
            invalidRowCounts = DetectionResult2.adjustRowNumberIfValid(rowIndicatorRowNumber, invalidRowCounts, codeword);
            if (!codeword.hasValidRowNumber()) {
              unadjustedCount++;
            }
          }
        }
      }
      return unadjustedCount;
    };
    DetectionResult2.prototype.adjustRowNumbersFromLRI = function() {
      if (this.detectionResultColumns[0] == null) {
        return 0;
      }
      var unadjustedCount = 0;
      var codewords = this.detectionResultColumns[0].getCodewords();
      for (var codewordsRow = 0; codewordsRow < codewords.length; codewordsRow++) {
        if (codewords[codewordsRow] == null) {
          continue;
        }
        var rowIndicatorRowNumber = codewords[codewordsRow].getRowNumber();
        var invalidRowCounts = 0;
        for (var barcodeColumn = 1; barcodeColumn < this.barcodeColumnCount + 1 && invalidRowCounts < this.ADJUST_ROW_NUMBER_SKIP; barcodeColumn++) {
          var codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
          if (codeword != null) {
            invalidRowCounts = DetectionResult2.adjustRowNumberIfValid(rowIndicatorRowNumber, invalidRowCounts, codeword);
            if (!codeword.hasValidRowNumber()) {
              unadjustedCount++;
            }
          }
        }
      }
      return unadjustedCount;
    };
    DetectionResult2.adjustRowNumberIfValid = function(rowIndicatorRowNumber, invalidRowCounts, codeword) {
      if (codeword == null) {
        return invalidRowCounts;
      }
      if (!codeword.hasValidRowNumber()) {
        if (codeword.isValidRowNumber(rowIndicatorRowNumber)) {
          codeword.setRowNumber(rowIndicatorRowNumber);
          invalidRowCounts = 0;
        } else {
          ++invalidRowCounts;
        }
      }
      return invalidRowCounts;
    };
    DetectionResult2.prototype.adjustRowNumbers = function(barcodeColumn, codewordsRow, codewords) {
      var e_1, _a2;
      if (this.detectionResultColumns[barcodeColumn - 1] == null) {
        return;
      }
      var codeword = codewords[codewordsRow];
      var previousColumnCodewords = this.detectionResultColumns[barcodeColumn - 1].getCodewords();
      var nextColumnCodewords = previousColumnCodewords;
      if (this.detectionResultColumns[barcodeColumn + 1] != null) {
        nextColumnCodewords = this.detectionResultColumns[barcodeColumn + 1].getCodewords();
      }
      var otherCodewords = new Array(14);
      otherCodewords[2] = previousColumnCodewords[codewordsRow];
      otherCodewords[3] = nextColumnCodewords[codewordsRow];
      if (codewordsRow > 0) {
        otherCodewords[0] = codewords[codewordsRow - 1];
        otherCodewords[4] = previousColumnCodewords[codewordsRow - 1];
        otherCodewords[5] = nextColumnCodewords[codewordsRow - 1];
      }
      if (codewordsRow > 1) {
        otherCodewords[8] = codewords[codewordsRow - 2];
        otherCodewords[10] = previousColumnCodewords[codewordsRow - 2];
        otherCodewords[11] = nextColumnCodewords[codewordsRow - 2];
      }
      if (codewordsRow < codewords.length - 1) {
        otherCodewords[1] = codewords[codewordsRow + 1];
        otherCodewords[6] = previousColumnCodewords[codewordsRow + 1];
        otherCodewords[7] = nextColumnCodewords[codewordsRow + 1];
      }
      if (codewordsRow < codewords.length - 2) {
        otherCodewords[9] = codewords[codewordsRow + 2];
        otherCodewords[12] = previousColumnCodewords[codewordsRow + 2];
        otherCodewords[13] = nextColumnCodewords[codewordsRow + 2];
      }
      try {
        for (var otherCodewords_1 = __values35(otherCodewords), otherCodewords_1_1 = otherCodewords_1.next(); !otherCodewords_1_1.done; otherCodewords_1_1 = otherCodewords_1.next()) {
          var otherCodeword = otherCodewords_1_1.value;
          if (DetectionResult2.adjustRowNumber(codeword, otherCodeword)) {
            return;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (otherCodewords_1_1 && !otherCodewords_1_1.done && (_a2 = otherCodewords_1.return)) _a2.call(otherCodewords_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };
    DetectionResult2.adjustRowNumber = function(codeword, otherCodeword) {
      if (otherCodeword == null) {
        return false;
      }
      if (otherCodeword.hasValidRowNumber() && otherCodeword.getBucket() === codeword.getBucket()) {
        codeword.setRowNumber(otherCodeword.getRowNumber());
        return true;
      }
      return false;
    };
    DetectionResult2.prototype.getBarcodeColumnCount = function() {
      return this.barcodeColumnCount;
    };
    DetectionResult2.prototype.getBarcodeRowCount = function() {
      return this.barcodeMetadata.getRowCount();
    };
    DetectionResult2.prototype.getBarcodeECLevel = function() {
      return this.barcodeMetadata.getErrorCorrectionLevel();
    };
    DetectionResult2.prototype.setBoundingBox = function(boundingBox) {
      this.boundingBox = boundingBox;
    };
    DetectionResult2.prototype.getBoundingBox = function() {
      return this.boundingBox;
    };
    DetectionResult2.prototype.setDetectionResultColumn = function(barcodeColumn, detectionResultColumn) {
      this.detectionResultColumns[barcodeColumn] = detectionResultColumn;
    };
    DetectionResult2.prototype.getDetectionResultColumn = function(barcodeColumn) {
      return this.detectionResultColumns[barcodeColumn];
    };
    DetectionResult2.prototype.toString = function() {
      var rowIndicatorColumn = this.detectionResultColumns[0];
      if (rowIndicatorColumn == null) {
        rowIndicatorColumn = this.detectionResultColumns[this.barcodeColumnCount + 1];
      }
      var formatter = new Formatter_default();
      for (var codewordsRow = 0; codewordsRow < rowIndicatorColumn.getCodewords().length; codewordsRow++) {
        formatter.format("CW %3d:", codewordsRow);
        for (var barcodeColumn = 0; barcodeColumn < this.barcodeColumnCount + 2; barcodeColumn++) {
          if (this.detectionResultColumns[barcodeColumn] == null) {
            formatter.format("    |   ");
            continue;
          }
          var codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
          if (codeword == null) {
            formatter.format("    |   ");
            continue;
          }
          formatter.format(" %3d|%3d", codeword.getRowNumber(), codeword.getValue());
        }
        formatter.format("%n");
      }
      return formatter.toString();
    };
    return DetectionResult2;
  }()
);
var DetectionResult_default = DetectionResult;

// node_modules/@zxing/library/esm/core/pdf417/decoder/Codeword.js
var Codeword = (
  /** @class */
  function() {
    function Codeword2(startX, endX, bucket, value) {
      this.rowNumber = Codeword2.BARCODE_ROW_UNKNOWN;
      this.startX = Math.trunc(startX);
      this.endX = Math.trunc(endX);
      this.bucket = Math.trunc(bucket);
      this.value = Math.trunc(value);
    }
    Codeword2.prototype.hasValidRowNumber = function() {
      return this.isValidRowNumber(this.rowNumber);
    };
    Codeword2.prototype.isValidRowNumber = function(rowNumber) {
      return rowNumber !== Codeword2.BARCODE_ROW_UNKNOWN && this.bucket === rowNumber % 3 * 3;
    };
    Codeword2.prototype.setRowNumberAsRowIndicatorColumn = function() {
      this.rowNumber = Math.trunc(Math.trunc(this.value / 30) * 3 + Math.trunc(this.bucket / 3));
    };
    Codeword2.prototype.getWidth = function() {
      return this.endX - this.startX;
    };
    Codeword2.prototype.getStartX = function() {
      return this.startX;
    };
    Codeword2.prototype.getEndX = function() {
      return this.endX;
    };
    Codeword2.prototype.getBucket = function() {
      return this.bucket;
    };
    Codeword2.prototype.getValue = function() {
      return this.value;
    };
    Codeword2.prototype.getRowNumber = function() {
      return this.rowNumber;
    };
    Codeword2.prototype.setRowNumber = function(rowNumber) {
      this.rowNumber = rowNumber;
    };
    Codeword2.prototype.toString = function() {
      return this.rowNumber + "|" + this.value;
    };
    Codeword2.BARCODE_ROW_UNKNOWN = -1;
    return Codeword2;
  }()
);
var Codeword_default = Codeword;

// node_modules/@zxing/library/esm/core/pdf417/decoder/PDF417CodewordDecoder.js
var PDF417CodewordDecoder = (
  /** @class */
  function() {
    function PDF417CodewordDecoder2() {
    }
    PDF417CodewordDecoder2.initialize = function() {
      for (var i = 0; i < PDF417Common_default.SYMBOL_TABLE.length; i++) {
        var currentSymbol = PDF417Common_default.SYMBOL_TABLE[i];
        var currentBit = currentSymbol & 1;
        for (var j = 0; j < PDF417Common_default.BARS_IN_MODULE; j++) {
          var size = 0;
          while ((currentSymbol & 1) === currentBit) {
            size += 1;
            currentSymbol >>= 1;
          }
          currentBit = currentSymbol & 1;
          if (!PDF417CodewordDecoder2.RATIOS_TABLE[i]) {
            PDF417CodewordDecoder2.RATIOS_TABLE[i] = new Array(PDF417Common_default.BARS_IN_MODULE);
          }
          PDF417CodewordDecoder2.RATIOS_TABLE[i][PDF417Common_default.BARS_IN_MODULE - j - 1] = Math.fround(size / PDF417Common_default.MODULES_IN_CODEWORD);
        }
      }
      this.bSymbolTableReady = true;
    };
    PDF417CodewordDecoder2.getDecodedValue = function(moduleBitCount) {
      var decodedValue = PDF417CodewordDecoder2.getDecodedCodewordValue(PDF417CodewordDecoder2.sampleBitCounts(moduleBitCount));
      if (decodedValue !== -1) {
        return decodedValue;
      }
      return PDF417CodewordDecoder2.getClosestDecodedValue(moduleBitCount);
    };
    PDF417CodewordDecoder2.sampleBitCounts = function(moduleBitCount) {
      var bitCountSum = MathUtils_default.sum(moduleBitCount);
      var result = new Int32Array(PDF417Common_default.BARS_IN_MODULE);
      var bitCountIndex = 0;
      var sumPreviousBits = 0;
      for (var i = 0; i < PDF417Common_default.MODULES_IN_CODEWORD; i++) {
        var sampleIndex = bitCountSum / (2 * PDF417Common_default.MODULES_IN_CODEWORD) + i * bitCountSum / PDF417Common_default.MODULES_IN_CODEWORD;
        if (sumPreviousBits + moduleBitCount[bitCountIndex] <= sampleIndex) {
          sumPreviousBits += moduleBitCount[bitCountIndex];
          bitCountIndex++;
        }
        result[bitCountIndex]++;
      }
      return result;
    };
    PDF417CodewordDecoder2.getDecodedCodewordValue = function(moduleBitCount) {
      var decodedValue = PDF417CodewordDecoder2.getBitValue(moduleBitCount);
      return PDF417Common_default.getCodeword(decodedValue) === -1 ? -1 : decodedValue;
    };
    PDF417CodewordDecoder2.getBitValue = function(moduleBitCount) {
      var result = (
        /*long*/
        0
      );
      for (var i = 0; i < moduleBitCount.length; i++) {
        for (var bit = 0; bit < moduleBitCount[i]; bit++) {
          result = result << 1 | (i % 2 === 0 ? 1 : 0);
        }
      }
      return Math.trunc(result);
    };
    PDF417CodewordDecoder2.getClosestDecodedValue = function(moduleBitCount) {
      var bitCountSum = MathUtils_default.sum(moduleBitCount);
      var bitCountRatios = new Array(PDF417Common_default.BARS_IN_MODULE);
      if (bitCountSum > 1) {
        for (var i = 0; i < bitCountRatios.length; i++) {
          bitCountRatios[i] = Math.fround(moduleBitCount[i] / bitCountSum);
        }
      }
      var bestMatchError = Float_default.MAX_VALUE;
      var bestMatch = -1;
      if (!this.bSymbolTableReady) {
        PDF417CodewordDecoder2.initialize();
      }
      for (var j = 0; j < PDF417CodewordDecoder2.RATIOS_TABLE.length; j++) {
        var error = 0;
        var ratioTableRow = PDF417CodewordDecoder2.RATIOS_TABLE[j];
        for (var k = 0; k < PDF417Common_default.BARS_IN_MODULE; k++) {
          var diff = Math.fround(ratioTableRow[k] - bitCountRatios[k]);
          error += Math.fround(diff * diff);
          if (error >= bestMatchError) {
            break;
          }
        }
        if (error < bestMatchError) {
          bestMatchError = error;
          bestMatch = PDF417Common_default.SYMBOL_TABLE[j];
        }
      }
      return bestMatch;
    };
    PDF417CodewordDecoder2.bSymbolTableReady = false;
    PDF417CodewordDecoder2.RATIOS_TABLE = new Array(PDF417Common_default.SYMBOL_TABLE.length).map(function(x) {
      return x = new Array(PDF417Common_default.BARS_IN_MODULE);
    });
    return PDF417CodewordDecoder2;
  }()
);
var PDF417CodewordDecoder_default = PDF417CodewordDecoder;

// node_modules/@zxing/library/esm/core/pdf417/PDF417ResultMetadata.js
var PDF417ResultMetadata = (
  /** @class */
  function() {
    function PDF417ResultMetadata2() {
      this.segmentCount = -1;
      this.fileSize = -1;
      this.timestamp = -1;
      this.checksum = -1;
    }
    PDF417ResultMetadata2.prototype.getSegmentIndex = function() {
      return this.segmentIndex;
    };
    PDF417ResultMetadata2.prototype.setSegmentIndex = function(segmentIndex) {
      this.segmentIndex = segmentIndex;
    };
    PDF417ResultMetadata2.prototype.getFileId = function() {
      return this.fileId;
    };
    PDF417ResultMetadata2.prototype.setFileId = function(fileId) {
      this.fileId = fileId;
    };
    PDF417ResultMetadata2.prototype.getOptionalData = function() {
      return this.optionalData;
    };
    PDF417ResultMetadata2.prototype.setOptionalData = function(optionalData) {
      this.optionalData = optionalData;
    };
    PDF417ResultMetadata2.prototype.isLastSegment = function() {
      return this.lastSegment;
    };
    PDF417ResultMetadata2.prototype.setLastSegment = function(lastSegment) {
      this.lastSegment = lastSegment;
    };
    PDF417ResultMetadata2.prototype.getSegmentCount = function() {
      return this.segmentCount;
    };
    PDF417ResultMetadata2.prototype.setSegmentCount = function(segmentCount) {
      this.segmentCount = segmentCount;
    };
    PDF417ResultMetadata2.prototype.getSender = function() {
      return this.sender || null;
    };
    PDF417ResultMetadata2.prototype.setSender = function(sender) {
      this.sender = sender;
    };
    PDF417ResultMetadata2.prototype.getAddressee = function() {
      return this.addressee || null;
    };
    PDF417ResultMetadata2.prototype.setAddressee = function(addressee) {
      this.addressee = addressee;
    };
    PDF417ResultMetadata2.prototype.getFileName = function() {
      return this.fileName;
    };
    PDF417ResultMetadata2.prototype.setFileName = function(fileName) {
      this.fileName = fileName;
    };
    PDF417ResultMetadata2.prototype.getFileSize = function() {
      return this.fileSize;
    };
    PDF417ResultMetadata2.prototype.setFileSize = function(fileSize) {
      this.fileSize = fileSize;
    };
    PDF417ResultMetadata2.prototype.getChecksum = function() {
      return this.checksum;
    };
    PDF417ResultMetadata2.prototype.setChecksum = function(checksum) {
      this.checksum = checksum;
    };
    PDF417ResultMetadata2.prototype.getTimestamp = function() {
      return this.timestamp;
    };
    PDF417ResultMetadata2.prototype.setTimestamp = function(timestamp) {
      this.timestamp = timestamp;
    };
    return PDF417ResultMetadata2;
  }()
);
var PDF417ResultMetadata_default = PDF417ResultMetadata;

// node_modules/@zxing/library/esm/core/util/Long.js
var Long = (
  /** @class */
  function() {
    function Long2() {
    }
    Long2.parseLong = function(num, radix) {
      if (radix === void 0) {
        radix = void 0;
      }
      return parseInt(num, radix);
    };
    return Long2;
  }()
);
var Long_default = Long;

// node_modules/@zxing/library/esm/core/NullPointerException.js
var __extends58 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var NullPointerException = (
  /** @class */
  function(_super) {
    __extends58(NullPointerException2, _super);
    function NullPointerException2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NullPointerException2.kind = "NullPointerException";
    return NullPointerException2;
  }(Exception_default)
);
var NullPointerException_default = NullPointerException;

// node_modules/@zxing/library/esm/core/util/OutputStream.js
var OutputStream = (
  /** @class */
  function() {
    function OutputStream2() {
    }
    OutputStream2.prototype.writeBytes = function(b) {
      this.writeBytesOffset(b, 0, b.length);
    };
    OutputStream2.prototype.writeBytesOffset = function(b, off, len) {
      if (b == null) {
        throw new NullPointerException_default();
      } else if (off < 0 || off > b.length || len < 0 || off + len > b.length || off + len < 0) {
        throw new IndexOutOfBoundsException_default();
      } else if (len === 0) {
        return;
      }
      for (var i = 0; i < len; i++) {
        this.write(b[off + i]);
      }
    };
    OutputStream2.prototype.flush = function() {
    };
    OutputStream2.prototype.close = function() {
    };
    return OutputStream2;
  }()
);
var OutputStream_default = OutputStream;

// node_modules/@zxing/library/esm/core/OutOfMemoryError.js
var __extends59 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var OutOfMemoryError = (
  /** @class */
  function(_super) {
    __extends59(OutOfMemoryError2, _super);
    function OutOfMemoryError2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return OutOfMemoryError2;
  }(Exception_default)
);
var OutOfMemoryError_default = OutOfMemoryError;

// node_modules/@zxing/library/esm/core/util/ByteArrayOutputStream.js
var __extends60 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ByteArrayOutputStream = (
  /** @class */
  function(_super) {
    __extends60(ByteArrayOutputStream2, _super);
    function ByteArrayOutputStream2(size) {
      if (size === void 0) {
        size = 32;
      }
      var _this = _super.call(this) || this;
      _this.count = 0;
      if (size < 0) {
        throw new IllegalArgumentException_default("Negative initial size: " + size);
      }
      _this.buf = new Uint8Array(size);
      return _this;
    }
    ByteArrayOutputStream2.prototype.ensureCapacity = function(minCapacity) {
      if (minCapacity - this.buf.length > 0) this.grow(minCapacity);
    };
    ByteArrayOutputStream2.prototype.grow = function(minCapacity) {
      var oldCapacity = this.buf.length;
      var newCapacity = oldCapacity << 1;
      if (newCapacity - minCapacity < 0) newCapacity = minCapacity;
      if (newCapacity < 0) {
        if (minCapacity < 0)
          throw new OutOfMemoryError_default();
        newCapacity = Integer_default.MAX_VALUE;
      }
      this.buf = Arrays_default.copyOfUint8Array(this.buf, newCapacity);
    };
    ByteArrayOutputStream2.prototype.write = function(b) {
      this.ensureCapacity(this.count + 1);
      this.buf[this.count] = /*(byte)*/
      b;
      this.count += 1;
    };
    ByteArrayOutputStream2.prototype.writeBytesOffset = function(b, off, len) {
      if (off < 0 || off > b.length || len < 0 || off + len - b.length > 0) {
        throw new IndexOutOfBoundsException_default();
      }
      this.ensureCapacity(this.count + len);
      System_default.arraycopy(b, off, this.buf, this.count, len);
      this.count += len;
    };
    ByteArrayOutputStream2.prototype.writeTo = function(out) {
      out.writeBytesOffset(this.buf, 0, this.count);
    };
    ByteArrayOutputStream2.prototype.reset = function() {
      this.count = 0;
    };
    ByteArrayOutputStream2.prototype.toByteArray = function() {
      return Arrays_default.copyOfUint8Array(this.buf, this.count);
    };
    ByteArrayOutputStream2.prototype.size = function() {
      return this.count;
    };
    ByteArrayOutputStream2.prototype.toString = function(param) {
      if (!param) {
        return this.toString_void();
      }
      if (typeof param === "string") {
        return this.toString_string(param);
      }
      return this.toString_number(param);
    };
    ByteArrayOutputStream2.prototype.toString_void = function() {
      return new String(
        this.buf
        /*, 0, this.count*/
      ).toString();
    };
    ByteArrayOutputStream2.prototype.toString_string = function(charsetName) {
      return new String(
        this.buf
        /*, 0, this.count, charsetName*/
      ).toString();
    };
    ByteArrayOutputStream2.prototype.toString_number = function(hibyte) {
      return new String(
        this.buf
        /*, hibyte, 0, this.count*/
      ).toString();
    };
    ByteArrayOutputStream2.prototype.close = function() {
    };
    return ByteArrayOutputStream2;
  }(OutputStream_default)
);
var ByteArrayOutputStream_default = ByteArrayOutputStream;

// node_modules/@zxing/library/esm/core/pdf417/decoder/DecodedBitStreamParser.js
var Mode3;
(function(Mode5) {
  Mode5[Mode5["ALPHA"] = 0] = "ALPHA";
  Mode5[Mode5["LOWER"] = 1] = "LOWER";
  Mode5[Mode5["MIXED"] = 2] = "MIXED";
  Mode5[Mode5["PUNCT"] = 3] = "PUNCT";
  Mode5[Mode5["ALPHA_SHIFT"] = 4] = "ALPHA_SHIFT";
  Mode5[Mode5["PUNCT_SHIFT"] = 5] = "PUNCT_SHIFT";
})(Mode3 || (Mode3 = {}));
function getBigIntConstructor() {
  if (typeof window !== "undefined") {
    return window["BigInt"] || null;
  }
  if (typeof global !== "undefined") {
    return global["BigInt"] || null;
  }
  if (typeof self !== "undefined") {
    return self["BigInt"] || null;
  }
  throw new Error("Can't search globals for BigInt!");
}
var BigInteger;
function createBigInt(num) {
  if (typeof BigInteger === "undefined") {
    BigInteger = getBigIntConstructor();
  }
  if (BigInteger === null) {
    throw new Error("BigInt is not supported!");
  }
  return BigInteger(num);
}
function getEXP900() {
  var EXP900 = [];
  EXP900[0] = createBigInt(1);
  var nineHundred = createBigInt(900);
  EXP900[1] = nineHundred;
  for (var i = 2; i < 16; i++) {
    EXP900[i] = EXP900[i - 1] * nineHundred;
  }
  return EXP900;
}
var DecodedBitStreamParser3 = (
  /** @class */
  function() {
    function DecodedBitStreamParser4() {
    }
    DecodedBitStreamParser4.decode = function(codewords, ecLevel) {
      var result = new StringBuilder_default("");
      var encoding = CharacterSetECI_default.ISO8859_1;
      result.enableDecoding(encoding);
      var codeIndex = 1;
      var code = codewords[codeIndex++];
      var resultMetadata = new PDF417ResultMetadata_default();
      while (codeIndex < codewords[0]) {
        switch (code) {
          case DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH:
            codeIndex = DecodedBitStreamParser4.textCompaction(codewords, codeIndex, result);
            break;
          case DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH:
          case DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH_6:
            codeIndex = DecodedBitStreamParser4.byteCompaction(code, codewords, encoding, codeIndex, result);
            break;
          case DecodedBitStreamParser4.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
            result.append(
              /*(char)*/
              codewords[codeIndex++]
            );
            break;
          case DecodedBitStreamParser4.NUMERIC_COMPACTION_MODE_LATCH:
            codeIndex = DecodedBitStreamParser4.numericCompaction(codewords, codeIndex, result);
            break;
          case DecodedBitStreamParser4.ECI_CHARSET:
            var charsetECI = CharacterSetECI_default.getCharacterSetECIByValue(codewords[codeIndex++]);
            break;
          case DecodedBitStreamParser4.ECI_GENERAL_PURPOSE:
            codeIndex += 2;
            break;
          case DecodedBitStreamParser4.ECI_USER_DEFINED:
            codeIndex++;
            break;
          case DecodedBitStreamParser4.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            codeIndex = DecodedBitStreamParser4.decodeMacroBlock(codewords, codeIndex, resultMetadata);
            break;
          case DecodedBitStreamParser4.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case DecodedBitStreamParser4.MACRO_PDF417_TERMINATOR:
            throw new FormatException_default();
          default:
            codeIndex--;
            codeIndex = DecodedBitStreamParser4.textCompaction(codewords, codeIndex, result);
            break;
        }
        if (codeIndex < codewords.length) {
          code = codewords[codeIndex++];
        } else {
          throw FormatException_default.getFormatInstance();
        }
      }
      if (result.length() === 0) {
        throw FormatException_default.getFormatInstance();
      }
      var decoderResult = new DecoderResult_default(null, result.toString(), null, ecLevel);
      decoderResult.setOther(resultMetadata);
      return decoderResult;
    };
    DecodedBitStreamParser4.decodeMacroBlock = function(codewords, codeIndex, resultMetadata) {
      if (codeIndex + DecodedBitStreamParser4.NUMBER_OF_SEQUENCE_CODEWORDS > codewords[0]) {
        throw FormatException_default.getFormatInstance();
      }
      var segmentIndexArray = new Int32Array(DecodedBitStreamParser4.NUMBER_OF_SEQUENCE_CODEWORDS);
      for (var i = 0; i < DecodedBitStreamParser4.NUMBER_OF_SEQUENCE_CODEWORDS; i++, codeIndex++) {
        segmentIndexArray[i] = codewords[codeIndex];
      }
      resultMetadata.setSegmentIndex(Integer_default.parseInt(DecodedBitStreamParser4.decodeBase900toBase10(segmentIndexArray, DecodedBitStreamParser4.NUMBER_OF_SEQUENCE_CODEWORDS)));
      var fileId = new StringBuilder_default();
      codeIndex = DecodedBitStreamParser4.textCompaction(codewords, codeIndex, fileId);
      resultMetadata.setFileId(fileId.toString());
      var optionalFieldsStart = -1;
      if (codewords[codeIndex] === DecodedBitStreamParser4.BEGIN_MACRO_PDF417_OPTIONAL_FIELD) {
        optionalFieldsStart = codeIndex + 1;
      }
      while (codeIndex < codewords[0]) {
        switch (codewords[codeIndex]) {
          case DecodedBitStreamParser4.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            codeIndex++;
            switch (codewords[codeIndex]) {
              case DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                var fileName = new StringBuilder_default();
                codeIndex = DecodedBitStreamParser4.textCompaction(codewords, codeIndex + 1, fileName);
                resultMetadata.setFileName(fileName.toString());
                break;
              case DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                var sender = new StringBuilder_default();
                codeIndex = DecodedBitStreamParser4.textCompaction(codewords, codeIndex + 1, sender);
                resultMetadata.setSender(sender.toString());
                break;
              case DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                var addressee = new StringBuilder_default();
                codeIndex = DecodedBitStreamParser4.textCompaction(codewords, codeIndex + 1, addressee);
                resultMetadata.setAddressee(addressee.toString());
                break;
              case DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                var segmentCount = new StringBuilder_default();
                codeIndex = DecodedBitStreamParser4.numericCompaction(codewords, codeIndex + 1, segmentCount);
                resultMetadata.setSegmentCount(Integer_default.parseInt(segmentCount.toString()));
                break;
              case DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                var timestamp = new StringBuilder_default();
                codeIndex = DecodedBitStreamParser4.numericCompaction(codewords, codeIndex + 1, timestamp);
                resultMetadata.setTimestamp(Long_default.parseLong(timestamp.toString()));
                break;
              case DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                var checksum = new StringBuilder_default();
                codeIndex = DecodedBitStreamParser4.numericCompaction(codewords, codeIndex + 1, checksum);
                resultMetadata.setChecksum(Integer_default.parseInt(checksum.toString()));
                break;
              case DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                var fileSize = new StringBuilder_default();
                codeIndex = DecodedBitStreamParser4.numericCompaction(codewords, codeIndex + 1, fileSize);
                resultMetadata.setFileSize(Long_default.parseLong(fileSize.toString()));
                break;
              default:
                throw FormatException_default.getFormatInstance();
            }
            break;
          case DecodedBitStreamParser4.MACRO_PDF417_TERMINATOR:
            codeIndex++;
            resultMetadata.setLastSegment(true);
            break;
          default:
            throw FormatException_default.getFormatInstance();
        }
      }
      if (optionalFieldsStart !== -1) {
        var optionalFieldsLength = codeIndex - optionalFieldsStart;
        if (resultMetadata.isLastSegment()) {
          optionalFieldsLength--;
        }
        resultMetadata.setOptionalData(Arrays_default.copyOfRange(codewords, optionalFieldsStart, optionalFieldsStart + optionalFieldsLength));
      }
      return codeIndex;
    };
    DecodedBitStreamParser4.textCompaction = function(codewords, codeIndex, result) {
      var textCompactionData = new Int32Array((codewords[0] - codeIndex) * 2);
      var byteCompactionData = new Int32Array((codewords[0] - codeIndex) * 2);
      var index = 0;
      var end = false;
      while (codeIndex < codewords[0] && !end) {
        var code = codewords[codeIndex++];
        if (code < DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH) {
          textCompactionData[index] = code / 30;
          textCompactionData[index + 1] = code % 30;
          index += 2;
        } else {
          switch (code) {
            case DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH:
              textCompactionData[index++] = DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH;
              break;
            case DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH:
            case DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH_6:
            case DecodedBitStreamParser4.NUMERIC_COMPACTION_MODE_LATCH:
            case DecodedBitStreamParser4.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case DecodedBitStreamParser4.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case DecodedBitStreamParser4.MACRO_PDF417_TERMINATOR:
              codeIndex--;
              end = true;
              break;
            case DecodedBitStreamParser4.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
              textCompactionData[index] = DecodedBitStreamParser4.MODE_SHIFT_TO_BYTE_COMPACTION_MODE;
              code = codewords[codeIndex++];
              byteCompactionData[index] = code;
              index++;
              break;
          }
        }
      }
      DecodedBitStreamParser4.decodeTextCompaction(textCompactionData, byteCompactionData, index, result);
      return codeIndex;
    };
    DecodedBitStreamParser4.decodeTextCompaction = function(textCompactionData, byteCompactionData, length, result) {
      var subMode = Mode3.ALPHA;
      var priorToShiftMode = Mode3.ALPHA;
      var i = 0;
      while (i < length) {
        var subModeCh = textCompactionData[i];
        var ch = (
          /*char*/
          ""
        );
        switch (subMode) {
          case Mode3.ALPHA:
            if (subModeCh < 26) {
              ch = /*(char)('A' + subModeCh) */
              String.fromCharCode(65 + subModeCh);
            } else {
              switch (subModeCh) {
                case 26:
                  ch = " ";
                  break;
                case DecodedBitStreamParser4.LL:
                  subMode = Mode3.LOWER;
                  break;
                case DecodedBitStreamParser4.ML:
                  subMode = Mode3.MIXED;
                  break;
                case DecodedBitStreamParser4.PS:
                  priorToShiftMode = subMode;
                  subMode = Mode3.PUNCT_SHIFT;
                  break;
                case DecodedBitStreamParser4.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  result.append(
                    /*(char)*/
                    byteCompactionData[i]
                  );
                  break;
                case DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH:
                  subMode = Mode3.ALPHA;
                  break;
              }
            }
            break;
          case Mode3.LOWER:
            if (subModeCh < 26) {
              ch = /*(char)('a' + subModeCh)*/
              String.fromCharCode(97 + subModeCh);
            } else {
              switch (subModeCh) {
                case 26:
                  ch = " ";
                  break;
                case DecodedBitStreamParser4.AS:
                  priorToShiftMode = subMode;
                  subMode = Mode3.ALPHA_SHIFT;
                  break;
                case DecodedBitStreamParser4.ML:
                  subMode = Mode3.MIXED;
                  break;
                case DecodedBitStreamParser4.PS:
                  priorToShiftMode = subMode;
                  subMode = Mode3.PUNCT_SHIFT;
                  break;
                case DecodedBitStreamParser4.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  result.append(
                    /*(char)*/
                    byteCompactionData[i]
                  );
                  break;
                case DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH:
                  subMode = Mode3.ALPHA;
                  break;
              }
            }
            break;
          case Mode3.MIXED:
            if (subModeCh < DecodedBitStreamParser4.PL) {
              ch = DecodedBitStreamParser4.MIXED_CHARS[subModeCh];
            } else {
              switch (subModeCh) {
                case DecodedBitStreamParser4.PL:
                  subMode = Mode3.PUNCT;
                  break;
                case 26:
                  ch = " ";
                  break;
                case DecodedBitStreamParser4.LL:
                  subMode = Mode3.LOWER;
                  break;
                case DecodedBitStreamParser4.AL:
                  subMode = Mode3.ALPHA;
                  break;
                case DecodedBitStreamParser4.PS:
                  priorToShiftMode = subMode;
                  subMode = Mode3.PUNCT_SHIFT;
                  break;
                case DecodedBitStreamParser4.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  result.append(
                    /*(char)*/
                    byteCompactionData[i]
                  );
                  break;
                case DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH:
                  subMode = Mode3.ALPHA;
                  break;
              }
            }
            break;
          case Mode3.PUNCT:
            if (subModeCh < DecodedBitStreamParser4.PAL) {
              ch = DecodedBitStreamParser4.PUNCT_CHARS[subModeCh];
            } else {
              switch (subModeCh) {
                case DecodedBitStreamParser4.PAL:
                  subMode = Mode3.ALPHA;
                  break;
                case DecodedBitStreamParser4.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  result.append(
                    /*(char)*/
                    byteCompactionData[i]
                  );
                  break;
                case DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH:
                  subMode = Mode3.ALPHA;
                  break;
              }
            }
            break;
          case Mode3.ALPHA_SHIFT:
            subMode = priorToShiftMode;
            if (subModeCh < 26) {
              ch = /*(char)('A' + subModeCh)*/
              String.fromCharCode(65 + subModeCh);
            } else {
              switch (subModeCh) {
                case 26:
                  ch = " ";
                  break;
                case DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH:
                  subMode = Mode3.ALPHA;
                  break;
              }
            }
            break;
          case Mode3.PUNCT_SHIFT:
            subMode = priorToShiftMode;
            if (subModeCh < DecodedBitStreamParser4.PAL) {
              ch = DecodedBitStreamParser4.PUNCT_CHARS[subModeCh];
            } else {
              switch (subModeCh) {
                case DecodedBitStreamParser4.PAL:
                  subMode = Mode3.ALPHA;
                  break;
                case DecodedBitStreamParser4.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  result.append(
                    /*(char)*/
                    byteCompactionData[i]
                  );
                  break;
                case DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH:
                  subMode = Mode3.ALPHA;
                  break;
              }
            }
            break;
        }
        if (ch !== "") {
          result.append(ch);
        }
        i++;
      }
    };
    DecodedBitStreamParser4.byteCompaction = function(mode, codewords, encoding, codeIndex, result) {
      var decodedBytes = new ByteArrayOutputStream_default();
      var count = 0;
      var value = (
        /*long*/
        0
      );
      var end = false;
      switch (mode) {
        case DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH:
          var byteCompactedCodewords = new Int32Array(6);
          var nextCode = codewords[codeIndex++];
          while (codeIndex < codewords[0] && !end) {
            byteCompactedCodewords[count++] = nextCode;
            value = 900 * value + nextCode;
            nextCode = codewords[codeIndex++];
            switch (nextCode) {
              case DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH:
              case DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH:
              case DecodedBitStreamParser4.NUMERIC_COMPACTION_MODE_LATCH:
              case DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH_6:
              case DecodedBitStreamParser4.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              case DecodedBitStreamParser4.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case DecodedBitStreamParser4.MACRO_PDF417_TERMINATOR:
                codeIndex--;
                end = true;
                break;
              default:
                if (count % 5 === 0 && count > 0) {
                  for (var j = 0; j < 6; ++j) {
                    decodedBytes.write(
                      /*(byte)*/
                      Number(createBigInt(value) >> createBigInt(8 * (5 - j)))
                    );
                  }
                  value = 0;
                  count = 0;
                }
                break;
            }
          }
          if (codeIndex === codewords[0] && nextCode < DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH) {
            byteCompactedCodewords[count++] = nextCode;
          }
          for (var i = 0; i < count; i++) {
            decodedBytes.write(
              /*(byte)*/
              byteCompactedCodewords[i]
            );
          }
          break;
        case DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH_6:
          while (codeIndex < codewords[0] && !end) {
            var code = codewords[codeIndex++];
            if (code < DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH) {
              count++;
              value = 900 * value + code;
            } else {
              switch (code) {
                case DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH:
                case DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH:
                case DecodedBitStreamParser4.NUMERIC_COMPACTION_MODE_LATCH:
                case DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH_6:
                case DecodedBitStreamParser4.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                case DecodedBitStreamParser4.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                case DecodedBitStreamParser4.MACRO_PDF417_TERMINATOR:
                  codeIndex--;
                  end = true;
                  break;
              }
            }
            if (count % 5 === 0 && count > 0) {
              for (var j = 0; j < 6; ++j) {
                decodedBytes.write(
                  /*(byte)*/
                  Number(createBigInt(value) >> createBigInt(8 * (5 - j)))
                );
              }
              value = 0;
              count = 0;
            }
          }
          break;
      }
      result.append(StringEncoding_default.decode(decodedBytes.toByteArray(), encoding));
      return codeIndex;
    };
    DecodedBitStreamParser4.numericCompaction = function(codewords, codeIndex, result) {
      var count = 0;
      var end = false;
      var numericCodewords = new Int32Array(DecodedBitStreamParser4.MAX_NUMERIC_CODEWORDS);
      while (codeIndex < codewords[0] && !end) {
        var code = codewords[codeIndex++];
        if (codeIndex === codewords[0]) {
          end = true;
        }
        if (code < DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH) {
          numericCodewords[count] = code;
          count++;
        } else {
          switch (code) {
            case DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH:
            case DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH:
            case DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH_6:
            case DecodedBitStreamParser4.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case DecodedBitStreamParser4.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case DecodedBitStreamParser4.MACRO_PDF417_TERMINATOR:
              codeIndex--;
              end = true;
              break;
          }
        }
        if ((count % DecodedBitStreamParser4.MAX_NUMERIC_CODEWORDS === 0 || code === DecodedBitStreamParser4.NUMERIC_COMPACTION_MODE_LATCH || end) && count > 0) {
          result.append(DecodedBitStreamParser4.decodeBase900toBase10(numericCodewords, count));
          count = 0;
        }
      }
      return codeIndex;
    };
    DecodedBitStreamParser4.decodeBase900toBase10 = function(codewords, count) {
      var result = createBigInt(0);
      for (var i = 0; i < count; i++) {
        result += DecodedBitStreamParser4.EXP900[count - i - 1] * createBigInt(codewords[i]);
      }
      var resultString = result.toString();
      if (resultString.charAt(0) !== "1") {
        throw new FormatException_default();
      }
      return resultString.substring(1);
    };
    DecodedBitStreamParser4.TEXT_COMPACTION_MODE_LATCH = 900;
    DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH = 901;
    DecodedBitStreamParser4.NUMERIC_COMPACTION_MODE_LATCH = 902;
    DecodedBitStreamParser4.BYTE_COMPACTION_MODE_LATCH_6 = 924;
    DecodedBitStreamParser4.ECI_USER_DEFINED = 925;
    DecodedBitStreamParser4.ECI_GENERAL_PURPOSE = 926;
    DecodedBitStreamParser4.ECI_CHARSET = 927;
    DecodedBitStreamParser4.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928;
    DecodedBitStreamParser4.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923;
    DecodedBitStreamParser4.MACRO_PDF417_TERMINATOR = 922;
    DecodedBitStreamParser4.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913;
    DecodedBitStreamParser4.MAX_NUMERIC_CODEWORDS = 15;
    DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0;
    DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1;
    DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2;
    DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3;
    DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4;
    DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5;
    DecodedBitStreamParser4.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6;
    DecodedBitStreamParser4.PL = 25;
    DecodedBitStreamParser4.LL = 27;
    DecodedBitStreamParser4.AS = 27;
    DecodedBitStreamParser4.ML = 28;
    DecodedBitStreamParser4.AL = 28;
    DecodedBitStreamParser4.PS = 29;
    DecodedBitStreamParser4.PAL = 29;
    DecodedBitStreamParser4.PUNCT_CHARS = ";<>@[\\]_`~!\r	,:\n-.$/\"|*()?{}'";
    DecodedBitStreamParser4.MIXED_CHARS = "0123456789&\r	,:#-.$/+%*=^";
    DecodedBitStreamParser4.EXP900 = getBigIntConstructor() ? getEXP900() : [];
    DecodedBitStreamParser4.NUMBER_OF_SEQUENCE_CODEWORDS = 2;
    return DecodedBitStreamParser4;
  }()
);
var DecodedBitStreamParser_default3 = DecodedBitStreamParser3;

// node_modules/@zxing/library/esm/core/pdf417/decoder/PDF417ScanningDecoder.js
var __values36 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var PDF417ScanningDecoder = (
  /** @class */
  function() {
    function PDF417ScanningDecoder2() {
    }
    PDF417ScanningDecoder2.decode = function(image, imageTopLeft, imageBottomLeft, imageTopRight, imageBottomRight, minCodewordWidth, maxCodewordWidth) {
      var boundingBox = new BoundingBox_default(image, imageTopLeft, imageBottomLeft, imageTopRight, imageBottomRight);
      var leftRowIndicatorColumn = null;
      var rightRowIndicatorColumn = null;
      var detectionResult;
      for (var firstPass = true; ; firstPass = false) {
        if (imageTopLeft != null) {
          leftRowIndicatorColumn = PDF417ScanningDecoder2.getRowIndicatorColumn(image, boundingBox, imageTopLeft, true, minCodewordWidth, maxCodewordWidth);
        }
        if (imageTopRight != null) {
          rightRowIndicatorColumn = PDF417ScanningDecoder2.getRowIndicatorColumn(image, boundingBox, imageTopRight, false, minCodewordWidth, maxCodewordWidth);
        }
        detectionResult = PDF417ScanningDecoder2.merge(leftRowIndicatorColumn, rightRowIndicatorColumn);
        if (detectionResult == null) {
          throw NotFoundException_default.getNotFoundInstance();
        }
        var resultBox = detectionResult.getBoundingBox();
        if (firstPass && resultBox != null && (resultBox.getMinY() < boundingBox.getMinY() || resultBox.getMaxY() > boundingBox.getMaxY())) {
          boundingBox = resultBox;
        } else {
          break;
        }
      }
      detectionResult.setBoundingBox(boundingBox);
      var maxBarcodeColumn = detectionResult.getBarcodeColumnCount() + 1;
      detectionResult.setDetectionResultColumn(0, leftRowIndicatorColumn);
      detectionResult.setDetectionResultColumn(maxBarcodeColumn, rightRowIndicatorColumn);
      var leftToRight = leftRowIndicatorColumn != null;
      for (var barcodeColumnCount = 1; barcodeColumnCount <= maxBarcodeColumn; barcodeColumnCount++) {
        var barcodeColumn = leftToRight ? barcodeColumnCount : maxBarcodeColumn - barcodeColumnCount;
        if (detectionResult.getDetectionResultColumn(barcodeColumn) !== /* null */
        void 0) {
          continue;
        }
        var detectionResultColumn = void 0;
        if (barcodeColumn === 0 || barcodeColumn === maxBarcodeColumn) {
          detectionResultColumn = new DetectionResultRowIndicatorColumn_default(boundingBox, barcodeColumn === 0);
        } else {
          detectionResultColumn = new DetectionResultColumn_default(boundingBox);
        }
        detectionResult.setDetectionResultColumn(barcodeColumn, detectionResultColumn);
        var startColumn = -1;
        var previousStartColumn = startColumn;
        for (var imageRow = boundingBox.getMinY(); imageRow <= boundingBox.getMaxY(); imageRow++) {
          startColumn = PDF417ScanningDecoder2.getStartColumn(detectionResult, barcodeColumn, imageRow, leftToRight);
          if (startColumn < 0 || startColumn > boundingBox.getMaxX()) {
            if (previousStartColumn === -1) {
              continue;
            }
            startColumn = previousStartColumn;
          }
          var codeword = PDF417ScanningDecoder2.detectCodeword(image, boundingBox.getMinX(), boundingBox.getMaxX(), leftToRight, startColumn, imageRow, minCodewordWidth, maxCodewordWidth);
          if (codeword != null) {
            detectionResultColumn.setCodeword(imageRow, codeword);
            previousStartColumn = startColumn;
            minCodewordWidth = Math.min(minCodewordWidth, codeword.getWidth());
            maxCodewordWidth = Math.max(maxCodewordWidth, codeword.getWidth());
          }
        }
      }
      return PDF417ScanningDecoder2.createDecoderResult(detectionResult);
    };
    PDF417ScanningDecoder2.merge = function(leftRowIndicatorColumn, rightRowIndicatorColumn) {
      if (leftRowIndicatorColumn == null && rightRowIndicatorColumn == null) {
        return null;
      }
      var barcodeMetadata = PDF417ScanningDecoder2.getBarcodeMetadata(leftRowIndicatorColumn, rightRowIndicatorColumn);
      if (barcodeMetadata == null) {
        return null;
      }
      var boundingBox = BoundingBox_default.merge(PDF417ScanningDecoder2.adjustBoundingBox(leftRowIndicatorColumn), PDF417ScanningDecoder2.adjustBoundingBox(rightRowIndicatorColumn));
      return new DetectionResult_default(barcodeMetadata, boundingBox);
    };
    PDF417ScanningDecoder2.adjustBoundingBox = function(rowIndicatorColumn) {
      var e_1, _a2;
      if (rowIndicatorColumn == null) {
        return null;
      }
      var rowHeights = rowIndicatorColumn.getRowHeights();
      if (rowHeights == null) {
        return null;
      }
      var maxRowHeight = PDF417ScanningDecoder2.getMax(rowHeights);
      var missingStartRows = 0;
      try {
        for (var rowHeights_1 = __values36(rowHeights), rowHeights_1_1 = rowHeights_1.next(); !rowHeights_1_1.done; rowHeights_1_1 = rowHeights_1.next()) {
          var rowHeight = rowHeights_1_1.value;
          missingStartRows += maxRowHeight - rowHeight;
          if (rowHeight > 0) {
            break;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (rowHeights_1_1 && !rowHeights_1_1.done && (_a2 = rowHeights_1.return)) _a2.call(rowHeights_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      var codewords = rowIndicatorColumn.getCodewords();
      for (var row = 0; missingStartRows > 0 && codewords[row] == null; row++) {
        missingStartRows--;
      }
      var missingEndRows = 0;
      for (var row = rowHeights.length - 1; row >= 0; row--) {
        missingEndRows += maxRowHeight - rowHeights[row];
        if (rowHeights[row] > 0) {
          break;
        }
      }
      for (var row = codewords.length - 1; missingEndRows > 0 && codewords[row] == null; row--) {
        missingEndRows--;
      }
      return rowIndicatorColumn.getBoundingBox().addMissingRows(missingStartRows, missingEndRows, rowIndicatorColumn.isLeft());
    };
    PDF417ScanningDecoder2.getMax = function(values) {
      var e_2, _a2;
      var maxValue = -1;
      try {
        for (var values_1 = __values36(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
          var value = values_1_1.value;
          maxValue = Math.max(maxValue, value);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (values_1_1 && !values_1_1.done && (_a2 = values_1.return)) _a2.call(values_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      return maxValue;
    };
    PDF417ScanningDecoder2.getBarcodeMetadata = function(leftRowIndicatorColumn, rightRowIndicatorColumn) {
      var leftBarcodeMetadata;
      if (leftRowIndicatorColumn == null || (leftBarcodeMetadata = leftRowIndicatorColumn.getBarcodeMetadata()) == null) {
        return rightRowIndicatorColumn == null ? null : rightRowIndicatorColumn.getBarcodeMetadata();
      }
      var rightBarcodeMetadata;
      if (rightRowIndicatorColumn == null || (rightBarcodeMetadata = rightRowIndicatorColumn.getBarcodeMetadata()) == null) {
        return leftBarcodeMetadata;
      }
      if (leftBarcodeMetadata.getColumnCount() !== rightBarcodeMetadata.getColumnCount() && leftBarcodeMetadata.getErrorCorrectionLevel() !== rightBarcodeMetadata.getErrorCorrectionLevel() && leftBarcodeMetadata.getRowCount() !== rightBarcodeMetadata.getRowCount()) {
        return null;
      }
      return leftBarcodeMetadata;
    };
    PDF417ScanningDecoder2.getRowIndicatorColumn = function(image, boundingBox, startPoint, leftToRight, minCodewordWidth, maxCodewordWidth) {
      var rowIndicatorColumn = new DetectionResultRowIndicatorColumn_default(boundingBox, leftToRight);
      for (var i = 0; i < 2; i++) {
        var increment = i === 0 ? 1 : -1;
        var startColumn = Math.trunc(Math.trunc(startPoint.getX()));
        for (var imageRow = Math.trunc(Math.trunc(startPoint.getY())); imageRow <= boundingBox.getMaxY() && imageRow >= boundingBox.getMinY(); imageRow += increment) {
          var codeword = PDF417ScanningDecoder2.detectCodeword(image, 0, image.getWidth(), leftToRight, startColumn, imageRow, minCodewordWidth, maxCodewordWidth);
          if (codeword != null) {
            rowIndicatorColumn.setCodeword(imageRow, codeword);
            if (leftToRight) {
              startColumn = codeword.getStartX();
            } else {
              startColumn = codeword.getEndX();
            }
          }
        }
      }
      return rowIndicatorColumn;
    };
    PDF417ScanningDecoder2.adjustCodewordCount = function(detectionResult, barcodeMatrix) {
      var barcodeMatrix01 = barcodeMatrix[0][1];
      var numberOfCodewords = barcodeMatrix01.getValue();
      var calculatedNumberOfCodewords = detectionResult.getBarcodeColumnCount() * detectionResult.getBarcodeRowCount() - PDF417ScanningDecoder2.getNumberOfECCodeWords(detectionResult.getBarcodeECLevel());
      if (numberOfCodewords.length === 0) {
        if (calculatedNumberOfCodewords < 1 || calculatedNumberOfCodewords > PDF417Common_default.MAX_CODEWORDS_IN_BARCODE) {
          throw NotFoundException_default.getNotFoundInstance();
        }
        barcodeMatrix01.setValue(calculatedNumberOfCodewords);
      } else if (numberOfCodewords[0] !== calculatedNumberOfCodewords) {
        barcodeMatrix01.setValue(calculatedNumberOfCodewords);
      }
    };
    PDF417ScanningDecoder2.createDecoderResult = function(detectionResult) {
      var barcodeMatrix = PDF417ScanningDecoder2.createBarcodeMatrix(detectionResult);
      PDF417ScanningDecoder2.adjustCodewordCount(detectionResult, barcodeMatrix);
      var erasures = new Array();
      var codewords = new Int32Array(detectionResult.getBarcodeRowCount() * detectionResult.getBarcodeColumnCount());
      var ambiguousIndexValuesList = (
        /*List<int[]>*/
        []
      );
      var ambiguousIndexesList = (
        /*Collection<Integer>*/
        new Array()
      );
      for (var row = 0; row < detectionResult.getBarcodeRowCount(); row++) {
        for (var column = 0; column < detectionResult.getBarcodeColumnCount(); column++) {
          var values = barcodeMatrix[row][column + 1].getValue();
          var codewordIndex = row * detectionResult.getBarcodeColumnCount() + column;
          if (values.length === 0) {
            erasures.push(codewordIndex);
          } else if (values.length === 1) {
            codewords[codewordIndex] = values[0];
          } else {
            ambiguousIndexesList.push(codewordIndex);
            ambiguousIndexValuesList.push(values);
          }
        }
      }
      var ambiguousIndexValues = new Array(ambiguousIndexValuesList.length);
      for (var i = 0; i < ambiguousIndexValues.length; i++) {
        ambiguousIndexValues[i] = ambiguousIndexValuesList[i];
      }
      return PDF417ScanningDecoder2.createDecoderResultFromAmbiguousValues(detectionResult.getBarcodeECLevel(), codewords, PDF417Common_default.toIntArray(erasures), PDF417Common_default.toIntArray(ambiguousIndexesList), ambiguousIndexValues);
    };
    PDF417ScanningDecoder2.createDecoderResultFromAmbiguousValues = function(ecLevel, codewords, erasureArray, ambiguousIndexes, ambiguousIndexValues) {
      var ambiguousIndexCount = new Int32Array(ambiguousIndexes.length);
      var tries = 100;
      while (tries-- > 0) {
        for (var i = 0; i < ambiguousIndexCount.length; i++) {
          codewords[ambiguousIndexes[i]] = ambiguousIndexValues[i][ambiguousIndexCount[i]];
        }
        try {
          return PDF417ScanningDecoder2.decodeCodewords(codewords, ecLevel, erasureArray);
        } catch (err) {
          var ignored = err instanceof ChecksumException_default;
          if (!ignored) {
            throw err;
          }
        }
        if (ambiguousIndexCount.length === 0) {
          throw ChecksumException_default.getChecksumInstance();
        }
        for (var i = 0; i < ambiguousIndexCount.length; i++) {
          if (ambiguousIndexCount[i] < ambiguousIndexValues[i].length - 1) {
            ambiguousIndexCount[i]++;
            break;
          } else {
            ambiguousIndexCount[i] = 0;
            if (i === ambiguousIndexCount.length - 1) {
              throw ChecksumException_default.getChecksumInstance();
            }
          }
        }
      }
      throw ChecksumException_default.getChecksumInstance();
    };
    PDF417ScanningDecoder2.createBarcodeMatrix = function(detectionResult) {
      var e_3, _a2, e_4, _b;
      var barcodeMatrix = Array.from({
        length: detectionResult.getBarcodeRowCount()
      }, function() {
        return new Array(detectionResult.getBarcodeColumnCount() + 2);
      });
      for (var row = 0; row < barcodeMatrix.length; row++) {
        for (var column_1 = 0; column_1 < barcodeMatrix[row].length; column_1++) {
          barcodeMatrix[row][column_1] = new BarcodeValue_default();
        }
      }
      var column = 0;
      try {
        for (var _c = __values36(detectionResult.getDetectionResultColumns()), _d = _c.next(); !_d.done; _d = _c.next()) {
          var detectionResultColumn = _d.value;
          if (detectionResultColumn != null) {
            try {
              for (var _e = (e_4 = void 0, __values36(detectionResultColumn.getCodewords())), _f = _e.next(); !_f.done; _f = _e.next()) {
                var codeword = _f.value;
                if (codeword != null) {
                  var rowNumber = codeword.getRowNumber();
                  if (rowNumber >= 0) {
                    if (rowNumber >= barcodeMatrix.length) {
                      continue;
                    }
                    barcodeMatrix[rowNumber][column].setValue(codeword.getValue());
                  }
                }
              }
            } catch (e_4_1) {
              e_4 = {
                error: e_4_1
              };
            } finally {
              try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
              } finally {
                if (e_4) throw e_4.error;
              }
            }
          }
          column++;
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      return barcodeMatrix;
    };
    PDF417ScanningDecoder2.isValidBarcodeColumn = function(detectionResult, barcodeColumn) {
      return barcodeColumn >= 0 && barcodeColumn <= detectionResult.getBarcodeColumnCount() + 1;
    };
    PDF417ScanningDecoder2.getStartColumn = function(detectionResult, barcodeColumn, imageRow, leftToRight) {
      var e_5, _a2;
      var offset = leftToRight ? 1 : -1;
      var codeword = null;
      if (PDF417ScanningDecoder2.isValidBarcodeColumn(detectionResult, barcodeColumn - offset)) {
        codeword = detectionResult.getDetectionResultColumn(barcodeColumn - offset).getCodeword(imageRow);
      }
      if (codeword != null) {
        return leftToRight ? codeword.getEndX() : codeword.getStartX();
      }
      codeword = detectionResult.getDetectionResultColumn(barcodeColumn).getCodewordNearby(imageRow);
      if (codeword != null) {
        return leftToRight ? codeword.getStartX() : codeword.getEndX();
      }
      if (PDF417ScanningDecoder2.isValidBarcodeColumn(detectionResult, barcodeColumn - offset)) {
        codeword = detectionResult.getDetectionResultColumn(barcodeColumn - offset).getCodewordNearby(imageRow);
      }
      if (codeword != null) {
        return leftToRight ? codeword.getEndX() : codeword.getStartX();
      }
      var skippedColumns = 0;
      while (PDF417ScanningDecoder2.isValidBarcodeColumn(detectionResult, barcodeColumn - offset)) {
        barcodeColumn -= offset;
        try {
          for (var _b = (e_5 = void 0, __values36(detectionResult.getDetectionResultColumn(barcodeColumn).getCodewords())), _c = _b.next(); !_c.done; _c = _b.next()) {
            var previousRowCodeword = _c.value;
            if (previousRowCodeword != null) {
              return (leftToRight ? previousRowCodeword.getEndX() : previousRowCodeword.getStartX()) + offset * skippedColumns * (previousRowCodeword.getEndX() - previousRowCodeword.getStartX());
            }
          }
        } catch (e_5_1) {
          e_5 = {
            error: e_5_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
        skippedColumns++;
      }
      return leftToRight ? detectionResult.getBoundingBox().getMinX() : detectionResult.getBoundingBox().getMaxX();
    };
    PDF417ScanningDecoder2.detectCodeword = function(image, minColumn, maxColumn, leftToRight, startColumn, imageRow, minCodewordWidth, maxCodewordWidth) {
      startColumn = PDF417ScanningDecoder2.adjustCodewordStartColumn(image, minColumn, maxColumn, leftToRight, startColumn, imageRow);
      var moduleBitCount = PDF417ScanningDecoder2.getModuleBitCount(image, minColumn, maxColumn, leftToRight, startColumn, imageRow);
      if (moduleBitCount == null) {
        return null;
      }
      var endColumn;
      var codewordBitCount = MathUtils_default.sum(moduleBitCount);
      if (leftToRight) {
        endColumn = startColumn + codewordBitCount;
      } else {
        for (var i = 0; i < moduleBitCount.length / 2; i++) {
          var tmpCount = moduleBitCount[i];
          moduleBitCount[i] = moduleBitCount[moduleBitCount.length - 1 - i];
          moduleBitCount[moduleBitCount.length - 1 - i] = tmpCount;
        }
        endColumn = startColumn;
        startColumn = endColumn - codewordBitCount;
      }
      if (!PDF417ScanningDecoder2.checkCodewordSkew(codewordBitCount, minCodewordWidth, maxCodewordWidth)) {
        return null;
      }
      var decodedValue = PDF417CodewordDecoder_default.getDecodedValue(moduleBitCount);
      var codeword = PDF417Common_default.getCodeword(decodedValue);
      if (codeword === -1) {
        return null;
      }
      return new Codeword_default(startColumn, endColumn, PDF417ScanningDecoder2.getCodewordBucketNumber(decodedValue), codeword);
    };
    PDF417ScanningDecoder2.getModuleBitCount = function(image, minColumn, maxColumn, leftToRight, startColumn, imageRow) {
      var imageColumn = startColumn;
      var moduleBitCount = new Int32Array(8);
      var moduleNumber = 0;
      var increment = leftToRight ? 1 : -1;
      var previousPixelValue = leftToRight;
      while ((leftToRight ? imageColumn < maxColumn : imageColumn >= minColumn) && moduleNumber < moduleBitCount.length) {
        if (image.get(imageColumn, imageRow) === previousPixelValue) {
          moduleBitCount[moduleNumber]++;
          imageColumn += increment;
        } else {
          moduleNumber++;
          previousPixelValue = !previousPixelValue;
        }
      }
      if (moduleNumber === moduleBitCount.length || imageColumn === (leftToRight ? maxColumn : minColumn) && moduleNumber === moduleBitCount.length - 1) {
        return moduleBitCount;
      }
      return null;
    };
    PDF417ScanningDecoder2.getNumberOfECCodeWords = function(barcodeECLevel) {
      return 2 << barcodeECLevel;
    };
    PDF417ScanningDecoder2.adjustCodewordStartColumn = function(image, minColumn, maxColumn, leftToRight, codewordStartColumn, imageRow) {
      var correctedStartColumn = codewordStartColumn;
      var increment = leftToRight ? -1 : 1;
      for (var i = 0; i < 2; i++) {
        while ((leftToRight ? correctedStartColumn >= minColumn : correctedStartColumn < maxColumn) && leftToRight === image.get(correctedStartColumn, imageRow)) {
          if (Math.abs(codewordStartColumn - correctedStartColumn) > PDF417ScanningDecoder2.CODEWORD_SKEW_SIZE) {
            return codewordStartColumn;
          }
          correctedStartColumn += increment;
        }
        increment = -increment;
        leftToRight = !leftToRight;
      }
      return correctedStartColumn;
    };
    PDF417ScanningDecoder2.checkCodewordSkew = function(codewordSize, minCodewordWidth, maxCodewordWidth) {
      return minCodewordWidth - PDF417ScanningDecoder2.CODEWORD_SKEW_SIZE <= codewordSize && codewordSize <= maxCodewordWidth + PDF417ScanningDecoder2.CODEWORD_SKEW_SIZE;
    };
    PDF417ScanningDecoder2.decodeCodewords = function(codewords, ecLevel, erasures) {
      if (codewords.length === 0) {
        throw FormatException_default.getFormatInstance();
      }
      var numECCodewords = 1 << ecLevel + 1;
      var correctedErrorsCount = PDF417ScanningDecoder2.correctErrors(codewords, erasures, numECCodewords);
      PDF417ScanningDecoder2.verifyCodewordCount(codewords, numECCodewords);
      var decoderResult = DecodedBitStreamParser_default3.decode(codewords, "" + ecLevel);
      decoderResult.setErrorsCorrected(correctedErrorsCount);
      decoderResult.setErasures(erasures.length);
      return decoderResult;
    };
    PDF417ScanningDecoder2.correctErrors = function(codewords, erasures, numECCodewords) {
      if (erasures != null && erasures.length > numECCodewords / 2 + PDF417ScanningDecoder2.MAX_ERRORS || numECCodewords < 0 || numECCodewords > PDF417ScanningDecoder2.MAX_EC_CODEWORDS) {
        throw ChecksumException_default.getChecksumInstance();
      }
      return PDF417ScanningDecoder2.errorCorrection.decode(codewords, numECCodewords, erasures);
    };
    PDF417ScanningDecoder2.verifyCodewordCount = function(codewords, numECCodewords) {
      if (codewords.length < 4) {
        throw FormatException_default.getFormatInstance();
      }
      var numberOfCodewords = codewords[0];
      if (numberOfCodewords > codewords.length) {
        throw FormatException_default.getFormatInstance();
      }
      if (numberOfCodewords === 0) {
        if (numECCodewords < codewords.length) {
          codewords[0] = codewords.length - numECCodewords;
        } else {
          throw FormatException_default.getFormatInstance();
        }
      }
    };
    PDF417ScanningDecoder2.getBitCountForCodeword = function(codeword) {
      var result = new Int32Array(8);
      var previousValue = 0;
      var i = result.length - 1;
      while (true) {
        if ((codeword & 1) !== previousValue) {
          previousValue = codeword & 1;
          i--;
          if (i < 0) {
            break;
          }
        }
        result[i]++;
        codeword >>= 1;
      }
      return result;
    };
    PDF417ScanningDecoder2.getCodewordBucketNumber = function(codeword) {
      if (codeword instanceof Int32Array) {
        return this.getCodewordBucketNumber_Int32Array(codeword);
      }
      return this.getCodewordBucketNumber_number(codeword);
    };
    PDF417ScanningDecoder2.getCodewordBucketNumber_number = function(codeword) {
      return PDF417ScanningDecoder2.getCodewordBucketNumber(PDF417ScanningDecoder2.getBitCountForCodeword(codeword));
    };
    PDF417ScanningDecoder2.getCodewordBucketNumber_Int32Array = function(moduleBitCount) {
      return (moduleBitCount[0] - moduleBitCount[2] + moduleBitCount[4] - moduleBitCount[6] + 9) % 9;
    };
    PDF417ScanningDecoder2.toString = function(barcodeMatrix) {
      var formatter = new Formatter_default();
      for (var row = 0; row < barcodeMatrix.length; row++) {
        formatter.format("Row %2d: ", row);
        for (var column = 0; column < barcodeMatrix[row].length; column++) {
          var barcodeValue = barcodeMatrix[row][column];
          if (barcodeValue.getValue().length === 0) {
            formatter.format("        ", null);
          } else {
            formatter.format("%4d(%2d)", barcodeValue.getValue()[0], barcodeValue.getConfidence(barcodeValue.getValue()[0]));
          }
        }
        formatter.format("%n");
      }
      return formatter.toString();
    };
    PDF417ScanningDecoder2.CODEWORD_SKEW_SIZE = 2;
    PDF417ScanningDecoder2.MAX_ERRORS = 3;
    PDF417ScanningDecoder2.MAX_EC_CODEWORDS = 512;
    PDF417ScanningDecoder2.errorCorrection = new ErrorCorrection_default();
    return PDF417ScanningDecoder2;
  }()
);
var PDF417ScanningDecoder_default = PDF417ScanningDecoder;

// node_modules/@zxing/library/esm/core/pdf417/PDF417Reader.js
var __values37 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var PDF417Reader = (
  /** @class */
  function() {
    function PDF417Reader2() {
    }
    PDF417Reader2.prototype.decode = function(image, hints) {
      if (hints === void 0) {
        hints = null;
      }
      var result = PDF417Reader2.decode(image, hints, false);
      if (result == null || result.length === 0 || result[0] == null) {
        throw NotFoundException_default.getNotFoundInstance();
      }
      return result[0];
    };
    PDF417Reader2.prototype.decodeMultiple = function(image, hints) {
      if (hints === void 0) {
        hints = null;
      }
      try {
        return PDF417Reader2.decode(image, hints, true);
      } catch (ignored) {
        if (ignored instanceof FormatException_default || ignored instanceof ChecksumException_default) {
          throw NotFoundException_default.getNotFoundInstance();
        }
        throw ignored;
      }
    };
    PDF417Reader2.decode = function(image, hints, multiple) {
      var e_1, _a2;
      var results = new Array();
      var detectorResult = Detector_default4.detectMultiple(image, hints, multiple);
      try {
        for (var _b = __values37(detectorResult.getPoints()), _c = _b.next(); !_c.done; _c = _b.next()) {
          var points = _c.value;
          var decoderResult = PDF417ScanningDecoder_default.decode(detectorResult.getBits(), points[4], points[5], points[6], points[7], PDF417Reader2.getMinCodewordWidth(points), PDF417Reader2.getMaxCodewordWidth(points));
          var result = new Result_default(decoderResult.getText(), decoderResult.getRawBytes(), void 0, points, BarcodeFormat_default.PDF_417);
          result.putMetadata(ResultMetadataType_default.ERROR_CORRECTION_LEVEL, decoderResult.getECLevel());
          var pdf417ResultMetadata = decoderResult.getOther();
          if (pdf417ResultMetadata != null) {
            result.putMetadata(ResultMetadataType_default.PDF417_EXTRA_METADATA, pdf417ResultMetadata);
          }
          results.push(result);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return results.map(function(x) {
        return x;
      });
    };
    PDF417Reader2.getMaxWidth = function(p1, p2) {
      if (p1 == null || p2 == null) {
        return 0;
      }
      return Math.trunc(Math.abs(p1.getX() - p2.getX()));
    };
    PDF417Reader2.getMinWidth = function(p1, p2) {
      if (p1 == null || p2 == null) {
        return Integer_default.MAX_VALUE;
      }
      return Math.trunc(Math.abs(p1.getX() - p2.getX()));
    };
    PDF417Reader2.getMaxCodewordWidth = function(p) {
      return Math.floor(Math.max(Math.max(PDF417Reader2.getMaxWidth(p[0], p[4]), PDF417Reader2.getMaxWidth(p[6], p[2]) * PDF417Common_default.MODULES_IN_CODEWORD / PDF417Common_default.MODULES_IN_STOP_PATTERN), Math.max(PDF417Reader2.getMaxWidth(p[1], p[5]), PDF417Reader2.getMaxWidth(p[7], p[3]) * PDF417Common_default.MODULES_IN_CODEWORD / PDF417Common_default.MODULES_IN_STOP_PATTERN)));
    };
    PDF417Reader2.getMinCodewordWidth = function(p) {
      return Math.floor(Math.min(Math.min(PDF417Reader2.getMinWidth(p[0], p[4]), PDF417Reader2.getMinWidth(p[6], p[2]) * PDF417Common_default.MODULES_IN_CODEWORD / PDF417Common_default.MODULES_IN_STOP_PATTERN), Math.min(PDF417Reader2.getMinWidth(p[1], p[5]), PDF417Reader2.getMinWidth(p[7], p[3]) * PDF417Common_default.MODULES_IN_CODEWORD / PDF417Common_default.MODULES_IN_STOP_PATTERN)));
    };
    PDF417Reader2.prototype.reset = function() {
    };
    return PDF417Reader2;
  }()
);
var PDF417Reader_default = PDF417Reader;

// node_modules/@zxing/library/esm/core/ReaderException.js
var __extends61 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ReaderException = (
  /** @class */
  function(_super) {
    __extends61(ReaderException2, _super);
    function ReaderException2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ReaderException2.kind = "ReaderException";
    return ReaderException2;
  }(Exception_default)
);
var ReaderException_default = ReaderException;

// node_modules/@zxing/library/esm/core/MultiFormatReader.js
var __values38 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var MultiFormatReader = (
  /** @class */
  function() {
    function MultiFormatReader2() {
    }
    MultiFormatReader2.prototype.decode = function(image, hints) {
      this.setHints(hints);
      return this.decodeInternal(image);
    };
    MultiFormatReader2.prototype.decodeWithState = function(image) {
      if (this.readers === null || this.readers === void 0) {
        this.setHints(null);
      }
      return this.decodeInternal(image);
    };
    MultiFormatReader2.prototype.setHints = function(hints) {
      this.hints = hints;
      var tryHarder = hints !== null && hints !== void 0 && void 0 !== hints.get(DecodeHintType_default.TRY_HARDER);
      var formats = hints === null || hints === void 0 ? null : hints.get(DecodeHintType_default.POSSIBLE_FORMATS);
      var readers = new Array();
      if (formats !== null && formats !== void 0) {
        var addOneDReader = formats.some(function(f) {
          return f === BarcodeFormat_default.UPC_A || f === BarcodeFormat_default.UPC_E || f === BarcodeFormat_default.EAN_13 || f === BarcodeFormat_default.EAN_8 || f === BarcodeFormat_default.CODABAR || f === BarcodeFormat_default.CODE_39 || f === BarcodeFormat_default.CODE_93 || f === BarcodeFormat_default.CODE_128 || f === BarcodeFormat_default.ITF || f === BarcodeFormat_default.RSS_14 || f === BarcodeFormat_default.RSS_EXPANDED;
        });
        if (addOneDReader && !tryHarder) {
          readers.push(new MultiFormatOneDReader_default(hints));
        }
        if (formats.includes(BarcodeFormat_default.QR_CODE)) {
          readers.push(new QRCodeReader_default());
        }
        if (formats.includes(BarcodeFormat_default.DATA_MATRIX)) {
          readers.push(new DataMatrixReader_default());
        }
        if (formats.includes(BarcodeFormat_default.AZTEC)) {
          readers.push(new AztecReader_default());
        }
        if (formats.includes(BarcodeFormat_default.PDF_417)) {
          readers.push(new PDF417Reader_default());
        }
        if (addOneDReader && tryHarder) {
          readers.push(new MultiFormatOneDReader_default(hints));
        }
      }
      if (readers.length === 0) {
        if (!tryHarder) {
          readers.push(new MultiFormatOneDReader_default(hints));
        }
        readers.push(new QRCodeReader_default());
        readers.push(new DataMatrixReader_default());
        readers.push(new AztecReader_default());
        readers.push(new PDF417Reader_default());
        if (tryHarder) {
          readers.push(new MultiFormatOneDReader_default(hints));
        }
      }
      this.readers = readers;
    };
    MultiFormatReader2.prototype.reset = function() {
      var e_1, _a2;
      if (this.readers !== null) {
        try {
          for (var _b = __values38(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var reader = _c.value;
            reader.reset();
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
    };
    MultiFormatReader2.prototype.decodeInternal = function(image) {
      var e_2, _a2;
      if (this.readers === null) {
        throw new ReaderException_default("No readers where selected, nothing can be read.");
      }
      try {
        for (var _b = __values38(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
          var reader = _c.value;
          try {
            return reader.decode(image, this.hints);
          } catch (ex) {
            if (ex instanceof ReaderException_default) {
              continue;
            }
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      throw new NotFoundException_default("No MultiFormat Readers were able to detect the code.");
    };
    return MultiFormatReader2;
  }()
);
var MultiFormatReader_default = MultiFormatReader;

// node_modules/@zxing/library/esm/browser/BrowserMultiFormatReader.js
var __extends62 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BrowserMultiFormatReader = (
  /** @class */
  function(_super) {
    __extends62(BrowserMultiFormatReader2, _super);
    function BrowserMultiFormatReader2(hints, timeBetweenScansMillis) {
      if (hints === void 0) {
        hints = null;
      }
      if (timeBetweenScansMillis === void 0) {
        timeBetweenScansMillis = 500;
      }
      var _this = this;
      var reader = new MultiFormatReader_default();
      reader.setHints(hints);
      _this = _super.call(this, reader, timeBetweenScansMillis) || this;
      return _this;
    }
    BrowserMultiFormatReader2.prototype.decodeBitmap = function(binaryBitmap) {
      return this.reader.decodeWithState(binaryBitmap);
    };
    return BrowserMultiFormatReader2;
  }(BrowserCodeReader)
);

// node_modules/@zxing/library/esm/browser/BrowserPDF417Reader.js
var __extends63 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BrowserPDF417Reader = (
  /** @class */
  function(_super) {
    __extends63(BrowserPDF417Reader2, _super);
    function BrowserPDF417Reader2(timeBetweenScansMillis) {
      if (timeBetweenScansMillis === void 0) {
        timeBetweenScansMillis = 500;
      }
      return _super.call(this, new PDF417Reader_default(), timeBetweenScansMillis) || this;
    }
    return BrowserPDF417Reader2;
  }(BrowserCodeReader)
);

// node_modules/@zxing/library/esm/browser/BrowserQRCodeReader.js
var __extends64 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BrowserQRCodeReader = (
  /** @class */
  function(_super) {
    __extends64(BrowserQRCodeReader2, _super);
    function BrowserQRCodeReader2(timeBetweenScansMillis) {
      if (timeBetweenScansMillis === void 0) {
        timeBetweenScansMillis = 500;
      }
      return _super.call(this, new QRCodeReader_default(), timeBetweenScansMillis) || this;
    }
    return BrowserQRCodeReader2;
  }(BrowserCodeReader)
);

// node_modules/@zxing/library/esm/core/EncodeHintType.js
var EncodeHintType;
(function(EncodeHintType2) {
  EncodeHintType2[EncodeHintType2["ERROR_CORRECTION"] = 0] = "ERROR_CORRECTION";
  EncodeHintType2[EncodeHintType2["CHARACTER_SET"] = 1] = "CHARACTER_SET";
  EncodeHintType2[EncodeHintType2["DATA_MATRIX_SHAPE"] = 2] = "DATA_MATRIX_SHAPE";
  EncodeHintType2[EncodeHintType2["DATA_MATRIX_COMPACT"] = 3] = "DATA_MATRIX_COMPACT";
  EncodeHintType2[EncodeHintType2["MIN_SIZE"] = 4] = "MIN_SIZE";
  EncodeHintType2[EncodeHintType2["MAX_SIZE"] = 5] = "MAX_SIZE";
  EncodeHintType2[EncodeHintType2["MARGIN"] = 6] = "MARGIN";
  EncodeHintType2[EncodeHintType2["PDF417_COMPACT"] = 7] = "PDF417_COMPACT";
  EncodeHintType2[EncodeHintType2["PDF417_COMPACTION"] = 8] = "PDF417_COMPACTION";
  EncodeHintType2[EncodeHintType2["PDF417_DIMENSIONS"] = 9] = "PDF417_DIMENSIONS";
  EncodeHintType2[EncodeHintType2["AZTEC_LAYERS"] = 10] = "AZTEC_LAYERS";
  EncodeHintType2[EncodeHintType2["QR_VERSION"] = 11] = "QR_VERSION";
  EncodeHintType2[EncodeHintType2["GS1_FORMAT"] = 12] = "GS1_FORMAT";
  EncodeHintType2[EncodeHintType2["FORCE_C40"] = 13] = "FORCE_C40";
})(EncodeHintType || (EncodeHintType = {}));
var EncodeHintType_default = EncodeHintType;

// node_modules/@zxing/library/esm/core/common/reedsolomon/ReedSolomonEncoder.js
var ReedSolomonEncoder = (
  /** @class */
  function() {
    function ReedSolomonEncoder2(field) {
      this.field = field;
      this.cachedGenerators = [];
      this.cachedGenerators.push(new GenericGFPoly_default(field, Int32Array.from([1])));
    }
    ReedSolomonEncoder2.prototype.buildGenerator = function(degree) {
      var cachedGenerators = this.cachedGenerators;
      if (degree >= cachedGenerators.length) {
        var lastGenerator = cachedGenerators[cachedGenerators.length - 1];
        var field = this.field;
        for (var d = cachedGenerators.length; d <= degree; d++) {
          var nextGenerator = lastGenerator.multiply(new GenericGFPoly_default(field, Int32Array.from([1, field.exp(d - 1 + field.getGeneratorBase())])));
          cachedGenerators.push(nextGenerator);
          lastGenerator = nextGenerator;
        }
      }
      return cachedGenerators[degree];
    };
    ReedSolomonEncoder2.prototype.encode = function(toEncode, ecBytes) {
      if (ecBytes === 0) {
        throw new IllegalArgumentException_default("No error correction bytes");
      }
      var dataBytes = toEncode.length - ecBytes;
      if (dataBytes <= 0) {
        throw new IllegalArgumentException_default("No data bytes provided");
      }
      var generator = this.buildGenerator(ecBytes);
      var infoCoefficients = new Int32Array(dataBytes);
      System_default.arraycopy(toEncode, 0, infoCoefficients, 0, dataBytes);
      var info = new GenericGFPoly_default(this.field, infoCoefficients);
      info = info.multiplyByMonomial(ecBytes, 1);
      var remainder = info.divide(generator)[1];
      var coefficients = remainder.getCoefficients();
      var numZeroCoefficients = ecBytes - coefficients.length;
      for (var i = 0; i < numZeroCoefficients; i++) {
        toEncode[dataBytes + i] = 0;
      }
      System_default.arraycopy(coefficients, 0, toEncode, dataBytes + numZeroCoefficients, coefficients.length);
    };
    return ReedSolomonEncoder2;
  }()
);
var ReedSolomonEncoder_default = ReedSolomonEncoder;

// node_modules/@zxing/library/esm/core/qrcode/encoder/MaskUtil.js
var MaskUtil = (
  /** @class */
  function() {
    function MaskUtil2() {
    }
    MaskUtil2.applyMaskPenaltyRule1 = function(matrix) {
      return MaskUtil2.applyMaskPenaltyRule1Internal(matrix, true) + MaskUtil2.applyMaskPenaltyRule1Internal(matrix, false);
    };
    MaskUtil2.applyMaskPenaltyRule2 = function(matrix) {
      var penalty = 0;
      var array = matrix.getArray();
      var width = matrix.getWidth();
      var height = matrix.getHeight();
      for (var y = 0; y < height - 1; y++) {
        var arrayY = array[y];
        for (var x = 0; x < width - 1; x++) {
          var value = arrayY[x];
          if (value === arrayY[x + 1] && value === array[y + 1][x] && value === array[y + 1][x + 1]) {
            penalty++;
          }
        }
      }
      return MaskUtil2.N2 * penalty;
    };
    MaskUtil2.applyMaskPenaltyRule3 = function(matrix) {
      var numPenalties = 0;
      var array = matrix.getArray();
      var width = matrix.getWidth();
      var height = matrix.getHeight();
      for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          var arrayY = array[y];
          if (x + 6 < width && arrayY[x] === 1 && arrayY[x + 1] === 0 && arrayY[x + 2] === 1 && arrayY[x + 3] === 1 && arrayY[x + 4] === 1 && arrayY[x + 5] === 0 && arrayY[x + 6] === 1 && (MaskUtil2.isWhiteHorizontal(arrayY, x - 4, x) || MaskUtil2.isWhiteHorizontal(arrayY, x + 7, x + 11))) {
            numPenalties++;
          }
          if (y + 6 < height && array[y][x] === 1 && array[y + 1][x] === 0 && array[y + 2][x] === 1 && array[y + 3][x] === 1 && array[y + 4][x] === 1 && array[y + 5][x] === 0 && array[y + 6][x] === 1 && (MaskUtil2.isWhiteVertical(array, x, y - 4, y) || MaskUtil2.isWhiteVertical(array, x, y + 7, y + 11))) {
            numPenalties++;
          }
        }
      }
      return numPenalties * MaskUtil2.N3;
    };
    MaskUtil2.isWhiteHorizontal = function(rowArray, from, to) {
      from = Math.max(from, 0);
      to = Math.min(to, rowArray.length);
      for (var i = from; i < to; i++) {
        if (rowArray[i] === 1) {
          return false;
        }
      }
      return true;
    };
    MaskUtil2.isWhiteVertical = function(array, col, from, to) {
      from = Math.max(from, 0);
      to = Math.min(to, array.length);
      for (var i = from; i < to; i++) {
        if (array[i][col] === 1) {
          return false;
        }
      }
      return true;
    };
    MaskUtil2.applyMaskPenaltyRule4 = function(matrix) {
      var numDarkCells = 0;
      var array = matrix.getArray();
      var width = matrix.getWidth();
      var height = matrix.getHeight();
      for (var y = 0; y < height; y++) {
        var arrayY = array[y];
        for (var x = 0; x < width; x++) {
          if (arrayY[x] === 1) {
            numDarkCells++;
          }
        }
      }
      var numTotalCells = matrix.getHeight() * matrix.getWidth();
      var fivePercentVariances = Math.floor(Math.abs(numDarkCells * 2 - numTotalCells) * 10 / numTotalCells);
      return fivePercentVariances * MaskUtil2.N4;
    };
    MaskUtil2.getDataMaskBit = function(maskPattern, x, y) {
      var intermediate;
      var temp;
      switch (maskPattern) {
        case 0:
          intermediate = y + x & 1;
          break;
        case 1:
          intermediate = y & 1;
          break;
        case 2:
          intermediate = x % 3;
          break;
        case 3:
          intermediate = (y + x) % 3;
          break;
        case 4:
          intermediate = Math.floor(y / 2) + Math.floor(x / 3) & 1;
          break;
        case 5:
          temp = y * x;
          intermediate = (temp & 1) + temp % 3;
          break;
        case 6:
          temp = y * x;
          intermediate = (temp & 1) + temp % 3 & 1;
          break;
        case 7:
          temp = y * x;
          intermediate = temp % 3 + (y + x & 1) & 1;
          break;
        default:
          throw new IllegalArgumentException_default("Invalid mask pattern: " + maskPattern);
      }
      return intermediate === 0;
    };
    MaskUtil2.applyMaskPenaltyRule1Internal = function(matrix, isHorizontal) {
      var penalty = 0;
      var iLimit = isHorizontal ? matrix.getHeight() : matrix.getWidth();
      var jLimit = isHorizontal ? matrix.getWidth() : matrix.getHeight();
      var array = matrix.getArray();
      for (var i = 0; i < iLimit; i++) {
        var numSameBitCells = 0;
        var prevBit = -1;
        for (var j = 0; j < jLimit; j++) {
          var bit = isHorizontal ? array[i][j] : array[j][i];
          if (bit === prevBit) {
            numSameBitCells++;
          } else {
            if (numSameBitCells >= 5) {
              penalty += MaskUtil2.N1 + (numSameBitCells - 5);
            }
            numSameBitCells = 1;
            prevBit = bit;
          }
        }
        if (numSameBitCells >= 5) {
          penalty += MaskUtil2.N1 + (numSameBitCells - 5);
        }
      }
      return penalty;
    };
    MaskUtil2.N1 = 3;
    MaskUtil2.N2 = 3;
    MaskUtil2.N3 = 40;
    MaskUtil2.N4 = 10;
    return MaskUtil2;
  }()
);
var MaskUtil_default = MaskUtil;

// node_modules/@zxing/library/esm/core/qrcode/encoder/ByteMatrix.js
var __values39 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ByteMatrix = (
  /** @class */
  function() {
    function ByteMatrix2(width, height) {
      this.width = width;
      this.height = height;
      var bytes = new Array(height);
      for (var i = 0; i !== height; i++) {
        bytes[i] = new Uint8Array(width);
      }
      this.bytes = bytes;
    }
    ByteMatrix2.prototype.getHeight = function() {
      return this.height;
    };
    ByteMatrix2.prototype.getWidth = function() {
      return this.width;
    };
    ByteMatrix2.prototype.get = function(x, y) {
      return this.bytes[y][x];
    };
    ByteMatrix2.prototype.getArray = function() {
      return this.bytes;
    };
    ByteMatrix2.prototype.setNumber = function(x, y, value) {
      this.bytes[y][x] = value;
    };
    ByteMatrix2.prototype.setBoolean = function(x, y, value) {
      this.bytes[y][x] = /*(byte) */
      value ? 1 : 0;
    };
    ByteMatrix2.prototype.clear = function(value) {
      var e_1, _a2;
      try {
        for (var _b = __values39(this.bytes), _c = _b.next(); !_c.done; _c = _b.next()) {
          var aByte = _c.value;
          Arrays_default.fill(aByte, value);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };
    ByteMatrix2.prototype.equals = function(o) {
      if (!(o instanceof ByteMatrix2)) {
        return false;
      }
      var other = o;
      if (this.width !== other.width) {
        return false;
      }
      if (this.height !== other.height) {
        return false;
      }
      for (var y = 0, height = this.height; y < height; ++y) {
        var bytesY = this.bytes[y];
        var otherBytesY = other.bytes[y];
        for (var x = 0, width = this.width; x < width; ++x) {
          if (bytesY[x] !== otherBytesY[x]) {
            return false;
          }
        }
      }
      return true;
    };
    ByteMatrix2.prototype.toString = function() {
      var result = new StringBuilder_default();
      for (var y = 0, height = this.height; y < height; ++y) {
        var bytesY = this.bytes[y];
        for (var x = 0, width = this.width; x < width; ++x) {
          switch (bytesY[x]) {
            case 0:
              result.append(" 0");
              break;
            case 1:
              result.append(" 1");
              break;
            default:
              result.append("  ");
              break;
          }
        }
        result.append("\n");
      }
      return result.toString();
    };
    return ByteMatrix2;
  }()
);
var ByteMatrix_default = ByteMatrix;

// node_modules/@zxing/library/esm/core/qrcode/encoder/QRCode.js
var QRCode = (
  /** @class */
  function() {
    function QRCode2() {
      this.maskPattern = -1;
    }
    QRCode2.prototype.getMode = function() {
      return this.mode;
    };
    QRCode2.prototype.getECLevel = function() {
      return this.ecLevel;
    };
    QRCode2.prototype.getVersion = function() {
      return this.version;
    };
    QRCode2.prototype.getMaskPattern = function() {
      return this.maskPattern;
    };
    QRCode2.prototype.getMatrix = function() {
      return this.matrix;
    };
    QRCode2.prototype.toString = function() {
      var result = new StringBuilder_default();
      result.append("<<\n");
      result.append(" mode: ");
      result.append(this.mode ? this.mode.toString() : "null");
      result.append("\n ecLevel: ");
      result.append(this.ecLevel ? this.ecLevel.toString() : "null");
      result.append("\n version: ");
      result.append(this.version ? this.version.toString() : "null");
      result.append("\n maskPattern: ");
      result.append(this.maskPattern.toString());
      if (this.matrix) {
        result.append("\n matrix:\n");
        result.append(this.matrix.toString());
      } else {
        result.append("\n matrix: null\n");
      }
      result.append(">>\n");
      return result.toString();
    };
    QRCode2.prototype.setMode = function(value) {
      this.mode = value;
    };
    QRCode2.prototype.setECLevel = function(value) {
      this.ecLevel = value;
    };
    QRCode2.prototype.setVersion = function(version) {
      this.version = version;
    };
    QRCode2.prototype.setMaskPattern = function(value) {
      this.maskPattern = value;
    };
    QRCode2.prototype.setMatrix = function(value) {
      this.matrix = value;
    };
    QRCode2.isValidMaskPattern = function(maskPattern) {
      return maskPattern >= 0 && maskPattern < QRCode2.NUM_MASK_PATTERNS;
    };
    QRCode2.NUM_MASK_PATTERNS = 8;
    return QRCode2;
  }()
);
var QRCode_default = QRCode;

// node_modules/@zxing/library/esm/core/WriterException.js
var __extends65 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var WriterException = (
  /** @class */
  function(_super) {
    __extends65(WriterException2, _super);
    function WriterException2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    WriterException2.kind = "WriterException";
    return WriterException2;
  }(Exception_default)
);
var WriterException_default = WriterException;

// node_modules/@zxing/library/esm/core/qrcode/encoder/MatrixUtil.js
var MatrixUtil = (
  /** @class */
  function() {
    function MatrixUtil2() {
    }
    MatrixUtil2.clearMatrix = function(matrix) {
      matrix.clear(
        /*(byte) */
        /*-1*/
        255
      );
    };
    MatrixUtil2.buildMatrix = function(dataBits, ecLevel, version, maskPattern, matrix) {
      MatrixUtil2.clearMatrix(matrix);
      MatrixUtil2.embedBasicPatterns(version, matrix);
      MatrixUtil2.embedTypeInfo(ecLevel, maskPattern, matrix);
      MatrixUtil2.maybeEmbedVersionInfo(version, matrix);
      MatrixUtil2.embedDataBits(dataBits, maskPattern, matrix);
    };
    MatrixUtil2.embedBasicPatterns = function(version, matrix) {
      MatrixUtil2.embedPositionDetectionPatternsAndSeparators(matrix);
      MatrixUtil2.embedDarkDotAtLeftBottomCorner(matrix);
      MatrixUtil2.maybeEmbedPositionAdjustmentPatterns(version, matrix);
      MatrixUtil2.embedTimingPatterns(matrix);
    };
    MatrixUtil2.embedTypeInfo = function(ecLevel, maskPattern, matrix) {
      var typeInfoBits = new BitArray_default();
      MatrixUtil2.makeTypeInfoBits(ecLevel, maskPattern, typeInfoBits);
      for (var i = 0, size = typeInfoBits.getSize(); i < size; ++i) {
        var bit = typeInfoBits.get(typeInfoBits.getSize() - 1 - i);
        var coordinates = MatrixUtil2.TYPE_INFO_COORDINATES[i];
        var x1 = coordinates[0];
        var y1 = coordinates[1];
        matrix.setBoolean(x1, y1, bit);
        if (i < 8) {
          var x2 = matrix.getWidth() - i - 1;
          var y2 = 8;
          matrix.setBoolean(x2, y2, bit);
        } else {
          var x2 = 8;
          var y2 = matrix.getHeight() - 7 + (i - 8);
          matrix.setBoolean(x2, y2, bit);
        }
      }
    };
    MatrixUtil2.maybeEmbedVersionInfo = function(version, matrix) {
      if (version.getVersionNumber() < 7) {
        return;
      }
      var versionInfoBits = new BitArray_default();
      MatrixUtil2.makeVersionInfoBits(version, versionInfoBits);
      var bitIndex = 6 * 3 - 1;
      for (var i = 0; i < 6; ++i) {
        for (var j = 0; j < 3; ++j) {
          var bit = versionInfoBits.get(bitIndex);
          bitIndex--;
          matrix.setBoolean(i, matrix.getHeight() - 11 + j, bit);
          matrix.setBoolean(matrix.getHeight() - 11 + j, i, bit);
        }
      }
    };
    MatrixUtil2.embedDataBits = function(dataBits, maskPattern, matrix) {
      var bitIndex = 0;
      var direction = -1;
      var x = matrix.getWidth() - 1;
      var y = matrix.getHeight() - 1;
      while (x > 0) {
        if (x === 6) {
          x -= 1;
        }
        while (y >= 0 && y < matrix.getHeight()) {
          for (var i = 0; i < 2; ++i) {
            var xx = x - i;
            if (!MatrixUtil2.isEmpty(matrix.get(xx, y))) {
              continue;
            }
            var bit = void 0;
            if (bitIndex < dataBits.getSize()) {
              bit = dataBits.get(bitIndex);
              ++bitIndex;
            } else {
              bit = false;
            }
            if (maskPattern !== 255 && MaskUtil_default.getDataMaskBit(maskPattern, xx, y)) {
              bit = !bit;
            }
            matrix.setBoolean(xx, y, bit);
          }
          y += direction;
        }
        direction = -direction;
        y += direction;
        x -= 2;
      }
      if (bitIndex !== dataBits.getSize()) {
        throw new WriterException_default("Not all bits consumed: " + bitIndex + "/" + dataBits.getSize());
      }
    };
    MatrixUtil2.findMSBSet = function(value) {
      return 32 - Integer_default.numberOfLeadingZeros(value);
    };
    MatrixUtil2.calculateBCHCode = function(value, poly) {
      if (poly === 0) {
        throw new IllegalArgumentException_default("0 polynomial");
      }
      var msbSetInPoly = MatrixUtil2.findMSBSet(poly);
      value <<= msbSetInPoly - 1;
      while (MatrixUtil2.findMSBSet(value) >= msbSetInPoly) {
        value ^= poly << MatrixUtil2.findMSBSet(value) - msbSetInPoly;
      }
      return value;
    };
    MatrixUtil2.makeTypeInfoBits = function(ecLevel, maskPattern, bits) {
      if (!QRCode_default.isValidMaskPattern(maskPattern)) {
        throw new WriterException_default("Invalid mask pattern");
      }
      var typeInfo = ecLevel.getBits() << 3 | maskPattern;
      bits.appendBits(typeInfo, 5);
      var bchCode = MatrixUtil2.calculateBCHCode(typeInfo, MatrixUtil2.TYPE_INFO_POLY);
      bits.appendBits(bchCode, 10);
      var maskBits = new BitArray_default();
      maskBits.appendBits(MatrixUtil2.TYPE_INFO_MASK_PATTERN, 15);
      bits.xor(maskBits);
      if (bits.getSize() !== 15) {
        throw new WriterException_default("should not happen but we got: " + bits.getSize());
      }
    };
    MatrixUtil2.makeVersionInfoBits = function(version, bits) {
      bits.appendBits(version.getVersionNumber(), 6);
      var bchCode = MatrixUtil2.calculateBCHCode(version.getVersionNumber(), MatrixUtil2.VERSION_INFO_POLY);
      bits.appendBits(bchCode, 12);
      if (bits.getSize() !== 18) {
        throw new WriterException_default("should not happen but we got: " + bits.getSize());
      }
    };
    MatrixUtil2.isEmpty = function(value) {
      return value === 255;
    };
    MatrixUtil2.embedTimingPatterns = function(matrix) {
      for (var i = 8; i < matrix.getWidth() - 8; ++i) {
        var bit = (i + 1) % 2;
        if (MatrixUtil2.isEmpty(matrix.get(i, 6))) {
          matrix.setNumber(i, 6, bit);
        }
        if (MatrixUtil2.isEmpty(matrix.get(6, i))) {
          matrix.setNumber(6, i, bit);
        }
      }
    };
    MatrixUtil2.embedDarkDotAtLeftBottomCorner = function(matrix) {
      if (matrix.get(8, matrix.getHeight() - 8) === 0) {
        throw new WriterException_default();
      }
      matrix.setNumber(8, matrix.getHeight() - 8, 1);
    };
    MatrixUtil2.embedHorizontalSeparationPattern = function(xStart, yStart, matrix) {
      for (var x = 0; x < 8; ++x) {
        if (!MatrixUtil2.isEmpty(matrix.get(xStart + x, yStart))) {
          throw new WriterException_default();
        }
        matrix.setNumber(xStart + x, yStart, 0);
      }
    };
    MatrixUtil2.embedVerticalSeparationPattern = function(xStart, yStart, matrix) {
      for (var y = 0; y < 7; ++y) {
        if (!MatrixUtil2.isEmpty(matrix.get(xStart, yStart + y))) {
          throw new WriterException_default();
        }
        matrix.setNumber(xStart, yStart + y, 0);
      }
    };
    MatrixUtil2.embedPositionAdjustmentPattern = function(xStart, yStart, matrix) {
      for (var y = 0; y < 5; ++y) {
        var patternY = MatrixUtil2.POSITION_ADJUSTMENT_PATTERN[y];
        for (var x = 0; x < 5; ++x) {
          matrix.setNumber(xStart + x, yStart + y, patternY[x]);
        }
      }
    };
    MatrixUtil2.embedPositionDetectionPattern = function(xStart, yStart, matrix) {
      for (var y = 0; y < 7; ++y) {
        var patternY = MatrixUtil2.POSITION_DETECTION_PATTERN[y];
        for (var x = 0; x < 7; ++x) {
          matrix.setNumber(xStart + x, yStart + y, patternY[x]);
        }
      }
    };
    MatrixUtil2.embedPositionDetectionPatternsAndSeparators = function(matrix) {
      var pdpWidth = MatrixUtil2.POSITION_DETECTION_PATTERN[0].length;
      MatrixUtil2.embedPositionDetectionPattern(0, 0, matrix);
      MatrixUtil2.embedPositionDetectionPattern(matrix.getWidth() - pdpWidth, 0, matrix);
      MatrixUtil2.embedPositionDetectionPattern(0, matrix.getWidth() - pdpWidth, matrix);
      var hspWidth = 8;
      MatrixUtil2.embedHorizontalSeparationPattern(0, hspWidth - 1, matrix);
      MatrixUtil2.embedHorizontalSeparationPattern(matrix.getWidth() - hspWidth, hspWidth - 1, matrix);
      MatrixUtil2.embedHorizontalSeparationPattern(0, matrix.getWidth() - hspWidth, matrix);
      var vspSize = 7;
      MatrixUtil2.embedVerticalSeparationPattern(vspSize, 0, matrix);
      MatrixUtil2.embedVerticalSeparationPattern(matrix.getHeight() - vspSize - 1, 0, matrix);
      MatrixUtil2.embedVerticalSeparationPattern(vspSize, matrix.getHeight() - vspSize, matrix);
    };
    MatrixUtil2.maybeEmbedPositionAdjustmentPatterns = function(version, matrix) {
      if (version.getVersionNumber() < 2) {
        return;
      }
      var index = version.getVersionNumber() - 1;
      var coordinates = MatrixUtil2.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[index];
      for (var i = 0, length_1 = coordinates.length; i !== length_1; i++) {
        var y = coordinates[i];
        if (y >= 0) {
          for (var j = 0; j !== length_1; j++) {
            var x = coordinates[j];
            if (x >= 0 && MatrixUtil2.isEmpty(matrix.get(x, y))) {
              MatrixUtil2.embedPositionAdjustmentPattern(x - 2, y - 2, matrix);
            }
          }
        }
      }
    };
    MatrixUtil2.POSITION_DETECTION_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1, 1, 1])]);
    MatrixUtil2.POSITION_ADJUSTMENT_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1])]);
    MatrixUtil2.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, -1, -1, -1, -1, -1]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]), Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, -1, -1, -1, -1]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]), Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -1, -1]), Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]), Int32Array.from([6, 26, 48, 70, -1, -1, -1]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]), Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -1, -1]), Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]), Int32Array.from([6, 28, 50, 72, 94, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]), Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80, 106, -1, -1]), Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]), Int32Array.from([6, 34, 62, 90, 118, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78, 104, 130, -1]), Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]), Int32Array.from([6, 30, 58, 86, 114, 142, -1]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, 150]), Int32Array.from([6, 24, 50, 76, 102, 128, 154]), Int32Array.from([6, 28, 54, 80, 106, 132, 158]), Int32Array.from([6, 32, 58, 84, 110, 136, 162]), Int32Array.from([6, 26, 54, 82, 110, 138, 166]), Int32Array.from([6, 30, 58, 86, 114, 142, 170])]);
    MatrixUtil2.TYPE_INFO_COORDINATES = Array.from([Int32Array.from([8, 0]), Int32Array.from([8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]), Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8, 7]), Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]), Int32Array.from([4, 8]), Int32Array.from([3, 8]), Int32Array.from([2, 8]), Int32Array.from([1, 8]), Int32Array.from([0, 8])]);
    MatrixUtil2.VERSION_INFO_POLY = 7973;
    MatrixUtil2.TYPE_INFO_POLY = 1335;
    MatrixUtil2.TYPE_INFO_MASK_PATTERN = 21522;
    return MatrixUtil2;
  }()
);
var MatrixUtil_default = MatrixUtil;

// node_modules/@zxing/library/esm/core/qrcode/encoder/BlockPair.js
var BlockPair = (
  /** @class */
  function() {
    function BlockPair2(dataBytes, errorCorrectionBytes) {
      this.dataBytes = dataBytes;
      this.errorCorrectionBytes = errorCorrectionBytes;
    }
    BlockPair2.prototype.getDataBytes = function() {
      return this.dataBytes;
    };
    BlockPair2.prototype.getErrorCorrectionBytes = function() {
      return this.errorCorrectionBytes;
    };
    return BlockPair2;
  }()
);
var BlockPair_default = BlockPair;

// node_modules/@zxing/library/esm/core/qrcode/encoder/Encoder.js
var __values40 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Encoder = (
  /** @class */
  function() {
    function Encoder3() {
    }
    Encoder3.calculateMaskPenalty = function(matrix) {
      return MaskUtil_default.applyMaskPenaltyRule1(matrix) + MaskUtil_default.applyMaskPenaltyRule2(matrix) + MaskUtil_default.applyMaskPenaltyRule3(matrix) + MaskUtil_default.applyMaskPenaltyRule4(matrix);
    };
    Encoder3.encode = function(content, ecLevel, hints) {
      if (hints === void 0) {
        hints = null;
      }
      var encoding = Encoder3.DEFAULT_BYTE_MODE_ENCODING;
      var hasEncodingHint = hints !== null && void 0 !== hints.get(EncodeHintType_default.CHARACTER_SET);
      if (hasEncodingHint) {
        encoding = hints.get(EncodeHintType_default.CHARACTER_SET).toString();
      }
      var mode = this.chooseMode(content, encoding);
      var headerBits = new BitArray_default();
      if (mode === Mode_default.BYTE && (hasEncodingHint || Encoder3.DEFAULT_BYTE_MODE_ENCODING !== encoding)) {
        var eci = CharacterSetECI_default.getCharacterSetECIByName(encoding);
        if (eci !== void 0) {
          this.appendECI(eci, headerBits);
        }
      }
      this.appendModeInfo(mode, headerBits);
      var dataBits = new BitArray_default();
      this.appendBytes(content, mode, dataBits, encoding);
      var version;
      if (hints !== null && void 0 !== hints.get(EncodeHintType_default.QR_VERSION)) {
        var versionNumber = Number.parseInt(hints.get(EncodeHintType_default.QR_VERSION).toString(), 10);
        version = Version_default2.getVersionForNumber(versionNumber);
        var bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, version);
        if (!this.willFit(bitsNeeded, version, ecLevel)) {
          throw new WriterException_default("Data too big for requested version");
        }
      } else {
        version = this.recommendVersion(ecLevel, mode, headerBits, dataBits);
      }
      var headerAndDataBits = new BitArray_default();
      headerAndDataBits.appendBitArray(headerBits);
      var numLetters = mode === Mode_default.BYTE ? dataBits.getSizeInBytes() : content.length;
      this.appendLengthInfo(numLetters, version, mode, headerAndDataBits);
      headerAndDataBits.appendBitArray(dataBits);
      var ecBlocks = version.getECBlocksForLevel(ecLevel);
      var numDataBytes = version.getTotalCodewords() - ecBlocks.getTotalECCodewords();
      this.terminateBits(numDataBytes, headerAndDataBits);
      var finalBits = this.interleaveWithECBytes(headerAndDataBits, version.getTotalCodewords(), numDataBytes, ecBlocks.getNumBlocks());
      var qrCode = new QRCode_default();
      qrCode.setECLevel(ecLevel);
      qrCode.setMode(mode);
      qrCode.setVersion(version);
      var dimension = version.getDimensionForVersion();
      var matrix = new ByteMatrix_default(dimension, dimension);
      var maskPattern = this.chooseMaskPattern(finalBits, ecLevel, version, matrix);
      qrCode.setMaskPattern(maskPattern);
      MatrixUtil_default.buildMatrix(finalBits, ecLevel, version, maskPattern, matrix);
      qrCode.setMatrix(matrix);
      return qrCode;
    };
    Encoder3.recommendVersion = function(ecLevel, mode, headerBits, dataBits) {
      var provisionalBitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, Version_default2.getVersionForNumber(1));
      var provisionalVersion = this.chooseVersion(provisionalBitsNeeded, ecLevel);
      var bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, provisionalVersion);
      return this.chooseVersion(bitsNeeded, ecLevel);
    };
    Encoder3.calculateBitsNeeded = function(mode, headerBits, dataBits, version) {
      return headerBits.getSize() + mode.getCharacterCountBits(version) + dataBits.getSize();
    };
    Encoder3.getAlphanumericCode = function(code) {
      if (code < Encoder3.ALPHANUMERIC_TABLE.length) {
        return Encoder3.ALPHANUMERIC_TABLE[code];
      }
      return -1;
    };
    Encoder3.chooseMode = function(content, encoding) {
      if (encoding === void 0) {
        encoding = null;
      }
      if (CharacterSetECI_default.SJIS.getName() === encoding && this.isOnlyDoubleByteKanji(content)) {
        return Mode_default.KANJI;
      }
      var hasNumeric = false;
      var hasAlphanumeric = false;
      for (var i = 0, length_1 = content.length; i < length_1; ++i) {
        var c = content.charAt(i);
        if (Encoder3.isDigit(c)) {
          hasNumeric = true;
        } else if (this.getAlphanumericCode(c.charCodeAt(0)) !== -1) {
          hasAlphanumeric = true;
        } else {
          return Mode_default.BYTE;
        }
      }
      if (hasAlphanumeric) {
        return Mode_default.ALPHANUMERIC;
      }
      if (hasNumeric) {
        return Mode_default.NUMERIC;
      }
      return Mode_default.BYTE;
    };
    Encoder3.isOnlyDoubleByteKanji = function(content) {
      var bytes;
      try {
        bytes = StringEncoding_default.encode(content, CharacterSetECI_default.SJIS);
      } catch (ignored) {
        return false;
      }
      var length = bytes.length;
      if (length % 2 !== 0) {
        return false;
      }
      for (var i = 0; i < length; i += 2) {
        var byte1 = bytes[i] & 255;
        if ((byte1 < 129 || byte1 > 159) && (byte1 < 224 || byte1 > 235)) {
          return false;
        }
      }
      return true;
    };
    Encoder3.chooseMaskPattern = function(bits, ecLevel, version, matrix) {
      var minPenalty = Number.MAX_SAFE_INTEGER;
      var bestMaskPattern = -1;
      for (var maskPattern = 0; maskPattern < QRCode_default.NUM_MASK_PATTERNS; maskPattern++) {
        MatrixUtil_default.buildMatrix(bits, ecLevel, version, maskPattern, matrix);
        var penalty = this.calculateMaskPenalty(matrix);
        if (penalty < minPenalty) {
          minPenalty = penalty;
          bestMaskPattern = maskPattern;
        }
      }
      return bestMaskPattern;
    };
    Encoder3.chooseVersion = function(numInputBits, ecLevel) {
      for (var versionNum = 1; versionNum <= 40; versionNum++) {
        var version = Version_default2.getVersionForNumber(versionNum);
        if (Encoder3.willFit(numInputBits, version, ecLevel)) {
          return version;
        }
      }
      throw new WriterException_default("Data too big");
    };
    Encoder3.willFit = function(numInputBits, version, ecLevel) {
      var numBytes = version.getTotalCodewords();
      var ecBlocks = version.getECBlocksForLevel(ecLevel);
      var numEcBytes = ecBlocks.getTotalECCodewords();
      var numDataBytes = numBytes - numEcBytes;
      var totalInputBytes = (numInputBits + 7) / 8;
      return numDataBytes >= totalInputBytes;
    };
    Encoder3.terminateBits = function(numDataBytes, bits) {
      var capacity = numDataBytes * 8;
      if (bits.getSize() > capacity) {
        throw new WriterException_default("data bits cannot fit in the QR Code" + bits.getSize() + " > " + capacity);
      }
      for (var i = 0; i < 4 && bits.getSize() < capacity; ++i) {
        bits.appendBit(false);
      }
      var numBitsInLastByte = bits.getSize() & 7;
      if (numBitsInLastByte > 0) {
        for (var i = numBitsInLastByte; i < 8; i++) {
          bits.appendBit(false);
        }
      }
      var numPaddingBytes = numDataBytes - bits.getSizeInBytes();
      for (var i = 0; i < numPaddingBytes; ++i) {
        bits.appendBits((i & 1) === 0 ? 236 : 17, 8);
      }
      if (bits.getSize() !== capacity) {
        throw new WriterException_default("Bits size does not equal capacity");
      }
    };
    Encoder3.getNumDataBytesAndNumECBytesForBlockID = function(numTotalBytes, numDataBytes, numRSBlocks, blockID, numDataBytesInBlock, numECBytesInBlock) {
      if (blockID >= numRSBlocks) {
        throw new WriterException_default("Block ID too large");
      }
      var numRsBlocksInGroup2 = numTotalBytes % numRSBlocks;
      var numRsBlocksInGroup1 = numRSBlocks - numRsBlocksInGroup2;
      var numTotalBytesInGroup1 = Math.floor(numTotalBytes / numRSBlocks);
      var numTotalBytesInGroup2 = numTotalBytesInGroup1 + 1;
      var numDataBytesInGroup1 = Math.floor(numDataBytes / numRSBlocks);
      var numDataBytesInGroup2 = numDataBytesInGroup1 + 1;
      var numEcBytesInGroup1 = numTotalBytesInGroup1 - numDataBytesInGroup1;
      var numEcBytesInGroup2 = numTotalBytesInGroup2 - numDataBytesInGroup2;
      if (numEcBytesInGroup1 !== numEcBytesInGroup2) {
        throw new WriterException_default("EC bytes mismatch");
      }
      if (numRSBlocks !== numRsBlocksInGroup1 + numRsBlocksInGroup2) {
        throw new WriterException_default("RS blocks mismatch");
      }
      if (numTotalBytes !== (numDataBytesInGroup1 + numEcBytesInGroup1) * numRsBlocksInGroup1 + (numDataBytesInGroup2 + numEcBytesInGroup2) * numRsBlocksInGroup2) {
        throw new WriterException_default("Total bytes mismatch");
      }
      if (blockID < numRsBlocksInGroup1) {
        numDataBytesInBlock[0] = numDataBytesInGroup1;
        numECBytesInBlock[0] = numEcBytesInGroup1;
      } else {
        numDataBytesInBlock[0] = numDataBytesInGroup2;
        numECBytesInBlock[0] = numEcBytesInGroup2;
      }
    };
    Encoder3.interleaveWithECBytes = function(bits, numTotalBytes, numDataBytes, numRSBlocks) {
      var e_1, _a2, e_2, _b;
      if (bits.getSizeInBytes() !== numDataBytes) {
        throw new WriterException_default("Number of bits and data bytes does not match");
      }
      var dataBytesOffset = 0;
      var maxNumDataBytes = 0;
      var maxNumEcBytes = 0;
      var blocks = new Array();
      for (var i = 0; i < numRSBlocks; ++i) {
        var numDataBytesInBlock = new Int32Array(1);
        var numEcBytesInBlock = new Int32Array(1);
        Encoder3.getNumDataBytesAndNumECBytesForBlockID(numTotalBytes, numDataBytes, numRSBlocks, i, numDataBytesInBlock, numEcBytesInBlock);
        var size = numDataBytesInBlock[0];
        var dataBytes = new Uint8Array(size);
        bits.toBytes(8 * dataBytesOffset, dataBytes, 0, size);
        var ecBytes = Encoder3.generateECBytes(dataBytes, numEcBytesInBlock[0]);
        blocks.push(new BlockPair_default(dataBytes, ecBytes));
        maxNumDataBytes = Math.max(maxNumDataBytes, size);
        maxNumEcBytes = Math.max(maxNumEcBytes, ecBytes.length);
        dataBytesOffset += numDataBytesInBlock[0];
      }
      if (numDataBytes !== dataBytesOffset) {
        throw new WriterException_default("Data bytes does not match offset");
      }
      var result = new BitArray_default();
      for (var i = 0; i < maxNumDataBytes; ++i) {
        try {
          for (var blocks_1 = (e_1 = void 0, __values40(blocks)), blocks_1_1 = blocks_1.next(); !blocks_1_1.done; blocks_1_1 = blocks_1.next()) {
            var block = blocks_1_1.value;
            var dataBytes = block.getDataBytes();
            if (i < dataBytes.length) {
              result.appendBits(dataBytes[i], 8);
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (blocks_1_1 && !blocks_1_1.done && (_a2 = blocks_1.return)) _a2.call(blocks_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      for (var i = 0; i < maxNumEcBytes; ++i) {
        try {
          for (var blocks_2 = (e_2 = void 0, __values40(blocks)), blocks_2_1 = blocks_2.next(); !blocks_2_1.done; blocks_2_1 = blocks_2.next()) {
            var block = blocks_2_1.value;
            var ecBytes = block.getErrorCorrectionBytes();
            if (i < ecBytes.length) {
              result.appendBits(ecBytes[i], 8);
            }
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (blocks_2_1 && !blocks_2_1.done && (_b = blocks_2.return)) _b.call(blocks_2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
      if (numTotalBytes !== result.getSizeInBytes()) {
        throw new WriterException_default("Interleaving error: " + numTotalBytes + " and " + result.getSizeInBytes() + " differ.");
      }
      return result;
    };
    Encoder3.generateECBytes = function(dataBytes, numEcBytesInBlock) {
      var numDataBytes = dataBytes.length;
      var toEncode = new Int32Array(numDataBytes + numEcBytesInBlock);
      for (var i = 0; i < numDataBytes; i++) {
        toEncode[i] = dataBytes[i] & 255;
      }
      new ReedSolomonEncoder_default(GenericGF_default.QR_CODE_FIELD_256).encode(toEncode, numEcBytesInBlock);
      var ecBytes = new Uint8Array(numEcBytesInBlock);
      for (var i = 0; i < numEcBytesInBlock; i++) {
        ecBytes[i] = /*(byte) */
        toEncode[numDataBytes + i];
      }
      return ecBytes;
    };
    Encoder3.appendModeInfo = function(mode, bits) {
      bits.appendBits(mode.getBits(), 4);
    };
    Encoder3.appendLengthInfo = function(numLetters, version, mode, bits) {
      var numBits = mode.getCharacterCountBits(version);
      if (numLetters >= 1 << numBits) {
        throw new WriterException_default(numLetters + " is bigger than " + ((1 << numBits) - 1));
      }
      bits.appendBits(numLetters, numBits);
    };
    Encoder3.appendBytes = function(content, mode, bits, encoding) {
      switch (mode) {
        case Mode_default.NUMERIC:
          Encoder3.appendNumericBytes(content, bits);
          break;
        case Mode_default.ALPHANUMERIC:
          Encoder3.appendAlphanumericBytes(content, bits);
          break;
        case Mode_default.BYTE:
          Encoder3.append8BitBytes(content, bits, encoding);
          break;
        case Mode_default.KANJI:
          Encoder3.appendKanjiBytes(content, bits);
          break;
        default:
          throw new WriterException_default("Invalid mode: " + mode);
      }
    };
    Encoder3.getDigit = function(singleCharacter) {
      return singleCharacter.charCodeAt(0) - 48;
    };
    Encoder3.isDigit = function(singleCharacter) {
      var cn = Encoder3.getDigit(singleCharacter);
      return cn >= 0 && cn <= 9;
    };
    Encoder3.appendNumericBytes = function(content, bits) {
      var length = content.length;
      var i = 0;
      while (i < length) {
        var num1 = Encoder3.getDigit(content.charAt(i));
        if (i + 2 < length) {
          var num2 = Encoder3.getDigit(content.charAt(i + 1));
          var num3 = Encoder3.getDigit(content.charAt(i + 2));
          bits.appendBits(num1 * 100 + num2 * 10 + num3, 10);
          i += 3;
        } else if (i + 1 < length) {
          var num2 = Encoder3.getDigit(content.charAt(i + 1));
          bits.appendBits(num1 * 10 + num2, 7);
          i += 2;
        } else {
          bits.appendBits(num1, 4);
          i++;
        }
      }
    };
    Encoder3.appendAlphanumericBytes = function(content, bits) {
      var length = content.length;
      var i = 0;
      while (i < length) {
        var code1 = Encoder3.getAlphanumericCode(content.charCodeAt(i));
        if (code1 === -1) {
          throw new WriterException_default();
        }
        if (i + 1 < length) {
          var code2 = Encoder3.getAlphanumericCode(content.charCodeAt(i + 1));
          if (code2 === -1) {
            throw new WriterException_default();
          }
          bits.appendBits(code1 * 45 + code2, 11);
          i += 2;
        } else {
          bits.appendBits(code1, 6);
          i++;
        }
      }
    };
    Encoder3.append8BitBytes = function(content, bits, encoding) {
      var bytes;
      try {
        bytes = StringEncoding_default.encode(content, encoding);
      } catch (uee) {
        throw new WriterException_default(uee);
      }
      for (var i = 0, length_2 = bytes.length; i !== length_2; i++) {
        var b = bytes[i];
        bits.appendBits(b, 8);
      }
    };
    Encoder3.appendKanjiBytes = function(content, bits) {
      var bytes;
      try {
        bytes = StringEncoding_default.encode(content, CharacterSetECI_default.SJIS);
      } catch (uee) {
        throw new WriterException_default(uee);
      }
      var length = bytes.length;
      for (var i = 0; i < length; i += 2) {
        var byte1 = bytes[i] & 255;
        var byte2 = bytes[i + 1] & 255;
        var code = byte1 << 8 & 4294967295 | byte2;
        var subtracted = -1;
        if (code >= 33088 && code <= 40956) {
          subtracted = code - 33088;
        } else if (code >= 57408 && code <= 60351) {
          subtracted = code - 49472;
        }
        if (subtracted === -1) {
          throw new WriterException_default("Invalid byte sequence");
        }
        var encoded = (subtracted >> 8) * 192 + (subtracted & 255);
        bits.appendBits(encoded, 13);
      }
    };
    Encoder3.appendECI = function(eci, bits) {
      bits.appendBits(Mode_default.ECI.getBits(), 4);
      bits.appendBits(eci.getValue(), 8);
    };
    Encoder3.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]);
    Encoder3.DEFAULT_BYTE_MODE_ENCODING = CharacterSetECI_default.UTF8.getName();
    return Encoder3;
  }()
);
var Encoder_default = Encoder;

// node_modules/@zxing/library/esm/browser/BrowserQRCodeSvgWriter.js
var BrowserQRCodeSvgWriter = (
  /** @class */
  function() {
    function BrowserQRCodeSvgWriter2() {
    }
    BrowserQRCodeSvgWriter2.prototype.write = function(contents, width, height, hints) {
      if (hints === void 0) {
        hints = null;
      }
      if (contents.length === 0) {
        throw new IllegalArgumentException_default("Found empty contents");
      }
      if (width < 0 || height < 0) {
        throw new IllegalArgumentException_default("Requested dimensions are too small: " + width + "x" + height);
      }
      var errorCorrectionLevel = ErrorCorrectionLevel_default.L;
      var quietZone = BrowserQRCodeSvgWriter2.QUIET_ZONE_SIZE;
      if (hints !== null) {
        if (void 0 !== hints.get(EncodeHintType_default.ERROR_CORRECTION)) {
          errorCorrectionLevel = ErrorCorrectionLevel_default.fromString(hints.get(EncodeHintType_default.ERROR_CORRECTION).toString());
        }
        if (void 0 !== hints.get(EncodeHintType_default.MARGIN)) {
          quietZone = Number.parseInt(hints.get(EncodeHintType_default.MARGIN).toString(), 10);
        }
      }
      var code = Encoder_default.encode(contents, errorCorrectionLevel, hints);
      return this.renderResult(code, width, height, quietZone);
    };
    BrowserQRCodeSvgWriter2.prototype.writeToDom = function(containerElement, contents, width, height, hints) {
      if (hints === void 0) {
        hints = null;
      }
      if (typeof containerElement === "string") {
        containerElement = document.querySelector(containerElement);
      }
      var svgElement = this.write(contents, width, height, hints);
      if (containerElement) containerElement.appendChild(svgElement);
    };
    BrowserQRCodeSvgWriter2.prototype.renderResult = function(code, width, height, quietZone) {
      var input = code.getMatrix();
      if (input === null) {
        throw new IllegalStateException_default();
      }
      var inputWidth = input.getWidth();
      var inputHeight = input.getHeight();
      var qrWidth = inputWidth + quietZone * 2;
      var qrHeight = inputHeight + quietZone * 2;
      var outputWidth = Math.max(width, qrWidth);
      var outputHeight = Math.max(height, qrHeight);
      var multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight));
      var leftPadding = Math.floor((outputWidth - inputWidth * multiple) / 2);
      var topPadding = Math.floor((outputHeight - inputHeight * multiple) / 2);
      var svgElement = this.createSVGElement(outputWidth, outputHeight);
      for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
        for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
          if (input.get(inputX, inputY) === 1) {
            var svgRectElement = this.createSvgRectElement(outputX, outputY, multiple, multiple);
            svgElement.appendChild(svgRectElement);
          }
        }
      }
      return svgElement;
    };
    BrowserQRCodeSvgWriter2.prototype.createSVGElement = function(w, h) {
      var svgElement = document.createElementNS(BrowserQRCodeSvgWriter2.SVG_NS, "svg");
      svgElement.setAttributeNS(null, "height", w.toString());
      svgElement.setAttributeNS(null, "width", h.toString());
      return svgElement;
    };
    BrowserQRCodeSvgWriter2.prototype.createSvgRectElement = function(x, y, w, h) {
      var rect = document.createElementNS(BrowserQRCodeSvgWriter2.SVG_NS, "rect");
      rect.setAttributeNS(null, "x", x.toString());
      rect.setAttributeNS(null, "y", y.toString());
      rect.setAttributeNS(null, "height", w.toString());
      rect.setAttributeNS(null, "width", h.toString());
      rect.setAttributeNS(null, "fill", "#000000");
      return rect;
    };
    BrowserQRCodeSvgWriter2.QUIET_ZONE_SIZE = 4;
    BrowserQRCodeSvgWriter2.SVG_NS = "http://www.w3.org/2000/svg";
    return BrowserQRCodeSvgWriter2;
  }()
);

// node_modules/@zxing/library/esm/core/qrcode/QRCodeWriter.js
var QRCodeWriter = (
  /** @class */
  function() {
    function QRCodeWriter2() {
    }
    QRCodeWriter2.prototype.encode = function(contents, format, width, height, hints) {
      if (contents.length === 0) {
        throw new IllegalArgumentException_default("Found empty contents");
      }
      if (format !== BarcodeFormat_default.QR_CODE) {
        throw new IllegalArgumentException_default("Can only encode QR_CODE, but got " + format);
      }
      if (width < 0 || height < 0) {
        throw new IllegalArgumentException_default("Requested dimensions are too small: " + width + "x" + height);
      }
      var errorCorrectionLevel = ErrorCorrectionLevel_default.L;
      var quietZone = QRCodeWriter2.QUIET_ZONE_SIZE;
      if (hints !== null) {
        if (void 0 !== hints.get(EncodeHintType_default.ERROR_CORRECTION)) {
          errorCorrectionLevel = ErrorCorrectionLevel_default.fromString(hints.get(EncodeHintType_default.ERROR_CORRECTION).toString());
        }
        if (void 0 !== hints.get(EncodeHintType_default.MARGIN)) {
          quietZone = Number.parseInt(hints.get(EncodeHintType_default.MARGIN).toString(), 10);
        }
      }
      var code = Encoder_default.encode(contents, errorCorrectionLevel, hints);
      return QRCodeWriter2.renderResult(code, width, height, quietZone);
    };
    QRCodeWriter2.renderResult = function(code, width, height, quietZone) {
      var input = code.getMatrix();
      if (input === null) {
        throw new IllegalStateException_default();
      }
      var inputWidth = input.getWidth();
      var inputHeight = input.getHeight();
      var qrWidth = inputWidth + quietZone * 2;
      var qrHeight = inputHeight + quietZone * 2;
      var outputWidth = Math.max(width, qrWidth);
      var outputHeight = Math.max(height, qrHeight);
      var multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight));
      var leftPadding = Math.floor((outputWidth - inputWidth * multiple) / 2);
      var topPadding = Math.floor((outputHeight - inputHeight * multiple) / 2);
      var output = new BitMatrix_default(outputWidth, outputHeight);
      for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
        for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
          if (input.get(inputX, inputY) === 1) {
            output.setRegion(outputX, outputY, multiple, multiple);
          }
        }
      }
      return output;
    };
    QRCodeWriter2.QUIET_ZONE_SIZE = 4;
    return QRCodeWriter2;
  }()
);
var QRCodeWriter_default = QRCodeWriter;

// node_modules/@zxing/library/esm/core/MultiFormatWriter.js
var MultiFormatWriter = (
  /** @class */
  function() {
    function MultiFormatWriter2() {
    }
    MultiFormatWriter2.prototype.encode = function(contents, format, width, height, hints) {
      var writer;
      switch (format) {
        case BarcodeFormat_default.QR_CODE:
          writer = new QRCodeWriter_default();
          break;
        default:
          throw new IllegalArgumentException_default("No encoder available for format " + format);
      }
      return writer.encode(contents, format, width, height, hints);
    };
    return MultiFormatWriter2;
  }()
);
var MultiFormatWriter_default = MultiFormatWriter;

// node_modules/@zxing/library/esm/core/PlanarYUVLuminanceSource.js
var __extends66 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var PlanarYUVLuminanceSource = (
  /** @class */
  function(_super) {
    __extends66(PlanarYUVLuminanceSource2, _super);
    function PlanarYUVLuminanceSource2(yuvData, dataWidth, dataHeight, left, top, width, height, reverseHorizontal) {
      var _this = _super.call(this, width, height) || this;
      _this.yuvData = yuvData;
      _this.dataWidth = dataWidth;
      _this.dataHeight = dataHeight;
      _this.left = left;
      _this.top = top;
      if (left + width > dataWidth || top + height > dataHeight) {
        throw new IllegalArgumentException_default("Crop rectangle does not fit within image data.");
      }
      if (reverseHorizontal) {
        _this.reverseHorizontal(width, height);
      }
      return _this;
    }
    PlanarYUVLuminanceSource2.prototype.getRow = function(y, row) {
      if (y < 0 || y >= this.getHeight()) {
        throw new IllegalArgumentException_default("Requested row is outside the image: " + y);
      }
      var width = this.getWidth();
      if (row === null || row === void 0 || row.length < width) {
        row = new Uint8ClampedArray(width);
      }
      var offset = (y + this.top) * this.dataWidth + this.left;
      System_default.arraycopy(this.yuvData, offset, row, 0, width);
      return row;
    };
    PlanarYUVLuminanceSource2.prototype.getMatrix = function() {
      var width = this.getWidth();
      var height = this.getHeight();
      if (width === this.dataWidth && height === this.dataHeight) {
        return this.yuvData;
      }
      var area = width * height;
      var matrix = new Uint8ClampedArray(area);
      var inputOffset = this.top * this.dataWidth + this.left;
      if (width === this.dataWidth) {
        System_default.arraycopy(this.yuvData, inputOffset, matrix, 0, area);
        return matrix;
      }
      for (var y = 0; y < height; y++) {
        var outputOffset = y * width;
        System_default.arraycopy(this.yuvData, inputOffset, matrix, outputOffset, width);
        inputOffset += this.dataWidth;
      }
      return matrix;
    };
    PlanarYUVLuminanceSource2.prototype.isCropSupported = function() {
      return true;
    };
    PlanarYUVLuminanceSource2.prototype.crop = function(left, top, width, height) {
      return new PlanarYUVLuminanceSource2(this.yuvData, this.dataWidth, this.dataHeight, this.left + left, this.top + top, width, height, false);
    };
    PlanarYUVLuminanceSource2.prototype.renderThumbnail = function() {
      var width = this.getWidth() / PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
      var height = this.getHeight() / PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
      var pixels = new Int32Array(width * height);
      var yuv = this.yuvData;
      var inputOffset = this.top * this.dataWidth + this.left;
      for (var y = 0; y < height; y++) {
        var outputOffset = y * width;
        for (var x = 0; x < width; x++) {
          var grey = yuv[inputOffset + x * PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR] & 255;
          pixels[outputOffset + x] = 4278190080 | grey * 65793;
        }
        inputOffset += this.dataWidth * PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
      }
      return pixels;
    };
    PlanarYUVLuminanceSource2.prototype.getThumbnailWidth = function() {
      return this.getWidth() / PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
    };
    PlanarYUVLuminanceSource2.prototype.getThumbnailHeight = function() {
      return this.getHeight() / PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR;
    };
    PlanarYUVLuminanceSource2.prototype.reverseHorizontal = function(width, height) {
      var yuvData = this.yuvData;
      for (var y = 0, rowStart = this.top * this.dataWidth + this.left; y < height; y++, rowStart += this.dataWidth) {
        var middle = rowStart + width / 2;
        for (var x1 = rowStart, x2 = rowStart + width - 1; x1 < middle; x1++, x2--) {
          var temp = yuvData[x1];
          yuvData[x1] = yuvData[x2];
          yuvData[x2] = temp;
        }
      }
    };
    PlanarYUVLuminanceSource2.prototype.invert = function() {
      return new InvertedLuminanceSource_default(this);
    };
    PlanarYUVLuminanceSource2.THUMBNAIL_SCALE_FACTOR = 2;
    return PlanarYUVLuminanceSource2;
  }(LuminanceSource_default)
);
var PlanarYUVLuminanceSource_default = PlanarYUVLuminanceSource;

// node_modules/@zxing/library/esm/core/RGBLuminanceSource.js
var __extends67 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var RGBLuminanceSource = (
  /** @class */
  function(_super) {
    __extends67(RGBLuminanceSource2, _super);
    function RGBLuminanceSource2(luminances, width, height, dataWidth, dataHeight, left, top) {
      var _this = _super.call(this, width, height) || this;
      _this.dataWidth = dataWidth;
      _this.dataHeight = dataHeight;
      _this.left = left;
      _this.top = top;
      if (luminances.BYTES_PER_ELEMENT === 4) {
        var size = width * height;
        var luminancesUint8Array = new Uint8ClampedArray(size);
        for (var offset = 0; offset < size; offset++) {
          var pixel = luminances[offset];
          var r = pixel >> 16 & 255;
          var g2 = pixel >> 7 & 510;
          var b = pixel & 255;
          luminancesUint8Array[offset] = /*(byte) */
          (r + g2 + b) / 4 & 255;
        }
        _this.luminances = luminancesUint8Array;
      } else {
        _this.luminances = luminances;
      }
      if (void 0 === dataWidth) {
        _this.dataWidth = width;
      }
      if (void 0 === dataHeight) {
        _this.dataHeight = height;
      }
      if (void 0 === left) {
        _this.left = 0;
      }
      if (void 0 === top) {
        _this.top = 0;
      }
      if (_this.left + width > _this.dataWidth || _this.top + height > _this.dataHeight) {
        throw new IllegalArgumentException_default("Crop rectangle does not fit within image data.");
      }
      return _this;
    }
    RGBLuminanceSource2.prototype.getRow = function(y, row) {
      if (y < 0 || y >= this.getHeight()) {
        throw new IllegalArgumentException_default("Requested row is outside the image: " + y);
      }
      var width = this.getWidth();
      if (row === null || row === void 0 || row.length < width) {
        row = new Uint8ClampedArray(width);
      }
      var offset = (y + this.top) * this.dataWidth + this.left;
      System_default.arraycopy(this.luminances, offset, row, 0, width);
      return row;
    };
    RGBLuminanceSource2.prototype.getMatrix = function() {
      var width = this.getWidth();
      var height = this.getHeight();
      if (width === this.dataWidth && height === this.dataHeight) {
        return this.luminances;
      }
      var area = width * height;
      var matrix = new Uint8ClampedArray(area);
      var inputOffset = this.top * this.dataWidth + this.left;
      if (width === this.dataWidth) {
        System_default.arraycopy(this.luminances, inputOffset, matrix, 0, area);
        return matrix;
      }
      for (var y = 0; y < height; y++) {
        var outputOffset = y * width;
        System_default.arraycopy(this.luminances, inputOffset, matrix, outputOffset, width);
        inputOffset += this.dataWidth;
      }
      return matrix;
    };
    RGBLuminanceSource2.prototype.isCropSupported = function() {
      return true;
    };
    RGBLuminanceSource2.prototype.crop = function(left, top, width, height) {
      return new RGBLuminanceSource2(this.luminances, width, height, this.dataWidth, this.dataHeight, this.left + left, this.top + top);
    };
    RGBLuminanceSource2.prototype.invert = function() {
      return new InvertedLuminanceSource_default(this);
    };
    return RGBLuminanceSource2;
  }(LuminanceSource_default)
);
var RGBLuminanceSource_default = RGBLuminanceSource;

// node_modules/@zxing/library/esm/core/util/Charset.js
var __extends68 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var Charset = (
  /** @class */
  function(_super) {
    __extends68(Charset2, _super);
    function Charset2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Charset2.forName = function(name) {
      return this.getCharacterSetECIByName(name);
    };
    return Charset2;
  }(CharacterSetECI_default)
);
var Charset_default = Charset;

// node_modules/@zxing/library/esm/core/util/StandardCharsets.js
var StandardCharsets = (
  /** @class */
  function() {
    function StandardCharsets2() {
    }
    StandardCharsets2.ISO_8859_1 = CharacterSetECI_default.ISO8859_1;
    return StandardCharsets2;
  }()
);
var StandardCharsets_default = StandardCharsets;

// node_modules/@zxing/library/esm/core/datamatrix/encoder/DefaultPlacement.js
var DefaultPlacement = (
  /** @class */
  function() {
    function DefaultPlacement2(codewords, numcols, numrows) {
      this.codewords = codewords;
      this.numcols = numcols;
      this.numrows = numrows;
      this.bits = new Uint8Array(numcols * numrows);
      Arrays_default.fill(this.bits, 2);
    }
    DefaultPlacement2.prototype.getNumrows = function() {
      return this.numrows;
    };
    DefaultPlacement2.prototype.getNumcols = function() {
      return this.numcols;
    };
    DefaultPlacement2.prototype.getBits = function() {
      return this.bits;
    };
    DefaultPlacement2.prototype.getBit = function(col, row) {
      return this.bits[row * this.numcols + col] === 1;
    };
    DefaultPlacement2.prototype.setBit = function(col, row, bit) {
      this.bits[row * this.numcols + col] = bit ? 1 : 0;
    };
    DefaultPlacement2.prototype.noBit = function(col, row) {
      return this.bits[row * this.numcols + col] === 2;
    };
    DefaultPlacement2.prototype.place = function() {
      var pos = 0;
      var row = 4;
      var col = 0;
      do {
        if (row === this.numrows && col === 0) {
          this.corner1(pos++);
        }
        if (row === this.numrows - 2 && col === 0 && this.numcols % 4 !== 0) {
          this.corner2(pos++);
        }
        if (row === this.numrows - 2 && col === 0 && this.numcols % 8 === 4) {
          this.corner3(pos++);
        }
        if (row === this.numrows + 4 && col === 2 && this.numcols % 8 === 0) {
          this.corner4(pos++);
        }
        do {
          if (row < this.numrows && col >= 0 && this.noBit(col, row)) {
            this.utah(row, col, pos++);
          }
          row -= 2;
          col += 2;
        } while (row >= 0 && col < this.numcols);
        row++;
        col += 3;
        do {
          if (row >= 0 && col < this.numcols && this.noBit(col, row)) {
            this.utah(row, col, pos++);
          }
          row += 2;
          col -= 2;
        } while (row < this.numrows && col >= 0);
        row += 3;
        col++;
      } while (row < this.numrows || col < this.numcols);
      if (this.noBit(this.numcols - 1, this.numrows - 1)) {
        this.setBit(this.numcols - 1, this.numrows - 1, true);
        this.setBit(this.numcols - 2, this.numrows - 2, true);
      }
    };
    DefaultPlacement2.prototype.module = function(row, col, pos, bit) {
      if (row < 0) {
        row += this.numrows;
        col += 4 - (this.numrows + 4) % 8;
      }
      if (col < 0) {
        col += this.numcols;
        row += 4 - (this.numcols + 4) % 8;
      }
      var v = this.codewords.charCodeAt(pos);
      v &= 1 << 8 - bit;
      this.setBit(col, row, v !== 0);
    };
    DefaultPlacement2.prototype.utah = function(row, col, pos) {
      this.module(row - 2, col - 2, pos, 1);
      this.module(row - 2, col - 1, pos, 2);
      this.module(row - 1, col - 2, pos, 3);
      this.module(row - 1, col - 1, pos, 4);
      this.module(row - 1, col, pos, 5);
      this.module(row, col - 2, pos, 6);
      this.module(row, col - 1, pos, 7);
      this.module(row, col, pos, 8);
    };
    DefaultPlacement2.prototype.corner1 = function(pos) {
      this.module(this.numrows - 1, 0, pos, 1);
      this.module(this.numrows - 1, 1, pos, 2);
      this.module(this.numrows - 1, 2, pos, 3);
      this.module(0, this.numcols - 2, pos, 4);
      this.module(0, this.numcols - 1, pos, 5);
      this.module(1, this.numcols - 1, pos, 6);
      this.module(2, this.numcols - 1, pos, 7);
      this.module(3, this.numcols - 1, pos, 8);
    };
    DefaultPlacement2.prototype.corner2 = function(pos) {
      this.module(this.numrows - 3, 0, pos, 1);
      this.module(this.numrows - 2, 0, pos, 2);
      this.module(this.numrows - 1, 0, pos, 3);
      this.module(0, this.numcols - 4, pos, 4);
      this.module(0, this.numcols - 3, pos, 5);
      this.module(0, this.numcols - 2, pos, 6);
      this.module(0, this.numcols - 1, pos, 7);
      this.module(1, this.numcols - 1, pos, 8);
    };
    DefaultPlacement2.prototype.corner3 = function(pos) {
      this.module(this.numrows - 3, 0, pos, 1);
      this.module(this.numrows - 2, 0, pos, 2);
      this.module(this.numrows - 1, 0, pos, 3);
      this.module(0, this.numcols - 2, pos, 4);
      this.module(0, this.numcols - 1, pos, 5);
      this.module(1, this.numcols - 1, pos, 6);
      this.module(2, this.numcols - 1, pos, 7);
      this.module(3, this.numcols - 1, pos, 8);
    };
    DefaultPlacement2.prototype.corner4 = function(pos) {
      this.module(this.numrows - 1, 0, pos, 1);
      this.module(this.numrows - 1, this.numcols - 1, pos, 2);
      this.module(0, this.numcols - 3, pos, 3);
      this.module(0, this.numcols - 2, pos, 4);
      this.module(0, this.numcols - 1, pos, 5);
      this.module(1, this.numcols - 3, pos, 6);
      this.module(1, this.numcols - 2, pos, 7);
      this.module(1, this.numcols - 1, pos, 8);
    };
    return DefaultPlacement2;
  }()
);
var DefaultPlacement_default = DefaultPlacement;

// node_modules/@zxing/library/esm/core/datamatrix/encoder/constants.js
var _a;
var FACTOR_SETS = [5, 7, 10, 11, 12, 14, 18, 20, 24, 28, 36, 42, 48, 56, 62, 68];
var FACTORS = [[228, 48, 15, 111, 62], [23, 68, 144, 134, 240, 92, 254], [28, 24, 185, 166, 223, 248, 116, 255, 110, 61], [175, 138, 205, 12, 194, 168, 39, 245, 60, 97, 120], [41, 153, 158, 91, 61, 42, 142, 213, 97, 178, 100, 242], [156, 97, 192, 252, 95, 9, 157, 119, 138, 45, 18, 186, 83, 185], [83, 195, 100, 39, 188, 75, 66, 61, 241, 213, 109, 129, 94, 254, 225, 48, 90, 188], [15, 195, 244, 9, 233, 71, 168, 2, 188, 160, 153, 145, 253, 79, 108, 82, 27, 174, 186, 172], [52, 190, 88, 205, 109, 39, 176, 21, 155, 197, 251, 223, 155, 21, 5, 172, 254, 124, 12, 181, 184, 96, 50, 193], [211, 231, 43, 97, 71, 96, 103, 174, 37, 151, 170, 53, 75, 34, 249, 121, 17, 138, 110, 213, 141, 136, 120, 151, 233, 168, 93, 255], [245, 127, 242, 218, 130, 250, 162, 181, 102, 120, 84, 179, 220, 251, 80, 182, 229, 18, 2, 4, 68, 33, 101, 137, 95, 119, 115, 44, 175, 184, 59, 25, 225, 98, 81, 112], [77, 193, 137, 31, 19, 38, 22, 153, 247, 105, 122, 2, 245, 133, 242, 8, 175, 95, 100, 9, 167, 105, 214, 111, 57, 121, 21, 1, 253, 57, 54, 101, 248, 202, 69, 50, 150, 177, 226, 5, 9, 5], [245, 132, 172, 223, 96, 32, 117, 22, 238, 133, 238, 231, 205, 188, 237, 87, 191, 106, 16, 147, 118, 23, 37, 90, 170, 205, 131, 88, 120, 100, 66, 138, 186, 240, 82, 44, 176, 87, 187, 147, 160, 175, 69, 213, 92, 253, 225, 19], [175, 9, 223, 238, 12, 17, 220, 208, 100, 29, 175, 170, 230, 192, 215, 235, 150, 159, 36, 223, 38, 200, 132, 54, 228, 146, 218, 234, 117, 203, 29, 232, 144, 238, 22, 150, 201, 117, 62, 207, 164, 13, 137, 245, 127, 67, 247, 28, 155, 43, 203, 107, 233, 53, 143, 46], [242, 93, 169, 50, 144, 210, 39, 118, 202, 188, 201, 189, 143, 108, 196, 37, 185, 112, 134, 230, 245, 63, 197, 190, 250, 106, 185, 221, 175, 64, 114, 71, 161, 44, 147, 6, 27, 218, 51, 63, 87, 10, 40, 130, 188, 17, 163, 31, 176, 170, 4, 107, 232, 7, 94, 166, 224, 124, 86, 47, 11, 204], [220, 228, 173, 89, 251, 149, 159, 56, 89, 33, 147, 244, 154, 36, 73, 127, 213, 136, 248, 180, 234, 197, 158, 177, 68, 122, 93, 213, 15, 160, 227, 236, 66, 139, 153, 185, 202, 167, 179, 25, 220, 232, 96, 210, 231, 136, 223, 239, 181, 241, 59, 52, 172, 25, 49, 232, 211, 189, 64, 54, 108, 153, 132, 63, 96, 103, 82, 186]];
var MODULO_VALUE = 301;
var static_LOG = function(LOG2, ALOG2) {
  var p = 1;
  for (var i = 0; i < 255; i++) {
    ALOG2[i] = p;
    LOG2[p] = i;
    p *= 2;
    if (p >= 256) {
      p ^= MODULO_VALUE;
    }
  }
  return {
    LOG: LOG2,
    ALOG: ALOG2
  };
};
var LOG = (_a = static_LOG([], []), _a.LOG);
var ALOG = _a.ALOG;
var SymbolShapeHint;
(function(SymbolShapeHint2) {
  SymbolShapeHint2[SymbolShapeHint2["FORCE_NONE"] = 0] = "FORCE_NONE";
  SymbolShapeHint2[SymbolShapeHint2["FORCE_SQUARE"] = 1] = "FORCE_SQUARE";
  SymbolShapeHint2[SymbolShapeHint2["FORCE_RECTANGLE"] = 2] = "FORCE_RECTANGLE";
})(SymbolShapeHint || (SymbolShapeHint = {}));
var PAD = 129;
var LATCH_TO_C40 = 230;
var LATCH_TO_BASE256 = 231;
var UPPER_SHIFT = 235;
var MACRO_05 = 236;
var MACRO_06 = 237;
var LATCH_TO_ANSIX12 = 238;
var LATCH_TO_TEXT = 239;
var LATCH_TO_EDIFACT = 240;
var C40_UNLATCH = 254;
var X12_UNLATCH = 254;
var MACRO_05_HEADER = "[)>05";
var MACRO_06_HEADER = "[)>06";
var MACRO_TRAILER = "";
var ASCII_ENCODATION = 0;
var C40_ENCODATION = 1;
var TEXT_ENCODATION = 2;
var X12_ENCODATION = 3;
var EDIFACT_ENCODATION = 4;
var BASE256_ENCODATION = 5;

// node_modules/@zxing/library/esm/core/datamatrix/encoder/ErrorCorrection.js
var ErrorCorrection2 = (
  /** @class */
  function() {
    function ErrorCorrection3() {
    }
    ErrorCorrection3.encodeECC200 = function(codewords, symbolInfo) {
      if (codewords.length !== symbolInfo.getDataCapacity()) {
        throw new Error("The number of codewords does not match the selected symbol");
      }
      var sb = new StringBuilder_default();
      sb.append(codewords);
      var blockCount = symbolInfo.getInterleavedBlockCount();
      if (blockCount === 1) {
        var ecc = this.createECCBlock(codewords, symbolInfo.getErrorCodewords());
        sb.append(ecc);
      } else {
        var dataSizes = [];
        var errorSizes = [];
        for (var i = 0; i < blockCount; i++) {
          dataSizes[i] = symbolInfo.getDataLengthForInterleavedBlock(i + 1);
          errorSizes[i] = symbolInfo.getErrorLengthForInterleavedBlock(i + 1);
        }
        for (var block = 0; block < blockCount; block++) {
          var temp = new StringBuilder_default();
          for (var d = block; d < symbolInfo.getDataCapacity(); d += blockCount) {
            temp.append(codewords.charAt(d));
          }
          var ecc = this.createECCBlock(temp.toString(), errorSizes[block]);
          var pos = 0;
          for (var e = block; e < errorSizes[block] * blockCount; e += blockCount) {
            sb.setCharAt(symbolInfo.getDataCapacity() + e, ecc.charAt(pos++));
          }
        }
      }
      return sb.toString();
    };
    ErrorCorrection3.createECCBlock = function(codewords, numECWords) {
      var table = -1;
      for (var i = 0; i < FACTOR_SETS.length; i++) {
        if (FACTOR_SETS[i] === numECWords) {
          table = i;
          break;
        }
      }
      if (table < 0) {
        throw new Error("Illegal number of error correction codewords specified: " + numECWords);
      }
      var poly = FACTORS[table];
      var ecc = [];
      for (var i = 0; i < numECWords; i++) {
        ecc[i] = 0;
      }
      for (var i = 0; i < codewords.length; i++) {
        var m = ecc[numECWords - 1] ^ codewords.charAt(i).charCodeAt(0);
        for (var k = numECWords - 1; k > 0; k--) {
          if (m !== 0 && poly[k] !== 0) {
            ecc[k] = ecc[k - 1] ^ ALOG[(LOG[m] + LOG[poly[k]]) % 255];
          } else {
            ecc[k] = ecc[k - 1];
          }
        }
        if (m !== 0 && poly[0] !== 0) {
          ecc[0] = ALOG[(LOG[m] + LOG[poly[0]]) % 255];
        } else {
          ecc[0] = 0;
        }
      }
      var eccReversed = [];
      for (var i = 0; i < numECWords; i++) {
        eccReversed[i] = ecc[numECWords - i - 1];
      }
      return eccReversed.map(function(c) {
        return String.fromCharCode(c);
      }).join("");
    };
    return ErrorCorrection3;
  }()
);
var ErrorCorrection_default2 = ErrorCorrection2;

// node_modules/@zxing/library/esm/core/datamatrix/encoder/ASCIIEncoder.js
var ASCIIEncoder = (
  /** @class */
  function() {
    function ASCIIEncoder2() {
    }
    ASCIIEncoder2.prototype.getEncodingMode = function() {
      return ASCII_ENCODATION;
    };
    ASCIIEncoder2.prototype.encode = function(context) {
      var n = HighLevelEncoder_default.determineConsecutiveDigitCount(context.getMessage(), context.pos);
      if (n >= 2) {
        context.writeCodeword(this.encodeASCIIDigits(context.getMessage().charCodeAt(context.pos), context.getMessage().charCodeAt(context.pos + 1)));
        context.pos += 2;
      } else {
        var c = context.getCurrentChar();
        var newMode = HighLevelEncoder_default.lookAheadTest(context.getMessage(), context.pos, this.getEncodingMode());
        if (newMode !== this.getEncodingMode()) {
          switch (newMode) {
            case BASE256_ENCODATION:
              context.writeCodeword(LATCH_TO_BASE256);
              context.signalEncoderChange(BASE256_ENCODATION);
              return;
            case C40_ENCODATION:
              context.writeCodeword(LATCH_TO_C40);
              context.signalEncoderChange(C40_ENCODATION);
              return;
            case X12_ENCODATION:
              context.writeCodeword(LATCH_TO_ANSIX12);
              context.signalEncoderChange(X12_ENCODATION);
              break;
            case TEXT_ENCODATION:
              context.writeCodeword(LATCH_TO_TEXT);
              context.signalEncoderChange(TEXT_ENCODATION);
              break;
            case EDIFACT_ENCODATION:
              context.writeCodeword(LATCH_TO_EDIFACT);
              context.signalEncoderChange(EDIFACT_ENCODATION);
              break;
            default:
              throw new Error("Illegal mode: " + newMode);
          }
        } else if (HighLevelEncoder_default.isExtendedASCII(c)) {
          context.writeCodeword(UPPER_SHIFT);
          context.writeCodeword(c - 128 + 1);
          context.pos++;
        } else {
          context.writeCodeword(c + 1);
          context.pos++;
        }
      }
    };
    ASCIIEncoder2.prototype.encodeASCIIDigits = function(digit1, digit2) {
      if (HighLevelEncoder_default.isDigit(digit1) && HighLevelEncoder_default.isDigit(digit2)) {
        var num = (digit1 - 48) * 10 + (digit2 - 48);
        return num + 130;
      }
      throw new Error("not digits: " + digit1 + digit2);
    };
    return ASCIIEncoder2;
  }()
);

// node_modules/@zxing/library/esm/core/datamatrix/encoder/Base256Encoder.js
var Base256Encoder = (
  /** @class */
  function() {
    function Base256Encoder2() {
    }
    Base256Encoder2.prototype.getEncodingMode = function() {
      return BASE256_ENCODATION;
    };
    Base256Encoder2.prototype.encode = function(context) {
      var buffer = new StringBuilder_default();
      buffer.append(0);
      while (context.hasMoreCharacters()) {
        var c = context.getCurrentChar();
        buffer.append(c);
        context.pos++;
        var newMode = HighLevelEncoder_default.lookAheadTest(context.getMessage(), context.pos, this.getEncodingMode());
        if (newMode !== this.getEncodingMode()) {
          context.signalEncoderChange(ASCII_ENCODATION);
          break;
        }
      }
      var dataCount = buffer.length() - 1;
      var lengthFieldSize = 1;
      var currentSize = context.getCodewordCount() + dataCount + lengthFieldSize;
      context.updateSymbolInfo(currentSize);
      var mustPad = context.getSymbolInfo().getDataCapacity() - currentSize > 0;
      if (context.hasMoreCharacters() || mustPad) {
        if (dataCount <= 249) {
          buffer.setCharAt(0, StringUtils_default.getCharAt(dataCount));
        } else if (dataCount <= 1555) {
          buffer.setCharAt(0, StringUtils_default.getCharAt(Math.floor(dataCount / 250) + 249));
          buffer.insert(1, StringUtils_default.getCharAt(dataCount % 250));
        } else {
          throw new Error("Message length not in valid ranges: " + dataCount);
        }
      }
      for (var i = 0, c = buffer.length(); i < c; i++) {
        context.writeCodeword(this.randomize255State(buffer.charAt(i).charCodeAt(0), context.getCodewordCount() + 1));
      }
    };
    Base256Encoder2.prototype.randomize255State = function(ch, codewordPosition) {
      var pseudoRandom = 149 * codewordPosition % 255 + 1;
      var tempVariable = ch + pseudoRandom;
      if (tempVariable <= 255) {
        return tempVariable;
      } else {
        return tempVariable - 256;
      }
    };
    return Base256Encoder2;
  }()
);

// node_modules/@zxing/library/esm/core/datamatrix/encoder/C40Encoder.js
var C40Encoder = (
  /** @class */
  function() {
    function C40Encoder2() {
    }
    C40Encoder2.prototype.getEncodingMode = function() {
      return C40_ENCODATION;
    };
    C40Encoder2.prototype.encodeMaximal = function(context) {
      var buffer = new StringBuilder_default();
      var lastCharSize = 0;
      var backtrackStartPosition = context.pos;
      var backtrackBufferLength = 0;
      while (context.hasMoreCharacters()) {
        var c = context.getCurrentChar();
        context.pos++;
        lastCharSize = this.encodeChar(c, buffer);
        if (buffer.length() % 3 === 0) {
          backtrackStartPosition = context.pos;
          backtrackBufferLength = buffer.length();
        }
      }
      if (backtrackBufferLength !== buffer.length()) {
        var unwritten = Math.floor(buffer.length() / 3 * 2);
        var curCodewordCount = Math.floor(context.getCodewordCount() + unwritten + 1);
        context.updateSymbolInfo(curCodewordCount);
        var available = context.getSymbolInfo().getDataCapacity() - curCodewordCount;
        var rest = Math.floor(buffer.length() % 3);
        if (rest === 2 && available !== 2 || rest === 1 && (lastCharSize > 3 || available !== 1)) {
          context.pos = backtrackStartPosition;
        }
      }
      if (buffer.length() > 0) {
        context.writeCodeword(LATCH_TO_C40);
      }
      this.handleEOD(context, buffer);
    };
    C40Encoder2.prototype.encode = function(context) {
      var buffer = new StringBuilder_default();
      while (context.hasMoreCharacters()) {
        var c = context.getCurrentChar();
        context.pos++;
        var lastCharSize = this.encodeChar(c, buffer);
        var unwritten = Math.floor(buffer.length() / 3) * 2;
        var curCodewordCount = context.getCodewordCount() + unwritten;
        context.updateSymbolInfo(curCodewordCount);
        var available = context.getSymbolInfo().getDataCapacity() - curCodewordCount;
        if (!context.hasMoreCharacters()) {
          var removed = new StringBuilder_default();
          if (buffer.length() % 3 === 2 && available !== 2) {
            lastCharSize = this.backtrackOneCharacter(context, buffer, removed, lastCharSize);
          }
          while (buffer.length() % 3 === 1 && (lastCharSize > 3 || available !== 1)) {
            lastCharSize = this.backtrackOneCharacter(context, buffer, removed, lastCharSize);
          }
          break;
        }
        var count = buffer.length();
        if (count % 3 === 0) {
          var newMode = HighLevelEncoder_default.lookAheadTest(context.getMessage(), context.pos, this.getEncodingMode());
          if (newMode !== this.getEncodingMode()) {
            context.signalEncoderChange(ASCII_ENCODATION);
            break;
          }
        }
      }
      this.handleEOD(context, buffer);
    };
    C40Encoder2.prototype.backtrackOneCharacter = function(context, buffer, removed, lastCharSize) {
      var count = buffer.length();
      var test = buffer.toString().substring(0, count - lastCharSize);
      buffer.setLengthToZero();
      buffer.append(test);
      context.pos--;
      var c = context.getCurrentChar();
      lastCharSize = this.encodeChar(c, removed);
      context.resetSymbolInfo();
      return lastCharSize;
    };
    C40Encoder2.prototype.writeNextTriplet = function(context, buffer) {
      context.writeCodewords(this.encodeToCodewords(buffer.toString()));
      var test = buffer.toString().substring(3);
      buffer.setLengthToZero();
      buffer.append(test);
    };
    C40Encoder2.prototype.handleEOD = function(context, buffer) {
      var unwritten = Math.floor(buffer.length() / 3 * 2);
      var rest = buffer.length() % 3;
      var curCodewordCount = context.getCodewordCount() + unwritten;
      context.updateSymbolInfo(curCodewordCount);
      var available = context.getSymbolInfo().getDataCapacity() - curCodewordCount;
      if (rest === 2) {
        buffer.append("\0");
        while (buffer.length() >= 3) {
          this.writeNextTriplet(context, buffer);
        }
        if (context.hasMoreCharacters()) {
          context.writeCodeword(C40_UNLATCH);
        }
      } else if (available === 1 && rest === 1) {
        while (buffer.length() >= 3) {
          this.writeNextTriplet(context, buffer);
        }
        if (context.hasMoreCharacters()) {
          context.writeCodeword(C40_UNLATCH);
        }
        context.pos--;
      } else if (rest === 0) {
        while (buffer.length() >= 3) {
          this.writeNextTriplet(context, buffer);
        }
        if (available > 0 || context.hasMoreCharacters()) {
          context.writeCodeword(C40_UNLATCH);
        }
      } else {
        throw new Error("Unexpected case. Please report!");
      }
      context.signalEncoderChange(ASCII_ENCODATION);
    };
    C40Encoder2.prototype.encodeChar = function(c, sb) {
      if (c === " ".charCodeAt(0)) {
        sb.append(3);
        return 1;
      }
      if (c >= "0".charCodeAt(0) && c <= "9".charCodeAt(0)) {
        sb.append(c - 48 + 4);
        return 1;
      }
      if (c >= "A".charCodeAt(0) && c <= "Z".charCodeAt(0)) {
        sb.append(c - 65 + 14);
        return 1;
      }
      if (c < " ".charCodeAt(0)) {
        sb.append(0);
        sb.append(c);
        return 2;
      }
      if (c <= "/".charCodeAt(0)) {
        sb.append(1);
        sb.append(c - 33);
        return 2;
      }
      if (c <= "@".charCodeAt(0)) {
        sb.append(1);
        sb.append(c - 58 + 15);
        return 2;
      }
      if (c <= "_".charCodeAt(0)) {
        sb.append(1);
        sb.append(c - 91 + 22);
        return 2;
      }
      if (c <= 127) {
        sb.append(2);
        sb.append(c - 96);
        return 2;
      }
      sb.append("1");
      var len = 2;
      len += this.encodeChar(c - 128, sb);
      return len;
    };
    C40Encoder2.prototype.encodeToCodewords = function(sb) {
      var v = 1600 * sb.charCodeAt(0) + 40 * sb.charCodeAt(1) + sb.charCodeAt(2) + 1;
      var cw1 = v / 256;
      var cw2 = v % 256;
      var result = new StringBuilder_default();
      result.append(cw1);
      result.append(cw2);
      return result.toString();
    };
    return C40Encoder2;
  }()
);

// node_modules/@zxing/library/esm/core/datamatrix/encoder/EdifactEncoder.js
var EdifactEncoder = (
  /** @class */
  function() {
    function EdifactEncoder2() {
    }
    EdifactEncoder2.prototype.getEncodingMode = function() {
      return EDIFACT_ENCODATION;
    };
    EdifactEncoder2.prototype.encode = function(context) {
      var buffer = new StringBuilder_default();
      while (context.hasMoreCharacters()) {
        var c = context.getCurrentChar();
        this.encodeChar(c, buffer);
        context.pos++;
        var count = buffer.length();
        if (count >= 4) {
          context.writeCodewords(this.encodeToCodewords(buffer.toString()));
          var test_1 = buffer.toString().substring(4);
          buffer.setLengthToZero();
          buffer.append(test_1);
          var newMode = HighLevelEncoder_default.lookAheadTest(context.getMessage(), context.pos, this.getEncodingMode());
          if (newMode !== this.getEncodingMode()) {
            context.signalEncoderChange(ASCII_ENCODATION);
            break;
          }
        }
      }
      buffer.append(StringUtils_default.getCharAt(31));
      this.handleEOD(context, buffer);
    };
    EdifactEncoder2.prototype.handleEOD = function(context, buffer) {
      try {
        var count = buffer.length();
        if (count === 0) {
          return;
        }
        if (count === 1) {
          context.updateSymbolInfo();
          var available = context.getSymbolInfo().getDataCapacity() - context.getCodewordCount();
          var remaining = context.getRemainingCharacters();
          if (remaining > available) {
            context.updateSymbolInfo(context.getCodewordCount() + 1);
            available = context.getSymbolInfo().getDataCapacity() - context.getCodewordCount();
          }
          if (remaining <= available && available <= 2) {
            return;
          }
        }
        if (count > 4) {
          throw new Error("Count must not exceed 4");
        }
        var restChars = count - 1;
        var encoded = this.encodeToCodewords(buffer.toString());
        var endOfSymbolReached = !context.hasMoreCharacters();
        var restInAscii = endOfSymbolReached && restChars <= 2;
        if (restChars <= 2) {
          context.updateSymbolInfo(context.getCodewordCount() + restChars);
          var available = context.getSymbolInfo().getDataCapacity() - context.getCodewordCount();
          if (available >= 3) {
            restInAscii = false;
            context.updateSymbolInfo(context.getCodewordCount() + encoded.length);
          }
        }
        if (restInAscii) {
          context.resetSymbolInfo();
          context.pos -= restChars;
        } else {
          context.writeCodewords(encoded);
        }
      } finally {
        context.signalEncoderChange(ASCII_ENCODATION);
      }
    };
    EdifactEncoder2.prototype.encodeChar = function(c, sb) {
      if (c >= " ".charCodeAt(0) && c <= "?".charCodeAt(0)) {
        sb.append(c);
      } else if (c >= "@".charCodeAt(0) && c <= "^".charCodeAt(0)) {
        sb.append(StringUtils_default.getCharAt(c - 64));
      } else {
        HighLevelEncoder_default.illegalCharacter(StringUtils_default.getCharAt(c));
      }
    };
    EdifactEncoder2.prototype.encodeToCodewords = function(sb) {
      var len = sb.length;
      if (len === 0) {
        throw new Error("StringBuilder must not be empty");
      }
      var c1 = sb.charAt(0).charCodeAt(0);
      var c2 = len >= 2 ? sb.charAt(1).charCodeAt(0) : 0;
      var c3 = len >= 3 ? sb.charAt(2).charCodeAt(0) : 0;
      var c4 = len >= 4 ? sb.charAt(3).charCodeAt(0) : 0;
      var v = (c1 << 18) + (c2 << 12) + (c3 << 6) + c4;
      var cw1 = v >> 16 & 255;
      var cw2 = v >> 8 & 255;
      var cw3 = v & 255;
      var res = new StringBuilder_default();
      res.append(cw1);
      if (len >= 2) {
        res.append(cw2);
      }
      if (len >= 3) {
        res.append(cw3);
      }
      return res.toString();
    };
    return EdifactEncoder2;
  }()
);

// node_modules/@zxing/library/esm/core/datamatrix/encoder/SymbolInfo.js
var __extends69 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values41 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var SymbolInfo = (
  /** @class */
  function() {
    function SymbolInfo2(rectangular, dataCapacity, errorCodewords, matrixWidth, matrixHeight, dataRegions, rsBlockData, rsBlockError) {
      if (rsBlockData === void 0) {
        rsBlockData = 0;
      }
      if (rsBlockError === void 0) {
        rsBlockError = 0;
      }
      this.rectangular = rectangular;
      this.dataCapacity = dataCapacity;
      this.errorCodewords = errorCodewords;
      this.matrixWidth = matrixWidth;
      this.matrixHeight = matrixHeight;
      this.dataRegions = dataRegions;
      this.rsBlockData = rsBlockData;
      this.rsBlockError = rsBlockError;
    }
    SymbolInfo2.lookup = function(dataCodewords, shape, minSize, maxSize, fail) {
      var e_1, _a2;
      if (shape === void 0) {
        shape = 0;
      }
      if (minSize === void 0) {
        minSize = null;
      }
      if (maxSize === void 0) {
        maxSize = null;
      }
      if (fail === void 0) {
        fail = true;
      }
      try {
        for (var PROD_SYMBOLS_1 = __values41(PROD_SYMBOLS), PROD_SYMBOLS_1_1 = PROD_SYMBOLS_1.next(); !PROD_SYMBOLS_1_1.done; PROD_SYMBOLS_1_1 = PROD_SYMBOLS_1.next()) {
          var symbol = PROD_SYMBOLS_1_1.value;
          if (shape === 1 && symbol.rectangular) {
            continue;
          }
          if (shape === 2 && !symbol.rectangular) {
            continue;
          }
          if (minSize != null && (symbol.getSymbolWidth() < minSize.getWidth() || symbol.getSymbolHeight() < minSize.getHeight())) {
            continue;
          }
          if (maxSize != null && (symbol.getSymbolWidth() > maxSize.getWidth() || symbol.getSymbolHeight() > maxSize.getHeight())) {
            continue;
          }
          if (dataCodewords <= symbol.dataCapacity) {
            return symbol;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (PROD_SYMBOLS_1_1 && !PROD_SYMBOLS_1_1.done && (_a2 = PROD_SYMBOLS_1.return)) _a2.call(PROD_SYMBOLS_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      if (fail) {
        throw new Error("Can't find a symbol arrangement that matches the message. Data codewords: " + dataCodewords);
      }
      return null;
    };
    SymbolInfo2.prototype.getHorizontalDataRegions = function() {
      switch (this.dataRegions) {
        case 1:
          return 1;
        case 2:
        case 4:
          return 2;
        case 16:
          return 4;
        case 36:
          return 6;
        default:
          throw new Error("Cannot handle this number of data regions");
      }
    };
    SymbolInfo2.prototype.getVerticalDataRegions = function() {
      switch (this.dataRegions) {
        case 1:
        case 2:
          return 1;
        case 4:
          return 2;
        case 16:
          return 4;
        case 36:
          return 6;
        default:
          throw new Error("Cannot handle this number of data regions");
      }
    };
    SymbolInfo2.prototype.getSymbolDataWidth = function() {
      return this.getHorizontalDataRegions() * this.matrixWidth;
    };
    SymbolInfo2.prototype.getSymbolDataHeight = function() {
      return this.getVerticalDataRegions() * this.matrixHeight;
    };
    SymbolInfo2.prototype.getSymbolWidth = function() {
      return this.getSymbolDataWidth() + this.getHorizontalDataRegions() * 2;
    };
    SymbolInfo2.prototype.getSymbolHeight = function() {
      return this.getSymbolDataHeight() + this.getVerticalDataRegions() * 2;
    };
    SymbolInfo2.prototype.getCodewordCount = function() {
      return this.dataCapacity + this.errorCodewords;
    };
    SymbolInfo2.prototype.getInterleavedBlockCount = function() {
      if (!this.rsBlockData) return 1;
      return this.dataCapacity / this.rsBlockData;
    };
    SymbolInfo2.prototype.getDataCapacity = function() {
      return this.dataCapacity;
    };
    SymbolInfo2.prototype.getErrorCodewords = function() {
      return this.errorCodewords;
    };
    SymbolInfo2.prototype.getDataLengthForInterleavedBlock = function(index) {
      return this.rsBlockData;
    };
    SymbolInfo2.prototype.getErrorLengthForInterleavedBlock = function(index) {
      return this.rsBlockError;
    };
    return SymbolInfo2;
  }()
);
var SymbolInfo_default = SymbolInfo;
var DataMatrixSymbolInfo144 = (
  /** @class */
  function(_super) {
    __extends69(DataMatrixSymbolInfo1442, _super);
    function DataMatrixSymbolInfo1442() {
      return _super.call(this, false, 1558, 620, 22, 22, 36, -1, 62) || this;
    }
    DataMatrixSymbolInfo1442.prototype.getInterleavedBlockCount = function() {
      return 10;
    };
    DataMatrixSymbolInfo1442.prototype.getDataLengthForInterleavedBlock = function(index) {
      return index <= 8 ? 156 : 155;
    };
    return DataMatrixSymbolInfo1442;
  }(SymbolInfo)
);
var PROD_SYMBOLS = [
  new SymbolInfo(false, 3, 5, 8, 8, 1),
  new SymbolInfo(false, 5, 7, 10, 10, 1),
  /*rect*/
  new SymbolInfo(true, 5, 7, 16, 6, 1),
  new SymbolInfo(false, 8, 10, 12, 12, 1),
  /*rect*/
  new SymbolInfo(true, 10, 11, 14, 6, 2),
  new SymbolInfo(false, 12, 12, 14, 14, 1),
  /*rect*/
  new SymbolInfo(true, 16, 14, 24, 10, 1),
  new SymbolInfo(false, 18, 14, 16, 16, 1),
  new SymbolInfo(false, 22, 18, 18, 18, 1),
  /*rect*/
  new SymbolInfo(true, 22, 18, 16, 10, 2),
  new SymbolInfo(false, 30, 20, 20, 20, 1),
  /*rect*/
  new SymbolInfo(true, 32, 24, 16, 14, 2),
  new SymbolInfo(false, 36, 24, 22, 22, 1),
  new SymbolInfo(false, 44, 28, 24, 24, 1),
  /*rect*/
  new SymbolInfo(true, 49, 28, 22, 14, 2),
  new SymbolInfo(false, 62, 36, 14, 14, 4),
  new SymbolInfo(false, 86, 42, 16, 16, 4),
  new SymbolInfo(false, 114, 48, 18, 18, 4),
  new SymbolInfo(false, 144, 56, 20, 20, 4),
  new SymbolInfo(false, 174, 68, 22, 22, 4),
  new SymbolInfo(false, 204, 84, 24, 24, 4, 102, 42),
  new SymbolInfo(false, 280, 112, 14, 14, 16, 140, 56),
  new SymbolInfo(false, 368, 144, 16, 16, 16, 92, 36),
  new SymbolInfo(false, 456, 192, 18, 18, 16, 114, 48),
  new SymbolInfo(false, 576, 224, 20, 20, 16, 144, 56),
  new SymbolInfo(false, 696, 272, 22, 22, 16, 174, 68),
  new SymbolInfo(false, 816, 336, 24, 24, 16, 136, 56),
  new SymbolInfo(false, 1050, 408, 18, 18, 36, 175, 68),
  new SymbolInfo(false, 1304, 496, 20, 20, 36, 163, 62),
  new DataMatrixSymbolInfo144()
];

// node_modules/@zxing/library/esm/core/datamatrix/encoder/EncoderContext.js
var EncoderContext = (
  /** @class */
  function() {
    function EncoderContext2(msg) {
      this.msg = msg;
      this.pos = 0;
      this.skipAtEnd = 0;
      var msgBinary = msg.split("").map(function(c2) {
        return c2.charCodeAt(0);
      });
      var sb = new StringBuilder_default();
      for (var i = 0, c = msgBinary.length; i < c; i++) {
        var ch = String.fromCharCode(msgBinary[i] & 255);
        if (ch === "?" && msg.charAt(i) !== "?") {
          throw new Error("Message contains characters outside ISO-8859-1 encoding.");
        }
        sb.append(ch);
      }
      this.msg = sb.toString();
      this.shape = 0;
      this.codewords = new StringBuilder_default();
      this.newEncoding = -1;
    }
    EncoderContext2.prototype.setSymbolShape = function(shape) {
      this.shape = shape;
    };
    EncoderContext2.prototype.setSizeConstraints = function(minSize, maxSize) {
      this.minSize = minSize;
      this.maxSize = maxSize;
    };
    EncoderContext2.prototype.getMessage = function() {
      return this.msg;
    };
    EncoderContext2.prototype.setSkipAtEnd = function(count) {
      this.skipAtEnd = count;
    };
    EncoderContext2.prototype.getCurrentChar = function() {
      return this.msg.charCodeAt(this.pos);
    };
    EncoderContext2.prototype.getCurrent = function() {
      return this.msg.charCodeAt(this.pos);
    };
    EncoderContext2.prototype.getCodewords = function() {
      return this.codewords;
    };
    EncoderContext2.prototype.writeCodewords = function(codewords) {
      this.codewords.append(codewords);
    };
    EncoderContext2.prototype.writeCodeword = function(codeword) {
      this.codewords.append(codeword);
    };
    EncoderContext2.prototype.getCodewordCount = function() {
      return this.codewords.length();
    };
    EncoderContext2.prototype.getNewEncoding = function() {
      return this.newEncoding;
    };
    EncoderContext2.prototype.signalEncoderChange = function(encoding) {
      this.newEncoding = encoding;
    };
    EncoderContext2.prototype.resetEncoderSignal = function() {
      this.newEncoding = -1;
    };
    EncoderContext2.prototype.hasMoreCharacters = function() {
      return this.pos < this.getTotalMessageCharCount();
    };
    EncoderContext2.prototype.getTotalMessageCharCount = function() {
      return this.msg.length - this.skipAtEnd;
    };
    EncoderContext2.prototype.getRemainingCharacters = function() {
      return this.getTotalMessageCharCount() - this.pos;
    };
    EncoderContext2.prototype.getSymbolInfo = function() {
      return this.symbolInfo;
    };
    EncoderContext2.prototype.updateSymbolInfo = function(len) {
      if (len === void 0) {
        len = this.getCodewordCount();
      }
      if (this.symbolInfo == null || len > this.symbolInfo.getDataCapacity()) {
        this.symbolInfo = SymbolInfo_default.lookup(len, this.shape, this.minSize, this.maxSize, true);
      }
    };
    EncoderContext2.prototype.resetSymbolInfo = function() {
      this.symbolInfo = null;
    };
    return EncoderContext2;
  }()
);

// node_modules/@zxing/library/esm/core/datamatrix/encoder/X12Encoder.js
var __extends70 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var X12Encoder = (
  /** @class */
  function(_super) {
    __extends70(X12Encoder2, _super);
    function X12Encoder2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    X12Encoder2.prototype.getEncodingMode = function() {
      return X12_ENCODATION;
    };
    X12Encoder2.prototype.encode = function(context) {
      var buffer = new StringBuilder_default();
      while (context.hasMoreCharacters()) {
        var c = context.getCurrentChar();
        context.pos++;
        this.encodeChar(c, buffer);
        var count = buffer.length();
        if (count % 3 === 0) {
          this.writeNextTriplet(context, buffer);
          var newMode = HighLevelEncoder_default.lookAheadTest(context.getMessage(), context.pos, this.getEncodingMode());
          if (newMode !== this.getEncodingMode()) {
            context.signalEncoderChange(ASCII_ENCODATION);
            break;
          }
        }
      }
      this.handleEOD(context, buffer);
    };
    X12Encoder2.prototype.encodeChar = function(c, sb) {
      switch (c) {
        case 13:
          sb.append(0);
          break;
        case "*".charCodeAt(0):
          sb.append(1);
          break;
        case ">".charCodeAt(0):
          sb.append(2);
          break;
        case " ".charCodeAt(0):
          sb.append(3);
          break;
        default:
          if (c >= "0".charCodeAt(0) && c <= "9".charCodeAt(0)) {
            sb.append(c - 48 + 4);
          } else if (c >= "A".charCodeAt(0) && c <= "Z".charCodeAt(0)) {
            sb.append(c - 65 + 14);
          } else {
            HighLevelEncoder_default.illegalCharacter(StringUtils_default.getCharAt(c));
          }
          break;
      }
      return 1;
    };
    X12Encoder2.prototype.handleEOD = function(context, buffer) {
      context.updateSymbolInfo();
      var available = context.getSymbolInfo().getDataCapacity() - context.getCodewordCount();
      var count = buffer.length();
      context.pos -= count;
      if (context.getRemainingCharacters() > 1 || available > 1 || context.getRemainingCharacters() !== available) {
        context.writeCodeword(X12_UNLATCH);
      }
      if (context.getNewEncoding() < 0) {
        context.signalEncoderChange(ASCII_ENCODATION);
      }
    };
    return X12Encoder2;
  }(C40Encoder)
);

// node_modules/@zxing/library/esm/core/datamatrix/encoder/TextEncoder.js
var __extends71 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var TextEncoder2 = (
  /** @class */
  function(_super) {
    __extends71(TextEncoder3, _super);
    function TextEncoder3() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    TextEncoder3.prototype.getEncodingMode = function() {
      return TEXT_ENCODATION;
    };
    TextEncoder3.prototype.encodeChar = function(c, sb) {
      if (c === " ".charCodeAt(0)) {
        sb.append(3);
        return 1;
      }
      if (c >= "0".charCodeAt(0) && c <= "9".charCodeAt(0)) {
        sb.append(c - 48 + 4);
        return 1;
      }
      if (c >= "a".charCodeAt(0) && c <= "z".charCodeAt(0)) {
        sb.append(c - 97 + 14);
        return 1;
      }
      if (c < " ".charCodeAt(0)) {
        sb.append(0);
        sb.append(c);
        return 2;
      }
      if (c <= "/".charCodeAt(0)) {
        sb.append(1);
        sb.append(c - 33);
        return 2;
      }
      if (c <= "@".charCodeAt(0)) {
        sb.append(1);
        sb.append(c - 58 + 15);
        return 2;
      }
      if (c >= "[".charCodeAt(0) && c <= "_".charCodeAt(0)) {
        sb.append(1);
        sb.append(c - 91 + 22);
        return 2;
      }
      if (c === "`".charCodeAt(0)) {
        sb.append(2);
        sb.append(0);
        return 2;
      }
      if (c <= "Z".charCodeAt(0)) {
        sb.append(2);
        sb.append(c - 65 + 1);
        return 2;
      }
      if (c <= 127) {
        sb.append(2);
        sb.append(c - 123 + 27);
        return 2;
      }
      sb.append("1");
      var len = 2;
      len += this.encodeChar(c - 128, sb);
      return len;
    };
    return TextEncoder3;
  }(C40Encoder)
);

// node_modules/@zxing/library/esm/core/datamatrix/encoder/HighLevelEncoder.js
var HighLevelEncoder = (
  /** @class */
  function() {
    function HighLevelEncoder3() {
    }
    HighLevelEncoder3.randomize253State = function(codewordPosition) {
      var pseudoRandom = 149 * codewordPosition % 253 + 1;
      var tempVariable = PAD + pseudoRandom;
      return tempVariable <= 254 ? tempVariable : tempVariable - 254;
    };
    HighLevelEncoder3.encodeHighLevel = function(msg, shape, minSize, maxSize, forceC40) {
      if (shape === void 0) {
        shape = 0;
      }
      if (minSize === void 0) {
        minSize = null;
      }
      if (maxSize === void 0) {
        maxSize = null;
      }
      if (forceC40 === void 0) {
        forceC40 = false;
      }
      var c40Encoder = new C40Encoder();
      var encoders = [new ASCIIEncoder(), c40Encoder, new TextEncoder2(), new X12Encoder(), new EdifactEncoder(), new Base256Encoder()];
      var context = new EncoderContext(msg);
      context.setSymbolShape(shape);
      context.setSizeConstraints(minSize, maxSize);
      if (msg.startsWith(MACRO_05_HEADER) && msg.endsWith(MACRO_TRAILER)) {
        context.writeCodeword(MACRO_05);
        context.setSkipAtEnd(2);
        context.pos += MACRO_05_HEADER.length;
      } else if (msg.startsWith(MACRO_06_HEADER) && msg.endsWith(MACRO_TRAILER)) {
        context.writeCodeword(MACRO_06);
        context.setSkipAtEnd(2);
        context.pos += MACRO_06_HEADER.length;
      }
      var encodingMode = ASCII_ENCODATION;
      if (forceC40) {
        c40Encoder.encodeMaximal(context);
        encodingMode = context.getNewEncoding();
        context.resetEncoderSignal();
      }
      while (context.hasMoreCharacters()) {
        encoders[encodingMode].encode(context);
        if (context.getNewEncoding() >= 0) {
          encodingMode = context.getNewEncoding();
          context.resetEncoderSignal();
        }
      }
      var len = context.getCodewordCount();
      context.updateSymbolInfo();
      var capacity = context.getSymbolInfo().getDataCapacity();
      if (len < capacity && encodingMode !== ASCII_ENCODATION && encodingMode !== BASE256_ENCODATION && encodingMode !== EDIFACT_ENCODATION) {
        context.writeCodeword("þ");
      }
      var codewords = context.getCodewords();
      if (codewords.length() < capacity) {
        codewords.append(PAD);
      }
      while (codewords.length() < capacity) {
        codewords.append(this.randomize253State(codewords.length() + 1));
      }
      return context.getCodewords().toString();
    };
    HighLevelEncoder3.lookAheadTest = function(msg, startpos, currentMode) {
      var newMode = this.lookAheadTestIntern(msg, startpos, currentMode);
      if (currentMode === X12_ENCODATION && newMode === X12_ENCODATION) {
        var endpos = Math.min(startpos + 3, msg.length);
        for (var i = startpos; i < endpos; i++) {
          if (!this.isNativeX12(msg.charCodeAt(i))) {
            return ASCII_ENCODATION;
          }
        }
      } else if (currentMode === EDIFACT_ENCODATION && newMode === EDIFACT_ENCODATION) {
        var endpos = Math.min(startpos + 4, msg.length);
        for (var i = startpos; i < endpos; i++) {
          if (!this.isNativeEDIFACT(msg.charCodeAt(i))) {
            return ASCII_ENCODATION;
          }
        }
      }
      return newMode;
    };
    HighLevelEncoder3.lookAheadTestIntern = function(msg, startpos, currentMode) {
      if (startpos >= msg.length) {
        return currentMode;
      }
      var charCounts;
      if (currentMode === ASCII_ENCODATION) {
        charCounts = [0, 1, 1, 1, 1, 1.25];
      } else {
        charCounts = [1, 2, 2, 2, 2, 2.25];
        charCounts[currentMode] = 0;
      }
      var charsProcessed = 0;
      var mins = new Uint8Array(6);
      var intCharCounts = [];
      while (true) {
        if (startpos + charsProcessed === msg.length) {
          Arrays_default.fill(mins, 0);
          Arrays_default.fill(intCharCounts, 0);
          var min = this.findMinimums(charCounts, intCharCounts, Integer_default.MAX_VALUE, mins);
          var minCount = this.getMinimumCount(mins);
          if (intCharCounts[ASCII_ENCODATION] === min) {
            return ASCII_ENCODATION;
          }
          if (minCount === 1) {
            if (mins[BASE256_ENCODATION] > 0) {
              return BASE256_ENCODATION;
            }
            if (mins[EDIFACT_ENCODATION] > 0) {
              return EDIFACT_ENCODATION;
            }
            if (mins[TEXT_ENCODATION] > 0) {
              return TEXT_ENCODATION;
            }
            if (mins[X12_ENCODATION] > 0) {
              return X12_ENCODATION;
            }
          }
          return C40_ENCODATION;
        }
        var c = msg.charCodeAt(startpos + charsProcessed);
        charsProcessed++;
        if (this.isDigit(c)) {
          charCounts[ASCII_ENCODATION] += 0.5;
        } else if (this.isExtendedASCII(c)) {
          charCounts[ASCII_ENCODATION] = Math.ceil(charCounts[ASCII_ENCODATION]);
          charCounts[ASCII_ENCODATION] += 2;
        } else {
          charCounts[ASCII_ENCODATION] = Math.ceil(charCounts[ASCII_ENCODATION]);
          charCounts[ASCII_ENCODATION]++;
        }
        if (this.isNativeC40(c)) {
          charCounts[C40_ENCODATION] += 2 / 3;
        } else if (this.isExtendedASCII(c)) {
          charCounts[C40_ENCODATION] += 8 / 3;
        } else {
          charCounts[C40_ENCODATION] += 4 / 3;
        }
        if (this.isNativeText(c)) {
          charCounts[TEXT_ENCODATION] += 2 / 3;
        } else if (this.isExtendedASCII(c)) {
          charCounts[TEXT_ENCODATION] += 8 / 3;
        } else {
          charCounts[TEXT_ENCODATION] += 4 / 3;
        }
        if (this.isNativeX12(c)) {
          charCounts[X12_ENCODATION] += 2 / 3;
        } else if (this.isExtendedASCII(c)) {
          charCounts[X12_ENCODATION] += 13 / 3;
        } else {
          charCounts[X12_ENCODATION] += 10 / 3;
        }
        if (this.isNativeEDIFACT(c)) {
          charCounts[EDIFACT_ENCODATION] += 3 / 4;
        } else if (this.isExtendedASCII(c)) {
          charCounts[EDIFACT_ENCODATION] += 17 / 4;
        } else {
          charCounts[EDIFACT_ENCODATION] += 13 / 4;
        }
        if (this.isSpecialB256(c)) {
          charCounts[BASE256_ENCODATION] += 4;
        } else {
          charCounts[BASE256_ENCODATION]++;
        }
        if (charsProcessed >= 4) {
          Arrays_default.fill(mins, 0);
          Arrays_default.fill(intCharCounts, 0);
          this.findMinimums(charCounts, intCharCounts, Integer_default.MAX_VALUE, mins);
          if (intCharCounts[ASCII_ENCODATION] < this.min(intCharCounts[BASE256_ENCODATION], intCharCounts[C40_ENCODATION], intCharCounts[TEXT_ENCODATION], intCharCounts[X12_ENCODATION], intCharCounts[EDIFACT_ENCODATION])) {
            return ASCII_ENCODATION;
          }
          if (intCharCounts[BASE256_ENCODATION] < intCharCounts[ASCII_ENCODATION] || intCharCounts[BASE256_ENCODATION] + 1 < this.min(intCharCounts[C40_ENCODATION], intCharCounts[TEXT_ENCODATION], intCharCounts[X12_ENCODATION], intCharCounts[EDIFACT_ENCODATION])) {
            return BASE256_ENCODATION;
          }
          if (intCharCounts[EDIFACT_ENCODATION] + 1 < this.min(intCharCounts[BASE256_ENCODATION], intCharCounts[C40_ENCODATION], intCharCounts[TEXT_ENCODATION], intCharCounts[X12_ENCODATION], intCharCounts[ASCII_ENCODATION])) {
            return EDIFACT_ENCODATION;
          }
          if (intCharCounts[TEXT_ENCODATION] + 1 < this.min(intCharCounts[BASE256_ENCODATION], intCharCounts[C40_ENCODATION], intCharCounts[EDIFACT_ENCODATION], intCharCounts[X12_ENCODATION], intCharCounts[ASCII_ENCODATION])) {
            return TEXT_ENCODATION;
          }
          if (intCharCounts[X12_ENCODATION] + 1 < this.min(intCharCounts[BASE256_ENCODATION], intCharCounts[C40_ENCODATION], intCharCounts[EDIFACT_ENCODATION], intCharCounts[TEXT_ENCODATION], intCharCounts[ASCII_ENCODATION])) {
            return X12_ENCODATION;
          }
          if (intCharCounts[C40_ENCODATION] + 1 < this.min(intCharCounts[ASCII_ENCODATION], intCharCounts[BASE256_ENCODATION], intCharCounts[EDIFACT_ENCODATION], intCharCounts[TEXT_ENCODATION])) {
            if (intCharCounts[C40_ENCODATION] < intCharCounts[X12_ENCODATION]) {
              return C40_ENCODATION;
            }
            if (intCharCounts[C40_ENCODATION] === intCharCounts[X12_ENCODATION]) {
              var p = startpos + charsProcessed + 1;
              while (p < msg.length) {
                var tc = msg.charCodeAt(p);
                if (this.isX12TermSep(tc)) {
                  return X12_ENCODATION;
                }
                if (!this.isNativeX12(tc)) {
                  break;
                }
                p++;
              }
              return C40_ENCODATION;
            }
          }
        }
      }
    };
    HighLevelEncoder3.min = function(f1, f2, f3, f4, f5) {
      var val = Math.min(f1, Math.min(f2, Math.min(f3, f4)));
      if (f5 === void 0) {
        return val;
      } else {
        return Math.min(val, f5);
      }
    };
    HighLevelEncoder3.findMinimums = function(charCounts, intCharCounts, min, mins) {
      for (var i = 0; i < 6; i++) {
        var current = intCharCounts[i] = Math.ceil(charCounts[i]);
        if (min > current) {
          min = current;
          Arrays_default.fill(mins, 0);
        }
        if (min === current) {
          mins[i] = mins[i] + 1;
        }
      }
      return min;
    };
    HighLevelEncoder3.getMinimumCount = function(mins) {
      var minCount = 0;
      for (var i = 0; i < 6; i++) {
        minCount += mins[i];
      }
      return minCount || 0;
    };
    HighLevelEncoder3.isDigit = function(ch) {
      return ch >= "0".charCodeAt(0) && ch <= "9".charCodeAt(0);
    };
    HighLevelEncoder3.isExtendedASCII = function(ch) {
      return ch >= 128 && ch <= 255;
    };
    HighLevelEncoder3.isNativeC40 = function(ch) {
      return ch === " ".charCodeAt(0) || ch >= "0".charCodeAt(0) && ch <= "9".charCodeAt(0) || ch >= "A".charCodeAt(0) && ch <= "Z".charCodeAt(0);
    };
    HighLevelEncoder3.isNativeText = function(ch) {
      return ch === " ".charCodeAt(0) || ch >= "0".charCodeAt(0) && ch <= "9".charCodeAt(0) || ch >= "a".charCodeAt(0) && ch <= "z".charCodeAt(0);
    };
    HighLevelEncoder3.isNativeX12 = function(ch) {
      return this.isX12TermSep(ch) || ch === " ".charCodeAt(0) || ch >= "0".charCodeAt(0) && ch <= "9".charCodeAt(0) || ch >= "A".charCodeAt(0) && ch <= "Z".charCodeAt(0);
    };
    HighLevelEncoder3.isX12TermSep = function(ch) {
      return ch === 13 || // CR
      ch === "*".charCodeAt(0) || ch === ">".charCodeAt(0);
    };
    HighLevelEncoder3.isNativeEDIFACT = function(ch) {
      return ch >= " ".charCodeAt(0) && ch <= "^".charCodeAt(0);
    };
    HighLevelEncoder3.isSpecialB256 = function(ch) {
      return false;
    };
    HighLevelEncoder3.determineConsecutiveDigitCount = function(msg, startpos) {
      if (startpos === void 0) {
        startpos = 0;
      }
      var len = msg.length;
      var idx = startpos;
      while (idx < len && this.isDigit(msg.charCodeAt(idx))) {
        idx++;
      }
      return idx - startpos;
    };
    HighLevelEncoder3.illegalCharacter = function(singleCharacter) {
      var hex = Integer_default.toHexString(singleCharacter.charCodeAt(0));
      hex = "0000".substring(0, 4 - hex.length) + hex;
      throw new Error("Illegal character: " + singleCharacter + " (0x" + hex + ")");
    };
    return HighLevelEncoder3;
  }()
);
var HighLevelEncoder_default = HighLevelEncoder;

// node_modules/@zxing/library/esm/core/common/ECIEncoderSet.js
var __values42 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var CharsetEncoder = (
  /** @class */
  function() {
    function CharsetEncoder2(charset) {
      this.charset = charset;
      this.name = charset.name;
    }
    CharsetEncoder2.prototype.canEncode = function(c) {
      try {
        return StringEncoding_default.encode(c, this.charset) != null;
      } catch (ex) {
        return false;
      }
    };
    return CharsetEncoder2;
  }()
);
var ECIEncoderSet = (
  /** @class */
  function() {
    function ECIEncoderSet2(stringToEncode, priorityCharset, fnc1) {
      var e_1, _a2, e_2, _b, e_3, _c;
      this.ENCODERS = ["IBM437", "ISO-8859-2", "ISO-8859-3", "ISO-8859-4", "ISO-8859-5", "ISO-8859-6", "ISO-8859-7", "ISO-8859-8", "ISO-8859-9", "ISO-8859-10", "ISO-8859-11", "ISO-8859-13", "ISO-8859-14", "ISO-8859-15", "ISO-8859-16", "windows-1250", "windows-1251", "windows-1252", "windows-1256", "Shift_JIS"].map(function(name) {
        return new CharsetEncoder(Charset_default.forName(name));
      });
      this.encoders = [];
      var neededEncoders = [];
      neededEncoders.push(new CharsetEncoder(StandardCharsets_default.ISO_8859_1));
      var needUnicodeEncoder = priorityCharset != null && priorityCharset.name.startsWith("UTF");
      for (var i = 0; i < stringToEncode.length; i++) {
        var canEncode = false;
        try {
          for (var neededEncoders_1 = (e_1 = void 0, __values42(neededEncoders)), neededEncoders_1_1 = neededEncoders_1.next(); !neededEncoders_1_1.done; neededEncoders_1_1 = neededEncoders_1.next()) {
            var encoder = neededEncoders_1_1.value;
            var singleCharacter = stringToEncode.charAt(i);
            var c = singleCharacter.charCodeAt(0);
            if (c === fnc1 || encoder.canEncode(singleCharacter)) {
              canEncode = true;
              break;
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (neededEncoders_1_1 && !neededEncoders_1_1.done && (_a2 = neededEncoders_1.return)) _a2.call(neededEncoders_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        if (!canEncode) {
          try {
            for (var _d = (e_2 = void 0, __values42(this.ENCODERS)), _e = _d.next(); !_e.done; _e = _d.next()) {
              var encoder = _e.value;
              if (encoder.canEncode(stringToEncode.charAt(i))) {
                neededEncoders.push(encoder);
                canEncode = true;
                break;
              }
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        }
        if (!canEncode) {
          needUnicodeEncoder = true;
        }
      }
      if (neededEncoders.length === 1 && !needUnicodeEncoder) {
        this.encoders = [neededEncoders[0]];
      } else {
        this.encoders = [];
        var index = 0;
        try {
          for (var neededEncoders_2 = __values42(neededEncoders), neededEncoders_2_1 = neededEncoders_2.next(); !neededEncoders_2_1.done; neededEncoders_2_1 = neededEncoders_2.next()) {
            var encoder = neededEncoders_2_1.value;
            this.encoders[index++] = encoder;
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (neededEncoders_2_1 && !neededEncoders_2_1.done && (_c = neededEncoders_2.return)) _c.call(neededEncoders_2);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
      }
      var priorityEncoderIndexValue = -1;
      if (priorityCharset != null) {
        for (var i = 0; i < this.encoders.length; i++) {
          if (this.encoders[i] != null && priorityCharset.name === this.encoders[i].name) {
            priorityEncoderIndexValue = i;
            break;
          }
        }
      }
      this.priorityEncoderIndex = priorityEncoderIndexValue;
    }
    ECIEncoderSet2.prototype.length = function() {
      return this.encoders.length;
    };
    ECIEncoderSet2.prototype.getCharsetName = function(index) {
      if (!(index < this.length())) {
        throw new Error("index must be less than length");
      }
      return this.encoders[index].name;
    };
    ECIEncoderSet2.prototype.getCharset = function(index) {
      if (!(index < this.length())) {
        throw new Error("index must be less than length");
      }
      return this.encoders[index].charset;
    };
    ECIEncoderSet2.prototype.getECIValue = function(encoderIndex) {
      return this.encoders[encoderIndex].charset.getValueIdentifier();
    };
    ECIEncoderSet2.prototype.getPriorityEncoderIndex = function() {
      return this.priorityEncoderIndex;
    };
    ECIEncoderSet2.prototype.canEncode = function(c, encoderIndex) {
      if (!(encoderIndex < this.length())) {
        throw new Error("index must be less than length");
      }
      return true;
    };
    ECIEncoderSet2.prototype.encode = function(c, encoderIndex) {
      if (!(encoderIndex < this.length())) {
        throw new Error("index must be less than length");
      }
      return StringEncoding_default.encode(StringUtils_default.getCharAt(c), this.encoders[encoderIndex].name);
    };
    return ECIEncoderSet2;
  }()
);

// node_modules/@zxing/library/esm/core/common/MinimalECIInput.js
var COST_PER_ECI = 3;
var MinimalECIInput = (
  /** @class */
  function() {
    function MinimalECIInput2(stringToEncode, priorityCharset, fnc1) {
      this.fnc1 = fnc1;
      var encoderSet = new ECIEncoderSet(stringToEncode, priorityCharset, fnc1);
      if (encoderSet.length() === 1) {
        for (var i = 0; i < this.bytes.length; i++) {
          var c = stringToEncode.charAt(i).charCodeAt(0);
          this.bytes[i] = c === fnc1 ? 1e3 : c;
        }
      } else {
        this.bytes = this.encodeMinimally(stringToEncode, encoderSet, fnc1);
      }
    }
    MinimalECIInput2.prototype.getFNC1Character = function() {
      return this.fnc1;
    };
    MinimalECIInput2.prototype.length = function() {
      return this.bytes.length;
    };
    MinimalECIInput2.prototype.haveNCharacters = function(index, n) {
      if (index + n - 1 >= this.bytes.length) {
        return false;
      }
      for (var i = 0; i < n; i++) {
        if (this.isECI(index + i)) {
          return false;
        }
      }
      return true;
    };
    MinimalECIInput2.prototype.charAt = function(index) {
      if (index < 0 || index >= this.length()) {
        throw new Error("" + index);
      }
      if (this.isECI(index)) {
        throw new Error("value at " + index + " is not a character but an ECI");
      }
      return this.isFNC1(index) ? this.fnc1 : this.bytes[index];
    };
    MinimalECIInput2.prototype.subSequence = function(start, end) {
      if (start < 0 || start > end || end > this.length()) {
        throw new Error("" + start);
      }
      var result = new StringBuilder_default();
      for (var i = start; i < end; i++) {
        if (this.isECI(i)) {
          throw new Error("value at " + i + " is not a character but an ECI");
        }
        result.append(this.charAt(i));
      }
      return result.toString();
    };
    MinimalECIInput2.prototype.isECI = function(index) {
      if (index < 0 || index >= this.length()) {
        throw new Error("" + index);
      }
      return this.bytes[index] > 255 && this.bytes[index] <= 999;
    };
    MinimalECIInput2.prototype.isFNC1 = function(index) {
      if (index < 0 || index >= this.length()) {
        throw new Error("" + index);
      }
      return this.bytes[index] === 1e3;
    };
    MinimalECIInput2.prototype.getECIValue = function(index) {
      if (index < 0 || index >= this.length()) {
        throw new Error("" + index);
      }
      if (!this.isECI(index)) {
        throw new Error("value at " + index + " is not an ECI but a character");
      }
      return this.bytes[index] - 256;
    };
    MinimalECIInput2.prototype.addEdge = function(edges, to, edge) {
      if (edges[to][edge.encoderIndex] == null || edges[to][edge.encoderIndex].cachedTotalSize > edge.cachedTotalSize) {
        edges[to][edge.encoderIndex] = edge;
      }
    };
    MinimalECIInput2.prototype.addEdges = function(stringToEncode, encoderSet, edges, from, previous, fnc1) {
      var ch = stringToEncode.charAt(from).charCodeAt(0);
      var start = 0;
      var end = encoderSet.length();
      if (encoderSet.getPriorityEncoderIndex() >= 0 && (ch === fnc1 || encoderSet.canEncode(ch, encoderSet.getPriorityEncoderIndex()))) {
        start = encoderSet.getPriorityEncoderIndex();
        end = start + 1;
      }
      for (var i = start; i < end; i++) {
        if (ch === fnc1 || encoderSet.canEncode(ch, i)) {
          this.addEdge(edges, from + 1, new InputEdge(ch, encoderSet, i, previous, fnc1));
        }
      }
    };
    MinimalECIInput2.prototype.encodeMinimally = function(stringToEncode, encoderSet, fnc1) {
      var inputLength = stringToEncode.length;
      var edges = new InputEdge[inputLength + 1][encoderSet.length()]();
      this.addEdges(stringToEncode, encoderSet, edges, 0, null, fnc1);
      for (var i = 1; i <= inputLength; i++) {
        for (var j = 0; j < encoderSet.length(); j++) {
          if (edges[i][j] != null && i < inputLength) {
            this.addEdges(stringToEncode, encoderSet, edges, i, edges[i][j], fnc1);
          }
        }
        for (var j = 0; j < encoderSet.length(); j++) {
          edges[i - 1][j] = null;
        }
      }
      var minimalJ = -1;
      var minimalSize = Integer_default.MAX_VALUE;
      for (var j = 0; j < encoderSet.length(); j++) {
        if (edges[inputLength][j] != null) {
          var edge = edges[inputLength][j];
          if (edge.cachedTotalSize < minimalSize) {
            minimalSize = edge.cachedTotalSize;
            minimalJ = j;
          }
        }
      }
      if (minimalJ < 0) {
        throw new Error('Failed to encode "' + stringToEncode + '"');
      }
      var intsAL = [];
      var current = edges[inputLength][minimalJ];
      while (current != null) {
        if (current.isFNC1()) {
          intsAL.unshift(1e3);
        } else {
          var bytes = encoderSet.encode(current.c, current.encoderIndex);
          for (var i = bytes.length - 1; i >= 0; i--) {
            intsAL.unshift(bytes[i] & 255);
          }
        }
        var previousEncoderIndex = current.previous === null ? 0 : current.previous.encoderIndex;
        if (previousEncoderIndex !== current.encoderIndex) {
          intsAL.unshift(256 + encoderSet.getECIValue(current.encoderIndex));
        }
        current = current.previous;
      }
      var ints = [];
      for (var i = 0; i < ints.length; i++) {
        ints[i] = intsAL[i];
      }
      return ints;
    };
    return MinimalECIInput2;
  }()
);
var InputEdge = (
  /** @class */
  function() {
    function InputEdge2(c, encoderSet, encoderIndex, previous, fnc1) {
      this.c = c;
      this.encoderSet = encoderSet;
      this.encoderIndex = encoderIndex;
      this.previous = previous;
      this.fnc1 = fnc1;
      this.c = c === fnc1 ? 1e3 : c;
      var size = this.isFNC1() ? 1 : encoderSet.encode(c, encoderIndex).length;
      var previousEncoderIndex = previous === null ? 0 : previous.encoderIndex;
      if (previousEncoderIndex !== encoderIndex) {
        size += COST_PER_ECI;
      }
      if (previous != null) {
        size += previous.cachedTotalSize;
      }
      this.cachedTotalSize = size;
    }
    InputEdge2.prototype.isFNC1 = function() {
      return this.c === 1e3;
    };
    return InputEdge2;
  }()
);

// node_modules/@zxing/library/esm/core/datamatrix/encoder/MinimalEncoder.js
var __extends72 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values43 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read2 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spread = function() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read2(arguments[i]));
  return ar;
};
var Mode4;
(function(Mode5) {
  Mode5[Mode5["ASCII"] = 0] = "ASCII";
  Mode5[Mode5["C40"] = 1] = "C40";
  Mode5[Mode5["TEXT"] = 2] = "TEXT";
  Mode5[Mode5["X12"] = 3] = "X12";
  Mode5[Mode5["EDF"] = 4] = "EDF";
  Mode5[Mode5["B256"] = 5] = "B256";
})(Mode4 || (Mode4 = {}));
var C40_SHIFT2_CHARS = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"];
var MinimalEncoder = (
  /** @class */
  function() {
    function MinimalEncoder2() {
    }
    MinimalEncoder2.isExtendedASCII = function(ch, fnc1) {
      return ch !== fnc1 && ch >= 128 && ch <= 255;
    };
    MinimalEncoder2.isInC40Shift1Set = function(ch) {
      return ch <= 31;
    };
    MinimalEncoder2.isInC40Shift2Set = function(ch, fnc1) {
      var e_1, _a2;
      try {
        for (var C40_SHIFT2_CHARS_1 = __values43(C40_SHIFT2_CHARS), C40_SHIFT2_CHARS_1_1 = C40_SHIFT2_CHARS_1.next(); !C40_SHIFT2_CHARS_1_1.done; C40_SHIFT2_CHARS_1_1 = C40_SHIFT2_CHARS_1.next()) {
          var c40Shift2Char = C40_SHIFT2_CHARS_1_1.value;
          if (c40Shift2Char.charCodeAt(0) === ch) {
            return true;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (C40_SHIFT2_CHARS_1_1 && !C40_SHIFT2_CHARS_1_1.done && (_a2 = C40_SHIFT2_CHARS_1.return)) _a2.call(C40_SHIFT2_CHARS_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return ch === fnc1;
    };
    MinimalEncoder2.isInTextShift1Set = function(ch) {
      return this.isInC40Shift1Set(ch);
    };
    MinimalEncoder2.isInTextShift2Set = function(ch, fnc1) {
      return this.isInC40Shift2Set(ch, fnc1);
    };
    MinimalEncoder2.encodeHighLevel = function(msg, priorityCharset, fnc1, shape) {
      if (priorityCharset === void 0) {
        priorityCharset = null;
      }
      if (fnc1 === void 0) {
        fnc1 = -1;
      }
      if (shape === void 0) {
        shape = 0;
      }
      var macroId = 0;
      if (msg.startsWith(MACRO_05_HEADER) && msg.endsWith(MACRO_TRAILER)) {
        macroId = 5;
        msg = msg.substring(MACRO_05_HEADER.length, msg.length - 2);
      } else if (msg.startsWith(MACRO_06_HEADER) && msg.endsWith(MACRO_TRAILER)) {
        macroId = 6;
        msg = msg.substring(MACRO_06_HEADER.length, msg.length - 2);
      }
      return decodeURIComponent(escape(String.fromCharCode.apply(String, __spread(this.encode(msg, priorityCharset, fnc1, shape, macroId)))));
    };
    MinimalEncoder2.encode = function(input, priorityCharset, fnc1, shape, macroId) {
      return this.encodeMinimally(new Input(input, priorityCharset, fnc1, shape, macroId)).getBytes();
    };
    MinimalEncoder2.addEdge = function(edges, edge) {
      var vertexIndex = edge.fromPosition + edge.characterLength;
      if (edges[vertexIndex][edge.getEndMode()] === null || edges[vertexIndex][edge.getEndMode()].cachedTotalSize > edge.cachedTotalSize) {
        edges[vertexIndex][edge.getEndMode()] = edge;
      }
    };
    MinimalEncoder2.getNumberOfC40Words = function(input, from, c40, characterLength) {
      var thirdsCount = 0;
      for (var i = from; i < input.length(); i++) {
        if (input.isECI(i)) {
          characterLength[0] = 0;
          return 0;
        }
        var ci = input.charAt(i);
        if (c40 && HighLevelEncoder_default.isNativeC40(ci) || !c40 && HighLevelEncoder_default.isNativeText(ci)) {
          thirdsCount++;
        } else if (!MinimalEncoder2.isExtendedASCII(ci, input.getFNC1Character())) {
          thirdsCount += 2;
        } else {
          var asciiValue = ci & 255;
          if (asciiValue >= 128 && (c40 && HighLevelEncoder_default.isNativeC40(asciiValue - 128) || !c40 && HighLevelEncoder_default.isNativeText(asciiValue - 128))) {
            thirdsCount += 3;
          } else {
            thirdsCount += 4;
          }
        }
        if (thirdsCount % 3 === 0 || (thirdsCount - 2) % 3 === 0 && i + 1 === input.length()) {
          characterLength[0] = i - from + 1;
          return Math.ceil(thirdsCount / 3);
        }
      }
      characterLength[0] = 0;
      return 0;
    };
    MinimalEncoder2.addEdges = function(input, edges, from, previous) {
      var e_2, _a2;
      if (input.isECI(from)) {
        this.addEdge(edges, new Edge(input, Mode4.ASCII, from, 1, previous));
        return;
      }
      var ch = input.charAt(from);
      if (previous === null || previous.getEndMode() !== Mode4.EDF) {
        if (HighLevelEncoder_default.isDigit(ch) && input.haveNCharacters(from, 2) && HighLevelEncoder_default.isDigit(input.charAt(from + 1))) {
          this.addEdge(edges, new Edge(input, Mode4.ASCII, from, 2, previous));
        } else {
          this.addEdge(edges, new Edge(input, Mode4.ASCII, from, 1, previous));
        }
        var modes = [Mode4.C40, Mode4.TEXT];
        try {
          for (var modes_1 = __values43(modes), modes_1_1 = modes_1.next(); !modes_1_1.done; modes_1_1 = modes_1.next()) {
            var mode = modes_1_1.value;
            var characterLength = [];
            if (MinimalEncoder2.getNumberOfC40Words(input, from, mode === Mode4.C40, characterLength) > 0) {
              this.addEdge(edges, new Edge(input, mode, from, characterLength[0], previous));
            }
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (modes_1_1 && !modes_1_1.done && (_a2 = modes_1.return)) _a2.call(modes_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        if (input.haveNCharacters(from, 3) && HighLevelEncoder_default.isNativeX12(input.charAt(from)) && HighLevelEncoder_default.isNativeX12(input.charAt(from + 1)) && HighLevelEncoder_default.isNativeX12(input.charAt(from + 2))) {
          this.addEdge(edges, new Edge(input, Mode4.X12, from, 3, previous));
        }
        this.addEdge(edges, new Edge(input, Mode4.B256, from, 1, previous));
      }
      var i;
      for (i = 0; i < 3; i++) {
        var pos = from + i;
        if (input.haveNCharacters(pos, 1) && HighLevelEncoder_default.isNativeEDIFACT(input.charAt(pos))) {
          this.addEdge(edges, new Edge(input, Mode4.EDF, from, i + 1, previous));
        } else {
          break;
        }
      }
      if (i === 3 && input.haveNCharacters(from, 4) && HighLevelEncoder_default.isNativeEDIFACT(input.charAt(from + 3))) {
        this.addEdge(edges, new Edge(input, Mode4.EDF, from, 4, previous));
      }
    };
    MinimalEncoder2.encodeMinimally = function(input) {
      var inputLength = input.length();
      var edges = Array(inputLength + 1).fill(null).map(function() {
        return Array(6).fill(0);
      });
      this.addEdges(input, edges, 0, null);
      for (var i = 1; i <= inputLength; i++) {
        for (var j = 0; j < 6; j++) {
          if (edges[i][j] !== null && i < inputLength) {
            this.addEdges(input, edges, i, edges[i][j]);
          }
        }
        for (var j = 0; j < 6; j++) {
          edges[i - 1][j] = null;
        }
      }
      var minimalJ = -1;
      var minimalSize = Integer_default.MAX_VALUE;
      for (var j = 0; j < 6; j++) {
        if (edges[inputLength][j] !== null) {
          var edge = edges[inputLength][j];
          var size = j >= 1 && j <= 3 ? edge.cachedTotalSize + 1 : edge.cachedTotalSize;
          if (size < minimalSize) {
            minimalSize = size;
            minimalJ = j;
          }
        }
      }
      if (minimalJ < 0) {
        throw new Error('Failed to encode "' + input + '"');
      }
      return new Result2(edges[inputLength][minimalJ]);
    };
    return MinimalEncoder2;
  }()
);
var Result2 = (
  /** @class */
  function() {
    function Result3(solution) {
      var input = solution.input;
      var size = 0;
      var bytesAL = [];
      var randomizePostfixLength = [];
      var randomizeLengths = [];
      if ((solution.mode === Mode4.C40 || solution.mode === Mode4.TEXT || solution.mode === Mode4.X12) && solution.getEndMode() !== Mode4.ASCII) {
        size += this.prepend(Edge.getBytes(254), bytesAL);
      }
      var current = solution;
      while (current !== null) {
        size += this.prepend(current.getDataBytes(), bytesAL);
        if (current.previous === null || current.getPreviousStartMode() !== current.getMode()) {
          if (current.getMode() === Mode4.B256) {
            if (size <= 249) {
              bytesAL.unshift(size);
              size++;
            } else {
              bytesAL.unshift(size % 250);
              bytesAL.unshift(size / 250 + 249);
              size += 2;
            }
            randomizePostfixLength.push(bytesAL.length);
            randomizeLengths.push(size);
          }
          this.prepend(current.getLatchBytes(), bytesAL);
          size = 0;
        }
        current = current.previous;
      }
      if (input.getMacroId() === 5) {
        size += this.prepend(Edge.getBytes(236), bytesAL);
      } else if (input.getMacroId() === 6) {
        size += this.prepend(Edge.getBytes(237), bytesAL);
      }
      if (input.getFNC1Character() > 0) {
        size += this.prepend(Edge.getBytes(232), bytesAL);
      }
      for (var i = 0; i < randomizePostfixLength.length; i++) {
        this.applyRandomPattern(bytesAL, bytesAL.length - randomizePostfixLength[i], randomizeLengths[i]);
      }
      var capacity = solution.getMinSymbolSize(bytesAL.length);
      if (bytesAL.length < capacity) {
        bytesAL.push(129);
      }
      while (bytesAL.length < capacity) {
        bytesAL.push(this.randomize253State(bytesAL.length + 1));
      }
      this.bytes = new Uint8Array(bytesAL.length);
      for (var i = 0; i < this.bytes.length; i++) {
        this.bytes[i] = bytesAL[i];
      }
    }
    Result3.prototype.prepend = function(bytes, into) {
      for (var i = bytes.length - 1; i >= 0; i--) {
        into.unshift(bytes[i]);
      }
      return bytes.length;
    };
    Result3.prototype.randomize253State = function(codewordPosition) {
      var pseudoRandom = 149 * codewordPosition % 253 + 1;
      var tempVariable = 129 + pseudoRandom;
      return tempVariable <= 254 ? tempVariable : tempVariable - 254;
    };
    Result3.prototype.applyRandomPattern = function(bytesAL, startPosition, length) {
      for (var i = 0; i < length; i++) {
        var Pad_codeword_position = startPosition + i;
        var Pad_codeword_value = bytesAL[Pad_codeword_position] & 255;
        var pseudo_random_number = 149 * (Pad_codeword_position + 1) % 255 + 1;
        var temp_variable = Pad_codeword_value + pseudo_random_number;
        bytesAL[Pad_codeword_position] = temp_variable <= 255 ? temp_variable : temp_variable - 256;
      }
    };
    Result3.prototype.getBytes = function() {
      return this.bytes;
    };
    return Result3;
  }()
);
var Edge = (
  /** @class */
  function() {
    function Edge2(input, mode, fromPosition, characterLength, previous) {
      this.input = input;
      this.mode = mode;
      this.fromPosition = fromPosition;
      this.characterLength = characterLength;
      this.previous = previous;
      this.allCodewordCapacities = [3, 5, 8, 10, 12, 16, 18, 22, 30, 32, 36, 44, 49, 62, 86, 114, 144, 174, 204, 280, 368, 456, 576, 696, 816, 1050, 1304, 1558];
      this.squareCodewordCapacities = [3, 5, 8, 12, 18, 22, 30, 36, 44, 62, 86, 114, 144, 174, 204, 280, 368, 456, 576, 696, 816, 1050, 1304, 1558];
      this.rectangularCodewordCapacities = [5, 10, 16, 33, 32, 49];
      if (!(fromPosition + characterLength <= input.length())) {
        throw new Error("Invalid edge");
      }
      var size = previous !== null ? previous.cachedTotalSize : 0;
      var previousMode = this.getPreviousMode();
      switch (mode) {
        case Mode4.ASCII:
          size++;
          if (input.isECI(fromPosition) || MinimalEncoder.isExtendedASCII(input.charAt(fromPosition), input.getFNC1Character())) {
            size++;
          }
          if (previousMode === Mode4.C40 || previousMode === Mode4.TEXT || previousMode === Mode4.X12) {
            size++;
          }
          break;
        case Mode4.B256:
          size++;
          if (previousMode !== Mode4.B256) {
            size++;
          } else if (this.getB256Size() === 250) {
            size++;
          }
          if (previousMode === Mode4.ASCII) {
            size++;
          } else if (previousMode === Mode4.C40 || previousMode === Mode4.TEXT || previousMode === Mode4.X12) {
            size += 2;
          }
          break;
        case Mode4.C40:
        case Mode4.TEXT:
        case Mode4.X12:
          if (mode === Mode4.X12) {
            size += 2;
          } else {
            var charLen = [];
            size += MinimalEncoder.getNumberOfC40Words(input, fromPosition, mode === Mode4.C40, charLen) * 2;
          }
          if (previousMode === Mode4.ASCII || previousMode === Mode4.B256) {
            size++;
          } else if (previousMode !== mode && (previousMode === Mode4.C40 || previousMode === Mode4.TEXT || previousMode === Mode4.X12)) {
            size += 2;
          }
          break;
        case Mode4.EDF:
          size += 3;
          if (previousMode === Mode4.ASCII || previousMode === Mode4.B256) {
            size++;
          } else if (previousMode === Mode4.C40 || previousMode === Mode4.TEXT || previousMode === Mode4.X12) {
            size += 2;
          }
          break;
      }
      this.cachedTotalSize = size;
    }
    Edge2.prototype.getB256Size = function() {
      var cnt = 0;
      var current = this;
      while (current !== null && current.mode === Mode4.B256 && cnt <= 250) {
        cnt++;
        current = current.previous;
      }
      return cnt;
    };
    Edge2.prototype.getPreviousStartMode = function() {
      return this.previous === null ? Mode4.ASCII : this.previous.mode;
    };
    Edge2.prototype.getPreviousMode = function() {
      return this.previous === null ? Mode4.ASCII : this.previous.getEndMode();
    };
    Edge2.prototype.getEndMode = function() {
      if (this.mode === Mode4.EDF) {
        if (this.characterLength < 4) {
          return Mode4.ASCII;
        }
        var lastASCII = this.getLastASCII();
        if (lastASCII > 0 && this.getCodewordsRemaining(this.cachedTotalSize + lastASCII) <= 2 - lastASCII) {
          return Mode4.ASCII;
        }
      }
      if (this.mode === Mode4.C40 || this.mode === Mode4.TEXT || this.mode === Mode4.X12) {
        if (this.fromPosition + this.characterLength >= this.input.length() && this.getCodewordsRemaining(this.cachedTotalSize) === 0) {
          return Mode4.ASCII;
        }
        var lastASCII = this.getLastASCII();
        if (lastASCII === 1 && this.getCodewordsRemaining(this.cachedTotalSize + 1) === 0) {
          return Mode4.ASCII;
        }
      }
      return this.mode;
    };
    Edge2.prototype.getMode = function() {
      return this.mode;
    };
    Edge2.prototype.getLastASCII = function() {
      var length = this.input.length();
      var from = this.fromPosition + this.characterLength;
      if (length - from > 4 || from >= length) {
        return 0;
      }
      if (length - from === 1) {
        if (MinimalEncoder.isExtendedASCII(this.input.charAt(from), this.input.getFNC1Character())) {
          return 0;
        }
        return 1;
      }
      if (length - from === 2) {
        if (MinimalEncoder.isExtendedASCII(this.input.charAt(from), this.input.getFNC1Character()) || MinimalEncoder.isExtendedASCII(this.input.charAt(from + 1), this.input.getFNC1Character())) {
          return 0;
        }
        if (HighLevelEncoder_default.isDigit(this.input.charAt(from)) && HighLevelEncoder_default.isDigit(this.input.charAt(from + 1))) {
          return 1;
        }
        return 2;
      }
      if (length - from === 3) {
        if (HighLevelEncoder_default.isDigit(this.input.charAt(from)) && HighLevelEncoder_default.isDigit(this.input.charAt(from + 1)) && !MinimalEncoder.isExtendedASCII(this.input.charAt(from + 2), this.input.getFNC1Character())) {
          return 2;
        }
        if (HighLevelEncoder_default.isDigit(this.input.charAt(from + 1)) && HighLevelEncoder_default.isDigit(this.input.charAt(from + 2)) && !MinimalEncoder.isExtendedASCII(this.input.charAt(from), this.input.getFNC1Character())) {
          return 2;
        }
        return 0;
      }
      if (HighLevelEncoder_default.isDigit(this.input.charAt(from)) && HighLevelEncoder_default.isDigit(this.input.charAt(from + 1)) && HighLevelEncoder_default.isDigit(this.input.charAt(from + 2)) && HighLevelEncoder_default.isDigit(this.input.charAt(from + 3))) {
        return 2;
      }
      return 0;
    };
    Edge2.prototype.getMinSymbolSize = function(minimum) {
      var e_3, _a2, e_4, _b, e_5, _c;
      switch (this.input.getShapeHint()) {
        case 1:
          try {
            for (var _d = __values43(this.squareCodewordCapacities), _e = _d.next(); !_e.done; _e = _d.next()) {
              var capacity = _e.value;
              if (capacity >= minimum) {
                return capacity;
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_e && !_e.done && (_a2 = _d.return)) _a2.call(_d);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
          break;
        case 2:
          try {
            for (var _f = __values43(this.rectangularCodewordCapacities), _g = _f.next(); !_g.done; _g = _f.next()) {
              var capacity = _g.value;
              if (capacity >= minimum) {
                return capacity;
              }
            }
          } catch (e_4_1) {
            e_4 = {
              error: e_4_1
            };
          } finally {
            try {
              if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            } finally {
              if (e_4) throw e_4.error;
            }
          }
          break;
      }
      try {
        for (var _h = __values43(this.allCodewordCapacities), _j = _h.next(); !_j.done; _j = _h.next()) {
          var capacity = _j.value;
          if (capacity >= minimum) {
            return capacity;
          }
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
        } finally {
          if (e_5) throw e_5.error;
        }
      }
      return this.allCodewordCapacities[this.allCodewordCapacities.length - 1];
    };
    Edge2.prototype.getCodewordsRemaining = function(minimum) {
      return this.getMinSymbolSize(minimum) - minimum;
    };
    Edge2.getBytes = function(c1, c2) {
      var result = new Uint8Array(c2 ? 2 : 1);
      result[0] = c1;
      if (c2) {
        result[1] = c2;
      }
      return result;
    };
    Edge2.prototype.setC40Word = function(bytes, offset, c1, c2, c3) {
      var val16 = 1600 * (c1 & 255) + 40 * (c2 & 255) + (c3 & 255) + 1;
      bytes[offset] = val16 / 256;
      bytes[offset + 1] = val16 % 256;
    };
    Edge2.prototype.getX12Value = function(c) {
      return c === 13 ? 0 : c === 42 ? 1 : c === 62 ? 2 : c === 32 ? 3 : c >= 48 && c <= 57 ? c - 44 : c >= 65 && c <= 90 ? c - 51 : c;
    };
    Edge2.prototype.getX12Words = function() {
      if (!(this.characterLength % 3 === 0)) {
        throw new Error("X12 words must be a multiple of 3");
      }
      var result = new Uint8Array(this.characterLength / 3 * 2);
      for (var i = 0; i < result.length; i += 2) {
        this.setC40Word(result, i, this.getX12Value(this.input.charAt(this.fromPosition + i / 2 * 3)), this.getX12Value(this.input.charAt(this.fromPosition + i / 2 * 3 + 1)), this.getX12Value(this.input.charAt(this.fromPosition + i / 2 * 3 + 2)));
      }
      return result;
    };
    Edge2.prototype.getShiftValue = function(c, c40, fnc1) {
      return c40 && MinimalEncoder.isInC40Shift1Set(c) || !c40 && MinimalEncoder.isInTextShift1Set(c) ? 0 : c40 && MinimalEncoder.isInC40Shift2Set(c, fnc1) || !c40 && MinimalEncoder.isInTextShift2Set(c, fnc1) ? 1 : 2;
    };
    Edge2.prototype.getC40Value = function(c40, setIndex, c, fnc1) {
      if (c === fnc1) {
        if (!(setIndex === 2)) {
          throw new Error("FNC1 cannot be used in C40 shift 2");
        }
        return 27;
      }
      if (c40) {
        return c <= 31 ? c : c === 32 ? 3 : c <= 47 ? c - 33 : c <= 57 ? c - 44 : c <= 64 ? c - 43 : c <= 90 ? c - 51 : c <= 95 ? c - 69 : c <= 127 ? c - 96 : c;
      } else {
        return c === 0 ? 0 : setIndex === 0 && c <= 3 ? c - 1 : setIndex === 1 && c <= 31 ? c : c === 32 ? 3 : c >= 33 && c <= 47 ? c - 33 : c >= 48 && c <= 57 ? c - 44 : c >= 58 && c <= 64 ? c - 43 : c >= 65 && c <= 90 ? c - 64 : c >= 91 && c <= 95 ? c - 69 : c === 96 ? 0 : c >= 97 && c <= 122 ? c - 83 : c >= 123 && c <= 127 ? c - 96 : c;
      }
    };
    Edge2.prototype.getC40Words = function(c40, fnc1) {
      var c40Values = [];
      for (var i = 0; i < this.characterLength; i++) {
        var ci = this.input.charAt(this.fromPosition + i);
        if (c40 && HighLevelEncoder_default.isNativeC40(ci) || !c40 && HighLevelEncoder_default.isNativeText(ci)) {
          c40Values.push(this.getC40Value(c40, 0, ci, fnc1));
        } else if (!MinimalEncoder.isExtendedASCII(ci, fnc1)) {
          var shiftValue = this.getShiftValue(ci, c40, fnc1);
          c40Values.push(shiftValue);
          c40Values.push(this.getC40Value(c40, shiftValue, ci, fnc1));
        } else {
          var asciiValue = (ci & 255) - 128;
          if (c40 && HighLevelEncoder_default.isNativeC40(asciiValue) || !c40 && HighLevelEncoder_default.isNativeText(asciiValue)) {
            c40Values.push(1);
            c40Values.push(30);
            c40Values.push(this.getC40Value(c40, 0, asciiValue, fnc1));
          } else {
            c40Values.push(1);
            c40Values.push(30);
            var shiftValue = this.getShiftValue(asciiValue, c40, fnc1);
            c40Values.push(shiftValue);
            c40Values.push(this.getC40Value(c40, shiftValue, asciiValue, fnc1));
          }
        }
      }
      if (c40Values.length % 3 !== 0) {
        if (!((c40Values.length - 2) % 3 === 0 && this.fromPosition + this.characterLength === this.input.length())) {
          throw new Error("C40 words must be a multiple of 3");
        }
        c40Values.push(0);
      }
      var result = new Uint8Array(c40Values.length / 3 * 2);
      var byteIndex = 0;
      for (var i = 0; i < c40Values.length; i += 3) {
        this.setC40Word(result, byteIndex, c40Values[i] & 255, c40Values[i + 1] & 255, c40Values[i + 2] & 255);
        byteIndex += 2;
      }
      return result;
    };
    Edge2.prototype.getEDFBytes = function() {
      var numberOfThirds = Math.ceil(this.characterLength / 4);
      var result = new Uint8Array(numberOfThirds * 3);
      var pos = this.fromPosition;
      var endPos = Math.min(this.fromPosition + this.characterLength - 1, this.input.length() - 1);
      for (var i = 0; i < numberOfThirds; i += 3) {
        var edfValues = [];
        for (var j = 0; j < 4; j++) {
          if (pos <= endPos) {
            edfValues[j] = this.input.charAt(pos++) & 63;
          } else {
            edfValues[j] = pos === endPos + 1 ? 31 : 0;
          }
        }
        var val24 = edfValues[0] << 18;
        val24 |= edfValues[1] << 12;
        val24 |= edfValues[2] << 6;
        val24 |= edfValues[3];
        result[i] = val24 >> 16 & 255;
        result[i + 1] = val24 >> 8 & 255;
        result[i + 2] = val24 & 255;
      }
      return result;
    };
    Edge2.prototype.getLatchBytes = function() {
      switch (this.getPreviousMode()) {
        case Mode4.ASCII:
        case Mode4.B256:
          switch (this.mode) {
            case Mode4.B256:
              return Edge2.getBytes(231);
            case Mode4.C40:
              return Edge2.getBytes(230);
            case Mode4.TEXT:
              return Edge2.getBytes(239);
            case Mode4.X12:
              return Edge2.getBytes(238);
            case Mode4.EDF:
              return Edge2.getBytes(240);
          }
          break;
        case Mode4.C40:
        case Mode4.TEXT:
        case Mode4.X12:
          if (this.mode !== this.getPreviousMode()) {
            switch (this.mode) {
              case Mode4.ASCII:
                return Edge2.getBytes(254);
              case Mode4.B256:
                return Edge2.getBytes(254, 231);
              case Mode4.C40:
                return Edge2.getBytes(254, 230);
              case Mode4.TEXT:
                return Edge2.getBytes(254, 239);
              case Mode4.X12:
                return Edge2.getBytes(254, 238);
              case Mode4.EDF:
                return Edge2.getBytes(254, 240);
            }
          }
          break;
        case Mode4.EDF:
          if (this.mode !== Mode4.EDF) {
            throw new Error("Cannot switch from EDF to " + this.mode);
          }
          break;
      }
      return new Uint8Array(0);
    };
    Edge2.prototype.getDataBytes = function() {
      switch (this.mode) {
        case Mode4.ASCII:
          if (this.input.isECI(this.fromPosition)) {
            return Edge2.getBytes(241, this.input.getECIValue(this.fromPosition) + 1);
          } else if (MinimalEncoder.isExtendedASCII(this.input.charAt(this.fromPosition), this.input.getFNC1Character())) {
            return Edge2.getBytes(235, this.input.charAt(this.fromPosition) - 127);
          } else if (this.characterLength === 2) {
            return Edge2.getBytes(this.input.charAt(this.fromPosition) * 10 + this.input.charAt(this.fromPosition + 1) + 130);
          } else if (this.input.isFNC1(this.fromPosition)) {
            return Edge2.getBytes(232);
          } else {
            return Edge2.getBytes(this.input.charAt(this.fromPosition) + 1);
          }
        case Mode4.B256:
          return Edge2.getBytes(this.input.charAt(this.fromPosition));
        case Mode4.C40:
          return this.getC40Words(true, this.input.getFNC1Character());
        case Mode4.TEXT:
          return this.getC40Words(false, this.input.getFNC1Character());
        case Mode4.X12:
          return this.getX12Words();
        case Mode4.EDF:
          return this.getEDFBytes();
      }
    };
    return Edge2;
  }()
);
var Input = (
  /** @class */
  function(_super) {
    __extends72(Input2, _super);
    function Input2(stringToEncode, priorityCharset, fnc1, shape, macroId) {
      var _this = _super.call(this, stringToEncode, priorityCharset, fnc1) || this;
      _this.shape = shape;
      _this.macroId = macroId;
      return _this;
    }
    Input2.prototype.getMacroId = function() {
      return this.macroId;
    };
    Input2.prototype.getShapeHint = function() {
      return this.shape;
    };
    return Input2;
  }(MinimalECIInput)
);

// node_modules/@zxing/library/esm/core/datamatrix/DataMatrixWriter.js
var DataMatrixWriter = (
  /** @class */
  function() {
    function DataMatrixWriter2() {
    }
    DataMatrixWriter2.prototype.encode = function(contents, format, width, height, hints) {
      if (hints === void 0) {
        hints = null;
      }
      if (contents.trim() === "") {
        throw new Error("Found empty contents");
      }
      if (format !== BarcodeFormat_default.DATA_MATRIX) {
        throw new Error("Can only encode DATA_MATRIX, but got " + format);
      }
      if (width < 0 || height < 0) {
        throw new Error("Requested dimensions can't be negative: " + width + "x" + height);
      }
      var shape = 0;
      var minSize = null;
      var maxSize = null;
      if (hints != null) {
        var requestedShape = hints.get(EncodeHintType_default.DATA_MATRIX_SHAPE);
        if (requestedShape != null) {
          shape = requestedShape;
        }
        var requestedMinSize = hints.get(EncodeHintType_default.MIN_SIZE);
        if (requestedMinSize != null) {
          minSize = requestedMinSize;
        }
        var requestedMaxSize = hints.get(EncodeHintType_default.MAX_SIZE);
        if (requestedMaxSize != null) {
          maxSize = requestedMaxSize;
        }
      }
      var encoded;
      var hasCompactionHint = hints != null && hints.has(EncodeHintType_default.DATA_MATRIX_COMPACT) && Boolean(hints.get(EncodeHintType_default.DATA_MATRIX_COMPACT).toString());
      if (hasCompactionHint) {
        var hasGS1FormatHint = hints.has(EncodeHintType_default.GS1_FORMAT) && Boolean(hints.get(EncodeHintType_default.GS1_FORMAT).toString());
        var charset = null;
        var hasEncodingHint = hints.has(EncodeHintType_default.CHARACTER_SET);
        if (hasEncodingHint) {
          charset = Charset_default.forName(hints.get(EncodeHintType_default.CHARACTER_SET).toString());
        }
        encoded = MinimalEncoder.encodeHighLevel(contents, charset, hasGS1FormatHint ? 29 : -1, shape);
      } else {
        var hasForceC40Hint = hints != null && hints.has(EncodeHintType_default.FORCE_C40) && Boolean(hints.get(EncodeHintType_default.FORCE_C40).toString());
        encoded = HighLevelEncoder_default.encodeHighLevel(contents, shape, minSize, maxSize, hasForceC40Hint);
      }
      var symbolInfo = SymbolInfo_default.lookup(encoded.length, shape, minSize, maxSize, true);
      var codewords = ErrorCorrection_default2.encodeECC200(encoded, symbolInfo);
      var placement = new DefaultPlacement_default(codewords, symbolInfo.getSymbolDataWidth(), symbolInfo.getSymbolDataHeight());
      placement.place();
      return this.encodeLowLevel(placement, symbolInfo, width, height);
    };
    DataMatrixWriter2.prototype.encodeLowLevel = function(placement, symbolInfo, width, height) {
      var symbolWidth = symbolInfo.getSymbolDataWidth();
      var symbolHeight = symbolInfo.getSymbolDataHeight();
      var matrix = new ByteMatrix_default(symbolInfo.getSymbolWidth(), symbolInfo.getSymbolHeight());
      var matrixY = 0;
      for (var y = 0; y < symbolHeight; y++) {
        var matrixX = void 0;
        if (y % symbolInfo.matrixHeight === 0) {
          matrixX = 0;
          for (var x = 0; x < symbolInfo.getSymbolWidth(); x++) {
            matrix.setBoolean(matrixX, matrixY, x % 2 === 0);
            matrixX++;
          }
          matrixY++;
        }
        matrixX = 0;
        for (var x = 0; x < symbolWidth; x++) {
          if (x % symbolInfo.matrixWidth === 0) {
            matrix.setBoolean(matrixX, matrixY, true);
            matrixX++;
          }
          matrix.setBoolean(matrixX, matrixY, placement.getBit(x, y));
          matrixX++;
          if (x % symbolInfo.matrixWidth === symbolInfo.matrixWidth - 1) {
            matrix.setBoolean(matrixX, matrixY, y % 2 === 0);
            matrixX++;
          }
        }
        matrixY++;
        if (y % symbolInfo.matrixHeight === symbolInfo.matrixHeight - 1) {
          matrixX = 0;
          for (var x = 0; x < symbolInfo.getSymbolWidth(); x++) {
            matrix.setBoolean(matrixX, matrixY, true);
            matrixX++;
          }
          matrixY++;
        }
      }
      return this.convertByteMatrixToBitMatrix(matrix, width, height);
    };
    DataMatrixWriter2.prototype.convertByteMatrixToBitMatrix = function(matrix, reqWidth, reqHeight) {
      var matrixWidth = matrix.getWidth();
      var matrixHeight = matrix.getHeight();
      var outputWidth = Math.max(reqWidth, matrixWidth);
      var outputHeight = Math.max(reqHeight, matrixHeight);
      var multiple = Math.min(outputWidth / matrixWidth, outputHeight / matrixHeight);
      var leftPadding = (outputWidth - matrixWidth * multiple) / 2;
      var topPadding = (outputHeight - matrixHeight * multiple) / 2;
      var output;
      if (reqHeight < matrixHeight || reqWidth < matrixWidth) {
        leftPadding = 0;
        topPadding = 0;
        output = new BitMatrix_default(matrixWidth, matrixHeight);
      } else {
        output = new BitMatrix_default(reqWidth, reqHeight);
      }
      output.clear();
      for (var inputY = 0, outputY = topPadding; inputY < matrixHeight; inputY++, outputY += multiple) {
        for (var inputX = 0, outputX = leftPadding; inputX < matrixWidth; inputX++, outputX += multiple) {
          if (matrix.get(inputX, inputY) === 1) {
            output.setRegion(outputX, outputY, multiple, multiple);
          }
        }
      }
      return output;
    };
    return DataMatrixWriter2;
  }()
);
var DataMatrixWriter_default = DataMatrixWriter;

// node_modules/@zxing/library/esm/core/aztec/encoder/AztecCode.js
var AztecCode = (
  /** @class */
  function() {
    function AztecCode2() {
    }
    AztecCode2.prototype.isCompact = function() {
      return this.compact;
    };
    AztecCode2.prototype.setCompact = function(compact) {
      this.compact = compact;
    };
    AztecCode2.prototype.getSize = function() {
      return this.size;
    };
    AztecCode2.prototype.setSize = function(size) {
      this.size = size;
    };
    AztecCode2.prototype.getLayers = function() {
      return this.layers;
    };
    AztecCode2.prototype.setLayers = function(layers) {
      this.layers = layers;
    };
    AztecCode2.prototype.getCodeWords = function() {
      return this.codeWords;
    };
    AztecCode2.prototype.setCodeWords = function(codeWords) {
      this.codeWords = codeWords;
    };
    AztecCode2.prototype.getMatrix = function() {
      return this.matrix;
    };
    AztecCode2.prototype.setMatrix = function(matrix) {
      this.matrix = matrix;
    };
    return AztecCode2;
  }()
);
var AztecCode_default = AztecCode;

// node_modules/@zxing/library/esm/core/util/Collections.js
var Collections = (
  /** @class */
  function() {
    function Collections2() {
    }
    Collections2.singletonList = function(item) {
      return [item];
    };
    Collections2.min = function(collection, comparator) {
      return collection.sort(comparator)[0];
    };
    return Collections2;
  }()
);
var Collections_default = Collections;

// node_modules/@zxing/library/esm/core/aztec/encoder/Token.js
var Token = (
  /** @class */
  function() {
    function Token2(previous) {
      this.previous = previous;
    }
    Token2.prototype.getPrevious = function() {
      return this.previous;
    };
    return Token2;
  }()
);
var Token_default = Token;

// node_modules/@zxing/library/esm/core/aztec/encoder/SimpleToken.js
var __extends73 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var SimpleToken = (
  /** @class */
  function(_super) {
    __extends73(SimpleToken2, _super);
    function SimpleToken2(previous, value, bitCount) {
      var _this = _super.call(this, previous) || this;
      _this.value = value;
      _this.bitCount = bitCount;
      return _this;
    }
    SimpleToken2.prototype.appendTo = function(bitArray, text) {
      bitArray.appendBits(this.value, this.bitCount);
    };
    SimpleToken2.prototype.add = function(value, bitCount) {
      return new SimpleToken2(this, value, bitCount);
    };
    SimpleToken2.prototype.addBinaryShift = function(start, byteCount) {
      console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token");
      return new SimpleToken2(this, start, byteCount);
    };
    SimpleToken2.prototype.toString = function() {
      var value = this.value & (1 << this.bitCount) - 1;
      value |= 1 << this.bitCount;
      return "<" + Integer_default.toBinaryString(value | 1 << this.bitCount).substring(1) + ">";
    };
    return SimpleToken2;
  }(Token_default)
);
var SimpleToken_default = SimpleToken;

// node_modules/@zxing/library/esm/core/aztec/encoder/BinaryShiftToken.js
var __extends74 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BinaryShiftToken = (
  /** @class */
  function(_super) {
    __extends74(BinaryShiftToken2, _super);
    function BinaryShiftToken2(previous, binaryShiftStart, binaryShiftByteCount) {
      var _this = _super.call(this, previous, 0, 0) || this;
      _this.binaryShiftStart = binaryShiftStart;
      _this.binaryShiftByteCount = binaryShiftByteCount;
      return _this;
    }
    BinaryShiftToken2.prototype.appendTo = function(bitArray, text) {
      for (var i = 0; i < this.binaryShiftByteCount; i++) {
        if (i === 0 || i === 31 && this.binaryShiftByteCount <= 62) {
          bitArray.appendBits(31, 5);
          if (this.binaryShiftByteCount > 62) {
            bitArray.appendBits(this.binaryShiftByteCount - 31, 16);
          } else if (i === 0) {
            bitArray.appendBits(Math.min(this.binaryShiftByteCount, 31), 5);
          } else {
            bitArray.appendBits(this.binaryShiftByteCount - 31, 5);
          }
        }
        bitArray.appendBits(text[this.binaryShiftStart + i], 8);
      }
    };
    BinaryShiftToken2.prototype.addBinaryShift = function(start, byteCount) {
      return new BinaryShiftToken2(this, start, byteCount);
    };
    BinaryShiftToken2.prototype.toString = function() {
      return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">";
    };
    return BinaryShiftToken2;
  }(SimpleToken_default)
);
var BinaryShiftToken_default = BinaryShiftToken;

// node_modules/@zxing/library/esm/core/aztec/encoder/TokenHelpers.js
function addBinaryShift(token, start, byteCount) {
  return new BinaryShiftToken_default(token, start, byteCount);
}
function add(token, value, bitCount) {
  return new SimpleToken_default(token, value, bitCount);
}

// node_modules/@zxing/library/esm/core/aztec/encoder/EncoderConstants.js
var MODE_NAMES = ["UPPER", "LOWER", "DIGIT", "MIXED", "PUNCT"];
var MODE_UPPER = 0;
var MODE_LOWER = 1;
var MODE_DIGIT = 2;
var MODE_MIXED = 3;
var MODE_PUNCT = 4;
var EMPTY_TOKEN = new SimpleToken_default(null, 0, 0);

// node_modules/@zxing/library/esm/core/aztec/encoder/LatchTable.js
var LATCH_TABLE = [Int32Array.from([
  0,
  (5 << 16) + 28,
  (5 << 16) + 30,
  (5 << 16) + 29,
  (10 << 16) + (29 << 5) + 30
  // UPPER -> MIXED -> PUNCT
]), Int32Array.from([
  (9 << 16) + (30 << 4) + 14,
  0,
  (5 << 16) + 30,
  (5 << 16) + 29,
  (10 << 16) + (29 << 5) + 30
  // LOWER -> MIXED -> PUNCT
]), Int32Array.from([
  (4 << 16) + 14,
  (9 << 16) + (14 << 5) + 28,
  0,
  (9 << 16) + (14 << 5) + 29,
  (14 << 16) + (14 << 10) + (29 << 5) + 30
  // DIGIT -> UPPER -> MIXED -> PUNCT
]), Int32Array.from([
  (5 << 16) + 29,
  (5 << 16) + 28,
  (10 << 16) + (29 << 5) + 30,
  0,
  (5 << 16) + 30
  // MIXED -> PUNCT
]), Int32Array.from([(5 << 16) + 31, (10 << 16) + (31 << 5) + 28, (10 << 16) + (31 << 5) + 30, (10 << 16) + (31 << 5) + 29, 0])];

// node_modules/@zxing/library/esm/core/aztec/encoder/ShiftTable.js
var __values44 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function static_SHIFT_TABLE(SHIFT_TABLE2) {
  var e_1, _a2;
  try {
    for (var SHIFT_TABLE_1 = __values44(SHIFT_TABLE2), SHIFT_TABLE_1_1 = SHIFT_TABLE_1.next(); !SHIFT_TABLE_1_1.done; SHIFT_TABLE_1_1 = SHIFT_TABLE_1.next()) {
      var table = SHIFT_TABLE_1_1.value;
      Arrays_default.fill(table, -1);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (SHIFT_TABLE_1_1 && !SHIFT_TABLE_1_1.done && (_a2 = SHIFT_TABLE_1.return)) _a2.call(SHIFT_TABLE_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  SHIFT_TABLE2[MODE_UPPER][MODE_PUNCT] = 0;
  SHIFT_TABLE2[MODE_LOWER][MODE_PUNCT] = 0;
  SHIFT_TABLE2[MODE_LOWER][MODE_UPPER] = 28;
  SHIFT_TABLE2[MODE_MIXED][MODE_PUNCT] = 0;
  SHIFT_TABLE2[MODE_DIGIT][MODE_PUNCT] = 0;
  SHIFT_TABLE2[MODE_DIGIT][MODE_UPPER] = 15;
  return SHIFT_TABLE2;
}
var SHIFT_TABLE = static_SHIFT_TABLE(Arrays_default.createInt32Array(6, 6));

// node_modules/@zxing/library/esm/core/aztec/encoder/State.js
var __values45 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var State = (
  /** @class */
  function() {
    function State2(token, mode, binaryBytes, bitCount) {
      this.token = token;
      this.mode = mode;
      this.binaryShiftByteCount = binaryBytes;
      this.bitCount = bitCount;
    }
    State2.prototype.getMode = function() {
      return this.mode;
    };
    State2.prototype.getToken = function() {
      return this.token;
    };
    State2.prototype.getBinaryShiftByteCount = function() {
      return this.binaryShiftByteCount;
    };
    State2.prototype.getBitCount = function() {
      return this.bitCount;
    };
    State2.prototype.latchAndAppend = function(mode, value) {
      var bitCount = this.bitCount;
      var token = this.token;
      if (mode !== this.mode) {
        var latch = LATCH_TABLE[this.mode][mode];
        token = add(token, latch & 65535, latch >> 16);
        bitCount += latch >> 16;
      }
      var latchModeBitCount = mode === MODE_DIGIT ? 4 : 5;
      token = add(token, value, latchModeBitCount);
      return new State2(token, mode, 0, bitCount + latchModeBitCount);
    };
    State2.prototype.shiftAndAppend = function(mode, value) {
      var token = this.token;
      var thisModeBitCount = this.mode === MODE_DIGIT ? 4 : 5;
      token = add(token, SHIFT_TABLE[this.mode][mode], thisModeBitCount);
      token = add(token, value, 5);
      return new State2(token, this.mode, 0, this.bitCount + thisModeBitCount + 5);
    };
    State2.prototype.addBinaryShiftChar = function(index) {
      var token = this.token;
      var mode = this.mode;
      var bitCount = this.bitCount;
      if (this.mode === MODE_PUNCT || this.mode === MODE_DIGIT) {
        var latch = LATCH_TABLE[mode][MODE_UPPER];
        token = add(token, latch & 65535, latch >> 16);
        bitCount += latch >> 16;
        mode = MODE_UPPER;
      }
      var deltaBitCount = this.binaryShiftByteCount === 0 || this.binaryShiftByteCount === 31 ? 18 : this.binaryShiftByteCount === 62 ? 9 : 8;
      var result = new State2(token, mode, this.binaryShiftByteCount + 1, bitCount + deltaBitCount);
      if (result.binaryShiftByteCount === 2047 + 31) {
        result = result.endBinaryShift(index + 1);
      }
      return result;
    };
    State2.prototype.endBinaryShift = function(index) {
      if (this.binaryShiftByteCount === 0) {
        return this;
      }
      var token = this.token;
      token = addBinaryShift(token, index - this.binaryShiftByteCount, this.binaryShiftByteCount);
      return new State2(token, this.mode, 0, this.bitCount);
    };
    State2.prototype.isBetterThanOrEqualTo = function(other) {
      var newModeBitCount = this.bitCount + (LATCH_TABLE[this.mode][other.mode] >> 16);
      if (this.binaryShiftByteCount < other.binaryShiftByteCount) {
        newModeBitCount += State2.calculateBinaryShiftCost(other) - State2.calculateBinaryShiftCost(this);
      } else if (this.binaryShiftByteCount > other.binaryShiftByteCount && other.binaryShiftByteCount > 0) {
        newModeBitCount += 10;
      }
      return newModeBitCount <= other.bitCount;
    };
    State2.prototype.toBitArray = function(text) {
      var e_1, _a2;
      var symbols = [];
      for (var token = this.endBinaryShift(text.length).token; token !== null; token = token.getPrevious()) {
        symbols.unshift(token);
      }
      var bitArray = new BitArray_default();
      try {
        for (var symbols_1 = __values45(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
          var symbol = symbols_1_1.value;
          symbol.appendTo(bitArray, text);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (symbols_1_1 && !symbols_1_1.done && (_a2 = symbols_1.return)) _a2.call(symbols_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return bitArray;
    };
    State2.prototype.toString = function() {
      return StringUtils_default.format("%s bits=%d bytes=%d", MODE_NAMES[this.mode], this.bitCount, this.binaryShiftByteCount);
    };
    State2.calculateBinaryShiftCost = function(state) {
      if (state.binaryShiftByteCount > 62) {
        return 21;
      }
      if (state.binaryShiftByteCount > 31) {
        return 20;
      }
      if (state.binaryShiftByteCount > 0) {
        return 10;
      }
      return 0;
    };
    State2.INITIAL_STATE = new State2(EMPTY_TOKEN, MODE_UPPER, 0, 0);
    return State2;
  }()
);
var State_default = State;

// node_modules/@zxing/library/esm/core/aztec/encoder/CharMap.js
function static_CHAR_MAP(CHAR_MAP2) {
  var spaceCharCode = StringUtils_default.getCharCode(" ");
  var pointCharCode = StringUtils_default.getCharCode(".");
  var commaCharCode = StringUtils_default.getCharCode(",");
  CHAR_MAP2[MODE_UPPER][spaceCharCode] = 1;
  var zUpperCharCode = StringUtils_default.getCharCode("Z");
  var aUpperCharCode = StringUtils_default.getCharCode("A");
  for (var c = aUpperCharCode; c <= zUpperCharCode; c++) {
    CHAR_MAP2[MODE_UPPER][c] = c - aUpperCharCode + 2;
  }
  CHAR_MAP2[MODE_LOWER][spaceCharCode] = 1;
  var zLowerCharCode = StringUtils_default.getCharCode("z");
  var aLowerCharCode = StringUtils_default.getCharCode("a");
  for (var c = aLowerCharCode; c <= zLowerCharCode; c++) {
    CHAR_MAP2[MODE_LOWER][c] = c - aLowerCharCode + 2;
  }
  CHAR_MAP2[MODE_DIGIT][spaceCharCode] = 1;
  var nineCharCode = StringUtils_default.getCharCode("9");
  var zeroCharCode = StringUtils_default.getCharCode("0");
  for (var c = zeroCharCode; c <= nineCharCode; c++) {
    CHAR_MAP2[MODE_DIGIT][c] = c - zeroCharCode + 2;
  }
  CHAR_MAP2[MODE_DIGIT][commaCharCode] = 12;
  CHAR_MAP2[MODE_DIGIT][pointCharCode] = 13;
  var mixedTable = ["\0", " ", "", "", "", "", "", "", "\x07", "\b", "	", "\n", "\v", "\f", "\r", "\x1B", "", "", "", "", "@", "\\", "^", "_", "`", "|", "~", ""];
  for (var i = 0; i < mixedTable.length; i++) {
    CHAR_MAP2[MODE_MIXED][StringUtils_default.getCharCode(mixedTable[i])] = i;
  }
  var punctTable = ["\0", "\r", "\0", "\0", "\0", "\0", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}"];
  for (var i = 0; i < punctTable.length; i++) {
    if (StringUtils_default.getCharCode(punctTable[i]) > 0) {
      CHAR_MAP2[MODE_PUNCT][StringUtils_default.getCharCode(punctTable[i])] = i;
    }
  }
  return CHAR_MAP2;
}
var CHAR_MAP = static_CHAR_MAP(Arrays_default.createInt32Array(5, 256));

// node_modules/@zxing/library/esm/core/aztec/encoder/HighLevelEncoder.js
var __values46 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var HighLevelEncoder2 = (
  /** @class */
  function() {
    function HighLevelEncoder3(text) {
      this.text = text;
    }
    HighLevelEncoder3.prototype.encode = function() {
      var spaceCharCode = StringUtils_default.getCharCode(" ");
      var lineBreakCharCode = StringUtils_default.getCharCode("\n");
      var states = Collections_default.singletonList(State_default.INITIAL_STATE);
      for (var index = 0; index < this.text.length; index++) {
        var pairCode = void 0;
        var nextChar = index + 1 < this.text.length ? this.text[index + 1] : 0;
        switch (this.text[index]) {
          case StringUtils_default.getCharCode("\r"):
            pairCode = nextChar === lineBreakCharCode ? 2 : 0;
            break;
          case StringUtils_default.getCharCode("."):
            pairCode = nextChar === spaceCharCode ? 3 : 0;
            break;
          case StringUtils_default.getCharCode(","):
            pairCode = nextChar === spaceCharCode ? 4 : 0;
            break;
          case StringUtils_default.getCharCode(":"):
            pairCode = nextChar === spaceCharCode ? 5 : 0;
            break;
          default:
            pairCode = 0;
        }
        if (pairCode > 0) {
          states = HighLevelEncoder3.updateStateListForPair(states, index, pairCode);
          index++;
        } else {
          states = this.updateStateListForChar(states, index);
        }
      }
      var minState = Collections_default.min(states, function(a, b) {
        return a.getBitCount() - b.getBitCount();
      });
      return minState.toBitArray(this.text);
    };
    HighLevelEncoder3.prototype.updateStateListForChar = function(states, index) {
      var e_1, _a2;
      var result = [];
      try {
        for (var states_1 = __values46(states), states_1_1 = states_1.next(); !states_1_1.done; states_1_1 = states_1.next()) {
          var state = states_1_1.value;
          this.updateStateForChar(state, index, result);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (states_1_1 && !states_1_1.done && (_a2 = states_1.return)) _a2.call(states_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return HighLevelEncoder3.simplifyStates(result);
    };
    HighLevelEncoder3.prototype.updateStateForChar = function(state, index, result) {
      var ch = this.text[index] & 255;
      var charInCurrentTable = CHAR_MAP[state.getMode()][ch] > 0;
      var stateNoBinary = null;
      for (var mode = 0; mode <= MODE_PUNCT; mode++) {
        var charInMode = CHAR_MAP[mode][ch];
        if (charInMode > 0) {
          if (stateNoBinary == null) {
            stateNoBinary = state.endBinaryShift(index);
          }
          if (!charInCurrentTable || mode === state.getMode() || mode === MODE_DIGIT) {
            var latchState = stateNoBinary.latchAndAppend(mode, charInMode);
            result.push(latchState);
          }
          if (!charInCurrentTable && SHIFT_TABLE[state.getMode()][mode] >= 0) {
            var shiftState = stateNoBinary.shiftAndAppend(mode, charInMode);
            result.push(shiftState);
          }
        }
      }
      if (state.getBinaryShiftByteCount() > 0 || CHAR_MAP[state.getMode()][ch] === 0) {
        var binaryState = state.addBinaryShiftChar(index);
        result.push(binaryState);
      }
    };
    HighLevelEncoder3.updateStateListForPair = function(states, index, pairCode) {
      var e_2, _a2;
      var result = [];
      try {
        for (var states_2 = __values46(states), states_2_1 = states_2.next(); !states_2_1.done; states_2_1 = states_2.next()) {
          var state = states_2_1.value;
          this.updateStateForPair(state, index, pairCode, result);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (states_2_1 && !states_2_1.done && (_a2 = states_2.return)) _a2.call(states_2);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      return this.simplifyStates(result);
    };
    HighLevelEncoder3.updateStateForPair = function(state, index, pairCode, result) {
      var stateNoBinary = state.endBinaryShift(index);
      result.push(stateNoBinary.latchAndAppend(MODE_PUNCT, pairCode));
      if (state.getMode() !== MODE_PUNCT) {
        result.push(stateNoBinary.shiftAndAppend(MODE_PUNCT, pairCode));
      }
      if (pairCode === 3 || pairCode === 4) {
        var digitState = stateNoBinary.latchAndAppend(MODE_DIGIT, 16 - pairCode).latchAndAppend(MODE_DIGIT, 1);
        result.push(digitState);
      }
      if (state.getBinaryShiftByteCount() > 0) {
        var binaryState = state.addBinaryShiftChar(index).addBinaryShiftChar(index + 1);
        result.push(binaryState);
      }
    };
    HighLevelEncoder3.simplifyStates = function(states) {
      var e_3, _a2, e_4, _b;
      var result = [];
      try {
        for (var states_3 = __values46(states), states_3_1 = states_3.next(); !states_3_1.done; states_3_1 = states_3.next()) {
          var newState = states_3_1.value;
          var add2 = true;
          var _loop_1 = function(oldState2) {
            if (oldState2.isBetterThanOrEqualTo(newState)) {
              add2 = false;
              return "break";
            }
            if (newState.isBetterThanOrEqualTo(oldState2)) {
              result = result.filter(function(x) {
                return x !== oldState2;
              });
            }
          };
          try {
            for (var result_1 = (e_4 = void 0, __values46(result)), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
              var oldState = result_1_1.value;
              var state_1 = _loop_1(oldState);
              if (state_1 === "break") break;
            }
          } catch (e_4_1) {
            e_4 = {
              error: e_4_1
            };
          } finally {
            try {
              if (result_1_1 && !result_1_1.done && (_b = result_1.return)) _b.call(result_1);
            } finally {
              if (e_4) throw e_4.error;
            }
          }
          if (add2) {
            result.push(newState);
          }
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (states_3_1 && !states_3_1.done && (_a2 = states_3.return)) _a2.call(states_3);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      return result;
    };
    return HighLevelEncoder3;
  }()
);
var HighLevelEncoder_default2 = HighLevelEncoder2;

// node_modules/@zxing/library/esm/core/aztec/encoder/Encoder.js
var __values47 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Encoder2 = (
  /** @class */
  function() {
    function Encoder3() {
    }
    Encoder3.encodeBytes = function(data) {
      return Encoder3.encode(data, Encoder3.DEFAULT_EC_PERCENT, Encoder3.DEFAULT_AZTEC_LAYERS);
    };
    Encoder3.encode = function(data, minECCPercent, userSpecifiedLayers) {
      var bits = new HighLevelEncoder_default2(data).encode();
      var eccBits = Integer_default.truncDivision(bits.getSize() * minECCPercent, 100) + 11;
      var totalSizeBits = bits.getSize() + eccBits;
      var compact;
      var layers;
      var totalBitsInLayer;
      var wordSize;
      var stuffedBits;
      if (userSpecifiedLayers !== Encoder3.DEFAULT_AZTEC_LAYERS) {
        compact = userSpecifiedLayers < 0;
        layers = Math.abs(userSpecifiedLayers);
        if (layers > (compact ? Encoder3.MAX_NB_BITS_COMPACT : Encoder3.MAX_NB_BITS)) {
          throw new IllegalArgumentException_default(StringUtils_default.format("Illegal value %s for layers", userSpecifiedLayers));
        }
        totalBitsInLayer = Encoder3.totalBitsInLayer(layers, compact);
        wordSize = Encoder3.WORD_SIZE[layers];
        var usableBitsInLayers = totalBitsInLayer - totalBitsInLayer % wordSize;
        stuffedBits = Encoder3.stuffBits(bits, wordSize);
        if (stuffedBits.getSize() + eccBits > usableBitsInLayers) {
          throw new IllegalArgumentException_default("Data to large for user specified layer");
        }
        if (compact && stuffedBits.getSize() > wordSize * 64) {
          throw new IllegalArgumentException_default("Data to large for user specified layer");
        }
      } else {
        wordSize = 0;
        stuffedBits = null;
        for (var i = 0; ; i++) {
          if (i > Encoder3.MAX_NB_BITS) {
            throw new IllegalArgumentException_default("Data too large for an Aztec code");
          }
          compact = i <= 3;
          layers = compact ? i + 1 : i;
          totalBitsInLayer = Encoder3.totalBitsInLayer(layers, compact);
          if (totalSizeBits > totalBitsInLayer) {
            continue;
          }
          if (stuffedBits == null || wordSize !== Encoder3.WORD_SIZE[layers]) {
            wordSize = Encoder3.WORD_SIZE[layers];
            stuffedBits = Encoder3.stuffBits(bits, wordSize);
          }
          var usableBitsInLayers = totalBitsInLayer - totalBitsInLayer % wordSize;
          if (compact && stuffedBits.getSize() > wordSize * 64) {
            continue;
          }
          if (stuffedBits.getSize() + eccBits <= usableBitsInLayers) {
            break;
          }
        }
      }
      var messageBits = Encoder3.generateCheckWords(stuffedBits, totalBitsInLayer, wordSize);
      var messageSizeInWords = stuffedBits.getSize() / wordSize;
      var modeMessage = Encoder3.generateModeMessage(compact, layers, messageSizeInWords);
      var baseMatrixSize = (compact ? 11 : 14) + layers * 4;
      var alignmentMap = new Int32Array(baseMatrixSize);
      var matrixSize;
      if (compact) {
        matrixSize = baseMatrixSize;
        for (var i = 0; i < alignmentMap.length; i++) {
          alignmentMap[i] = i;
        }
      } else {
        matrixSize = baseMatrixSize + 1 + 2 * Integer_default.truncDivision(Integer_default.truncDivision(baseMatrixSize, 2) - 1, 15);
        var origCenter = Integer_default.truncDivision(baseMatrixSize, 2);
        var center = Integer_default.truncDivision(matrixSize, 2);
        for (var i = 0; i < origCenter; i++) {
          var newOffset = i + Integer_default.truncDivision(i, 15);
          alignmentMap[origCenter - i - 1] = center - newOffset - 1;
          alignmentMap[origCenter + i] = center + newOffset + 1;
        }
      }
      var matrix = new BitMatrix_default(matrixSize);
      for (var i = 0, rowOffset = 0; i < layers; i++) {
        var rowSize = (layers - i) * 4 + (compact ? 9 : 12);
        for (var j = 0; j < rowSize; j++) {
          var columnOffset = j * 2;
          for (var k = 0; k < 2; k++) {
            if (messageBits.get(rowOffset + columnOffset + k)) {
              matrix.set(alignmentMap[i * 2 + k], alignmentMap[i * 2 + j]);
            }
            if (messageBits.get(rowOffset + rowSize * 2 + columnOffset + k)) {
              matrix.set(alignmentMap[i * 2 + j], alignmentMap[baseMatrixSize - 1 - i * 2 - k]);
            }
            if (messageBits.get(rowOffset + rowSize * 4 + columnOffset + k)) {
              matrix.set(alignmentMap[baseMatrixSize - 1 - i * 2 - k], alignmentMap[baseMatrixSize - 1 - i * 2 - j]);
            }
            if (messageBits.get(rowOffset + rowSize * 6 + columnOffset + k)) {
              matrix.set(alignmentMap[baseMatrixSize - 1 - i * 2 - j], alignmentMap[i * 2 + k]);
            }
          }
        }
        rowOffset += rowSize * 8;
      }
      Encoder3.drawModeMessage(matrix, compact, matrixSize, modeMessage);
      if (compact) {
        Encoder3.drawBullsEye(matrix, Integer_default.truncDivision(matrixSize, 2), 5);
      } else {
        Encoder3.drawBullsEye(matrix, Integer_default.truncDivision(matrixSize, 2), 7);
        for (var i = 0, j = 0; i < Integer_default.truncDivision(baseMatrixSize, 2) - 1; i += 15, j += 16) {
          for (var k = Integer_default.truncDivision(matrixSize, 2) & 1; k < matrixSize; k += 2) {
            matrix.set(Integer_default.truncDivision(matrixSize, 2) - j, k);
            matrix.set(Integer_default.truncDivision(matrixSize, 2) + j, k);
            matrix.set(k, Integer_default.truncDivision(matrixSize, 2) - j);
            matrix.set(k, Integer_default.truncDivision(matrixSize, 2) + j);
          }
        }
      }
      var aztec = new AztecCode_default();
      aztec.setCompact(compact);
      aztec.setSize(matrixSize);
      aztec.setLayers(layers);
      aztec.setCodeWords(messageSizeInWords);
      aztec.setMatrix(matrix);
      return aztec;
    };
    Encoder3.drawBullsEye = function(matrix, center, size) {
      for (var i = 0; i < size; i += 2) {
        for (var j = center - i; j <= center + i; j++) {
          matrix.set(j, center - i);
          matrix.set(j, center + i);
          matrix.set(center - i, j);
          matrix.set(center + i, j);
        }
      }
      matrix.set(center - size, center - size);
      matrix.set(center - size + 1, center - size);
      matrix.set(center - size, center - size + 1);
      matrix.set(center + size, center - size);
      matrix.set(center + size, center - size + 1);
      matrix.set(center + size, center + size - 1);
    };
    Encoder3.generateModeMessage = function(compact, layers, messageSizeInWords) {
      var modeMessage = new BitArray_default();
      if (compact) {
        modeMessage.appendBits(layers - 1, 2);
        modeMessage.appendBits(messageSizeInWords - 1, 6);
        modeMessage = Encoder3.generateCheckWords(modeMessage, 28, 4);
      } else {
        modeMessage.appendBits(layers - 1, 5);
        modeMessage.appendBits(messageSizeInWords - 1, 11);
        modeMessage = Encoder3.generateCheckWords(modeMessage, 40, 4);
      }
      return modeMessage;
    };
    Encoder3.drawModeMessage = function(matrix, compact, matrixSize, modeMessage) {
      var center = Integer_default.truncDivision(matrixSize, 2);
      if (compact) {
        for (var i = 0; i < 7; i++) {
          var offset = center - 3 + i;
          if (modeMessage.get(i)) {
            matrix.set(offset, center - 5);
          }
          if (modeMessage.get(i + 7)) {
            matrix.set(center + 5, offset);
          }
          if (modeMessage.get(20 - i)) {
            matrix.set(offset, center + 5);
          }
          if (modeMessage.get(27 - i)) {
            matrix.set(center - 5, offset);
          }
        }
      } else {
        for (var i = 0; i < 10; i++) {
          var offset = center - 5 + i + Integer_default.truncDivision(i, 5);
          if (modeMessage.get(i)) {
            matrix.set(offset, center - 7);
          }
          if (modeMessage.get(i + 10)) {
            matrix.set(center + 7, offset);
          }
          if (modeMessage.get(29 - i)) {
            matrix.set(offset, center + 7);
          }
          if (modeMessage.get(39 - i)) {
            matrix.set(center - 7, offset);
          }
        }
      }
    };
    Encoder3.generateCheckWords = function(bitArray, totalBits, wordSize) {
      var e_1, _a2;
      var messageSizeInWords = bitArray.getSize() / wordSize;
      var rs = new ReedSolomonEncoder_default(Encoder3.getGF(wordSize));
      var totalWords = Integer_default.truncDivision(totalBits, wordSize);
      var messageWords = Encoder3.bitsToWords(bitArray, wordSize, totalWords);
      rs.encode(messageWords, totalWords - messageSizeInWords);
      var startPad = totalBits % wordSize;
      var messageBits = new BitArray_default();
      messageBits.appendBits(0, startPad);
      try {
        for (var _b = __values47(Array.from(messageWords)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var messageWord = _c.value;
          messageBits.appendBits(messageWord, wordSize);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return messageBits;
    };
    Encoder3.bitsToWords = function(stuffedBits, wordSize, totalWords) {
      var message = new Int32Array(totalWords);
      var i;
      var n;
      for (i = 0, n = stuffedBits.getSize() / wordSize; i < n; i++) {
        var value = 0;
        for (var j = 0; j < wordSize; j++) {
          value |= stuffedBits.get(i * wordSize + j) ? 1 << wordSize - j - 1 : 0;
        }
        message[i] = value;
      }
      return message;
    };
    Encoder3.getGF = function(wordSize) {
      switch (wordSize) {
        case 4:
          return GenericGF_default.AZTEC_PARAM;
        case 6:
          return GenericGF_default.AZTEC_DATA_6;
        case 8:
          return GenericGF_default.AZTEC_DATA_8;
        case 10:
          return GenericGF_default.AZTEC_DATA_10;
        case 12:
          return GenericGF_default.AZTEC_DATA_12;
        default:
          throw new IllegalArgumentException_default("Unsupported word size " + wordSize);
      }
    };
    Encoder3.stuffBits = function(bits, wordSize) {
      var out = new BitArray_default();
      var n = bits.getSize();
      var mask = (1 << wordSize) - 2;
      for (var i = 0; i < n; i += wordSize) {
        var word = 0;
        for (var j = 0; j < wordSize; j++) {
          if (i + j >= n || bits.get(i + j)) {
            word |= 1 << wordSize - 1 - j;
          }
        }
        if ((word & mask) === mask) {
          out.appendBits(word & mask, wordSize);
          i--;
        } else if ((word & mask) === 0) {
          out.appendBits(word | 1, wordSize);
          i--;
        } else {
          out.appendBits(word, wordSize);
        }
      }
      return out;
    };
    Encoder3.totalBitsInLayer = function(layers, compact) {
      return ((compact ? 88 : 112) + 16 * layers) * layers;
    };
    Encoder3.DEFAULT_EC_PERCENT = 33;
    Encoder3.DEFAULT_AZTEC_LAYERS = 0;
    Encoder3.MAX_NB_BITS = 32;
    Encoder3.MAX_NB_BITS_COMPACT = 4;
    Encoder3.WORD_SIZE = Int32Array.from([4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]);
    return Encoder3;
  }()
);
var Encoder_default2 = Encoder2;

// node_modules/@zxing/library/esm/core/aztec/AztecWriter.js
var AztecWriter = (
  /** @class */
  function() {
    function AztecWriter2() {
    }
    AztecWriter2.prototype.encode = function(contents, format, width, height) {
      return this.encodeWithHints(contents, format, width, height, null);
    };
    AztecWriter2.prototype.encodeWithHints = function(contents, format, width, height, hints) {
      var charset = StandardCharsets_default.ISO_8859_1;
      var eccPercent = Encoder_default2.DEFAULT_EC_PERCENT;
      var layers = Encoder_default2.DEFAULT_AZTEC_LAYERS;
      if (hints != null) {
        if (hints.has(EncodeHintType_default.CHARACTER_SET)) {
          charset = Charset_default.forName(hints.get(EncodeHintType_default.CHARACTER_SET).toString());
        }
        if (hints.has(EncodeHintType_default.ERROR_CORRECTION)) {
          eccPercent = Integer_default.parseInt(hints.get(EncodeHintType_default.ERROR_CORRECTION).toString());
        }
        if (hints.has(EncodeHintType_default.AZTEC_LAYERS)) {
          layers = Integer_default.parseInt(hints.get(EncodeHintType_default.AZTEC_LAYERS).toString());
        }
      }
      return AztecWriter2.encodeLayers(contents, format, width, height, charset, eccPercent, layers);
    };
    AztecWriter2.encodeLayers = function(contents, format, width, height, charset, eccPercent, layers) {
      if (format !== BarcodeFormat_default.AZTEC) {
        throw new IllegalArgumentException_default("Can only encode AZTEC, but got " + format);
      }
      var aztec = Encoder_default2.encode(StringUtils_default.getBytes(contents, charset), eccPercent, layers);
      return AztecWriter2.renderResult(aztec, width, height);
    };
    AztecWriter2.renderResult = function(code, width, height) {
      var input = code.getMatrix();
      if (input == null) {
        throw new IllegalStateException_default();
      }
      var inputWidth = input.getWidth();
      var inputHeight = input.getHeight();
      var outputWidth = Math.max(width, inputWidth);
      var outputHeight = Math.max(height, inputHeight);
      var multiple = Math.min(outputWidth / inputWidth, outputHeight / inputHeight);
      var leftPadding = (outputWidth - inputWidth * multiple) / 2;
      var topPadding = (outputHeight - inputHeight * multiple) / 2;
      var output = new BitMatrix_default(outputWidth, outputHeight);
      for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
        for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
          if (input.get(inputX, inputY)) {
            output.setRegion(outputX, outputY, multiple, multiple);
          }
        }
      }
      return output;
    };
    return AztecWriter2;
  }()
);
var AztecWriter_default = AztecWriter;

export {
  Exception_default,
  ArgumentException_default,
  IllegalArgumentException_default,
  BinaryBitmap_default,
  ChecksumException_default,
  Binarizer_default,
  System_default,
  Arrays_default,
  Integer_default,
  BitArray_default,
  DecodeHintType_default,
  FormatException_default,
  CharacterSetECI_default,
  UnsupportedOperationException_default,
  StringEncoding_default,
  StringUtils_default,
  StringBuilder_default,
  BitMatrix_default,
  NotFoundException_default,
  GlobalHistogramBinarizer_default,
  HybridBinarizer_default,
  LuminanceSource_default,
  InvertedLuminanceSource_default,
  HTMLCanvasElementLuminanceSource,
  VideoInputDevice,
  BrowserCodeReader,
  Result_default,
  BarcodeFormat_default,
  ResultMetadataType_default,
  DecoderResult_default,
  GenericGFPoly_default,
  ArithmeticException_default,
  GenericGF_default,
  ReedSolomonException_default,
  IllegalStateException_default,
  ReedSolomonDecoder_default,
  Decoder_default,
  MathUtils_default,
  ResultPoint_default,
  DetectorResult_default,
  AztecDetectorResult_default,
  WhiteRectangleDetector_default,
  GridSampler_default,
  PerspectiveTransform_default,
  DefaultGridSampler_default,
  GridSamplerInstance_default,
  Point,
  Detector_default,
  AztecReader_default,
  BrowserAztecCodeReader,
  OneDReader_default,
  Code128Reader_default,
  Code39Reader_default,
  Code93Reader_default,
  ITFReader_default,
  EAN13Reader_default,
  CodaBarReader_default,
  AbstractExpandedDecoder_default,
  createDecoder,
  RSSExpandedReader_default,
  RSS14Reader_default,
  MultiFormatOneDReader_default,
  BrowserBarcodeReader,
  BitSource_default,
  DecodedBitStreamParser_default,
  DataMatrixReader_default,
  BrowserDatamatrixCodeReader,
  ErrorCorrectionLevel_default,
  FormatInformation_default,
  Version_default2 as Version_default,
  DataMask_default,
  Mode_default,
  DecodedBitStreamParser_default2,
  QRCodeReader_default,
  ErrorCorrection_default,
  PDF417ResultMetadata_default,
  DecodedBitStreamParser_default3,
  PDF417Reader_default,
  ReaderException_default,
  MultiFormatReader_default,
  BrowserMultiFormatReader,
  BrowserPDF417Reader,
  BrowserQRCodeReader,
  EncodeHintType_default,
  ReedSolomonEncoder_default,
  MaskUtil_default,
  ByteMatrix_default,
  QRCode_default,
  WriterException_default,
  MatrixUtil_default,
  Encoder_default,
  BrowserQRCodeSvgWriter,
  QRCodeWriter_default,
  MultiFormatWriter_default,
  PlanarYUVLuminanceSource_default,
  RGBLuminanceSource_default,
  Charset_default,
  StandardCharsets_default,
  DefaultPlacement_default,
  SymbolShapeHint,
  ErrorCorrection_default2,
  SymbolInfo_default,
  HighLevelEncoder_default,
  DataMatrixWriter_default,
  AztecCode_default,
  HighLevelEncoder_default2,
  Encoder_default2,
  AztecWriter_default
};
//# sourceMappingURL=chunk-IMSXBECP.js.map
