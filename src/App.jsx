import React from 'react';
import PersonCard from './components/PersonCard.jsx';
import Button from './components/Button.jsx';
import Message from './components/Message.jsx';

function App() {
  function handleClick() { 
    console.log("Button clicked!"); 
  }

  function handleSecondClick() { 
    console.log("Second Button clicked!"); 
  }

  return (
    <>
      <div> 
        <img src="/coffee.jpg" alt="Cup of coffee" width="300" />

        <div>
          <PersonCard name="John Doe" age={30} occupation="Software Engineer" />
          <PersonCard name="Jane Doe" age={31} occupation="Sales Engineer" />
          <PersonCard name="Sam Doe" age={30} occupation="Coder" />
        </div>

        <div>
          <Button text="Click here first" onClick={handleClick} />
          <Button text="Click here second" onClick={handleSecondClick} />
          <Button text="This is a Button" onClick={() => console.log('This button clicked too')} />
        </div>
        
        <Message text="Hello from the message component!" />

        <p>I am still learning coding</p>
      </div>   
    </>
  );
}

export default App;
