
test('Testing simple addition', () => {
    const sum = 1 + 2;

    expect(sum).toBe(3);
});

test('Testing simple division', () => {
    const result = 5 / 2;

    expect(result).toBe(2.5);
});

test('Testing integer division', () => {
   const result = Math.floor(5 / 2);

    expect(result).toBe(2);
});