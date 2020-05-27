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

test('Destructing array', () => {
    const foo = ['one', 'two', 'three'];

    const [red, yellow, green] = foo;

    expect(red).toEqual('one');
    expect(yellow).toEqual('two');
    expect(green).toEqual('three');
});


test('Destructing array with default values', () => {
    let a, b;

    [a=5, b=7] = [1];

    expect(a).toEqual(1);
    expect(b).toEqual(7);
});

test('Swapping variables', () => {
    let a = 1;
    let b = 3;

    [a, b] = [b, a];
    expect(a).toEqual(3);
    expect(b).toEqual(1);

    const arr = [1,2,3];
    [arr[2], arr[1]] = [arr[1], arr[2]];

    expect(arr).toEqual([1,3,2]);
});

test('Parsing and ignoring returns from function', () => {
    function f() {
        return [1, 2, 3];
    }

    const [a, , b] = f();
    expect(a).toEqual(1);
    expect(b).toEqual(3);

    const [c] = f();
    expect(c).toEqual(1);
});

test('Assigning the rest of an array to a variable', () => {
    const [head, ...tail] = [1, 2, 3];

    expect(head).toEqual(1);
    expect(tail).toEqual([2, 3]);
});
