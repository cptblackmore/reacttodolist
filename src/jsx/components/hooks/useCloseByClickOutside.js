import { useEffect } from "react";

function useCloseByClickOutside(ref, setIsOpen) {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    }
  }, [ref, setIsOpen])
}

export default useCloseByClickOutside;