import react from "react";

import styles from "./DropDown.module.css";

class DropDown extends react.Component {
  static styles = styles;
  constructor(props) {
    super(props);

    this.state = {
      extended: false,
    };

    this.toggleAble = true;

    this.toggleExtended = this.toggleExtended.bind(this);
  }

  toggleExtended() {
    this.toggleAble && this.setState((prevState) => ({
      extended: !prevState.extended,
    }));
  }

  render() {
    return (
      <div className={styles.dropdown} onMouseEnter={this.toggleExtended} onMouseLeave={this.toggleExtended}>
        <div className='spacer'></div>
        <div className={styles.button}>
          <p>{this.props.name}</p>
        </div>
        <div className='spacer'></div>
        <div className={styles.container + (this.state.extended ? '' : ' hidden')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DropDown;