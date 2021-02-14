import AddTodo from './AddTodo';
import TodoList from './TodoList';
import {ThemeContext} from '../contexts/ThemeContext';
import { useContext,useEffect,useState} from 'react';
import './Todo.css';

const ThemePage=()=>{

    const {theme}=useContext(ThemeContext);
    
    


    return(
        
        <div style={{background:theme.background}} id="themepage" className="xl:w-screen xl:h-screen rounded lg:rounded-md lg:w-screen lg:h-screen md:h-screen sm:h-screen">
            <div className="overflow-hidden shadow " style={{background:theme.background}}>
                <div id="mobile"><img src={theme.mobileBgUrl} alt=""/></div>
                <div id="desktop"><img src={theme.desktopBgUrl} alt=""/></div>
                <div className="lg:w-1/3 m-auto md:w-4/5 md:m-auto sm:w-96 sm:m-auto" >
                    <AddTodo/>
                    <div className="flex justify-center  py-4 text-grey-dark">
                        <TodoList/>
                    </div>
                    <div className="flex justify-center  py-4  text-grey-dark">
                        <h2 style={{color:theme.text}}>Drag and drop to reorder list</h2>
                    </div>
                    <div class="attribution pb-4" style={{color:theme.text,backgroundColor:theme.background}}>
                        Challenge by <a style={{color:"hsl(280, 87%, 65%)"}} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                        Coded by <a style={{color:"hsl(280, 87%, 65%)"}} href="#">Gülay Yolcu</a>.
                    </div>
                </div>
                
          </div>
        </div>
        
    )
}
    
    export default ThemePage;