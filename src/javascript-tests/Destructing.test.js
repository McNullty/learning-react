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

test('regular expression match', () => {
    function parseProtocol(url) {
        const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
        if (!parsedURL) {
            return false;
        }

        return parsedURL;

    }
    const result = parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript');
    const expected = ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]
    expect(result).toEqual(expect.arrayContaining(expected))
});

test('Unpacking values from a regular expression match', () => {
    function parseProtocol(url) {
        const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
        if (!parsedURL) {
            return false;
        }

        const [, protocol, fullhost, fullpath] = parsedURL; // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]
        return protocol;

    }

    expect(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')).toEqual("https");
});

test('Basic object destructing', () => {
    const user = {
        id: 42,
        is_verified: true
    };

    const {id, is_verified} = user;

    expect(id).toEqual(42);
    expect(is_verified).toBeTruthy();
});

test('You cant change object properties', () => {
    const user = {
        id: 42,
        is_verified: true
    };

    const {a, b} = user;

    expect(a).toBeUndefined();
    expect(b).toBeUndefined();
});

test('Spread destructing', () => {
    const user = {
        id: 42,
        is_verified: true
    };

    const {id, is_verified} = {...user};

    expect(id).toEqual(42);
    expect(is_verified).toBeTruthy();
});

test('Assigning to new variable names', () => {
    const o = {p: 42, q: true};
    const {q: bar, p: foo} = o;
    const {p: fooFoo, q: barBar,} = o;

    expect(foo).toEqual(42);
    expect(bar).toBeTruthy();
    expect(fooFoo).toEqual(42);
    expect(barBar).toBeTruthy();
});

test('Unpacking fields from objects passed as function parameter ()', () => {
    const user = {
        id: 42,
        displayName: 'jdoe',
        fullName: {
            firstName: 'John',
            lastName: 'Doe'
        }
    };

    function userId({id}) {
        return id;
    }

    function whois({displayName, fullName: {firstName: name}}) {
        return `${displayName} is ${name}`;
    }

    expect(userId(user)).toEqual(42);
    expect(whois(user)).toEqual("jdoe is John");
});

test('Nested object and array destructuring', () => {
    const metadata = {
        title: 'Scratchpad',
        translations: [
            {
                locale: 'de',
                localization_tags: [],
                last_edit: '2014-04-14T08:43:37',
                url: '/de/docs/Tools/Scratchpad',
                title: 'JavaScript-Umgebung'
            }
        ],
        url: '/en-US/docs/Tools/Scratchpad'
    };

    let {
        title: englishTitle, // rename
        translations: [
            {
                title: localeTitle, // rename
            },
        ],
    } = metadata;

    expect(englishTitle).toEqual("Scratchpad");
    expect(localeTitle).toEqual("JavaScript-Umgebung");
});

test('For of iteration and destructuring', () => {
    const people = [
        {
            name: 'Mike Smith',
            family: {
                mother: 'Jane Smith',
                father: 'Harry Smith',
                sister: 'Samantha Smith'
            },
            age: 35
        },
        {
            name: 'Tom Jones',
            family: {
                mother: 'Norah Jones',
                father: 'Richard Jones',
                brother: 'Howard Jones'
            },
            age: 25
        }
    ];

    let result = [];
    for (const {name: n, family: {father: f}} of people) {
        result = result.concat('Name: ' + n + ', Father: ' + f)
    }

    const expected = ["Name: Mike Smith, Father: Harry Smith", "Name: Tom Jones, Father: Richard Jones"]

    expect(result).toEqual(expect.arrayContaining(expected))
});

test('Computed object property names and destructuring', () => {
    let key = 'z';
    let {[key]: foo} = {z: 'bar'};

    expect(foo).toEqual("bar")
});

test('Rest in Object Destructuring', () => {
    let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}

    const expectedRest = { c: 30, d: 40 }

    expect(a).toEqual(10)
    expect(b).toEqual(20)
    expect(rest).toEqual(expectedRest)
});

/**
 * Destructuring can be used with property names that are not valid JavaScript identifiers by providing an
 * alternative identifier that is valid.
 */
test('Invalid JavaScript identifier as a property name', () => {
    const foo = { 'fizz-buzz': true };
    const { 'fizz-buzz': fizzBuzz } = foo;

    console.log(fizzBuzz); // "true"

    expect(fizzBuzz).toBeTruthy();
});

test('Combined Array and Object Destructuring', () => {
    const props = [
        { id: 1, name: 'Fizz'},
        { id: 2, name: 'Buzz'},
        { id: 3, name: 'FizzBuzz'}
    ];

    const [,, { name }] = props;

    expect(name).toEqual('FizzBuzz');
});

/**
 * When deconstructing an object, if a property is not accessed in itself, it will continue to look up along
 * the prototype chain.
 */
test('The prototype chain is looked up when the object is deconstructed ', () => {
    let obj = {self: '123'};
    obj.__proto__.prot = '456';
    const {self, prot} = obj;

    expect(self).toEqual("123");
    expect(prot).toEqual("456");
});