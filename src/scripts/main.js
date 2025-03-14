'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const list = document.querySelectorAll('[data-salary]');
  const salaryParent = list[0]?.parentElement;

  function sortList(employeeList) {
    return Array.from(employeeList).sort(
      (a, b) => convertToNumber(b) - convertToNumber(a),
    );
  }

  function convertToNumber(item) {
    return Number(item.getAttribute('data-salary').replace(/[$,]/g, ''));
  }

  const sortedItems = sortList(list);

  salaryParent.innerHTML = '';
  sortedItems.forEach((item) => salaryParent.appendChild(item));

  // console.log(sortedItems.map((li) => li.getAttribute('data-salary')));

  function getEmployees(employeeList) {
    return Array.from(employeeList).map((person) => {
      return {
        name: person.textContent.trim(),
        position: person.getAttribute('data-position'),
        salary: convertToNumber(person),
        age: parseInt(person.getAttribute('data-age'), 10),
      };
    });
  }

  getEmployees(sortedItems);

  // const employees = getEmployees(sortedItems);
  // console.log(employees);
});
