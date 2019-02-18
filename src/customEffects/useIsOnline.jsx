import { useState, useEffect } from 'react';

// fetch online status from the server (fake lol)
export function checkOnlineStatus(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(id % 2 === 0);
    }, 1000);
  });
}

export function useIsOnline(id) {
  const [isOnline, setIsOnline] = useState(null);

  const onCheckIfOnline = () => {
    checkOnlineStatus(id)
      .then(data => setIsOnline(data));
  };

  useEffect(() => {
    onCheckIfOnline();
  }, [id]);

  return isOnline;
}
