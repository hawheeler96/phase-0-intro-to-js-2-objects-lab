// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}
const updatedEmployee = updateEmployeeWithKeyAndValue (
    employee,
    "streetAddress",
    "13 Broadway"
);

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
    }

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee
}
const dUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue (employee, "name", "Holly");

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee
}