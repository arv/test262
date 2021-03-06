// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-1-4
description: Array.prototype.indexOf applied to Boolean Object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = new Boolean(false);
        obj.length = 2;
        obj[1] = true;

        return Array.prototype.indexOf.call(obj, true) === 1;
    }
runTestCase(testcase);
