import { useState } from 'react';
import { useRoutes, Link, Navigate } from 'react-router-dom';
import router from './router';

function App() {
  const outlet = useRoutes(router);
  const [count, setCount] = useState(0);

  return <div className='App'>{outlet}</div>;
}

export default App;
