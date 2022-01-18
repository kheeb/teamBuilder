const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }

    getOfficeNumber() {
        return Manager.officeNumber;
    }
}

module.exports = Manager