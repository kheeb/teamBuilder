// links other employee type js files
const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');

class Employee {
// information requested from all employees
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }

    getName() {
        
    }

    getId() {

    }

    getEmail() {

    }

    getRole() {
        return 'Employee'
    }


}