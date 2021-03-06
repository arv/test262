// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-43
description: >
    Object.defineProperty - 'Attributes' is an Arguments object which
    implements its own [[Get]] method to access the 'enumerable'
    property (8.10.5 step 3.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var accessed = false;

        var argObj = (function () { return arguments; })();
        argObj.enumerable = true;

        Object.defineProperty(obj, "property", argObj);

        for (var prop in obj) {
            if (prop === "property") {
                accessed = true;
            }
        }

        return accessed;
    }
runTestCase(testcase);
