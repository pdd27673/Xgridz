"use strict";

// document.addEventListener('DOMContentLoaded', function (event) {
function getData() {
  //sets this.row with the row in the html gets the value of row
  var row = parseInt(document.getElementById('row').value); //sets this.column with the row in the html and gets the value of column

  var column = parseInt(document.getElementById('column').value); //sets this.questionsNumber

  var questionsNumber = parseInt(document.getElementById('questionsNumber').value); //sets the the variables and put in local storage, so linked page can access data of row and colum

  localStorage.setItem('Row', row);
  localStorage.setItem('Column', column);
  localStorage.setItem('questionNumber', questionsNumber);
}

function putData() {
  //this will get the row inputted and put the data to be printed out in rowData html
  document.getElementById('rowData').innerHTML = ' ' + parseInt(document.getElementById('row').value); //this will get the column inputted and put the data to be printed out in columnData html

  document.getElementById('columnData').innerHTML = ' ' + parseInt(document.getElementById('column').value);
} // });