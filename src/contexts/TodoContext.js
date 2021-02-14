import {createContext,useEffect,useReducer,useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export const TodoContext=createContext();

const TodoContextProvider=(props)=>{

    const reducer=(todos,action)=>{
        switch(action.type){
            case 'add_todo':
                return [...todos,{
                    id:uuidv4(),
                    todoText:action.todo.todoText,
                    isComplete:false
                }]

            case 'delete_todo':
                
                return todos.filter(todo=>todo.id!==action.id);
                

            //case 'active_todo':
                
            default:
                return todos;
        }
    }

    

    const [todos,dispatch]=useReducer(reducer,[
        {id:uuidv4(),todoText:'Complete online JavaScript Course',isComplete:false},
        {id:uuidv4(),todoText:'Jog around  the park 3x',isComplete:false},
        {id:uuidv4(),todoText:'10 minutes meditation',isComplete:false},
        {id:uuidv4(),todoText:'Read for 1 hour',isComplete:false},
        {id:uuidv4(),todoText:'Pick up groceries',isComplete:false},
        {id:uuidv4(),todoText:'Complete Todo App on Frontend Mentor',isComplete:false}
    ],
       /*  ()=>{
            const todos=localStorage.getItem('todos');
            return todos?JSON.parse(todos):[];
        } */
    )

  /*   useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    }) */
   ;

    return(
        <TodoContext.Provider value={{todos,dispatch}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;