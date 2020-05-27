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