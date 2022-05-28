import {mult, splitIntoWords, sum} from './01';

// data
let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})


test('sum check', () => {
    // action
    const resultAB = sum(a, b)
    const resultAC = sum(a, c)
    const resultBC = sum(b, c)

    // expected result
    expect(resultAB).toBe(3)
    expect(resultAC).toBe(4)
    expect(resultBC).toBe(5)
})

test('multiply check', () => {
    // action
    const resultAB = mult(a, b)
    const resultAC = mult(a, c)
    const resultBC = mult(b, c)

    // expected result
    expect(resultAB).toBe(2)
    expect(resultAC).toBe(3)
    expect(resultBC).toBe(6)
})

test('split into the words check', () => {

    // data
    const sent1 = 'hello world'
    const sent2 = 'my name is Eric'

    // action
    const resultA = splitIntoWords(sent1)
    const resultB = splitIntoWords(sent2)

    // expected result
    expect(resultA.length).toBe(2)
    expect(resultA[0]).toBe('hello')
    expect(resultA[1]).toBe('world')


    expect(resultB.length).toBe(4)
    expect(resultB[0]).toBe('my')
    expect(resultB[1]).toBe('name')
    expect(resultB[2]).toBe('is')
    expect(resultB[3]).toBe('eric')
})