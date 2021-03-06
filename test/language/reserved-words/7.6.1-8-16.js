// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.6.1-8-16
description: >
    Allow reserved words as property names by set function within an
    object, accessed via indexing: undefined, NaN, Infinity
includes: [runTestCase.js]
---*/

function testcase() {
        var test0 = 0, test1 = 1, test2 = 2;
        var tokenCodes  = {
            set undefined(value){
                test0 = value;
            },
            get undefined(){
                return test0;
            },
            set NaN(value){
                test1 = value;
            },
            get NaN(){
                return test1;
            },
            set Infinity(value){
                test2 = value;
            },
            get Infinity(){
                return test2;
            }
        }; 
        var arr = [
            'undefined',
            'NaN',
            'Infinity'
        ];
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);
