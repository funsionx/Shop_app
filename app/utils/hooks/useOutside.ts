import { useEffect, useRef, useState } from "react";
import { TypeOut } from "../../interfaces";

export const useOutside = (initIsShow: boolean): TypeOut => {
  const [isShow, setIsShow] = useState(initIsShow);
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isShow, setIsShow };
};
