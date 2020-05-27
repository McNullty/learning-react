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
