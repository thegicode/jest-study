const forEach = require('./forEach.js');

const mockCallback = jest.fn(x => 42 + x);

test('The mock function is ...', () => {
    forEach([0, 1], mockCallback);

    console.log(mockCallback.mock)
    // {
    //     calls: [ [ 0 ], [ 1 ] ],
    //     instances: [ undefined, undefined ],
    //     invocationCallOrder: [ 1, 2 ],
    //     results: [ { type: 'return', value: 42 }, { type: 'return', value: 43 } ]
    //   }


    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);

});










