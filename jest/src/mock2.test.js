const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

test('test ...', () => {

    console.log(myMock(), myMock(), myMock(), myMock());
    // > 10, 'x', true, true
    
});
