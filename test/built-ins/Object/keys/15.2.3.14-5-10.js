// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.14-5-10
description: >
    Object.keys - inherted enumerable accessor property that is
    over-ridden by non-enumerable own accessor property is not defined
    in returned array
includes: [runTestCase.js]
---*/

function testcase() {
        var proto = {};
        Object.defineProperty(proto, "prop", {
            get: function () { },
            enumerable: true,
            configurable: true
        });
        var Con = function () { };
        Con.prototype = proto;

        var obj = new Con();
        Object.defineProperty(obj, "prop", {
            get: function () { },
            enumerable: false,
            configurable: true
        });

        var arr = Object.keys(obj);

        for (var p in arr) {
            if (arr[p] === "prop") {
                return false;
            }
        }

        return true;
    }
runTestCase(testcase);
