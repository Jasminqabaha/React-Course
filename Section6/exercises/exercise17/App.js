import React from 'react';

// don't change the Component name "App"
export default function App() {
    const[col,setCol] = React.useState('white');
    
    function handleClick(){
        setCol(prevCol=>{
            if(prevCol==='white')
            return 'red';
            else return 'white';
        }
        
    );
        
    }
    
    
    return (
        <div>
            <p style={{
                color: col
            }} >Style me!</p>
            <button onClick ={handleClick}>Toggle style</button>
        </div>
    );
}
