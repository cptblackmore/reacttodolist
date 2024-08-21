import { useEffect } from "react";

function useCloseByClickEscape(setIsOpen) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    }
  }, [setIsOpen])
}

export default useCloseByClickEscape;