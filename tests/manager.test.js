const Manager = require("../lib/manager");

describe('Manager', () => {
    it('should return employee name', () => {
    const obj = new Manager ('Jillian');
    expect(obj.name) .toEqual('Jillian');
    })
    it('should return employee id', () => {
        const obj = new Manager ('Jillian', 5);
        expect(obj.id) .toEqual(5);
    })
    it('should return employee email', () => {
        const obj = new Manager ('Jillian', 5, 'jillian5@gmail.com');
        expect(obj.email) .toEqual('jillian5@gmail.com');
    })
    it('should return employee role', () => {
        const obj = new Manager ('Jillian', 5, 'jillian5@gmail.com');
        expect(obj.getRole()) .toEqual('Manager');
    })
    it('should return manager office number', () => {
        const obj = new Manager ('Jillian', 5, 'jillian5@gmail.com', 101);
        expect(obj.officeNumber) .toEqual(101);
    })
});