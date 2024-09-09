import { useEffect } from "react";

function useCloseByClickEscape(setIsOpen, setIsEntered) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        if (setIsEntered) {
          setIsEntered(false);
          setTimeout(() => {setIsOpen(false)}, 300);
        } else {
          setIsOpen(false);
        }
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    }
  }, [setIsOpen])
}

export default useCloseByClickEscape;