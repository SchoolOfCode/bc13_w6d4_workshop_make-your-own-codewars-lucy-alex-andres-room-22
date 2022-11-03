import { test, expect } from "@jest/globals";

import {
    hundredDigit,
} from "./main.js";

//👉 Write your tests below here:
test ("Testing the answer should be 8", function () { expect (hundredDigit(3874)).toBe(8);
});

test ("Testing the answer should be 3", function () { 
    expect (hundredDigit(9574321)).toBe(3);
});

test ("Testing the answer should be 5", function () { 
    expect (hundredDigit(337443560)).toBe(5);
});

test ("Testing the answer should be 4", function () { 
    expect (hundredDigit(33760835451)).toBe(4);
});

test ("Testing the answer should be 8", function () { 
    expect (hundredDigit(9574821)).toBe(8);
});

test ("Testing the answer should be 6 ", function () { 
    expect (hundredDigit(837443650)).toBe(6);
});

test ("Testing the answer should be 0", function () { 
    expect (hundredDigit(33764835051)).toBe(0);
});