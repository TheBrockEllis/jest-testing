const sayHello = require('./1_strings');

test('say hello to brock', () => {
  expect(sayHello("brock")).toBe("Hello brock!");
});

test('say hello to brock', () => {
    expect(sayHello("brock")).not.toBe("Good morning, brock");
});

// Regular Expressions

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});