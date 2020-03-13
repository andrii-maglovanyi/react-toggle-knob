import React from "react";
import cn from "./ClassNames";

import styles from "./Option.module.scss";

const Option = React.forwardRef(
  ({ isDisabled, isSelected, onSelect, children, value }, ref) => {
    const className = isDisabled
      ? styles.disabled
      : isSelected
      ? styles.active
      : "";

    return (
      <span
        className={cn(className, styles.Option)}
        onClick={isDisabled ? null : () => onSelect(value)}
        ref={isSelected ? ref : null}
      >
        {children}
      </span>
    );
  }
);

Option.defaultProps = {
  isDisabled: false,
  isSelected: false,
  onSelect: null
};

export default Option;
