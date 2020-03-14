import React, { Component } from "react";

import cn from "./class-names";
import Knob from "./knob";

import styles from "./toggle.module.scss";

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.toggleRef = React.createRef();
    this.sliderRef = React.createRef();
    this.selectedRef = React.createRef();
    this.state = {
      currentValue: null,
      selectedIndex: 1,
      left: 0,
      width: 0
    };
  }

  setPositionAndWidthOfSlider() {
    if (this.selectedRef && this.selectedRef.current && window) {
      const paddingLeft = parseFloat(
        window
          .getComputedStyle(this.sliderRef.current)
          .getPropertyValue("padding-left")
      );

      const { left, width } = this.selectedRef.current.getBoundingClientRect();
      this.setState({
        left:
          left -
          this.toggleRef.current.getBoundingClientRect().left -
          paddingLeft,
        width
      });
    }
  }

  componentDidMount() {
    this.setPositionAndWidthOfSlider();
  }

  onSelect(index, value) {
    const { selectedIndex } = this.state;

    if (index !== selectedIndex) {
      this.setState({ selectedIndex: index }, this.setPositionAndWidthOfSlider);
      this.props.onChange(value);
    }
  }

  render() {
    const { selectedIndex } = this.state;
    return (
      <div className={cn(styles.Toggle, this.props.className)} ref={this.toggleRef}>
        {React.Children.map(this.props.children, (child, index) => {
          return React.cloneElement(child, {
            ref: this.selectedRef,
            isSelected: index === selectedIndex,
            onSelect: value => this.onSelect(index, value)
          });
        })}
        <div
          className={cn(styles.ToggleSlider, "toggle__slider")}
          ref={this.sliderRef}
          style={{ left: this.state.left, width: this.state.width }}
        />
      </div>
    );
  }
}

export { Knob };
