import { eachPrefix, getStrings, finalResult } from "./prefixes_recursive_sol2";

describe('eachPrefix', () => {
    it('should create combinations for a short char array', () => {
        expect(eachPrefix(["c",])).toEqual(['c']);
    })
    it('should create combinations for a very short char array', () => {
        expect(eachPrefix(["c","n"])).toEqual(['c', 'cn']);
    })
    it('should create combinations for a short char array', () => {
        expect(eachPrefix(["c","n","s"])).toEqual(['c', 'cn', 'cns']);
    })
    it('should create combinations for a long char array', () => {
        expect(eachPrefix(["a","b","c","d"])).toEqual(['a', 'ab', 'abc','abcd']);
    })
    it('should create combinations for a string array', () => {
        expect(eachPrefix(["sa","lut","ca","va"])).toEqual(["sa", "salut", "salutca", "salutcava"]);
    })
    it('should create combinations for an int array', () => {
        expect(eachPrefix(["1","5","6","8"])).toEqual(["1", "15", "156", "1568"]);
    })
    it('should return an empty array for an empty input', () => {
        expect(eachPrefix([])).toEqual([]);
    })
})

describe('getStrings', () => {
    it('should create all unique combinations for a unique char array', () => {
        expect(getStrings(["c"])).toEqual(['c']);
    })
    it('should create all unique combinations for a very short char array', () => {
        expect(getStrings(["c","n"])).toEqual(['c', 'cn']);
    })
    it('should create all unique combinations for a short char array', () => {
        expect(getStrings(["c","n","s"])).toEqual(['c', 'cn', 'cns','cs']);
    })
    it('should create all unique combinations for a long char array', () => {
        expect(getStrings(["a","b","c","d"])).toEqual(['a', 'ab', 'abc','abcd', 'ac', 'acd', 'ad']);
    })
    it('should create combinations for a string array', () => {
        expect(getStrings(["sa","lut","ca","va"])).toEqual(["sa", "salut", "salutca", "salutcava", "saca", "sacava", "sava"]);
    })
    it('should create combinations for an int array', () => {
        expect(getStrings(["1","5","6","8"])).toEqual(["1", "15", "156", "1568", "16", "168", "18"]);
    })
    it('should return an empty array for an empty input', () => {
        expect(getStrings([])).toEqual([]);
    })
})

describe('finalResult', () => {
    it('should create all unique combinations for a unique char array', () => {
        expect(finalResult(["c"])).toEqual(['c']);
    })
    it('should create all unique combinations for a very short char array', () => {
        expect(finalResult(["c","n"])).toEqual(['c', 'cn', 'n']);
    })
    it('should create all unique combinations for a char array without duplicates', () => {
        expect(finalResult(["c","v","l", "v"])).toEqual(['c', 'cv', 'cvl', 'cvlv', 'cl', 'clv', 'v', 'vl', 'vlv', 'vv', 'l', 'lv', 'v']);
    })
    it('should create all unique combinations for a short char array', () => {
        expect(finalResult(["c","n","s"])).toEqual(['c', 'cn', 'cns','cs', 'n', 'ns', 's']);
    })
    it('should create all unique combinations for a long char array', () => {
        expect(finalResult(["a","b","c","d"])).toEqual(['a', 'ab', 'abc','abcd', 'ac', 'acd', 'ad', 'b', 'bc', 'bcd', 'bd', 'c', 'cd', 'd']);
    })
    it('should create combinations for a string array', () => {
        expect(finalResult(["sa","lut","ca","va"])).toEqual(["sa", "salut", "salutca", "salutcava", "saca", "sacava", "sava", "lut", "lutca", "lutcava", 'lutva', "ca", "cava", "va"]);
    })
    it('should create combinations for an int array', () => {
        expect(finalResult([1,5,6,8])).toEqual(["1", "15", "156", "1568", "16", "168", "18", "5", "56", "568", "58", "6", "68", "8"]);
    })
    it('should return an empty array for an empty input', () => {
        expect(finalResult([])).toEqual([]);
    })
    it('should create combinations for an float array', () => {
        expect(finalResult([1.7,5.99,0.33,8.9])).toEqual(["1.7", "1.75.99", "1.75.990.33", "1.75.990.338.9", "1.70.33", "1.70.338.9", "1.78.9", "5.99", "5.990.33", "5.990.338.9", "5.998.9","0.33", "0.338.9", "8.9"]);
    })
})