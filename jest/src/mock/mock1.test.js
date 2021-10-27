

const myMock = jest.fn()

test('test...', () => {
    const a = new myMock()
    const b = {}
    const bound = myMock.bind(b)
    bound()

    console.log(myMock.mock.instances)  
    // mockConstructor {}, {}
})
