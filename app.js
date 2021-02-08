new Vue({
    el: '#app',
    
    data: {
        isEditing: false,
        todo: '',
        todos: [],
        selectedTodo: null,
        isEmpty: false,       
    },
    
    methods: {
        
        storeTodo() { 
            if(this.todos.length === 0){
                this.isEmpty = true
            }
                    
            if(this.todo != ""){             
                this.todos.push(this.todo)             
                this.todo = '' 
                this.isEmpty= false;                              
            }                                          
        },

        removeTodo(index) {
            this.todos.splice(index, 1)                  
        },

        updateTodo() {            
            this.todos.splice(this.selectedIndex, 1, this.todo)
            this.todo = ''
            this.isEditing = false
        },

        editTodo(index, todo) {
            this.isEditing = true
            this.todo = todo
            this.selectedIndex = index
        },
        cancelTodo(){            
            this.todos = []
        }
        
    }
})

