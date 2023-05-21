import { useEffect } from 'react';
import { useRouter } from 'next/router';

const App = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('userId', 'gd2BZkgPrHZ1KdCv04bq');
    const userId = localStorage.getItem('userId');

    if (!userId) {
      router.push('/login');
    } else {
      router.push('/home');
    }
  }, []);

  return <div>Redirecting...</div>;
};

export default App;