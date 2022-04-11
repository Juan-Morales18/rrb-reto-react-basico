import { useState } from "react";

function useToggle(initState = false) {
  const [toggle, setToggle] = useState(initState);

  const handleToggle = () => setToggle((prevState) => !prevState);

  return { toggle, handleToggle };
}

export default useToggle;
