
# isConstructor v1.0.0 ![locked](https://img.shields.io/badge/stability-locked-0084B6.svg?style=flat)

The `undefined` and `null` value always return `false`, because the comparison
done by `isConstructor()` uses the `value.constructor` property.

This is **not** an `instanceof` equivalent. The `value` **must** have its
`constructor` property equal the given `type` in order for `true` to be returned.

This is faster than a call to [`isType()`](github.com/aleclarson/type-utils).

```coffee
isConstructor = require "isConstructor"

isConstructor {}, Object  # => true

isConstructor [], Array   # => true

isConstructor()           # => false
```
