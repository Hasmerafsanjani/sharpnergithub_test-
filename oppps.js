
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}
const employeesData = [
    { name: "John", salary: 60000 },
    { name: "Alice", salary: 55000 },
    { name: "Bob", salary: 70000 },
    { name: "Emily", salary: 48000 },
    { name: "David", salary: 63000 }
];

// Creating 5 objects of Employee class with manually set random values
const employees = employeesData.map(data => new Employee(data.name, data.salary));

// Sorting employees based on salary in descending order using comparators
employees.sort((a, b) => b.salary - a.salary);

// Printing the names of employees sorted in descending order of salary
employees.forEach(employee => console.log(employee.name +"'s salary is ->"+employee.salary));
