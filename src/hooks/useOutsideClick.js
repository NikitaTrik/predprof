import { useEffect } from 'react';

export function useOutsideClick(ref, btnRef, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        console.log(1);
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, btnRef, callback]);
}
