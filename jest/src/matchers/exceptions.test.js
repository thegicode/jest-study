


function compileAndroidCodde() {
    throw new Error('you are using the wrong JDK')
}

test('compiling anddroid goes as expected', () => {
    expect(() => compileAndroidCodde()).toThrow()
    expect(() => compileAndroidCodde()).toThrow(Error)

    expect(() => compileAndroidCodde()).toThrow('you are using the wrong JDK')
    expect(() => compileAndroidCodde()).toThrow(/JDK/);
})