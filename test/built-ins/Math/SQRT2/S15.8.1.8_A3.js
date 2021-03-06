// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Value Property SQRT2 of the Math Object has the attribute DontDelete
es5id: 15.8.1.8_A3
description: Checking if Math.SQRT2 property has the attribute DontDelete
flags: [noStrict]
---*/

// CHECK#1
if (delete Math.SQRT2 === true) {
    $ERROR('#1: Value Property SQRT2 of the Math Object hasn\'t attribute DontDelete: \'Math.SQRT2 === true\'');
}
