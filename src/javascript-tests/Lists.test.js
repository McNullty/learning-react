test('Testing map function', () => {
    const numbers = [1, 4, 9, 16]
    const newNumbers = numbers.map(function(number) {
        return number * 2;
    });

    const expected = [2, 8, 18, 32]

    expect(newNumbers).toEqual(expected);
});

test('Testing map function (1)', () => {
    const numbers = [1, 4, 9, 16]
    const newNumbers = numbers.map(number => number * 2);

    const expected = [2, 8, 18, 32]

    expect(newNumbers).toEqual(expected);
});

