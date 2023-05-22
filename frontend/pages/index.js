import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Home from './home';
function App () {
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  }, []);

};

export default App;