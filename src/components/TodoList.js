
//import Todo from './Todo';
import {useContext,useState,useEffect} from 'react';
import {TodoContext} from '../contexts/TodoContext';
import {ThemeContext} from '../contexts/ThemeContext';
import './Todo.css';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';
import classNames from 'classnames';



const Todo=({todo,index})=>{
  const {todos,dispatch}=useContext(TodoContext);
  const {theme}=useContext(ThemeContext);
  const [checked,setChecked]=useState(false);

  const onCheckedItem=(e)=>{       
      const {checked}=e.target;
      
      if(checked){
          //setChecked(true);
          todo.isComplete=true;
      }
      if(!checked){
          //setChecked(false);
          todo.isComplete=false;
      }
  } 

 useEffect(()=>{
    
  },[checked]);
  

  return (
      <Draggable key={index} draggableId={index+''} index={index}>

      {
          (provided)=>(<div ref={provided.innerRef} {...provided.draggableProps}
              {...provided.dragHandleProps}>
              <li key={todo.id} style={{color:theme.text}} id="todo" className="TodoItem w-full leading-none lg:text-md md:text-xs md:w-96 sm:w-96">
                  <div className="TodoItem flex flex-wrap justify-between items-center w-full py-4 pl-8 sm:pl-6">
                     
                      <div id="group" className="md:break-words"><label><input id="xd" type="checkbox" onClick={e=>onCheckedItem(e)} className="option-input checkbox text-wrap mr-4"/><span id="todospan" className={classNames({"Todo-complete":todo.isComplete})}>{todo.todoText}</span></label></div>
                  
                      <svg onClick={() => dispatch({ type: 'delete_todo', id: todo.id })} style={{color:theme.completed}} className="delete-button mr-8 fill-current w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                      </svg>

                  </div>
              </li>
              </div>
          )
      }
      
      </Draggable>
     
  )
}


  const TodoList=()=>{

  const [status,setStatus]=useState("all");

  const {theme}=useContext(ThemeContext);
  const {todos}=useContext(TodoContext);
  const [filteredTodos,setFilteredTodos]=useState([...todos]);

    useEffect(() => {
      filterHandler();
    }, [todos,status]);

    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.isComplete === true));
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.isComplete === false));
          break;
        case "all":
          setFilteredTodos(todos);
          break;
        default:setFilteredTodos(todos);break;
      }
    };

    const sawItem=(sawType)=>{
      setStatus(sawType);
    }
  

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

    const clearCompleteItems=()=>{
        
        setFilteredTodos(todos.filter(i => i.isComplete === false || !i.isComplete));
        const arr=todos.filter(i => i.isComplete === true || i.isComplete);
        const willDelete = arr.filter(value => todos.includes(value));
        willDelete.map((a)=>{
            todos.splice(todos.indexOf(a),1);
        });   
    }

    const onDragEnd=(result)=>{
      const {destination,source,reason}=result;
      if(!destination || reason==='CANCEL'){
        return;
      }

      if(destination.droppableId===source.droppableId && destination.index===source.index){
        return;
      }

      const filteredTodos=Object.assign([],todos);
      const droppedTodo=filteredTodos[source.index];

      todos.splice(source.index,1);
      todos.splice(destination.index,0,droppedTodo);
     

      setFilteredTodos(todos)
    }
     
      

    return(
                <div style={{color:theme.text,background:theme.foreground}} id="todolist" className="flex justify-center mt-4 lg:w-full xl:w-full xl:text-xl rounded lg:text-lg md:w-96 md:text-sm lg:rounded-lg md:rounded-lg sm:w-96 sm:text-xs">
                   
                    <div className="flex items-center justify-left w-full">
                      <div className="container">

                       <DragDropContext onDragEnd={onDragEnd}>
                          <div className="flex justify-center ">
                                <div style={{color:theme.text,background:theme.foreground}}  className="shadow-xl lg:w-full">
                                    <ul  className="divide-y divide-gray-300 divide-opacity-20 rounded-b-xl w-full">
                                      <Droppable droppableId='dp1'>
                                       
                                          {
                                            (provided)=>(<div ref={provided.innerRef}{...provided.droppableProps}>
                                                  { 
                                            filteredTodos.map((todo,index) => (
                                                <Todo todo={todo} key={index} onClick={onItemClicked(todo)} index={index}/>
                                            ))
                                          }
                                          {provided.placeholder}
                                          </div>)}
                                      </Droppable>
                                         
                                         <li style={{color:theme.text}} id="bottom" className="px-4 py-4 transition-all flex justify-between align-items text-xs rounded-b-lg md:text-xs">
                                           
                                                <span>{todos.length} items left</span>
                                                <div className="flex justify-center">
                                                    <a href="#!" style={{color:theme.all}} onClick={() =>sawItem("all")} className="m1 md:text-xs">All</a>
                                                    <a href="#!" style={{color:theme.link}} onClick={() =>sawItem("active")} className="m2 mx-2 md:text-xs">Active</a>
                                                    <a href="#!" style={{color:theme.link}} onClick={() =>sawItem("completed")} className="m2 mx-2 md:text-xs">Completed</a>
                                                </div>
                                                <button style={{color:theme.link}} onClick={clearCompleteItems} className="flex justify-right m2 mx-2 md:text-xs">Clear Completed</button>
                                                
                                            
                                        </li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                            </DragDropContext>
                      </div>
                    </div>
                </div>
    )
}

export default TodoList;