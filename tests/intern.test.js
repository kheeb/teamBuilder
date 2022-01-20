const Intern = require('../js/lib/intern');

describe('Intern', () => {
    it('should return intern name', () => {
        const obj = new Intern ('Janice');
        expect(obj.name) .toEqual('Janice');
    })
    it('should return intern id', () => {
        const obj = new Intern ('Janice', 20);
        expect(obj.id) .toEqual(20);
    })
    it('should return intern email', () => {
        const obj = new Intern ('Janice', 20, 'janice20@gmail.com');
        expect(obj.email) .toEqual('janice20@gmail.com');
    })
    it('should return employee role', () => {
        const obj = new Intern ('Janice', 20, 'janice20@gmail.com');
        expect(obj.getRole()) .toEqual('Intern')
    })
    it('should return intern school', () => {
        const obj = new Intern ('Janice', 20, 'janice20@gmail.com', 'Columbia University');
        expect(obj.school) .toEqual('Columbia University');
    })
})