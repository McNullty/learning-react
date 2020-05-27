class Developer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getName() {
        return this.firstName + ' ' + this.lastName;
    }
}

test('Testing creating object', () => {
    const danish = new Developer('Dinesh', 'Chugtai')

    expect(danish.getName()).toEqual("Dinesh Chugtai");
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

test('Assigning to new variable names', () => {
    const o = {p: 42, q: true};
    const {q: bar, p: foo} = o;
    const {p: fooFoo, q: barBar,} = o;

    expect(foo).toEqual(42);
    expect(bar).toBeTruthy();
    expect(fooFoo).toEqual(42);
    expect(barBar).toBeTruthy();
});