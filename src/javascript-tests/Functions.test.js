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

