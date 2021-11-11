import happy from './happy'

test('"happy" is to be "happy"', () => {
    expect(happy('happy')).toBe('happy');
});
