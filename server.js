const inquierer = require("inquirer");
const cTable = require('console.table');
const db = require('./db/class');


const promptUser = () => {
	inquirer.prompt ([
	{
        type: "list",
        name: "choices",
		message: "Select what you would like to do.",
		choices: [
			"View all departments",
			"View all roles",
			"View all employees",
			"Add a department",
			"Add a role",
			"Add an employee",
			"Update an employee role",
			"Update an employee manager",
			"View employees by department",
			"Delete a department",
			"Delete a role",
			"Delete an employee",
			"View department budgets",
			"Exit"
		]
	}
])
	.then((answers) => {
		const { choices } = answers;
		if (choices === "View all departments") {
			showDepartments();
		}
		if (choices === "View all roles") {
			showRoles();
		}
		if (choices === "View all employees") {
			showEmployees();
		}
		if (choices === "Add a department") {
			addDepartment();
		}
		if (choices === "Add a role") {
			addRole();
		}
		if (choices === "Add an employee") {
			addEmployee();
		}
		if (choices === "Update an employee role") {
			updateEmployee();
		}
		if (choices === "Update an employee manager") {
			updateManager();
		}
		if (choices === "View employees by department") {
			viewEmployees();
		}
		if (choices === "Delete a department") {
			deleteDepartment();
		}
		if (choices === "Delete a role") {
			deleteRole();
		}
		if (choices === "Delete an employee") {
			deleteEmployee();
		}
		if (choices === "View department budgets") {
			viewBudgets();
		}
		if (choices === "Exit") {
			connection.end();
		}
	})
};

const showDepartments = () => {
    db.showDepartments()
      .then(([data]) => {
        console.table(data);
      })
      .then(() => promptUser());
  };
  
  const showRoles = () => {
    db.showRoles()
      .then(([data]) => {
        console.table(data);
      })
      .then(() => promptUser());
  };
  
  const showEmployees = () => {
    db.showEmployees()
      .then(([data]) => {
        console.table(data);
      })
      .then(() => promptUser());
  };

addDepartment = () => {
    inquirer.prompt([
    {
        type: "input",
        name : "departmentName",
        message: "What is the name of the department you'd like to add?"
    }
])
};

addRole = () => {
    inquierer.prompt([
    {
        type: "input",
        name: "roleName",
        message: "What is the name of the role you'd like to add?"
    },
    {
        type: "input",
        name: "roleSalary",
        message: "What is the salary of the named role?",
    },
    {
        type: "input",
        name: "roleDepartment",
        message: "What department is the role loacted in?"
    }
])
.then((answers) => {

})
};

addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeFirstName",
            message: "What is the first name of new employee?"
        },
        {
            type: "input",
            name: "employeeLastName",
            message: "What is the last name of new employee?"
        },
        {
            type: "input",
            name: "employeeRole",
            message: "What is the role of new employee?"
        },
        {
            type: "input",
            name: "employeeManager",
            message: "Who is the manager of new employee?"
        },
    ])
    .then((answers) => {

    })
};



updateManager = () => {
};

viewEmployees = () => {

};

deleteDepartment = () => {
}
deleteRole = () => {
};
deleteEmployee = () => {
};
viewBudgets = () => {
};