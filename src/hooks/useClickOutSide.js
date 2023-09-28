import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(mode = "button") {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        //nếu có node.current và không click vào chính nó(tức là ngoài màn hình chẳng hạn) sẽ set false để đóng lại , click vào chính node đó thì không bị đóng
        nodeRef.current &&
        !nodeRef.current.contains(e.target)
        // !e.target.matches(mode)
      ) {
        //click vào element không bao gồm dropRef.current tức là ngoài màn hình thì setShow(false); để ẩn đi
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutSide);

    return () => {
      //cleanup function
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  return {
    show,
    setShow,
    nodeRef,
  };
}
