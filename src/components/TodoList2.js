
import Todo from './Todo';
import {useContext,useState} from 'react';
import {TodoContext} from '../contexts/TodoContext';
import {ThemeContext} from '../contexts/ThemeContext';


const TodoList=()=>{

  const {theme}=useContext(ThemeContext);
    const {todos}=useContext(TodoContext);

    const [todoss,setTodoss]=useState(todos);

    const [todoSaw,setTodoSaw]=useState('all');

   

    const onItemClicked=(item)=>{
        return (event) => {
          const isComplete = item.isComplete;
          const index = todos.indexOf(item);
          this.setState({
            todos: [
              ...todos.slice(0, index),
              {
                ...item,
                isComplete: !isComplete
              },
              ...todos.slice(index + 1)
            ]
          });
        };
    }

    const selectStatus=()=>{
        let tod=[];
        if (todoSaw === "all") {
            tod = todos; 
        } else if (todoSaw === "active") {
            tod = todos.filter((i) => i.isComplete === false || !i.isComplete);

        } else if (todoSaw === "complete") {
            tod = todos.filter((i) => i.isComplete === true);
        }
        return tod;
    }

    const sawItem=(sawType)=>{
        setTodoSaw(sawType);
      }

      const clearCompleteItems=()=>{ 
        
          const arr=selectStatus();
         
         
          return  arr.filter(i => i.isComplete === false || !i.isComplete)
        
        }
        
      

    return(
                <div style={{color:theme.text,background:theme.foreground}} className="flex justify-center mt-6">
                   
                    <div className="flex items-center justify-left rounded rounded-md w-full">
                      <div className="container">

                       
                          <div className="flex justify-center">
                                <div style={{color:theme.text,background:theme.foreground}}  className="shadow-xl rounded-lg w-full">
                                    <ul  className="divide-y divide-gray-300 divide-opacity-20 rounded-b-xl w-full">
                                    
                                     {
                                       
                                       selectStatus().map((todo) => (
                                            <Todo todo={todo} key={todo.id} onClick={onItemClicked(todo)}/>
                                        ))
                                      }
                                         
                                         <li style={{color:theme.text}} className="px-4 py-4 transition-all flex justify-between align-items text-xs rounded-b-lg">
                                           
                                                <span>{todos.length} items left</span>
                                                <div className="flex justify-center">
                                                    <a href="#!" style={{color:theme.all}} onClick={() =>sawItem("all")} className="mx-2">All</a>
                                                    <a href="#!" style={{color:theme.link}} onClick={() =>sawItem("active")} className="mx-2">Active</a>
                                                    <a href="#!" style={{color:theme.link}} onClick={() =>sawItem("complete")} className="mx-2">Completed</a>
                                                </div>
                                                <button style={{color:theme.link}} onClick={clearCompleteItems} className="flex justify-right">Clear Completed</button>
                                                
                                            
                                        </li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                      </div>
                    </div>
                </div>
    )
}

export default TodoList;