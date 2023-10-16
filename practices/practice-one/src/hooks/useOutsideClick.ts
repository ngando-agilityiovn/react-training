import { useCallback, useEffect } from 'react';

export const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, handlerFn: () => void) => {
  // Handle the click outside event
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handlerFn();
      }
    },
    [handlerFn, ref]
  );

  // Handle the key down event
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handlerFn();
      }
    },
    [handlerFn]
  );

  // Add event for the mousedown and keydown events
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref, handlerFn, handleClickOutside, handleKeyDown]);
};
