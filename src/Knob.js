import React from "react";
import cn from "./ClassNames";

import styles from "./Knob.module.scss";

const Knob = React.forwardRef(
  ({ isDisabled, isSelected, onSelect, children, value }, ref) => {
    const className = isDisabled
      ? styles.disabled
      : isSelected
      ? styles.active
      : "";

    return (
      <span
        className={cn(className, styles.Knob)}
        onClick={isDisabled ? null : () => onSelect(value)}
        ref={isSelected ? ref : null}
      >
        {children}
      </span>
    );
  }
);

Knob.defaultProps = {
  isDisabled: false,
  isSelected: false,
  onSelect: null
};

export default Knob;
