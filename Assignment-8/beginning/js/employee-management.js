/*eslint-env browser*/

var employeeList = [];
employeeList[0] = ["Manisha Rangaraju", "Software Developer", 6193];
employeeList[1] = ["Steffen", "Director", 2374];
employeeList[2] = ["Mathias", "Manager", 1235];
employeeList[3] = ["Yun Suk", "Mentor", 7896];
employeeList[4] = ["Alex", "VP", 4449];

var buttonList = [];

//helper function
var $ = function(id) {
  "use strict";
  return window.document.getElementById(id);
};

var table, tbody, cell, row, th, button;

var employeeName =      $("name");
var employeeTitle =     $("title");
var employeeExtension = $("extension");


var createTable = function(tableHeadings) {
  "use strict";
  table = document.createElement('table');
  table.id = "employees";
  var thead = document.createElement('thead');
  row=document.createElement("tr");
  tableHeadings.forEach(function (heading) {
      cell = document.createElement('td');
      cell.appendChild(document.createTextNode(heading));
      row.appendChild(cell);
  });
  thead.appendChild(row);

  table.appendChild(thead);
  document.body.appendChild(table);
  tbody = document.createElement("tbody");
};

var loadTable = function (tableData) {
    "use strict";
    for (var x=0;x<tableData.length;x++) {
        var td;
        var newRow = table.insertRow(-1);

        button = document.createElement('input');
        button.type = "button";
        button.className = "deleteButton";
        button.value = "delete";
        button.id="deleteButton"+[x];
        buttonList.push(button.id);

        button.addEventListener('click',function(e){
            var deleteRow = this.closest('tr').rowIndex;
            deleteEmployeeRow(deleteRow);
        });

        for (var i=0;i<tableData[x].length;i++) {
            var cell = newRow.insertCell(i);
            cell.innerHTML = tableData[x][i];
        }

        newRow.insertCell().appendChild(button);   
        tbody.appendChild(newRow); 
    };
    table.appendChild(tbody);
    updateEmployeeCount();
};


var deleteEmployeeRow = function(rowIndex)  {
    "use strict";
    table.deleteRow(rowIndex);
    employeeList.splice(rowIndex-1, 1);
    updateEmployeeCount();
};


var updateEmployeeCount = function()  {
    "use strict";
    var employeeCount = $("employeeCount");
    employeeCount.innerHTML = "Showing " + employeeList.length + " employees";
};


var isValid = function()  {
  "use strict";

  var msg = "";
  var spanList = document.getElementsByTagName("span");

  // We need to make sure to clear the error messages before validating the input fields.
  while(spanList.length > 0) {
    $("employeeForm").removeChild(spanList[0]);
  }

  /**
   * Checking if all fields are valid or displaying an error message.
   * If all field inputs are valid then sending the new Employee data to addEmployee 
   */
 
  if(employeeName.value == "" || employeeName.value == null 
  || !/^[a-zA-Z]+$/.test(employeeName.value)) {
      msg = "<span id='errorMsg'>Employee name must be a non empty alphanumeric characters</span>";
      if(employeeName.nextElementSibling.tagName !== "SPAN") {
          employeeName.insertAdjacentHTML('afterend', msg);
      }
  }

  if(employeeTitle.value == "" || employeeTitle.value == null
  || !/^[a-zA-Z]+$/.test(employeeTitle.value)) {
      msg = "<span id='errorMsg'>Employee title must be valid</span>";
      if(employeeTitle.nextElementSibling.tagName !== "SPAN")
          employeeTitle.insertAdjacentHTML('afterend', msg);
  }
  
  if(employeeExtension.value == "" || employeeExtension.value == null 
  || /^[a-zA-Z]+$/.test(employeeExtension.value)) {
      msg = "<span id='errorMsg'>Employee extension must be a number</span>";
      if(employeeExtension.nextElementSibling.tagName !== "SPAN")
          employeeExtension.insertAdjacentHTML('afterend', msg);
  }

  if(msg == "") {
    addNewEmployee([employeeName.value,employeeTitle.value,employeeExtension.value]);
  }       
};

var addNewEmployee = function(newEmployee) {
    "use strict";
    employeeList.push(newEmployee);
    loadTable([newEmployee]);
    updateEmployeeCount();
}

var init = function() {
  var headings =  ["name", "title", "extension", ""];
  createTable(headings);
  loadTable(employeeList)
}



init();
$("addEmployee").addEventListener("click", isValid);