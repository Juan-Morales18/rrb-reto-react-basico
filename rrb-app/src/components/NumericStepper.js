import { useEffect, useState } from "react";
import "../styles/NumericStepper.css";

function NumericStepper({
  initNumber = 1,
  handleRightButton,
  handleLeftButton,
}) {
  const [number, setNumber] = useState(initNumber);

  useEffect(() => {
    setNumber(initNumber);
  }, [initNumber]);

  return (
    <div className="NumericStepper">
      <button
        className="NumericStepper__button NumericStepper__button--left"
        onClick={handleLeftButton}
      >
        -
      </button>
      <span className="NumericStepper__number">{number}</span>
      <button
        className="NumericStepper__button NumericStepper__button--right"
        onClick={handleRightButton}
      >
        +
      </button>
    </div>
  );
}

export { NumericStepper };
