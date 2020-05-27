let name ="Arrow function"
let me = {
    name: "Regular function",
    thisInArrow:() => {
        return "Example of " + name;
    },
    thisInRegular(){
        return "Example of " + this.name;
    }
};

test('Testing arrow function', () => {
    const result = me.thisInArrow();

    expect(result).toEqual("Example of Arrow function");
});

test('Testing regular function', () => {
    const result = me.thisInRegular();

    expect(result).toEqual("Example of Regular function");
});


const catArrow = {
    lives: 9,
    jumps: () => {
        this.lives--;
    }
}

test.skip('Calling arrow function inside object', () => {
   expect(catArrow.jumps()).toThrow(TypeError)
});

const catRegular = {
    lives: 9,
    jumps: function jumps() {
        this.lives--;
    }
}

test('Calling regular function inside object', () => {
    catRegular.jumps();

    expect(catRegular.lives).toEqual(8);
});

test('Unpacking fields from objects passed as function parameter', () => {
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

