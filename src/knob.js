import React from "react";

import cn from "./class-names";

import styles from "./knob.module.scss";

const Knob = React.forwardRef(
  ({ isDisabled, isSelected, onSelect, children, value }, ref) => {
    const className = isDisabled
      ? `${styles.disabled} toggle__knob--disabled`
      : isSelected
      ? `${styles.active} toggle__knob--active`
      : "";

    return (
      <span
        className={cn(styles.Knob, className, "toggle__knob")}
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
