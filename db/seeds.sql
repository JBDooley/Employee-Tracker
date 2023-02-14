USE employees_db;

INSERT INTO departments (department_name)
VALUES
("Sales"),
("Accounting"),
("Marketing"),
("H.R.");

INSERT INTO roles (job_title, salary, department_id)
VALUES
("Sales Representative", 75000, 1),
("Accountant", 65000, 2),
("Marketing Coordinator", 90000, 3),
("HR Representative", 60000, 4);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("John", "Smith", 1, 5),
("Jane", "Doe", 2, 6),
("Bob", "Jones", 3, 7),
("Ann", "Green", 4, 8);