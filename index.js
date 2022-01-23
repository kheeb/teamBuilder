// import inquirer package, filesystem, and all employee classes
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./js/lib/employee');
const Engineer = require('./js/lib/engineer');
const Intern = require('./js/lib/intern');
const Manager = require('./js/lib/manager');


const render = require('./src/generateHTML');

inquirer
const questions = [
        {
            name: 'name',
            type: 'input',
            message: 'What is the employee name?',
            
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the employee id?',
            
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the employee email?',
            
        },
        {
            name: 'role',
            type: 'list',
            message: 'What is the employee role?',
            choices:['Engineer','Manager','Intern'],
        },
        {
            name: 'school',
            type: 'input',
            message: 'What college or university do you attend?',
            when: (answers) => answers.role === 'Intern'
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is your github profile name?',
            when: (answers) => answers.role === 'Engineer',
        },
        {
            name: 'officeNumber',
            type:'input',
            message: 'What is your office number?',
            when: (answers) => answers.role === 'Manager',
        },
        {
            name: 'addMember',
            type: 'confirm',
            message: 'Would you like to add another team member?'
        }

    ];



// add members to team and generate employee lineup
const team = [];
const generateTeam = () => {
    inquirer
        .prompt(questions)
            .then((answers) => {
                // pushes manager + their info to team
                if (answers.role === 'Manager') {
                    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                    team.push(manager);
                }
                 // pushes engineer + their info to team
                if (answers.role === 'Engineer') {
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    team.push(engineer);
                }
                 // pushes info + their info to team
                if (answers.role === 'Intern') {
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    team.push(intern);
                }
                // runs through prompts if user desires adding another member
                if (answers.addMember) {
                    generateTeam();
                } else {
                    // if finished adding members, creates roster of each employee into a team displayed in the console
                    team.forEach((team) => {
                        console.log(team);
                    });
                    fs.writeFile("team.html", render(team), (err) => {
                        if (err) {
                            throw err;
                        }
                        console.log('Successfully created new team HTML!');
                    });
                }
             });
    };
    
generateTeam();