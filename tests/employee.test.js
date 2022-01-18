const Employee = require("../js/lib/employee");

describe('Employee', () => {
    it('should return employee name', () => {
        const obj = new Employee('James');

        expect(obj.name) .toEqual('James');
    })
    it('should return employee id', () => {
        const obj = new Employee('James', 10);
        expect(obj.id) .toEqual(10);
    })
    it('should return employee email', () => {
        const obj = new Employee('James', 10, "james10@gmail.com");
        expect(obj.email) .toEqual('james10@gmail.com');
    })
    it('should return employee role', () => {
        const obj = new Employee('James', 10, 'james10@gmail.com');
        expect(obj.getRole()) .toEqual('Employee');
    });
});
    