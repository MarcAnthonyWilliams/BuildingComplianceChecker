import { useEffect,useState } from 'react';
//import { put } from '../../../backend/routes/elements';

function App() {
  //dynamic, can be updated at a later time dependiing on setMessage input.
  const [message, setMessage] = useState('');
  //message is current state value which is '' (so its literally blank)
  //setMessage updates message state. 


  useEffect(() => { //run Code when component rendered or updated
    fetch('/api/test') //GET Request to server.js
      .then((response) => response.json()) //parse raw HTTP to JavaScript (JSON -> JS)

      .then((data) => setMessage(data.message))

      .catch((error) => console.error('Error fetching API:', error));
  }, []) //[] ensures that it only happens once (rendering the component by UseEffect) or else would continuously call on API

  
  

  return (
    <div>
      <h1>React + Express</h1>
      <p>API Response: {message}</p>
    </div>
  );
}

export default App
