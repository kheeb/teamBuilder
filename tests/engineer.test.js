const Engineer = require('../js/lib/engineer');

describe('Engineer', () => {
    it('should return engineer name', () => {
    const obj = new Engineer ('Jordan');
    expect(obj.name) .toEqual('Jordan');
    })
    it('should return engineer id', () => {
        const obj = new Engineer ('Jordan', 15);
        expect(obj.id) .toEqual(15);
    })
    it('should return engineer email', () => {
        const obj = new Engineer ('Jordan', 15, 'jordan15@gmail.com');
        expect(obj.email) .toEqual('jordan15@gmail.com');
    })
    it('should return employee roles', () => {
        const obj = new Engineer ('Jordan', 15, 'jordan15@gmail.com');
        expect(obj.getRole()) .toEqual('Engineer');
    })
    it('should return engineer github', () => {
        const obj = new Engineer ('Jordan', 15, 'jordan15@gmail.com', "https://github.com/jordanj");
        expect(obj.github) .toEqual('https://github.com/jordanj')
    })

})