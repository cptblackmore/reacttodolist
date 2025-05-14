import { useEffect } from "react";

function useCloseByClickOutside(ref, setIsOpen, setIsEntered) {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (setIsEntered) {
          setIsEntered(false);
          setTimeout(() => {
            setIsOpen(false);
          }, 300);
        } else {
          setIsOpen(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, setIsOpen]);
}

export default useCloseByClickOutside;
