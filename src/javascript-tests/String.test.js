test('Testing include function', () => {
    const str = "React";

    expect(str.includes("")).toBeTruthy();
    expect(str.includes("act")).toBeTruthy();
    expect(str.includes("acts")).toBeFalsy();
});