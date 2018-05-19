window.addEventListener('load', function(e) {
    console.log('document loaded');
    
     init();
   });

   function init() {
     document.expenseForm.lookup.addEventListener('click', function(event) {
       event.preventDefault();
       var expenseId = document.expenseForm.expenseId.value;
       if (!isNaN(expenseId) && expenseId > 0) {
         getExpense(expenseId);
       }
     })
     
     document.addExpenseForm.addExpense.addEventListener('click', function(event) {
       event.preventDefault();
       var expense = {
               category : addExpenseForm.category.value,
               amount : addExpenseForm.amount.value,
               expected : addExpenseForm.expected.value,
               impulse : addExpenseForm.impulse.value
       };
       
       var expenseJson = JSON.stringify(expense); // Convert JS object to JSON
                                                   // string
       if(expenseJson !== undefined) {
           addExpense(expenseJson);
       }
     })
     loadExpenseIndex();
   }

   function getExpense(expenseId) {
       console.log('in getExpense');
       var xhr = new XMLHttpRequest();
       console.log(xhr.readyState);
       xhr.open('GET', 'api/expenses/' + expenseId, true);
       console.log(xhr.readyState);
       xhr.onreadystatechange = function() {
           if(xhr.readyState === 4) {
               if (xhr.status === 200) {
                   console.log(xhr.readyState);
                   var expense = xhr.responseText;
                   console.log(expense);
                   var expenseObj = JSON.parse(expense);
                   console.log(expenseObj);
                   console.log(expenseObj.category + " " + expenseObj.amount + " " + expenseObj.expected + " " + expenseObj.impulse);
                   displayExpense(expenseObj);
// getCast(expenseObj.id);
               } else {
                   alert("Error: " + xhr.status + " " + xhr.statusText);
               }
           }
       };
       xhr.send(null);
   }
// function getCast(filmId) {
// console.log('in getCast');
// var xhr = new XMLHttpRequest();
// console.log(xhr.readyState);
// xhr.open('GET', 'api/films/' + filmId + "/actors", true);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function() {
// if(xhr.readyState === 4) {
// if (xhr.status === 200) {
// console.log(xhr.readyState);
// var cast = xhr.responseText;
// console.log(cast);
// var castObj = JSON.parse(cast);
// for (let index = 0; index < castObj.length; index++) {
// console.log(castObj[index].firstName + " " + castObj[index].lastName);
// }
// displayCast(castObj)
// } else {
// alert("Error: " + xhr.status + " " + xhr.statusText);
// }
// }
// };
// xhr.send(null);
// }

   function displayExpenses(expenseObj) {
       var dataDiv = document.getElementById('indexData');
       dataDiv.textContent = '';
       var list = document.createElement('ul');
       
       // loop over data and add info to list items
       
       expenseObj.forEach(el => {
           var category = document.createElement('li');
           category.textContent = el.category;
           list.appendChild(category);
           
           var amount = document.createElement('li');
           amount.textContent = el.amount;
           list.appendChild(amount);
           
           var expected = document.createElement('li');
           expected.textContent = el.expected;
           list.appendChild(expected);
           
           var impulse = document.createElement('li');
           impulse.textContent = el.impulse;
           list.appendChild(impulse);
           
       });
       dataDiv.appendChild(list);
   }
   
   function displayExpense(expense) {
     var dataDiv = document.getElementById('expenseData');
     dataDiv.textContent = '';
     for(var prop in expense) {
         if(prop === 'category') {
             var category = document.createElement('h2');
             category.textContent = expense.category;
             dataDiv.appendChild(category);
         } else {
             var list = document.createElement('ul');
             if(prop === 'amount') {
                 var amount = document.createElement('li');
                 amount.textContent = "Amount: 	$" + expense.amount;
                 dataDiv.appendChild(amount);
             }
             if(prop === 'expected') {
                 var expected = document.createElement('li');
                 expected.textContent = "Expected: 	" + expense.expected;
                 dataDiv.appendChild(expected);
             }
             if(prop === 'impulse') {
                 var impulse = document.createElement('li');
                 impulse.textContent = "Impulse:	 " + expense.impulse;
                 dataDiv.appendChild(impulse);
             }
             if(prop === 'date') {
                 var date = document.createElement('li');
                 date.textContent = "Date: 	" + expense.date.substring(0,10);
                 dataDiv.appendChild(date);
             }
         }
     }
   }

       
       function loadExpenseIndex() {
    	     var expenses = {};
             var xhr = new XMLHttpRequest();
             xhr.open('GET', 'api/expenses');
             xhr.onreadystatechange = function(){
               if (this.readyState === 4) {
                 if (this.status === 200) {
                   expenses = JSON.parse(this.responseText);
                   console.log(expenses.length);
                   displayExpenseIndex(expenses);
                 }
               }
             };
             xhr.send(expenses);
           }


           function displayExpenseIndex(expenses) {
             var div = document.getElementById('indexData');
             var table = document.createElement('table');
             div.appendChild(table);
             for(let index = 0; index < expenses.length; index++){
               var tr = document.createElement('tr');
               table.appendChild(tr);
               
               var td = document.createElement('td');
               td.textContent = expenses[index].id;
               tr.appendChild(td);
               
               var td = document.createElement('td');
               td.textContent = expenses[index].category;
               tr.appendChild(td);
               
               var td = document.createElement('td');
               td.textContent = "$" + expenses[index].amount;

               var td = document.createElement('td');
               td.textContent = "Date: " + expenses[index].date.substring(0,10);
               
               tr.addEventListener('click',function(evt){
                 var cell = evt.target;
                 console.log(cell.firstElementChild);
                 var eid = cell.parentElement.expenseId;
                 if (!isNaN(eid) && fid > 0) {
                   getExpense(eid);
                 }
               });
             };

           }
           
           var data = '';
           function addExpense(expense) {
               var xhr = new XMLHttpRequest();
               xhr.open('POST', 'api/expenses', true);
               
               xhr.setRequestHeader("Content-type", "application/json"); // Specify
                                                                        // JSON
                                                                       // request
                                                                      // body
               
               xhr.onreadystatechange = function() {
                   if (xhr.readyState === 4 ) {
                       if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or
																		// Created
                           data = JSON.parse(xhr.responseText);
                           console.log(data);
                           displayExpense(data);
                       }
                       else {
                           console.log("POST request failed.");
                           console.error(xhr.status + ': ' + xhr.responseText);
                       }
                   }
               };
               
              var userObjectJson = JSON.stringify(data); // Convert JS object
															// to JSON string
              
              xhr.send(data);

           }
           
           
       
   