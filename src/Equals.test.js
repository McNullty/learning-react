test('Testing simple ==', () => {
    expect(3 == 3).toBe(true);
});

test('Testing == and === with variables', () => {
    let foo = 3
    let bar = 3

    expect(foo == bar).toBe(true);
    expect(foo === bar).toBe(true);
});

test('Testing == and === with different types',() => {
    let one = 1;
    let one_again = 1;
    let one_float = 1.;
    let one_string = "1";  // note: this is string

    expect(one == one_again).toBe(true);
    expect(one === one_again).toBe(true);

    expect(one == one_string).toBe(true);
    expect(one === one_string).toBe(false);

    expect(one == one_float).toBe(true);
    expect(one === one_float).toBe(true); // float and integers are equal
});

test('Testing == and === with nulls',() => {

    let first_null = null;
    let second_null = null;
    let one = 1;

    expect(first_null == second_null).toBe(true);
    expect(first_null === second_null).toBe(true);

    expect(one == first_null).toBe(false);
    expect(one === first_null).toBe(false);
});

test('Testing == and === with arrays',() => {

    let a1 = [1,2,3,4,5]
    let a2 = [1,2,3,4,5]

    expect(a1 == a2).toBe(false);
    expect(a1 === a2).toBe(false);
});

test('=== problems', () => {
    expect(+0 === -0).toBe(true); // should be false?
    expect(NaN === NaN).toBe(false);
});

test('Object.is() is better then ===', () => {
    expect(Object.is(+0, -0)).toBe(false);
    expect(Object.is(NaN, NaN)).toBe(true);
});