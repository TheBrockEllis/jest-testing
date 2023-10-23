const student = require('./2_objects');

test('should add both parents', () => {
    student.name = 'brock ellis';
    student.mom = "nancy";
    student.dad = "glen";

    expect(student).toEqual({ name: 'brock ellis', mom: 'nancy', dad: 'glen' });
});
