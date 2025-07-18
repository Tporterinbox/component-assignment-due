
import React from 'react';
import PersonCard from `./components/PersonCard;`
import Button from `./components/Button`;
import Message  from `./components/Message`;



function App() {
  
  function handleClick() { 
    console.log(Button clicked!); 
  }
  
  function handleSecondClick() { 
    console.log(Second Button clicked !); 
  }
  
  return (
    <>
   <div> 
    <PersonCard name="John Doe" age={30} occupation="Software Engineer"/>
    <PersonCard name="Jane Doe" age={31} occupation="Sales Engineer"/>
    <PersonCard name="Sam Doe" age={30} occupation="Coder"/>
    
    </div>   

    <Button text = "Click here first" onClick={handleClick} />
    <Button text = "Click here second" onClick={handleSecondClick} />
    <Button text= "This is a Button" onClick{() => console.log('this button clicked too')} />
    </>


    <p> "I am still learning< coding/p>
  )
}

export default App
