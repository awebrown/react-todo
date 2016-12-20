let $ = require('jquery');

module.exports = {
 //  setTodos: function(todos) {
 //    if($.isArray(todos)){
 //        localStorage.setItem('todos', JSON.stringify(todos));
 //        return todos;
 //    }
 //  },
 //  getTodos: function() {
 //    let strTodos = localStorage.getItem('todos');
 //    let todos = [];
 //
 //    try{
 //      todos = JSON.parse(strTodos)
 //    } catch(e) {
 //
 //    }
 //   return $.isArray(todos) ? todos : []
 // },
 filterTodos: function(todos, showCompleted, searchText) {
   let filteredTodos = todos;

   //Filter by showCompleted
   filteredTodos = filteredTodos.filter((todo) => {
     return !todo.completed || showCompleted;
   })

  //Filter by searchText
   filteredTodos = filteredTodos.filter((todo) => {
     let text = todo.text.toLowerCase();
     return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1;
   })

   //Sort todos with non-completed first
   // -1 returns a before b, 1 returns b before a, return 0 does nothing
   filteredTodos.sort((a, b) => {
     if(!a.completed && b.completed) {
        return -1;
     } else if(a.completed && !b.completed) {
       return 1;
     } else {
       return 0;
     }
   })
   return filteredTodos;
 }
};
