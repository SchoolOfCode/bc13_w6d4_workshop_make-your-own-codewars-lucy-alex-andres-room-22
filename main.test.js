import { test, expect } from "@jest/globals";

import {
    hundredDigit,
} from "./main.js";

//👉 Write your tests below here:
test ("Testing if the third digit is found", function () { expect (hundredDigit(3874)).toBe(8);
    expect (hundredDigit(9574321)).toBe(3);
    expect (hundredDigit(337443560)).toBe(5);
    expect (hundredDigit(33760835451)).toBe(4);
    expect (hundredDigit(9574821)).toBe(8);
    expect (hundredDigit(837443650)).toBe(6);
    expect (hundredDigit(33764835051)).toBe(0);
});


    