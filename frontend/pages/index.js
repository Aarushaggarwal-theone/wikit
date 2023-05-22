import { useEffect } from 'react';
import { useRouter } from 'next/router';

function App () {
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

  return <div className='text-white'>Redirecting...</div>;
};

export default App;