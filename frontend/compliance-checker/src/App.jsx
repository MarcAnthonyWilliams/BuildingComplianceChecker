import { useEffect,useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  //message is current state value which is ''
  //setMessage updates message state. 


  useEffect(() => {
    fetch('/api/test')
      .then((response) => response.json())

      .then((data) => setMessage(data.message))

      .catch((error) => console.error('Error fetching API:', error));
  }, []);

  return (
    <div>
      <h1>React + Express</h1>
      <p>API Response: {message}</p>
    </div>
  );
}

export default App
