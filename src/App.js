
import ThemePage from './components/ThemePage';
import ThemeContextProvider from './contexts/ThemeContext';
import TodoContextProvider from './contexts/TodoContext';



const App=()=>{
  return (
    <ThemeContextProvider>
       <TodoContextProvider>
          <ThemePage/>
      </TodoContextProvider>
    </ThemeContextProvider>
 
    
        
 
  );
}

export default App;
