
import {TodoContext} from '../contexts/TodoContext';
import { useContext,useState } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import './Todo.css';



const AddTodo=()=>{
    const {theme,toggleTheme}=useContext(ThemeContext);
    const {dispatch}=useContext(TodoContext);
    const [newTodo,setNewTodo]=useState({todoText:""})
    const {todoText}=newTodo;

   const handleKeyPress=(e)=>{
        e.preventDefault();
        
            dispatch({type:'add_todo',todo:{
                todoText
            }})
    }

    const KeyPress=(e)=>{
        if(e.key==="Enter"){
            setNewTodo({...newTodo,[e.target.name]:e.target.value}) 
            e.target.value="";
        }        
    }
    const handleClick=()=>{
        toggleTheme();
      
    }

    return(
      
        <div style={{background:theme.background}} id="addtodo" className=" flex flex-col justify-center m-auto pt-4 text-grey-dark   lg:w-full lg:-mt-72 md:-mt-44 md:w-96 sm:-mt-24 sm:w-96 sm:text-xs">
         
            <header   className="flex items-center justify-between leading-tight p-2 md:p-4 md:flex ">
                <p className="text-lg tracking-widest lg:text-5xl text-white md:text-3xl md:mt-12 font-bold sm:text-xl xs:text-lg ">
                    TODO
                </p>
             
                <div ><img src={theme.icon} className="md:mt-12" onClick={handleClick}/></div>
            </header>
            <div style={{color:theme.text,background:theme.foreground}} className="flex justify-left pb-3 p-4 sm:p-2 rounded rounded-md">
                <ul  className="-mx-1">
                    <form onSubmit={handleKeyPress}>
                        <li className="px-4 py-2 rounded transition-all flex text-md">
                            <div className="flex-none w-10 leading-none pl-1">
                                <label className="lab" style={{marginLeft:"25px"}}><input className="inputCheckbox" type="checkbox"/></label>
                            </div>
                            <div className="flex-grow max-w-full pl-2">
                                <div className="w-full leading-none">     
                                    <input onKeyPress={e=>KeyPress(e)} type="text" name="todoText" className="text-sm w-full pl-4 bg-transparent leading-none focus:outline-none mb-2 -ml-4"  placeholder="Currently typing..."/>
                                </div>
                            
                            </div>
                        </li>
                    </form>  
                </ul> 
            </div>
                  
        </div>

    )
}

export default AddTodo;

            
    