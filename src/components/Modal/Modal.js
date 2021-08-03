import { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    modalToggle: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.keyDownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyDownHandler);
  }

  keyDownHandler = (evt) => {
    const { modalToggle } = this.props;
    if (evt.code === "Escape") {
      modalToggle();
    }
  };

  clickHandler = (evt) => {
    const { modalToggle } = this.props;
    if (evt.target === evt.currentTarget) {
      modalToggle();
    }
  };

  render() {
    const { url } = this.props;
    return (
      <div onClick={this.clickHandler} className="Overlay">
        <div className="Modal">
          <img src={url} alt="full size" />
        </div>
      </div>
    );
  }
}

export default Modal;
