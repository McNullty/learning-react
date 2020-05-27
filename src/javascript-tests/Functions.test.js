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


