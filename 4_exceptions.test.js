const haltAndCatchFire = require('./4_exceptions');

test('it should halt and catch fire', () => {
    expect(() => haltAndCatchFire()).toThrow(Error);

    expect(() => haltAndCatchFire()).toThrow("ERRRRROR!!!!!!!🔥👻☠️");
});
